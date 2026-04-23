import { createContext, useContext, useState, ReactNode } from "react";
import pt from "./pt";
import en from "./en";
import zh from "./zh";

const translations = { pt, en, zh };
export type Lang = "pt" | "en" | "zh";

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof pt;
}>({ lang: "pt", setLang: () => {}, t: pt });

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("pt");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
