export default function SkillTile({ icon, label, skills, isOpen, onToggle }) {
  return (
    <div className={`skill-tile${isOpen ? ' skill-tile--open' : ''}`}>
      <div className="skill-tile-header" onClick={onToggle}>
        <div className="skill-tile-icon">{icon}</div>
        <span className="skill-tile-label">{label}</span>
        <span className="skill-tile-arrow">{isOpen ? '\u25B2' : '\u25BC'}</span>
      </div>
      {isOpen && (
        <div className="skill-chips">
          {skills.map(s => <span key={s.name} className="skill-chip">{s.name}</span>)}
        </div>
      )}
    </div>
  );
}
