/**
 * Event tracking for the /slides route.
 *
 * Plausible is loaded by that route alone (see the `scripts` entry in
 * src/routes/slides.tsx), not from __root.tsx. Scoping it this way means no
 * other page gains a third-party script, so instrumenting the talk page cannot
 * regress anything that already works. Move the script tag to the root shell if
 * you later want site-wide pageviews.
 *
 * Plausible is cookieless, so this adds no consent-banner obligation.
 */

/** The actions worth measuring on the talk page. */
export type SlidesEvent =
  | "slides.view"
  | "slides.download"
  | "slides.linkedin"
  | "slides.instagram"
  | "slides.youtube"
  | "slides.x";

declare global {
  interface Window {
    plausible?: {
      (event: string, options?: { props?: Record<string, string> }): void;
      /** Present only before the real script loads; calls queue into it. */
      q?: unknown[];
    };
  }
}

/**
 * Record one event, tagged with the talk it belongs to.
 *
 * The slug is baked into the event *name*, not just the props: Plausible treats
 * the name as the primary dimension and gates prop breakdowns behind a paid
 * plan, so `slides.download:kpmg-2026` is what actually lets you compare
 * conversion across events. The props are sent too, for whoever has the plan.
 *
 * Deliberately total. If the script is blocked, still loading, or absent
 * (local dev, no account yet), this is a no-op. A download link must never
 * depend on analytics succeeding -- least of all in front of an audience.
 */
export function track(event: SlidesEvent, slug: string): void {
  if (typeof window === "undefined") return;
  try {
    window.plausible?.(`${event}:${slug}`, { props: { slug, action: event } });
  } catch {
    // Swallow. Instrumentation must never surface to the room.
  }
}
