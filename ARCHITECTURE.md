# Architecture — Ojaswi Bhardwaj Portfolio

## Overview

Single-page developer portfolio built with **React 19** + **Vite 8**.  
All components, hooks, and data are consolidated into one file (`src/App.jsx`) to keep the project minimal. No routing, no external UI libraries.

---

## Project Structure

```
portfolio/
├── index.html            # Entry HTML (Google Fonts, root div)
├── package.json          # React 19, Vite 8
├── vite.config.js        # Vite config (auto-generated)
├── src/
│   ├── main.jsx          # ReactDOM.createRoot → <App />
│   ├── App.jsx           # Single file: data + hooks + all components
│   └── App.css           # All styles (glassmorphism theme)
└── ARCHITECTURE.md       # This file
```

---

## Architecture Diagram

```
index.html
  └── <div id="root">
        └── main.jsx
              └── <App />              ← src/App.jsx
                    ├── <Navbar />      ← sticky, glass blur, hamburger
                    ├── <Hero />        ← floating orbs, glow name, CTA
                    ├── <Stats />       ← 4x animated counters
                    ├── <Skills />      ← grouped pill badges
                    ├── <Experience />  ← timeline with gradient line
                    ├── <Projects />    ← 3 glass cards, per-card accent
                    ├── <Education />   ← single glass card
                    ├── <Achievements /> ← 4 icon+text glass cards
                    ├── <Contact />     ← 4 glass contact cards
                    └── <Footer />      ← copyright line
```

---

## Data Flow

All content lives as plain JavaScript objects/arrays at the top of `App.jsx`:

| Export | Type | Description |
|--------|------|-------------|
| `personal` | Object | Name, title, location, email, phone, links, summary |
| `stats` | Array | 4 objects: `{ target, suffix, label }` |
| `skillGroups` | Array | 6 groups: `{ label, skills[] }` |
| `experience` | Array | 1 entry: `{ company, role, duration, location, bullets[] }` |
| `projects` | Array | 3 entries: `{ name, subtitle, accent, stack[], bullets[] }` |
| `education` | Object | `{ degree, university, duration, gpa }` |
| `achievements` | Array | 4 entries: `{ icon, text (HTML string) }` |

Components receive data directly from these constants — no prop drilling, no context, no state management.

---

## Custom Hooks (defined inline in App.jsx)

### `useScrollReveal()`
- **Purpose**: Triggers fade-in animation when a section enters the viewport
- **Mechanism**: Creates an `IntersectionObserver` (threshold 0.1) on the returned ref
- **Effect**: Adds CSS class `.visible` to the element, which triggers `opacity: 1` + `translateY(0)` transition
- **Returns**: A `ref` to attach to the target DOM element

### `useScrollSpy(sectionIds)`
- **Purpose**: Tracks which section is currently visible for navbar highlighting
- **Mechanism**: `IntersectionObserver` with `rootMargin: '-45% 0px -45% 0px'` (detects middle of viewport)
- **Returns**: `activeSection` string (e.g. `"skills"`, `"projects"`)

---

## Component Breakdown

### Navbar
- Fixed position, glass blur background (`rgba(15,12,41,0.7)`, `backdrop-filter: blur(20px)`)
- Logo with violet → pink gradient text
- Nav links rendered from `SECTION_IDS` (all sections except `hero`)
- Active link: violet background + glowing underline via `box-shadow`
- Mobile (<768px): hamburger button toggles slide-in panel from right

### Hero
- Full-viewport section with gradient background
- **Floating orbs**: Two `div` elements with `border-radius: 50%`, `filter: blur(80px)`, and a `orbPulse` CSS animation (violet + pink)
- **Name glow**: `hero-glow` div with radial gradient positioned behind the name
- **Accent name**: Last name uses `background-clip: text` with violet → pink gradient
- CTA buttons: "Get In Touch" (violet gradient) and "View GitHub" (glass outline)

### Stats
- 4-column grid of `AnimatedCounter` components
- Counters use `requestAnimationFrame` with cubic ease-out over 2000ms
- Triggered once via IntersectionObserver (threshold 0.5)
- Counter text has violet → pink gradient

### Skills
- 6 category groups, each labeled with `// CategoryName` in monospace violet
- Skills rendered as pill badges with glass background and violet border on hover

### Experience
- Vertical timeline with:
  - Pink → violet gradient vertical line (`.timeline::before`)
  - Glowing gradient dot per item (`.timeline-item::before`)
  - Company, role, duration, location header
  - Bullet list with `▹` prefix in violet

### Projects
- 3 glass cards in responsive grid (`repeat(auto-fill, minmax(340px, 1fr))`)
- Each card has a unique accent color via CSS `--accent` variable:
  - Sync-Board: violet (`#8b5cf6`)
  - Dev-Pulse: pink (`#ec4899`)
  - Wanderlust: cyan (`#06b6d4`)
- Accent applied to: top border strip, stack tags, bullet arrows, hover glow

### Education
- Single glass card with flex layout (degree/university, duration, GPA badge)

### Achievements
- Grid of 4 glass cards with icon + HTML text (uses `dangerouslySetInnerHTML` for `<strong>` tags)

### Contact
- Grid of 4 glass cards: Email, Phone, LinkedIn, GitHub
- Values are clickable links to `mailto:`, `tel:`, or external URLs

### Footer
- Simple centered text with "Built with React" in violet

---

## Styling Approach

| Aspect | Implementation |
|--------|---------------|
| **CSS location** | Single `src/App.css` file, no CSS modules or CSS-in-JS |
| **Theme** | CSS custom properties (`:root`) for all colors, fonts, glass params |
| **Background** | `linear-gradient(135deg, #0f0c29, #302b63, #24243e)`, `fixed` |
| **Glass cards** | `background: rgba(255,255,255,0.05)`, `backdrop-filter: blur(16px)`, `border: 1px solid rgba(255,255,255,0.12)`, `border-radius: 20px` |
| **Responsive** | Two breakpoints: 768px (tablet stacking) and 480px (small mobile) |
| **Animations** | CSS transitions for hover effects, `@keyframes orbPulse` for floating orbs |
| **Scroll reveal** | CSS class toggle via IntersectionObserver |

### Color Palette

```
--violet: #8b5cf6      (primary accent)
--pink:   #ec4899      (secondary accent)
--cyan:   #06b6d4      (tertiary accent, used in Wanderlust project)
--text:   rgba(255,255,255,0.7)
--heading: #ffffff
--glass-bg: rgba(255,255,255,0.05)
--glass-border: rgba(255,255,255,0.12)
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
npm install        # Install dependencies
npm run dev        # Dev server (Vite)
npm run build      # Production build → dist/
npm run preview    # Preview production build
```

Production build output:
- `dist/index.html` (0.7 KB)
- `dist/assets/index-*.css` (11.6 KB gzip: 3 KB)
- `dist/assets/index-*.js` (203 KB gzip: 64 KB)

---

## Key Design Decisions

1. **Single JSX file**: All data, hooks, and components in `App.jsx` to minimize file count and simplify navigation
2. **No external CSS framework**: All styles hand-written for full control over the glassmorphism aesthetic
3. **IntersectionObserver (not scroll events)**: For both scroll reveal and scroll spy — better performance, no throttling needed
4. **requestAnimationFrame for counters**: Smooth 60fps animation with cubic ease-out, runs once per session
5. **CSS custom properties for per-card accents**: Project cards receive `--accent` via inline `style` prop, consumed by child selectors
6. **No routing**: Single-page design, smooth-scroll anchor navigation only
