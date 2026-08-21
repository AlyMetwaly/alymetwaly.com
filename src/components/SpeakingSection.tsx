import vergeEpicenterPhoto from "@/assets/speaking-verge-epicenter.png";
import dashPhoto from "@/assets/speaking-dash.png";
import menaPanelPhoto from "@/assets/speaking-mena-panel.png";

const engagements = [
  {
    year: "2026",
    event: "Verge at Epicenter",
    format: "Opening keynote",
    title: "From Co-Pilots to Colleagues: Leading the Agentic Workforce",
    description:
      "Opening keynote on what it takes to lead an agentic workforce, grounded in operating models and field-tested adoption programs.",
    image: vergeEpicenterPhoto,
    alt: "Aly Metwaly delivering the opening keynote at Verge at Epicenter, on stage with green lighting and a headset microphone",
    objectPosition: "50% 42%",
  },
  {
    year: "2025",
    event: "DASH",
    format: "Keynote & workshop",
    title: "From Failure to Success: Design Thinking + AI in Innovation and Transformation",
    description:
      "Keynote and executive workshop on design thinking and AI for innovation and transformation, with technology students and entrepreneurs.",
    image: dashPhoto,
    alt: "Aly Metwaly speaking on stage at DASH with purple stage lighting and a handheld microphone",
    objectPosition: "42% 18%",
  },
  {
    year: "2025",
    event: "Sustainability MENA Hackathon",
    format: "Panel",
    title: "AI in Sustainability and the Future of Work",
    description:
      "Panel discussion on AI's role in sustainability and the future of work, alongside regional innovators and industry leaders.",
    image: menaPanelPhoto,
    alt: "Aly Metwaly on a panel at the Sustainability MENA Hackathon, seated with a microphone in a gray suit",
    objectPosition: "58% 28%",
  },
];

const formats = [
  { label: "Keynotes", detail: "Executive audiences on AI transformation at scale" },
  { label: "Panels", detail: "Industry and leadership forums on enterprise AI" },
  { label: "Roundtables", detail: "Closed-door sessions with transformation leaders" },
  { label: "Executive retreats", detail: "Strategy offsites and leadership immersions" },
  { label: "Leadership offsites", detail: "Working sessions on operating model design" },
];

const themes = [
  "Enterprise AI Transformation",
  "AI Adoption at Scale",
  "AI Operating Models",
  "Leadership in the AI Era",
  "Future of Work",
  "Innovation & Organizational Change",
];

export function SpeakingSection() {
  return (
    <section
      id="speaking"
      className="section-anchor border-b border-border bg-muted/30"
      aria-labelledby="speaking-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28">
        <div className="mb-12 grid gap-8 sm:mb-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="section-eyebrow mb-4">
              06 · SPEAKING
            </div>
            <h2
              id="speaking-heading"
              className="font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Keynotes &amp; executive conversations.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-lg text-muted-foreground leading-relaxed self-end">
            <p>
              Available for keynotes, panels, roundtables, executive retreats, and leadership
              offsites. I speak to leaders who need clarity on what actually works, not what vendors
              promise.
            </p>
            <p>
              Talks are grounded in field experience: measurable adoption programs, governance
              design, and operating models built inside one of the world&rsquo;s most complex
              R&amp;D organizations.
            </p>
          </div>
        </div>

        <div className="border-t border-rule pt-12 sm:pt-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Recent engagements
          </div>
          <ul className="space-y-px bg-rule border border-rule">
            {engagements.map((engagement) => (
              <li
                key={`${engagement.event}-${engagement.year}`}
                className="grid bg-background md:grid-cols-12 card-accent-hover"
              >
                <div className="relative md:col-span-5 lg:col-span-4 overflow-hidden border-b md:border-b-0 md:border-r border-rule">
                  <div className="aspect-[16/10] w-full">
                    <img
                      src={engagement.image}
                      alt={engagement.alt}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: engagement.objectPosition }}
                      loading="lazy"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-ink/[0.06]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="md:col-span-7 lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
                    <span className="font-mono text-xs tracking-[0.2em] text-accent">
                      {engagement.year}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 border rounded-full tag-accent">
                      {engagement.format}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
                    {engagement.event}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl leading-tight tracking-tight mb-3">
                    <span className="italic">{engagement.title}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base max-w-2xl">
                    {engagement.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 border-t border-rule pt-16 mt-16">
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Formats
            </div>
            <ul className="space-y-6">
              {formats.map((format) => (
                <li
                  key={format.label}
                  className="grid grid-cols-[auto_1fr_1.2fr] gap-x-4 gap-y-0 text-sm border-b border-rule pb-6 last:border-0 last:pb-0 items-start"
                >
                  <span className="format-marker mt-1.5" aria-hidden="true">
                    ○
                  </span>
                  <span className="font-medium text-foreground">{format.label}</span>
                  <span className="text-muted-foreground">{format.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Speaking themes
            </div>
            <ul className="space-y-4">
              {themes.map((theme) => (
                <li key={theme} className="flex items-start gap-3 text-sm leading-snug">
                  <span className="format-marker mt-1.5" aria-hidden="true">
                    •
                  </span>
                  <span className="text-foreground">{theme}</span>
                </li>
              ))}
            </ul>
            <aside className="mt-8 pt-6 border-t border-rule">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
                Need something different?
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sessions can be customized based on your audience, industry, and desired business
                outcomes.
              </p>
            </aside>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeLJjioBg1yv7GBnC1vEZkpR0G0u4VYfWCWj7-bo-ul-UaxuQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-10 px-5 py-3 rounded-full text-sm font-medium border border-border hover:bg-background btn-accent-outline"
            >
              Request a Speaking Engagement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
