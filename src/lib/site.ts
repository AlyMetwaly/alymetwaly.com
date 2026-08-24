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
