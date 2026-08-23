import { createFileRoute } from "@tanstack/react-router";
import { SignatureFramework } from "@/components/SignatureFramework";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/framework")({
  head: () => ({
    meta: [
      { title: "Framework · Aly Metwaly" },
      {
        name: "description",
        content:
          "The AI Transformation Value Chain: a connected system linking strategy, operating models, governance, adoption, and measurement.",
      },
    ],
  }),
  component: FrameworkPage,
});

function FrameworkPage() {
  return (
    <SiteLayout>
      <SignatureFramework />
    </SiteLayout>
  );
}
