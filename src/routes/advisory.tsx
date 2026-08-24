import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.JPG";
import { absoluteUrl } from "@/lib/site";
import { AdvisorySection } from "@/components/AdvisorySection";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/advisory")({
  head: () => ({
    meta: [
      { title: "Advisory · Aly Metwaly" },
      {
        name: "description",
        content:
          "Strategic advisory on enterprise AI transformation, operating models, governance, adoption, and organizational change.",
      },
      { property: "og:title", content: "Advisory · Aly Metwaly" },
      {
        property: "og:description",
        content:
          "Strategic advisory on enterprise AI transformation, operating models, governance, adoption, and organizational change.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: absoluteUrl("/advisory") },
      { property: "og:image", content: absoluteUrl(portraitAsset) },
      { property: "og:image:alt", content: "Aly Metwaly, Enterprise AI Transformation Leader" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Advisory · Aly Metwaly" },
      {
        name: "twitter:description",
        content:
          "Strategic advisory on enterprise AI transformation, operating models, governance, adoption, and organizational change.",
      },
      { name: "twitter:image", content: absoluteUrl(portraitAsset) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/advisory") }],
  }),
  component: AdvisoryPage,
});

function AdvisoryPage() {
  return (
    <SiteLayout>
      <AdvisorySection />
    </SiteLayout>
  );
}
