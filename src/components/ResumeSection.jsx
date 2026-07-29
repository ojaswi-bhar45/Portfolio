import { EXPERIENCE, EDUCATION } from '../data/portfolio';
import TimelineItem from './TimelineItem';

function firstLetters(str) {
  return str.split(' ').map(w => w[0]).join('').slice(0, 2);
}

export default function ResumeSection() {
  return (
    <section id="resume">
      <h2 className="section-headline">Experience &amp; <span className="accent-word">Education</span></h2>
      <div className="resume-grid">
        <div>
          <p className="resume-column-label">Work Experience</p>
          <div className="timeline">
            {EXPERIENCE.map((item, i) => (
              <TimelineItem
                key={i}
                title={item.company}
                subtitle={item.role}
                year={item.duration}
                logo={firstLetters(item.company)}
                bullets={item.bullets}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="resume-column-label">Education</p>
          <div className="timeline">
            <TimelineItem
              title={EDUCATION.university}
              subtitle={EDUCATION.degree}
              year={EDUCATION.duration}
              logo={firstLetters(EDUCATION.university)}
              gpa={EDUCATION.gpa}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
