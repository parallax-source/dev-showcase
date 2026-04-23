import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLang } from "@/i18n/LangContext";

const TestimonialsSection = () => {
  const { t } = useLang();
  return (
    <section className="section-padding bg-surface/50">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center">
            <span className="text-gradient">{t.testimonials.title}</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-center">{t.testimonials.description}</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 h-full flex flex-col hover-lift">
                <Quote size={20} className="text-primary/40 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{item.text}</p>
                <div>
                  <p className="font-heading font-semibold text-sm">{item.author}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;