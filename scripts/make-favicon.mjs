// Generate the site favicon set from the AM monogram source artwork.
//
// Source is a logo *presentation mockup*: a 2816x1536 render containing the
// icon card, a caption ("512x512 px"), a second 48px preview and its caption.
// Only the monogram itself may ship, so this crops to the measured glyph
// bounding box rather than to the image centre -- the artwork sits right of
// and above the image centre.
//
// The glyph is then composited onto a generated square rather than reusing the
// mockup's card interior. That gives exact centring, uniform padding, and a
// background free of the JPEG's gradient and compression noise.
//
// Usage: node scripts/make-favicon.mjs
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SOURCE =
  "C:/Users/metwaly/OneDrive - Haaga-Helia Oy Ab/Side Projects/Personal Projects/Personal Brand and Social Media/Personal Brand 2026/Personal Brand Material/Gemini_Generated_Image_8yd2of8yd2of8yd2.jpg";

const OUT = "public";
const SCRATCH = "scratch/favicon-preview";

// Measured from the source (see Step 1 report): the dark "AM" glyph occupies
// x 957..1848, y 416..980. Nothing outside this box is part of the mark.
const GLYPH = { left: 957, top: 416, width: 891, height: 564 };

// Master canvas. The glyph fills ~87% of the width, which is what keeps the
// letters readable once they are scaled to 16px.
const MASTER = 1024;

// Card interior colour, sampled from the source. Deliberately a touch cooler
// than pure white so the icon retains a faint edge against Google's white
// result chip.
const BG = { r: 0xf5, g: 0xf4, b: 0xf9, alpha: 1 };

const PNG_SIZES = [16, 32, 48, 96, 192, 512];
const ICO_SIZES = [16, 32, 48];
const SHARPEN_AT_OR_BELOW = 32;

mkdirSync(OUT, { recursive: true });
mkdirSync(SCRATCH, { recursive: true });

/** Crop the glyph and centre it on a flat square. */
async function buildMaster() {
  const glyph = await sharp(SOURCE).extract(GLYPH).toBuffer();

  return sharp({
    create: { width: MASTER, height: MASTER, channels: 3, background: BG },
  })
    .composite([
      {
        input: glyph,
        left: Math.round((MASTER - GLYPH.width) / 2),
        top: Math.round((MASTER - GLYPH.height) / 2),
      },
    ])
    .png()
    .toBuffer();
}

/**
 * Resize the master to one output size.
 *
 * Lanczos preserves the thin violet edge highlight that plain box filtering
 * smears away. Small sizes get a light unsharp pass because a 891px-wide
 * glyph reduced to 16px loses all edge definition otherwise.
 */
async function render(master, size) {
  let pipeline = sharp(master).resize(size, size, {
    kernel: sharp.kernel.lanczos3,
    fit: "fill",
  });

  if (size <= SHARPEN_AT_OR_BELOW) {
    pipeline = pipeline.sharpen({ sigma: 0.6, m1: 0.6, m2: 0.4 });
  }

  // flatten() drops any alpha onto BG; sharp strips EXIF unless asked to keep it.
  return pipeline.flatten({ background: BG }).png({ compressionLevel: 9 }).toBuffer();
}

const master = await buildMaster();

const rendered = new Map();
for (const size of PNG_SIZES) {
  const buf = await render(master, size);
  rendered.set(size, buf);
  writeFileSync(join(OUT, `icon-${size}.png`), buf);
}

// Apple touch icon: square corners, no alpha channel. iOS applies its own mask.
const apple = await sharp(master)
  .resize(180, 180, { kernel: sharp.kernel.lanczos3, fit: "fill" })
  .flatten({ background: BG })
  .removeAlpha()
  .png({ compressionLevel: 9 })
  .toBuffer();
writeFileSync(join(OUT, "apple-touch-icon.png"), apple);

// Multi-size ICO. sharp has no ICO encoder, so png-to-ico packs the PNGs.
const ico = await pngToIco(ICO_SIZES.map((s) => rendered.get(s)));
writeFileSync(join(OUT, "favicon.ico"), ico);

// --- Preview composites for review (outside public/, never published) ---
async function preview(size, bgHex, label) {
  const zoom = size * 8;
  const bg = { r: parseInt(bgHex.slice(1, 3), 16), g: parseInt(bgHex.slice(3, 5), 16), b: parseInt(bgHex.slice(5, 7), 16) };
  const pad = Math.round(zoom * 0.25);

  const icon = await sharp(rendered.get(size))
    .resize(zoom, zoom, { kernel: sharp.kernel.nearest, fit: "fill" })
    .toBuffer();

  await sharp({
    create: { width: zoom + pad * 2, height: zoom + pad * 2, channels: 3, background: bg },
  })
    .composite([{ input: icon, left: pad, top: pad }])
    .png()
    .toFile(join(SCRATCH, `icon-${size}-on-${label}.png`));
}

for (const size of [16, 32]) {
  await preview(size, "#FFFFFF", "white");
  await preview(size, "#F7F7F2", "f7f7f2");
}

console.log(`make-favicon: wrote ${PNG_SIZES.length} PNGs, apple-touch-icon.png and favicon.ico to ${OUT}/`);
console.log(`make-favicon: wrote review composites to ${SCRATCH}/`);
