import { education, languages } from '../data/projects.js';

const GradIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10 12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default function Education() {
  return (
    <section className="section section-tight" id="education">
      <div className="container">
        <h2 className="section-title">Education <span className="accent">&amp;</span> Languages</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-card-head">
              <div className="skill-card-icon"><GradIcon /></div>
              <h3>Education</h3>
            </div>
            <div className="edu-block">
              <div className="edu-degree">{education.degree}</div>
              <div className="edu-school">{education.school}</div>
              <div className="tl-date" style={{ marginTop: '0.6rem' }}>{education.date}</div>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-head">
              <div className="skill-card-icon"><GlobeIcon /></div>
              <h3>Languages</h3>
            </div>
            <div className="skill-chips">
              {languages.map(l => (
                <span className="skill-chip" key={l.name}>{l.name} — {l.level}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
