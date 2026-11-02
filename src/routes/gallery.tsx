import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { gallery, galleryCategories, type GalleryCategory } from "@/lib/content";
import { ContactCta } from "@/components/site/Blocks";
import { Lightbox } from "@/components/site/Lightbox";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => seo("Gallery", "Photographs of natural stone facades, walls, parking areas and gardens by Pokhara Stone & Suppliers."),
  component: Gallery,
});

function Gallery() {
  const [cat, setCat] = useState<GalleryCategory>("All");
  const [lb, setLb] = useState<number | null>(null);
  const shown = gallery.filter((g) => cat === "All" || g.category === cat);
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-14 lg:px-8 lg:pt-20">
        <p className="eyebrow text-earth">Gallery</p>
        <h1 className="mt-5 text-5xl md:text-6xl">Explore our gallery</h1>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {galleryCategories.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`border-b pb-1 ${cat === c ? "border-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {shown.map((g, i) => (
            <button key={g.src + i} onClick={() => setLb(i)} className="group block w-full overflow-hidden">
              <img src={g.src} alt={g.alt} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </section>
      <Lightbox items={shown} index={lb} onClose={() => setLb(null)} onIndex={setLb} />
      <ContactCta />
    </>
  );
}
