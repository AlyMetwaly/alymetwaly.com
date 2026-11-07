import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import type { ContactTopic } from "@/lib/contact";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { SiteLayout } from "@/components/layout/SiteLayout";

const DESCRIPTION = "Message Aly Metwaly on LinkedIn, or write an email.";

type ContactSearch = {
  topic?: ContactTopic;
};

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => {
    const topic = search.topic;
    if (topic === "advisory" || topic === "speaking") {
      return { topic };
    }
    return {};
  },
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
  const { topic } = Route.useSearch();

  return (
    <SiteLayout>
      <PageHero
        label="Contact"
        headline="Let's talk."
        description="Two ways to reach me. Choose the one that best fits your message."
        headingId="contact-page-heading"
      />
      <ContactSection topic={topic} />
    </SiteLayout>
  );
}
