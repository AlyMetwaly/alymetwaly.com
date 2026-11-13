import { ADOPTION_PLAYBOOK_REPO_URL } from "@/lib/building-links";
import { ScorecardFigure } from "@/components/figures/ScorecardFigure";
import { ScorecardTerminal } from "@/components/figures/ScorecardTerminal";

/**
 * What the public scorecard prints, on simulated data. Both the figure and the
 * terminal output come from the same simulated week 6 example. Renders nothing
 * until the playbook repo is public.
 */
export function ScorecardProof() {
  if (!ADOPTION_PLAYBOOK_REPO_URL) return null;
  return (
    <section
      id="building-scorecard"
      className="section-anchor border-b border-border"
      aria-labelledby="building-scorecard-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <h2
          id="building-scorecard-heading"
          className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
        >
          What the scorecard prints.
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A small tool in the playbook repo. It reads a per-user usage export and prints each signal
          on its own. There is no composite score and no outcome claim. This run uses a simulated
          12-user pilot.
        </p>
        <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-12 lg:gap-12">
          <figure className="min-w-0 lg:col-span-5">
            <ScorecardFigure />
            <figcaption className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              The same week 6 data, drawn as a funnel and a team view. Synthetic data. Invented
              numbers.
            </figcaption>
          </figure>
          <div className="min-w-0 lg:col-span-7">
            <ScorecardTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}
