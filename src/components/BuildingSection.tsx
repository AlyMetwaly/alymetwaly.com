import { GITHUB_URL } from "@/lib/social";
import { ADOPTION_PLAYBOOK_REPO_URL, SITE_SOURCE_REPO_URL } from "@/lib/building-links";

const proofMetrics = [
  {
    value: "65%",
    label: "Increase in AI adoption across engineering teams",
  },
  {
    value: "5×",
    label: "Scale-up of an AI-enabled solution in 8 weeks",
  },
  {
    value: "31",
    label: "About 31 engineer-years of annual capacity from 560 hours of effort",
  },
] as const;

const blocks = [
  {
    id: "adoption-playbook",
    title: "Adoption playbook",
    paragraph:
      "A practical path for taking AI coding tools from licence to daily use. It follows five moves: align leaders, enable teams, embed habits, measure adoption, and expand what works.",
    bullets: [
      "Align on outcomes and guardrails before licences land.",
      "Enable champions, then embed tools in real delivery.",
      "Measure usage and quality, then expand rollout.",
    ],
    link: {
      href: ADOPTION_PLAYBOOK_REPO_URL,
      label: "View the adoption playbook repo",
    },
  },
  {
    id: "agentic-systems",
    title: "Agentic systems with Cursor and Claude Code",
    paragraph:
      "Local-first workflows where agents follow explicit rules, reusable skills, and human review gates. Python utilities are tested before they touch real content.",
    bullets: [
      "Agent rules and skills kept in the repo, not in chat history.",
      "Human review before anything ships or goes live.",
      "Tested Python around a Content System, Keynote OS, and an AI Ecosystem map.",
    ],
    link: null,
  },
  {
    id: "open-source",
    title: "Open source",
    paragraph:
      "This site is MIT-licensed, prerendered for static hosting, and guarded so broken routes fail the build instead of shipping silent 404s.",
    bullets: [
      "Hand-built routes with a single deploy path.",
      "Build guards for prerendered files and asset references.",
      "Fork-friendly configuration in one place per concern.",
    ],
    link: {
      href: SITE_SOURCE_REPO_URL,
      label: "Site source on GitHub",
      secondary: { href: GITHUB_URL, label: "GitHub profile" },
    },
  },
] as const;

export function BuildingSection() {
  return (
    <>
      <section
        id="building"
        className="section-anchor border-b border-border"
        aria-labelledby="building-blocks-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
          <h2 id="building-blocks-heading" className="sr-only">
            Current builds
          </h2>
          <div className="space-y-16 sm:space-y-20">
            {blocks.map((block) => (
              <article
                key={block.id}
                className="grid gap-6 border-t border-rule pt-10 first:border-t-0 first:pt-0 sm:gap-8 lg:grid-cols-12 lg:gap-12"
                aria-labelledby={`${block.id}-title`}
              >
                <h3
                  id={`${block.id}-title`}
                  className="font-display text-2xl tracking-tight sm:text-3xl lg:col-span-4"
                >
                  {block.title}
                </h3>
                <div className="space-y-5 lg:col-span-8">
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {block.paragraph}
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-foreground/85">
                    {block.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {block.link && (
                    <p className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                      <a
                        href={block.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-accent-underline text-foreground"
                      >
                        {block.link.label}
                      </a>
                      {"secondary" in block.link && block.link.secondary && (
                        <a
                          href={block.link.secondary.href}
                          target="_blank"
                          rel="noreferrer"
                          className="link-accent-underline text-foreground"
                        >
                          {block.link.secondary.label}
                        </a>
                      )}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="building-proof"
        className="section-anchor border-b border-border"
        aria-labelledby="building-proof-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
          <div className="mb-12 sm:mb-16">
            <h2
              id="building-proof-heading"
              className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Proof from the work.
            </h2>
          </div>
          <div className="grid border-t border-rule sm:grid-cols-3">
            {proofMetrics.map((m) => (
              <div
                key={m.label}
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
        </div>
      </section>
    </>
  );
}
