import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.JPG";
import { absoluteUrl } from "@/lib/site";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience · Aly Metwaly" },
      {
        name: "description",
        content:
          "Programs that moved the needle: enterprise AI enablement, engineering adoption, and global transformation at Nokia.",
      },
      { property: "og:title", content: "Experience · Aly Metwaly" },
      {
        property: "og:description",
        content:
          "Programs that moved the needle: enterprise AI enablement, engineering adoption, and global transformation at Nokia.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: absoluteUrl("/experience") },
      { property: "og:image", content: absoluteUrl(portraitAsset) },
      { property: "og:image:alt", content: "Aly Metwaly, Enterprise AI Transformation Leader" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Experience · Aly Metwaly" },
      {
        name: "twitter:description",
        content:
          "Programs that moved the needle: enterprise AI enablement, engineering adoption, and global transformation at Nokia.",
      },
      { name: "twitter:image", content: absoluteUrl(portraitAsset) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/experience") }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <SiteLayout>
      <ExperienceSection />
    </SiteLayout>
  );
}
