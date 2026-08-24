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
      { property: "og:title", content: "AI Transformation Playbook" },
      {
        property: "og:description",
        content:
          "How Aly Metwaly thinks about enterprise AI transformation and the AI Transformation Value Chain—a connected system linking strategy, operating models, governance, adoption, and measurement.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: absoluteUrl("/playbook") },
      { property: "og:image", content: absoluteUrl(portraitAsset) },
      { property: "og:image:alt", content: "Aly Metwaly, Enterprise AI Transformation Leader" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Transformation Playbook" },
      {
        name: "twitter:description",
        content:
          "How Aly Metwaly thinks about enterprise AI transformation and the AI Transformation Value Chain—a connected system linking strategy, operating models, governance, adoption, and measurement.",
      },
      { name: "twitter:image", content: absoluteUrl(portraitAsset) },
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
