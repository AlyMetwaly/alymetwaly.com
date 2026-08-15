const engagements = [
  {
    audience: "Enterprise leadership",
    scope: "Board-level and C-suite advisory on AI transformation strategy, investment prioritization, and organizational readiness.",
  },
  {
    audience: "Transformation offices",
    scope: "Operating model design, program structure, and execution discipline for company-wide AI enablement.",
  },
  {
    audience: "AI adoption programs",
    scope: "Governance frameworks, champion networks, tooling strategy, and adoption measurement at scale.",
  },
  {
    audience: "Scaling organizations",
    scope: "Guidance for high-growth and complex enterprises moving from AI experimentation to repeatable execution.",
  },
];


export function AdvisorySection() {
  return (
    <section id="advisory" className="border-b border-border" aria-labelledby="advisory-heading">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              11 — Advisory
            </div>
            <h2 id="advisory-heading" className="font-display text-4xl lg:text-5xl leading-[1.02] tracking-tight">
              Advisory for leaders building what lasts.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-lg text-muted-foreground leading-relaxed self-end">
            <p>
              I advise enterprise leaders, transformation offices, and AI adoption programs at the
              intersection of strategy and execution — where most initiatives fail.
            </p>
            <p>
              Engagements are selective: organizations ready to invest in operating models, governance,
              and measurement — not another proof of concept.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-rule border-t border-rule">
          {engagements.map((item) => (
            <article key={item.audience} className="bg-background p-8 lg:p-10">
              <h3 className="font-display text-2xl lg:text-3xl tracking-tight mb-4">{item.audience}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.scope}</p>
            </article>
          ))}
        </div>

        <hr className="border-0 border-t border-rule mt-12" />

        <aside className="mt-12 flex flex-wrap items-center gap-4 text-sm">
          <span className="text-muted-foreground">Also:</span>
          <span className="px-3 py-1.5 border border-rule font-mono text-[10px] uppercase tracking-[0.16em]">
            FiBAN Angel Investor
          </span>
          <span className="text-muted-foreground">
            Supporting technical founders on operating model design and scalable execution.
          </span>
        </aside>
      </div>
    </section>
  );
}
