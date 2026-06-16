import useScrollReveal from '../hooks/useScrollReveal';
import { EDUCATION } from '../data/portfolio';

export default function Education() {
  const ref = useScrollReveal();
  return (
    <section id="education">
      <div ref={ref} className="fade-section" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <span className="section-label">Education</span>
        <h2 className="section-title">Academic Background</h2>
        <div className="glass-card card-hover" style={{
          padding: 28, borderRadius: 16, display: 'flex', flexWrap: 'wrap',
          justifyContent: 'space-between', alignItems: 'baseline', gap: 8,
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0,255,163,0.08)',
          backdropFilter: 'blur(8px)', transition: 'all 0.3s',
        }}>
          <div>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>{EDUCATION.degree}</p>
            <p style={{ color: '#00ffa3', fontSize: '0.88rem' }}>{EDUCATION.university}</p>
          </div>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>{EDUCATION.duration}</span>
          <span style={{
            fontFamily: "'JetBrains Mono',monospace", fontSize: '0.82rem',
            color: '#00ffa3', background: 'rgba(0,255,163,0.08)',
            padding: '4px 12px', borderRadius: 8,
          }}>GPA: {EDUCATION.gpa}</span>
        </div>
      </div>
    </section>
  );
}
