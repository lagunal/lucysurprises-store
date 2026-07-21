import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShoppingBag, X, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { CART_ITEMS } from "@/lib/mock-data";

export function CartSheet() {
  const [items] = useState(CART_ITEMS);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open cart"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-primary hover:text-primary-foreground"
        >
          <ShoppingBag className="h-[18px] w-[18px]" />
          {count > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground shadow">
              {count}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b p-6">
          <SheetTitle className="font-display text-2xl">Your cart</SheetTitle>
          <SheetDescription>
            {count} {count === 1 ? "item" : "items"} — ready when you are.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
              <ShoppingBag className="mb-3 h-10 w-10 opacity-40" />
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((it) => (
                <li key={it.id} className="flex gap-4">
                  <div className="h-20 w-20 flex-none overflow-hidden rounded-xl bg-muted">
                    <img src={it.image} alt={it.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="line-clamp-2 text-sm font-semibold">{it.name}</p>
                      <button aria-label="Remove" className="text-muted-foreground hover:text-foreground">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">${it.price.toFixed(2)}</p>
                    <div className="mt-2 inline-flex items-center rounded-full border border-border">
                      <button className="grid h-7 w-7 place-items-center text-muted-foreground hover:text-foreground">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm">{it.qty}</span>
                      <button className="grid h-7 w-7 place-items-center text-muted-foreground hover:text-foreground">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <SheetFooter className="border-t bg-cream/60 p-6">
          <div className="w-full space-y-3">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Subtotal</span>
              <span className="text-base font-semibold text-foreground">${subtotal.toFixed(2)}</span>
            </div>
            <Separator />
            <Button className="w-full" size="lg">
              <a href="https://lucysurprises.com/checkout/">Proceed to checkout</a>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/cart">View full cart</Link>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
