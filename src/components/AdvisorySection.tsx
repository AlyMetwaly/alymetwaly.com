import { Link } from "@tanstack/react-router";

const engagements = [
  {
    audience: "Enterprise leadership",
    scope:
      "Decision support on AI adoption strategy, prioritization, and organizational readiness.",
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
      "Practical guidance for complex enterprises moving from AI experimentation to repeatable execution.",
  },
];

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
            <h1
              id="advisory-heading"
              className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
            >
              From ambition to action.
            </h1>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-lg text-muted-foreground leading-relaxed self-end">
            <p>
              Practical guidance for leaders and transformation teams navigating AI adoption,
              operating models, governance, organizational change, and execution at scale.
            </p>
            <p>
              Drawing on hands-on experience leading enterprise AI transformation initiatives, I
              help leaders navigate complex decisions, accelerate adoption, and turn AI ambition
              into measurable business outcomes.
            </p>
            <p>
              My thinking on this is organized around the{" "}
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
            <p>I share what I learn from AI adoption work.</p>
            <p>
              If you have a question about adoption, governance, or measurement, send me a message.
              I read every note and reply when I can add something useful.
            </p>
          </div>
          <Link
            to="/contact"
            search={{ topic: "advisory" }}
            className="inline-flex shrink-0 min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            Send a message
          </Link>
        </div>
      </div>
    </section>
  );
}
