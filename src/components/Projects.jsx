import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { PROJECTS } from '../data/portfolio';

export default function Projects() {
  const ref = useScrollReveal();
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects">
      <div ref={ref} className="fade-section" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <div key={i} className="glass-card card-hover project-card-custom" style={{
              padding: 0, borderRadius: 16, display: 'flex', flexDirection: 'column',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0,255,163,0.08)',
              backdropFilter: 'blur(8px)', transition: 'all 0.3s',
              position: 'relative', overflow: 'hidden',
            }}>
              <div className="project-img-placeholder">
                <span style={{ fontSize: '2.4rem' }}>{p.icon}</span>
              </div>
              <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 14 }}>{p.name}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="project-btn-link" style={{
                      fontFamily: "'JetBrains Mono',monospace", fontSize: '0.72rem',
                      padding: '6px 14px', borderRadius: 8, cursor: 'pointer',
                      background: 'rgba(0,255,163,0.08)', color: '#00ffa3',
                      border: '1px solid rgba(0,255,163,0.15)', textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}>{'\u2192'} Live Demo</a>
                  )}
                  <button onClick={() => setSelected(p)} className="project-btn-link" style={{
                    fontFamily: "'JetBrains Mono',monospace", fontSize: '0.72rem',
                    padding: '6px 14px', borderRadius: 8, cursor: 'pointer',
                    background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.2s',
                  }}>Case Study {'\u2192'}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>{'\u2715'}</button>
            <div className="modal-img-placeholder">
              <span style={{ fontSize: '2.8rem' }}>{selected.icon}</span>
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>{selected.name}</h3>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>{selected.subtitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
              {selected.stack.map(t => (
                <span key={t} style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: '0.7rem',
                  padding: '4px 12px', borderRadius: 6, background: 'rgba(0,255,163,0.06)',
                  color: '#00ffa3', border: '1px solid rgba(0,255,163,0.1)',
                }}>{t}</span>
              ))}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 24 }}>
              {selected.bullets.map((b, j) => (
                <li key={j} style={{
                  position: 'relative', color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem',
                  marginBottom: 10, paddingLeft: 20, lineHeight: 1.7,
                }}>
                  <span style={{ position: 'absolute', left: 0, color: '#00ffa3' }}>{'\u2192'}</span>{b}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {selected.liveUrl && (
                <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: '0.75rem',
                  padding: '8px 18px', borderRadius: 8, cursor: 'pointer',
                  background: 'rgba(0,255,163,0.1)', color: '#00ffa3',
                  border: '1px solid rgba(0,255,163,0.2)', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}>{'\u2192'} Live Demo</a>
              )}
              {selected.githubUrl && (
                <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: '0.75rem',
                  padding: '8px 18px', borderRadius: 8, cursor: 'pointer',
                  background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.8)',
                  border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}>GitHub {'\u2192'}</a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
