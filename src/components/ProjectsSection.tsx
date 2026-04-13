import { ExternalLink, Github, Star, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

interface Project {
  title: string;
  description: string;
  techs: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  comingSoon?: boolean;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com pagamentos, carrinho e painel admin. Performance otimizada com SSR.",
    techs: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Task Manager Pro",
    description: "App de gestão de tarefas em tempo real com drag & drop, notificações e colaboração em equipe.",
    techs: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "API Gateway",
    description: "Gateway de APIs com rate limiting, autenticação JWT e monitoramento de performance.",
    techs: ["Node.js", "Redis", "Docker", "Prometheus"],
    github: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard interativo com gráficos em tempo real e relatórios automatizados.",
    techs: ["React", "D3.js", "Python", "FastAPI"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Content Generator",
    description: "Ferramenta de geração de conteúdo com IA para marketing e mídias sociais.",
    techs: ["Next.js", "OpenAI", "Tailwind"],
    comingSoon: true,
  },
  {
    title: "DevOps Toolkit",
    description: "Conjunto de ferramentas CLI para automação de deploys e monitoramento de infraestrutura.",
    techs: ["Go", "Docker", "Kubernetes"],
    comingSoon: true,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <AnimatedSection delay={index * 0.1}>
    <div className={`glass rounded-xl p-6 h-full flex flex-col hover-lift relative overflow-hidden ${project.featured ? "ring-1 ring-primary/30" : ""}`}>
      {project.featured && (
        <div className="absolute top-3 right-3">
          <Star size={16} className="text-primary fill-primary" />
        </div>
      )}
      {project.comingSoon && (
        <div className="absolute top-3 right-3 flex items-center gap-1 text-xs text-muted-foreground">
          <Clock size={12} />
          Coming Soon
        </div>
      )}

      <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techs.map((t) => (
          <Badge key={t} variant="secondary" className="text-xs font-normal">
            {t}
          </Badge>
        ))}
      </div>

      {!project.comingSoon && (
        <div className="flex gap-2">
          {project.github && (
            <Button size="sm" variant="ghost" className="gap-1.5 text-xs" asChild>
              <a href={project.github}><Github size={14} /> Código</a>
            </Button>
          )}
          {project.demo && (
            <Button size="sm" variant="ghost" className="gap-1.5 text-xs text-primary" asChild>
              <a href={project.demo}><ExternalLink size={14} /> Demo</a>
            </Button>
          )}
        </div>
      )}
    </div>
  </AnimatedSection>
);

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
          Meus <span className="text-gradient">Projetos</span>
        </h2>
        <p className="text-muted-foreground mb-12">Uma seleção dos projetos que mais me orgulho.</p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
