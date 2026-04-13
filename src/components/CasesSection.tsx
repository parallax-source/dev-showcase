import { Lightbulb, Target, TrendingUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const cases = [
  {
    problem: "Um e-commerce perdia 40% dos usuários na etapa de checkout por lentidão e erros de carregamento.",
    solution: "Refatorei o frontend com React Server Components, implementei cache inteligente e otimizei queries do banco com índices compostos.",
    result: "Tempo de carregamento reduzido em 65%, taxa de conversão aumentou 28% no primeiro mês.",
  },
  {
    problem: "Equipe de suporte gastava 3h/dia gerando relatórios manuais a partir de planilhas desconectadas.",
    solution: "Desenvolvi um dashboard automatizado com integrações via API, consolidando dados em tempo real com visualizações interativas.",
    result: "Economia de 15h semanais em trabalho manual, decisões mais rápidas baseadas em dados atualizados.",
  },
  {
    problem: "Startup enfrentava problemas de escalabilidade com picos de 10x no tráfego durante campanhas de marketing.",
    solution: "Migrei a arquitetura para microsserviços com Docker e Kubernetes, implementando auto-scaling e filas de processamento assíncrono.",
    result: "Sistema suportou 50x o tráfego normal sem downtime, custo de infra reduzido em 35% com scaling dinâmico.",
  },
];

const icons = [Lightbulb, Target, TrendingUp];

const CasesSection = () => (
  <section id="cases" className="section-padding bg-surface/50">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
          Como eu <span className="text-gradient">Resolvo Problemas</span>
        </h2>
        <p className="text-muted-foreground mb-12">
          Estudos de caso que mostram minha abordagem para transformar desafios em resultados concretos.
        </p>
      </AnimatedSection>

      <div className="space-y-8">
        {cases.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="glass rounded-xl p-6 md:p-8 hover-lift">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: icons[0], title: "Problema", text: c.problem, color: "text-destructive" },
                  { icon: icons[1], title: "Solução", text: c.solution, color: "text-primary" },
                  { icon: icons[2], title: "Resultado", text: c.result, color: "text-accent" },
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

export default CasesSection;
