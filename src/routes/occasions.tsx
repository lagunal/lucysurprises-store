import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { getWooProducts } from "@/lib/woocommerce";

export const Route = createFileRoute("/occasions")({
  loader: async () => await getWooProducts({ data: "Occasions" }),
  head: () => ({
    meta: [
      { title: "Occasions — Lucy Surprises" },
      { name: "description", content: "Complete balloon packages for quinceañeras, baby showers, graduations and weddings." },
      { property: "og:title", content: "Occasions — Lucy Surprises" },
      { property: "og:description", content: "All-in-one packages for every milestone." },
    ],
  }),
  component: OccasionsPage,
});

function OccasionsPage() {
  const items = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow="Occasions" title="Every milestone, celebrated" description="Turn-key balloon packages designed for the moments that matter most." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
      <QuoteCTA />
    </>
  );
}
