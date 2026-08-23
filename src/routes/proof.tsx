import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProofSection } from "@/components/ProofSection";

export const Route = createFileRoute("/proof")({
  head: () => ({
    meta: [
      { title: "Proof · Aly Metwaly" },
      {
        name: "description",
        content:
          "Measured outcomes from enterprise AI transformation: adoption growth, capacity unlocked, and global program delivery at scale.",
      },
    ],
  }),
  component: ProofPage,
});

function ProofPage() {
  return (
    <SiteLayout>
      <ProofSection />
    </SiteLayout>
  );
}
