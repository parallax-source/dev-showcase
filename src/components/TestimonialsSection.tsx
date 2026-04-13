import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    text: "Profissional excepcional. Entregou o projeto antes do prazo com qualidade acima do esperado. Recomendo fortemente.",
    author: "Maria Silva",
    role: "Product Manager, Tech Corp",
  },
  {
    text: "Trabalhar com ele foi uma experiência incrível. Código limpo, comunicação clara e comprometimento total com o resultado.",
    author: "João Santos",
    role: "CTO, Startup ABC",
  },
  {
    text: "Transformou nossa ideia em realidade. Atento aos detalhes e sempre propondo melhorias que fizeram toda a diferença.",
    author: "Ana Costa",
    role: "CEO, Digital Agency",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-surface/50">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center">
          <span className="text-gradient">Recomendações</span>
        </h2>
        <p className="text-muted-foreground mb-12 text-center">O que colegas e clientes dizem sobre meu trabalho.</p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="glass rounded-xl p-6 h-full flex flex-col hover-lift">
              <Quote size={20} className="text-primary/40 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{t.text}</p>
              <div>
                <p className="font-heading font-semibold text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
