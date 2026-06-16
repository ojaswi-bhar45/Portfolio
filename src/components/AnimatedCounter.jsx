import { useState, useRef, useEffect } from 'react';

export default function AnimatedCounter({ target, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const steps = 50, interval = 28;
        let step = 0;
        const id = setInterval(() => {
          step++;
          const progress = Math.min(step / steps, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (step >= steps) clearInterval(id);
        }, interval);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="glass-card card-hover" style={{
      padding: '28px 16px', textAlign: 'center', borderRadius: 16,
      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0,255,163,0.08)',
      backdropFilter: 'blur(8px)', transition: 'all 0.3s',
    }}>
      <span style={{
        fontFamily: "'JetBrains Mono',monospace", fontSize: '2.4rem', fontWeight: 700,
        background: 'linear-gradient(135deg,#00ffa3,#00c8ff)', WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent', display: 'block', lineHeight: 1.2,
      }}>{count}{suffix}</span>
      <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginTop: 6, display: 'block' }}>{label}</span>
    </div>
  );
}
