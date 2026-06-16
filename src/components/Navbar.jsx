import { useState, useEffect } from 'react';
import useScrollSpy from '../hooks/useScrollSpy';

const SECTION_IDS = ['hero', 'stats', 'skills', 'experience', 'projects', 'education', 'achievements', 'contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault(); setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = SECTION_IDS.filter(s => s !== 'hero');

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, height: 64, zIndex: 1000,
      display: 'flex', alignItems: 'center',
      background: scrolled ? 'rgba(10,14,26,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,255,163,0.08)' : '1px solid transparent',
      transition: 'all 0.3s',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#hero" onClick={(e) => handleClick(e, 'hero')} style={{
          fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, fontSize: '1.1rem',
          color: '#00ffa3', textDecoration: 'none',
        }}>
          <span style={{ color: '#00ffa3' }}>&lt;</span>OB<span style={{ color: '#00ffa3' }}> /&gt;</span>
        </a>
        <button className={`hm${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu" style={{
            display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none',
            cursor: 'pointer', padding: 4, zIndex: 1100,
          }}>
          <span style={{ display: 'block', width: 24, height: 2, background: '#e2e8f0', borderRadius: 2, transition: 'all 0.3s' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#e2e8f0', borderRadius: 2, transition: 'all 0.3s' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#e2e8f0', borderRadius: 2, transition: 'all 0.3s' }} />
        </button>
        <ul className={`nl${menuOpen ? ' open' : ''}`} style={{
          display: 'flex', gap: 6, listStyle: 'none', margin: 0, padding: 0, alignItems: 'center',
        }}>
          {navItems.map(id => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => handleClick(e, id)}
                className={active === id ? 'nav-active' : ''} style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: '0.78rem', padding: '6px 14px',
                  borderRadius: 20, textDecoration: 'none', transition: 'all 0.2s',
                  color: active === id ? '#00ffa3' : 'rgba(255,255,255,0.55)',
                  background: active === id ? 'rgba(0,255,163,0.1)' : 'transparent',
                }}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
