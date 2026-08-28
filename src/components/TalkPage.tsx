import { useEffect } from "react";
import { Link } from "@tanstack/react-router";

import portraitAsset from "@/assets/portrait.JPG";
import { Mark } from "@/components/SocialLinks";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { track, type TalkEvent } from "@/lib/analytics";
import { absoluteUrl, SITE_URL } from "@/lib/site";
import { SAME_AS, SOCIAL_LINKS, X_URL, type SocialPlatform } from "@/lib/social";

/**
 * One page per talk, each at its own permanent URL.
 *
 * A page stays live after its event: the URL goes on a printed QR code, gets
 * shared in a LinkedIn post, and keeps working indefinitely. So a new event is
 * a new route file plus a new data file, not an edit that overwrites the last
 * event's page.
 *
 * Adding an event is four steps:
 *   1. src/data/talks/<slug>.json          (see the Talk type below)
 *   2. src/routes/<slug>.tsx               (three lines; copy splash.tsx)
 *   3. ROUTES in vite.config.ts            (prerender + sitemap)
 *   4. REQUIRED_ROUTES in scripts/prepare-gh-pages.mjs   (build guard)
 *
 * Steps 3 and 4 are both mandatory. Missing either is how a route falls through
 * to 404.html instead of getting its own prerendered file.
 */
export type Talk = {
  title: string;
  thesis: string;
  event: string;
  date: string;
  slug: string;
  deckUrl: string;
  /**
   * Label for the download button. Optional: some events hand out the slide
   * deck, others a workbook or a handout, and the button should say which.
   * Falls back to slides.
   */
  deckLabel?: string;
  pastTalks: ReadonlyArray<{
    title: string;
    event: string;
    date: string;
    deckUrl: string;
  }>;
};

/**
 * The one canonical job title.
 *
 * Rendered on the speaker card AND used as `jobTitle` below, from this single
 * constant, so the visible text and the structured data cannot disagree.
 */
const JOB_TITLE = "AI Transformation Manager";

/**
 * Person schema.
 *
 * A verbatim copy of the homepage object in src/routes/index.tsx -- including
 * the absence of an `@id`, which that object genuinely does not have. Not
 * extracted into a shared module with the homepage, because that would mean
 * editing index.tsx and this work was scoped to add no risk to a route that
 * already works.
 *
 * The homepage remains the source of truth. If jobTitle changes there, change
 * it here in the same commit: two Person objects disagreeing about the title is
 * precisely the entity-resolution problem these pages must not worsen.
 */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aly Metwaly",
  url: SITE_URL,
  jobTitle: JOB_TITLE,
  worksFor: {
    "@type": "Organization",
    name: "Nokia",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Espoo",
    addressCountry: "FI",
  },
  image: absoluteUrl(portraitAsset),
  sameAs: [...SAME_AS],
};

const hrefFor = (key: SocialPlatform) => SOCIAL_LINKS.find((link) => link.key === key)?.href ?? "";

/**
 * Secondary calls to action, one full-width button each.
 *
 * These carry equal visual weight on purpose. The audience these pages have to
 * serve second -- the people who do not want the deck at all -- are choosing
 * between platforms, not between "LinkedIn" and "some icons", so the choices
 * are presented as peers.
 *
 * The verbs are platform-specific because that is what each platform's own
 * affordance is called: you follow on LinkedIn and Instagram, you subscribe on
 * YouTube. Any entry with an empty href drops out rather than rendering a
 * button that goes nowhere -- which is what keeps X off the page until X_URL
 * is filled in.
 */
const SOCIAL_CTAS: ReadonlyArray<{
  key: SocialPlatform;
  label: string;
  sublabel: string;
  href: string;
  event: TalkEvent;
}> = (
  [
    {
      key: "linkedin",
      label: "Follow on LinkedIn",
      sublabel: "Frameworks and rollout notes from live programs",
      event: "talk.linkedin",
    },
    {
      key: "instagram",
      label: "Follow on Instagram",
      sublabel: "Building in public: the work behind the frameworks",
      event: "talk.instagram",
    },
    {
      key: "youtube",
      label: "Subscribe on YouTube",
      sublabel: "This keynote, and the ones after it",
      event: "talk.youtube",
    },
    {
      key: "x",
      label: "Follow on X",
      sublabel: "Shorter takes, in the moment",
      event: "talk.x",
    },
  ] as const
)
  .map((cta) => ({ ...cta, href: cta.key === "x" ? X_URL : hrefFor(cta.key) }))
  .filter((cta) => cta.href !== "");

/**
 * Head metadata for a talk page.
 *
 * The title and description are built from the talk rather than being generic,
 * because these URLs get shared in LinkedIn posts: the card is the first thing
 * most people see, and "Talk slides" tells them nothing. The thesis is the
 * description for the same reason -- it is already the sharpest sentence about
 * the talk.
 *
 * Note the og:image is inherited from __root.tsx and is the personal brand
 * card, not a per-talk card. Worth generating per event eventually; the
 * machinery in scripts/og-image/ already exists.
 */
export function talkHead(talk: Talk, path: string) {
  const pageTitle = `${talk.title} · Aly Metwaly`;
  const description =
    talk.thesis || `Slides from ${talk.event}, plus where to follow the work. No email required.`;

  return {
    meta: [
      { title: pageTitle },
      { name: "description", content: description },
      { name: "author", content: "Aly Metwaly" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: absoluteUrl(path) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: description },
      { "script:ld+json": personSchema },
    ],
    links: [{ rel: "canonical", href: absoluteUrl(path) }],
    // Plausible loads on talk routes only -- no other page gains a third-party
    // script. The inline stub comes first so events fired on mount are queued
    // rather than dropped while the deferred script is still in flight.
    scripts: [
      {
        children:
          "window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)}",
      },
      {
        src: "https://plausible.io/js/script.js",
        defer: true,
        "data-domain": "alymetwaly.com",
      },
    ],
  };
}

export function TalkPage({ talk }: { talk: Talk }) {
  const { slug, thesis, title, event, date, deckUrl, deckLabel, pastTalks } = talk;

  useEffect(() => {
    track("talk.view", slug);
  }, [slug]);

  const eyebrow = [event, date].filter(Boolean).join(" · ");

  return (
    <SiteLayout>
      {/*
        Everything down to the last follow button is sized to clear the fold on
        a 390x844 phone with the sticky header in place. Someone who scans the
        QR code purely to find out who was on stage must never have to scroll.
      */}
      <section className="border-b border-border" aria-labelledby="talk-heading">
        <div className="mx-auto max-w-[1280px] px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:px-12">
          <div className="max-w-2xl">
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}

            <h1
              id="talk-heading"
              className="mt-3 font-display text-[clamp(1.875rem,7vw,3.5rem)] leading-[1.05] tracking-[-0.02em]"
            >
              {title}
            </h1>

            {/* One line under the title, pitched between the title and body
                copy. Same subline idiom the homepage hero uses. Renders
                nothing at all if the thesis is ever emptied. */}
            {thesis && (
              <p className="mt-3 text-lg leading-snug text-muted-foreground sm:text-xl">{thesis}</p>
            )}

            <div className="mt-7 flex items-center gap-4">
              <img
                src={portraitAsset}
                alt="Aly Metwaly"
                className="h-14 w-14 shrink-0 rounded-full object-cover sm:h-16 sm:w-16"
                style={{ background: "var(--muted)" }}
              />
              <div className="min-w-0">
                <p className="font-display text-lg leading-tight tracking-tight sm:text-xl">
                  Aly Metwaly
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
                  {JOB_TITLE}
                </p>
                <Link
                  to="/"
                  className="link-accent-underline mt-1 inline-block text-sm text-muted-foreground"
                >
                  alymetwaly.com
                </Link>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {/*
                No `download` attribute and no same-tab navigation, both
                deliberate. iOS Safari handles a plain target=_blank PDF with its
                own viewer and share sheet, which is the behaviour people expect
                on a phone; `download` there is inconsistent across versions.
                Opening a new tab also leaves this page intact behind the PDF, so
                the click event has time to flush.
              */}
              <a
                href={deckUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("talk.download", slug)}
                className="flex min-h-14 w-full items-center justify-center rounded-full px-6 text-base font-medium transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                {deckLabel ?? "Download the slides (PDF)"}
              </a>
            </div>

            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
              Where I publish
            </p>

            <div className="mt-3 space-y-3">
              {SOCIAL_CTAS.map((cta) => (
                <a
                  key={cta.key}
                  href={cta.href}
                  target="_blank"
                  // rel="me" is deliberate here as it is in the footer: it ties
                  // each profile to the domain as an identity signal.
                  rel="me noopener noreferrer"
                  onClick={() => track(cta.event, slug)}
                  className="btn-accent-outline flex min-h-16 w-full items-center justify-center gap-3 rounded-full border border-border px-4 hover:bg-muted"
                >
                  <Mark platform={cta.key} />
                  {/*
                    The sublabel must stay on one line at 375px, so it is sized
                    to the longest of the four strings rather than to taste.
                    whitespace-nowrap makes a regression visible as overflow
                    instead of silently wrapping to two lines.
                  */}
                  <span className="flex min-w-0 flex-col items-center leading-tight">
                    <span className="text-base font-medium">{cta.label}</span>
                    <span className="mt-0.5 whitespace-nowrap text-[11px] font-normal text-muted-foreground">
                      {cta.sublabel}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Renders nothing at all when the list is empty -- no stray heading. */}
      {pastTalks.length > 0 && (
        <section className="border-b border-border" aria-labelledby="past-talks-heading">
          <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
            <h2 id="past-talks-heading" className="section-eyebrow">
              Past talks
            </h2>
            <ul className="mt-6 max-w-3xl divide-y divide-rule border-t border-rule">
              {pastTalks.map((talkItem) => (
                <li key={`${talkItem.event}-${talkItem.title}`} className="py-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
                    <span>{talkItem.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{talkItem.event}</span>
                  </div>
                  <p className="mt-1.5 text-base leading-snug">
                    {talkItem.deckUrl ? (
                      <a
                        href={talkItem.deckUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-accent-underline"
                      >
                        {talkItem.title}
                      </a>
                    ) : (
                      talkItem.title
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
