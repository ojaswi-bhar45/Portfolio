import { PERSONAL } from '../data/portfolio';

export default function ContactForm() {
  return (
    <form className="contact-form" onSubmit={e => { e.preventDefault(); window.open(PERSONAL.linkedin, '_blank'); }}>
      <div className="form-row">
        <div className="form-group">
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email" />
        </div>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Subject" />
      </div>
      <div className="form-group">
        <textarea placeholder="Your Message" />
      </div>
      <button type="submit" className="btn-submit">
        Send Message {'\u2192'}
      </button>
    </form>
  );
}
