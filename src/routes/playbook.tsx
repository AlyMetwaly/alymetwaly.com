import { createFileRoute } from "@tanstack/react-router";
import { MyPerspective } from "@/components/MyPerspective";
import { SignatureFramework } from "@/components/SignatureFramework";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/playbook")({
  head: () => ({
    meta: [
      { title: "AI Transformation Playbook" },
      {
        name: "description",
        content:
          "How Aly Metwaly thinks about enterprise AI transformation and the AI Transformation Value Chain—a connected system linking strategy, operating models, governance, adoption, and measurement.",
      },
    ],
  }),
  component: PlaybookPage,
});

function PlaybookPage() {
  return (
    <SiteLayout>
      <MyPerspective />
      <SignatureFramework />
    </SiteLayout>
  );
}
