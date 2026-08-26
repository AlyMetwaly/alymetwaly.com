import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.JPG";
import { absoluteUrl } from "@/lib/site";
import { SpeakingSection } from "@/components/SpeakingSection";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "Speaking · Aly Metwaly" },
      {
        name: "description",
        content:
          "Keynotes, panels, and executive conversations on enterprise AI transformation, adoption at scale, and the future of work.",
      },
      { property: "og:title", content: "Speaking · Aly Metwaly" },
      {
        property: "og:description",
        content:
          "Keynotes and panels on enterprise AI transformation, adoption at scale, and the future of work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: absoluteUrl("/speaking") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Speaking · Aly Metwaly" },
      {
        name: "twitter:description",
        content:
          "Keynotes and panels on enterprise AI transformation, adoption at scale, and the future of work.",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/speaking") }],
  }),
  component: SpeakingPage,
});

function SpeakingPage() {
  return (
    <SiteLayout>
      <SpeakingSection />
    </SiteLayout>
  );
}
