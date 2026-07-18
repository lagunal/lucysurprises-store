import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function QuoteCTA() {
  return (
    <section className="mx-auto my-24 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-mint/50 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">Let's make it magical</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Ready to design your next celebration?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
            Tell us the vibe, the date, and the vision. We'll craft a balloon experience your guests won't forget.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="rounded-full bg-background text-foreground hover:bg-cream">
              <Link to="/request-quote">Request a quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/gallery">See the gallery</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
