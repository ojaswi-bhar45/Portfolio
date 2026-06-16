import { personal } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; 2026 <span className="cyan">{personal.firstName} {personal.lastName}</span> &middot; Built with <span className="cyan">React</span>
        </p>
      </div>
    </footer>
  );
}
