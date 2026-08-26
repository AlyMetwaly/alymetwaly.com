import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.JPG";
import { absoluteUrl } from "@/lib/site";
import { MyPerspective } from "@/components/MyPerspective";
import { SignatureFramework } from "@/components/SignatureFramework";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/playbook")({
  head: () => ({
    meta: [
      { title: "AI Transformation Playbook" },
      {
        name: "description",
        content:
          "How Aly Metwaly thinks about enterprise AI transformation and the AI Transformation Value Chain—a connected system linking strategy, operating models, governance, adoption, and measurement.",
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
    </SiteLayout>
  );
}
