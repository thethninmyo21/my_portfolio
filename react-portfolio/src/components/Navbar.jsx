import { useEffect, useState } from 'react';

const I = {
  home:      <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
  user:      <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
  wrench:    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
  briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
  folder:    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />,
  phone:     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.45-1.27a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92z" />,
};

const links = [
  { href: '#home',       label: 'Home',       icon: 'home' },
  { href: '#about',      label: 'About',      icon: 'user' },
  { href: '#skills',     label: 'Skills',     icon: 'wrench' },
  { href: '#experience', label: 'Experience', icon: 'briefcase' },
  { href: '#projects',   label: 'Projects',   icon: 'folder' },
  { href: '#contact',    label: 'Contact',    icon: 'phone' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const NavLink = ({ l, onClick }) => (
    <a href={l.href} className="nav-link" onClick={onClick}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {I[l.icon]}
      </svg>
      {l.label}
    </a>
  );

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo">
            <strong>THET</strong>
            <span>Portfolio</span>
          </a>
          <ul className="nav-links">
            {links.map(l => <li key={l.href}><NavLink l={l} /></li>)}
          </ul>
          <button className="burger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            <span className={open ? 'open' : ''} />
            <span className={open ? 'open' : ''} />
            <span className={open ? 'open' : ''} />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map(l => <NavLink key={l.href} l={l} onClick={() => setOpen(false)} />)}
      </div>
    </>
  );
}
