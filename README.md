# alymetwaly.com

The personal site of **Aly Metwaly** — AI Transformation Leader & Advisor.

Live at **[alymetwaly.com](https://alymetwaly.com)**.

I design enterprise AI operating models — governance, adoption, measurement, change
management — for organisations moving from AI experimentation to repeatable execution.
I also build the things I talk about. This repository is one of them: the site is
hand-built, statically prerendered, and shipped from a single deploy path I own
end to end.

---

## Why this repo is worth a look

Most personal sites are a template with the colours changed. The interesting parts of
this one are the constraints it was built under, and what those forced:

**It is a static site that behaves like an app.** Every route is prerendered to its own
HTML file at build time, so GitHub Pages — a plain file host with no server and no SPA
history fallback — serves real HTML for `/about`, `/playbook`, `/splash` and the rest.
The client router takes over after hydration.

**The build fails rather than shipping something broken.** Three guards, all added after
something actually went wrong in production:

- Every route in the manifest must emit a file. A routing change that silently stops
  producing `/speaking/index.html` fails the build instead of publishing a 404.
- Every local asset referenced by published HTML must exist on disk. A stale prerendered
  page pointing at a previous build's hashed filenames is exactly how the site once
  served blank pages.
- `404.html` is rendered as a route-agnostic shell, not a copy of the homepage. The
  homepage copy embeds router state for `/`, so serving it at an unknown URL fails
  hydration with `Invariant failed` and renders nothing at all.

**One publish path, deliberately.** There were briefly two — a GitHub Actions workflow
and `npm run deploy` — both writing to the same Pages site and overwriting each other.
Production ended up in a mixed state: `/` current, `/about` a stale stub, `/speaking`
and `/playbook` 404ing, depending on which ran last. The workflow was removed and
`npm run deploy` is now the only way anything reaches production.

**Identity is single-sourced.** Schema.org `Person` data lives in exactly one module
([`src/lib/person.ts`](src/lib/person.ts)) and is imported by every page that emits it.
This is not tidiness for its own sake: the site previously carried two copies, and the
moment a job title changed on one page, the two disagreed — one person, several job
titles, nothing for a crawler to reconcile.

**Talk pages are permanent, one per event.** A printed QR code at the end of a keynote
points at a URL that keeps working: the deck download, where to follow the work, and
past talks. Pages accumulate rather than being recycled, because the URL outlives the
event — it ends up in LinkedIn posts and on printed material. Adding one is a data file,
a three-line route, and two manifest entries.

**Assets are generated, not hand-exported.** The Open Graph card, the favicon set and
the printed QR codes are all produced by scripts in [`scripts/`](scripts) — with fonts
inlined so nothing can silently fall back, and the QR output decoded back to its URL
to prove it scans before it goes to print.

---

## Stack

|           |                                                        |
| --------- | ------------------------------------------------------ |
| Framework | TanStack Start (file-based routing, SSR + prerender)   |
| UI        | React 19, Tailwind CSS v4 (`@theme` tokens, oklch)     |
| Build     | Vite 8                                                 |
| Hosting   | GitHub Pages, custom domain, published from `gh-pages` |
| Analytics | Plausible, scoped to talk pages only                   |

Ten runtime dependencies. No component library — all 15 components are hand-written,
and the design tokens live in [`src/styles.css`](src/styles.css).

## Getting started

```bash
npm install
npm run dev
```

The dev server does **not** reproduce production behaviour: it has an SPA fallback, so a
broken route still looks fine. To test what GitHub Pages will actually serve:

```bash
npm run build
npm run preview:static
```

That serves `dist/` with Pages semantics — no history fallback, real 404s.

## Deploying

```bash
npm run deploy
```

Builds, then publishes `dist/` to the `gh-pages` branch. This is the only publish path;
see the note above about why.

## Adding a talk page

1. `src/data/talks/<slug>.json` — see the `Talk` type in
   [`src/components/TalkPage.tsx`](src/components/TalkPage.tsx)
2. `src/routes/<slug>.tsx` — three lines; copy `splash.tsx`
3. Add the path to `ROUTES` in [`vite.config.ts`](vite.config.ts) (prerender + sitemap)
4. Add it to `REQUIRED_ROUTES` in
   [`scripts/prepare-gh-pages.mjs`](scripts/prepare-gh-pages.mjs) (build guard)

Steps 3 and 4 are both required. Missing either is how a route falls through to
`404.html` instead of getting its own file.

Then generate its QR code:

```bash
node scripts/qr.mjs https://alymetwaly.com/<slug>
```

## Scripts

| Command                           | Does                                                   |
| --------------------------------- | ------------------------------------------------------ |
| `npm run dev`                     | Dev server                                             |
| `npm run build`                   | Prerender all routes, then assemble and verify `dist/` |
| `npm run preview:static`          | Serve `dist/` with GitHub Pages semantics              |
| `npm run deploy`                  | Build and publish to `gh-pages`                        |
| `npm run lint` / `format`         | ESLint + Prettier                                      |
| `node scripts/qr.mjs [url]`       | QR code, SVG + PNG + labelled card                     |
| `node scripts/og-image/build.mjs` | Open Graph card                                        |
| `node scripts/make-favicon.mjs`   | Favicon set                                            |

## Licence

Code is [MIT](LICENSE). Written content, talk material, the workbook, and photographs
are all rights reserved — reuse the code, not the words or the images.
