export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border/60 bg-cream/60">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        )}
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>
        )}
      </div>
    </section>
  );
}
