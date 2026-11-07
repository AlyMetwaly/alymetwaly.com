type PageHeroProps = {
  label?: string;
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
          {label ? <p className="section-eyebrow">{label}</p> : null}
          <h1
            id={headingId}
            className={`font-display text-3xl leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl${label ? " mt-3" : ""}`}
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
