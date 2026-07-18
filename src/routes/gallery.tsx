import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { IMG } from "@/lib/mock-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Lucy Surprises" },
      { name: "description", content: "A gallery of balloon decorations, arches and bouquets we've created for our clients." },
      { property: "og:title", content: "Gallery — Lucy Surprises" },
      { property: "og:description", content: "See our balloon creations in action." },
      { property: "og:image", content: IMG.hero },
    ],
  }),
  component: GalleryPage,
});

const GALLERY = [
  { src: IMG.hero, span: "row-span-2" },
  { src: IMG.blueTree, span: "" },
  { src: IMG.birthDecor, span: "" },
  { src: IMG.giraffe, span: "row-span-2" },
  { src: IMG.grad, span: "" },
  { src: IMG.lucy, span: "" },
  { src: IMG.birthDecor, span: "" },
  { src: IMG.blueTree, span: "" },
  { src: IMG.hero, span: "" },
];

function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Every celebration, captured" description="A peek at recent balloon designs — from intimate bouquets to full-room installs." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {GALLERY.map((g, i) => (
            <div key={i} className={`overflow-hidden rounded-3xl bg-muted ${g.span}`}>
              <img src={g.src} alt="" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>
      <QuoteCTA />
    </>
  );
}
