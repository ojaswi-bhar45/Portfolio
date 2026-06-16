import { useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const SECTION_IDS = ['hero', 'stats', 'skills', 'experience', 'projects', 'education', 'achievements', 'contact'];
const NAV_ITEMS = SECTION_IDS.filter((s) => s !== 'hero');

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container">
        <span className="nav-logo">ojas<span>.dev</span></span>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                onClick={(e) => handleNavClick(e, id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
