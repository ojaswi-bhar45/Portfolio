import { PROJECTS } from '../data/portfolio';
import ProjectCard from './ProjectCard';

export default function PortfolioSection() {
  return (
    <section id="portfolio">
      <h2 className="section-headline">Featured <span className="accent-word">Projects</span></h2>
      <div className="project-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} name={p.name} subtitle={p.subtitle} icon={p.icon} stack={p.stack} liveUrl={p.liveUrl} githubUrl={p.githubUrl} />
        ))}
      </div>
    </section>
  );
}
