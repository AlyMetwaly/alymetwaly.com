// Assemble dist/ into exactly what should be published to GitHub Pages.
//
// Routes are prerendered by TanStack Start (see `prerender` in vite.config.ts),
// so this script no longer boots an SSR server to render "/" -- the build
// already emitted index.html and one index.html per route into dist/client.
// It does still render the 404 shell from the server bundle; see below.
//
// This script's job is to flatten dist/client to the top level of dist and
// guarantee nothing else is there. Everything published is rebuilt from
// scratch on every run; no file survives from a previous build.
import { cpSync, existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join, posix, relative } from "node:path";
import { pathToFileURL } from "node:url";

const CUSTOM_DOMAIN = "alymetwaly.com";
const DIST = "dist";
const CLIENT = join(DIST, "client");
const SERVER = join(DIST, "server");
const SERVER_ENTRY = join(DIST, "server", "server.js");

/**
 * Render the route-agnostic SPA shell used as 404.html.
 *
 * 404.html must not be a copy of index.html. The prerendered homepage embeds
 * router state for "/", so serving it at an unknown URL fails hydration with
 * "Invariant failed" and renders nothing at all.
 *
 * The server honours X-TSS_SHELL only while TSS_PRERENDERING is set, and reads
 * both at module load, so the env var must be set before the bundle is
 * imported. The shell carries no route state, so the client router resolves the
 * real URL and renders the not-found page.
 */
async function renderShell() {
  process.env.TSS_PRERENDERING = "true";
  const handler = (await import(pathToFileURL(SERVER_ENTRY).href)).default;
  const response = await handler.fetch(
    new Request("http://localhost/", { headers: { "X-TSS_SHELL": "true" } }),
    {},
    {},
  );

  if (!response.ok) {
    throw new Error(`Shell render failed with status ${response.status}.`);
  }

  return response.text();
}

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
  "/slides",
];

if (!existsSync(CLIENT)) {
  throw new Error(`Expected client output at ${CLIENT}. Run "npm run build" first.`);
}

if (!existsSync(SERVER_ENTRY)) {
  throw new Error(`Expected SSR server entry at ${SERVER_ENTRY}. Run "npm run build" first.`);
}

// 1. Drop every top-level entry except the raw build environments. This is
//    what stops stale output (e.g. route directories from a prerender setup
//    that has since changed) from surviving into the published site.
for (const entry of readdirSync(DIST)) {
  if (entry === "client" || entry === "server") continue;
  rmSync(join(DIST, entry), { recursive: true, force: true });
}

// 2. Render the 404 shell while the server bundle is still present.
const shellHtml = await renderShell();

// 3. Flatten the client build to the top level.
cpSync(CLIENT, DIST, { recursive: true });

// 4. Remove the build environments; they are not published.
for (const dir of [CLIENT, SERVER]) {
  rmSync(dir, { recursive: true, force: true });
}

// `pages.json` is sitemap build metadata, not public content.
rmSync(join(DIST, "pages.json"), { force: true });

// 5. GitHub Pages serves 404.html for any unmatched path. Every real route now
//    has its own file, so this only applies to genuinely unknown URLs.
const indexHtml = join(DIST, "index.html");
if (!existsSync(indexHtml)) {
  throw new Error(
    `Prerender did not produce ${indexHtml}. Check the "prerender" options in vite.config.ts.`,
  );
}
writeFileSync(join(DIST, "404.html"), shellHtml);

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
