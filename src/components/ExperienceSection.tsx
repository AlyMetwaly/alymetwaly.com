function AccentYear({ year }: { year: string }) {
  const parts = year.split(/(\d{4})/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\d{4}$/.test(part) ? (
          <span key={i} className="text-accent">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

const work = [
  {
    org: "Nokia · Enterprise AI Transformation",
    year: "2026 – Present",
    title: "Company-wide AI enablement",
    problem:
      "AI adoption was accelerating across the organization, but success depended on more than deploying tools. Without a shared approach to leadership, behavior change, enablement, governance, and measurement, adoption risked becoming fragmented and difficult to scale.",
    action:
      "Authored and operationalized a reusable AI change and adoption playbook, applied across business units, together with a cross-functional transformation team. The playbook covers a Change Management model for enterprise AI transformation, integrating leadership enablement, adoption paths, champions networks, governance, continuous learning, measurement, and operating cadence into a repeatable system for scaling AI adoption.",
    outcome:
      "A consistent, measurable, and repeatable approach to AI adoption, applied across business units.",
  },
  {
    org: "Nokia · R&D unit, 1,000+ people",
    year: "2025 – Present",
    title: "Adoption-first AI execution across engineering",
    problem:
      "AI tools existed in pockets, with no mechanism to convert access into engineering throughput.",
    action:
      "Built a structured enablement model with metrics, training, champion networks, and lightweight governance, and supported the rollout and adoption of Microsoft 365 Copilot, GitHub Copilot, and Cursor in the unit.",
    outcome:
      "+65% GitHub Copilot weekly active users in the unit over about 2 to 3 months. 5× scale-up of an AI-enabled solution in 8 weeks. Estimated annual capacity of about 31 engineer-years, from survey-based time savings, for about 560 hours of focused effort, roughly 100:1.",
  },
  {
    org: "Nokia · Chief People Office",
    year: "2025",
    title: "Perform to Win: global performance transformation",
    problem:
      "Performance management was a periodic process, disconnected from real-time execution at 74,000-person scale.",
    action:
      "Worked on the global rollout, aligning executive intent with execution across 20 cross-functional workstreams and 255 roadmap items.",
    outcome: "A global program of 20 workstreams and 255 roadmap items, covering 74,000 employees.",
  },
  {
    org: "Nokia · 5G/6G Silicon R&D",
    year: "2022 – 2024",
    title: "High-complexity silicon programs",
    problem:
      "A high-complexity 5G/6G silicon program was under significant schedule pressure, with cross-functional dependencies and increasing delivery risk.",
    action:
      "Established execution discipline across architecture, software, implementation, verification, and platform teams, driving transparency, alignment, risk management, and delivery focus.",
    outcome:
      "On-plan delivery of high-complexity silicon projects; foundation for the execution discipline now applied to enterprise AI.",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-anchor border-b border-border"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="mb-8 grid gap-8 sm:mb-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h1
              id="experience-heading"
              className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Programs that moved the needle
            </h1>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-7 lg:col-start-6 lg:self-end">
            Throughout my career, I have focused on one challenge: turning strategy into execution.
            The examples below illustrate how I have helped organizations navigate complexity, scale
            new capabilities, and deliver measurable results.
          </p>
        </div>

        <div className="divide-y divide-rule border-t border-b border-rule mt-8">
          {work.map((w, i) => (
            <article
              key={i}
              className="group grid gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:gap-10 lg:py-14"
            >
              <div className="lg:col-span-3">
                <div className="font-mono text-xs tracking-[0.18em] uppercase text-muted-foreground">
                  <AccentYear year={w.year} />
                </div>
                <div className="mt-2 text-sm font-medium">{w.org}</div>
              </div>
              <div className="lg:col-span-9">
                <h3 className="mb-4 font-display text-2xl leading-[1.05] tracking-tight sm:mb-6 sm:text-3xl lg:text-4xl">
                  {w.title}
                </h3>
                <dl className="grid md:grid-cols-3 gap-6 lg:gap-10 text-sm leading-relaxed">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Problem
                    </dt>
                    <dd className="text-foreground/85">{w.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Action
                    </dt>
                    <dd className="text-foreground/85">{w.action}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Outcome
                    </dt>
                    <dd className="text-foreground font-medium">{w.outcome}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
