import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.JPG";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProofSection } from "@/components/ProofSection";
import { absoluteUrl, SITE_URL } from "@/lib/site";
import { SAME_AS } from "@/lib/social";

// Person schema for the homepage only. TanStack renders a "script:ld+json"
// meta entry as <script type="application/ld+json"> in <head>, JSON-stringified
// and HTML-escaped.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aly Metwaly",
  url: SITE_URL,
  jobTitle: "AI Transformation Manager",
  worksFor: {
    "@type": "Organization",
    name: "Nokia",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Espoo",
    addressCountry: "FI",
  },
  image: absoluteUrl(portraitAsset),
  // Shares one source with the footer links so the rendered profiles and the
  // identity signal cannot drift apart.
  sameAs: [...SAME_AS],
};

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
          "Enterprise AI operating models, governance, and adoption at scale. Transformation Manager at Nokia.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: absoluteUrl("/") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aly Metwaly · Enterprise AI Transformation Leader" },
      {
        name: "twitter:description",
        content:
          "Enterprise AI operating models, governance, and adoption at scale. Transformation Manager at Nokia.",
      },
      { "script:ld+json": personSchema },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
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
              management that move large organizations from AI experimentation to repeatable
              execution and measurable business impact.
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
              {/* Two rows by design. The grid is bottom-aligned against the
                  portrait, so the spacing is tuned for two: gap-y and the top
                  margin were opened up when the third row came out, otherwise
                  the block reads cramped and sits too close to the image. */}
              <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <div>Based</div>
                <div className="text-foreground">Espoo, FI</div>
                <div>Focus</div>
                <div className="text-foreground">AI Operating Models</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProofSection />
    </SiteLayout>
  );
}
