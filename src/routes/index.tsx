import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.JPG";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProofSection } from "@/components/ProofSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aly Metwaly · Enterprise AI Transformation Leader" },
      {
        name: "description",
        content:
          "Aly Metwaly designs enterprise AI operating models, governance, and adoption programs that scale. Transformation Manager at Nokia. AI transformation advisor, speaker, and author of the AI Transformation Value Chain.",
      },
      {
        name: "keywords",
        content:
          "enterprise AI transformation, AI operating model, AI adoption, AI governance, AI transformation leader, AI change management, enterprise AI strategy, AI transformation advisor",
      },
      { name: "author", content: "Aly Metwaly" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Aly Metwaly · Enterprise AI Transformation Leader" },
      {
        property: "og:description",
        content:
          "Enterprise AI operating models, governance, and adoption at scale. Frameworks and execution from the field. Transformation Manager at Nokia.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: portraitAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aly Metwaly · Enterprise AI Transformation Leader" },
      {
        name: "twitter:description",
        content:
          "Designing AI operating models that turn enterprise AI strategy into measurable adoption and business performance.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section
        id="top"
        className="section-anchor border-b border-border"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto grid max-w-[1280px] items-end gap-8 px-4 pb-16 pt-12 sm:gap-10 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-8">
            <h1
              id="hero-heading"
              className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em]"
            >
              Enterprise AI,
              <br />
              <em className="italic text-muted-foreground/90">operationalized</em> at scale.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg lg:text-xl">
              I design enterprise AI operating models: governance, adoption, measurement, and change
              management that move large organizations from AI experimentation to repeatable execution
              and measurable business impact.
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="relative">
              <img
                src={portraitAsset}
                alt="Aly Metwaly, Enterprise AI Transformation Leader at Nokia"
                className="w-full aspect-[4/5] object-cover"
                style={{ background: "var(--muted)" }}
              />
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <div>Based</div>
                <div className="text-foreground">Espoo, FI</div>
                <div>Focus</div>
                <div className="text-foreground">AI Operating Models</div>
                <div>Scale</div>
                <div className="text-foreground">74k+ employees</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProofSection />
    </SiteLayout>
  );
}
