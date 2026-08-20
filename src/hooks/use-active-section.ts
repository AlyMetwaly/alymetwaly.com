import { useEffect, useState } from "react";

const HEADER_OFFSET = 80;

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
          return;
        }

        // Fallback: last section whose top passed the header offset
        const scrollY = window.scrollY + HEADER_OFFSET;
        let current = sectionIds[0];
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollY) {
            current = id;
          }
        }
        setActiveId(current);
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -55% 0px`,
        threshold: [0, 0.1, 0.25],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }
}
