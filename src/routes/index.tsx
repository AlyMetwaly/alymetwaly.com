import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.JPG";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aly Metwaly — Enterprise AI Transformation Leader" },
      {
        name: "description",
        content:
          "Aly Metwaly designs and operationalizes enterprise AI operating models. Transformation Manager at Nokia. 45% adoption growth, 31 engineer-years unlocked, 74,000-employee programs.",
      },
      { property: "og:title", content: "Aly Metwaly — Enterprise AI Transformation Leader" },
      {
        property: "og:description",
        content:
          "Designing AI operating models that scale across complex enterprises. Transformation Manager at Nokia.",
      },
      { property: "og:image", content: portraitAsset.url },
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

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-2xl leading-none tracking-tight">
            Aly Metwaly
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#impact" className="hover:text-foreground transition-colors">Impact</a>
            <a href="#capabilities" className="hover:text-foreground transition-colors">Capabilities</a>
            <a href="#work" className="hover:text-foreground transition-colors">Selected Work</a>
            <a href="#thinking" className="hover:text-foreground transition-colors">Thinking</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
          </nav>
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-full bg-ink text-paper hover:bg-foreground/85 transition-colors"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            Connect
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground mb-8">
              <span className="inline-block w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
              Transformation Manager · Nokia · Espoo
            </div>
            <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em]">
              Enterprise AI,<br />
              <em className="italic text-muted-foreground/90">operationalized</em> at scale.
            </h1>
            <p className="mt-8 max-w-2xl text-lg lg:text-xl text-muted-foreground leading-relaxed">
              I design the operating models — people, governance, tooling, measurement — that move large enterprises from AI experimentation to repeatable execution and measurable business impact.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="px-5 py-3 rounded-full text-sm font-medium" style={{ background: "var(--ink)", color: "var(--paper)" }}>
                View selected work
              </a>
              <a href="#contact" className="px-5 py-3 rounded-full text-sm font-medium border border-border hover:bg-muted transition-colors">
                Start a conversation
              </a>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="relative">
              <img
                src={portraitAsset}
                alt="Portrait of Aly Metwaly"
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
        {/* Marquee strip */}
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
      <section id="impact" className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">01 — Proof</div>
              <h2 className="font-display text-4xl lg:text-5xl leading-[1.02] tracking-tight">
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
                <div className="font-display text-6xl lg:text-7xl leading-none tracking-tight">
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

      {/* VALUE PROP / CAPABILITIES */}
      <section id="capabilities" className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">02 — What I do</div>
              <h2 className="font-display text-4xl lg:text-5xl leading-[1.02] tracking-tight">
                From AI ambition to enterprise execution.
              </h2>
            </div>
            <p className="lg:col-span-7 lg:col-start-6 text-lg text-muted-foreground leading-relaxed self-end">
              I work alongside senior executives to translate AI strategy into the operating systems, governance, and measurement that make adoption stick — and convert it into engineering capacity and ROI.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-rule">
            {capabilities.map((c) => (
              <div key={c.k} className="bg-background p-8 lg:p-10">
                <div className="flex items-baseline justify-between mb-6">
                  <div className="font-mono text-xs tracking-[0.2em] text-muted-foreground">{c.k}</div>
                  <div className="h-px flex-1 mx-4 bg-rule" />
                </div>
                <h3 className="font-display text-2xl lg:text-3xl tracking-tight mb-3">{c.h}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="border-b border-border" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-28">
          <div className="text-xs font-mono uppercase tracking-[0.2em] opacity-60 mb-6">03 — Why me</div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.02] tracking-tight max-w-4xl">
            Most AI leaders sell strategy. I ship the operating model that makes it work.
          </h2>
          <div className="mt-16 grid md:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <div className="font-display text-5xl mb-4 opacity-90">Engineer-built</div>
              <p className="opacity-70 leading-relaxed">
                Nearly a decade in custom semiconductor and 5G/6G R&amp;D. I translate technical complexity into operational clarity — and earn the room with engineering leaders.
              </p>
            </div>
            <div>
              <div className="font-display text-5xl mb-4 opacity-90">Execution-biased</div>
              <p className="opacity-70 leading-relaxed">
                Programs run on instrumented governance, not intent. 100% of annual objectives delivered across a 74,000-employee rollout with 255 roadmap items.
              </p>
            </div>
            <div>
              <div className="font-display text-5xl mb-4 opacity-90">Outcome-measured</div>
              <p className="opacity-70 leading-relaxed">
                Every program reports adoption, maturity, and impact to leadership in real time. ~100:1 return on execution effort on the SoC AI rollout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">04 — Selected work</div>
              <h2 className="font-display text-4xl lg:text-5xl leading-[1.02] tracking-tight">
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
                    {w.year}
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

      {/* THINKING */}
      <section id="thinking" className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">05 — Thinking</div>
              <h2 className="font-display text-4xl lg:text-5xl leading-[1.02] tracking-tight">
                Frameworks from the field.
              </h2>
            </div>
            <p className="lg:col-span-7 lg:col-start-6 text-lg text-muted-foreground leading-relaxed self-end">
              Short, opinionated takes on what actually works inside complex enterprises.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-rule">
            {insights.map((n, i) => (
              <div key={i} className="bg-background p-8 lg:p-10">
                <div className="font-mono text-xs tracking-[0.2em] text-muted-foreground mb-4">
                  N° {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl lg:text-3xl leading-tight tracking-tight mb-3">
                  {n.t}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{n.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-border">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">06 — About</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.02] tracking-tight">
              Strategy meets silicon.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              I lead enterprise AI transformation at Nokia, designing and operationalizing the systems that turn AI strategy into measurable outcomes across decentralized business segments.
            </p>
            <p className="text-muted-foreground">
              My trajectory is engineering-led: 5G/6G silicon program leadership, CI/CD and automation, embedded AI research — followed by R&amp;D transformation, a CPO rotation orchestrating a 74,000-employee performance program, and now company-wide AI enablement.
            </p>
            <p className="text-muted-foreground">
              MBA in Leading Transformational Change (Laurea, 5/5). EIT Digital double-degree MSc in Embedded Systems (KTH × University of Turku). Angel investor and advisor with FiBAN, supporting technical founders translating roadmaps into scalable operating models.
            </p>
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-rule text-sm">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Based</div>
                <div>Espoo, Finland</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Tenure</div>
                <div>Nokia · 6+ years</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Languages</div>
                <div>EN · AR · FI</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Advisor</div>
                <div>FiBAN Angel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-24 lg:py-36 text-center">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">07 — Next</div>
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.98] tracking-tight max-w-4xl mx-auto">
            Scaling AI inside a complex enterprise?<br />
            <em className="italic text-muted-foreground">Let&rsquo;s talk.</em>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            Executive collaboration, advisory, and speaking on AI operating models, governance, and adoption at scale.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:aly.metwaly@outlook.com"
              className="px-6 py-3 rounded-full text-sm font-medium"
              style={{ background: "var(--ink)", color: "var(--paper)" }}
            >
              aly.metwaly@outlook.com
            </a>
            <a
              href="https://www.linkedin.com/in/aly-metwaly"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full text-sm font-medium border border-border hover:bg-muted transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
          <div>© {new Date().getFullYear()} Aly Metwaly</div>
          <div>Espoo · Finland</div>
        </div>
      </footer>
    </div>
  );
}
