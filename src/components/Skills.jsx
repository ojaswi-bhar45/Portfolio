import useScrollReveal from '../hooks/useScrollReveal';
import { SKILL_GROUPS } from '../data/portfolio';
import SkillBar from './SkillBar';

export default function Skills() {
  const ref = useScrollReveal();
  return (
    <section id="skills">
      <div ref={ref} className="fade-section" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <span className="section-label">Expertise</span>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 28 }}>
          {SKILL_GROUPS.map(g => (
            <div key={g.label}>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.78rem', color: '#00ffa3', marginBottom: 14 }}>
                <span style={{ color: 'rgba(255,255,255,0.25)' }}>// </span>{g.label}
              </p>
              {g.skills.map(s => <SkillBar key={s.name} {...s} />)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
