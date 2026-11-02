import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { img, projects } from "@/lib/content";
import { PageHero, ContactCta } from "@/components/site/Blocks";
import { Lightbox } from "@/components/site/Lightbox";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () => seo("Projects", "Homes, hotels, boundary walls, parking areas and gardens finished with natural stone by Pokhara Stone & Suppliers."),
  component: Projects,
});

function Projects() {
  const [lb, setLb] = useState<number | null>(null);
  const items = projects.map((p) => ({ src: p.image, alt: p.title }));
  return (
    <>
      <PageHero label="Projects" title="Stone in its finest form" image={img.boundary}
        text="Natural stone applications across homes, commercial buildings and outdoor spaces." />
      <section className="mx-auto grid max-w-7xl gap-x-5 gap-y-12 px-5 pb-24 md:grid-cols-2 lg:px-8">
        {projects.map((p, i) => (
          <button key={p.title} onClick={() => setLb(i)} className={`group text-left ${i % 3 === 0 ? "md:col-span-2" : ""}`}>
            <div className="overflow-hidden">
              <img src={p.image} alt={p.title} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i % 3 === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}`} />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4 border-b pb-4">
              <h2 className="text-3xl">{p.title}</h2>
              <span className="eyebrow shrink-0 text-muted-foreground">{p.category}</span>
            </div>
          </button>
        ))}
      </section>
      <Lightbox items={items} index={lb} onClose={() => setLb(null)} onIndex={setLb} />
      <ContactCta />
    </>
  );
}
