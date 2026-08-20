export const SITE_SECTIONS = [
  { id: "top", label: "Top" },
  { id: "impact", label: "Impact" },
  { id: "framework", label: "Framework" },
  { id: "why-me", label: "Why Me" },
  { id: "capabilities", label: "Capabilities" },
  { id: "work", label: "Work" },
  { id: "focus", label: "Current Focus" },
  { id: "thinking", label: "Thinking" },
  { id: "insights", label: "Insights" },
  { id: "thread", label: "Thread" },
  { id: "speaking", label: "Speaking" },
  { id: "advisory", label: "Advisory" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

/** Subset for the sticky header — quick jumps to major sections */
export const HEADER_NAV_SECTIONS = SITE_SECTIONS.filter((s) =>
  ["impact", "framework", "work", "insights", "speaking", "about"].includes(s.id),
);
