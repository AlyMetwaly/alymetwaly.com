export const SITE_SECTIONS = [
  { id: "proof", path: "/proof", number: "01", label: "Proof" },
  { id: "perspective", path: "/perspective", number: "02", label: "Perspective" },
  { id: "framework", path: "/framework", number: "03", label: "Framework" },
  { id: "experience", path: "/experience", number: "04", label: "Experience" },
  { id: "advisory", path: "/advisory", number: "05", label: "Advisory" },
  { id: "speaking", path: "/speaking", number: "06", label: "Speaking" },
  { id: "about", path: "/about", number: "07", label: "About" },
  { id: "contact", path: "/contact", number: "08", label: "Contact" },
] as const;

/** Primary header navigation — all section pages */
export const HEADER_NAV_SECTIONS = SITE_SECTIONS.filter((s) => s.id !== "contact");
