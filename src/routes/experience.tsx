import { createFileRoute } from "@tanstack/react-router";
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
    ],
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
