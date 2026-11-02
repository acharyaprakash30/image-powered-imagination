import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/content";
import { PageHero, ContactCta, SectionHead } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About Us", "Pokhara Stone & Suppliers supplies and installs natural stone for homes, hotels, gardens and buildings across Nepal."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero label="About Us" title="A stone company from the heart of Pokhara." image={img.courtyard}
        text="Pokhara Stone & Suppliers Pvt. Ltd. supplies and installs natural stone, working with experienced stone craftsmen and modern machinery." />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div className="space-y-5 text-muted-foreground">
          <p>Pokhara, a city of natural beauty, has always inspired people to build with the materials around them. Natural stone gives buildings a look that is both attractive and long-lasting.</p>
          <p>Building with stone in a natural way keeps homes cool in summer and warm in winter, needs no repeated painting or plastering, and offers strength and character that conventional finishes cannot match.</p>
        </div>
        <div lang="ne" className="space-y-5 text-muted-foreground">
          <p>प्राकृतिक सुन्दरताले सजिएको शहर पोखराले मानिसहरूलाई सधैं सिर्जनशील रहन प्रेरित गर्दछ। ढुङ्गालाई प्राकृतिक तरिकाले घर निर्माणमा प्रयोग गर्दा गर्मीमा शितलता र जाडोमा न्यानोपन दिन्छ।</p>
          <p>हाम्रा उत्पादनहरू पोखरामा मात्र नभई चितवन, धरान, काठमाडौं, बुटवल लगायत अन्य शहरहरूमा पनि निर्यात हुने गर्दछ।</p>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-8">
          <img src={img.installation} alt="Craftsman laying stone" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <div>
            <SectionHead label="Our Approach" title="Supply and installation, done with care" />
            <ul className="mt-8 divide-y border-y">
              {[
                ["Natural material", "Stone chosen for its texture, tone and suitability to each surface."],
                ["Skilled craftsmen", "Installation by stone craftsmen, supported by modern machinery."],
                ["Many applications", "Houses, hotels, gardens, exterior walls, parking areas and roofs."],
              ].map(([h, p]) => (
                <li key={h} className="py-5">
                  <p className="font-display text-2xl">{h}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-20 md:grid-cols-3 lg:px-8">
        <img src={img.hotel} alt="Stone-clad hotel" loading="lazy" className="aspect-[3/4] w-full object-cover md:col-span-1" />
        <img src={img.boundary} alt="Stone boundary wall" loading="lazy" className="aspect-[3/4] w-full object-cover md:col-span-2 md:aspect-auto md:h-full" />
      </section>

      <ContactCta />
    </>
  );
}
