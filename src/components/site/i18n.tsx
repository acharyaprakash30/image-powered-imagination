import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "ne";

const dict = {
  en: { home: "Home", about: "About Us", stones: "Natural Stone", projects: "Projects", gallery: "Gallery", videos: "Videos", contact: "Contact", quote: "Get a Quote", heroTitle: "Natural Stone. Timeless Character." },
  ne: { home: "गृहपृष्ठ", about: "हाम्रो बारेमा", stones: "प्राकृतिक ढुङ्गा", projects: "परियोजना", gallery: "ग्यालरी", videos: "भिडियो", contact: "सम्पर्क", quote: "मूल्य सोध्नुहोस्", heroTitle: "प्राकृतिक ढुङ्गा। कालजयी सुन्दरता।" },
};

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (typeof dict)["en"] }>({ lang: "en", setLang: () => {}, t: dict.en });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return <Ctx.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
