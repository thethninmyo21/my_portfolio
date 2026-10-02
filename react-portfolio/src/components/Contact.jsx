import { useState } from 'react';

const GHIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.05.138 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>;
const LIIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.75S5.53 3.23 6.5 3.23s1.75.79 1.75 1.75-.78 1.75-1.75 1.75zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77C14.4 7.21 20 7.03 20 12.41V19z"/></svg>;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'new-app', message: '' });
  const [sent, setSent] = useState(false);

  const set = e => setForm(f => ({ ...f, [e.target.id]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: 'new-app', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-label">Contact</div>
        <h2 className="section-title">Let&apos;s Work Together</h2>
        <p className="section-sub">Available for senior roles, contract work, and architectural consulting. I respond within 24 hours.</p>

        <div className="contact-wrap">
          {/* Info */}
          <div className="contact-info">
            <div>
              <h3>Direct Contact</h3>
              <p style={{ marginTop: '0.5rem' }}>Reach out via email or connect on socials. I&apos;m open to remote opportunities worldwide.</p>
            </div>

            <a href="mailto:thethninmyo.dev@gmail.com" className="contact-item">
              <div className="ci-icon">✉</div>
              <div>
                <div className="ci-label">Email</div>
                <div className="ci-val">thethninmyo.dev@gmail.com</div>
              </div>
            </a>

            <div className="contact-item">
              <div className="ci-icon">📍</div>
              <div>
                <div className="ci-label">Location & Timezone</div>
                <div className="ci-val">Remote · GMT+6:30</div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.6rem', fontWeight: 600 }}>Social Profiles</div>
              <div className="socials">
                {[
                  { href: 'https://github.com',   label: 'GitHub',   icon: <GHIcon /> },
                  { href: 'https://linkedin.com', label: 'LinkedIn', icon: <LIIcon /> },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener" className="social-icon" aria-label={s.label}>{s.icon}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="form-card">
            <form className="form" onSubmit={submit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Alex Morgan" required value={form.name} onChange={set} />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="alex@company.com" required value={form.email} onChange={set} />
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">Project Type</label>
                <select id="subject" value={form.subject} onChange={set}>
                  <option value="new-app">New React Native App</option>
                  <option value="migration">New Architecture Migration</option>
                  <option value="audit">Performance Audit</option>
                  <option value="role">Full-Time / Contract Role</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell me about your project, platforms, timeline, and goals..." required value={form.message} onChange={set} />
              </div>

              <button type="submit" className="form-btn">
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>

              {sent && (
                <div className="toast">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  Message sent! I&apos;ll reply within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
