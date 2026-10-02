import { projects, moreApps } from '../data/projects.js';

function Mock({ m }) {
  return (
    <div className="mock">
      <div className="mock-statusbar"><i /><i /><i /></div>
      <div className="mock-header">
        <span className="mock-name">{m.header}</span>
        <span className="mock-status" style={{ color: m.status.color }}>{m.status.label}</span>
      </div>
      <div className="mock-hero" style={m.card.style}>
        {m.card.label && <div className="mock-label">{m.card.label}</div>}
        <div className="mock-value">{m.card.value}</div>
        {m.card.tag && <div className="mock-tag">{m.card.tag}</div>}
      </div>
      <div className="mock-rows">
        {m.items.map(it => (
          <div className="mock-row" key={it.label}>
            <span>{it.icon}</span>
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map(p => (
            <article className="proj-card" key={p.id}>
              <div className="proj-preview"><Mock m={p.mockup} /></div>
              <div className="proj-body">
                <div className="proj-platform">{p.platform}</div>
                <h3>{p.title}</h3>
                <div className="proj-role">{p.role}</div>
                <div className="proj-chips">
                  {p.chips.map(c => <span className="proj-chip" key={c}>{c}</span>)}
                </div>
                {p.links.length > 0 && (
                  <div className="proj-links">
                    {p.links.map(l => (
                      <a key={l.label} className="proj-link" href={l.href} target="_blank" rel="noopener">{l.label}</a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="more-apps">
          <div className="more-apps-title">More shipped apps</div>
          <div className="more-apps-row">
            {moreApps.map(a => (
              <span className="skill-chip" key={a.name}>
                {a.name} <em>· {a.stack}</em>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
