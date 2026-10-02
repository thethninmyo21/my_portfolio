import { testimonials } from '../data/experience.js';

export default function Testimonials() {
  return (
    <section className="section" style={{ background:'rgba(15,23,42,0.3)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Endorsements</span>
          <h2>What Colleagues &amp; Clients Say</h2>
          <p>Feedback from engineering leaders, product managers, and founders on collaboration and technical delivery.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div className="testimonial-card" key={t.name}>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={t.avatarStyle}>{t.initials}</div>
                <div className="author-info">
                  <h4>{t.name}</h4>
                  <p>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
