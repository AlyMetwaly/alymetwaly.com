export function AboutSection() {
  return (
    <section id="about" className="border-b border-border" aria-labelledby="about-heading">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">12 — About</div>
          <h2 id="about-heading" className="font-display text-4xl lg:text-5xl leading-[1.02] tracking-tight">
            From silicon to operating models.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            I began in deep-tech engineering and semiconductor R&amp;D — building 5G/6G silicon programs,
            leading feasibility-to-delivery for multi-million-euro roadmaps, and earning credibility with
            the engineers who do the work.
          </p>
          <p className="text-muted-foreground">
            Over time, the problem that interested me most shifted. It was not building technology —
            it was helping organizations adopt and scale it. I moved into R&amp;D transformation, led a
            rotation in Nokia&rsquo;s Chief People Office orchestrating a 74,000-employee performance program,
            and now lead enterprise AI transformation company-wide.
          </p>
          <p className="text-muted-foreground">
            Today I design and operationalize the systems that turn AI from experimentation into measurable
            business performance: operating models, governance, adoption programs, measurement, and the
            change management that makes it stick across decentralized business segments.
          </p>
          <p>
            My goal is straightforward: help large organizations stop treating AI as a technology purchase
            and start treating it as an execution discipline — with the operating model to match.
          </p>
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-rule text-sm">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Based</div>
              <div>Espoo, Finland</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Role</div>
              <div>Transformation Manager · Nokia</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Languages</div>
              <div>EN · AR · FI</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Advisor</div>
              <div>FiBAN Angel</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
