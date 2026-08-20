import { SectionDivider } from "@/components/SectionDivider";

const pillars = [
  {
    id: "leadership",
    label: "Leadership",
    description: "Executive alignment on intent, investment, ownership, and accountability.",
  },
  {
    id: "governance",
    label: "Governance",
    description:
      "Decision boundaries that protect the organization without unnecessarily slowing responsible experimentation and adoption.",
  },
  {
    id: "enablement",
    label: "Enablement",
    description:
      "Capability building through learning, practitioner networks, support structures, and integration into everyday work.",
  },
  {
    id: "measurement",
    label: "Measurement",
    description:
      "Visible indicators that connect adoption, organizational capability, portfolio progress, and business outcomes.",
  },
  {
    id: "tooling",
    label: "Tooling",
    description:
      "A curated technology environment aligned with workflows, data boundaries, integration needs, and user experience.",
  },
  {
    id: "change",
    label: "Change Management",
    description:
      "Structured communication, engagement, reinforcement, and feedback that convert experimentation into sustained ways of working.",
  },
];

function FrameworkDiagram() {
  const cx = 200;
  const cy = 200;
  const radius = 130;

  return (
    <div className="relative w-full max-w-[440px] mx-auto lg:mx-0">
      <svg viewBox="0 0 400 400" className="w-full h-auto" aria-hidden="true" role="presentation">
        <circle cx={cx} cy={cy} r={radius} fill="none" stroke="var(--rule)" strokeWidth="1" />
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeOpacity="0.2"
          strokeDasharray="4 6"
        />
        <circle
          cx={cx}
          cy={cy}
          r={52}
          fill="var(--muted)"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeOpacity="0.35"
        />
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          className="fill-foreground"
          style={{ fontFamily: "var(--font-display)", fontSize: "11px" }}
        >
          TRANSFORMATION
        </text>
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          className="fill-muted-foreground"
          style={{ fontFamily: "var(--font-mono)", fontSize: "8px", letterSpacing: "0.14em" }}
        >
          SYSTEM
        </text>
        {pillars.map((pillar, i) => {
          const angle = (i / pillars.length) * Math.PI * 2 - Math.PI / 2;
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius;
          const innerX = cx + Math.cos(angle) * 58;
          const innerY = cy + Math.sin(angle) * 58;
          const labelX = cx + Math.cos(angle) * (radius + 36);
          const labelY = cy + Math.sin(angle) * (radius + 36);

          return (
            <g key={pillar.id}>
              <line
                x1={innerX}
                y1={innerY}
                x2={x}
                y2={y}
                stroke="var(--accent)"
                strokeWidth="1"
                strokeOpacity="0.35"
              />
              <circle cx={x} cy={y} r="6" fill="var(--accent)" />
              <circle
                cx={x}
                cy={y}
                r="10"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1"
                strokeOpacity="0.25"
              />
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-foreground"
                style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.08em" }}
              >
                {pillar.label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function SignatureFramework() {
  return (
    <section
      id="framework"
      className="section-anchor border-b border-border"
      aria-labelledby="framework-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="mb-12 sm:mb-16 lg:mb-20 max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
            02 · MY TRANSFORMATION FRAMEWORK
          </div>
          <h2
            id="framework-heading"
            className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
          >
            Enterprise AI Transformation Framework
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Enterprise AI transformation is not primarily a technology challenge. It is a
            system-level change involving leadership, governance, enablement, measurement, tooling,
            and change management.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            I use this framework to connect those elements and examine whether an organization can
            move from AI ambition and isolated experimentation to repeatable execution and
            measurable outcomes.
          </p>
        </div>

        <aside
          className="mb-12 sm:mb-16 lg:mb-20 border-t border-l-2 border-l-accent/40 border-rule pt-12 lg:pt-16 pl-6 lg:pl-10"
          aria-label="Personal perspective on enterprise AI transformation"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
            MY PERSPECTIVE
          </div>
          <h3 className="font-display text-2xl lg:text-3xl tracking-tight leading-tight max-w-3xl mb-8">
            Technology rarely fails alone. The operating system around it does.
          </h3>
          <div className="grid md:grid-cols-12 gap-10 lg:gap-12">
            <div className="md:col-span-7 space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                My thinking starts with a simple observation: organizations often focus on selecting
                AI tools while underestimating the system required to make those tools useful at
                scale.
              </p>
              <p>
                Leadership creates direction and accountability. Governance establishes safe
                decision boundaries. Enablement builds organizational capability. Measurement
                connects activity to outcomes. Tooling supports real workflows. Change management
                turns experimentation into sustained behavior.
              </p>
              <p>
                These elements are interdependent. A weakness in one can limit the effectiveness of
                all the others.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end">
              {/* TODO: Replace text signature with Aly's transparent PNG or SVG signature asset when available. */}
              <div className="pt-6 border-t border-rule">
                <p className="font-display text-xl tracking-tight text-foreground">Aly Metwaly</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  AI Transformation Leader · Strategic Advisor · Keynote Speaker
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-rule pt-16 lg:pt-20">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <FrameworkDiagram />
            <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Each element affects the others. Sustainable transformation depends on the strength of
              the system, not the isolated maturity of a single component.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-px bg-rule">
              {pillars.map((pillar, i) => (
                <article key={pillar.id} className="bg-background p-8 lg:p-10">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-mono text-xs tracking-[0.2em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-rule" />
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl tracking-tight mb-3">
                    {pillar.label}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider className="mt-16 lg:mt-20" />

        <aside className="mt-12 lg:mt-16">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                THE CORE IDEA
              </div>
              <p className="font-display text-2xl lg:text-3xl tracking-tight leading-tight">
                Enterprise AI becomes repeatable when strategy, technology, operating structures,
                and human behavior reinforce one another.
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                The framework is how I organize that complexity and focus attention on the
                conditions required for execution.
              </p>
              <p>
                <a href="#advisory" className="text-foreground link-accent-underline text-sm">
                  Discuss the Framework
                </a>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
