import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { LOGO_URL } from "@/lib/mock-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-cream/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <img src={LOGO_URL} alt="Lucy Surprises" className="h-12 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Designing lasting balloon creations for birthdays, weddings, and every reason to celebrate.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground transition hover:opacity-90">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground transition hover:opacity-90">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/bouquets" className="hover:text-primary">Bouquets</Link></li>
            <li><Link to="/decorations" className="hover:text-primary">Decorations</Link></li>
            <li><Link to="/themes" className="hover:text-primary">Themes</Link></li>
            <li><Link to="/occasions" className="hover:text-primary">Occasions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/request-quote" className="hover:text-primary">Request a quote</Link></li>
            <li><Link to="/cart" className="hover:text-primary">Cart</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" />(305) 555-1234</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" />hello@lucysurprises.com</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" />Miami, FL</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lucy Surprises. All rights reserved.
      </div>
    </footer>
  );
}
