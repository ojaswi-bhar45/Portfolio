import useScrollReveal from '../hooks/useScrollReveal';
import { PERSONAL } from '../data/portfolio';

export default function Contact() {
  const ref = useScrollReveal();
  const items = [
    { label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
    { label: 'Phone', value: PERSONAL.phone, href: `tel:${PERSONAL.phone.replace(/\D/g, '')}` },
    { label: 'LinkedIn', value: 'linkedin.com/in/ojaswi-bhardwaj', href: PERSONAL.linkedin },
    { label: 'GitHub', value: 'github.com/ojaswi-bhar45', href: PERSONAL.github },
  ];
  return (
    <section id="contact">
      <div ref={ref} className="fade-section" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <span className="section-label">Connect</span>
        <h2 className="section-title">Get in Touch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 16 }}>
          {items.map((c, i) => (
            <div key={i} className="glass-card card-hover" style={{
              padding: '20px 22px', borderRadius: 14, display: 'flex', flexDirection: 'column', gap: 4,
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0,255,163,0.08)',
              backdropFilter: 'blur(8px)', transition: 'all 0.3s',
            }}>
              <span style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: '0.68rem',
                color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: 1,
              }}>{c.label}</span>
              <a href={c.href} target="_blank" rel="noopener noreferrer" style={{
                fontSize: '0.9rem', color: '#00ffa3', wordBreak: 'break-all', textDecoration: 'none',
              }}>{c.value}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
