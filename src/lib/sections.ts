export const SITE_SECTIONS = [
  { id: "proof", number: "01", label: "Proof" },
  { id: "perspective", number: "02", label: "Perspective" },
  { id: "framework", number: "03", label: "Framework" },
  { id: "experience", number: "04", label: "Experience" },
  { id: "advisory", number: "05", label: "Advisory" },
  { id: "speaking", number: "06", label: "Speaking" },
  { id: "about", number: "07", label: "About" },
  { id: "contact", number: "08", label: "Let's Talk" },
] as const;

/** Subset for the sticky header: quick jumps to major sections */
export const HEADER_NAV_SECTIONS = SITE_SECTIONS.filter((s) =>
  ["proof", "perspective", "framework", "experience", "speaking", "about"].includes(s.id),
);
