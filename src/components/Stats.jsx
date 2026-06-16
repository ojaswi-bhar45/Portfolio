import { stats } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import AnimatedCounter from './AnimatedCounter';

export default function Stats() {
  const ref = useScrollReveal();

  return (
    <section id="stats">
      <div className="container fade-section" ref={ref}>
        <span className="section-label">Impact</span>
        <h2 className="section-title">By the Numbers</h2>
        <div className="stats-grid">
          {stats.map((s, i) => <AnimatedCounter key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
}
