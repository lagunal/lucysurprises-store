import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/mock-data";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={p.image}
          alt={p.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
          {p.category}
        </span>
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-tight">{p.name}</h3>
          <span className="whitespace-nowrap font-display text-lg text-primary">${p.price}</span>
        </div>
        {p.description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
        )}
        <div className="flex gap-2 pt-1">
          <Button className="flex-1 rounded-full" size="sm">
            <Plus className="mr-1 h-4 w-4" /> Add to cart
          </Button>
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <Link to="/request-quote">Quote</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
