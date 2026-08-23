import { createFileRoute } from "@tanstack/react-router";
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
    ],
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
