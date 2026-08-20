export const SITE_SECTIONS = [
  { id: "impact", label: "Impact" },
  { id: "perspective", label: "Perspective" },
  { id: "framework", label: "Framework" },
  { id: "work", label: "Selected Work" },
  { id: "speaking", label: "Speaking" },
  { id: "advisory", label: "Advisory" },
  { id: "about", label: "About" },
  { id: "lets-talk", label: "Let's Talk" },
] as const;

/** Subset for the sticky header: quick jumps to major sections */
export const HEADER_NAV_SECTIONS = SITE_SECTIONS.filter((s) =>
  ["impact", "perspective", "framework", "work", "speaking", "about"].includes(s.id),
);
