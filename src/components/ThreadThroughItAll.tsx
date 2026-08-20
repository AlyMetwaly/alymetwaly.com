const themes = [
  {
    title: "Curiosity as the constant",
    body: "I have always been drawn to how complex systems work: the technologies, the organizations, the teams behind them. That curiosity carried me from engineering and semiconductors through startup advisory and enterprise leadership, never along a conventional path, always toward the next question worth answering.",
  },
  {
    title: "People transform organizations",
    body: "Early on, I believed the hardest problems were technical. Experience taught me otherwise: success and failure hinge on people. The work I find most rewarding is bringing perspectives together, navigating uncertainty, and turning ambitious ideas into practical outcomes.",
  },
  {
    title: "Innovation is an environment",
    body: "Lasting innovation pairs technical excellence with trust, collaboration, and thoughtful decision-making. It is not a project with an end date. It is the conditions you create so teams can do their best work and connect what is possible with what matters to the business.",
  },
];

import { AccentText } from "@/components/AccentText";
import { SectionDivider } from "@/components/SectionDivider";

export function ThreadThroughItAll() {
  return (
    <section id="thread" className="section-anchor border-b border-border">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-32">
        <div className="max-w-[70ch]">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
            09 · The thread
          </div>
          <h2 className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
            The thread through it all.
          </h2>
        </div>

        <p className="mt-12 lg:mt-16 max-w-[70ch] font-display text-2xl lg:text-[1.75rem] leading-[1.35] tracking-tight text-foreground/90">
          I have never followed a conventional career path. What has held constant is{" "}
          <AccentText>curiosity</AccentText>, about how complex systems work, and how to design them
          for meaningful impact. Today I work at the intersection of technology, strategy, and
          transformation, connecting innovation with business value and the teams that make it real.
        </p>

        <div className="mt-20 lg:mt-28 space-y-16 lg:space-y-24">
          {themes.map((theme) => (
            <article
              key={theme.title}
              className="grid lg:grid-cols-12 gap-6 lg:gap-12 pt-16 lg:pt-20 border-t border-rule first:pt-0 first:border-t-0"
            >
              <h3 className="lg:col-span-4 font-display text-2xl lg:text-3xl leading-tight tracking-tight">
                {theme.title}
              </h3>
              <p className="lg:col-span-7 lg:col-start-6 max-w-[70ch] text-lg text-muted-foreground leading-relaxed">
                {theme.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-20 lg:mt-28 max-w-[70ch] font-display text-xl lg:text-2xl leading-[1.4] tracking-tight text-foreground/80 italic">
          Growth, I have learned, comes from{" "}
          <AccentText className="not-italic">curiosity</AccentText>, embracing change and having the
          courage to keep learning when the path is not yet clear.
        </p>

        <SectionDivider className="mt-20 lg:mt-28" />
      </div>
    </section>
  );
}
