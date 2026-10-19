const Atom = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="1.1">
    <circle cx="12" cy="12" r="1.9" fill="#61dafb" stroke="none" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
  </svg>
);

const TypeScript = () => (
  <svg viewBox="0 0 24 24">
    <rect width="24" height="24" rx="4.5" fill="#3178c6" />
    <text x="12" y="16.6" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#fff" fontFamily="Arial, sans-serif">TS</text>
  </svg>
);

const JavaScript = () => (
  <svg viewBox="0 0 24 24">
    <rect width="24" height="24" rx="4.5" fill="#f7df1e" />
    <text x="12" y="16.6" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#222" fontFamily="Arial, sans-serif">JS</text>
  </svg>
);

const Redux = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10.5" fill="#764abc" />
    <path d="M8.2 8.6a2 2 0 1 1 2.2 2.2l3.2 3.9a2 2 0 1 1-1.5 1.2l-3.2-3.9a2 2 0 1 1-.7-3.4z" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="7.6" cy="8.6" r="1.5" fill="#fff" />
    <circle cx="15.9" cy="15.6" r="1.5" fill="#fff" />
    <circle cx="16.4" cy="7.9" r="1.5" fill="#fff" />
    <path d="M8.9 7.6c2.2-1.3 4.6-1.2 6.1.2M15.3 9.4c1.2 2 .9 4.3-.3 5.7" stroke="#fff" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
);

const Firebase = () => (
  <svg viewBox="0 0 24 24">
    <path fill="#ffa000" d="M4 16.7 7.2 3.6c.2-.9 1.4-1 1.8-.2l2 4.1z" />
    <path fill="#ffca28" d="M4 16.7 7.4 2.9c.2-.8 1.3-.9 1.6-.1l4.6 10.8c.4.9-.2 1.9-1.2 1.9z" />
    <path fill="#ff6f00" d="m11.5 11.4 3.4 5.1-6.3 3.2c-.7.4-1.6.1-2-.6-.3-.6-.2-1.3.2-1.8z" />
  </svg>
);

const Tailwind = () => (
  <svg viewBox="0 0 24 24" fill="#06b6d4">
    <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.4.9 1 2 2.1 4.4 2.1 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.4-1-1-2-2.1-4.4-2.1zM7 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.4 1 1 2 2.1 4.4 2.1 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.4-.9-1-1.9-2.1-4.4-2.1z"/>
  </svg>
);

const Figma = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="9" cy="6" r="4" fill="#f24e1e" />
    <circle cx="9" cy="12" r="4" fill="#a259ff" />
    <circle cx="9" cy="18" r="4" fill="#0acf83" />
    <circle cx="15" cy="12" r="4" fill="#ff7262" />
  </svg>
);

const Git = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#f05033" strokeWidth="1.6" strokeLinecap="round">
    <circle cx="6.5" cy="6" r="2.4" fill="#f05033" stroke="none" />
    <circle cx="6.5" cy="18" r="2.4" fill="#f05033" stroke="none" />
    <circle cx="17.5" cy="9" r="2.4" fill="#f05033" stroke="none" />
    <path d="M6.5 8.4v7.2M8.9 6.9c3.5.3 5.6 1.4 6.4 3.3M17.5 11.4c-.5 2.9-3.3 4.6-8.2 5" />
  </svg>
);

const techs = [
  { name: 'React Native', icon: <Atom /> },
  { name: 'TypeScript',   icon: <TypeScript /> },
  { name: 'JavaScript',   icon: <JavaScript /> },
  { name: 'Redux',        icon: <Redux /> },
  { name: 'Firebase',     icon: <Firebase /> },
  { name: 'TailwindCSS',  icon: <Tailwind /> },
  { name: 'Figma',        icon: <Figma /> },
  { name: 'Git',          icon: <Git /> },
];

export default function TechIcons() {
  return (
    <section className="tech-strip" aria-label="Technologies">
      <div className="container">
        <h2 className="tech-heading">Experience <span className="accent">With</span></h2>
        <div className="tech-grid">
          {techs.map(t => (
            <div className="tech-item" key={t.name}>
              {t.icon}
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
