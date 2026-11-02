import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { videos } from "@/lib/content";
import { ContactCta } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/videos")({
  head: () => seo("Videos", "Videos of natural stone design and installation by Pokhara Stone & Suppliers."),
  component: Videos,
});

function Videos() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-14 lg:px-8 lg:pt-20">
        <p className="eyebrow text-earth">Videos</p>
        <h1 className="mt-5 text-5xl md:text-6xl">See our work in motion</h1>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {videos.map((v) => (
            <div key={v.title}>
              {v.url ? (
                <iframe src={v.url} title={v.title} className="aspect-video w-full" allowFullScreen />
              ) : (
                <div className="relative aspect-video overflow-hidden">
                  <img src={v.poster} alt="" loading="lazy" className="h-full w-full object-cover grayscale-[40%]" />
                  <div className="absolute inset-0 flex items-center justify-center bg-charcoal/40">
                    <span className="flex items-center gap-2 bg-ivory/90 px-4 py-2 text-xs text-charcoal"><Play className="h-3 w-3" /> Video coming soon</span>
                  </div>
                </div>
              )}
              <h2 className="mt-4 text-3xl">{v.title}</h2>
            </div>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
