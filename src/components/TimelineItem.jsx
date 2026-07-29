export default function TimelineItem({ title, subtitle, year, logo, bullets, gpa }) {
  return (
    <div className="timeline-item">
      <div className="timeline-logo">{logo}</div>
      <div className="timeline-title">{title}</div>
      {subtitle && <div className="timeline-sub">{subtitle}</div>}
      <div className="timeline-year">{year}</div>
      {gpa && <div className="timeline-gpa">GPA: {gpa}</div>}
      {bullets && bullets.length > 0 && (
        <ul className="timeline-bullets">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </div>
  );
}
