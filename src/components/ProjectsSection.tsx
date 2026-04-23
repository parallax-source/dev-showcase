import { ExternalLink, Github, Star, Clock, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import { useLang } from "@/i18n/LangContext";
import { useState, useEffect, useCallback } from "react";

const techs = [
  ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  ["React", "Node.js", "Socket.io", "MongoDB"],
  ["Node.js", "Redis", "Docker", "Prometheus"],
  ["React", "D3.js", "Python", "FastAPI"],
  ["Next.js", "OpenAI", "Tailwind"],
  ["Go", "Docker", "Kubernetes"],
];

const featured = [true, true, false, false, false, false];
const comingSoon = [false, false, false, false, true, true];
const github = ["#", "#", "#", "#", null, null];
const demo = ["#", "#", null, "#", null, null];

const gradients = [
  "linear-gradient(135deg,#0f172a,#1e3a5f,#0e7490)",
  "linear-gradient(135deg,#1a0533,#3b0764,#7c3aed)",
  "linear-gradient(135deg,#052e16,#14532d,#15803d)",
  "linear-gradient(135deg,#1c1003,#3d2a00,#b45309)",
  "linear-gradient(135deg,#1e1b4b,#312e81,#4338ca)",
  "linear-gradient(135deg,#1a0000,#450a0a,#b91c1c)",
];

const SLIDES = 3;

const MockUI = ({ title, big }: { title: string; big?: boolean }) => (
  <div className="absolute inset-0 p-4 flex flex-col gap-2">
    <div className={`h-2 ${big ? "h-3" : "h-2"} w-3/4 rounded bg-white/20`} />
    <div className={`h-2 ${big ? "h-3" : "h-2"} w-1/2 rounded bg-white/15`} />
    <div className="flex gap-2 mt-2 flex-1">
      <div className="flex-1 rounded-lg bg-white/10 border border-white/15" />
      <div className="flex-1 rounded-lg bg-white/10 border border-white/15" />
      {big && <div className="flex-1 rounded-lg bg-white/10 border border-white/15" />}
    </div>
    <div className="h-2 w-2/3 rounded bg-white/15" />
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span className="text-white/10 font-bold text-center px-4" style={{ fontSize: big ? 32 : 16 }}>{title}</span>
    </div>
  </div>
);

interface ZoomState { projectIndex: number; slide: number }

const ZoomOverlay = ({ state, onClose, onPrev, onNext }: {
  state: ZoomState;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  const { projectIndex: pi, slide } = state;

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", h);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", animation: "fadeIn .2s ease" }}
      onClick={onClose}
    >
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl"
        style={{ width: "min(800px,92vw)", height: "min(500px,68vh)", animation: "scaleIn .25s ease" }}
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute inset-0" style={{ background: gradients[pi] }}>
          <MockUI title={Object.values(gradients)[pi] ? "" : ""} big />
        </div>

        <button onClick={onClose} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10">
          <X size={16} />
        </button>

        <button onClick={e => { e.stopPropagation(); onPrev(); }} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10">
          <ChevronLeft size={20} />
        </button>

        <button onClick={e => { e.stopPropagation(); onNext(); }} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10">
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {Array.from({ length: SLIDES }).map((_, i) => (
            <div key={i} className={`rounded-full transition-all ${i === slide ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40"}`} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes scaleIn{from{opacity:0;transform:scale(.93)}to{opacity:1;transform:scale(1)}}
      `}</style>
    </div>
  );
};

const ProjectPreview = ({ index, onOpen }: { index: number; onOpen: (slide: number) => void }) => {
  const [slide, setSlide] = useState(0);
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setSlide(s => (s - 1 + SLIDES) % SLIDES); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setSlide(s => (s + 1) % SLIDES); };

  return (
    <div className="relative w-full h-44 rounded-lg overflow-hidden mb-4 cursor-pointer group" onClick={() => onOpen(slide)}>
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ background: gradients[index] }}>
        <MockUI title="" />
      </div>

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100">
        <span className="text-white text-xs bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">Clique para ampliar</span>
      </div>

      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-black/70 transition-all z-10">
        <ChevronLeft size={14} />
      </button>

      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-black/70 transition-all z-10">
        <ChevronRight size={14} />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {Array.from({ length: SLIDES }).map((_, i) => (
          <div key={i} className={`rounded-full transition-all ${i === slide ? "w-3 h-1 bg-white" : "w-1 h-1 bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { t } = useLang();
  const [zoom, setZoom] = useState<ZoomState | null>(null);

  const handlePrev = useCallback(() => {
    if (!zoom) return;
    setZoom(z => z ? { ...z, slide: (z.slide - 1 + SLIDES) % SLIDES } : null);
  }, [zoom]);

  const handleNext = useCallback(() => {
    if (!zoom) return;
    setZoom(z => z ? { ...z, slide: (z.slide + 1) % SLIDES } : null);
  }, [zoom]);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
            {t.projects.title} <span className="text-gradient">{t.projects.highlight}</span>
          </h2>
          <p className="text-muted-foreground mb-12">{t.projects.description}</p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className={`glass rounded-xl p-4 h-full flex flex-col hover-lift relative ${featured[i] ? "ring-1 ring-primary/30" : ""}`}>
                {featured[i] && <div className="absolute top-3 right-3 z-10"><Star size={16} className="text-primary fill-primary" /></div>}
                {comingSoon[i] && (
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} />{t.projects.coming_soon}
                  </div>
                )}
                <h3 className="font-heading font-semibold text-base mb-3">{project.title}</h3>
                <ProjectPreview index={i} onOpen={(slide) => setZoom({ projectIndex: i, slide })} />
                <div className="flex flex-wrap gap-2 mb-3">
                  {techs[i].map(tech => <Badge key={tech} variant="secondary" className="text-xs font-normal">{tech}</Badge>)}
                </div>
                {!comingSoon[i] && (
                  <div className="flex gap-2 mt-auto">
                    {github[i] && <Button size="sm" variant="ghost" className="gap-1.5 text-xs" asChild><a href={github[i]!}><Github size={14} />{t.projects.code}</a></Button>}
                    {demo[i] && <Button size="sm" variant="ghost" className="gap-1.5 text-xs text-primary" asChild><a href={demo[i]!}><ExternalLink size={14} />{t.projects.demo}</a></Button>}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {zoom && <ZoomOverlay state={zoom} onClose={() => setZoom(null)} onPrev={handlePrev} onNext={handleNext} />}
    </section>
  );
};

export default ProjectsSection;