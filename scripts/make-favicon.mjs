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
// Web icons are masked to a circle (transparent outside). apple-touch-icon is
// deliberately NOT masked: iOS applies its own rounded-square mask, and it
// composites any transparency onto black, so a circular Apple icon renders as
// a circle sitting on a black square.
//
// Usage: node scripts/make-favicon.mjs
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SOURCE =
  "C:/Users/metwaly/OneDrive - Haaga-Helia Oy Ab/Side Projects/Personal Projects/Personal Brand and Social Media/Personal Brand 2026/Personal Brand Material/Gemini_Generated_Image_on1zcron1zcron1z.jpg";

const OUT = "public";
const SCRATCH = "scratch/favicon-preview";

// Measured from the source: the "AM" glyph occupies x 955..1850, y 415..989.
// Nothing outside this box is part of the mark.
const GLYPH = { left: 955, top: 415, width: 895, height: 574 };

const MASTER = 1024;

// Card interior colour, sampled from the source.
const BG = { r: 0xf5, g: 0xf4, b: 0xf9, alpha: 1 };

// Glyph width as a fraction of the canvas.
//
// A circle crops the corners, so a wide mark cannot fill as much of the frame
// as it can in a square. The glyph is 895x574 (1.56:1); its bbox corners reach
// the circle edge at ~84% width, so 78% leaves a visible margin without
// shrinking the letters more than necessary.
const FILL_CIRCLE = 0.78;
const FILL_SQUARE = 0.87;

const PNG_SIZES = [16, 32, 48, 96, 192, 512];
const ICO_SIZES = [16, 32, 48];
const SHARPEN_AT_OR_BELOW = 32;

mkdirSync(OUT, { recursive: true });
mkdirSync(SCRATCH, { recursive: true });

/**
 * Crop the glyph and centre it on a flat square canvas.
 *
 * The glyph is resized in its own pipeline before compositing. sharp applies
 * resize BEFORE composite regardless of the order the methods are called, so
 * resizing the canvas in this same chain would paste a full-size glyph onto an
 * already-shrunk canvas -- off-centre and overflowing.
 */
async function buildMaster(fill) {
  const w = Math.round(MASTER * fill);
  const h = Math.round((w * GLYPH.height) / GLYPH.width);

  const glyph = await sharp(SOURCE)
    .extract(GLYPH)
    .resize(w, h, { kernel: sharp.kernel.lanczos3, fit: "fill" })
    .png()
    .toBuffer();

  return sharp({
    create: { width: MASTER, height: MASTER, channels: 3, background: BG },
  })
    .composite([
      { input: glyph, left: Math.round((MASTER - w) / 2), top: Math.round((MASTER - h) / 2) },
    ])
    .png()
    .toBuffer();
}

/**
 * Knock the corners out with a circular alpha mask.
 *
 * Masking at master size and downscaling afterwards lets the resample smooth
 * the circle edge; masking after the resize would leave it visibly stepped at
 * 16 and 32px.
 */
async function circleMask(master) {
  const mask = Buffer.from(
    `<svg width="${MASTER}" height="${MASTER}"><circle cx="${MASTER / 2}" cy="${MASTER / 2}" r="${MASTER / 2}" fill="#fff"/></svg>`,
  );

  return sharp(master)
    .ensureAlpha()
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

/** Resize one output size. Small sizes get a light unsharp pass. */
async function render(master, size, { opaque = false } = {}) {
  let pipeline = sharp(master).resize(size, size, {
    kernel: sharp.kernel.lanczos3,
    fit: "fill",
  });

  if (size <= SHARPEN_AT_OR_BELOW) {
    pipeline = pipeline.sharpen({ sigma: 0.6, m1: 0.6, m2: 0.4 });
  }

  if (opaque) pipeline = pipeline.flatten({ background: BG }).removeAlpha();

  // sharp strips EXIF unless withMetadata() is called.
  return pipeline.png({ compressionLevel: 9 }).toBuffer();
}

/**
 * Fail loudly if the mark is off-centre or crosses the circle edge.
 *
 * Guards a real trap: sharp reorders resize ahead of composite, which silently
 * shifts the glyph and clips it against the mask instead of erroring.
 */
async function assertCentredAndUnclipped(buf, { masked }) {
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H, channels: C } = info;

  let minX = Infinity,
    maxX = 0,
    minY = Infinity,
    maxY = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * C;
      const alpha = C === 4 ? data[i + 3] : 255;
      const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      if (alpha > 128 && lum < 115) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const dx = Math.round((minX + maxX) / 2 - W / 2);
  const dy = Math.round((minY + maxY) / 2 - H / 2);
  if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
    throw new Error(
      `Mark is off-centre by dx=${dx} dy=${dy} (expected 0). Check composite ordering.`,
    );
  }

  if (masked) {
    const R = W / 2;
    for (const [x, y] of [
      [minX, minY],
      [maxX, minY],
      [minX, maxY],
      [maxX, maxY],
    ]) {
      const d = Math.hypot(x - W / 2, y - H / 2);
      if (d > R - 1) {
        throw new Error(
          `Mark is clipped by the circle (corner at ${Math.round(d)}px, radius ${R}). Lower FILL_CIRCLE.`,
        );
      }
    }
  }

  return { width: maxX - minX, height: maxY - minY, fill: (maxX - minX) / W };
}

const circularMaster = await circleMask(await buildMaster(FILL_CIRCLE));
const squareMaster = await buildMaster(FILL_SQUARE);

const circleCheck = await assertCentredAndUnclipped(circularMaster, { masked: true });
const squareCheck = await assertCentredAndUnclipped(squareMaster, { masked: false });
console.log(
  `make-favicon: circular master ok - mark ${circleCheck.width}x${circleCheck.height}, ${(circleCheck.fill * 100).toFixed(1)}% of frame, centred, inside circle`,
);
console.log(
  `make-favicon: square master ok - mark ${squareCheck.width}x${squareCheck.height}, ${(squareCheck.fill * 100).toFixed(1)}% of frame, centred`,
);

const rendered = new Map();
for (const size of PNG_SIZES) {
  const buf = await render(circularMaster, size);
  rendered.set(size, buf);
  writeFileSync(join(OUT, `icon-${size}.png`), buf);
}

// Square and opaque on purpose -- see the note at the top of this file.
writeFileSync(join(OUT, "apple-touch-icon.png"), await render(squareMaster, 180, { opaque: true }));

// Multi-size ICO. sharp has no ICO encoder, so png-to-ico packs the PNGs.
writeFileSync(join(OUT, "favicon.ico"), await pngToIco(ICO_SIZES.map((s) => rendered.get(s))));

// --- Preview composites for review (outside public/, never published) ---
async function preview(size, bgHex, label) {
  const zoom = size * 8;
  const bg = {
    r: parseInt(bgHex.slice(1, 3), 16),
    g: parseInt(bgHex.slice(3, 5), 16),
    b: parseInt(bgHex.slice(5, 7), 16),
  };
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

for (const size of [16, 32, 48]) {
  await preview(size, "#FFFFFF", "white");
  await preview(size, "#F7F7F2", "f7f7f2");
  await preview(size, "#13120C", "dark");
}

console.log(
  `make-favicon: wrote ${PNG_SIZES.length} circular PNGs, square apple-touch-icon.png and favicon.ico to ${OUT}/`,
);
console.log(`make-favicon: wrote review composites to ${SCRATCH}/`);
