import { Briefcase, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  { type: "work" as const, date: "2023 – Presente", title: "Desenvolvedor Full Stack Sênior", place: "Tech Company", desc: "Liderança técnica em projetos de alta escala, mentoria de devs júniors e definição de arquitetura." },
  { type: "work" as const, date: "2021 – 2023", title: "Desenvolvedor Full Stack", place: "Startup XYZ", desc: "Desenvolvimento de produtos do zero ao deploy, integrações com APIs de terceiros e CI/CD." },
  { type: "edu" as const, date: "2020 – 2021", title: "Pós-graduação em Engenharia de Software", place: "Universidade ABC", desc: "Foco em arquitetura de sistemas distribuídos e boas práticas de engenharia." },
  { type: "work" as const, date: "2019 – 2021", title: "Desenvolvedor Frontend", place: "Agência Digital", desc: "Criação de interfaces responsivas e acessíveis, otimização de performance web." },
  { type: "edu" as const, date: "2015 – 2019", title: "Bacharelado em Ciência da Computação", place: "Universidade DEF", desc: "Fundamentos de computação, algoritmos, estruturas de dados e projetos práticos." },
];

const TimelineSection = () => (
  <section id="timeline" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center">
          <span className="text-gradient">Trajetória</span>
        </h2>
        <p className="text-muted-foreground mb-12 text-center">Experiência profissional e acadêmica.</p>
      </AnimatedSection>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className={`relative flex items-start mb-10 md:mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-5 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-1.5 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <div className="glass rounded-xl p-5 hover-lift">
                    <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                      {item.type === "work" ? (
                        <Briefcase size={14} className="text-primary" />
                      ) : (
                        <GraduationCap size={14} className="text-accent" />
                      )}
                      <span className="text-xs text-muted-foreground font-medium">{item.date}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-primary mb-2">{item.place}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default TimelineSection;
