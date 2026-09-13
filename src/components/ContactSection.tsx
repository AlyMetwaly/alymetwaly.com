export function ContactSection() {
  return (
    <>
      <section className="border-b border-border" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-[1280px] px-4 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-12 lg:px-12 lg:pb-16 lg:pt-16">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Let's Talk</p>
            <h1
              id="contact-heading"
              className="mt-3 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.02em]"
            >
              AI Transformation Advisory &amp; Speaking
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg lg:text-xl">
              I help organizations scale AI adoption, operating models, governance, and
              organizational change.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-anchor" aria-label="Ways to get in touch">
        <div className="mx-auto max-w-[1280px] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-12 lg:pb-28">
          <div className="divide-y divide-rule border-b border-rule">
            <article className="grid gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-12">
              <div className="lg:col-span-4">
                <h2 className="font-display text-2xl tracking-tight sm:text-3xl">Advisory</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed lg:col-span-5">
                Strategic guidance on AI transformation, operating models, governance, adoption, and
                measurement.
              </p>
              <div className="lg:col-span-3 lg:text-right">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScoWwy5ZyLSM6ntFTSrWJe3hVbbKofS3B1aLo969tW88F2OKQ/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-muted btn-accent-outline"
                >
                  Request an Advisory Session
                </a>
              </div>
            </article>
            <article className="grid gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-12">
              <div className="lg:col-span-4">
                <h2 className="font-display text-2xl tracking-tight sm:text-3xl">Speaking</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed lg:col-span-5">
                Keynotes, workshops, executive briefings, panels, and leadership events.
              </p>
              <div className="lg:col-span-3 lg:text-right">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeLJjioBg1yv7GBnC1vEZkpR0G0u4VYfWCWj7-bo-ul-UaxuQ/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-muted btn-accent-outline"
                >
                  Request a Speaking Engagement
                </a>
              </div>
            </article>
            <article className="grid gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-12">
              <div className="lg:col-span-4">
                <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                  Media, Podcasts &amp; Interviews
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed lg:col-span-5">
                Podcast hosts, journalists, event moderators, and media producers seeking interviews
                on AI transformation, leadership, innovation, and the future of work.
              </p>
              <div className="lg:col-span-3 lg:text-right">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfPLF8nWsxVaS_xOfFL8iOAMXM-lD-BLcYVbgNHyZH8WB3aig/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-muted btn-accent-outline"
                >
                  Request a Media Appearance
                </a>
              </div>
            </article>
            <article className="grid gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-12">
              <div className="lg:col-span-4">
                <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                  Everything Else
                </h2>
              </div>
              <div className="text-muted-foreground leading-relaxed lg:col-span-5">
                <p>
                  Partnerships, recruiting opportunities, startup discussions, investor
                  conversations, community initiatives, collaborations, and general inquiries.
                </p>
                <p>
                  Not sure where your request belongs? Submit it here and I will make sure it
                  reaches the appropriate path.
                </p>
              </div>
              <div className="lg:col-span-3 lg:text-right">
                <a
                  href="https://forms.gle/j4zVmnUnTxAUxh4UA"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-muted btn-accent-outline"
                >
                  Get in Touch
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
