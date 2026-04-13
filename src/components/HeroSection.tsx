import { ArrowDown, Download, Mail, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-float" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium animate-fade-in">
          Disponível para oportunidades
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Olá, eu sou{" "}
          <span className="text-gradient glow-text">Seu Nome</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Desenvolvedor Full Stack apaixonado por criar soluções escaláveis, performáticas e que geram impacto real.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="gap-2 glow-border" asChild>
            <a href="#projects">
              <FolderOpen size={18} />
              Ver Projetos
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="#contact">
              <Mail size={18} />
              Entrar em Contato
            </a>
          </Button>
          <Button size="lg" variant="ghost" className="gap-2 text-muted-foreground">
            <Download size={18} />
            Baixar CV
          </Button>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown size={20} className="text-muted-foreground" />
      </a>
    </section>
  );
};

export default HeroSection;
