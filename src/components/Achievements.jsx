import useScrollReveal from '../hooks/useScrollReveal';
import { ACHIEVEMENTS } from '../data/portfolio';

export default function Achievements() {
  const ref = useScrollReveal();
  return (
    <section id="achievements">
      <div ref={ref} className="fade-section" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <span className="section-label">Recognition</span>
        <h2 className="section-title">Achievements</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="glass-card card-hover" style={{
              padding: '18px 22px', borderRadius: 14, display: 'flex', alignItems: 'flex-start', gap: 14,
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0,255,163,0.08)',
              backdropFilter: 'blur(8px)', transition: 'all 0.3s',
            }}>
              <span style={{ fontSize: '1.3rem', flexShrink: 0, marginTop: 2 }}>{a.icon}</span>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}
                dangerouslySetInnerHTML={{ __html: a.text }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
