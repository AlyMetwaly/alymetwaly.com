export const SITE_SECTIONS = [
  { id: "playbook", path: "/playbook", number: "02", label: "Playbook" },
  { id: "experience", path: "/experience", number: "03", label: "Experience" },
  { id: "building", path: "/building", number: "04", label: "Building" },
  { id: "about", path: "/about", number: "05", label: "About" },
  { id: "speaking", path: "/speaking", number: "06", label: "Speaking" },
  { id: "advisory", path: "/advisory", number: "07", label: "Advisory" },
] as const;

/** Primary header navigation — contact is reached via the "Let's Talk" CTA */
export const HEADER_NAV_SECTIONS = SITE_SECTIONS;
