import { createFileRoute } from "@tanstack/react-router";
import { BuildingSection } from "@/components/BuildingSection";
import { PageHero } from "@/components/PageHero";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/building")({
  head: () => ({
    meta: [
      { title: "What I am building · Aly Metwaly" },
      {
        name: "description",
        content:
          "The AI work I am building, including the adoption playbook, agent workflows and this open source site.",
      },
      { property: "og:title", content: "What I am building · Aly Metwaly" },
      {
        property: "og:description",
        content:
          "The AI work Aly Metwaly is building, including the adoption playbook, agent workflows and this open source site.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: absoluteUrl("/building") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "What I am building · Aly Metwaly" },
      {
        name: "twitter:description",
        content:
          "The AI work Aly Metwaly is building, including the adoption playbook, agent workflows and this open source site.",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/building") }],
  }),
  component: BuildingPage,
});

function BuildingPage() {
  return (
    <SiteLayout>
      <PageHero
        headline="What I am building."
        description="I advise on enterprise AI transformation. I also ship the playbooks, agent workflows, and open source that make the advice repeatable."
        headingId="building-heading"
      />
      <BuildingSection />
    </SiteLayout>
  );
}
