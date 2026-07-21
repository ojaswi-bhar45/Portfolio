# Ojaswi Bhardwaj — Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Demo-brightgreen?style=for-the-badge&logo=vercel)](YOUR_LIVE_DEMO_URL)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

> A modern, dark-themed developer portfolio featuring real-time particle animations, glassmorphism UI, and scroll-triggered reveals — built from scratch with React and vanilla CSS.

## 🚀 Live Demo

**[→ View Live Portfolio](https://portfolio-hda6.onrender.com/)**

## ✨ Highlights

- **90-particle canvas animation** with real-time proximity lines and green-tinted network effect
- **Custom IntersectionObserver hooks** — scroll-reveal fade-ins, scroll-spy navbar tracking, and single-fire visibility detection
- **Glassmorphism dark theme** — radial cursor glow, animated skill bars, and orbital ring hero animation
- **Fully Dockerized** — multi-stage Node.js build served via Nginx, with GitHub Actions CI/CD

## 📸 Screenshots

| Hero Section | Skills Section | Projects Section |
|:---:|:---:|:---:|
| ![Hero](docs/screenshots/hero.png) | ![Skills](docs/screenshots/skills.png) | ![Projects](docs/screenshots/projects.png) |

> Add your own screenshots to a `docs/screenshots/` folder in the repo root.

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Vanilla CSS (glassmorphism) |
| Deployment | Docker + Nginx |
| CI/CD | GitHub Actions |

## 🎯 Features

- Particle network animation (Canvas 2D)
- Cursor-following radial glow
- Typewriter text rotation (4 phrases)
- Animated stat counters with cubic ease-out
- Skill progress bars with scroll-triggered fill
- Scroll-reveal fade-in sections
- Scroll-spy active navbar highlighting
- Responsive design (768px / 480px breakpoints)
- Orbital ring hero animation

## 📋 Sections

| Section | Component | Description |
|---------|-----------|-------------|
| Hero | `Hero` + `Typewriter` | Full-viewport intro with orbital rings, typewriter, CTA buttons |
| Stats | `Stats` + `AnimatedCounter` | 4 animated impact metrics |
| Skills | `Skills` + `SkillBar` | 6 category groups with percentage bars |
| Experience | `Experience` | Timeline with gradient line, company/role/bullets |
| Projects | `Projects` | 3 glass cards with stack tags and action links |
| Education | `Education` | Degree, university, GPA badge |
| Achievements | `Achievements` | 4 recognition cards with icons |
| Contact | `Contact` | Email, phone, LinkedIn, GitHub + resume download |
| Footer | `Footer` | Copyright line |

## 🚀 Getting Started

```bash
npm install
npm run dev        # Dev server (Vite HMR)
npm run build      # Production build → dist/
npm run preview    # Preview production build
npm run lint       # ESLint check
```

## 🐳 Docker Deployment

```bash
docker build -t portfolio .
docker run -d -p 80:80 portfolio
```

## 📁 Project Structure

```
src/
├── main.jsx                  # Entry point
├── App.jsx                   # Root component (assembles all sections)
├── App.css                   # All styles
├── data/portfolio.js         # All content data
├── components/               # 15 React components
└── hooks/                    # 3 custom hooks
    ├── useScrollReveal.js    # Fade-in on scroll
    ├── useOnScreen.js        # Single-fire visibility
    └── useScrollSpy.js       # Active section tracking
```

## 🤝 Connect with Me

[![GitHub](https://img.shields.io/badge/GitHub-YOUR_GITHUB_USERNAME-181717?style=for-the-badge&logo=github)](YOUR_GITHUB_URL)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-YOUR_LINKEDIN_USERNAME-0A66C2?style=for-the-badge&logo=linkedin)](YOUR_LINKEDIN_URL)
[![Email](https://img.shields.io/badge/Email-YOUR_EMAIL-red?style=for-the-badge&logo=gmail)](mailto:YOUR_EMAIL)

## 📄 License

MIT
