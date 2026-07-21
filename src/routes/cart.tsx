import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { CART_ITEMS } from "@/lib/mock-data";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your cart — Lucy Surprises" },
      { name: "description", content: "Review your selected balloon bouquets and decorations." },
      { property: "og:title", content: "Your cart — Lucy Surprises" },
      { property: "og:description", content: "Review your selection." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const [items] = useState(CART_ITEMS);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const empty = items.length === 0;

  return (
    <>
      <PageHero eyebrow="Cart" title="Your selection" description="Review your items — checkout is coming soon." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {empty ? (
          <div className="mx-auto max-w-md rounded-3xl border border-border/60 bg-card p-12 text-center">
            <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 font-display text-2xl">Your cart is empty</h2>
            <p className="mt-2 text-sm text-muted-foreground">Explore our bouquets and decorations.</p>
            <Button asChild className="mt-6 rounded-full">
              <Link to="/bouquets">Browse bouquets</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            <ul className="space-y-4">
              {items.map((it) => (
                <li
                  key={it.id}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-card p-4 sm:flex-row sm:items-center sm:p-5"
                >
                  <div className="h-28 w-full flex-none overflow-hidden rounded-2xl bg-muted sm:h-24 sm:w-24">
                    <img src={it.image} alt={it.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg">{it.name}</h3>
                    <p className="text-sm text-muted-foreground">${it.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:justify-end">
                    <div className="inline-flex items-center rounded-full border border-border">
                      <button className="grid h-9 w-9 place-items-center text-muted-foreground hover:text-foreground"><Minus className="h-4 w-4" /></button>
                      <span className="w-8 text-center text-sm font-semibold">{it.qty}</span>
                      <button className="grid h-9 w-9 place-items-center text-muted-foreground hover:text-foreground"><Plus className="h-4 w-4" /></button>
                    </div>
                    <div className="w-20 text-right font-display text-lg">${(it.price * it.qty).toFixed(2)}</div>
                    <button aria-label="Remove" className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="h-fit rounded-3xl border border-border/60 bg-cream/60 p-6">
              <h2 className="font-display text-2xl">Order summary</h2>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd className="font-semibold">${subtotal.toFixed(2)}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Delivery</dt><dd className="text-muted-foreground">Calculated at checkout</dd></div>
                <div className="my-3 border-t border-border/60" />
                <div className="flex justify-between text-base"><dt className="font-semibold">Estimated total</dt><dd className="font-display text-xl text-primary">${subtotal.toFixed(2)}</dd></div>
              </dl>
              <Button asChild size="lg" className="mt-6 w-full rounded-full">
                <a href="https://lucysurprises.com/checkout/">Proceed to checkout</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="mt-3 w-full rounded-full">
                <Link to="/bouquets">Continue shopping</Link>
              </Button>
            </aside>
          </div>
        )}
      </section>
    </>
  );
}
