import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.JPG";
import { absoluteUrl } from "@/lib/site";
import { ContactSection } from "@/components/ContactSection";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Aly Metwaly" },
      {
        name: "description",
        content:
          "Contact Aly Metwaly for advisory sessions, speaking engagements, media appearances, and general inquiries.",
      },
      { property: "og:title", content: "Contact · Aly Metwaly" },
      {
        property: "og:description",
        content:
          "Contact Aly Metwaly for advisory sessions, speaking engagements, media appearances, and general inquiries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: absoluteUrl("/contact") },
      { property: "og:image", content: absoluteUrl(portraitAsset) },
      { property: "og:image:alt", content: "Aly Metwaly, Enterprise AI Transformation Leader" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact · Aly Metwaly" },
      {
        name: "twitter:description",
        content:
          "Contact Aly Metwaly for advisory sessions, speaking engagements, media appearances, and general inquiries.",
      },
      { name: "twitter:image", content: absoluteUrl(portraitAsset) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <ContactSection />
    </SiteLayout>
  );
}
