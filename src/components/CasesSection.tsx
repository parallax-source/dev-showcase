import { Lightbulb, Target, TrendingUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLang } from "@/i18n/LangContext";

const icons = [Lightbulb, Target, TrendingUp];

const CasesSection = () => {
  const { t } = useLang();
  return (
    <section id="cases" className="section-padding bg-surface/50">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
            {t.cases.title} <span className="text-gradient">{t.cases.highlight}</span>
          </h2>
          <p className="text-muted-foreground mb-12">{t.cases.description}</p>
        </AnimatedSection>
        <div className="space-y-8">
          {t.cases.items.map((c, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="glass rounded-xl p-6 md:p-8 hover-lift">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: icons[0], title: t.cases.problem, text: c.problem, color: "text-destructive" },
                    { icon: icons[1], title: t.cases.solution, text: c.solution, color: "text-primary" },
                    { icon: icons[2], title: t.cases.result, text: c.result, color: "text-accent" },
                  ].map((step) => (
                    <div key={step.title}>
                      <div className="flex items-center gap-2 mb-3">
                        <step.icon size={18} className={step.color} />
                        <h3 className={`font-heading font-semibold text-sm ${step.color}`}>{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;