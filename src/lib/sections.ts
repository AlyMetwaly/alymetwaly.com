export const SITE_SECTIONS = [
  { id: "impact", number: "01", label: "Proof" },
  { id: "perspective", number: "02", label: "Perspective" },
  { id: "framework", number: "03", label: "Framework" },
  { id: "work", number: "04", label: "Work" },
  { id: "advisory", number: "05", label: "Advisory" },
  { id: "speaking", number: "06", label: "Speaking" },
  { id: "about", number: "07", label: "About" },
  { id: "lets-talk", number: "08", label: "Let's Talk" },
] as const;

/** Subset for the sticky header: quick jumps to major sections */
export const HEADER_NAV_SECTIONS = SITE_SECTIONS.filter((s) =>
  ["impact", "perspective", "framework", "work", "speaking", "about"].includes(s.id),
);
