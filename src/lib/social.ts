/**
 * Social profile URLs, defined once.
 *
 * Consumed by both the footer links and the homepage Person schema's `sameAs`,
 * so the rendered links and the identity signal cannot drift apart.
 *
 * These strings are exact. Do not normalize trailing slashes or add/remove
 * `www` -- `sameAs` and `rel="me"` are identity claims, and they only resolve
 * if they match the canonical profile URL the platform itself serves.
 */
export type SocialPlatform = "linkedin" | "github" | "instagram" | "youtube" | "x";

export const GITHUB_URL = "https://github.com/AlyMetwaly";

export const SOCIAL_LINKS: ReadonlyArray<{
  key: SocialPlatform;
  label: string;
  href: string;
}> = [
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/aly-metwaly/" },
  { key: "github", label: "GitHub", href: GITHUB_URL },
  { key: "instagram", label: "Instagram", href: "https://instagram.com/alymetwalyai" },
  { key: "youtube", label: "YouTube", href: "https://www.youtube.com/@alymetwalyai" },
];

/**
 * X / Twitter.
 *
 * Deliberately NOT in SOCIAL_LINKS, and therefore not in SAME_AS. Those feed
 * the homepage Person schema, and changing that object was out of scope for
 * the talk-page work -- the site has an entity-resolution problem already and
 * this is not the change that should touch it.
 *
 * Consumed only by the talk pages, which render no X button when this is
 * empty. Fold it into SOCIAL_LINKS when you want it in the footer and in
 * `sameAs` too; that is the right fix, just not a same-day one.
 */
export const X_URL: string = "";

/** Profile URLs for schema.org `sameAs`. */
export const SAME_AS: ReadonlyArray<string> = SOCIAL_LINKS.map((l) => l.href);
