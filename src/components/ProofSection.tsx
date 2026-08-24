const metrics = [
  { value: "65%", label: "Increase in AI adoption across engineering teams" },
  { value: "5×", label: "Scale-up of an AI-enabled solution in 8 weeks" },
  { value: "31", label: "Engineer-years of annual capacity unlocked" },
  { value: "100:1", label: "Return on transformation effort invested" },
  { value: "74k", label: "Employees impacted by a global transformation program" },
  { value: "255", label: "Strategic roadmap items governed across 20 workstreams" },
];

export function ProofSection() {
  return (
    <section
      id="proof"
      className="section-anchor border-b border-border"
      aria-labelledby="proof-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="mb-12 grid gap-8 sm:mb-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2
              id="proof-heading"
              className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Outcomes, not opinions.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-7 lg:col-start-6 lg:self-end">
            Every number below is measured against a baseline and reported to senior leadership. No
            vanity metrics, no projections.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-rule">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="border-b border-r border-rule px-2 py-10 lg:py-14 last:border-r-0 [&:nth-child(3n)]:lg:border-r-0 [&:nth-child(2n)]:sm:border-r-0 lg:[&:nth-child(2n)]:border-r"
            >
              <div className="text-accent font-display text-5xl leading-none tracking-tight sm:text-6xl lg:text-7xl">
                {m.value}
              </div>
              <div className="mt-4 text-sm text-muted-foreground max-w-[26ch] leading-relaxed">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
