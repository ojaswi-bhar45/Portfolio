import { personal } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CONTACT_ITEMS = [
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\D/g, '')}` },
  { label: 'LinkedIn', value: 'linkedin.com/in/ojaswi-bhardwaj', href: personal.linkedin },
  { label: 'GitHub', value: 'github.com/ojaswi-bhardwaj', href: personal.github },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact">
      <div className="container fade-section" ref={ref}>
        <span className="section-label">Connect</span>
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-grid">
          {CONTACT_ITEMS.map((c, i) => (
            <div key={i} className="contact-card">
              <span className="contact-label">{c.label}</span>
              {c.href
                ? <a href={c.href} target="_blank" rel="noopener noreferrer" className="contact-value">{c.value}</a>
                : <span className="contact-value">{c.value}</span>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
