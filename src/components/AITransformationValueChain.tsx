const valueChainSteps = [
  {
    id: "strategy",
    label: "Strategy",
    question: "What are we trying to achieve?",
  },
  {
    id: "operating-model",
    label: "Operating Model",
    question: "How do we organize for success?",
  },
  {
    id: "governance",
    label: "Governance",
    question: "How do we make decisions and manage risk?",
  },
  {
    id: "adoption",
    label: "Adoption",
    question: "How do we change behaviors and ways of working?",
  },
  {
    id: "measurement",
    label: "Measurement",
    question: "How do we know what's working?",
  },
  {
    id: "business-value",
    label: "Business Value",
    question: "How do we create lasting outcomes?",
  },
] as const;

export function AITransformationValueChain() {
  return (
    <aside
      className="mb-12 sm:mb-16 border-t border-rule pt-12 lg:pt-16"
      aria-labelledby="value-chain-heading"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Framework
          </div>
          <h3
            id="value-chain-heading"
            className="font-display text-2xl leading-[1.08] tracking-tight sm:text-3xl lg:text-4xl"
          >
            The AI Transformation Value Chain&trade;
          </h3>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Most AI initiatives fail because they focus on individual components rather than the
              system that connects them.
            </p>
            <p>
              Sustainable AI transformation requires an unbroken chain from strategic intent to
              measurable business outcomes.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ol className="border-t border-rule" aria-label="AI Transformation Value Chain steps">
            {valueChainSteps.map((step, index) => (
              <li key={step.id}>
                <div className="py-8 lg:py-9 border-b border-rule">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-xs tracking-[0.2em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-rule" aria-hidden="true" />
                  </div>
                  <p className="font-display text-xl lg:text-2xl tracking-tight leading-tight">
                    {step.label}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {step.question}
                  </p>
                </div>
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

          <p className="mt-10 max-w-[52ch] text-muted-foreground leading-relaxed">
            The AI Transformation Value Chain&trade; is a practical framework for connecting
            strategy, operating models, governance, adoption, and measurement into a unified
            transformation system that delivers measurable business value.
          </p>
        </div>
      </div>
    </aside>
  );
}
