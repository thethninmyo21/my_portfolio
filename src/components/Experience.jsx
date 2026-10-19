import { experiences } from '../data/experience.js';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map(exp => (
            <div className="tl-item" key={exp.company}>
              <div className="tl-dot" />
              <div className="tl-head">
                <div>
                  <h3>{exp.role}</h3>
                  <div className="tl-company">{exp.company}</div>
                </div>
                <span className="tl-date">{exp.date}</span>
              </div>
              <ul className="tl-list">
                {exp.achievements.map(a => <li key={a}>{a}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
