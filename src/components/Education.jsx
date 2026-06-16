import { education } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education">
      <div className="container fade-section" ref={ref}>
        <span className="section-label">Education</span>
        <h2 className="section-title">Academic Background</h2>
        <div className="edu-card">
          <div>
            <p className="edu-degree">{education.degree}</p>
            <p className="edu-university">{education.university}</p>
          </div>
          <span className="edu-meta">{education.duration}</span>
          <span className="edu-gpa">GPA: {education.gpa}</span>
        </div>
      </div>
    </section>
  );
}
