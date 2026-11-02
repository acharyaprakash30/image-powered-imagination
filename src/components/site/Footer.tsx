import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import { company } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-4xl text-ivory">PSS</p>
          <p className="mt-3 text-sm text-ivory/80">{company.name}</p>
          <p className="mt-6 font-display text-2xl italic text-ivory/90">Natural stone for enduring spaces.</p>
        </div>
        <div>
          <p className="eyebrow text-ivory/60">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/85">
            {([["/", "Home"], ["/about", "About"], ["/stones", "Natural Stone"], ["/projects", "Projects"], ["/gallery", "Gallery"], ["/videos", "Videos"], ["/contact", "Contact"]] as const).map(([to, l]) => (
              <li key={to}><Link to={to} className="hover:text-ivory">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-ivory/60">Visit</p>
          <p className="mt-4 text-sm leading-relaxed text-ivory/85">{company.address}</p>
          {company.phone && <a href={`tel:${company.phone}`} className="mt-2 block text-sm">{company.phone}</a>}
          {company.email && <a href={`mailto:${company.email}`} className="mt-1 block text-sm">{company.email}</a>}
        </div>
      </div>
      <div className="border-t border-ivory/15">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-xs text-ivory/60 lg:px-8">
          <span>© 2026 {company.name} All rights reserved.</span>
          <button onClick={() => window.scrollTo({ top: 0 })} className="flex items-center gap-1 hover:text-ivory">
            Back to top <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
