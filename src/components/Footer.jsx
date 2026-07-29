import { PERSONAL } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; 2026 <span className="accent">{PERSONAL.firstName} {PERSONAL.lastName}</span> &middot; Built with <span className="accent">React</span>
      </p>
    </footer>
  );
}
