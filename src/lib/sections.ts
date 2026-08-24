export const SITE_SECTIONS = [
  { id: "playbook", path: "/playbook", number: "02", label: "Playbook" },
  { id: "experience", path: "/experience", number: "04", label: "Experience" },
  { id: "advisory", path: "/advisory", number: "05", label: "Advisory" },
  { id: "speaking", path: "/speaking", number: "06", label: "Speaking" },
  { id: "about", path: "/about", number: "07", label: "About" },
] as const;

/** Primary header navigation — contact is reached via the "Let's Talk" CTA */
export const HEADER_NAV_SECTIONS = SITE_SECTIONS;
