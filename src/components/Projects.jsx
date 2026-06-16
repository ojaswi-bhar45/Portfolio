import { projects } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects">
      <div className="container fade-section" ref={ref}>
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card" style={{ '--accent': p.accent }}>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-subtitle">{p.subtitle}</p>
              <div className="project-stack">
                {p.stack.map((t) => <span key={t}>{t}</span>)}
              </div>
              <ul className="project-bullets">
                {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
