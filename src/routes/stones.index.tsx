import { createFileRoute, Link } from "@tanstack/react-router";
import { img, stones } from "@/lib/content";
import { PageHero, ContactCta } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/stones/")({
  head: () => seo("Natural Stone", "Wall stone, roof stone, cladding, parking and garden stone from Pokhara Stone & Suppliers."),
  component: Stones,
});

function Stones() {
  return (
    <>
      <PageHero label="Natural Stone" title="Materials shaped by nature" image={img.texture}
        text="A selection of natural stone for walls, roofs, facades, pathways and gardens. Ask us about current availability for your project." />
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="divide-y border-y">
          {stones.map((s, i) => (
            <Link key={s.slug} to="/stones/$slug" params={{ slug: s.slug }} className="group grid gap-6 py-8 md:grid-cols-[80px_1fr_1.2fr_auto] md:items-center">
              <span className="text-sm text-earth">0{i + 1}</span>
              <div>
                <h2 className="text-3xl md:text-4xl">{s.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
              </div>
              <div className="overflow-hidden">
                <img src={s.image} alt={s.name} loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
