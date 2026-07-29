import { useState } from 'react';
import { PERSONAL } from '../data/portfolio';
import SkillTile from './SkillTile';

const LANG_FRONTEND = [
  { name: 'JavaScript (ES6+)' }, { name: 'Java' }, { name: 'Python' },
  { name: 'React.js' }, { name: 'HTML5' }, { name: 'CSS3' }, { name: 'Tailwind CSS' },
];

const BACKEND_DB = [
  { name: 'Node.js' }, { name: 'Express.js' }, { name: 'REST APIs' },
  { name: 'WebSockets' }, { name: 'JWT Auth' },
  { name: 'MongoDB' }, { name: 'MySQL' }, { name: 'PostgreSQL' },
];

const DEVOPS_CORE = [
  { name: 'AWS EC2' }, { name: 'Docker' }, { name: 'GitHub Actions (CI/CD)' }, { name: 'Render' },
  { name: 'Git' }, { name: 'GitHub' }, { name: 'Postman' },
  { name: 'Data Structures & Algorithms' }, { name: 'System Design' },
  { name: 'MVC' }, { name: 'RBAC' }, { name: 'Unit Testing' }, { name: 'Code Review' },
];

export default function AboutSection() {
  const [openTiles, setOpenTiles] = useState([false, false, false]);
  const toggleTile = (i) => setOpenTiles(p => { const n = [...p]; n[i] = !n[i]; return n; });

  const headline = `${PERSONAL.title} building digital experiences that make a difference`;
  const half = Math.ceil(PERSONAL.summary.length / 2);
  const para1 = PERSONAL.summary.slice(0, half);
  const para2 = PERSONAL.summary.slice(half);

  return (
    <section id="about" className="active">
      <h2 className="section-headline">{headline}</h2>
      <p className="section-body">{para1.trim()}</p>
      <p className="section-body">{para2.trim()}</p>
      <div className="skill-tiles">
        <SkillTile icon={'\u26A1'} label={'Languages & Frontend'} skills={LANG_FRONTEND} isOpen={openTiles[0]} onToggle={() => toggleTile(0)} />
        <SkillTile icon={'\uD83D\uDCC4'} label={'Backend & Database'} skills={BACKEND_DB} isOpen={openTiles[1]} onToggle={() => toggleTile(1)} />
        <SkillTile icon={'\u2601\uFE0F'} label={'DevOps & Core CS'} skills={DEVOPS_CORE} isOpen={openTiles[2]} onToggle={() => toggleTile(2)} />
      </div>
    </section>
  );
}
