# &lt;Dev Parallax/&gt; — Portfólio

[![Live](https://img.shields.io/badge/🌐_Live-parallax--source.github.io-blue?style=flat-square)](https://parallax-source.github.io/dev-showcase)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss)

> Portfólio profissional desenvolvido com React + TypeScript + Vite, com suporte a múltiplos idiomas e tema claro/escuro.

![Preview do site](./preview.png)

---

## ✨ Funcionalidades

- 🌍 **Internacionalização** — Português, Inglês e Mandarim (i18n manual)
- 🌙 **Tema claro/escuro** — alternância suave com persistência
- 📬 **Formulário de contato** — integrado com EmailJS, envio direto para e-mail
- 🖼️ **Preview de projetos** — carrossel com zoom via lightbox
- 📱 **Responsivo** — adaptado para mobile, tablet e desktop
- ⚡ **Performance** — build otimizado com Vite e code splitting automático

---

## 🛠️ Stack

| Camada | Tecnologia |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Estilização | Tailwind CSS + shadcn/ui |
| Roteamento | React Router (HashRouter) |
| Formulário | EmailJS |
| Deploy | GitHub Pages via gh-pages |

---

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/parallax-source/dev-showcase.git
cd dev-showcase

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:8080` no navegador.

---

## 📦 Deploy

O deploy é feito automaticamente para o branch `gh-pages`:

```bash
npm run build
npx gh-pages -d dist
```

---

## 📁 Estrutura do projeto

```
src/
├── components/       # Seções e componentes da UI
├── i18n/             # Arquivos de tradução (pt, en, zh)
├── pages/            # Páginas (Index, NotFound)
└── main.tsx          # Entrada da aplicação
```

---

## 📄 Licença

MIT © [Pedro Borges](https://github.com/parallax-source)
