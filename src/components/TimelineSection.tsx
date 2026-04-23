import { Briefcase, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLang } from "@/i18n/LangContext";

const types = ["work", "work", "edu"] as const;

const TimelineSection = () => {
  const { t } = useLang();
  return (
    <section id="timeline" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center">
            <span className="text-gradient">{t.timeline.title}</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-center">{t.timeline.description}</p>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          {t.timeline.items.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`relative flex items-start mb-10 md:mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-5 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-1.5 z-10" />
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <div className="glass rounded-xl p-5 hover-lift">
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                        {types[i] === "work" ? (
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
};

export default TimelineSection;