const principles = [
  {
    number: "01",
    title: "AI is not the transformation.",
    body: [
      "Technology alone does not change organizations.",
      "Sustainable transformation requires changes in leadership, operating models, governance, incentives, and ways of working.",
    ],
  },
  {
    number: "02",
    title: "Adoption matters more than capability.",
    body: [
      "Most organizations already have access to powerful AI tools.",
      "The challenge is creating sustained adoption, behavior change, and measurable business impact.",
    ],
  },
  {
    number: "03",
    title: "Business value is the final metric.",
    body: [
      "Strategies, pilots, governance frameworks, training programs, and transformation initiatives only matter if they create meaningful outcomes.",
      "Value creation is the objective. Everything else is an enabler.",
    ],
  },
  {
    number: "04",
    title: "Transformation succeeds as a system.",
    body: [
      "Strategy, operating models, governance, adoption, and measurement should not be optimized independently.",
      "Organizations create lasting value when all elements of the transformation system work together.",
    ],
  },
];

export function MyPerspective() {
  return (
    <section
      id="perspective"
      className="section-anchor border-b border-border"
      aria-labelledby="perspective-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="section-eyebrow mb-4">
              02 · PERSPECTIVE
            </div>
            <h2
              id="perspective-heading"
              className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
            >
              How I Think
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>Most AI transformations don&rsquo;t fail because of technology.</p>
              <p>
                They fail because strategy, operating models, governance, adoption, and measurement
                are treated as separate initiatives rather than a connected system.
              </p>
              <p>
                My work focuses on helping organizations close those gaps and turn AI ambition into
                measurable business outcomes.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-12 border-t border-rule pt-12 lg:space-y-14 lg:border-t-0 lg:pt-0">
              {principles.map((principle) => (
                <article key={principle.number}>
                  <div className="font-mono text-xs tracking-[0.2em] text-accent">
                    {principle.number}
                  </div>
                  <h3 className="mt-3 font-display text-xl leading-tight tracking-tight sm:text-2xl lg:text-3xl">
                    {principle.title}
                  </h3>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {principle.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
