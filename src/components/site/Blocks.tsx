import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { img } from "@/lib/content";

export function SectionHead({ label, title, children, align = "left" }: { label: string; title: string; children?: ReactNode; align?: "left" | "split" }) {
  if (align === "split")
    return (
      <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <p className="eyebrow text-earth">{label}</p>
          <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">{title}</h2>
        </div>
        {children && <div className="max-w-md text-muted-foreground md:justify-self-end">{children}</div>}
      </div>
    );
  return (
    <div className="max-w-2xl">
      <p className="eyebrow text-earth">{label}</p>
      <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">{title}</h2>
      {children && <div className="mt-5 text-muted-foreground">{children}</div>}
    </div>
  );
}

export function PageHero({ label, title, text, image }: { label: string; title: string; text?: string; image: string }) {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-14 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:px-8 lg:pt-20">
        <div className="rise-in">
          <p className="eyebrow text-earth">{label}</p>
          <h1 className="mt-5 text-5xl leading-[1.02] md:text-6xl">{title}</h1>
          {text && <p className="mt-6 max-w-lg text-muted-foreground">{text}</p>}
        </div>
        <img src={image} alt="" className="aspect-[16/10] w-full object-cover" />
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <img src={img.texture} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:px-8">
        <div>
          <p className="eyebrow text-primary-foreground/70">Start a conversation</p>
          <h2 className="mt-5 text-4xl leading-[1.05] md:text-6xl">Planning a project with natural stone?</h2>
          <p className="mt-6 max-w-xl text-primary-foreground/80">
            Whether you're building a home, designing an exterior, or exploring natural stone for a new space, we'd be happy to hear about your project.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link to="/contact" className="bg-ivory px-6 py-3 text-sm font-medium text-charcoal transition-opacity hover:opacity-90">Request a Quote</Link>
          <Link to="/contact" className="border border-primary-foreground/60 px-6 py-3 text-sm transition-colors hover:bg-primary-foreground/10">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

export function TextLink({ to, children }: { to: "/about" | "/stones" | "/projects" | "/gallery" | "/videos" | "/contact"; children: ReactNode }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-sm transition-colors hover:border-primary hover:text-primary">
      {children} <span className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}
