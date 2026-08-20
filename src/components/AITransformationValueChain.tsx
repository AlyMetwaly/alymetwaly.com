const valueChainSteps = [
  {
    id: "strategy",
    label: "Strategy",
    question: "What are we trying to achieve?",
    description:
      "Define the business outcomes, strategic priorities, transformation ambition, and success criteria that AI should enable.",
  },
  {
    id: "operating-model",
    label: "Operating Model",
    question: "How do we organize for success?",
    description:
      "Establish ownership, decision rights, roles, capabilities, and execution structures required to turn strategy into coordinated action.",
  },
  {
    id: "governance",
    label: "Governance",
    question: "How do we make decisions and manage risk?",
    description:
      "Create the guardrails, accountability, policies, and decision mechanisms needed to scale AI responsibly without unnecessarily slowing execution.",
  },
  {
    id: "adoption",
    label: "Adoption",
    question: "How do we change behaviors and ways of working?",
    description:
      "Build leadership alignment, capabilities, communication, communities, and change mechanisms that embed AI into everyday work.",
  },
  {
    id: "measurement",
    label: "Measurement",
    question: "How do we know what is working?",
    description:
      "Define adoption indicators, outcome metrics, feedback loops, and value-tracking mechanisms that support evidence-based decisions.",
  },
  {
    id: "business-value",
    label: "Business Value",
    question: "How do we create lasting outcomes?",
    description:
      "Translate execution and adoption into measurable productivity, innovation, operational, customer, and strategic outcomes.",
  },
] as const;

export function AITransformationValueChain() {
  return (
    <div aria-label="AI Transformation Value Chain stages">
      <ol className="border-t border-rule">
        {valueChainSteps.map((step, index) => (
          <li key={step.id}>
            <article className="py-8 lg:py-10 border-b border-rule">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-mono text-xs tracking-[0.2em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-rule" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl lg:text-3xl tracking-tight leading-tight">
                {step.label}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.question}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{step.description}</p>
            </article>
            {index < valueChainSteps.length - 1 ? (
              <div
                className="flex justify-center py-3 font-mono text-xs text-muted-foreground/70"
                aria-hidden="true"
              >
                ↓
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
