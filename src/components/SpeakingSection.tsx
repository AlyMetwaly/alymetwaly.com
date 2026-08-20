const formats = [
  { label: "Keynotes", detail: "Executive audiences on AI transformation at scale" },
  { label: "Panels", detail: "Industry and leadership forums on enterprise AI" },
  { label: "Roundtables", detail: "Closed-door sessions with transformation leaders" },
  { label: "Executive retreats", detail: "Strategy offsites and leadership immersions" },
  { label: "Leadership offsites", detail: "Working sessions on operating model design" },
];

const topics = [
  "Operationalizing Enterprise AI",
  "Building AI Operating Models",
  "AI Adoption at Scale",
  "Governance That Accelerates Innovation",
  "Measuring AI Transformation",
  "Human + AI Ways of Working",
];

export function SpeakingSection() {
  return (
    <section
      id="speaking"
      className="section-anchor border-b border-border bg-muted/30"
      aria-labelledby="speaking-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="mb-12 grid gap-8 sm:mb-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              10 — Speaking
            </div>
            <h2
              id="speaking-heading"
              className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Keynotes &amp; executive conversations.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-lg text-muted-foreground leading-relaxed self-end">
            <p>
              Available for keynotes, panels, roundtables, executive retreats, and leadership
              offsites. I speak to leaders who need clarity on what actually works — not what
              vendors promise.
            </p>
            <p>
              Talks are grounded in field experience: measurable adoption programs, governance
              design, and operating models built inside one of the world&rsquo;s most complex
              R&amp;D organizations.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 border-t border-rule pt-16">
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Formats
            </div>
            <ul className="space-y-6">
              {formats.map((format) => (
                <li
                  key={format.label}
                  className="grid grid-cols-[auto_1fr_1.2fr] gap-x-4 gap-y-0 text-sm border-b border-rule pb-6 last:border-0 last:pb-0 items-start"
                >
                  <span className="format-marker mt-1.5" aria-hidden="true">
                    ○
                  </span>
                  <span className="font-medium text-foreground">{format.label}</span>
                  <span className="text-muted-foreground">{format.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Signature topics
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="px-4 py-3 border border-rule bg-background text-sm leading-snug transition-colors hover:border-accent/40 focus-within:border-accent/40"
                >
                  {topic}
                </li>
              ))}
            </ul>
            <a
              href="mailto:aly.metwaly@outlook.com?subject=Speaking%20Inquiry"
              className="inline-flex mt-10 px-5 py-3 rounded-full text-sm font-medium border border-border hover:bg-background btn-accent-outline"
            >
              Invite me to speak
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
