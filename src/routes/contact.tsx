import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { SiteLayout } from "@/components/layout/SiteLayout";

const DESCRIPTION = "Message Aly Metwaly on LinkedIn, or write an email.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Aly Metwaly" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Contact · Aly Metwaly" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: absoluteUrl("/contact") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact · Aly Metwaly" },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        label="Contact"
        headline="Let's talk."
        description="Two ways to reach me. Pick the one that suits your message."
        headingId="contact-page-heading"
      />
      <ContactSection />
    </SiteLayout>
  );
}
