import { Link } from "@tanstack/react-router";
import { GITHUB_URL } from "@/lib/social";
import {
  ADOPTION_PLAYBOOK_REPO_URL,
  AGENT_PLUGINS_REPO_URL,
  SITE_SOURCE_REPO_URL,
} from "@/lib/building-links";
import { BUILDING_METRIC_IDS, PROOF_METRICS } from "@/lib/metrics";

const proofMetrics = BUILDING_METRIC_IDS.map((id) => {
  const metric = PROOF_METRICS.find((m) => m.id === id);
  if (!metric) {
    throw new Error(`Building metric "${id}" is not defined in PROOF_METRICS`);
  }
  return metric;
});

const topics = [
  {
    id: "adoption-playbook",
    title: "AI coding adoption playbook",
    status: "Public",
    paragraph:
      "A practical rollout kit for moving AI coding tools from access to regular use across engineering teams. It has guides, templates and a small adoption scorecard.",
  },
  {
    id: "agent-rules",
    title: "Agent rules and skills",
    status: "Partly public",
    paragraph:
      "The rules, reusable skills and review points that tell Cursor and Claude Code how to work in my repos. They live in the repo, not in chat history. Most are private. A first set is public as Cursor plugins. They are early and not yet submitted to a marketplace.",
  },
  {
    id: "this-website",
    title: "This website",
    status: "Public",
    paragraph:
      "MIT-licensed and prerendered for static hosting. The build fails if a route or an asset is missing, so broken pages never ship.",
  },
  {
    id: "content-pipeline",
    title: "Content pipeline",
    status: "Private",
    paragraph:
      "Turns a brief into a published post through fixed steps. It has a quality check, and nothing goes live without my approval.",
  },
  {
    id: "keynote-os",
    title: "Keynote OS",
    status: "Private",
    paragraph:
      "Stores the talks I have delivered and pulls out reusable stories, frameworks and data points for the next one.",
  },
  {
    id: "ai-ecosystem",
    title: "AI Ecosystem",
    status: "Private",
    paragraph:
      "A 12-month system for learning the AI stack. It has daily notes, tracked metrics, and predictions scored for accuracy.",
  },
  {
    id: "investment-tools",
    title: "Investment decision tools",
    status: "Private",
    paragraph:
      "Personal tools for screening stocks, angel deals and real estate, and for checking my own portfolio decisions against written rules.",
  },
] as const;

const sectionHeadingClass =
  "font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl";
const externalLinkClass = "link-accent-underline inline-flex min-h-11 items-center text-foreground";

export function BuildingSection() {
  return (
    <>
      <section
        id="building"
        className="section-anchor border-b border-border"
        aria-labelledby="building-topics-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
          <div className="mb-12 sm:mb-16">
            <h2 id="building-topics-heading" className={sectionHeadingClass}>
              What I am working on.
            </h2>
          </div>
          <div className="space-y-16 sm:space-y-20">
            {topics.map((topic) => (
              <article
                key={topic.id}
                className="grid gap-6 border-t border-rule pt-10 first:border-t-0 first:pt-0 sm:gap-8 lg:grid-cols-12 lg:gap-12"
                aria-labelledby={`${topic.id}-title`}
              >
                <div className="space-y-3 lg:col-span-4">
                  <h3
                    id={`${topic.id}-title`}
                    className="font-display text-2xl tracking-tight sm:text-3xl"
                  >
                    {topic.title}
                  </h3>
                  <p className="section-eyebrow text-xs">{topic.status}</p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {topic.paragraph}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="building-open"
        className="section-anchor border-b border-border"
        aria-labelledby="building-open-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
          <div className="mb-12 sm:mb-16">
            <h2 id="building-open-heading" className={sectionHeadingClass}>
              Open to view.
            </h2>
          </div>
          <ul className="space-y-10">
            <li className="grid gap-4 border-t border-rule pt-10 first:border-t-0 first:pt-0 sm:gap-6 lg:grid-cols-12 lg:gap-12">
              <h3 className="font-display text-2xl tracking-tight sm:text-3xl lg:col-span-4">
                This website
              </h3>
              <p className="flex flex-wrap gap-x-6 gap-y-2 text-base lg:col-span-8">
                <a
                  href={SITE_SOURCE_REPO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={externalLinkClass}
                >
                  Site source on GitHub
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={externalLinkClass}>
                  GitHub profile
                </a>
              </p>
            </li>
            <li className="grid gap-4 border-t border-rule pt-10 first:border-t-0 first:pt-0 sm:gap-6 lg:grid-cols-12 lg:gap-12">
              <h3 className="font-display text-2xl tracking-tight sm:text-3xl lg:col-span-4">
                Adoption playbook
              </h3>
              <p className="flex flex-wrap gap-x-6 gap-y-2 text-base lg:col-span-8">
                {ADOPTION_PLAYBOOK_REPO_URL ? (
                  <a
                    href={ADOPTION_PLAYBOOK_REPO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={externalLinkClass}
                  >
                    View the adoption playbook repo
                  </a>
                ) : (
                  <span className="inline-flex min-h-11 items-center text-muted-foreground">
                    Coming soon
                  </span>
                )}
              </p>
            </li>
            <li className="grid gap-4 border-t border-rule pt-10 first:border-t-0 first:pt-0 sm:gap-6 lg:grid-cols-12 lg:gap-12">
              <h3 className="font-display text-2xl tracking-tight sm:text-3xl lg:col-span-4">
                Agent plugins
              </h3>
              <p className="flex flex-wrap gap-x-6 gap-y-2 text-base lg:col-span-8">
                <a
                  href={AGENT_PLUGINS_REPO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={externalLinkClass}
                >
                  View the agent plugins repo
                </a>
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="building-proof"
        className="section-anchor border-b border-border"
        aria-labelledby="building-proof-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
          <div className="mb-12 sm:mb-16">
            <h2 id="building-proof-heading" className={sectionHeadingClass}>
              Results from enterprise rollouts.
            </h2>
          </div>
          <div className="grid border-t border-rule sm:grid-cols-3">
            {proofMetrics.map((m) => (
              <div
                key={m.id}
                className="border-b border-r border-rule px-2 py-10 last:border-r-0 sm:border-b-0 sm:[&:nth-child(3n)]:border-r-0 lg:py-14"
              >
                <div className="font-display text-5xl leading-none tracking-tight text-accent sm:text-6xl">
                  {m.value}
                </div>
                <div className="mt-4 max-w-[28ch] text-sm leading-relaxed text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-base leading-relaxed text-foreground sm:mt-16 sm:text-lg">
            Want to talk about any of this?{" "}
            <Link
              to="/contact"
              className="link-accent-underline inline-flex min-h-11 items-center text-foreground"
            >
              Message me on LinkedIn or by email.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
