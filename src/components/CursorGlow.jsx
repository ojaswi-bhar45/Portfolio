import { useRef, useEffect } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);
  const pos = useRef({ x: -300, y: -300 });
  const target = useRef({ x: -300, y: -300 });

  useEffect(() => {
    const onMouse = (e) => { target.current = { x: e.clientX, y: e.clientY }; };
    document.addEventListener('mousemove', onMouse);

    let raf;
    const lerp = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 150}px, ${pos.current.y - 150}px)`;
      }
      raf = requestAnimationFrame(lerp);
    };
    raf = requestAnimationFrame(lerp);
    return () => { cancelAnimationFrame(raf); document.removeEventListener('mousemove', onMouse); };
  }, []);

  return <div ref={glowRef} style={{
    position: 'fixed', top: 0, left: 0, width: 300, height: 300,
    borderRadius: '50%', pointerEvents: 'none', zIndex: 1,
    background: 'radial-gradient(circle, rgba(0,255,163,0.08) 0%, transparent 70%)',
    willChange: 'transform',
  }} />;
}
