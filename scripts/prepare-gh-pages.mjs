// Assemble dist/ into exactly what should be published to GitHub Pages.
//
// Routes are prerendered by TanStack Start (see `prerender` in vite.config.ts),
// so this script no longer boots an SSR server to render "/" -- the build
// already emitted index.html and one index.html per route into dist/client.
//
// This script's job is to flatten dist/client to the top level of dist and
// guarantee nothing else is there. Everything published is rebuilt from
// scratch on every run; no file survives from a previous build.
import {
  copyFileSync,
  cpSync,
  existsSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { join, posix, relative } from "node:path";

const CUSTOM_DOMAIN = "alymetwaly.com";
const DIST = "dist";
const CLIENT = join(DIST, "client");
const SERVER = join(DIST, "server");

// Routes that must each have their own prerendered file. Kept in sync with
// `pages` in vite.config.ts; verified below so a routing change that silently
// stops emitting a file fails the build instead of shipping a 404.
const REQUIRED_ROUTES = [
  "/",
  "/playbook",
  "/experience",
  "/advisory",
  "/speaking",
  "/about",
  "/contact",
];

if (!existsSync(CLIENT)) {
  throw new Error(`Expected client output at ${CLIENT}. Run "npm run build" first.`);
}

// 1. Drop every top-level entry except the raw build environments. This is
//    what stops stale output (e.g. route directories from a prerender setup
//    that has since changed) from surviving into the published site.
for (const entry of readdirSync(DIST)) {
  if (entry === "client" || entry === "server") continue;
  rmSync(join(DIST, entry), { recursive: true, force: true });
}

// 2. Flatten the client build to the top level.
cpSync(CLIENT, DIST, { recursive: true });

// 3. Remove the build environments; they are not published.
for (const dir of [CLIENT, SERVER]) {
  rmSync(dir, { recursive: true, force: true });
}

// `pages.json` is sitemap build metadata, not public content.
rmSync(join(DIST, "pages.json"), { force: true });

// 4. GitHub Pages serves 404.html for any unmatched path. Every real route now
//    has its own file, so this only applies to genuinely unknown URLs.
const indexHtml = join(DIST, "index.html");
if (!existsSync(indexHtml)) {
  throw new Error(
    `Prerender did not produce ${indexHtml}. Check the "prerender" options in vite.config.ts.`,
  );
}
copyFileSync(indexHtml, join(DIST, "404.html"));

writeFileSync(join(DIST, "CNAME"), `${CUSTOM_DOMAIN}\n`);

// 5. Verify the published tree is internally consistent.
const missingRoutes = REQUIRED_ROUTES.filter(
  (route) =>
    !existsSync(join(DIST, route === "/" ? "index.html" : join(route.slice(1), "index.html"))),
);
if (missingRoutes.length) {
  throw new Error(
    `Prerender did not emit a file for: ${missingRoutes.join(", ")}.\n` +
      `Add them to "pages" in vite.config.ts.`,
  );
}

for (const file of ["robots.txt", ".nojekyll"]) {
  if (!existsSync(join(DIST, file))) {
    throw new Error(`Expected ${file} in ${DIST}. It should be copied from public/.`);
  }
}

// Every local asset referenced by published HTML must actually exist. A stale
// prerendered page referencing a previous build's hashed filenames is exactly
// how the site ended up serving blank pages; fail the build instead.
function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(full);
    return entry.name.endsWith(".html") ? [full] : [];
  });
}

const brokenRefs = [];
for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, "utf8");
  const refs = new Set(
    html.match(/(?:href|src)="(\/[^"]+)"/g)?.map((m) => m.slice(m.indexOf('"/') + 2, -1)) ?? [],
  );
  for (const ref of refs) {
    // Only verify file-like references; route links have no extension and are
    // covered by the REQUIRED_ROUTES check above.
    if (!posix.basename(ref).includes(".")) continue;
    if (!existsSync(join(DIST, ref))) {
      brokenRefs.push(`${relative(DIST, file).replace(/\\/g, "/")} -> /${ref}`);
    }
  }
}

if (brokenRefs.length) {
  throw new Error(
    `Published HTML references files that do not exist:\n  ${brokenRefs.join("\n  ")}`,
  );
}

console.log(
  `prepare-gh-pages: published ${REQUIRED_ROUTES.length} routes, verified all asset references resolve.`,
);
