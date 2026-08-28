// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const SITE_HOST = "https://alymetwaly.com";

// Kept in sync with `deckUrl` in the talk data under src/data/talks/.
const DECK_PATH = "/decks/placeholder.pdf";

// Every route that must exist as its own static file on GitHub Pages.
// Keep in sync with src/routes/. A missing entry means that URL falls back
// to 404.html instead of being served its own prerendered HTML.
const ROUTES = [
  "/",
  "/playbook",
  "/experience",
  "/advisory",
  "/speaking",
  "/about",
  "/contact",
  // One entry per talk page. Each is a permanent URL: it goes on a printed QR
  // code and gets shared in a LinkedIn post, so pages are added here, never
  // recycled. Not in the header nav.
  "/splash",
] as const;

export default defineConfig({
  nitro: false,
  vite: {
    base: "/",
    build: {
      outDir: "dist",
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },

    // Prerender each route to its own file. GitHub Pages is a plain static
    // host with no SPA history fallback, so without this every route except
    // "/" resolves to 404.html.
    //
    // autoSubfolderIndex emits "/about" as "about/index.html", which is the
    // layout Pages needs to serve it at /about.
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      crawlLinks: true,
      // Fail the build rather than silently publishing a site with missing
      // or stale route files.
      failOnError: true,
      // crawlLinks follows every href it finds, including links to static
      // files -- the keynote decks linked from talk pages are the first. Not
      // pages: prerendering them is meaningless and, worse, it lands them in
      // sitemap.xml. Anything with a file extension is not a route.
      filter: ({ path }: { path: string }) => !/\.[^/]+$/.test(path),
    },
    pages: [
      ...ROUTES.map((path) => ({ path })),
      // The keynote deck is a static file, not a page. It is registered here
      // only so it can be excluded from the sitemap: crawlLinks discovers it
      // from a talk page download button, and the sitemap builder reads the
      // discovered page list rather than the prerender filter below.
      { path: DECK_PATH, sitemap: { exclude: true } },
    ],

    // NOTE: the built-in `spa` shell option is deliberately not used here.
    // Its maskPath defaults to "/", and prerender de-duplicates pages through
    // a Map keyed by path, so the shell entry overwrites the real "/" page and
    // no index.html is emitted. Pointing maskPath at a non-route path instead
    // fails the build, because the shell request still resolves the URL and
    // 404s. scripts/prepare-gh-pages.mjs therefore renders the 404 shell
    // directly from the built server bundle.

    sitemap: {
      enabled: true,
      host: SITE_HOST,
    },
  },
});
