const CodeIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const LayersIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const cards = [
  {
    icon: <CodeIcon />,
    title: 'Programming',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Dart (Flutter)'],
  },
  {
    icon: <LayersIcon />,
    title: 'Frameworks & Libraries',
    skills: [
      'React Native (CLI / Expo)',
      'React.js',
      'React Navigation',
      'Redux Toolkit',
      'RTK Query',
      'Tailwind CSS',
      'Styled Components',
      'Firebase',
    ],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {cards.map(c => (
            <div className="skill-card" key={c.title}>
              <div className="skill-card-head">
                <div className="skill-card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
              </div>
              <div className="skill-chips">
                {c.skills.map(s => <span className="skill-chip" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
