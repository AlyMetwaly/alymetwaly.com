import { SOCIAL_LINKS, type SocialPlatform } from "@/lib/social";

/**
 * Hand-authored brand marks.
 *
 * Not from an icon library: lucide has deprecated its brand icons, so those
 * imports break on a future version bump. Drawn on a shared 24x24 grid with a
 * shared stroke weight and cap height so the three read as one family.
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
