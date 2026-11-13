import { ADOPTION_PLAYBOOK_REPO_URL } from "@/lib/building-links";
import { MeasurementLayersFigure } from "@/components/figures/MeasurementLayersFigure";
import { RolloutLifecycleFigure } from "@/components/figures/RolloutLifecycleFigure";

const linkClass = "link-accent-underline inline-flex min-h-11 items-center text-foreground";

/**
 * The companion kit: five moves and five measurement layers, each as a figure,
 * with links into the public repo. Renders nothing until the repo URL is set.
 */
export function PlaybookKit() {
  if (!ADOPTION_PLAYBOOK_REPO_URL) return null;
  return (
    <section className="border-t border-border" aria-labelledby="playbook-kit-heading">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
        <h2
          id="playbook-kit-heading"
          className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
        >
          The companion kit.
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          The Value Chain is the framework. The AI coding adoption playbook is a companion kit for
          engineering teams, with guides, templates and a small adoption scorecard. It is open
          source.
        </p>
        <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-2 lg:gap-16">
          <figure className="min-w-0">
            <RolloutLifecycleFigure />
            <figcaption className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              The five moves of a rollout. Each one is a question the team has to answer before
              moving on.
            </figcaption>
          </figure>
          <figure className="min-w-0">
            <MeasurementLayersFigure />
            <figcaption className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Five measurement layers, kept apart. Each answers a different question, and none
              proves the next.
            </figcaption>
          </figure>
        </div>
        <p className="mt-8 flex flex-wrap gap-x-6 gap-y-1">
          <a
            href={ADOPTION_PLAYBOOK_REPO_URL}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            View the adoption playbook repo
          </a>
          <a
            href={`${ADOPTION_PLAYBOOK_REPO_URL}/tree/main/docs`}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            Read the five guides
          </a>
        </p>
      </div>
    </section>
  );
}
