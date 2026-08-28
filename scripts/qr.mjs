// Generate the printed / on-slide QR code that points at a talk page.
//
//   node scripts/qr.mjs
//   node scripts/qr.mjs https://alymetwaly.com/next-event
//   node scripts/qr.mjs --bg "#FAF9F5"        slide background colour
//   node scripts/qr.mjs --bg transparent      blends onto any background
//   node scripts/qr.mjs --label-color "#0F6156"
//
// Outputs to scratch/qr/ (gitignored, same convention as the og-image scripts).
// Each talk page has its own permanent URL, so run this once per event and pass
// the new URL as the argument. Filenames derive from the path, so two events
// cannot overwrite each other.
//
// Four files per run:
//   <name>.svg              bare QR, vector, for print
//   <name>.png              bare QR, 2048px
//   <name>-card.png         QR + the URL underneath, on the background colour
//   <name>-card-alpha.png   same card, transparent background
//
// Two choices that are about scanning rather than about looking on-brand:
//
//   The dark modules stay pure black. The light side is themeable, but dropping
//   contrast on the dark side is what actually costs you scans.
//
//   Error correction level Q (25% recoverable). L would fit the URL into a
//   25x25 grid instead of 29x29 -- bigger modules, easier from a distance --
//   but only 7% recovery, so a smudge or a thumb over the corner kills it. Q is
//   the balance: 16% more modules for 3.5x the damage tolerance.
//
// The card is rendered by Playwright with Inter inlined as a data URI, the same
// approach scripts/og-image/ uses, so the label cannot silently fall back to a
// different font on a machine that lacks Inter.
import QRCode from "qrcode";
import { chromium } from "playwright";
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

function arg(flag, fallback) {
  const i = process.argv.indexOf(flag);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

const positional = process.argv.slice(2).find((a) => a.startsWith("http"));
const URL_TO_ENCODE = positional ?? "https://alymetwaly.com/splash";

// Default taken from the keynote slide: a warm near-white. Override with --bg if
// the deck theme changes; the -card-alpha.png output sidesteps the question
// entirely by carrying no background at all.
const BG = arg("--bg", "#FAF9F5");
const DARK = arg("--fg", "#000000");
const LABEL_COLOR = arg("--label-color", "#1A1A1A");
const TRANSPARENT = BG.toLowerCase() === "transparent";

const OUT = "scratch/qr";
const NAME = "qr-" + (new URL(URL_TO_ENCODE).pathname.replace(/\//g, "") || "root");

// The label is what someone types when their camera will not cooperate, so it
// is the URL exactly as it should be typed: no scheme, no trailing slash.
const LABEL = URL_TO_ENCODE.replace(/^https?:\/\//, "").replace(/\/$/, "");

// 4 modules is the spec-mandated quiet zone. Scanners need it; cropping it off
// is the single most common reason a printed QR fails.
const MARGIN = 4;

const baseOptions = {
  errorCorrectionLevel: "Q",
  margin: MARGIN,
};

mkdirSync(OUT, { recursive: true });

// --- bare outputs -----------------------------------------------------------

const bareColor = { dark: DARK + "ff", light: TRANSPARENT ? "#00000000" : BG + "ff" };

writeFileSync(
  join(OUT, NAME + ".svg"),
  await QRCode.toString(URL_TO_ENCODE, { ...baseOptions, color: bareColor, type: "svg" }),
);

await QRCode.toFile(join(OUT, NAME + ".png"), URL_TO_ENCODE, {
  ...baseOptions,
  color: bareColor,
  type: "png",
  width: 2048,
});

// --- card: QR plus the URL underneath ---------------------------------------

// Light modules transparent so one QR serves both the solid and the alpha card;
// the card's own background supplies the colour.
const qrSvg = await QRCode.toString(URL_TO_ENCODE, {
  ...baseOptions,
  color: { dark: DARK + "ff", light: "#00000000" },
  type: "svg",
});

const interWoff2 = readFileSync("public/fonts/inter-latin-300-700.woff2").toString("base64");

const cardHtml = (background) => `<!doctype html>
<meta charset="utf-8">
<style>
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300 700;
    font-display: block;
    src: url(data:font/woff2;base64,${interWoff2}) format("woff2");
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { background: transparent; }
  #card {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    background: ${background};
    padding: 48px 48px 40px;
  }
  #qr { width: 620px; height: 620px; display: block; }
  #qr svg { width: 100%; height: 100%; display: block; }
  #label {
    margin-top: 30px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 44px;
    letter-spacing: 0.005em;
    color: ${LABEL_COLOR};
    white-space: nowrap;
  }
</style>
<div id="card">
  <div id="qr">${qrSvg}</div>
  <div id="label">${LABEL}</div>
</div>`;

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ deviceScaleFactor: 2 });

for (const [suffix, background, omitBackground] of [
  ["-card.png", TRANSPARENT ? "transparent" : BG, TRANSPARENT],
  ["-card-alpha.png", "transparent", true],
]) {
  await page.setContent(cardHtml(background));
  await page.evaluate(() => document.fonts.ready);
  const card = await page.$("#card");
  await card.screenshot({ path: join(OUT, NAME + suffix), omitBackground });
}

await browser.close();

// --- report -----------------------------------------------------------------

const { modules } = QRCode.create(URL_TO_ENCODE, baseOptions);
const size = modules.size;

console.log(`qr: encoded ${JSON.stringify(URL_TO_ENCODE)}`);
console.log(
  `qr: version ${(size - 17) / 4}, ${size}x${size} modules, EC level Q, quiet zone ${MARGIN}`,
);
console.log(`qr: dark ${DARK}, light ${TRANSPARENT ? "transparent" : BG}, label ${LABEL_COLOR}`);
console.log(
  `qr: wrote ${NAME}.svg, ${NAME}.png, ${NAME}-card.png, ${NAME}-card-alpha.png in ${OUT}/`,
);
console.log(
  `qr: at 300dpi keep the printed code at least ${Math.ceil((((size + MARGIN * 2) * 4) / 300) * 25.4)}mm wide`,
);
