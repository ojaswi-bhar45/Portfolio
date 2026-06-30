# Architecture — Ojaswi Bhardwaj Portfolio

## Overview

Single-page developer portfolio built with **React 19** + **Vite 8**.  
Dark theme with green/teal accents, glassmorphism cards, and scroll-triggered animations. No routing, no external UI libraries, no CSS frameworks.

---

## Project Structure

```
portfolio/
├── index.html               # Entry HTML (Google Fonts, root div)
├── package.json              # React 19, Vite 8
├── vite.config.js            # Vite + React plugin
├── eslint.config.js          # ESLint flat config
├── Dockerfile                # Multi-stage: build → Nginx serve
├── .dockerignore
├── .gitignore
├── public/
├── src/
│   ├── main.jsx              # ReactDOM.createRoot → <App />
│   ├── App.jsx               # Root component — assembles all sections
│   ├── App.css               # All styles (dark theme, glassmorphism)
│   ├── data/
│   │   └── portfolio.js      # All content as exported constants
│   ├── components/           # 15 components
│   │   ├── ParticleCanvas.jsx
│   │   ├── CursorGlow.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Typewriter.jsx
│   │   ├── Stats.jsx
│   │   ├── AnimatedCounter.jsx
│   │   ├── Skills.jsx
│   │   ├── SkillBar.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── hooks/                # 3 custom hooks
│       ├── useScrollReveal.js
│       ├── useOnScreen.js
│       └── useScrollSpy.js
├── README.md
└── ARCHITECTURE.md
```

---

## Architecture Diagram

```
index.html
  └── <div id="root">
        └── main.jsx
              └── <App />
                    ├── <ParticleCanvas />    ← fixed canvas background
                    ├── <CursorGlow />        ← mouse-following radial gradient
                    ├── <Navbar />            ← sticky, scroll spy, hamburger
                    ├── <Hero />              ← orbital rings, Typewriter, CTA
                    ├── <Stats />             ← 4x AnimatedCounter
                    ├── <Skills />            ← grouped SkillBar categories
                    ├── <Experience />        ← timeline with gradient line
                    ├── <Projects />          ← 3 glass cards
                    ├── <Education />         ← single glass card
                    ├── <Achievements />      ← 4 icon+text glass cards
                    ├── <Contact />           ← 4 contact cards + resume download
                    └── <Footer />            ← copyright line
```

---

## Data Flow

All content lives in `src/data/portfolio.js` as plain JavaScript exports:

| Export | Type | Description |
|--------|------|-------------|
| `PERSONAL` | Object | Name, title, location, email, phone, links, summary |
| `STATS` | Array | 4 objects: `{ target, suffix, label }` |
| `SKILL_GROUPS` | Array | 6 groups: `{ label, skills[] }` each skill: `{ name, pct }` |
| `EXPERIENCE` | Array | 1 entry: `{ company, role, duration, location, bullets[] }` |
| `PROJECTS` | Array | 3 entries: `{ name, subtitle, liveUrl, githubUrl, stack[], bullets[] }` |
| `EDUCATION` | Object | `{ degree, university, duration, gpa }` |
| `ACHIEVEMENTS` | Array | 4 entries: `{ icon, text (HTML string) }` |
| `TYPEWRITER_PHRASES` | Array | Strings cycled by Typewriter component |

Components import data directly from `portfolio.js` — no prop drilling, no context, no state management.

---

## Custom Hooks

### `useScrollReveal(delay = 0)`
- **Purpose**: Triggers fade-in animation when a section enters the viewport
- **Mechanism**: Creates an `IntersectionObserver` (threshold 0.08) on the returned ref
- **Effect**: Adds CSS class `.visible` to the element, which triggers `opacity: 1` + `translateY(0)` transition
- **Returns**: A `ref` to attach to the target DOM element

### `useScrollSpy(sectionIds)`
- **Purpose**: Tracks which section is currently visible for navbar highlighting
- **Mechanism**: `IntersectionObserver` with `rootMargin: '-45% 0px -45% 0px'` (detects middle of viewport)
- **Returns**: `activeSection` string (e.g. `"skills"`, `"projects"`)

### `useOnScreen(threshold = 0.3)`
- **Purpose**: Single-fire visibility detection (used by `SkillBar`)
- **Mechanism**: `IntersectionObserver` — sets `visible = true` once, then disconnects
- **Returns**: `[ref, visible]` tuple

---

## Component Breakdown

### ParticleCanvas
- Fixed `<canvas>` background (z-index 0, pointer-events none)
- 90 particles moving at random velocities, bouncing off edges
- Lines drawn between particles within 100px proximity
- Green tint (`rgba(0,255,163,0.6)`)
- Resizes with window

### CursorGlow
- Fixed 300px radial gradient div that follows the mouse
- Uses `requestAnimationFrame` with linear interpolation (lerp 0.08) for smooth following
- Green tint (`rgba(0,255,163,0.08)`)

### Navbar
- Fixed position, transparent → dark background on scroll (50px threshold)
- Logo `<OB />` in monospace with green angle brackets
- Nav links rendered from `SECTION_IDS` (all sections except `hero`)
- Active link: green text + green background highlight via `useScrollSpy`
- Mobile (<768px): hamburger button toggles slide-in panel from right (CSS class toggle)

### Hero
- Full-viewport section with top padding for navbar
- **Orbital rings**: 3 concentric `<div>` rings (`ring--outer` 320px, `ring--mid` 260px, `ring--inner` 180px) with CSS spin animations; dot satellites at different positions
- **Ring core**: Gradient radial circle with `glow-pulse` animation
- **Name**: First name solid white, last name with green `-webkit-text-stroke` + shadow glow
- **Typewriter**: Cycles through `TYPEWRITER_PHRASES` with typing/deleting animation
- **Summary**: Two-line bio from `PERSONAL.summary`
- **CTA buttons**: "Get In Touch" (solid green, scrolls to contact), "View GitHub" (outline, external link), "Download Resume" (dark outline, downloads `/Resume.pdf`)
- **Links row**: GitHub, LinkedIn, Phone, Location (small monospace text)

### Typewriter
- Manages phrase cycling with `useRef` for index, position, direction
- Types forward at 80ms/char, deletes at 40ms/char
- 1500ms pause at end of phrase, 400ms pause before next phrase
- Blinking cursor via CSS `tw-cursor` class

### Stats
- Section label "Impact" + title "By the Numbers"
- 4-column grid of `AnimatedCounter` components
- Uses `useScrollReveal` for fade-in

### AnimatedCounter
- Receives `target`, `suffix`, `label` props
- Counts from 0 to target over ~1.4s (50 steps × 28ms) with cubic ease-out
- Triggered once via IntersectionObserver (threshold 0.5)
- Counter text has green → cyan gradient via `background-clip: text`

### Skills
- Section label "Expertise" + title "Skills & Technologies"
- Responsive grid (`minmax(300px, 1fr)`)
- Each group shows monospace label with `//` prefix in green
- Skills rendered as `SkillBar` components

### SkillBar
- Receives `name`, `pct` props
- Animated fill bar: width animates from 0% to `pct%` when scrolled into view (threshold 0.2)
- Uses `useOnScreen` hook for trigger
- Green → cyan gradient fill with green glow shadow

### Experience
- Section label "Career" + title "Work Experience"
- Vertical timeline with:
  - Green → cyan gradient vertical line
  - Glowing green dot per item
  - Company (bold white), role (green), duration/location (dim monospace)
  - Bullet list with `▹` prefix in green

### Projects
- Section label "Portfolio" + title "Featured Projects"
- Responsive grid (`minmax(320px, 1fr)`)
- 3 glass cards: Sync-Board, Dev-Pulse, Wanderlust
- Each card: name, subtitle, stack tags (green border), bullet list with `→` prefix
- Conditional action buttons: "→ Live Demo" and "GitHub →" based on `liveUrl` / `githubUrl`

### Education
- Section label "Education" + title "Academic Background"
- Single glass card with flex layout
- Degree + university (left), duration (right), GPA badge (green background)

### Achievements
- Section label "Recognition" + title "Achievements"
- Responsive grid (`minmax(280px, 1fr)`)
- 4 glass cards with emoji icon + HTML text (uses `dangerouslySetInnerHTML` for `<strong>` tags)

### Contact
- Section label "Connect" + title "Get in Touch"
- Responsive grid of 4 glass cards: Email, Phone, LinkedIn, GitHub
- Values are clickable links (`mailto:`, `tel:`, external URLs)
- "Download Resume" button + "View Resume" text link below

### Footer
- Top border separator, centered text
- "© 2026 Ojaswi Bhardwaj · Built with React"

---

## Styling Approach

| Aspect | Implementation |
|--------|---------------|
| **CSS location** | Single `src/App.css`, no CSS modules or CSS-in-JS |
| **Theme** | Dark background `#0a0e1a`, green accent `#00ffa3`, cyan accent `#00c8ff` |
| **Background** | Solid `#0a0e1a` (particle canvas adds visual interest) |
| **Glass cards** | `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(0,255,163,0.08)`, `backdrop-filter: blur(8px)`, `border-radius: 16px` |
| **Responsive** | Two breakpoints: 768px (tablet stacking, hamburger nav) and 480px (small mobile) |
| **Animations** | CSS transitions for hover effects, `@keyframes spin-cw/spin-ccw` for orbital rings, `@keyframes glow-pulse` for ring core, CSS transitions for scroll-reveal |
| **Scroll reveal** | `IntersectionObserver` toggles `.visible` class → `opacity: 1` + `translateY(0)` |

### Color Palette

```
--bg:           #0a0e1a      (page background)
--green:        #00ffa3      (primary accent)
--cyan:         #00c8ff      (secondary accent)
--text:         rgba(255,255,255,0.7)
--text-dim:     rgba(255,255,255,0.35)
--heading:      #ffffff
--glass-bg:     rgba(255,255,255,0.03)
--glass-border: rgba(0,255,163,0.08)
--selection:    rgba(0,255,163,0.25)
```

### Typography

| Usage | Font | Weight(s) |
|-------|------|-----------|
| Body | Inter (sans-serif) | 400 |
| Headings | Inter | 700–800 |
| Labels / tags / code | JetBrains Mono | 400–600 |

---

## Build & Run

```bash
npm install              # Install dependencies
npm run dev              # Dev server (Vite HMR)
npm run build            # Production build → dist/
npm run preview          # Preview production build
npm run lint             # ESLint check

docker build -t portfolio .                # Docker image
docker run -d -p 80:80 portfolio           # Docker container
```

Production build output:
- `dist/index.html` (~0.7 KB)
- `dist/assets/index-*.css` (~11.6 KB)
- `dist/assets/index-*.js` (~203 KB)

---

## Key Design Decisions

1. **Separated file structure**: Data, hooks, and components each in their own directory (unlike earlier monolithic `App.jsx` approach)
2. **No external CSS framework**: All styles hand-written for full control over the glassmorphism aesthetic
3. **IntersectionObserver (not scroll events)**: For scroll reveal, scroll spy, and animation triggers — better performance, no throttling needed
4. **requestAnimationFrame for cursor glow**: Smooth 60fps linear interpolation
5. **requestAnimationFrame for particle canvas**: Efficient 60fps particle simulation
6. **CSS transitions for animated elements**: Skill bars, scroll reveal, hover effects — all use CSS transitions
7. **No routing**: Single-page design, smooth-scroll anchor navigation only
8. **Canvas background**: Particles render on a `<canvas>` element to avoid DOM overhead

---

## Comparison: Current vs Original Architecture

| Aspect | Original (ARCHITECTURE.md v1) | Current |
|--------|-------------------------------|---------|
| File structure | Monolithic `App.jsx` | Separate `components/`, `hooks/`, `data/` |
| Background | `linear-gradient(135deg, #0f0c29, #302b63, #24243e)` | Solid `#0a0e1a` + particle canvas |
| Primary accent | Violet `#8b5cf6` | Green `#00ffa3` |
| Secondary accent | Pink `#ec4899` | Cyan `#00c8ff` |
| Hooks | 2 (`useScrollReveal`, `useScrollSpy`) | 3 (+ `useOnScreen`) |
| Components | 10 | 15 (+ `ParticleCanvas`, `CursorGlow`, `Typewriter`, `SkillBar`, `AnimatedCounter`) |
| Data | Inline in `App.jsx` | `src/data/portfolio.js` |
| Deployment | Static build only | Docker multi-stage build |
