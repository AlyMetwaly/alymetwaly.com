// Generate the printed QR code that points at the talk page.
//
//   node scripts/qr.mjs                        -> https://alymetwaly.com/slides
//   node scripts/qr.mjs https://example.com/x  -> any other URL
//
// Outputs to scratch/qr/ (gitignored, same convention as the og-image scripts).
// The URL is permanent, so this only needs re-running if the route changes.
//
// Two deliberate choices, both about scanning reliably from an audience rather
// than about looking on-brand:
//
//   Pure black on pure white. The site's --ink/--paper tokens would scan fine,
//   but a QR is a machine target, not a branding surface, and maximum contrast
//   is what survives bad projector calibration, phone cameras at an angle, and
//   whatever the venue's lighting is doing.
//
//   Error correction level Q (25% recoverable). L would fit the URL into a
//   25x25 grid instead of 29x29 -- bigger modules, easier from a distance --
//   but only 7% recovery, so a smudge or a thumb over the corner kills it. Q is
//   the balance: 16% more modules for 3.5x the damage tolerance.
import QRCode from "qrcode";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const URL_TO_ENCODE = process.argv[2] ?? "https://alymetwaly.com/slides";
const OUT = "scratch/qr";

// 4 modules is the spec-mandated quiet zone. Scanners need it; cropping it off
// is the single most common reason a printed QR fails.
const MARGIN = 4;

const options = {
  errorCorrectionLevel: "Q",
  margin: MARGIN,
  color: { dark: "#000000ff", light: "#ffffffff" },
};

mkdirSync(OUT, { recursive: true });

// Vector first: this is the one to hand to a printer or drop into a deck, since
// it stays sharp at any physical size.
const svg = await QRCode.toString(URL_TO_ENCODE, { ...options, type: "svg" });
writeFileSync(join(OUT, "qr-slides.svg"), svg);

// Raster for slides and anything that will not take an SVG. 2048px is enough
// that even a full-slide QR has no visible pixel stepping.
await QRCode.toFile(join(OUT, "qr-slides.png"), URL_TO_ENCODE, {
  ...options,
  type: "png",
  width: 2048,
});

// Report what was actually encoded and how dense it came out, so a wrong URL or
// an unexpected version jump is visible instead of silently shipped to print.
const { modules } = QRCode.create(URL_TO_ENCODE, options);
const size = modules.size;
const version = (size - 17) / 4;

console.log(`qr: encoded ${JSON.stringify(URL_TO_ENCODE)}`);
console.log(`qr: version ${version}, ${size}x${size} modules, EC level Q, quiet zone ${MARGIN}`);
console.log(`qr: wrote ${OUT}/qr-slides.svg and ${OUT}/qr-slides.png`);
console.log(
  `qr: at 300dpi keep the printed code at least ${Math.ceil(((size + MARGIN * 2) * 4) / 300 * 25.4)}mm wide`,
);
