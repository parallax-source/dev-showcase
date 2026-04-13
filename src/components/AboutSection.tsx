import { Code2, Rocket, Users, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Código limpo e manutenível" },
  { icon: Rocket, label: "Performance", desc: "Otimização e velocidade" },
  { icon: Users, label: "Colaboração", desc: "Trabalho em equipe ágil" },
  { icon: Zap, label: "Inovação", desc: "Tecnologias de ponta" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Sobre <span className="text-gradient">Mim</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 text-lg leading-relaxed">
          Desenvolvedor Full Stack com experiência em construir aplicações web modernas e escaláveis. 
          Focado em entregar soluções que combinam excelência técnica com experiência de usuário excepcional. 
          Apaixonado por aprendizado contínuo, open-source e resolução de problemas complexos.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {highlights.map((h, i) => (
          <AnimatedSection key={h.label} delay={i * 0.1}>
            <div className="glass rounded-xl p-6 text-center hover-lift group">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <h.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-sm mb-1">{h.label}</h3>
              <p className="text-xs text-muted-foreground">{h.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
