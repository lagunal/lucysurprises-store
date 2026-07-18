import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { PRODUCTS } from "@/lib/mock-data";

export const Route = createFileRoute("/bouquets")({
  head: () => ({
    meta: [
      { title: "Balloon Bouquets — Lucy Surprises" },
      { name: "description", content: "Ready-made balloon bouquets for birthdays, graduations, baby showers and more." },
      { property: "og:title", content: "Balloon Bouquets — Lucy Surprises" },
      { property: "og:description", content: "Beautiful hand-tied balloon bouquets, delivered." },
    ],
  }),
  component: BouquetsPage,
});

function BouquetsPage() {
  const items = PRODUCTS.filter((p) => p.category === "Bouquets");
  return (
    <>
      <PageHero eyebrow="Shop" title="Balloon Bouquets" description="Hand-tied bouquets ready to make someone's day. Choose a style — we'll deliver the joy." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
      <QuoteCTA />
    </>
  );
}
