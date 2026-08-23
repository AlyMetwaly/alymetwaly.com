export const SITE_SECTIONS = [
  { id: "playbook", path: "/playbook", number: "02", label: "Playbook" },
  { id: "experience", path: "/experience", number: "04", label: "Experience" },
  { id: "advisory", path: "/advisory", number: "05", label: "Advisory" },
  { id: "speaking", path: "/speaking", number: "06", label: "Speaking" },
  { id: "about", path: "/about", number: "07", label: "About" },
  { id: "contact", path: "/contact", number: "08", label: "Contact" },
] as const;

/** Primary header navigation — all section pages except contact (CTA covers it) */
export const HEADER_NAV_SECTIONS = SITE_SECTIONS.filter((s) => s.id !== "contact");
