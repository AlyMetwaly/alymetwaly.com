import { createFileRoute } from "@tanstack/react-router";
import { MyPerspective } from "@/components/MyPerspective";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/perspective")({
  head: () => ({
    meta: [
      { title: "Perspective · Aly Metwaly" },
      {
        name: "description",
        content:
          "How Aly Metwaly thinks about enterprise AI transformation: adoption, operating models, governance, and measurable business value.",
      },
    ],
  }),
  component: PerspectivePage,
});

function PerspectivePage() {
  return (
    <SiteLayout>
      <MyPerspective />
    </SiteLayout>
  );
}
