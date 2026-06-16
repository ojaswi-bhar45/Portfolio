import useScrollReveal from '../hooks/useScrollReveal';
import { EXPERIENCE } from '../data/portfolio';

export default function Experience() {
  const ref = useScrollReveal();
  return (
    <section id="experience">
      <div ref={ref} className="fade-section" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <span className="section-label">Career</span>
        <h2 className="section-title">Work Experience</h2>
        <div style={{ position: 'relative', paddingLeft: 28 }}>
          <div style={{
            position: 'absolute', left: 7, top: 8, bottom: 8, width: 2,
            background: 'linear-gradient(180deg,#00ffa3,#00c8ff)', opacity: 0.35, borderRadius: 1,
          }} />
          {EXPERIENCE.map((item, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: 40, paddingLeft: 20 }}>
              <div style={{
                position: 'absolute', left: -24, top: 8, width: 14, height: 14,
                borderRadius: '50%', background: '#00ffa3',
                boxShadow: '0 0 10px rgba(0,255,163,0.5)',
              }} />
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '8px 16px', marginBottom: 4 }}>
                <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#ffffff' }}>{item.company}</span>
                <span style={{ color: '#00ffa3', fontSize: '0.88rem' }}>{item.role}</span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', width: '100%' }}>
                  {item.duration} — {item.location}
                </span>
              </div>
              <ul style={{ marginTop: 10, paddingLeft: 18, listStyle: 'none' }}>
                {item.bullets.map((b, j) => (
                  <li key={j} style={{
                    position: 'relative', color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem',
                    marginBottom: 6, lineHeight: 1.6, paddingLeft: 0,
                  }}>
                    <span style={{ color: '#00ffa3', marginRight: 8 }}>\u25B9</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
