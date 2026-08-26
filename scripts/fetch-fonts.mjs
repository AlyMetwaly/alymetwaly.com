// Download the Latin subsets of the site's three families into public/fonts/.
//
// Run this only to refresh the vendored files -- the site and the OG renderer
// both read from public/fonts/ and never touch the network at runtime or at
// generation time.
//
// All three families are SIL Open Font License 1.1, which permits bundling and
// redistribution. public/fonts/OFL.txt carries the licence text as OFL requires.
//
// Inter and JetBrains Mono are requested as weight ranges, so Google returns a
// single variable file per family instead of one file per weight -- markedly
// smaller than shipping five static Inter weights.
//
// Usage: node scripts/fetch-fonts.mjs
import { mkdirSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = join("public", "fonts");

// A modern browser UA is required, or Google serves legacy TTF instead of WOFF2.
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

const FAMILIES = [
  { query: "Instrument+Serif:ital@0;1", slug: "instrument-serif" },
  { query: "Inter:wght@300..700", slug: "inter" },
  { query: "JetBrains+Mono:wght@400..500", slug: "jetbrains-mono" },
];

// Latin subset only: U+0000-00FF plus the usual punctuation Google bundles with it.
const LATIN_RANGE = "U+0000-00FF";

async function cssFor(query) {
  const res = await fetch(`https://fonts.googleapis.com/css2?family=${query}&display=swap`, {
    headers: { "User-Agent": UA },
  });
  if (!res.ok) throw new Error(`Font CSS fetch failed for ${query}: ${res.status}`);
  return res.text();
}

/** Pull the latin @font-face blocks out of a Google Fonts stylesheet. */
function parseLatinFaces(css) {
  return [...css.matchAll(/@font-face\s*\{([\s\S]*?)\}/g)]
    .map((m) => m[1])
    .filter((block) => block.includes(LATIN_RANGE))
    .map((block) => ({
      style: block.match(/font-style:\s*([^;]+);/)?.[1].trim() ?? "normal",
      weight: block.match(/font-weight:\s*([^;]+);/)?.[1].trim() ?? "400",
      url: block.match(/url\((https:[^)]+\.woff2)\)/)?.[1],
    }))
    .filter((f) => f.url);
}

mkdirSync(OUT, { recursive: true });

const manifest = [];
let total = 0;

for (const { query, slug } of FAMILIES) {
  const faces = parseLatinFaces(await cssFor(query));
  if (!faces.length) throw new Error(`No latin woff2 face found for ${query}`);

  for (const face of faces) {
    // Variable files carry a weight range like "300 700"; flatten for the filename.
    const weightTag = face.weight.replace(/\s+/g, "-");
    const name = `${slug}-latin-${weightTag}${face.style === "italic" ? "-italic" : ""}.woff2`;

    const res = await fetch(face.url, { headers: { "User-Agent": UA } });
    if (!res.ok) throw new Error(`Download failed: ${face.url} -> ${res.status}`);
    writeFileSync(join(OUT, name), Buffer.from(await res.arrayBuffer()));

    const bytes = statSync(join(OUT, name)).size;
    total += bytes;
    manifest.push({ name, style: face.style, weight: face.weight, bytes });
  }
}

console.log("FILE".padEnd(46) + "STYLE".padEnd(9) + "WEIGHT".padEnd(11) + "BYTES");
console.log("-".repeat(78));
for (const m of manifest) {
  console.log(
    m.name.padEnd(46) + m.style.padEnd(9) + m.weight.padEnd(11) + m.bytes.toLocaleString(),
  );
}
console.log("-".repeat(78));
console.log(`${manifest.length} files, ${(total / 1024).toFixed(1)} KB total`);
