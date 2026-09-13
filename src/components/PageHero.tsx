type PageHeroProps = {
  label: string;
  headline: string;
  description: string;
  headingId?: string;
};

export function PageHero({
  label,
  headline,
  description,
  headingId = "page-heading",
}: PageHeroProps) {
  return (
    <section className="border-b border-border" aria-labelledby={headingId}>
      <div className="mx-auto max-w-[1280px] px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12 lg:px-12 lg:pb-14 lg:pt-16">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{label}</p>
          <h1
            id={headingId}
            className="mt-3 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.02em]"
          >
            {headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg lg:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
