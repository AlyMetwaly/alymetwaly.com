import { createFileRoute } from "@tanstack/react-router";
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
    ],
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
