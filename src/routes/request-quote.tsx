import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Lucy Surprises" },
      { name: "description", content: "Tell us about your event and we'll design a balloon experience your guests will love." },
      { property: "og:title", content: "Request a Quote — Lucy Surprises" },
      { property: "og:description", content: "Get a custom balloon quote for your event." },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <>
      <PageHero eyebrow="Get started" title="Request a quote" description="Tell us the vision. We'll follow up within 24 hours with a proposal." />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_320px]">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 rounded-3xl border border-border/60 bg-card p-8 shadow-sm"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="jane@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="(305) 555-1234" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Event date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="type">Event type</Label>
                <Input id="type" placeholder="Birthday, wedding, quinceañera…" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="msg">Tell us about your vision</Label>
                <Textarea id="msg" rows={5} placeholder="Colors, theme, venue, guest count…" />
              </div>
            </div>
            <Button size="lg" className="w-full rounded-full">
              Send request
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Submissions aren't wired up yet — this is a UI preview.
            </p>
          </form>

          <aside className="h-fit space-y-4 rounded-3xl bg-cream/60 p-8">
            <h2 className="font-display text-2xl">Get in touch</h2>
            <p className="text-sm text-muted-foreground">Prefer to talk? We'd love to hear about your event.</p>
            <div className="space-y-3 pt-2 text-sm">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> (305) 555-1234</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> hello@lucysurprises.com</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> Miami, FL</div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
