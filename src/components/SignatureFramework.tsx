import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AITransformationValueChain } from "@/components/AITransformationValueChain";
import { SectionDivider } from "@/components/SectionDivider";
import { ValueChainDiagram } from "@/components/ValueChainDiagram";

export function SignatureFramework() {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="framework"
      className="section-anchor border-b border-border"
      aria-labelledby="framework-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="mb-12 sm:mb-16 lg:mb-20 max-w-3xl">
          <div className="section-eyebrow mb-4">03 · FRAMEWORK</div>
          <h2
            id="framework-heading"
            className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
          >
            From Strategy to Business Value
          </h2>
          <p className="mt-3 font-display text-2xl leading-[1.05] tracking-tight text-muted-foreground sm:text-3xl lg:text-4xl">
            AI Transformation Value Chain
          </p>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            The AI Transformation Value Chain is a high-level view of my AI Transformation
            Playbook.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            It captures how I approach AI transformation as a connected system, linking strategy,
            operating models, governance, adoption, measurement, and execution to deliver measurable
            business outcomes.
          </p>

          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            aria-expanded={expanded}
            aria-controls={panelId}
            className="mt-8 inline-flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {expanded ? "Hide framework" : "Show framework"}
            <ChevronDown
              className={`size-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>

        <div
          id={panelId}
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
          aria-hidden={!expanded}
        >
          <div className="overflow-hidden">
            <div className="border-t border-rule pt-16 lg:pt-20">
              <div className="mb-12 lg:mb-16 max-w-3xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  From intent to outcomes
                </p>
                <p className="font-display text-2xl lg:text-3xl tracking-tight leading-tight">
                  Six connected stages that turn AI ambition into measurable business value.
                </p>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                  Each stage answers a distinct question. Weak links in the chain limit what the
                  others can deliver.
                </p>
              </div>

              <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8">
                <AITransformationValueChain />

                <ValueChainDiagram />
              </div>
            </div>

            <SectionDivider className="mt-16 lg:mt-20" />

            <aside className="mt-12 lg:mt-16">
              <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                <div className="md:col-span-7 space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The AI Transformation Value Chain connects strategy, operating models,
                    governance, adoption, and measurement into a coherent transformation system
                    designed to deliver measurable and lasting business value.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Leadership, change management, enablement, and technology operate as
                    cross-cutting enablers across the full value chain. They should not appear as a
                    second or competing framework.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
