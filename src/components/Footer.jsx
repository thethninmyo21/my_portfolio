import { socials } from './Hero.jsx';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-socials">
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener" className="social-btn" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
        <p className="footer-copy">&copy; 2026 Thet Hnin Myo · Yangon, Myanmar · All rights reserved.</p>
      </div>
    </footer>
  );
}
