import { AccentText } from "@/components/AccentText";

const differentiators = [
  {
    title: "Deep engineering roots",
    body: "Nearly a decade in custom semiconductor and 5G/6G R&D. I speak the language of technical leaders and translate complexity into operational clarity.",
  },
  {
    title: "Transformation at scale",
    body: "Orchestrated a 74,000-employee performance program across 20 workstreams. I know how large, decentralized organizations actually move.",
  },
  {
    title: "AI enablement in practice",
    body: "Rolled out Copilot, GitHub Copilot, Cursor, and Glean with measurable adoption curves, not license counts.",
  },
  {
    title: "Governance that accelerates",
    body: "Lightweight guardrails and decision rights that protect the enterprise without collapsing team velocity.",
  },
  {
    title: "Measurement systems",
    body: "Real-time dashboards on adoption, maturity, and capacity returned: the metrics executives should steer on.",
  },
  {
    title: "Change management discipline",
    body: "Champion networks, embedded workflows, and leadership framing that change behavior, not town halls.",
  },
];

export function WhyWorkWithMe() {
  return (
    <section
      id="why-me"
      className="section-anchor border-b border-border"
      style={{ background: "var(--ink)", color: "var(--paper)" }}
      aria-labelledby="why-me-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="mb-6 text-xs font-mono uppercase tracking-[0.2em] opacity-60">
          03 · Why me
        </div>
        <h2
          id="why-me-heading"
          className="max-w-4xl font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-6xl"
        >
          Why organizations work with me
        </h2>
        <p className="mt-8 max-w-3xl text-lg opacity-75 leading-relaxed">
          Most AI transformation programs focus on technology selection and strategy decks. I focus
          on execution, because technology rarely fails.{" "}
          <AccentText className="opacity-100">Operating models do.</AccentText>
        </p>
        <p className="mt-6 max-w-3xl text-lg opacity-75 leading-relaxed">
          My perspective is uncommon: deep-tech engineering and semiconductor R&D, followed by
          enterprise transformation leadership, AI enablement at scale, governance design, and
          measurement systems. I have built silicon and built the operating models that help
          74,000-person organizations adopt AI.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {differentiators.map((item) => (
            <article key={item.title}>
              <h3 className="font-display text-2xl lg:text-3xl mb-4 opacity-95 leading-tight">
                {item.title}
              </h3>
              <p className="opacity-65 leading-relaxed text-sm lg:text-base">{item.body}</p>
            </article>
          ))}
        </div>

        <blockquote className="mt-16 lg:mt-20 pt-12 border-t border-white/10">
          <p className="font-display text-2xl lg:text-3xl leading-[1.25] tracking-tight opacity-90 max-w-4xl italic">
            &ldquo;The organizations that win at AI are not the ones with the best models. They are
            the ones with the best{" "}
            <AccentText className="opacity-100 not-italic">operating models</AccentText>.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}
