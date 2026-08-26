// Render the Open Graph card to public/og-image-v2.png.
//
// Built as HTML rendered by Playwright rather than composited by hand, so the
// layout stays editable: change the markup and CSS below and re-run.
//
//   node scripts/og-image/build.mjs
//
// No network at generation time. Fonts are read from public/fonts/ and inlined
// as data URIs; the portrait is cropped from src/assets/portrait.JPG (the
// original, never the hashed build output, which changes on every rebuild).
import { chromium } from "playwright";
import sharp from "sharp";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// ---------------------------------------------------------------------------
// Canvas + layout
// ---------------------------------------------------------------------------
const W = 1200;
const H = 630;
const SCALE = 2; // supersample, then downscale — sharper text than rendering at 1x

// Right panel holding the portrait. Deliberately inset rather than full-bleed:
// it keeps the face away from the outer margin that tighter LinkedIn crops cut.
const PANEL = { x: 712, y: 72, w: 368, h: 486 };

// ---------------------------------------------------------------------------
// Portrait crop
// ---------------------------------------------------------------------------
// Measured on src/assets/portrait.JPG (2001x3002):
//   hair top    y = 393      chin        y = 1020   -> head height 627px
//   face centre x = 995      shoulders   x = 360..1665
//
// Crop keeps the shoulders nearly whole and leaves headroom above the hair.
// Aspect matches PANEL (384/486 = 0.790) so nothing is distorted.
const PORTRAIT = "src/assets/portrait.JPG";
const CROP = { left: 455, top: 203, width: 1200, height: 1585 };
const HEAD = { hairTop: 393, chin: 1020, faceLeft: 750, faceRight: 1238 };

const SURFACE_TOKENS = "src/styles.css";

/** Pull the :root token block out of styles.css so the card cannot drift. */
function tokens() {
  const css = readFileSync(SURFACE_TOKENS, "utf8");
  const block = css.match(/:root \{([\s\S]*?)\n\}/)?.[1];
  if (!block) throw new Error("Could not read :root tokens from " + SURFACE_TOKENS);
  return block;
}

const font = (file) =>
  `url(data:font/woff2;base64,${readFileSync(join("public/fonts", file)).toString("base64")}) format("woff2")`;

async function portraitDataUri() {
  const buf = await sharp(PORTRAIT)
    .extract(CROP)
    .resize(PANEL.w * SCALE, PANEL.h * SCALE, { kernel: sharp.kernel.lanczos3, fit: "fill" })
    // sharp drops EXIF unless withMetadata() is called; stated explicitly here
    // because the source is a camera original.
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

const logoDataUri = () =>
  `data:image/png;base64,${readFileSync("public/icon-192.png").toString("base64")}`;

const NAME = "Aly Metwaly";
const LINE = "Enterprise AI doesn’t fail in the pilot. It fails in the rollout.";
const DOMAIN = "alymetwaly.com";

function html(portrait, logo) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
@font-face { font-family:"Instrument Serif"; font-style:normal; font-weight:400;
             src:${font("instrument-serif-latin-400.woff2")}; font-display:block; }
@font-face { font-family:"Instrument Serif"; font-style:italic; font-weight:400;
             src:${font("instrument-serif-latin-400-italic.woff2")}; font-display:block; }
@font-face { font-family:"JetBrains Mono"; font-style:normal; font-weight:400 500;
             src:${font("jetbrains-mono-latin-400-500.woff2")}; font-display:block; }

:root {${tokens()}
}
* { margin:0; padding:0; box-sizing:border-box; }
body { width:${W}px; height:${H}px; background:var(--paper); overflow:hidden;
       -webkit-font-smoothing:antialiased; }

.mark { position:absolute; left:184px; top:72px; width:52px; height:52px; }

.copy { position:absolute; left:184px; top:168px; width:490px; }

.name { font-family:"Instrument Serif",serif; font-weight:400; font-size:78px;
        line-height:0.98; letter-spacing:-0.02em; color:var(--ink); }

.line { font-family:"Instrument Serif",serif; font-weight:400; font-size:33px;
        line-height:1.28; letter-spacing:-0.01em; color:var(--muted-foreground);
        margin-top:28px; max-width:480px; }

.domain { position:absolute; left:184px; top:486px;
          font-family:"JetBrains Mono",monospace; font-weight:500; font-size:16px;
          text-transform:uppercase; letter-spacing:0.18em; color:var(--muted-foreground); }

.rule { position:absolute; left:184px; top:452px; width:96px; height:1px;
        background:var(--ink); opacity:0.25; }

.panel { position:absolute; left:${PANEL.x}px; top:${PANEL.y}px;
         width:${PANEL.w}px; height:${PANEL.h}px; overflow:hidden;
         background:var(--muted); }
.panel img { width:100%; height:100%; object-fit:cover; display:block; }
</style></head><body>
  <img class="mark" src="${logo}" alt="">
  <div class="copy">
    <div class="name">${NAME}</div>
    <div class="line">${LINE}</div>
  </div>
  <div class="rule"></div>
  <div class="domain">${DOMAIN}</div>
  <div class="panel"><img src="${portrait}" alt=""></div>
</body></html>`;
}

// ---------------------------------------------------------------------------
const page = await (
  await chromium.launch()
).newPage({
  viewport: { width: W, height: H },
  deviceScaleFactor: SCALE,
});

await page.setContent(html(await portraitDataUri(), logoDataUri()), { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);

// Fail loudly rather than shipping a system-serif fallback that only shows up
// by eye. document.fonts.check needs a size and the exact family name.
const fontsOk = await page.evaluate(() => ({
  serif: document.fonts.check('84px "Instrument Serif"'),
  mono: document.fonts.check('16px "JetBrains Mono"'),
}));
if (!fontsOk.serif)
  throw new Error("Instrument Serif did not load — refusing to ship a fallback serif.");
if (!fontsOk.mono)
  throw new Error("JetBrains Mono did not load — refusing to ship a fallback mono.");

// Measure the real laid-out boxes rather than trusting the CSS constants, so
// the crop-safety check in verify.mjs works from what actually rendered.
const boxes = await page.evaluate(
  ({ crop, head, panel }) => {
    // Measure the inked text extent via a Range, not the element box. A block
    // element fills its column regardless of how wide the glyphs actually are,
    // which would overstate what a crop has to contain.
    const box = (sel) => {
      const el = document.querySelector(sel);
      const range = document.createRange();
      range.selectNodeContents(el);
      const r = range.getBoundingClientRect().width
        ? range.getBoundingClientRect()
        : el.getBoundingClientRect();
      return { x: r.x, y: r.y, w: r.width, h: r.height };
    };
    const p = box(".panel");
    // Map the measured head landmarks from source pixels into canvas space.
    const s = p.h / crop.height;
    return {
      name: box(".name"),
      line: box(".line"),
      domain: box(".domain"),
      panel: p,
      face: {
        x: p.x + (head.faceLeft - crop.left) * (p.w / crop.width),
        y: p.y + (head.hairTop - crop.top) * s,
        w: (head.faceRight - head.faceLeft) * (p.w / crop.width),
        h: (head.chin - head.hairTop) * s,
      },
    };
  },
  { crop: CROP, head: HEAD, panel: PANEL },
);

const shot = await page.screenshot({ type: "png" });
await page.context().browser().close();

mkdirSync("scratch/og-image", { recursive: true });
writeFileSync(
  "scratch/og-image/layout.json",
  JSON.stringify({ canvas: { w: W, h: H }, boxes }, null, 2),
);

mkdirSync("public", { recursive: true });
let out = await sharp(shot)
  .resize(W, H, { kernel: sharp.kernel.lanczos3, fit: "fill" })
  .png({ compressionLevel: 9 })
  .toBuffer();

// Photographic content makes a truecolour PNG large. Quantise only if the
// full-colour version misses the budget.
const LIMIT = 500 * 1024;
let mode = "truecolour";
if (out.length > LIMIT) {
  out = await sharp(shot)
    .resize(W, H, { kernel: sharp.kernel.lanczos3, fit: "fill" })
    .png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
    .toBuffer();
  mode = "palette-quantised";
}

writeFileSync("public/og-image-v2.png", out);

const meta = await sharp("public/og-image-v2.png").metadata();
const panelScale = PANEL.h / CROP.height;
const headPx = (HEAD.chin - HEAD.hairTop) * panelScale;
const headroomPx = (HEAD.hairTop - CROP.top) * panelScale;

console.log(
  `fonts            : Instrument Serif ${fontsOk.serif ? "OK" : "FAIL"}, JetBrains Mono ${fontsOk.mono ? "OK" : "FAIL"}`,
);
console.log(
  `crop box         : left ${CROP.left}, top ${CROP.top}, ${CROP.width}x${CROP.height} (aspect ${(CROP.width / CROP.height).toFixed(3)})`,
);
console.log(
  `panel            : ${PANEL.w}x${PANEL.h} at (${PANEL.x},${PANEL.y})  aspect ${(PANEL.w / PANEL.h).toFixed(3)}`,
);
console.log(
  `head height      : ${headPx.toFixed(1)}px = ${((headPx / PANEL.h) * 100).toFixed(1)}% of panel height`,
);
console.log(
  `headroom         : ${headroomPx.toFixed(1)}px = ${((headroomPx / PANEL.h) * 100).toFixed(1)}% of panel height`,
);
console.log(
  `output           : ${meta.width}x${meta.height}, ${(out.length / 1024).toFixed(1)} KB (${mode}), EXIF ${meta.exif ? "PRESENT" : "stripped"}`,
);
