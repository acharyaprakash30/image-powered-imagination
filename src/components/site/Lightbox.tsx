import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function Lightbox({ items, index, onClose, onIndex }: { items: { src: string; alt: string }[]; index: number | null; onClose: () => void; onIndex: (i: number) => void }) {
  useEffect(() => {
    if (index === null) return;
    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [index, items.length, onClose, onIndex]);

  if (index === null) return null;
  const item = items[index];
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4" onClick={onClose}>
      <button aria-label="Close" className="absolute right-5 top-5 text-ivory" onClick={onClose}><X className="h-7 w-7" /></button>
      <button aria-label="Previous" className="absolute left-3 p-2 text-ivory md:left-8" onClick={(e) => { e.stopPropagation(); onIndex((index - 1 + items.length) % items.length); }}><ChevronLeft className="h-8 w-8" /></button>
      <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img key={item.src} src={item.src} alt={item.alt} className="rise-in max-h-[80vh] w-auto object-contain" />
        <figcaption className="mt-3 text-center text-sm text-ivory/75">{item.alt} · {index + 1} / {items.length}</figcaption>
      </figure>
      <button aria-label="Next" className="absolute right-3 p-2 text-ivory md:right-8" onClick={(e) => { e.stopPropagation(); onIndex((index + 1) % items.length); }}><ChevronRight className="h-8 w-8" /></button>
    </div>
  );
}
