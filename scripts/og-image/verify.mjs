// Crop-safety check for the OG card.
//
// LinkedIn does not always render the full 1.91:1 card -- comment previews and
// some feed states take a tighter, more central crop. This re-crops the card to
// those shapes and reports whether the face and the name survive each one, using
// the boxes measured during the render rather than the CSS constants.
//
//   node scripts/og-image/build.mjs && node scripts/og-image/verify.mjs
import sharp from "sharp";
import { readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SRC = "public/og-image-v2.png";
const OUT = "scratch/og-image";

const { canvas, boxes } = JSON.parse(readFileSync(join(OUT, "layout.json"), "utf8"));

const SHAPES = [
  { name: "centre square 1:1", ratio: 1 },
  { name: "centre 4:3", ratio: 4 / 3 },
  { name: "centre 1.5:1", ratio: 1.5 },
  { name: "full card 1.91:1", ratio: canvas.w / canvas.h },
];

/** Largest centred rect of a given aspect that fits the canvas. */
function centreCrop(ratio) {
  let w = canvas.w;
  let h = Math.round(w / ratio);
  if (h > canvas.h) {
    h = canvas.h;
    w = Math.round(h * ratio);
  }
  return {
    left: Math.round((canvas.w - w) / 2),
    top: Math.round((canvas.h - h) / 2),
    width: w,
    height: h,
  };
}

const contains = (crop, b) =>
  b.x >= crop.left &&
  b.y >= crop.top &&
  b.x + b.w <= crop.left + crop.width &&
  b.y + b.h <= crop.top + crop.height;

/** How much of a box's area survives the crop, 0..1. */
function coverage(crop, b) {
  const x1 = Math.max(b.x, crop.left);
  const y1 = Math.max(b.y, crop.top);
  const x2 = Math.min(b.x + b.w, crop.left + crop.width);
  const y2 = Math.min(b.y + b.h, crop.top + crop.height);
  if (x2 <= x1 || y2 <= y1) return 0;
  return ((x2 - x1) * (y2 - y1)) / (b.w * b.h);
}

mkdirSync(OUT, { recursive: true });

// Central-80% safe area, the primary rule.
const safe = {
  left: canvas.w * 0.1,
  top: canvas.h * 0.1,
  width: canvas.w * 0.8,
  height: canvas.h * 0.8,
};

console.log(
  "central 80% safe area: x " +
    safe.left +
    ".." +
    (safe.left + safe.width) +
    ", y " +
    safe.top +
    ".." +
    (safe.top + safe.height),
);
console.log();
console.log("ELEMENT".padEnd(10) + "BOX (x,y,w,h)".padEnd(30) + "INSIDE CENTRAL 80%");
console.log("-".repeat(62));
for (const key of ["face", "name", "line", "domain"]) {
  const b = boxes[key];
  const fmt = `${Math.round(b.x)},${Math.round(b.y)},${Math.round(b.w)},${Math.round(b.h)}`;
  console.log(key.padEnd(10) + fmt.padEnd(30) + (contains(safe, b) ? "yes" : "NO"));
}

console.log();
console.log("SHAPE".padEnd(20) + "CROP".padEnd(24) + "FACE".padEnd(16) + "NAME");
console.log("-".repeat(74));

const results = [];
for (const shape of SHAPES) {
  const crop = centreCrop(shape.ratio);
  const faceCov = coverage(crop, boxes.face);
  const nameCov = coverage(crop, boxes.name);
  const verdict = (c) =>
    c >= 0.999 ? "FULL" : c === 0 ? "GONE" : `${(c * 100).toFixed(0)}% CLIPPED`;

  const file = join(OUT, `crop-${shape.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}.png`);
  await sharp(SRC).extract(crop).png().toFile(file);

  console.log(
    shape.name.padEnd(20) +
      `${crop.width}x${crop.height} @${crop.left},${crop.top}`.padEnd(24) +
      verdict(faceCov).padEnd(16) +
      verdict(nameCov),
  );
  results.push({ shape: shape.name, face: faceCov, name: nameCov });
}

console.log();
const fails = results.filter((r) => r.face < 0.999 || r.name < 0.999);
if (fails.length === 0) {
  console.log("PASS: face and name survive every tested crop.");
} else {
  for (const f of fails) {
    console.log(
      `FAIL: ${f.shape} — face ${(f.face * 100).toFixed(0)}% visible, name ${(f.name * 100).toFixed(0)}% visible`,
    );
  }
}
