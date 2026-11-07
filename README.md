# alymetwaly.com

The personal site of **Aly Metwaly**, AI Transformation Leader & Advisor.

Live at **[alymetwaly.com](https://alymetwaly.com)**. Source on **[GitHub](https://github.com/AlyMetwaly)**.

I advise on enterprise AI transformation. I also ship the playbooks, agent workflows, and open
source that make the advice repeatable. One example is this site itself, documented on the
**[Building](https://alymetwaly.com/building)** page: hand-built, statically prerendered, and
published from a single deploy path I own end to end.

I design enterprise AI operating models for organisations moving from experimentation to
repeatable execution: governance, adoption, measurement, and change management. **The source is
open on purpose.** If you are a consultant, speaker, or operator who needs a site that does real
work (talk pages behind a QR code, an Open Graph card that does not embarrass you, structured
data a search engine can resolve), take it. The code is MIT. [Skip to how](#using-this-for-your-own-site).

---

## Why this repo is worth reading

Most personal sites are a template with the colours changed. What is interesting here is the
constraints, and what they forced:

**It is a static site that behaves like an app.** Every route is prerendered to its own HTML
file at build time, so GitHub Pages (a plain file host with no server and no SPA history
fallback) serves real HTML for `/about`, `/playbook`, `/building`, `/splash`, and the rest. The
client router takes over after hydration.

**The build fails rather than shipping something broken.** Three guards, each added after
something actually went wrong in production:

- Every route in the manifest must emit a file. A routing change that silently stops producing
  `/speaking/index.html` fails the build instead of publishing a 404.
- Every local asset referenced by published HTML must exist on disk. A stale prerendered page
  pointing at a previous build's hashed filenames is exactly how this site once served blank
  pages.
- `404.html` is rendered as a route-agnostic shell, not a copy of the homepage. The homepage
  copy embeds router state for `/`, so serving it at an unknown URL fails hydration with
  `Invariant failed` and renders nothing at all.

**One publish path, deliberately.** There were briefly two: a GitHub Actions workflow and
`npm run deploy`, both writing to the same Pages site and overwriting each other. Production
ended up in a mixed state (`/` current, `/about` a stale stub, `/speaking` and `/playbook`
404ing, depending on which ran last). The workflow was deleted and `npm run deploy` is now the
only way anything reaches production.

**Identity is single-sourced.** Structured identity lives in one object
([`IDENTITY` in `src/lib/site.ts`](src/lib/site.ts)) and feeds the visible speaker card, the
footer, and the schema.org `Person` object together. The site previously carried two copies of
the Person schema; when a job title changed on one page the two disagreed, so crawlers saw one
person with several job titles.

**Talk pages are permanent, one per event.** A printed QR code at the end of a keynote points
at a URL that keeps working: the download, where to follow the work, and past talks. Pages
accumulate rather than being recycled, because the URL outlives the event and ends up in LinkedIn
posts and on printed handouts.

**Assets are generated, not hand-exported.** The Open Graph card, the favicon set, and the
printed QR codes are produced by scripts in [`scripts/`](scripts). Fonts are vendored in
`public/fonts/` and loaded from the site, not from a third-party CDN. QR output is decoded back to
its own URL to prove it scans before print.

**No component library.** Ten runtime dependencies, seventeen hand-written components, design
tokens in [`src/styles.css`](src/styles.css). The original scaffold shipped with dozens of
unused UI packages; they were deleted once it was clear nothing imported them.

---

## Using this for your own site

You are welcome to. The engineering is the reusable part. The writing and the photographs are not
(see [Licence](#licence)).

**Configuration. Change these and the structure follows:**

| File                                                           | What                                                                                                 |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [`src/lib/site.ts`](src/lib/site.ts)                           | `IDENTITY` (name, job title, employer, location) and `SITE_URL`                                      |
| [`src/lib/social.ts`](src/lib/social.ts)                       | Profile URLs. Feeds the footer _and_ schema `sameAs`, so they cannot drift                           |
| [`src/lib/contact.ts`](src/lib/contact.ts)                     | Contact alias and email templates (general, advisory, speaking). Read at click time, not in the HTML |
| [`src/lib/sections.ts`](src/lib/sections.ts)                   | Navigation                                                                                           |
| [`src/styles.css`](src/styles.css)                             | Design tokens: colour, type scale, spacing                                                           |
| [`vite.config.ts`](vite.config.ts)                             | `SITE_HOST`, the route manifest, downloadable files                                                  |
| [`scripts/prepare-gh-pages.mjs`](scripts/prepare-gh-pages.mjs) | `CUSTOM_DOMAIN` and the route and asset guards                                                       |
| [`public/robots.txt`](public/robots.txt)                       | Sitemap URL                                                                                          |

**Content. Replace wholesale:** the seven `*Section.tsx` components and the ten route files in
[`src/routes/`](src/routes) (nine page routes plus [`__root.tsx`](src/routes/__root.tsx)) hold
prose. That is writing, not configuration, and you are bringing your own. Swap
[`src/assets/portrait.JPG`](src/assets) for your photo.

**Then:** delete `src/data/talks/` and `public/decks/`, regenerate the favicon and OG card from
your own artwork, and point the domain at your Pages site.

Being honest about scope: this is a repo to fork and gut, not a themeable template. There is no
config file that turns it into your site. You will edit components. What you get is a working
build pipeline, a deploy path that fails loudly instead of silently, and decisions already
argued out.

If you use it, I would enjoy hearing about it, but you owe me nothing.

---

## Stack

|           |                                                                 |
| --------- | --------------------------------------------------------------- |
| Framework | TanStack Start (file-based routing, SSR + prerender)            |
| UI        | React 19, Tailwind CSS v4 (`@theme` tokens, oklch)              |
| Build     | Vite 8                                                          |
| Hosting   | GitHub Pages, custom domain `alymetwaly.com`, `gh-pages` branch |
| Analytics | None. No third-party scripts, no cookies, no consent banner     |

## Getting started

```bash
npm install
npm run dev
```

The dev server does **not** reproduce production behaviour: it has an SPA fallback, so a broken
route still looks fine. To test what GitHub Pages will actually serve:

```bash
npm run build
npm run preview:static
```

That serves `dist/` with Pages semantics: no history fallback, real 404s.

## Making a change

1. Branch from `main`.
2. `npm run dev` while you edit.
3. `npm run lint` before you commit.
4. `npm run build` and `npm run preview:static` to catch missing routes and broken asset refs.
5. Commit on your branch, merge to `main` when the change is ready.

Do not treat a green dev server as proof the static export is correct. Only `preview:static`
exercises the same file layout GitHub Pages serves.

## Deploying

Production updates come from an up-to-date `main` after your change is merged.

```bash
npm run deploy
```

`predeploy` runs `npm run build` first. The command publishes the current working tree's `dist/`
to the `gh-pages` branch via `gh-pages`. If you run it from a feature branch, you ship unmerged
work to the live domain. There is no second publish path (see above).

**Pre-deploy checklist (on `main`):**

- Working tree is clean and matches the merge you intend to ship.
- `npm run lint`
- `npm run build`
- `npm run preview:static` and spot-check the routes you changed.

## Adding a page

Every public URL needs its own prerendered file on GitHub Pages. Register it in two places or
the build may pass while production 404s.

### Normal page (for example `/building`)

1. Add `src/routes/<name>.tsx`. Copy an existing page such as [`building.tsx`](src/routes/building.tsx)
   or [`about.tsx`](src/routes/about.tsx).
2. Add the path to `ROUTES` in [`vite.config.ts`](vite.config.ts) (prerender + sitemap).
3. Add the same path to `REQUIRED_ROUTES` in
   [`scripts/prepare-gh-pages.mjs`](scripts/prepare-gh-pages.mjs) (post-build guard).
4. If the page belongs in the header, add an entry to [`src/lib/sections.ts`](src/lib/sections.ts).

Steps 2 and 3 are both required. Missing either is how a route falls through to `404.html`
instead of getting its own file.

### Talk page (permanent event URL)

1. `src/data/talks/<slug>.json`. See the `Talk` type in
   [`src/components/TalkPage.tsx`](src/components/TalkPage.tsx).
2. `src/routes/<slug>.tsx`. Three lines; copy [`splash.tsx`](src/routes/splash.tsx).
3. Add the path to `ROUTES` in [`vite.config.ts`](vite.config.ts).
4. Add it to `REQUIRED_ROUTES` in [`scripts/prepare-gh-pages.mjs`](scripts/prepare-gh-pages.mjs).

Talk routes are not in the header nav. They are meant for QR codes and shares after an event.

Then generate its QR code:

```bash
node scripts/qr.mjs https://alymetwaly.com/<slug>
```

Current prerender manifest (keep both lists in sync):

`ROUTES` / `REQUIRED_ROUTES`: `/`, `/playbook`, `/experience`, `/advisory`, `/speaking`, `/about`,
`/building`, `/contact`, `/splash`.

## Scripts

| Command                           | Does                                                 |
| --------------------------------- | ---------------------------------------------------- |
| `npm run dev`                     | Dev server                                           |
| `npm run prebuild`                | Cleans `dist/` (`scripts/clean-dist.mjs`)            |
| `npm run build`                   | Vite prerender; runs `prebuild` and `postbuild`      |
| `npm run postbuild`               | Assemble and verify `dist/` (`prepare-gh-pages.mjs`) |
| `npm run preview`                 | Vite preview of the build output                     |
| `npm run preview:static`          | Serve `dist/` with GitHub Pages semantics            |
| `npm run predeploy`               | Runs `npm run build`                                 |
| `npm run deploy`                  | Build (via `predeploy`) and publish to `gh-pages`    |
| `npm run lint`                    | ESLint over the repo                                 |
| `npm run format`                  | Prettier write over the repo                         |
| `node scripts/qr.mjs [url]`       | QR code: SVG, PNG, and a labelled card               |
| `node scripts/og-image/build.mjs` | Open Graph card                                      |
| `node scripts/make-favicon.mjs`   | Favicon set                                          |

## Licence

The **code** is [MIT](LICENSE). Fork it, ship it, no attribution required.

The **content is not**: the writing, talk material, workbook, photographs and likeness are all
rights reserved. Take the engineering, bring your own story.
