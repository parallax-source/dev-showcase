import AnimatedSection from "./AnimatedSection";

interface Tech {
  name: string;
  level: number; // 0-100
  category: string;
}

const techs: Tech[] = [
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "React", level: 92, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 82, category: "Backend" },
  { name: "Docker", level: 75, category: "DevOps" },
  { name: "Git", level: 90, category: "DevOps" },
  { name: "AWS", level: 70, category: "DevOps" },
  { name: "Figma", level: 72, category: "Design" },
];

const categories = ["Frontend", "Backend", "DevOps", "Design"];

const TechStackSection = () => (
  <section id="stack" className="section-padding bg-surface/50">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
          Stack <span className="text-gradient">Tecnológica</span>
        </h2>
        <p className="text-muted-foreground mb-12">Tecnologias que uso no dia a dia para construir produtos incríveis.</p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-10">
        {categories.map((cat, ci) => (
          <AnimatedSection key={cat} delay={ci * 0.1}>
            <h3 className="font-heading font-semibold text-sm text-primary mb-4 uppercase tracking-wider">{cat}</h3>
            <div className="space-y-4">
              {techs
                .filter((t) => t.category === cat)
                .map((t) => (
                  <div key={t.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium">{t.name}</span>
                      <span className="text-xs text-muted-foreground">{t.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                        style={{ width: `${t.level}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
