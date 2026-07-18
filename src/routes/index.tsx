import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Truck, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMG, PRODUCTS } from "@/lib/mock-data";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  component: Home,
});

const SERVICES = [
  { name: "Balloon Bouquets", image: IMG.birthDecor, to: "/bouquets" },
  { name: "Organic Arches", image: IMG.blueTree, to: "/decorations" },
  { name: "Themed Setups", image: IMG.giraffe, to: "/themes" },
  { name: "Grand Openings", image: IMG.grad, to: "/decorations" },
  { name: "Centerpieces", image: IMG.hero, to: "/decorations" },
  { name: "Celebration Packages", image: IMG.birthDecor, to: "/occasions" },
];

const TESTIMONIALS = [
  {
    quote: "Lucy transformed my daughter's quinceañera into a dream. Every detail was breathtaking.",
    name: "Sofia R.",
    role: "Quinceañera, Miami",
  },
  {
    quote: "The balloon arch for our grand opening was stunning. Our clients kept asking who did it!",
    name: "Marcos T.",
    role: "Business owner",
  },
  {
    quote: "On-time, thoughtful, and absolutely gorgeous. Booking Lucy again for our next event.",
    name: "Emily K.",
    role: "Wedding planner",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-mint/40 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Miami's balloon studio
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
              Designing lasting <span className="text-primary">balloon</span> creations.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              From intimate bouquets to full-room installations, Lucy Surprises crafts balloon
              experiences that make every celebration unforgettable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/request-quote">
                  Request a quote <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/bouquets">Shop bouquets</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Same-week delivery</div>
              <div className="flex items-center gap-2"><Heart className="h-4 w-4 text-primary" /> 500+ happy clients</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-accent/40 via-primary/20 to-mint/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 shadow-2xl">
              <img src={IMG.hero} alt="Balloon arrangement" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[IMG.grad, IMG.birthDecor, IMG.giraffe].map((s, i) => (
                    <img key={i} src={s} className="h-9 w-9 rounded-full border-2 border-card object-cover" alt="" />
                  ))}
                </div>
                <div>
                  <div className="flex text-primary">{[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}</div>
                  <p className="text-xs font-semibold">Loved by 500+ clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">What we do</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl">Balloon magic, made to order.</h2>
          </div>
          <Link to="/decorations" className="text-sm font-semibold text-primary hover:underline">
            View all services →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {SERVICES.map((s, i) => (
            <Link
              key={s.name}
              to={s.to}
              className={`group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`${i === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-[4/5]"} w-full overflow-hidden bg-muted`}>
                <img src={s.image} alt={s.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5">
                <div className="flex items-center justify-between text-primary-foreground">
                  <h3 className="font-display text-xl sm:text-2xl">{s.name}</h3>
                  <ArrowRight className="h-5 w-5 opacity-0 transition group-hover:opacity-100" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* AMAZING BALLOONS + DELIVERY */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2.5rem] bg-cream/70 p-8 md:grid-cols-2 md:p-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Amazing balloons & delivery</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              We make ordering balloons easy.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Choose a ready-made bouquet or work with Lucy on a custom design. We deliver across
              Miami and handle setup so you can focus on the moment.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Custom color palettes", "Hand-tied bouquets", "Full setup & takedown", "Same-week rush available"].map((f) => (
                <div key={f} className="flex items-center gap-2 rounded-2xl border border-border/60 bg-card px-4 py-3 text-sm">
                  <Sparkles className="h-4 w-4 text-primary" /> {f}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={IMG.blueTree} alt="" className="aspect-[3/4] w-full rounded-3xl object-cover" />
            <img src={IMG.birthDecor} alt="" className="mt-8 aspect-[3/4] w-full rounded-3xl object-cover" />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <img src={IMG.lucy} alt="Lucy" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">The story behind the art</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Meet Lucy.</h2>
            <p className="mt-5 text-muted-foreground">
              Every creation starts with a story — a milestone, a memory, a dream. Lucy has spent
              years turning those stories into balloon art that lasts long after the party ends.
            </p>
            <p className="mt-4 text-muted-foreground">
              From baby showers to grand openings, her studio blends warmth, precision, and a
              designer's eye to make every celebration feel one-of-a-kind.
            </p>
            <Button asChild className="mt-6 rounded-full">
              <Link to="/request-quote">Work with Lucy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Best sellers</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl">Balloon bouquets ready to ship.</h2>
          </div>
          <Link to="/bouquets" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">
            Shop all →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.filter((p) => p.category === "Bouquets").slice(0, 4).map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Kind words</p>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl">Loved by celebrators.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
              <div className="mb-4 flex text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="font-display text-lg leading-snug">"{t.quote}"</p>
              <p className="mt-6 text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
