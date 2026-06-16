import useScrollReveal from '../hooks/useScrollReveal';
import { PROJECTS } from '../data/portfolio';

export default function Projects() {
  const ref = useScrollReveal();
  return (
    <section id="projects">
      <div ref={ref} className="fade-section" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <div key={i} className="glass-card card-hover project-card-custom" style={{
              padding: 28, borderRadius: 16, display: 'flex', flexDirection: 'column',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0,255,163,0.08)',
              backdropFilter: 'blur(8px)', transition: 'all 0.3s',
              position: 'relative', overflow: 'hidden',
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 2 }}>{p.name}</h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', marginBottom: 12 }}>{p.subtitle}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                {p.stack.map(t => (
                  <span key={t} style={{
                    fontFamily: "'JetBrains Mono',monospace", fontSize: '0.68rem',
                    padding: '3px 10px', borderRadius: 6, background: 'rgba(0,255,163,0.06)',
                    color: '#00ffa3', border: '1px solid rgba(0,255,163,0.1)',
                  }}>{t}</span>
                ))}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, flex: 1 }}>
                {p.bullets.map((b, j) => (
                  <li key={j} style={{
                    position: 'relative', color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem',
                    marginBottom: 6, paddingLeft: 18, lineHeight: 1.6,
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: '#00ffa3' }}>\u2192</span>{b}
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
