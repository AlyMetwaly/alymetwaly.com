import { createFileRoute } from "@tanstack/react-router";
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
    ],
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
