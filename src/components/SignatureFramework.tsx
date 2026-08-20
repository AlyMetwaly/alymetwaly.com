import { AccentText } from "@/components/AccentText";
import { SectionDivider } from "@/components/SectionDivider";

const pillars = [
  {
    id: "leadership",
    label: "Leadership",
    summary: "Executive alignment on intent, investment, and accountability.",
    detail:
      "Leaders set the pace of adoption. Without explicit sponsorship, shared language, and visible commitment, AI stays a side initiative.",
  },
  {
    id: "governance",
    label: "Governance",
    summary: "Lightweight guardrails that protect without paralyzing.",
    detail:
      "The smallest policy set that lets the most people move safely. Inventories, risk tiers, and decision rights, not committees.",
  },
  {
    id: "enablement",
    label: "Enablement",
    summary: "Champion networks, training, and embedded workflows.",
    detail:
      "Adoption is a function of friction, not enthusiasm. Teams need practical paths from access to daily use.",
  },
  {
    id: "measurement",
    label: "Measurement",
    summary: "Dashboards leadership can steer on in real time.",
    detail:
      "Capacity returned, maturity curves, and portfolio health, not seats sold or prompts run.",
  },
  {
    id: "tooling",
    label: "Tooling",
    summary: "Curated stack aligned to workflows and data boundaries.",
    detail:
      "Tools are the easy part. The hard part is selecting, integrating, and retiring them within an operating rhythm.",
  },
  {
    id: "change",
    label: "Change Management",
    summary: "Behavior change at scale across decentralized segments.",
    detail:
      "Communication, role clarity, and feedback loops that turn experimentation into sustained practice.",
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
          style={{ fontFamily: "var(--font-display)", fontSize: "13px" }}
        >
          Execution
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
        <div className="mb-12 grid gap-8 sm:mb-16 lg:mb-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              02 · Signature framework
            </div>
            <h2
              id="framework-heading"
              className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Enterprise AI Transformation Framework
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              A field-tested system for turning AI ambition into repeatable execution. Six
              interlocking disciplines, none optional, that determine whether enterprise AI becomes
              measurable business performance or permanent experimentation.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technology rarely fails in enterprise AI.{" "}
              <AccentText>Operating models do.</AccentText> This framework is how I design the
              connective tissue between strategy and outcomes. The same architecture applied across
              Nokia&rsquo;s R&amp;D units and company-wide enablement programs.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-rule pt-16 lg:pt-20">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <FrameworkDiagram />
            <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Each element feeds the others. Weak measurement undermines governance. Poor enablement
              wastes tooling investment. Leadership without change management produces mandates, not
              adoption.
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
                  <h3 className="font-display text-2xl lg:text-3xl tracking-tight mb-2">
                    {pillar.label}
                  </h3>
                  <p className="text-foreground/90 font-medium mb-3">{pillar.summary}</p>
                  <p className="text-muted-foreground leading-relaxed">{pillar.detail}</p>
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
                Why it matters
              </div>
              <p className="font-display text-2xl lg:text-3xl tracking-tight leading-tight">
                Strategy without an operating model is a slide deck.
              </p>
            </div>
            <p className="md:col-span-7 md:col-start-6 text-muted-foreground leading-relaxed text-lg">
              Most enterprises invest in AI tools and strategy separately, then wonder why adoption
              stalls at pilot stage. The framework gives transformation offices, CIOs, and business
              leaders a shared language for designing the system that makes AI stick: who decides,
              how teams adopt, what gets measured, and how change propagates across decentralized
              segments.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
