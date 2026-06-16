import { experience } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience">
      <div className="container fade-section" ref={ref}>
        <span className="section-label">Career</span>
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experience.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="exp-header">
                <span className="exp-company">{item.company}</span>
                <span className="exp-role">{item.role}</span>
                <span className="exp-meta">{item.duration} — {item.location}</span>
              </div>
              <ul className="exp-bullets">
                {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
