const en = {
  nav: {
    about: "About",
    stack: "Stack",
    projects: "Projects",
    cases: "Cases",
    timeline: "Experience",
    contact: "Contact",
  },
  hero: {
    badge: "Open for projects",
    greeting: "Hi, I'm",
    name: "Pedro",
    description: "Full Stack Developer passionate about building scalable, high-performance solutions that create real impact.",
    cta_projects: "View projects",
    cta_contact: "Get in touch",
    cta_cv: "Download CV",
  },
  about: {
    title: "About",
    highlight: "me",
    description: "Full Stack Developer experienced in building modern and scalable web applications. Focused on delivering solutions that combine technical excellence with exceptional user experience. Passionate about continuous learning, open-source, and solving complex problems.",
    highlights: [
      { label: "Clean Code", desc: "Clean and maintainable code" },
      { label: "Performance", desc: "Optimization and speed" },
      { label: "Collaboration", desc: "Agile teamwork" },
      { label: "Innovation", desc: "Cutting-edge technologies" },
    ],
  },
  stack: {
    title: "Tech",
    highlight: "stack",
    description: "Technologies I use daily to build amazing products.",
  },
  projects: {
    title: "My",
    highlight: "projects",
    description: "A selection of the projects I'm most proud of.",
    code: "Code",
    demo: "Demo",
    coming_soon: "Coming Soon",
    items: [
      { title: "E-commerce Platform", description: "Full e-commerce platform with payments, cart and admin panel. Performance optimized with SSR." },
      { title: "Task Manager Pro", description: "Real-time task management app with drag & drop, notifications and team collaboration." },
      { title: "API Gateway", description: "API gateway with rate limiting, JWT authentication and performance monitoring." },
      { title: "Dashboard Analytics", description: "Interactive dashboard with real-time charts and automated reports." },
      { title: "AI Content Generator", description: "AI-powered content generation tool for marketing and social media." },
      { title: "DevOps Toolkit", description: "CLI toolkit for deploy automation and infrastructure monitoring." },
    ],
  },
  cases: {
    title: "How I",
    highlight: "solve problems",
    description: "Case studies showing my approach to turning challenges into concrete results.",
    problem: "Problem",
    solution: "Solution",
    result: "Result",
    items: [
      {
        problem: "An e-commerce was losing 40% of users at checkout due to slowness and loading errors.",
        solution: "Refactored the frontend with React Server Components, implemented smart caching and optimized database queries with composite indexes.",
        result: "Loading time reduced by 65%, conversion rate increased 28% in the first month.",
      },
      {
        problem: "Support team spent 3h/day generating manual reports from disconnected spreadsheets.",
        solution: "Built an automated dashboard with API integrations, consolidating real-time data with interactive visualizations.",
        result: "Saved 15h/week of manual work, faster decisions based on up-to-date data.",
      },
      {
        problem: "Startup faced scalability issues with 10x traffic spikes during marketing campaigns.",
        solution: "Migrated architecture to microservices with Docker and Kubernetes, implementing auto-scaling and async processing queues.",
        result: "System handled 50x normal traffic without downtime, infra cost reduced 35% with dynamic scaling.",
      },
    ],
  },
  testimonials: {
    title: "Recommendations",
    description: "What colleagues and clients say about my work.",
    items: [
      { text: "Exceptional professional. Delivered the project ahead of schedule with above-expected quality. Highly recommended.", author: "Maria Silva", role: "Product Manager, Tech Corp" },
      { text: "Working with him was an amazing experience. Clean code, clear communication and total commitment to results.", author: "João Santos", role: "CTO, Startup ABC" },
      { text: "Turned our idea into reality. Detail-oriented and always suggesting improvements that made all the difference.", author: "Ana Costa", role: "CEO, Digital Agency" },
    ],
  },
  timeline: {
    title: "Journey",
    description: "Professional and academic experience.",
    items: [
      { date: "2026 — Present", title: "Full Stack Developer", place: "Digital Agency", desc: "Product development from scratch to deploy, third-party API integrations and CI/CD." },
      { date: "2023 — Present", title: "Frontend Developer", place: "Digital Agency", desc: "Building responsive and accessible interfaces, web performance optimization." },
      { date: "2023 — 2025", title: "Bachelor's in Systems Analysis and Development", place: "Faculdade Multivix", desc: "Computer fundamentals, algorithms, data structures and practical projects." },
    ],
  },
  contact: {
    title: "Let's",
    highlight: "talk",
    description: "Have a project in mind? I'd love to hear about it.",
    name_placeholder: "Your name",
    email_placeholder: "Your email",
    message_placeholder: "Your message...",
    send: "Send message",
    sending: "Sending...",
    success_title: "Message sent!",
    success_desc: "I'll get back to you soon.",
    error_title: "Failed to send",
    error_desc: "Please try again.",
    fill_all: "Please fill all fields",
  },
  footer: {
    rights: "All rights reserved",
  },
};

export default en;
