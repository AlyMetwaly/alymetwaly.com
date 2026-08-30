// Render the Instagram Story frame to scratch/story-frame-1.png.
//
// Reuses the carousel renderer's approach: Playwright captures the running
// site at 390x844 DSF3, the result is embedded as a data URI, and the frame is
// composed in HTML. No new machinery.
//
//   node scripts/og-image/story.mjs
//
// The frame carries NO rendered text. The hook, the URL line and the link
// sticker are added natively in the Instagram app, so the top and bottom bands
// must stay genuinely empty — not merely clear of the capture.
import { chromium } from "playwright";
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const W = 1080;
const H = 1920;
const SCALE = 2;
const OUT = "scratch";
const SITE = "http://127.0.0.1:4300";

const SURFACE = "#F7F7F2";

// Instagram reserves the top for its header and the bottom for the reply bar;
// the link sticker also lives in the lower area.
const SAFE_TOP = 380;
const SAFE_BOTTOM = 420;
const BAND = H - SAFE_TOP - SAFE_BOTTOM;

// Nav through the portrait's bottom edge — a clean boundary, no sliced image.
// 1:2.246.
//
// Taller than the subhead-only clip, so it renders narrower; carrying no
// caption is what lets it use the full 1120px band and gain back scale.
// #proof, which carries the metrics, starts at y=1005 — below this clip.
const CLIP = { x: 0, y: 0, width: 390, height: 876 };
const ASPECT = CLIP.height / CLIP.width;

// Derived from the band, not fixed: the capture fills the full safe height.
const CAPTURE_W = Math.floor(BAND / ASPECT);

async function capture(browser) {
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
  });
  await page.goto(SITE + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  // The captured page loads its own fonts. Verify the display serif resolved
  // before shooting, or the frame ships a fallback that only shows up by eye.
  const serifOk = await page.evaluate(async () => {
    await document.fonts.ready;
    return document.fonts.check('48px "Instrument Serif"');
  });
  if (!serifOk)
    throw new Error(
      "Instrument Serif did not resolve in the captured page — refusing to ship a fallback.",
    );

  // fullPage is required or Playwright caps the clip at the viewport height.
  const buf = await page.screenshot({ clip: CLIP, fullPage: true });
  await page.close();
  return { uri: `data:image/png;base64,${buf.toString("base64")}`, serifOk };
}

const html = (shot) => `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
* { margin:0; padding:0; box-sizing:border-box; }
/* Padded to the safe zones and centred within them. The band is asymmetric
   (380 top, 420 bottom), so centring on the canvas would sit 20px low. */
body { width:${W}px; height:${H}px; background:${SURFACE}; overflow:hidden;
       padding:${SAFE_TOP}px 0 ${SAFE_BOTTOM}px;
       display:flex; align-items:center; justify-content:center; }
img { display:block; width:${CAPTURE_W}px; height:auto; max-height:${BAND}px; }
</style></head><body><img src="${shot}"></body></html>`;

/** Translucent bands showing what Instagram's chrome covers. */
async function overlay(src, dest) {
  const strip = (h, top) =>
    Buffer.from(
      `<svg width="${W}" height="${h}"><rect width="${W}" height="${h}" fill="#a32451" opacity="0.30"/>
       <text x="26" y="${top ? h - 24 : 42}" font-family="monospace" font-size="26" fill="#13120C">
       ${top ? `TOP ${SAFE_TOP}px — IG header + your hook` : `BOTTOM ${SAFE_BOTTOM}px — reply bar + link sticker`}</text></svg>`,
    );
  await sharp(src)
    .composite([
      { input: strip(SAFE_TOP, true), top: 0, left: 0 },
      { input: strip(SAFE_BOTTOM, false), top: H - SAFE_BOTTOM, left: 0 },
    ])
    .png()
    .toFile(dest);
}

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
const { uri, serifOk } = await capture(browser);

const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: SCALE });
await page.setContent(html(uri), { waitUntil: "load" });
await page.waitForTimeout(300);

const box = await page.evaluate(() => {
  const r = document.querySelector("img").getBoundingClientRect();
  return {
    top: Math.round(r.top),
    bottom: Math.round(r.bottom),
    w: Math.round(r.width),
    h: Math.round(r.height),
  };
});

// The bands must contain nothing at all, not merely nothing important.
const bandsEmpty = await page.evaluate(
  ({ top, bottom, h }) =>
    [...document.body.querySelectorAll("*")].every((el) => {
      const r = el.getBoundingClientRect();
      return r.top >= top && r.bottom <= h - bottom;
    }),
  { top: SAFE_TOP, bottom: SAFE_BOTTOM, h: H },
);

const shotBuf = await page.screenshot({ type: "png" });
const out = await sharp(shotBuf)
  .resize(W, H, { kernel: sharp.kernel.lanczos3, fit: "fill" })
  .png({ compressionLevel: 9 })
  .toBuffer();
writeFileSync(join(OUT, "story-frame-1.png"), out);
await overlay(join(OUT, "story-frame-1.png"), join(OUT, "story-frame-1-safe.png"));

await browser.close();

const inBand = box.top >= SAFE_TOP && box.bottom <= H - SAFE_BOTTOM;

console.log(`display serif in capture : Instrument Serif ${serifOk ? "OK" : "FAIL"}`);
console.log(
  `clip                     : ${CLIP.width}x${CLIP.height} @ (${CLIP.x},${CLIP.y})  aspect 1:${ASPECT.toFixed(2)}`,
);
console.log(`safe band                : y ${SAFE_TOP}..${H - SAFE_BOTTOM}  (${BAND}px tall)`);
console.log();
console.log(
  `capture renders          : ${box.w}x${box.h}px  = ${((box.w / W) * 100).toFixed(1)}% of canvas width`,
);
console.log(`content bounds           : y ${box.top}..${box.bottom}`);
console.log(
  `clearance                : ${box.top - SAFE_TOP}px above, ${H - SAFE_BOTTOM - box.bottom}px below`,
);
console.log(`within safe band         : ${inBand ? "yes" : "NO"}`);
console.log(
  `bands completely empty   : ${bandsEmpty ? "yes — no element intersects either band" : "NO"}`,
);
console.log(`rendered text on frame   : none (hook, URL and sticker added in-app)`);
