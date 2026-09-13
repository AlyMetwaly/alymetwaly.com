import aboutPhoto from "@/assets/about-journey.png";

const values = [
  {
    title: "Curiosity",
    body: "Understanding how complex systems work and how they can be redesigned for greater impact.",
  },
  {
    title: "Continuous Learning",
    body: "Growth comes from questioning assumptions, embracing change, and remaining open to new ways of thinking.",
  },
  {
    title: "Execution",
    body: "Ideas only matter when they become outcomes. Strategy, governance, adoption, and measurement exist to create business value.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-anchor border-b border-border" aria-label="About Aly">
      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-12 lg:pb-28 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <img
              src={aboutPhoto}
              alt="Aly Metwaly in a formal suit, smiling on a wooden dock beside the water."
              loading="lazy"
              className="w-full max-w-full aspect-[3/4] object-cover object-center"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/85 lg:col-span-7">
            <p className="text-muted-foreground">
              Curiosity about how complex systems work. How technology creates value. How
              organizations evolve. And how people turn ambitious ideas into meaningful outcomes.
            </p>
            <p className="text-muted-foreground">
              Early in my career, I believed the hardest problems were technical. Experience taught
              me something different.
            </p>
            <p className="text-muted-foreground">
              Working across global organizations, cross-functional teams, startups, and
              transformation programs showed me that technology rarely creates lasting change on its
              own. Real transformation happens when people align around a common purpose, make
              better decisions together, and create the conditions for ideas to become action.
            </p>
            <p>
              That realization continues to shape how I think about AI adoption, operating models,
              governance, and organizational change. Today, my work focuses on helping organizations
              translate technological potential into measurable business outcomes while supporting
              founders building the next generation of technology-driven companies.
            </p>
            <p className="text-muted-foreground">
              Continuous learning has also remained central to my journey. I believe growth comes
              from curiosity, embracing change, and having the courage to keep learning when the
              path is not yet clear.
            </p>

            <div className="grid gap-8 border-t border-rule pt-10 sm:grid-cols-3 sm:gap-6 lg:pt-12">
              {values.map((value) => (
                <div key={value.title}>
                  <h3 className="font-display text-xl tracking-tight text-foreground/90">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
