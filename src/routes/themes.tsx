import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { PRODUCTS } from "@/lib/mock-data";

export const Route = createFileRoute("/themes")({
  head: () => ({
    meta: [
      { title: "Themed Setups — Lucy Surprises" },
      { name: "description", content: "Safari, princess, winter wonderland and more — themed balloon setups for every party." },
      { property: "og:title", content: "Themed Setups — Lucy Surprises" },
      { property: "og:description", content: "Themed balloon decor to bring your celebration to life." },
    ],
  }),
  component: ThemesPage,
});

function ThemesPage() {
  const items = PRODUCTS.filter((p) => p.category === "Themes");
  return (
    <>
      <PageHero eyebrow="Themes" title="Bring your theme to life" description="Choose a curated theme or dream up your own — we'll bring it to life in balloons." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
      <QuoteCTA />
    </>
  );
}
