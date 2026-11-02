import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "./i18n";

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-baseline gap-3" aria-label="Pokhara Stone & Suppliers home">
      <span className={`font-display text-3xl leading-none tracking-wide ${light ? "text-ivory" : "text-primary"}`}>PSS</span>
      <span className={`hidden text-[0.7rem] uppercase tracking-[0.2em] sm:inline ${light ? "text-ivory/80" : "text-muted-foreground"}`}>
        Pokhara Stone &amp; Suppliers
      </span>
    </Link>
  );
}

export function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    { to: "/", label: t.home },
    { to: "/about", label: t.about },
    { to: "/stones", label: t.stones },
    { to: "/projects", label: t.projects },
    { to: "/gallery", label: t.gallery },
    { to: "/videos", label: t.videos },
    { to: "/contact", label: t.contact },
  ] as const;

  return (
    <>
    <header className={`sticky top-0 z-40 border-b transition-colors ${scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background"}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-5 py-4 lg:grid-cols-[auto_1fr_auto] lg:px-8">
        <Wordmark />
        <nav className="hidden justify-center gap-7 lg:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: l.to === "/" }} className="text-sm text-foreground/75 transition-colors hover:text-foreground data-[status=active]:text-primary data-[status=active]:underline data-[status=active]:underline-offset-8">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-1 text-xs sm:flex">
            <button onClick={() => setLang("en")} className={lang === "en" ? "font-semibold text-foreground" : "text-muted-foreground"}>EN</button>
            <span className="text-border">/</span>
            <button onClick={() => setLang("ne")} className={lang === "ne" ? "font-semibold text-foreground" : "text-muted-foreground"}>नेपाली</button>
          </div>
          <Link to="/contact" className="hidden border border-primary px-4 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-block">
            {t.quote}
          </Link>
          <button className="lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-charcoal/50" onClick={() => setOpen(false)} />
          <div className="rise-in absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-background p-6">
            <div className="flex items-center justify-between">
              <Wordmark />
              <button aria-label="Close menu" onClick={() => setOpen(false)}><X className="h-6 w-6" /></button>
            </div>
            <nav className="mt-10 flex flex-col">
              {links.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="border-b py-4 font-display text-2xl">
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex gap-3 text-sm">
              <button onClick={() => setLang("en")} className={lang === "en" ? "font-semibold" : "text-muted-foreground"}>EN</button>
              <button onClick={() => setLang("ne")} className={lang === "ne" ? "font-semibold" : "text-muted-foreground"}>नेपाली</button>
            </div>
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-auto bg-primary px-5 py-3 text-center text-primary-foreground">{t.quote}</Link>
          </div>
        </div>
      )}
    </>
  );
}
