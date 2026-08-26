import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.JPG";
import { absoluteUrl } from "@/lib/site";
import { AboutSection } from "@/components/AboutSection";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Aly Metwaly" },
      {
        name: "description",
        content:
          "From silicon to operating models: Aly Metwaly's journey across engineering, enterprise transformation, and AI leadership.",
      },
      { property: "og:title", content: "About · Aly Metwaly" },
      {
        property: "og:description",
        content:
          "From silicon to operating models: engineering, enterprise transformation, and AI leadership.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: absoluteUrl("/about") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About · Aly Metwaly" },
      {
        name: "twitter:description",
        content:
          "From silicon to operating models: engineering, enterprise transformation, and AI leadership.",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <AboutSection />
    </SiteLayout>
  );
}
