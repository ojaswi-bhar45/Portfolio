import { achievements } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Achievements() {
  const ref = useScrollReveal();

  return (
    <section id="achievements">
      <div className="container fade-section" ref={ref}>
        <span className="section-label">Recognition</span>
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div key={i} className="achievement-card">
              <span className="achievement-icon">{a.icon}</span>
              <p className="achievement-text" dangerouslySetInnerHTML={{ __html: a.text }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
