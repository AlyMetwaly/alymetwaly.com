import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.JPG";
import { AboutSection } from "@/components/AboutSection";
import { AccentText } from "@/components/AccentText";
import { AdvisorySection } from "@/components/AdvisorySection";
import { CurrentFocus } from "@/components/CurrentFocus";
import { InsightsSection } from "@/components/InsightsSection";
import { SectionDivider } from "@/components/SectionDivider";
import { SignatureFramework } from "@/components/SignatureFramework";
import { SpeakingSection } from "@/components/SpeakingSection";
import { ThreadThroughItAll } from "@/components/ThreadThroughItAll";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";

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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aly Metwaly — Enterprise AI Transformation Leader" },
      {
        name: "description",
        content:
          "Aly Metwaly designs enterprise AI operating models, governance, and adoption programs that scale. Transformation Manager at Nokia. AI transformation advisor, speaker, and author of the Enterprise AI Transformation Framework.",
      },
      {
        name: "keywords",
        content:
          "enterprise AI transformation, AI operating model, AI adoption, AI governance, AI transformation leader, AI change management, enterprise AI strategy, AI transformation advisor",
      },
      { name: "author", content: "Aly Metwaly" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Aly Metwaly — Enterprise AI Transformation Leader" },
      {
        property: "og:description",
        content:
          "Enterprise AI operating models, governance, and adoption at scale. Frameworks and execution from the field — Transformation Manager at Nokia.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: portraitAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aly Metwaly — Enterprise AI Transformation Leader" },
      {
        name: "twitter:description",
        content:
          "Designing AI operating models that turn enterprise AI strategy into measurable adoption and business performance.",
      },
    ],
  }),
  component: Home,
});

const metrics = [
  { value: "45%", label: "Increase in active AI tool usage across R&D" },
  { value: "5×", label: "Scale-up of an AI requirements-assistant use case in 8 weeks" },
  { value: "31", label: "Engineer-years of annual capacity unlocked (~1,160 hrs/week)" },
  { value: "100:1", label: "Return on execution effort vs. non-BAU hours invested" },
  { value: "74k", label: "Employees in the performance program rolled out globally" },
  { value: "255", label: "Roadmap items governed across 20 cross-functional workstreams" },
];

const capabilities = [
  {
    k: "01",
    h: "AI Operating Models",
    p: "Integrated systems of people, process, governance, and tooling that turn AI strategy into repeatable execution across decentralized business segments.",
  },
  {
    k: "02",
    h: "Enablement & Adoption at Scale",
    p: "Structured rollout of Microsoft 365 Copilot, GitHub Copilot, Cursor, and Glean — training, champion networks, and leadership framing that move usage curves, not slides.",
  },
  {
    k: "03",
    h: "Governance & Measurement",
    p: "Lightweight guardrails, inventories, and adoption/impact dashboards that give executives fact-based steering of AI portfolios in real time.",
  },
  {
    k: "04",
    h: "Execution Discipline",
    p: "Program structures that hold 100% of annual objectives in high-complexity, multi-stakeholder environments — without slowing down the teams doing the work.",
  },
];

const work = [
  {
    org: "Nokia · Enterprise AI Transformation (Keystone)",
    year: "2026 — Present",
    title: "Company-wide AI enablement playbook",
    problem: "AI adoption was fragmented across decentralized business segments with no shared operating model.",
    action:
      "Designed a holistic enablement playbook spanning leadership, governance, tooling, and team-level adoption. Operationalized lightweight controls, rapid pilots, and continuous feedback loops.",
    outcome:
      "Enterprise rollout of Cursor, Glean, and Microsoft 365 Copilot with measurable adoption across business segments.",
  },
  {
    org: "Nokia · System-on-Chip R&D",
    year: "2020 — Present",
    title: "Adoption-first AI execution across engineering",
    problem: "AI tools existed in pockets, with no mechanism to convert access into engineering throughput.",
    action:
      "Built a structured enablement model — metrics, training, champion networks, lightweight governance — and rolled out Copilot (M365 + Premium), GitHub Copilot, and Cursor across the SoC unit.",
    outcome:
      "+45% active usage. 5× scale-up of a requirements-assistant use case in 8 weeks. ~31 engineer-years of annual capacity unlocked at ~100:1 return on execution effort.",
  },
  {
    org: "Nokia · Chief People Office (Rotation)",
    year: "2025",
    title: "Perform to Win — global performance transformation",
    problem: "Performance management was a periodic process, disconnected from real-time execution at 74,000-person scale.",
    action:
      "Orchestrated the global rollout, aligning executive intent with execution across 20 cross-functional workstreams and 255 roadmap items.",
    outcome:
      "Embedded performance management as a living operating system. Delivered 100% of annual objectives.",
  },
  {
    org: "Nokia · 5G/6G Silicon R&D",
    year: "2022 — 2025",
    title: "Deep-tech program leadership",
    problem: "Multi-million-euro semiconductor roadmaps with high technical and delivery risk.",
    action:
      "Directed feasibility-to-delivery for 5G/6G hardware programs, instrumenting execution realism and cross-functional coordination.",
    outcome:
      "On-plan delivery of high-complexity silicon programs; foundation for the execution discipline now applied to enterprise AI.",
  },
];

const insights = [
  {
    t: "Operating model first, tools second",
    d: "Most enterprise AI programs stall because they ship licenses instead of changing how the org decides, governs, and measures. The tool is the easy part.",
  },
  {
    t: "Adoption is a function of friction, not enthusiasm",
    d: "Champion networks, embedded workflows, and leadership framing move the curve. Town halls and mandates don't.",
  },
  {
    t: "Measure capacity, not activity",
    d: "Seats sold and prompts run are vanity. Engineer-hours returned to the business is the only metric leadership should steer on.",
  },
  {
    t: "Governance as enablement",
    d: "Lightweight guardrails accelerate adoption. Heavy centralized control collapses it. Pick the smallest policy that lets the most people move.",
  },
];

const navLinks = [
  { href: "#impact", label: "Impact" },
  { href: "#framework", label: "Framework" },
  { href: "#work", label: "Work" },
  { href: "#insights", label: "Insights" },
  { href: "#speaking", label: "Speaking" },
  { href: "#about", label: "About" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-2xl leading-none tracking-tight">
            Aly Metwaly
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-full transition-colors hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            Book a conversation
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="top" className="border-b border-border" aria-labelledby="hero-heading">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="mb-8 space-y-1">
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="accent-dot" aria-hidden="true" />
                  Enterprise AI Transformation Leader
                </div>
                <p className="pl-5 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  Advisor • Speaker • Builder of AI Operating Models
                </p>
              </div>
              <h1
                id="hero-heading"
                className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em]"
              >
                Enterprise AI,<br />
                <em className="italic text-muted-foreground/90">operationalized</em> at scale.
              </h1>
              <p className="mt-8 max-w-2xl text-lg lg:text-xl text-muted-foreground leading-relaxed">
                I design enterprise AI operating models — governance, adoption, measurement, change
                management — that move large organizations from AI experimentation to repeatable execution
                and measurable business impact.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="px-5 py-3 rounded-full text-sm font-medium"
                  style={{ background: "var(--ink)", color: "var(--paper)" }}
                >
                  Discuss AI transformation
                </a>
                <a
                  href="#framework"
                  className="px-5 py-3 rounded-full text-sm font-medium border border-border hover:bg-muted btn-accent-outline"
                >
                  Explore the framework
                </a>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="relative">
                <img
                  src={portraitAsset}
                  alt="Aly Metwaly, Enterprise AI Transformation Leader at Nokia"
                  className="w-full aspect-[4/5] object-cover grayscale"
                  style={{ background: "var(--muted)" }}
                />
                <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  <div>Based</div><div className="text-foreground">Espoo, FI</div>
                  <div>Focus</div><div className="text-foreground">AI Operating Models</div>
                  <div>Scale</div><div className="text-foreground">74k+ employees</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border bg-muted/40">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-5 flex flex-wrap items-center gap-x-10 gap-y-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              <span>Nokia</span><span>·</span>
              <span>5G / 6G Silicon</span><span>·</span>
              <span>Microsoft 365 Copilot</span><span>·</span>
              <span>GitHub Copilot</span><span>·</span>
              <span>Cursor</span><span>·</span>
              <span>Glean</span><span>·</span>
              <span>FiBAN Angel Investor</span>
            </div>
          </div>
        </section>

        {/* IMPACT METRICS */}
        <section id="impact" className="border-b border-border" aria-labelledby="impact-heading">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-4">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">01 — Proof</div>
                <h2 id="impact-heading" className="font-display text-4xl lg:text-5xl leading-[1.02] tracking-tight">
                  Outcomes, not opinions.
                </h2>
              </div>
              <p className="lg:col-span-7 lg:col-start-6 text-lg text-muted-foreground leading-relaxed self-end">
                Every number below is measured against a baseline and reported to senior leadership. No vanity metrics, no projections.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-rule">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className="border-b border-r border-rule px-2 py-10 lg:py-14 last:border-r-0 [&:nth-child(3n)]:lg:border-r-0 [&:nth-child(2n)]:sm:border-r-0 lg:[&:nth-child(2n)]:border-r"
                >
                  <div className="font-display text-6xl lg:text-7xl leading-none tracking-tight text-accent">
                    {m.value}
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground max-w-[26ch] leading-relaxed">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SignatureFramework />
        <WhyWorkWithMe />

        {/* CAPABILITIES */}
        <section id="capabilities" className="border-b border-border" aria-labelledby="capabilities-heading">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-4">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">04 — What I do</div>
                <h2 id="capabilities-heading" className="font-display text-4xl lg:text-5xl leading-[1.02] tracking-tight">
                  From AI ambition to enterprise execution.
                </h2>
              </div>
              <p className="lg:col-span-7 lg:col-start-6 text-lg text-muted-foreground leading-relaxed self-end">
                I work alongside senior executives to translate AI strategy into the operating systems, governance, and measurement that make adoption stick — and convert it into engineering capacity and ROI.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-rule">
              {capabilities.map((c) => (
                <article key={c.k} className="bg-background p-8 lg:p-10">
                  <div className="flex items-baseline justify-between mb-6">
                    <div className="font-mono text-xs tracking-[0.2em] text-accent">{c.k}</div>
                    <div className="h-px flex-1 mx-4 bg-rule" />
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl tracking-tight mb-3">{c.h}</h3>
                  <p className="text-muted-foreground leading-relaxed">{c.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section id="work" className="border-b border-border" aria-labelledby="work-heading">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-4">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">05 — Selected work</div>
                <h2 id="work-heading" className="font-display text-4xl lg:text-5xl leading-[1.02] tracking-tight">
                  Programs that moved the number.
                </h2>
              </div>
              <p className="lg:col-span-7 lg:col-start-6 text-lg text-muted-foreground leading-relaxed self-end">
                Four representative initiatives. Each one is the same shape: a measurable problem, a structured intervention, an outcome leadership can steer on.
              </p>
            </div>
            <div className="divide-y divide-rule border-t border-b border-rule">
              {work.map((w, i) => (
                <article key={i} className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14 group">
                  <div className="lg:col-span-3">
                    <div className="font-mono text-xs tracking-[0.18em] uppercase text-muted-foreground">
                      <AccentYear year={w.year} />
                    </div>
                    <div className="mt-2 text-sm font-medium">{w.org}</div>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="font-display text-3xl lg:text-4xl tracking-tight leading-[1.05] mb-6">
                      {w.title}
                    </h3>
                    <dl className="grid md:grid-cols-3 gap-6 lg:gap-10 text-sm leading-relaxed">
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Problem</dt>
                        <dd className="text-foreground/85">{w.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Action</dt>
                        <dd className="text-foreground/85">{w.action}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Outcome</dt>
                        <dd className="text-foreground font-medium">{w.outcome}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CurrentFocus />

        {/* THINKING */}
        <section id="thinking" className="border-b border-border" aria-labelledby="thinking-heading">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-4">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">07 — Thinking</div>
                <h2 id="thinking-heading" className="font-display text-4xl lg:text-5xl leading-[1.02] tracking-tight">
                  Frameworks from the field.
                </h2>
              </div>
              <p className="lg:col-span-7 lg:col-start-6 text-lg text-muted-foreground leading-relaxed self-end">
                Short, opinionated takes on what actually works inside complex enterprises — the principles behind the Enterprise AI Transformation Framework.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-rule">
              {insights.map((n, i) => (
                <article key={i} className="bg-background p-8 lg:p-10">
                  <div className="font-mono text-xs tracking-[0.2em] text-accent mb-4">
                    N°{String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl leading-tight tracking-tight mb-3">
                    {i === 0 ? (
                      <>
                        <AccentText>Operating model</AccentText> first, tools second
                      </>
                    ) : i === 2 ? (
                      <>
                        <AccentText>Measure capacity</AccentText>, not activity
                      </>
                    ) : (
                      n.t
                    )}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{n.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <InsightsSection />
        <ThreadThroughItAll />
        <SpeakingSection />
        <AdvisorySection />
        <AboutSection />

        {/* CTA */}
        <section id="contact" aria-labelledby="contact-heading">
          <SectionDivider className="mx-auto max-w-[1280px] px-6 lg:px-12" />
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-24 lg:py-36 text-center">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">13 — Next</div>
            <h2 id="contact-heading" className="font-display text-5xl lg:text-7xl leading-[0.98] tracking-tight max-w-4xl mx-auto">
              Scaling AI inside a complex enterprise?<br />
              <em className="italic text-muted-foreground">Let&rsquo;s talk.</em>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
              Executive collaboration on AI operating models, governance, adoption, and transformation
              leadership — advisory, speaking, and strategic partnership.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:aly.metwaly@outlook.com?subject=AI%20Transformation%20Discussion"
                className="px-6 py-3 rounded-full text-sm font-medium"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                Discuss AI transformation
              </a>
              <a
                href="mailto:aly.metwaly@outlook.com?subject=Book%20a%20Conversation"
                className="px-6 py-3 rounded-full text-sm font-medium border border-border hover:bg-muted btn-accent-outline"
              >
                Book a conversation
              </a>
              <a
                href="mailto:aly.metwaly@outlook.com?subject=Explore%20Collaboration"
                className="px-6 py-3 rounded-full text-sm font-medium border border-border hover:bg-muted btn-accent-outline"
              >
                Explore collaboration
              </a>
              <a
                href="mailto:aly.metwaly@outlook.com?subject=Speaking%20Inquiry"
                className="px-6 py-3 rounded-full text-sm font-medium border border-border hover:bg-muted btn-accent-outline"
              >
                Invite me to speak
              </a>
              <a
                href="https://www.linkedin.com/in/aly-metwaly"
                target="_blank"
                rel="noreferrer noopener"
                className="px-6 py-3 rounded-full text-sm font-medium border border-border hover:bg-muted btn-accent-outline"
              >
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
          <div>© {new Date().getFullYear()} Aly Metwaly · Enterprise AI Transformation Leader</div>
          <div>Espoo · Finland</div>
        </div>
      </footer>
    </div>
  );
}
