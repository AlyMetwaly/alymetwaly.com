import portraitAsset from "@/assets/portrait.JPG";
import { absoluteUrl, SITE_URL } from "@/lib/site";
import { SAME_AS } from "@/lib/social";

/**
 * The one canonical job title.
 *
 * Rendered as visible text on talk-page speaker cards AND used as the schema
 * `jobTitle` below, from this single constant, so what a reader sees and what a
 * crawler reads cannot disagree.
 */
export const JOB_TITLE = "AI Transformation Leader & Advisor";

/**
 * Person schema, defined once and shared by every page that emits it.
 *
 * This module exists because it previously did not. The homepage and the talk
 * page each carried their own copy of this object, and the moment the job title
 * changed on one, the two disagreed -- which is exactly the entity-resolution
 * problem the site was already fighting: one person, several job titles,
 * nothing for a crawler to reconcile.
 *
 * Import it. Do not copy it. A second copy is a second title waiting to happen.
 *
 * There is deliberately no `@id`. The original object had none, and inventing
 * one is a separate decision about how this entity is identified across the
 * site -- worth doing, but not as a side effect of a copy edit.
 *
 * TanStack renders a "script:ld+json" meta entry as
 * <script type="application/ld+json"> in <head>, JSON-stringified and
 * HTML-escaped.
 */
export const personSchema = {
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
  // Shares one source with the footer links so the rendered profiles and the
  // identity signal cannot drift apart.
  sameAs: [...SAME_AS],
};
