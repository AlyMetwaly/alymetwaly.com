const focusAreas = [
  {
    title: "Enterprise AI operating models",
    detail:
      "Designing integrated systems of people, process, governance, and tooling for decentralized segments.",
  },
  {
    title: "AI adoption measurement",
    detail:
      "Dashboards and maturity frameworks that give executives real-time steering capability.",
  },
  {
    title: "Governance systems",
    detail:
      "Lightweight controls, inventories, and decision rights that accelerate rather than block innovation.",
  },
  {
    title: "Human + AI collaboration",
    detail: "Workflow redesign and ways of working for engineering and knowledge-intensive teams.",
  },
  {
    title: "Organizational enablement",
    detail:
      "Champion networks, training architecture, and leadership alignment that move adoption curves.",
  },
  {
    title: "AI transformation leadership",
    detail:
      "Building and leading the functions that turn AI strategy into measurable business performance.",
  },
];

export function CurrentFocus() {
  return (
    <section
      id="focus"
      className="section-anchor border-b border-border"
      aria-labelledby="focus-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="mb-12 grid gap-8 sm:mb-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              06 · Current focus
            </div>
            <h2
              id="focus-heading"
              className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Where I am investing attention now.
            </h2>
          </div>
          <p className="lg:col-span-7 lg:col-start-6 text-lg text-muted-foreground leading-relaxed self-end">
            Active work and research at Nokia and beyond: the problems I am solving and the
            frameworks I am refining in the field.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-rule">
          {focusAreas.map((area, i) => (
            <article
              key={area.title}
              className="border-b border-r border-rule px-2 py-10 lg:py-12 last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(2n)]:border-r"
            >
              <div className="font-mono text-xs tracking-[0.2em] text-accent mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl lg:text-2xl tracking-tight mb-3 leading-tight">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[32ch]">
                {area.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
