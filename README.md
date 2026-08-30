# alymetwaly.com

The personal site of **Aly Metwaly** — AI Transformation Leader & Advisor.

Live at **[alymetwaly.com](https://alymetwaly.com)**.

I design enterprise AI operating models — governance, adoption, measurement, change
management — for organisations moving from AI experimentation to repeatable execution.
I also build the things I talk about. This site is one of them: hand-built, statically
prerendered, and shipped from a single deploy path I own end to end.

**The source is open on purpose.** If you are a consultant, speaker or operator who needs
a site that does real work — talk pages behind a QR code, an Open Graph card that does not
embarrass you, structured data a search engine can actually resolve — take it. The code is
MIT. [Skip to how](#using-this-for-your-own-site).

---

## Why this repo is worth reading

Most personal sites are a template with the colours changed. What is interesting here is
the constraints, and what they forced:

**It is a static site that behaves like an app.** Every route is prerendered to its own
HTML file at build time, so GitHub Pages — a plain file host with no server and no SPA
history fallback — serves real HTML for `/about`, `/playbook`, `/splash` and the rest. The
client router takes over after hydration.

**The build fails rather than shipping something broken.** Three guards, each added after
something actually went wrong in production:

- Every route in the manifest must emit a file. A routing change that silently stops
  producing `/speaking/index.html` fails the build instead of publishing a 404.
- Every local asset referenced by published HTML must exist on disk. A stale prerendered
  page pointing at a previous build's hashed filenames is exactly how this site once
  served blank pages.
- `404.html` is rendered as a route-agnostic shell, not a copy of the homepage. The
  homepage copy embeds router state for `/`, so serving it at an unknown URL fails
  hydration with `Invariant failed` and renders nothing at all.

**One publish path, deliberately.** There were briefly two — a GitHub Actions workflow and
`npm run deploy` — both writing to the same Pages site and overwriting each other.
Production ended up in a mixed state: `/` current, `/about` a stale stub, `/speaking` and
`/playbook` 404ing, depending on which ran last. The workflow was deleted and
`npm run deploy` is now the only way anything reaches production.

**Identity is single-sourced.** Structured identity lives in one object
([`IDENTITY` in `src/lib/site.ts`](src/lib/site.ts)) and feeds the visible speaker card,
the footer, and the schema.org `Person` object together. This is not tidiness for its own
sake: the site previously carried two copies of the Person schema, and the moment a job
title changed on one page the two disagreed — one person, several job titles, nothing for
a crawler to reconcile.

**Talk pages are permanent, one per event.** A printed QR code at the end of a keynote
points at a URL that keeps working: the download, where to follow the work, and past
talks. Pages accumulate rather than being recycled, because the URL outlives the event —
it ends up in LinkedIn posts and on printed handouts.

**Assets are generated, not hand-exported.** The Open Graph card, the favicon set and the
printed QR codes are produced by scripts in [`scripts/`](scripts) — fonts inlined so
nothing silently falls back, and the QR output decoded back to its own URL to prove it
scans before it goes to print.

**No component library.** Ten runtime dependencies, fifteen hand-written components, design
tokens in [`src/styles.css`](src/styles.css). The scaffold shipped with 46 unused UI
components and 52 dependencies; they were deleted once it was clear nothing imported them.

---

## Using this for your own site

You are welcome to. The engineering is the reusable part — the writing and the photographs
are not (see [Licence](#licence)).

**Configuration — change these and the structure follows:**

| File                                                           | What                                                                       |
| -------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`src/lib/site.ts`](src/lib/site.ts)                           | `IDENTITY` (name, job title, employer, location) and `SITE_URL`            |
| [`src/lib/social.ts`](src/lib/social.ts)                       | Profile URLs. Feeds the footer _and_ schema `sameAs`, so they cannot drift |
| [`src/lib/sections.ts`](src/lib/sections.ts)                   | Navigation                                                                 |
| [`src/styles.css`](src/styles.css)                             | Design tokens — colour, type scale, spacing                                |
| [`vite.config.ts`](vite.config.ts)                             | `SITE_HOST`, the route manifest, downloadable files                        |
| [`scripts/prepare-gh-pages.mjs`](scripts/prepare-gh-pages.mjs) | `CUSTOM_DOMAIN` and the route guard                                        |
| [`public/robots.txt`](public/robots.txt)                       | Sitemap URL                                                                |

**Content — replace wholesale:** the six `*Section.tsx` components and the nine route
files in [`src/routes/`](src/routes) hold prose. That is writing, not configuration, and
you are bringing your own. Swap [`src/assets/portrait.JPG`](src/assets) for your photo.

**Then:** delete `src/data/talks/` and `public/decks/`, regenerate the favicon and OG card
from your own artwork, and point the domain at your Pages site.

Being honest about scope: this is a repo to fork and gut, not a themeable template. There
is no config file that turns it into your site — you will be editing components. What you
get is a working build pipeline, a deploy path that fails loudly instead of silently, and
a set of decisions already argued out.

If you use it, I would enjoy hearing about it — but you owe me nothing.

---

## Stack

|           |                                                             |
| --------- | ----------------------------------------------------------- |
| Framework | TanStack Start (file-based routing, SSR + prerender)        |
| UI        | React 19, Tailwind CSS v4 (`@theme` tokens, oklch)          |
| Build     | Vite 8                                                      |
| Hosting   | GitHub Pages, custom domain, published from `gh-pages`      |
| Analytics | None. No third-party scripts, no cookies, no consent banner |

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

Builds, then publishes `dist/` to the `gh-pages` branch. The only publish path; see above
for why there is exactly one.

## Adding a talk page

1. `src/data/talks/<slug>.json` — see the `Talk` type in
   [`src/components/TalkPage.tsx`](src/components/TalkPage.tsx)
2. `src/routes/<slug>.tsx` — three lines; copy `splash.tsx`
3. Add the path to `ROUTES` in [`vite.config.ts`](vite.config.ts) (prerender + sitemap)
4. Add it to `REQUIRED_ROUTES` in
   [`scripts/prepare-gh-pages.mjs`](scripts/prepare-gh-pages.mjs) (build guard)

Steps 3 and 4 are both required. Missing either is how a route falls through to `404.html`
instead of getting its own file.

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
| `node scripts/qr.mjs [url]`       | QR code — SVG, PNG, and a labelled card                |
| `node scripts/og-image/build.mjs` | Open Graph card                                        |
| `node scripts/make-favicon.mjs`   | Favicon set                                            |

## Licence

The **code** is [MIT](LICENSE) — fork it, ship it, no attribution required.

The **content is not**: the writing, talk material, workbook, photographs and likeness are
all rights reserved. Take the engineering, bring your own story.
