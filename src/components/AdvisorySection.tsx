import { Link } from "@tanstack/react-router";

const engagements = [
  {
    audience: "Enterprise leadership",
    scope:
      "Board-level and C-suite decision support on AI transformation strategy, investment prioritization, and organizational readiness.",
  },
  {
    audience: "Transformation offices",
    scope:
      "Operating model design, program structure, and execution discipline for company-wide AI enablement.",
  },
  {
    audience: "AI adoption programs",
    scope:
      "Governance frameworks, champion networks, tooling strategy, and adoption measurement at scale.",
  },
  {
    audience: "Scaling organizations",
    scope:
      "Strategic guidance for high-growth and complex enterprises moving from AI experimentation to repeatable execution.",
  },
];

const ADVISORY_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScoWwy5ZyLSM6ntFTSrWJe3hVbbKofS3B1aLo969tW88F2OKQ/viewform?usp=publish-editor";

export function AdvisorySection() {
  return (
    <section
      id="advisory"
      className="section-anchor border-b border-border"
      aria-labelledby="advisory-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="mb-12 grid gap-8 sm:mb-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2
              id="advisory-heading"
              className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
            >
              From ambition to action.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-lg text-muted-foreground leading-relaxed self-end">
            <p>
              Strategic guidance for executives, founders, and transformation leaders navigating AI
              adoption, operating models, governance, organizational change, and execution at scale.
            </p>
            <p>
              Drawing on hands-on experience leading enterprise AI transformation initiatives, I
              help leaders navigate complex decisions, accelerate adoption, and turn AI ambition
              into measurable business outcomes.
            </p>
            <p>
              My advisory work applies the{" "}
              <Link to="/playbook" className="text-foreground link-accent-underline">
                AI Transformation Value Chain
              </Link>{" "}
              to help leaders connect strategic ambition with the operating structures, governance,
              adoption mechanisms, and measurement systems required to deliver business value.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-rule border-t border-rule">
          {engagements.map((item) => (
            <article key={item.audience} className="bg-background p-8 lg:p-10 card-accent-hover">
              <h3 className="font-display text-2xl lg:text-3xl tracking-tight mb-4">
                {item.audience}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.scope}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-8 sm:mt-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
            <p>Start with a paid Advisory Discovery Session.</p>
            <p>
              Submit your challenge and the outcome you are seeking. I review every request
              personally and will contact you regarding potential fit, availability, payment method,
              and next steps.
            </p>
            <p>
              The session provides strategic guidance, practical recommendations, and relevant
              frameworks, playbooks, or resources where applicable.
            </p>
          </div>
          <a
            href={ADVISORY_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            Request an Advisory Session
          </a>
        </div>
      </div>
    </section>
  );
}
