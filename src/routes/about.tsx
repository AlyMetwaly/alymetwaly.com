import { createFileRoute } from "@tanstack/react-router";
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
    ],
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
