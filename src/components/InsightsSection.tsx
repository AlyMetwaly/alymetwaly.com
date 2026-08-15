const articles = [
  {
    category: "Framework",
    title: "Operating Model First, Tools Second",
    excerpt: "Why enterprise AI programs stall when they ship licenses instead of changing how the org decides, governs, and measures.",
    status: "Published",
  },
  {
    category: "POV",
    title: "Why AI Adoption Stalls at the Pilot Stage",
    excerpt: "The structural reasons decentralized enterprises never convert experimentation into enterprise-wide practice.",
    status: "Coming soon",
  },
  {
    category: "Essay",
    title: "Governance That Accelerates Instead of Blocking",
    excerpt: "How the smallest policy set can unlock the most adoption — and why heavy centralized control collapses velocity.",
    status: "Coming soon",
  },
  {
    category: "Framework",
    title: "Measuring AI Transformation Beyond Vanity Metrics",
    excerpt: "Seats sold and prompts run are not strategy. Engineer-hours returned and portfolio maturity are.",
    status: "Coming soon",
  },
  {
    category: "POV",
    title: "Building AI Champion Networks That Actually Scale",
    excerpt: "Champion programs that move adoption curves — and the design patterns that make them fail.",
    status: "Coming soon",
  },
  {
    category: "Essay",
    title: "The Executive Alignment Gap in Enterprise AI",
    excerpt: "When leadership intent and team behavior diverge, no amount of tooling investment closes the gap.",
    status: "Coming soon",
  },
  {
    category: "Framework",
    title: "From Engineer-Years to Business Performance",
    excerpt: "Translating R&D capacity gains into the language CFOs and boards actually steer on.",
    status: "Coming soon",
  },
  {
    category: "POV",
    title: "Lightweight Controls for Decentralized AI Portfolios",
    excerpt: "Managing AI risk across business segments without building a bureaucracy that kills adoption.",
    status: "Coming soon",
  },
  {
    category: "Essay",
    title: "Human + AI Ways of Working in Complex R&D",
    excerpt: "How engineering organizations redesign workflows when AI becomes part of daily execution.",
    status: "Coming soon",
  },
  {
    category: "Framework",
    title: "The Transformation Office AI Needs (But Rarely Gets)",
    excerpt: "What a mature AI transformation function looks like — and why most organizations underinvest in it.",
    status: "Coming soon",
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="border-b border-border" aria-labelledby="insights-heading">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              08 — Insights
            </div>
            <h2 id="insights-heading" className="font-display text-4xl lg:text-5xl leading-[1.02] tracking-tight">
              Thought leadership from the field.
            </h2>
          </div>
          <p className="lg:col-span-7 lg:col-start-6 text-lg text-muted-foreground leading-relaxed self-end">
            Frameworks, points of view, and essays on enterprise AI transformation — written for executives,
            transformation leaders, and practitioners who need more than hype.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-rule border-t border-rule">
          {articles.map((article, i) => (
            <article
              key={article.title}
              className="bg-background p-8 lg:p-10 group card-accent-hover"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs tracking-[0.2em] text-accent">
                    N°{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 border rounded-full tag-accent">
                    {article.category}
                  </span>
                </div>
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.16em] ${
                    article.status === "Published" ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {article.status}
                </span>
              </div>
              <h3 className="font-display text-2xl lg:text-[1.65rem] leading-tight tracking-tight mb-3">
                {article.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">{article.excerpt}</p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Articles publishing on LinkedIn and this site. Subscribe via{" "}
          <a href="#contact" className="text-foreground link-accent-underline">
            contact
          </a>{" "}
          for early access to frameworks and executive briefs.
        </p>
      </div>
    </section>
  );
}
