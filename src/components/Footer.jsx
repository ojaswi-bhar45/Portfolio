export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(0,255,163,0.06)', padding: '32px 0', textAlign: 'center' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <p style={{
          fontFamily: "'JetBrains Mono',monospace", fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)',
        }}>
          &copy; 2026 <span style={{ color: '#00ffa3' }}>Ojaswi Bhardwaj</span> &middot; Built with <span style={{ color: '#00ffa3' }}>React</span>
        </p>
      </div>
    </footer>
  );
}
