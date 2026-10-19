const cards = [
  {
    icon: '🏛️',
    title: 'Feature-First Layered Architecture',
    desc: 'Dividing codebases by business domain rather than technical layers for seamless scaling across large distributed engineering teams.',
    items: [
      'Atomic UI Design Tokens with NativeWind / Tamagui',
      'Isolated Domain Services & Custom React Hooks',
      'Decoupled API Client with automatic token refresh',
      'Centralized Navigation Routes with Typed Deep-Links',
    ],
  },
  {
    icon: '⚡',
    title: 'Hermes & JS Thread Optimization',
    desc: 'Keeping JavaScript execution under 16ms to eliminate all UI stuttering, dropped frames, and memory overhead.',
    items: [
      'Offloading gesture calculations to UI Thread via Worklets',
      'Memory profiling and unmounting heavy components',
      'Smart image caching and progressive WebP loading',
      'Hermes bytecode pre-compilation for instant cold starts',
    ],
  },
  {
    icon: '🛡️',
    title: 'Enterprise Security & Compliance',
    desc: 'Protecting user data with hardware-backed encryption, secure authentication, and defense-in-depth protocols.',
    items: [
      'Biometric FaceID / Fingerprint with Secure Enclave',
      'SSL Pinning & Root / Jailbreak Detection guards',
      'Encrypted MMKV storage for tokens & keys',
      'Zero hardcoded secrets; dynamic runtime vaults',
    ],
  },
];

export default function Architecture() {
  return (
    <section className="section" id="architecture">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Engineering Philosophy</span>
          <h2>Architecture &amp; Code Quality Standards</h2>
          <p>Building clean, scalable, maintainable mobile codebases with separation of concerns, strict type safety, and automated quality gates.</p>
        </div>
        <div className="arch-grid">
          {cards.map(c => (
            <div className="arch-card" key={c.title}>
              <div className="arch-card-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <ul>
                {c.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
