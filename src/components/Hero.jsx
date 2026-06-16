import { personal } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section id="hero" className="hero">
      <div className="container" ref={ref}>
        <span className="hero-tag">hello.world()</span>
        <h1 className="hero-name">
          {personal.firstName} <span className="accent">{personal.lastName}</span>
        </h1>
        <p className="hero-title">{personal.title}</p>
        <p className="hero-location">{personal.location}</p>
        <p className="hero-summary">{personal.summary}</p>
        <div className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </button>
          <a
            className="btn btn-outline"
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
