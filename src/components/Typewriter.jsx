import { useState, useRef, useEffect } from 'react';
import { TYPEWRITER_PHRASES } from '../data/portfolio';

export default function Typewriter() {
  const [display, setDisplay] = useState('');
  const idx = useRef(0);
  const pos = useRef(0);
  const dir = useRef(1);
  const timer = useRef(null);

  useEffect(() => {
    const tick = () => {
      const phrase = TYPEWRITER_PHRASES[idx.current];
      const next = pos.current + dir.current;
      if (next > phrase.length) {
        dir.current = -1;
        timer.current = setTimeout(tick, 1500);
        return;
      }
      if (next < 0) {
        dir.current = 1;
        idx.current = (idx.current + 1) % TYPEWRITER_PHRASES.length;
        pos.current = 0;
        timer.current = setTimeout(tick, 400);
        return;
      }
      pos.current = next;
      setDisplay(TYPEWRITER_PHRASES[idx.current].slice(0, pos.current));
      timer.current = setTimeout(tick, dir.current > 0 ? 80 : 40);
    };
    timer.current = setTimeout(tick, 600);
    return () => clearTimeout(timer.current);
  }, []);

  return <span>{display}<span className="tw-cursor">|</span></span>;
}
