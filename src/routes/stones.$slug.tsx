import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { stones } from "@/lib/content";
import { ContactCta } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/stones/$slug")({
  loader: ({ params }) => {
    const stone = stones.find((s) => s.slug === params.slug);
    if (!stone) throw notFound();
    return { stone };
  },
  head: ({ loaderData }) =>
    loaderData ? seo(loaderData.stone.name, loaderData.stone.summary) : { meta: [{ title: "Stone not found" }, { name: "robots", content: "noindex" }] },
  notFoundComponent: () => (
    <div className="mx-auto max-w-7xl px-5 py-32 text-center">
      <h1 className="text-4xl">Stone not found</h1>
      <Link to="/stones" className="mt-6 inline-block underline">Back to all stones</Link>
    </div>
  ),
  component: StoneDetail,
});

function StoneDetail() {
  const { stone } = Route.useLoaderData();
  const others = stones.filter((s) => s.slug !== stone.slug).slice(0, 3);
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1.2fr_1fr] lg:px-8 lg:py-20">
        <img src={stone.image} alt={stone.name} className="aspect-[4/3] w-full object-cover" />
        <div className="rise-in lg:pt-8">
          <Link to="/stones" className="eyebrow text-earth">← Natural Stone</Link>
          <h1 className="mt-5 text-5xl leading-[1.02] md:text-6xl">{stone.name}</h1>
          <p className="mt-6 text-muted-foreground">{stone.summary}</p>
          <p className="eyebrow mt-10 text-muted-foreground">Typical applications</p>
          <ul className="mt-3 divide-y border-y">
            {stone.uses.map((u) => <li key={u} className="py-3">{u}</li>)}
          </ul>
          <Link to="/contact" className="mt-10 inline-block bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90">Ask about this stone</Link>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <p className="eyebrow text-earth">More materials</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {others.map((s) => (
            <Link key={s.slug} to="/stones/$slug" params={{ slug: s.slug }} className="group">
              <div className="overflow-hidden"><img src={s.image} alt={s.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <p className="mt-3 font-display text-2xl">{s.name}</p>
            </Link>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
