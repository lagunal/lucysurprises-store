import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartSheet } from "./CartSheet";
import { LOGO_URL } from "@/lib/mock-data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/bouquets", label: "Bouquets" },
  { to: "/decorations", label: "Decorations" },
  { to: "/themes", label: "Themes" },
  { to: "/occasions", label: "Occasions" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Lucy Surprises" className="h-11 w-auto" />
          <span className="sr-only">Lucy Surprises</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-cream hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+13055551234"
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-primary md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            (305) 555-1234
          </a>
          <Button asChild className="hidden rounded-full md:inline-flex">
            <Link to="/request-quote">Request quote</Link>
          </Button>
          <CartSheet />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] sm:w-96">
              <div className="mb-6 flex items-center justify-between">
                <img src={LOGO_URL} alt="Lucy Surprises" className="h-10 w-auto" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center rounded-full hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {NAV.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base font-semibold hover:bg-cream"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 space-y-3">
                <Button asChild className="w-full rounded-full">
                  <Link to="/request-quote" onClick={() => setOpen(false)}>
                    Request quote
                  </Link>
                </Button>
                <a
                  href="tel:+13055551234"
                  className="flex items-center justify-center gap-2 rounded-full border border-border py-2 text-sm font-semibold"
                >
                  <Phone className="h-4 w-4" />
                  (305) 555-1234
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
