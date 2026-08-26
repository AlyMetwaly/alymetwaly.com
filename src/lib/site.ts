export const SITE_URL = "https://alymetwaly.com";

/**
 * Absolute URL for a build-time asset or route path.
 *
 * Social crawlers (LinkedIn, Twitter, Slack) do not resolve root-relative
 * og:image/og:url values, so anything that ends up in a meta tag must be
 * absolute.
 */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}

/**
 * Open Graph card.
 *
 * Served from public/ under a stable, unhashed path. The filename is
 * deliberately versioned rather than overwritten: LinkedIn caches by URL for
 * about a week, and a new path is far more reliable than asking its cache to
 * refresh. Bump to -v3 if the artwork changes again.
 */
export const OG_IMAGE = absoluteUrl("/og-image-v2.png");
export const OG_IMAGE_WIDTH = "1200";
export const OG_IMAGE_HEIGHT = "630";
export const OG_IMAGE_ALT =
  "Aly Metwaly beside the line: Enterprise AI doesn’t fail in the pilot. It fails in the rollout.";
