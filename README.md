# Ojaswi Bhardwaj — Portfolio

Personal developer portfolio built with **React 19** + **Vite 8**.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Styling:** Vanilla CSS (glassmorphism theme)
- **Deployment:** Docker + Nginx

## Features

- Particle network animation (canvas background)
- Cursor glow effect
- Typewriter text rotation
- Animated stat counters (requestAnimationFrame)
- Skill bars with scroll-triggered animation
- Scroll-reveal fade-in sections
- Scroll-spy active nav highlighting
- Responsive design (768px / 480px breakpoints)
- Glassmorphism card design
- Orbital ring animation (Hero section)

## Sections

| Section | Component | Description |
|---------|-----------|-------------|
| Hero | `Hero` + `Typewriter` | Full-viewport intro with orbital rings, typewriter, CTA buttons |
| Stats | `Stats` + `AnimatedCounter` | 4 animated metrics (errors reduced, deployment speed, etc.) |
| Skills | `Skills` + `SkillBar` | 6 category groups with percentage bars |
| Experience | `Experience` | Timeline with gradient line, company/role/bullets |
| Projects | `Projects` | 3 glass cards: Sync-Board, Dev-Pulse, Wanderlust |
| Education | `Education` | Degree, university, GPA badge |
| Achievements | `Achievements` | 4 icon + text recognition cards |
| Contact | `Contact` | Email, phone, LinkedIn, GitHub links + resume download |
| Footer | `Footer` | Copyright line |

## Getting Started

```bash
npm install
npm run dev        # Dev server (Vite HMR)
npm run build      # Production build → dist/
npm run preview    # Preview production build
npm run lint       # ESLint check
```

## Docker Deployment

```bash
docker build -t portfolio .
docker run -d -p 80:80 portfolio
```

## Project Structure

```
src/
├── main.jsx                  # Entry point
├── App.jsx                   # Root component (assembles all sections)
├── App.css                   # All styles
├── data/
│   └── portfolio.js          # All content data (personal, stats, skills, etc.)
├── components/               # 15 React components
│   ├── ParticleCanvas.jsx    # Background particle animation
│   ├── CursorGlow.jsx        # Mouse-following glow
│   ├── Navbar.jsx            # Sticky nav with scroll spy
│   ├── Hero.jsx              # Hero section
│   ├── Typewriter.jsx        # Typewriter text effect
│   ├── Stats.jsx             # Stats section wrapper
│   ├── AnimatedCounter.jsx   # Animated number counter
│   ├── Skills.jsx            # Skills section wrapper
│   ├── SkillBar.jsx          # Animated skill progress bar
│   ├── Experience.jsx        # Experience timeline
│   ├── Projects.jsx          # Project cards
│   ├── Education.jsx         # Education card
│   ├── Achievements.jsx      # Achievement cards
│   ├── Contact.jsx           # Contact links
│   └── Footer.jsx            # Footer
└── hooks/                    # 3 custom hooks
    ├── useScrollReveal.js    # Fade-in on scroll via IntersectionObserver
    ├── useOnScreen.js        # Single-fire visibility detection
    └── useScrollSpy.js       # Active section tracking
```

## License

MIT
