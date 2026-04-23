const pt = {
  nav: {
    about: "Sobre",
    stack: "Stack",
    projects: "Projetos",
    cases: "Cases",
    timeline: "Experiência",
    contact: "Contato",
  },
  hero: {
    badge: "Pedidos abertos",
    greeting: "Olá, eu sou",
    name: "o Pedro",
    description: "Desenvolvedor Full Stack apaixonado por criar soluções escaláveis, performáticas e que geram impacto real.",
    cta_projects: "Ver projetos",
    cta_contact: "Entrar em contato",
    cta_cv: "Baixar CV",
  },
  about: {
    title: "Sobre",
    highlight: "mim",
    description: "Desenvolvedor Full Stack com experiência em construir aplicações web modernas e escaláveis. Focado em entregar soluções que combinam excelência técnica com experiência de usuário excepcional. Apaixonado por aprendizado contínuo, open-source e resolução de problemas complexos.",
    highlights: [
      { label: "Clean Code", desc: "Código limpo e manutenível" },
      { label: "Performance", desc: "Otimização e velocidade" },
      { label: "Colaboração", desc: "Trabalho em equipe ágil" },
      { label: "Inovação", desc: "Tecnologias de ponta" },
    ],
  },
  stack: {
    title: "Stack",
    highlight: "tecnológica",
    description: "Tecnologias que uso no dia a dia para construir produtos incríveis.",
  },
  projects: {
    title: "Meus",
    highlight: "projetos",
    description: "Uma seleção dos projetos que mais me orgulho.",
    code: "Código",
    demo: "Demo",
    coming_soon: "Coming Soon",
    items: [
      { title: "E-commerce Platform", description: "Plataforma completa de e-commerce com pagamentos, carrinho e painel admin. Performance otimizada com SSR." },
      { title: "Task Manager Pro", description: "App de gestão de tarefas em tempo real com drag & drop, notificações e colaboração em equipe." },
      { title: "API Gateway", description: "Gateway de APIs com rate limiting, autenticação JWT e monitoramento de performance." },
      { title: "Dashboard Analytics", description: "Dashboard interativo com gráficos em tempo real e relatórios automatizados." },
      { title: "AI Content Generator", description: "Ferramenta de geração de conteúdo com IA para marketing e mídias sociais." },
      { title: "DevOps Toolkit", description: "Conjunto de ferramentas CLI para automação de deploys e monitoramento de infraestrutura." },
    ],
  },
  cases: {
    title: "Como eu",
    highlight: "resolvo problemas",
    description: "Estudos de caso que mostram minha abordagem para transformar desafios em resultados concretos.",
    problem: "Problema",
    solution: "Solução",
    result: "Resultado",
    items: [
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
    ],
  },
  testimonials: {
    title: "Recomendações",
    description: "O que colegas e clientes dizem sobre meu trabalho.",
    items: [
      { text: "Profissional excepcional. Entregou o projeto antes do prazo com qualidade acima do esperado. Recomendo fortemente.", author: "Maria Silva", role: "Product Manager, Tech Corp" },
      { text: "Trabalhar com ele foi uma experiência incrível. Código limpo, comunicação clara e comprometimento total com o resultado.", author: "João Santos", role: "CTO, Startup ABC" },
      { text: "Transformou nossa ideia em realidade. Atento aos detalhes e sempre propondo melhorias que fizeram toda a diferença.", author: "Ana Costa", role: "CEO, Digital Agency" },
    ],
  },
  timeline: {
    title: "Trajetória",
    description: "Experiência profissional e acadêmica.",
    items: [
      { date: "2026 — Presente", title: "Desenvolvedor Full Stack", place: "Agência Digital", desc: "Desenvolvimento de produtos do zero ao deploy, integrações com APIs de terceiros e CI/CD." },
      { date: "2023 — Presente", title: "Desenvolvedor Frontend", place: "Agência Digital", desc: "Criação de interfaces responsivas e acessíveis, otimização de performance web." },
      { date: "2023 — 2025", title: "Graduação em Análise e Desenvolvimento de Sistemas", place: "Faculdade Multivix", desc: "Fundamentos de computação, algoritmos, estruturas de dados e projetos práticos." },
    ],
  },
  contact: {
    title: "Vamos",
    highlight: "conversar",
    description: "Tem um projeto em mente? Adoraria ouvir sobre ele.",
    name_placeholder: "Seu nome",
    email_placeholder: "Seu e-mail",
    message_placeholder: "Sua mensagem...",
    send: "Enviar mensagem",
    sending: "Enviando...",
    success_title: "Mensagem enviada!",
    success_desc: "Retornarei em breve.",
    error_title: "Erro ao enviar",
    error_desc: "Tente novamente.",
    fill_all: "Preencha todos os campos",
  },
  footer: {
    rights: "Todos os direitos reservados",
  },
};

export default pt;
