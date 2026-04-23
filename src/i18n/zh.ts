const zh = {
  nav: {
    about: "关于",
    stack: "技术栈",
    projects: "项目",
    cases: "案例",
    timeline: "经历",
    contact: "联系",
  },
  hero: {
    badge: "接受项目委托",
    greeting: "你好，我是",
    name: "Pedro",
    description: "全栈开发者，热衷于构建可扩展、高性能且能产生真实影响的解决方案。",
    cta_projects: "查看项目",
    cta_contact: "联系我",
    cta_cv: "下载简历",
  },
  about: {
    title: "关于",
    highlight: "我",
    description: "拥有构建现代化、可扩展Web应用经验的全栈开发者。专注于提供结合卓越技术与出色用户体验的解决方案。热爱持续学习、开源项目和解决复杂问题。",
    highlights: [
      { label: "简洁代码", desc: "干净且易于维护的代码" },
      { label: "性能", desc: "优化与速度" },
      { label: "协作", desc: "敏捷团队合作" },
      { label: "创新", desc: "前沿技术" },
    ],
  },
  stack: {
    title: "技术",
    highlight: "栈",
    description: "我日常用于构建优秀产品的技术。",
  },
  projects: {
    title: "我的",
    highlight: "项目",
    description: "精选我最引以为豪的项目。",
    code: "代码",
    demo: "演示",
    coming_soon: "即将推出",
    items: [
      { title: "电商平台", description: "包含支付、购物车和管理面板的完整电商平台，使用SSR优化性能。" },
      { title: "任务管理Pro", description: "支持拖放、通知和团队协作的实时任务管理应用。" },
      { title: "API网关", description: "具有限流、JWT身份验证和性能监控的API网关。" },
      { title: "分析仪表板", description: "带有实时图表和自动化报告的交互式仪表板。" },
      { title: "AI内容生成器", description: "用于营销和社交媒体的AI内容生成工具。" },
      { title: "DevOps工具包", description: "用于部署自动化和基础设施监控的CLI工具集。" },
    ],
  },
  cases: {
    title: "我如何",
    highlight: "解决问题",
    description: "展示我将挑战转化为具体成果的方法论案例研究。",
    problem: "问题",
    solution: "解决方案",
    result: "结果",
    items: [
      {
        problem: "一家电商因结账页面缓慢和加载错误，在结账环节流失了40%的用户。",
        solution: "使用React Server Components重构前端，实现智能缓存，并通过复合索引优化数据库查询。",
        result: "加载时间减少65%，第一个月转化率提升28%。",
      },
      {
        problem: "支持团队每天花3小时从不连通的电子表格中手动生成报告。",
        solution: "开发了带API集成的自动化仪表板，通过交互式可视化实时整合数据。",
        result: "每周节省15小时手动工作，基于实时数据做出更快决策。",
      },
      {
        problem: "初创公司在营销活动期间面临流量10倍激增的扩展性问题。",
        solution: "将架构迁移到Docker和Kubernetes微服务，实现自动扩展和异步处理队列。",
        result: "系统无宕机支撑了正常流量的50倍，动态扩展使基础设施成本降低35%。",
      },
    ],
  },
  testimonials: {
    title: "推荐",
    description: "同事和客户对我工作的评价。",
    items: [
      { text: "卓越的专业人士。提前完成项目，质量超出预期。强烈推荐。", author: "Maria Silva", role: "产品经理, Tech Corp" },
      { text: "与他合作是一次令人惊叹的体验。代码整洁，沟通清晰，对结果全力以赴。", author: "João Santos", role: "CTO, Startup ABC" },
      { text: "将我们的想法变为现实。注重细节，总是提出让一切不同的改进建议。", author: "Ana Costa", role: "CEO, Digital Agency" },
    ],
  },
  timeline: {
    title: "历程",
    description: "职业与学术经历。",
    items: [
      { date: "2026 — 至今", title: "全栈开发者", place: "数字机构", desc: "从零到部署的产品开发，第三方API集成和CI/CD。" },
      { date: "2023 — 至今", title: "前端开发者", place: "数字机构", desc: "构建响应式和无障碍界面，优化Web性能。" },
      { date: "2023 — 2025", title: "系统分析与开发学士", place: "Multivix学院", desc: "计算机基础、算法、数据结构和实践项目。" },
    ],
  },
  contact: {
    title: "让我们",
    highlight: "交谈",
    description: "有项目想法？我很乐意听您介绍。",
    name_placeholder: "您的姓名",
    email_placeholder: "您的邮箱",
    message_placeholder: "您的留言...",
    send: "发送消息",
    sending: "发送中...",
    success_title: "消息已发送！",
    success_desc: "我会尽快回复您。",
    error_title: "发送失败",
    error_desc: "请重试。",
    fill_all: "请填写所有字段",
  },
  footer: {
    rights: "保留所有权利",
  },
};

export default zh;
