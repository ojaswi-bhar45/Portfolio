import { skillGroups } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills">
      <div className="container fade-section" ref={ref}>
        <span className="section-label">Expertise</span>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        {skillGroups.map((g) => (
          <div key={g.label} className="skills-group">
            <p className="skills-group-label">{g.label}</p>
            <div className="skills-pills">
              {g.skills.map((s) => <span key={s} className="skill-pill">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
