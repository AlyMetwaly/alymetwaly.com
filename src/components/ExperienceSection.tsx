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
      "Led the development of a company-wide AI Enablement Playbook together with a cross-functional transformation team. Owned the design and operationalization of a holistic Change Management model for enterprise AI transformation, integrating leadership enablement, adoption journeys, champions networks, governance, continuous learning, measurement, and operating cadence into a repeatable system for scaling AI adoption.",
    outcome:
      "Established the operating model for enterprise AI transformation, reducing fragmentation across business segments and enabling a consistent, measurable, and repeatable approach to AI adoption at scale.",
  },
  {
    org: "Nokia · RAN R&D Unit",
    year: "2025 – Present",
    title: "Adoption-first AI execution across engineering",
    problem:
      "AI tools existed in pockets, with no mechanism to convert access into engineering throughput.",
    action:
      "Built a structured enablement model with metrics, training, champion networks, and lightweight governance, and rolled out Copilot (M365 + Premium), GitHub Copilot, and Cursor across the SoC unit.",
    outcome:
      "+65% active usage. 5× scale-up of a requirements-assistant use case in 8 weeks. ~31 engineer-years of annual capacity unlocked at ~100:1 return on execution effort.",
  },
  {
    org: "Nokia · Chief People Office",
    year: "2025",
    title: "Perform to Win: global performance transformation",
    problem:
      "Performance management was a periodic process, disconnected from real-time execution at 74,000-person scale.",
    action:
      "Orchestrated the global rollout, aligning executive intent with execution across 20 cross-functional workstreams and 255 roadmap items.",
    outcome:
      "Successfully delivered the global transformation program on schedule, achieving 100% of annual objectives across 20 workstreams and 255 roadmap items.",
  },
  {
    org: "Nokia · 5G/6G Silicon R&D",
    year: "2022 – 2024",
    title: "Nokia SoC Projects",
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
            <div className="section-eyebrow mb-4">04 · EXPERIENCE</div>
            <h2
              id="experience-heading"
              className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Programs that moved the needle
            </h2>
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
