export default function ProjectCard({ name, subtitle, icon, stack, liveUrl, githubUrl }) {
  return (
    <div className="project-card">
      <div className="project-thumb">{icon || '\uD83D\uDCC1'}</div>
      <div className="project-body">
        <h3 className="project-title">{name}</h3>
        {subtitle && <p className="project-subtitle">{subtitle}</p>}
        {stack && stack.length > 0 && (
          <div className="project-stack">
            {stack.map(t => <span key={t} className="project-stack-tag">{t}</span>)}
          </div>
        )}
        <div className="project-actions">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn-live">
              {'\u2192'} Live Demo
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              GitHub {'\u2192'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
