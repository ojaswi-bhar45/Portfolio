import useOnScreen from '../hooks/useOnScreen';

export default function SkillBar({ name, pct }) {
  const [ref, visible] = useOnScreen(0.2);
  return (
    <div ref={ref} style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)' }}>{name}</span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.72rem', color: '#00ffa3' }}>{pct}%</span>
      </div>
      <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
        <div className="skill-bar-fill" style={{
          height: '100%', borderRadius: 3, width: visible ? `${pct}%` : '0%',
          background: 'linear-gradient(90deg,#00ffa3,#00c8ff)',
          boxShadow: '0 0 8px rgba(0,255,163,0.4)',
          transition: 'width 1s cubic-bezier(0.25,0.46,0.45,0.94)',
        }} />
      </div>
    </div>
  );
}
