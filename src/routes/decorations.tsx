import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { getWooProducts } from "@/lib/woocommerce";

export const Route = createFileRoute("/decorations")({
  loader: async () => await getWooProducts({ data: "Decorations" }),
  head: () => ({
    meta: [
      { title: "Balloon Decorations — Lucy Surprises" },
      { name: "description", content: "Custom balloon arches, garlands, columns and full-room installations for every event." },
      { property: "og:title", content: "Balloon Decorations — Lucy Surprises" },
      { property: "og:description", content: "Arches, walls, and installations for unforgettable celebrations." },
    ],
  }),
  component: DecorationsPage,
});

function DecorationsPage() {
  const items = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow="Decorations" title="Statement installations" description="Arches, walls and columns designed around your event, delivered and set up by our team." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
      <QuoteCTA />
    </>
  );
}
