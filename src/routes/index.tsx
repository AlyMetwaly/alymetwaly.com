import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.JPG";
import { AboutSection } from "@/components/AboutSection";
import { AdvisorySection } from "@/components/AdvisorySection";
import { SectionDivider } from "@/components/SectionDivider";
import { SignatureFramework } from "@/components/SignatureFramework";
import { SpeakingSection } from "@/components/SpeakingSection";
import { SectionNav } from "@/components/SectionNav";
import { MyPerspective } from "@/components/MyPerspective";
import { HEADER_NAV_SECTIONS } from "@/lib/sections";

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
      { title: "Aly Metwaly · Enterprise AI Transformation Leader" },
      {
        name: "description",
        content:
          "Aly Metwaly designs enterprise AI operating models, governance, and adoption programs that scale. Transformation Manager at Nokia. AI transformation advisor, speaker, and author of the AI Transformation Value Chain.",
      },
      {
        name: "keywords",
        content:
          "enterprise AI transformation, AI operating model, AI adoption, AI governance, AI transformation leader, AI change management, enterprise AI strategy, AI transformation advisor",
      },
      { name: "author", content: "Aly Metwaly" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Aly Metwaly · Enterprise AI Transformation Leader" },
      {
        property: "og:description",
        content:
          "Enterprise AI operating models, governance, and adoption at scale. Frameworks and execution from the field. Transformation Manager at Nokia.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: portraitAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aly Metwaly · Enterprise AI Transformation Leader" },
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
  { value: "65%", label: "Increase in active AI tool usage across R&D" },
  { value: "5×", label: "Scale-up of an AI requirements-assistant use case in 8 weeks" },
  { value: "31", label: "Engineer-years of annual capacity unlocked (~1,160 hrs/week)" },
  { value: "100:1", label: "Return on execution effort vs. non-BAU hours invested" },
  { value: "74k", label: "Employees in the performance program rolled out globally" },
  { value: "255", label: "Roadmap items governed across 20 cross-functional workstreams" },
];

const work = [
  {
    org: "Nokia · Enterprise AI Transformation (Keystone)",
    year: "2026 · Present",
    title: "Company-wide AI enablement playbook",
    problem:
      "AI adoption was fragmented across decentralized business segments with no shared operating model.",
    action:
      "Designed a holistic enablement playbook spanning leadership, governance, tooling, and team-level adoption. Operationalized lightweight controls, rapid pilots, and continuous feedback loops.",
    outcome:
      "Enterprise rollout of Cursor, Glean, and Microsoft 365 Copilot with measurable adoption across business segments.",
  },
  {
    org: "Nokia · System-on-Chip R&D",
    year: "2020 · Present",
    title: "Adoption-first AI execution across engineering",
    problem:
      "AI tools existed in pockets, with no mechanism to convert access into engineering throughput.",
    action:
      "Built a structured enablement model with metrics, training, champion networks, and lightweight governance, and rolled out Copilot (M365 + Premium), GitHub Copilot, and Cursor across the SoC unit.",
    outcome:
      "+65% active usage. 5× scale-up of a requirements-assistant use case in 8 weeks. ~31 engineer-years of annual capacity unlocked at ~100:1 return on execution effort.",
  },
  {
    org: "Nokia · Chief People Office (Rotation)",
    year: "2025",
    title: "Perform to Win: global performance transformation",
    problem:
      "Performance management was a periodic process, disconnected from real-time execution at 74,000-person scale.",
    action:
      "Orchestrated the global rollout, aligning executive intent with execution across 20 cross-functional workstreams and 255 roadmap items.",
    outcome:
      "Embedded performance management as a living operating system. Delivered 100% of annual objectives.",
  },
  {
    org: "Nokia · 5G/6G Silicon R&D",
    year: "2022 · 2025",
    title: "Deep-tech program leadership",
    problem: "Multi-million-euro semiconductor roadmaps with high technical and delivery risk.",
    action:
      "Directed feasibility-to-delivery for 5G/6G hardware programs, instrumenting execution realism and cross-functional coordination.",
    outcome:
      "On-plan delivery of high-complexity silicon programs; foundation for the execution discipline now applied to enterprise AI.",
  },
];

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground font-sans">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-12">
          <a
            href="#top"
            className="shrink-0 font-display text-xl leading-none tracking-tight sm:text-2xl"
          >
            Aly Metwaly
          </a>
          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-5 text-sm text-muted-foreground lg:flex xl:gap-7"
            aria-label="Primary"
          >
            {HEADER_NAV_SECTIONS.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="nav-link whitespace-nowrap">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#lets-talk"
            className="shrink-0 rounded-full px-3 py-2 text-xs font-medium transition-colors hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-4 sm:text-sm"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            Let&rsquo;s Talk
          </a>
        </div>
      </header>

      <SectionNav />

      <main>
        {/* HERO */}
        <section
          id="top"
          className="section-anchor border-b border-border"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto grid max-w-[1280px] items-end gap-8 px-4 pb-16 pt-12 sm:gap-10 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:pb-28 lg:pt-24">
            <div className="lg:col-span-8">
              <div className="mb-8 space-y-1.5">
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="accent-dot" aria-hidden="true" />
                  Enterprise AI Transformation Leader
                </div>
                <p className="pl-5 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  Builder of AI Operating Models
                </p>
                <p className="pl-5 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  · Advisor · Speaker
                </p>
              </div>
              <h1
                id="hero-heading"
                className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em]"
              >
                Enterprise AI,
                <br />
                <em className="italic text-muted-foreground/90">operationalized</em> at scale.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg lg:text-xl">
                I design enterprise AI operating models: governance, adoption, measurement, and
                change management that move large organizations from AI experimentation to
                repeatable execution and measurable business impact.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="relative">
                <img
                  src={portraitAsset}
                  alt="Aly Metwaly, Enterprise AI Transformation Leader at Nokia"
                  className="w-full aspect-[4/5] object-cover"
                  style={{ background: "var(--muted)" }}
                />
                <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  <div>Based</div>
                  <div className="text-foreground">Espoo, FI</div>
                  <div>Focus</div>
                  <div className="text-foreground">AI Operating Models</div>
                  <div>Scale</div>
                  <div className="text-foreground">74k+ employees</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT METRICS */}
        <section
          id="impact"
          className="section-anchor border-b border-border"
          aria-labelledby="impact-heading"
        >
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
            <div className="mb-12 grid gap-8 sm:mb-16 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <div className="section-eyebrow mb-4">
                  01 · PROOF
                </div>
                <h2
                  id="impact-heading"
                  className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
                >
                  Outcomes, not opinions.
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-7 lg:col-start-6 lg:self-end">
                Every number below is measured against a baseline and reported to senior leadership.
                No vanity metrics, no projections.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-rule">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className="border-b border-r border-rule px-2 py-10 lg:py-14 last:border-r-0 [&:nth-child(3n)]:lg:border-r-0 [&:nth-child(2n)]:sm:border-r-0 lg:[&:nth-child(2n)]:border-r"
                >
                  <div className="text-accent font-display text-5xl leading-none tracking-tight sm:text-6xl lg:text-7xl">
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

        <MyPerspective />
        <SignatureFramework />

        {/* SELECTED WORK */}
        <section
          id="work"
          className="section-anchor border-b border-border"
          aria-labelledby="work-heading"
        >
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
            <div className="mb-12 grid gap-8 sm:mb-16 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <div className="section-eyebrow mb-4">
                  04 · WORK
                </div>
                <h2
                  id="work-heading"
                  className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
                >
                  Programs that moved the number.
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-7 lg:col-start-6 lg:self-end">
                Four representative initiatives. Each one is the same shape: a measurable problem, a
                structured intervention, an outcome leadership can steer on.
              </p>
            </div>
            <div className="divide-y divide-rule border-t border-b border-rule">
              {work.map((w, i) => (
                <article
                  key={i}
                  className="group grid gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:gap-10 lg:py-14"
                >
                  <div className="lg:col-span-3">
                    <div className="font-mono text-xs tracking-[0.18em] uppercase text-muted-foreground">
                      <AccentYear year={w.year} />
                    </div>
                    <div className="mt-2 text-sm font-medium">{w.org}</div>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="mb-4 font-display text-2xl leading-[1.05] tracking-tight sm:mb-6 sm:text-3xl lg:text-4xl">
                      {w.title}
                    </h3>
                    <dl className="grid md:grid-cols-3 gap-6 lg:gap-10 text-sm leading-relaxed">
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                          Problem
                        </dt>
                        <dd className="text-foreground/85">{w.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                          Action
                        </dt>
                        <dd className="text-foreground/85">{w.action}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                          Outcome
                        </dt>
                        <dd className="text-foreground font-medium">{w.outcome}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <AdvisorySection />
        <SpeakingSection />
        <AboutSection />

        {/* LET'S TALK */}
        <section id="lets-talk" className="section-anchor" aria-labelledby="lets-talk-heading">
          <SectionDivider className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-12" />
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
            <div className="mb-12 grid gap-8 sm:mb-16 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <div className="section-eyebrow mb-4">
                  08 · LET&rsquo;S TALK
                </div>
                <h2
                  id="lets-talk-heading"
                  className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
                >
                  Building AI transformation that lasts?
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-6 lg:col-start-7 lg:self-end">
                I work with leaders, transformation teams, founders, investors, and event organizers
                navigating AI adoption, operating models, governance, and organizational change.
              </p>
            </div>
            <div className="divide-y divide-rule border-t border-b border-rule">
              <article className="grid gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-12">
                <div className="lg:col-span-4">
                  <h3 className="font-display text-2xl tracking-tight sm:text-3xl">Advisory</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed lg:col-span-5">
                  Strategic guidance on AI transformation, operating models, governance, adoption,
                  and measurement.
                </p>
                <div className="lg:col-span-3 lg:text-right">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScoWwy5ZyLSM6ntFTSrWJe3hVbbKofS3B1aLo969tW88F2OKQ/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-muted btn-accent-outline"
                  >
                    Request an Advisory Session
                  </a>
                </div>
              </article>
              <article className="grid gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-12">
                <div className="lg:col-span-4">
                  <h3 className="font-display text-2xl tracking-tight sm:text-3xl">Speaking</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed lg:col-span-5">
                  Keynotes, workshops, executive briefings, panels, and leadership events.
                </p>
                <div className="lg:col-span-3 lg:text-right">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeLJjioBg1yv7GBnC1vEZkpR0G0u4VYfWCWj7-bo-ul-UaxuQ/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-muted btn-accent-outline"
                  >
                    Request a Speaking Engagement
                  </a>
                </div>
              </article>
              <article className="grid gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-12">
                <div className="lg:col-span-4">
                  <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                    Media, Podcasts &amp; Interviews
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed lg:col-span-5">
                  Podcast hosts, journalists, event moderators, and media producers seeking
                  interviews on AI transformation, leadership, innovation, and the future of work.
                </p>
                <div className="lg:col-span-3 lg:text-right">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfPLF8nWsxVaS_xOfFL8iOAMXM-lD-BLcYVbgNHyZH8WB3aig/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-muted btn-accent-outline"
                  >
                    Request a Media Appearance
                  </a>
                </div>
              </article>
              <article className="grid gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-12">
                <div className="lg:col-span-4">
                  <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                    Everything Else
                  </h3>
                </div>
                <div className="text-muted-foreground leading-relaxed lg:col-span-5">
                  <p>
                    Partnerships, recruiting opportunities, startup discussions, investor conversations,
                    community initiatives, collaborations, and general inquiries.
                  </p>
                  <p>
                    Not sure where your request belongs? Submit it here and I will make sure it reaches
                    the appropriate path.
                  </p>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <a
                    href="https://forms.gle/j4zVmnUnTxAUxh4UA"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-muted btn-accent-outline"
                  >
                    Get in Touch
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border pb-24 min-[1660px]:pb-8">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-4 py-8 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground sm:px-6 sm:text-xs lg:px-12">
          <div>© {new Date().getFullYear()} Aly Metwaly · Enterprise AI Transformation Leader</div>
          <div>Espoo · Finland</div>
        </div>
      </footer>
    </div>
  );
}
