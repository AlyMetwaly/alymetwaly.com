import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import portraitAsset from "@/assets/portrait.JPG";
import slides from "@/data/slides.json";
import { Mark } from "@/components/SocialLinks";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { track, type SlidesEvent } from "@/lib/analytics";
import { absoluteUrl, SITE_URL } from "@/lib/site";
import { SAME_AS, SOCIAL_LINKS, X_URL, type SocialPlatform } from "@/lib/social";

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
 * extracted into a shared module, because that would mean editing index.tsx
 * and this change was scoped to add no risk to a route that already works.
 *
 * The homepage remains the source of truth. If jobTitle changes there, change
 * it here in the same commit: two Person objects disagreeing about the title is
 * precisely the entity-resolution problem this page must not worsen.
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

const LINKEDIN_HREF =
  SOCIAL_LINKS.find((link) => link.key === "linkedin")?.href ??
  "https://www.linkedin.com/in/aly-metwaly/";

/**
 * The secondary icon row: Instagram, YouTube, X.
 *
 * LinkedIn is deliberately absent -- it is the full-width button above, and
 * repeating it here would split the signal on the one action that matters most
 * to someone who does not want the deck.
 *
 * X appears only once X_URL is filled in. An icon that links nowhere is worse
 * than no icon.
 */
const ICON_ROW: ReadonlyArray<{
  key: SocialPlatform;
  label: string;
  href: string;
  event: SlidesEvent;
}> = [
  ...SOCIAL_LINKS.filter((link) => link.key === "instagram" || link.key === "youtube").map(
    (link) => ({
      key: link.key,
      label: link.label,
      href: link.href,
      event: (link.key === "instagram" ? "slides.instagram" : "slides.youtube") as SlidesEvent,
    }),
  ),
  ...(X_URL
    ? [{ key: "x" as SocialPlatform, label: "X", href: X_URL, event: "slides.x" as SlidesEvent }]
    : []),
];

export const Route = createFileRoute("/slides")({
  head: () => ({
    meta: [
      { title: "Talk slides · Aly Metwaly" },
      {
        name: "description",
        content:
          "Download the slides from Aly Metwaly's talk, and find where to follow his work on enterprise AI transformation, operating models, and adoption at scale.",
      },
      { name: "author", content: "Aly Metwaly" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Talk slides · Aly Metwaly" },
      {
        property: "og:description",
        content: "Slides from the talk, plus where to follow the work. No email required.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: absoluteUrl("/slides") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Talk slides · Aly Metwaly" },
      {
        name: "twitter:description",
        content: "Slides from the talk, plus where to follow the work. No email required.",
      },
      { "script:ld+json": personSchema },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/slides") }],
    // Plausible loads on this route only -- no other page gains a third-party
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
  }),
  component: SlidesPage,
});

function SlidesPage() {
  const { slug, thesis, title, event, date, deckUrl, pastTalks } = slides;

  useEffect(() => {
    track("slides.view", slug);
  }, [slug]);

  const eyebrow = [event, date].filter(Boolean).join(" · ");

  return (
    <SiteLayout>
      {/*
        Everything down to the icon row is sized to clear the fold on a 390x844
        phone with the sticky header in place. Someone who scans the QR code
        purely to find out who was on stage must never have to scroll.
      */}
      <section className="border-b border-border" aria-labelledby="slides-heading">
        <div className="mx-auto max-w-[1280px] px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:px-12">
          <div className="max-w-2xl">
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}

            {/* The thesis is the headline when it exists; the talk title stands
                in until it does, so the page always has exactly one h1. */}
            <h1
              id="slides-heading"
              className="mt-3 font-display text-[clamp(1.875rem,7vw,3.5rem)] leading-[1.05] tracking-[-0.02em]"
            >
              {thesis || title}
            </h1>

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
                onClick={() => track("slides.download", slug)}
                className="flex min-h-14 w-full items-center justify-center rounded-full px-6 text-base font-medium transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                Download the slides (PDF)
              </a>

              <a
                href={LINKEDIN_HREF}
                target="_blank"
                rel="me noopener noreferrer"
                onClick={() => track("slides.linkedin", slug)}
                className="btn-accent-outline flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-border px-6 text-base font-medium hover:bg-muted"
              >
                <Mark platform="linkedin" />
                Follow on LinkedIn
              </a>
            </div>

            <ul className="mt-5 flex flex-wrap items-center gap-2">
              {ICON_ROW.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    aria-label={`Aly Metwaly on ${item.label}`}
                    onClick={() => track(item.event, slug)}
                    className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <Mark platform={item.key} />
                  </a>
                </li>
              ))}
            </ul>
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
              {pastTalks.map((talk) => (
                <li key={`${talk.event}-${talk.title}`} className="py-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
                    <span>{talk.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{talk.event}</span>
                  </div>
                  <p className="mt-1.5 text-base leading-snug">
                    {talk.deckUrl ? (
                      <a
                        href={talk.deckUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-accent-underline"
                      >
                        {talk.title}
                      </a>
                    ) : (
                      talk.title
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
