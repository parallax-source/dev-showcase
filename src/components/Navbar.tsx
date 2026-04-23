import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLang, Lang } from "@/i18n/LangContext";

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.stack, href: "#stack" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.cases, href: "#cases" },
    { label: t.nav.timeline, href: "#timeline" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const langs: { code: Lang; flag: string }[] = [
    { code: "pt", flag: "🇧🇷" },
    { code: "en", flag: "🇺🇸" },
    { code: "zh", flag: "🇨🇳" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "py-5 bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="font-heading text-xl font-bold text-gradient">
          &lt;Dev Parallax/&gt;
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-1 ml-4 border border-border rounded-lg overflow-hidden">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2 py-1 text-sm transition-colors ${lang === l.code ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-primary"}`}
                title={l.code.toUpperCase()}
              >
                {l.flag}
              </button>
            ))}
          </div>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass mt-2 mx-4 rounded-lg p-4 animate-fade-in">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2 py-1 text-sm rounded transition-colors ${lang === l.code ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-primary"}`}
              >
                {l.flag}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;