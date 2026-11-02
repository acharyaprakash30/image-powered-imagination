import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { img, stones, projects, gallery, videos, galleryCategories, type GalleryCategory } from "@/lib/content";
import { SectionHead, ContactCta, TextLink } from "@/components/site/Blocks";
import { Lightbox } from "@/components/site/Lightbox";
import { useLang } from "@/components/site/i18n";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Natural Stone in Pokhara, Nepal", "Natural wall, roof, cladding, parking and garden stone supplied and installed by Pokhara Stone & Suppliers."),
  component: Home,
});

const applications = [
  { title: "Exterior Facades", text: "Natural stone finishes that bring depth and distinctive character to building exteriors.", image: img.hotel },
  { title: "Boundary Walls", text: "Strong, attractive stone surfaces for property boundaries and entrance features.", image: img.boundary },
  { title: "Pathways & Parking", text: "Natural stone solutions for functional outdoor spaces.", image: img.courtyard },
  { title: "Gardens & Landscapes", text: "Stone elements that complement greenery and outdoor architecture.", image: img.garden },
  { title: "Roofing Applications", text: "Natural stone roofing finishes where suitable for the project design.", image: img.roof },
];

function Home() {
  const { t } = useLang();
  const [app, setApp] = useState(0);
  const [cat, setCat] = useState<GalleryCategory>("All");
  const [lb, setLb] = useState<number | null>(null);
  const shown = gallery.filter((g) => cat === "All" || g.category === cat);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[calc(100svh-73px)] min-h-[560px] overflow-hidden">
        <img src={img.hotel} alt="Multi-storey building finished with natural stone columns" className="absolute inset-0 h-full w-full object-cover object-[center_35%]" />
        <div className="image-overlay absolute inset-0" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-14 lg:px-8 lg:pb-20">
          <div className="rise-in max-w-2xl text-ivory">
            <p className="eyebrow text-ivory/80">Pokhara Stone &amp; Suppliers</p>
            <h1 className="mt-5 text-5xl leading-[1.02] md:text-7xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-xl text-ivory/85">
              Bring the beauty and strength of natural stone into your spaces. From distinctive building facades to thoughtfully finished outdoor areas, we supply natural stone for homes, commercial spaces and architectural projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="bg-ivory px-6 py-3 text-sm font-medium text-charcoal hover:opacity-90">Explore Our Work</Link>
              <Link to="/stones" className="border border-ivory/70 px-6 py-3 text-sm text-ivory hover:bg-ivory/10">Discover Our Stones</Link>
            </div>
          </div>
          <span className="eyebrow absolute bottom-6 right-5 hidden text-ivory/70 md:block lg:right-8">Scroll to explore ↓</span>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8 lg:py-32">
        <div>
          <p className="eyebrow text-earth">Our Story</p>
          <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">Rooted in nature. Made for architecture.</h2>
          <p className="mt-6 text-muted-foreground">
            At Pokhara Stone &amp; Suppliers, we believe natural materials bring lasting beauty and character to every building. Based in Pokhara, Nepal, we work with natural stone to create surfaces and spaces that feel authentic, enduring and connected to their surroundings.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our work spans homes, hotels, gardens, exterior walls and parking areas. Through supply and installation by skilled stone craftsmen and modern machinery, we help bring practical, distinctive design ideas to life.
          </p>
          <div className="mt-8"><TextLink to="/about">More about us</TextLink></div>
        </div>
        <div className="relative pb-16 pl-0 md:pl-16">
          <img src={img.courtyard} alt="Stone house with flagstone courtyard" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <img src={img.texture} alt="Wall stone detail" loading="lazy" className="absolute bottom-0 left-0 hidden aspect-square w-48 border-8 border-background object-cover md:block" />
        </div>
      </section>

      {/* Materials */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHead label="Our Materials" title="Materials shaped by nature" align="split">
            Explore natural stone for distinctive architectural surfaces, exterior finishes, pathways and outdoor spaces.
          </SectionHead>
          <div className="mt-14 grid gap-5 md:grid-cols-6">
            {stones.map((s, i) => (
              <Link key={s.slug} to="/stones/$slug" params={{ slug: s.slug }}
                className={`group relative block overflow-hidden ${["md:col-span-4 md:row-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-2"][i]}`}>
                <img src={s.image} alt={s.name} loading="lazy" className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 0 ? "aspect-[4/3] md:aspect-auto" : "aspect-[4/3]"}`} />
                <div className="image-overlay absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-ivory">
                  <div>
                    <p className="eyebrow text-ivory/70">0{i + 1}</p>
                    <h3 className={`mt-1 ${i === 0 ? "text-3xl md:text-4xl" : "text-2xl"}`}>{s.name}</h3>
                    {i === 0 && <p className="mt-2 max-w-sm text-sm text-ivory/85">{s.summary}</p>}
                  </div>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10"><TextLink to="/stones">View all materials</TextLink></div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHead label="Selected Work" title="Stone in its finest form" align="split">
          A closer look at natural stone applications across homes, buildings and outdoor spaces.
        </SectionHead>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <Link key={p.title} to="/projects" className={`group relative overflow-hidden ${i === 0 ? "md:row-span-2" : ""} ${i === 3 ? "md:col-span-2" : ""}`}>
              <img src={p.image} alt={p.title} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 0 ? "aspect-[4/5] h-full" : i === 3 ? "aspect-[21/9]" : "aspect-[4/3]"}`} />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-charcoal/80 to-transparent p-5 text-ivory opacity-90 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="eyebrow text-ivory/70">{p.category}</p>
                <h3 className="mt-1 text-2xl">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10"><TextLink to="/projects">View all projects</TextLink></div>
      </section>

      {/* Applications */}
      <section className="bg-charcoal py-24 text-ivory lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.3fr] lg:px-8">
          <div>
            <p className="eyebrow text-earth">Applications</p>
            <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">Designed for every surface</h2>
            <ul className="mt-10 border-t border-ivory/15">
              {applications.map((a, i) => (
                <li key={a.title} className="border-b border-ivory/15">
                  <button onMouseEnter={() => setApp(i)} onClick={() => setApp(i)} className="flex w-full items-baseline gap-5 py-5 text-left">
                    <span className="text-xs text-ivory/50">0{i + 1}</span>
                    <span className="flex-1">
                      <span className={`font-display text-2xl transition-colors md:text-3xl ${app === i ? "text-ivory" : "text-ivory/45"}`}>{a.title}</span>
                      {app === i && <span className="rise-in mt-2 block text-sm text-ivory/70">{a.text}</span>}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <img key={applications[app]?.image} src={applications[app]?.image} alt={applications[app]?.title} loading="lazy" className="rise-in aspect-[4/5] w-full object-cover lg:aspect-auto lg:h-full" />
        </div>
      </section>

      {/* Craft */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow text-earth">Craftsmanship</p>
            <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">The beauty is in the detail</h2>
          </div>
          <p className="self-end text-muted-foreground">
            Every natural stone surface has its own texture, tone and character. Our approach focuses on finding suitable materials and bringing them together with thoughtful installation and attention to detail.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-[1fr_1.4fr_1fr] md:items-end">
          {[
            { src: img.texture, label: "Natural Material", cls: "aspect-[3/4]" },
            { src: img.installation, label: "Careful Installation", cls: "aspect-[4/3]" },
            { src: img.boundary, label: "Thoughtful Selection", cls: "aspect-[3/4] md:mb-16" },
          ].map((c, i) => (
            <figure key={c.label} className={i === 2 ? "md:mb-16" : ""}>
              <img src={c.src} alt={c.label} loading="lazy" className={`w-full object-cover ${c.cls.replace(" md:mb-16", "")}`} />
              <figcaption className="mt-3 flex gap-3 text-sm"><span className="text-earth">0{i + 1}</span>{c.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHead label="Gallery" title="Explore our gallery" />
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {galleryCategories.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`border-b pb-1 ${cat === c ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>{c}</button>
            ))}
          </div>
          <div className="mt-10 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
            {shown.map((g, i) => (
              <button key={g.src + i} onClick={() => setLb(i)} className="group block w-full overflow-hidden">
                <img src={g.src} alt={g.alt} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
              </button>
            ))}
          </div>
          <div className="mt-6"><TextLink to="/gallery">View complete gallery</TextLink></div>
        </div>
        <Lightbox items={shown} index={lb} onClose={() => setLb(null)} onIndex={setLb} />
      </section>

      {/* Video */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHead label="Videos" title="See our work in motion" align="split">
          Short films of our stone work. Videos will appear here once they are added.
        </SectionHead>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {videos.map((v) => (
            <div key={v.title}>
              <div className="relative aspect-video overflow-hidden">
                <img src={v.poster} alt="" loading="lazy" className="h-full w-full object-cover grayscale-[40%]" />
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/40">
                  <span className="flex items-center gap-2 bg-ivory/90 px-4 py-2 text-xs text-charcoal"><Play className="h-3 w-3" /> Video coming soon</span>
                </div>
              </div>
              <p className="mt-3 font-display text-2xl">{v.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-10"><TextLink to="/videos">View all videos</TextLink></div>
      </section>

      <ContactCta />
    </>
  );
}
