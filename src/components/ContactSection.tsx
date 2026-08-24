export function ContactSection() {
  return (
    <section id="contact" className="section-anchor" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="mb-12 grid gap-8 sm:mb-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2
              id="contact-heading"
              className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Building AI transformation that lasts?
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-6 lg:col-start-7 lg:self-end">
            I work with leaders, transformation teams, founders, investors, and event organizers
            navigating AI adoption, operating models, governance, and organizational change.
          </p>
        </div>
        <div className="divide-y divide-rule border-t border-b border-rule">
          <article className="grid gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-12">
            <div className="lg:col-span-4">
              <h3 className="font-display text-2xl tracking-tight sm:text-3xl">Advisory</h3>
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
              <h3 className="font-display text-2xl tracking-tight sm:text-3xl">Speaking</h3>
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
              <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                Media, Podcasts &amp; Interviews
              </h3>
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
              <h3 className="font-display text-2xl tracking-tight sm:text-3xl">Everything Else</h3>
            </div>
            <div className="text-muted-foreground leading-relaxed lg:col-span-5">
              <p>
                Partnerships, recruiting opportunities, startup discussions, investor conversations,
                community initiatives, collaborations, and general inquiries.
              </p>
              <p>
                Not sure where your request belongs? Submit it here and I will make sure it reaches
                the appropriate path.
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
  );
}
