import useScrollReveal from '../hooks/useScrollReveal';
import { PERSONAL } from '../data/portfolio';
import Typewriter from './Typewriter';

export default function Hero() {
  const ref = useScrollReveal();

  const linkStyle = { fontFamily: "'JetBrains Mono',monospace", fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s' };

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 64,
      position: 'relative', overflow: 'hidden',
    }}>
      <div ref={ref} className="fade-section" style={{ width: '100%', maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 60, position: 'relative', zIndex: 2 }}>
        <div style={{ flex: '1 1 55%' }}>
          <span className="hero-tag" style={{
            fontFamily: "'JetBrains Mono',monospace", fontSize: '0.9rem',
            color: '#00ffa3', marginBottom: 16, display: 'inline-block',
          }}>&gt; Hello World!</span>
          <h1 style={{ fontSize: 'clamp(2.4rem,5.5vw,4.2rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 4, color: '#ffffff' }}>
            {PERSONAL.firstName}{' '}
            <span style={{
              color: 'transparent', WebkitTextStroke: '1.5px #00ffa3',
              textShadow: '0 0 12px rgba(0,255,163,0.2)',
            }}>{PERSONAL.lastName}</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'rgba(255,255,255,0.55)', marginBottom: 8, fontWeight: 400 }}>
            {PERSONAL.title}
          </p>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.85rem', color: '#00ffa3', marginBottom: 28, minHeight: '1.6em' }}>
            <Typewriter />
          </p>
          <p style={{ maxWidth: 520, color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 32 }}>
            {PERSONAL.summary}
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 }}>
            <button className="btn-primary-custom" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 32px',
              borderRadius: 30, fontFamily: "'JetBrains Mono',monospace", fontSize: '0.82rem',
              fontWeight: 500, cursor: 'pointer', border: 'none', background: '#00ffa3',
              color: '#0a0e1a', transition: 'all 0.25s',
            }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="btn-ghost-custom" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 32px',
              borderRadius: 30, fontFamily: "'JetBrains Mono',monospace", fontSize: '0.82rem',
              fontWeight: 500, cursor: 'pointer', textDecoration: 'none',
              background: 'transparent', color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.2)', transition: 'all 0.25s',
            }}>
              View GitHub
            </a>
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {[
              { label: 'GitHub', href: PERSONAL.github },
              { label: 'LinkedIn', href: PERSONAL.linkedin },
              { label: 'Phone', href: `tel:${PERSONAL.phone.replace(/\D/g, '')}` },
              { label: 'Location', href: null, text: PERSONAL.location },
            ].map((l, i) => (
              l.href
                ? <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" style={linkStyle} className="hero-link">{l.label}</a>
                : <span key={i} style={linkStyle}>{l.text}</span>
            ))}
          </div>
        </div>

        <div className="orbital-wrapper" style={{ flex: '0 0 340px', height: 340, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="ring ring--outer" />
          <div className="ring ring--mid" />
          <div className="ring ring--inner" />
          <div className="ring-core" />
        </div>
      </div>
    </section>
  );
}
