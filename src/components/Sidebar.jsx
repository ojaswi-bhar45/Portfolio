import { useState } from 'react';
import { AboutIcon, ResumeIcon, PortfolioIcon, BlogIcon, ContactIcon } from './NavIcons';
import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = [
  { id: 'about', label: 'About', Icon: AboutIcon },
  { id: 'resume', label: 'Resume', Icon: ResumeIcon },
  { id: 'portfolio', label: 'Portfolio', Icon: PortfolioIcon },
  { id: 'blog', label: 'Blog', Icon: BlogIcon },
  { id: 'contact', label: 'Contact', Icon: ContactIcon },
];

export default function Sidebar({ active, onNav }) {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    onNav(id);
    setOpen(false);
  };

  return (
    <>
      <button className={`sidebar-mobile-toggle${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        <span /><span /><span />
      </button>
      <aside className={`sidebar${open ? ' open' : ''}`}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
          {NAV_ITEMS.map(({ id, label, Icon }) => (
            <button
              key={id}
              className={`nav-item${active === id ? ' active' : ''}`}
              onClick={() => handleNav(id)}
              data-tooltip={label}
              aria-label={label}
            >
              <Icon />
            </button>
          ))}
        </div>
        <ThemeToggle />
      </aside>
    </>
  );
}
