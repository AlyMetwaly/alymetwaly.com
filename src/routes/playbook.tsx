import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.JPG";
import { absoluteUrl } from "@/lib/site";
import { MyPerspective } from "@/components/MyPerspective";
import { SignatureFramework } from "@/components/SignatureFramework";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ADOPTION_PLAYBOOK_REPO_URL } from "@/lib/building-links";

export const Route = createFileRoute("/playbook")({
  head: () => ({
    meta: [
      { title: "AI Transformation Playbook · Aly Metwaly" },
      {
        name: "description",
        content:
          "How Aly Metwaly thinks about enterprise AI transformation and the AI Transformation Value Chain: a connected system linking strategy, operating models, governance, adoption, and measurement.",
      },
      { property: "og:title", content: "AI Transformation Playbook · Aly Metwaly" },
      {
        property: "og:description",
        content:
          "The AI Transformation Value Chain: strategy, operating models, governance, adoption, measurement.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: absoluteUrl("/playbook") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Transformation Playbook · Aly Metwaly" },
      {
        name: "twitter:description",
        content:
          "The AI Transformation Value Chain: strategy, operating models, governance, adoption, measurement.",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/playbook") }],
  }),
  component: PlaybookPage,
});

function PlaybookPage() {
  return (
    <SiteLayout>
      <MyPerspective />
      <SignatureFramework />
      {ADOPTION_PLAYBOOK_REPO_URL && (
        <section className="border-t border-border" aria-labelledby="playbook-kit-note">
          <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
            <p
              id="playbook-kit-note"
              className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              The Value Chain is the framework. The AI coding adoption playbook applies it to
              engineering teams, with guides, templates and a small adoption scorecard. It is open
              source.
            </p>
            <a
              href={ADOPTION_PLAYBOOK_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="link-accent-underline mt-2 inline-flex min-h-11 items-center text-foreground"
            >
              View the adoption playbook repo
            </a>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
