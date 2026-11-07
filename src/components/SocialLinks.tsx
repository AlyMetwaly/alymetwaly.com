import { SOCIAL_LINKS, type SocialPlatform } from "@/lib/social";

/**
 * Inline brand marks, no icon library.
 *
 * Lucide has deprecated its brand icons, so those imports break on a future
 * version bump. The marks sit on a shared 24x24 grid. All but GitHub are
 * hand-drawn outlines with a shared stroke weight and cap height. GitHub is
 * the official filled Octicons mark, copied in as a single path.
 *
 * currentColor throughout -- colour comes from the parent's token, never from
 * a value baked in here.
 */
const MARKS: Record<SocialPlatform, React.ReactNode> = {
  // Rounded square containing a lowercase "in".
  linkedin: (
    <>
      <rect x="2.25" y="2.25" width="19.5" height="19.5" rx="3.2" />
      <line x1="7.6" y1="10.4" x2="7.6" y2="17" />
      <circle cx="7.6" cy="7.15" r="0.95" fill="currentColor" stroke="none" />
      <path d="M12.1 17v-6.6" />
      <path d="M12.1 13.1c0-1.6 1.1-2.7 2.5-2.7s2.3 1 2.3 2.7V17" />
    </>
  ),
  // Official GitHub mark (Invertocat), path from Primer Octicons `mark-github-24`.
  // It is a filled glyph, so it overrides the group's stroke styling.
  github: (
    <path
      fill="currentColor"
      stroke="none"
      d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943"
    />
  ),
  // Rounded square, concentric circle, offset dot at upper right.
  instagram: (
    <>
      <rect x="2.25" y="2.25" width="19.5" height="19.5" rx="5.6" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  // Wide rounded rectangle with a centred play triangle.
  youtube: (
    <>
      <rect x="2.25" y="5.25" width="19.5" height="13.5" rx="4" />
      <path d="M10.3 8.9 15.6 12l-5.3 3.1z" fill="currentColor" stroke="none" />
    </>
  ),
  // Rounded square containing the crossed strokes. Inset to the same optical
  // margin as the "in" and the play triangle so the row reads evenly.
  x: (
    <>
      <rect x="2.25" y="2.25" width="19.5" height="19.5" rx="4" />
      <path d="M7.6 7.6 16.4 16.4" />
      <path d="M16.4 7.6 7.6 16.4" />
    </>
  ),
};

export function Mark({ platform }: { platform: SocialPlatform }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      {MARKS[platform]}
    </svg>
  );
}

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-x-1 gap-y-0 sm:gap-x-2">
      {SOCIAL_LINKS.map((link) => (
        <li key={link.key}>
          <a
            href={link.href}
            target="_blank"
            // rel="me" is deliberate: it ties this profile to the domain as an
            // identity signal. Do not drop it when tidying rel attributes.
            rel="me noopener noreferrer"
            aria-label={`Aly Metwaly on ${link.label}`}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 px-2 tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Mark platform={link.key} />
            <span>{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
