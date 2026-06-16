import useScrollReveal from '../hooks/useScrollReveal';
import { STATS } from '../data/portfolio';
import AnimatedCounter from './AnimatedCounter';

export default function Stats() {
  const ref = useScrollReveal();
  return (
    <section id="stats">
      <div ref={ref} className="fade-section" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <span className="section-label">Impact</span>
        <h2 className="section-title">By the Numbers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {STATS.map((s, i) => <AnimatedCounter key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
}
