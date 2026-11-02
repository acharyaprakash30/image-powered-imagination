import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { company, img } from "@/lib/content";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact & Quotes", "Contact Pokhara Stone & Suppliers in Parsyang, Pokhara for natural stone enquiries and quotations."),
  component: Contact,
});

const field = "w-full border-b border-border bg-transparent py-3 outline-none transition-colors focus:border-primary";

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  return (
    <section className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-14 lg:grid-cols-[1fr_1.2fr] lg:px-8 lg:pt-20">
      <div>
        <p className="eyebrow text-earth">Contact</p>
        <h1 className="mt-5 text-5xl leading-[1.02] md:text-6xl">Tell us about your project.</h1>
        <p className="mt-6 max-w-md text-muted-foreground">For product enquiries, site visits and quotations, send us a message or visit our yard in Parsyang.</p>
        <dl className="mt-10 divide-y border-y text-sm">
          <div className="py-4"><dt className="eyebrow text-muted-foreground">Address</dt><dd className="mt-1">{company.address}</dd></div>
          {company.phone && <div className="py-4"><dt className="eyebrow text-muted-foreground">Phone</dt><dd className="mt-1"><a href={`tel:${company.phone}`}>{company.phone}</a></dd></div>}
          {company.email && <div className="py-4"><dt className="eyebrow text-muted-foreground">Email</dt><dd className="mt-1"><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>}
        </dl>
        <img src={img.boundary} alt="" loading="lazy" className="mt-10 hidden aspect-[16/10] w-full object-cover lg:block" />
      </div>
      <div className="bg-card p-6 md:p-10">
        {sent ? (
          <div className="rise-in py-20 text-center">
            <h2 className="text-4xl">Thank you.</h2>
            <p className="mt-4 text-muted-foreground">Your enquiry has been noted. We'll be in touch about your project.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-6 md:grid-cols-2">
            <label className="text-sm">Full name<input required className={field} /></label>
            <label className="text-sm">Phone number<input required type="tel" className={field} /></label>
            <label className="text-sm md:col-span-2">Email address<input type="email" className={field} /></label>
            <label className="text-sm">Project type
              <select className={field} defaultValue="">
                <option value="" disabled>Select…</option>
                <option>Residential</option><option>Hotel / Commercial</option><option>Garden / Landscape</option><option>Other</option>
              </select>
            </label>
            <label className="text-sm">Stone of interest
              <select className={field} defaultValue="">
                <option value="" disabled>Select…</option>
                <option>Wall stone</option><option>Roof stone</option><option>Parking stone</option><option>Cladding</option><option>Garden stone</option><option>Not sure yet</option>
              </select>
            </label>
            <label className="text-sm md:col-span-2">Project location<input className={field} /></label>
            <label className="text-sm md:col-span-2">Message<textarea required rows={4} className={field} /></label>
            <button className="bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90 md:col-span-2 md:justify-self-start">Send enquiry</button>
          </form>
        )}
      </div>
    </section>
  );
}
