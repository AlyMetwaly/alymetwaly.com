// Render the 7-slide carousel to scratch/carousel/.
//
// Extends the scripts/og-image/ approach: HTML rendered by Playwright with the
// self-hosted WOFF2 inlined as data URIs, so nothing is fetched at generation
// time and the display serif cannot silently fall back.
//
//   node scripts/og-image/carousel.mjs
//
// Slides 02 and 07 embed real captures of the running site at 390x844 DSF3 —
// not mockups. Everything else is type on the surface token.
import { chromium } from "playwright";
import sharp from "sharp";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const W = 1080;
const H = 1350;
const SCALE = 2;
const OUT = "scratch/carousel";
const SITE = "http://127.0.0.1:4300";

const SURFACE = "#F7F7F2";
const INK = "#13120C";
const MUTED = "#4F4D46";

// Feed size. Effective px = source px * FEED_SCALE.
const FEED_W = 400;
const FEED_SCALE = FEED_W / W;
// Floor for body/list copy at feed size. Labels sit below this by nature and
// are reported separately; the counter is wayfinding, not content.
const READABLE_FLOOR = 11;

const font = (file) =>
  `url(data:font/woff2;base64,${readFileSync(join("public/fonts", file)).toString("base64")}) format("woff2")`;

// --- Captures -------------------------------------------------------------
// Clip boxes chosen from measured layout, not guessed. Both stop above any
// section containing figures and never cut a sentence.
const CAPTURES = {
  // Homepage: nav through the portrait's bottom edge. 390x876 is 1:2.25.
  //
  // This DELIBERATELY exceeds the 1:1.7 aspect ceiling the brief originally
  // set. That ceiling existed to stop a narrow strip on a tall canvas, but it
  // optimises for canvas fill, and slide 02's job is to read as a phone rather
  // than to be read. At 1:2.25 the capture renders ~46% of canvas width,
  // standing on the surface colour: the intended outcome, not a compromise.
  //
  // It ends at the portrait's edge rather than on the BASED/FOCUS rows, which
  // become texture at feed size. #proof, which carries the metrics, starts at
  // y=1005 — below this clip.
  home: { url: "/", clip: { x: 0, y: 0, width: 390, height: 876 } },
  // Advisory: nav + heading + opening paragraph. Chosen over /playbook, whose
  // first section numbers its principles 01-04.
  advisory: { url: "/advisory", clip: { x: 0, y: 0, width: 390, height: 358 } },
};

async function capture(browser, { url, clip }) {
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
  });
  await page.goto(SITE + url, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  // fullPage is required: without it Playwright caps the clip at the viewport
  // height, silently truncating any clip taller than 844px.
  const buf = await page.screenshot({ clip, fullPage: true });
  await page.close();
  return `data:image/png;base64,${buf.toString("base64")}`;
}

// --- Slides ---------------------------------------------------------------
// `fit` blocks are auto-sized: the renderer steps the font down from `max`
// until the block fits its slide, so long copy cannot overflow silently.
const SLIDES = [
  {
    pad: 96,
    blocks: [
      {
        el: "h1",
        cls: "display",
        max: 168,
        min: 96,
        text: "I built six things this month.<br>This is the smallest one.",
      },
    ],
  },
  { pad: 72, shot: "home", caption: "alymetwaly.com" },
  {
    pad: 96,
    blocks: [
      { el: "h1", cls: "display", max: 132, min: 84, text: "Everything was scattered." },
      {
        el: "p",
        cls: "body",
        max: 46,
        min: 38,
        text: "DMs, decks, email threads, half-finished documents. Nothing had a home.",
      },
    ],
  },
  {
    pad: 96,
    blocks: [
      { el: "div", cls: "label", max: 28, min: 24, text: "What AI did" },
      {
        el: "ul",
        cls: "list",
        max: 60,
        min: 46,
        text: "<li>Design</li><li>Content</li><li>Development</li><li>Deployment</li><li>Lead capture</li>",
      },
    ],
  },
  {
    pad: 96,
    blocks: [
      { el: "h1", cls: "display", max: 168, min: 96, text: "None of it was AI-decided." },
      {
        el: "p",
        cls: "body",
        max: 46,
        min: 38,
        text: "What to leave out. Which claims I could stand behind. Where the thing was quietly wrong. All still mine.",
      },
    ],
  },
  {
    // The payoff. Widest margins, loosest leading.
    pad: 132,
    blocks: [
      {
        el: "h1",
        cls: "display payoff",
        max: 132,
        min: 72,
        text: "AI doesn’t remove the need for expertise, strategy, or judgment.",
      },
      {
        el: "h1",
        cls: "display payoff dim",
        max: 132,
        min: 72,
        text: "It removes the effort between having an idea and shipping it.",
      },
    ],
  },
  {
    pad: 96,
    shot: "advisory",
    shotSmall: true,
    blocks: [
      { el: "h1", cls: "display", max: 132, min: 84, text: "alymetwaly.com" },
      { el: "div", cls: "label", max: 28, min: 24, text: "Link in bio" },
    ],
  },
];

const css = `
@font-face { font-family:"Instrument Serif"; font-style:normal; font-weight:400;
             src:${font("instrument-serif-latin-400.woff2")}; font-display:block; }
@font-face { font-family:"Inter"; font-style:normal; font-weight:300 700;
             src:${font("inter-latin-300-700.woff2")}; font-display:block; }
@font-face { font-family:"JetBrains Mono"; font-style:normal; font-weight:400 500;
             src:${font("jetbrains-mono-latin-400-500.woff2")}; font-display:block; }

* { margin:0; padding:0; box-sizing:border-box; }
html, body { background:${SURFACE}; }
body { -webkit-font-smoothing:antialiased; -webkit-print-color-adjust:exact; print-color-adjust:exact; }

.slide { position:relative; width:${W}px; height:${H}px; background:${SURFACE};
         display:flex; flex-direction:column; justify-content:center; align-items:center; overflow:hidden; }
.inner { width:100%; display:flex; flex-direction:column; }

.display { font-family:"Instrument Serif",serif; font-weight:400; color:${INK};
           line-height:1.04; letter-spacing:-0.025em; }
.display.payoff { line-height:1.24; }
.display.payoff.dim { color:${MUTED}; margin-top:0.42em; }

.body { font-family:"Inter",sans-serif; font-weight:400; color:${MUTED};
        line-height:1.5; margin-top:0.95em; }

.label { font-family:"JetBrains Mono",monospace; font-weight:500; color:${MUTED};
         text-transform:uppercase; letter-spacing:0.20em; }
.display + .label { margin-top:1.6em; }

.list { list-style:none; margin-top:0.85em; }
.list li { font-family:"Inter",sans-serif; font-weight:400; color:${INK}; line-height:1.5; }

/* The capture is taller than the canvas, so it is bound by height, not width.
   That is what makes it stand on the surface as a phone rather than fill it. */
.shot { display:block; width:auto; height:auto; max-width:936px; max-height:1120px; }
.shot-wrap { width:100%; display:flex; flex-direction:column; align-items:center; }
.shot-cap { font-family:"JetBrains Mono",monospace; font-weight:500; color:${MUTED};
            text-transform:uppercase; letter-spacing:0.20em; font-size:26px; margin-top:40px; }

.counter { position:absolute; left:var(--pad); bottom:var(--pad);
           font-family:"JetBrains Mono",monospace; font-weight:400; color:${MUTED};
           font-size:22px; letter-spacing:0.18em; }

@page { size:${W}px ${H}px; margin:0; }
.slide { page-break-after:always; break-after:page; }
.slide:last-child { page-break-after:auto; break-after:auto; }
`;

function slideHtml(s, i, shots) {
  let inner = "";

  if (s.shot && !s.shotSmall) {
    // Slide 02: near full-bleed capture.
    inner = `<div class="shot-wrap"><img class="shot" src="${shots[s.shot]}">
             <div class="shot-cap">${s.caption}</div></div>`;
  } else {
    const blocks = (s.blocks || [])
      .map((b, j) => `<${b.el} class="${b.cls}" data-fit="${i}-${j}">${b.text}</${b.el}>`)
      .join("\n");
    // Slide 07: type plus a deliberately smaller second capture.
    const small = s.shot
      ? `<div class="shot-wrap" style="margin-top:64px"><img class="shot" src="${shots[s.shot]}" style="max-height:430px"></div>`
      : "";
    inner = blocks + small;
  }

  return `<section class="slide" style="--pad:${s.pad}px; padding:${s.pad}px">
            <div class="inner">${inner}</div>
            <div class="counter">${String(i + 1).padStart(2, "0")} / 07</div>
          </section>`;
}

// --------------------------------------------------------------------------
mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();

const shots = {};
for (const [key, spec] of Object.entries(CAPTURES)) shots[key] = await capture(browser, spec);

const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${css}</style></head>
<body>${SLIDES.map((s, i) => slideHtml(s, i, shots)).join("\n")}</body></html>`;

const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: SCALE });
await page.setContent(html, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);

const fontsOk = await page.evaluate(() => ({
  serif: document.fonts.check('120px "Instrument Serif"'),
  sans: document.fonts.check('44px "Inter"'),
  mono: document.fonts.check('26px "JetBrains Mono"'),
}));
for (const [k, ok] of Object.entries(fontsOk)) {
  if (!ok) throw new Error(`${k} font did not load — refusing to ship a fallback.`);
}

// Auto-fit: shrink each slide's type until its content clears the padding.
const fitted = await page.evaluate(
  ({ slides, H }) => {
    const out = [];
    document.querySelectorAll(".slide").forEach((slide, i) => {
      const spec = slides[i];
      if (!spec.blocks) return;
      const pad = spec.pad;
      const avail = H - pad * 2;
      const els = spec.blocks.map((b, j) => slide.querySelector(`[data-fit="${i}-${j}"]`));

      // Scale every block on the slide together so relative hierarchy holds.
      let scale = 1;
      for (let step = 0; step < 60; step++) {
        els.forEach((el, j) => {
          const size = Math.round(spec.blocks[j].max * scale);
          const clamped = Math.max(spec.blocks[j].min, size);
          if (el.tagName === "UL")
            el.querySelectorAll("li").forEach((li) => (li.style.fontSize = clamped + "px"));
          else el.style.fontSize = clamped + "px";
          el.dataset.size = clamped;
        });
        if (slide.querySelector(".inner").getBoundingClientRect().height <= avail) break;
        scale -= 0.03;
      }

      const inner = slide.querySelector(".inner").getBoundingClientRect();
      out.push({
        slide: i + 1,
        pad,
        contentH: Math.round(inner.height),
        blocks: spec.blocks.map((b, j) => ({
          cls: b.cls.split(" ")[0],
          size: Number(els[j].dataset.size),
        })),
      });
    });
    return out;
  },
  { slides: SLIDES.map((s) => ({ pad: s.pad, blocks: s.blocks })), H },
);

// Render slides
for (let i = 0; i < SLIDES.length; i++) {
  const shot = await page.locator(".slide").nth(i).screenshot({ type: "png" });
  const full = await sharp(shot)
    .resize(W, H, { kernel: sharp.kernel.lanczos3, fit: "fill" })
    .png({ compressionLevel: 9 })
    .toBuffer();
  writeFileSync(join(OUT, `slide-${i + 1}.png`), full);
  await sharp(full)
    .resize(FEED_W, null, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(join(OUT, `feed-${i + 1}.png`));
}

await page.pdf({
  path: join(OUT, "carousel.pdf"),
  width: `${W}px`,
  height: `${H}px`,
  printBackground: true,
  pageRanges: "1-7",
});

await browser.close();

// --- Report ---------------------------------------------------------------
console.log(
  `fonts: Instrument Serif ${fontsOk.serif ? "OK" : "FAIL"}, Inter ${fontsOk.sans ? "OK" : "FAIL"}, JetBrains Mono ${fontsOk.mono ? "OK" : "FAIL"}`,
);
console.log();
console.log("TYPE-ONLY SLIDES — content height vs 1/3 canvas (450px)");
console.log("SLIDE  CONTENT H   % CANVAS   >=1/3?");
console.log("-".repeat(44));
for (const f of fitted) {
  const pct = ((f.contentH / H) * 100).toFixed(1);
  console.log(
    String(f.slide).padEnd(7) +
      String(f.contentH).padEnd(12) +
      (pct + "%").padEnd(11) +
      (f.contentH >= H / 3 ? "yes" : "NO"),
  );
}
console.log();
console.log(
  `400px LEGIBILITY  (effective px = source * ${FEED_SCALE.toFixed(3)}; floor ${READABLE_FLOOR}px for body copy)`,
);
console.log("SLIDE  BLOCK      SOURCE   EFFECTIVE @400   VERDICT");
console.log("-".repeat(60));
let belowFloor = [];
for (const f of fitted) {
  for (const b of f.blocks) {
    const eff = b.size * FEED_SCALE;
    const isCopy = b.cls === "body" || b.cls === "list" || b.cls === "display";
    const verdict = !isCopy
      ? "label (non-body)"
      : eff >= READABLE_FLOOR
        ? "readable"
        : "BELOW FLOOR";
    if (isCopy && eff < READABLE_FLOOR) belowFloor.push(`slide ${f.slide} ${b.cls}`);
    console.log(
      String(f.slide).padEnd(7) +
        b.cls.padEnd(11) +
        (b.size + "px").padEnd(9) +
        (eff.toFixed(1) + "px").padEnd(17) +
        verdict,
    );
  }
}
console.log(
  `counter    mono       22px     ${(22 * FEED_SCALE).toFixed(1)}px            wayfinding, not content`,
);
console.log();
console.log(
  belowFloor.length
    ? `FLAGGED below ${READABLE_FLOOR}px: ${belowFloor.join(", ")}`
    : `PASS: all body copy clears the ${READABLE_FLOOR}px floor at 400px wide.`,
);
console.log();
for (const [k, c] of Object.entries(CAPTURES)) {
  console.log(
    `capture ${k.padEnd(9)} ${c.url.padEnd(10)} clip ${c.clip.width}x${c.clip.height} @ (${c.clip.x},${c.clip.y})  aspect 1:${(c.clip.height / c.clip.width).toFixed(2)}`,
  );
}
