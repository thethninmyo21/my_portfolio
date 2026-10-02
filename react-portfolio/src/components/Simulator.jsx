import { useState, useEffect, useRef } from 'react';

/* ── Mini App: GGI Insurance ── */
function AppGGI() {
  return (
    <div className="mini-app-view active" id="app-ggi">
      <div className="app-screen-header">
        <div>
          <div style={{ fontSize:'0.65rem', color:'var(--text-muted)' }}>GGI Nippon Life</div>
          <h3>Policy Portal</h3>
        </div>
        <div className="badge badge-emerald" style={{ padding:'0.15rem 0.45rem', fontSize:'0.65rem' }}>Active</div>
      </div>
      {/* Card */}
      <div style={{ background:'linear-gradient(135deg,#0284c7 0%,#0369a1 100%)', borderRadius:16, padding:'1rem', color:'white', display:'flex', flexDirection:'column', gap:'0.6rem', boxShadow:'0 8px 20px rgba(2,132,199,0.3)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', fontSize:'0.65rem', opacity:0.85 }}>
          <span>POLICY #GGI-992014</span><span>Comprehensive Life</span>
        </div>
        <div style={{ fontSize:'1.35rem', fontWeight:800, fontFamily:'var(--font-mono)' }}>$50,000.00</div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'0.68rem', borderTop:'1px solid rgba(255,255,255,0.2)', paddingTop:'0.4rem' }}>
          <span>Next Premium: Nov 15</span>
          <span style={{ background:'rgba(255,255,255,0.2)', padding:'2px 6px', borderRadius:4 }}>Annual</span>
        </div>
      </div>
      {/* Actions */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.5rem' }}>
        {[['🧮','Calculator'],['📝','File Claim'],['📅','Book Advisor']].map(([icon, label]) => (
          <button key={label} className="wallet-btn" style={{ padding:'0.6rem 0.2rem' }}>
            <span style={{ fontSize:'1rem' }}>{icon}</span>
            <span style={{ fontSize:'0.62rem' }}>{label}</span>
          </button>
        ))}
      </div>
      {/* Benefits */}
      <div style={{ display:'flex', flexDirection:'column', gap:'0.4rem' }}>
        <div style={{ fontSize:'0.72rem', fontWeight:700, color:'var(--text-secondary)' }}>Covered Benefits</div>
        {[
          { icon:'🏥', title:'Critical Care Rider', sub:'Full cashless hospital access', right: <span style={{ color:'var(--accent-emerald)', fontWeight:'bold' }}>Covered</span> },
          { icon:'📄', title:'Policy Document PDF', sub:'Verified digital e-copy', right: <button className="btn btn-outline btn-sm" style={{ padding:'2px 6px', fontSize:'0.6rem' }}>View</button> },
        ].map(item => (
          <div key={item.title} style={{ background:'#141b2b', padding:'0.5rem', borderRadius:10, display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'0.72rem' }}>
            <div style={{ display:'flex', gap:'0.5rem', alignItems:'center' }}>
              <span>{item.icon}</span>
              <div>
                <div style={{ fontWeight:600 }}>{item.title}</div>
                <div style={{ fontSize:'0.6rem', color:'var(--text-muted)' }}>{item.sub}</div>
              </div>
            </div>
            {item.right}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Mini App: Fabrix Fashion ── */
function AppFabrix() {
  const [pts, setPts] = useState(2450);

  return (
    <div className="mini-app-view active" id="app-fabrix">
      <div className="app-screen-header">
        <div>
          <div style={{ fontSize:'0.65rem', color:'var(--text-muted)' }}>Fabrix Member Club</div>
          <h3>Fabrix Fashion</h3>
        </div>
        <div className="badge" style={{ background:'rgba(244,63,94,0.15)', color:'#f43f5e', borderColor:'rgba(244,63,94,0.3)', fontSize:'0.65rem', padding:'0.15rem 0.45rem' }}>VIP Gold</div>
      </div>
      <div style={{ background:'linear-gradient(135deg,#881337 0%,#be123c 100%)', borderRadius:16, padding:'1rem', color:'white', display:'flex', flexDirection:'column', gap:'0.5rem', boxShadow:'0 8px 20px rgba(190,18,60,0.3)' }}>
        <div style={{ fontSize:'0.65rem', textTransform:'uppercase', letterSpacing:1, opacity:0.85 }}>Reward Points Balance</div>
        <div style={{ fontSize:'1.45rem', fontWeight:800, fontFamily:'var(--font-mono)' }}>{pts.toLocaleString()} <span style={{ fontSize:'0.8rem', fontWeight:500 }}>PTS</span></div>
        <div style={{ background:'white', borderRadius:8, padding:6, display:'flex', flexDirection:'column', alignItems:'center', gap:2, marginTop:2 }}>
          <div style={{ height:22, width:'85%', background:'repeating-linear-gradient(90deg,#000,#000 2px,transparent 2px,transparent 4px,#000 4px,#000 7px,transparent 7px,transparent 9px)' }}></div>
          <div style={{ fontSize:'0.58rem', color:'#1e293b', fontFamily:'var(--font-mono)', letterSpacing:2 }}>FBX-9482-1082</div>
        </div>
      </div>
      <div style={{ display:'flex', gap:'0.5rem' }}>
        <button className="btn btn-primary btn-sm" style={{ flex:1, borderRadius:10, fontSize:'0.72rem', padding:'0.5rem' }}
          onClick={() => setPts(p => Math.max(0, p - 500))}>🎁 Redeem 500 Pts</button>
        <button className="btn btn-outline btn-sm" style={{ flex:1, borderRadius:10, fontSize:'0.72rem', padding:'0.5rem' }}
          onClick={() => setPts(p => p + 100)}>+ Add Purchase</button>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:'0.4rem' }}>
        <div style={{ fontSize:'0.72rem', fontWeight:700, color:'var(--text-secondary)' }}>Recent Purchases</div>
        {[['Junction City Store','Invoice #INV-8831','+180 Pts'],['Myanmar Plaza Store','Invoice #INV-7740','+320 Pts']].map(([name, inv, pts]) => (
          <div key={inv} style={{ background:'#141b2b', padding:'0.5rem', borderRadius:10, display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'0.7rem' }}>
            <div>
              <div style={{ fontWeight:600 }}>{name}</div>
              <div style={{ fontSize:'0.6rem', color:'var(--text-muted)' }}>{inv}</div>
            </div>
            <span style={{ color:'var(--accent-emerald)', fontWeight:'bold' }}>{pts}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Mini App: PayWave Wallet ── */
function AppWallet() {
  const [balance, setBalance] = useState(14892.40);

  return (
    <div className="mini-app-view active" id="app-wallet">
      <div className="app-screen-header">
        <div>
          <div style={{ fontSize:'0.65rem', color:'var(--text-muted)' }}>Welcome back</div>
          <h3>Thet H. Myo</h3>
        </div>
        <div className="app-avatar">THM</div>
      </div>
      <div className="wallet-card">
        <div className="wallet-balance-label">Total Vault Balance</div>
        <div className="wallet-amount">${balance.toLocaleString('en-US', { minimumFractionDigits:2, maximumFractionDigits:2 })}</div>
        <div style={{ display:'flex', justifyContent:'space-between', fontSize:'0.7rem', opacity:0.85 }}>
          <span>●●●● 8892</span><span>VISA Platinum</span>
        </div>
      </div>
      <div className="wallet-actions">
        {[
          { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>, label:'Send', onClick:() => setBalance(b => b - 50) },
          { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>, label:'Receive', onClick:() => setBalance(b => b + 100) },
          { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>, label:'QR Pay', onClick:() => {} },
          { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>, label:'More', onClick:() => {} },
        ].map(btn => (
          <button key={btn.label} className="wallet-btn" onClick={btn.onClick}>
            {btn.icon}<span>{btn.label}</span>
          </button>
        ))}
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem', marginTop:'0.25rem' }}>
        <div style={{ fontSize:'0.72rem', fontWeight:700, color:'var(--text-secondary)' }}>Recent Transactions</div>
        <div style={{ background:'#141b2b', padding:'0.5rem 0.6rem', borderRadius:10, display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'0.72rem' }}>
          <div style={{ display:'flex', gap:'0.5rem', alignItems:'center' }}>
            <div style={{ width:24, height:24, borderRadius:6, background:'rgba(97,218,251,0.15)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--react-blue)' }}>⚡</div>
            <div><div style={{ fontWeight:600 }}>Apple Store</div><div style={{ fontSize:'0.6rem', color:'var(--text-muted)' }}>Subscription</div></div>
          </div>
          <span style={{ fontWeight:700, color:'#f43f5e' }}>-$14.99</span>
        </div>
        <div style={{ background:'#141b2b', padding:'0.5rem 0.6rem', borderRadius:10, display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'0.72rem' }}>
          <div style={{ display:'flex', gap:'0.5rem', alignItems:'center' }}>
            <div style={{ width:24, height:24, borderRadius:6, background:'rgba(16,185,129,0.15)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--accent-emerald)' }}>💰</div>
            <div><div style={{ fontWeight:600 }}>Stripe Payout</div><div style={{ fontSize:'0.6rem', color:'var(--text-muted)' }}>Contract Work</div></div>
          </div>
          <span style={{ fontWeight:700, color:'var(--accent-emerald)' }}>+$1,450.00</span>
        </div>
      </div>
    </div>
  );
}

/* ── Phone Frame ── */
function PhoneFrame({ activeApp, isAndroid, notifVisible, notifMsg }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(`${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  const appComponents = { ggi: <AppGGI />, fabrix: <AppFabrix />, wallet: <AppWallet /> };

  return (
    <div className={`smartphone-frame${isAndroid ? ' android' : ''}`} id="phone-frame">
      {!isAndroid && (
        <div className="phone-island">
          <div className="camera-lens" />
        </div>
      )}
      <div className="phone-status-bar">
        <span>{time}</span>
        <div className="status-icons">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z"/></svg>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
          <svg width="16" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="18" height="10" rx="2"/><line x1="22" y1="11" x2="22" y2="13" stroke="currentColor" strokeWidth="2"/></svg>
        </div>
      </div>

      {/* Push Notification Toast */}
      <div className={`simulated-notification${notifVisible ? ' show' : ''}`}>
        <div className="notif-icon">🛡️</div>
        <div className="notif-content">
          <h5>GGI Mobile Notification</h5>
          <p>{notifMsg}</p>
        </div>
      </div>

      {/* Screen */}
      <div className="phone-screen">
        {appComponents[activeApp]}
      </div>

      {/* Bottom Nav */}
      <div className="phone-bottom-nav">
        {[
          { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>, label:'Home' },
          { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, label:'Explore' },
          { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, label:'Profile' },
        ].map((n, i) => (
          <div key={n.label} className={`phone-nav-item${i === 0 ? ' active' : ''}`}>
            {n.icon}<span>{n.label}</span>
          </div>
        ))}
      </div>

      <div className="phone-home-indicator" />
    </div>
  );
}

/* ── Main Simulator Section ── */
const APPS = [
  { id:'ggi',    icon:'🛡️', iconStyle:{ background:'rgba(56,189,248,0.2)', color:'#38bdf8' }, title:'GGI Insurance Mobile', desc:'Policy management, premium simulator & claims engine', notif:"Your Life Insurance Policy #GGI-8890 is active & verified." },
  { id:'fabrix', icon:'✨', iconStyle:{ background:'rgba(244,63,94,0.2)',   color:'#fb7185' }, title:'Fabrix Fashion Loyalty', desc:'Dynamic QR member pass, point balance & reward redemptions', notif:'Your Fabrix VIP Tier has been upgraded! Enjoy exclusive rewards.' },
  { id:'wallet', icon:'💳', iconStyle:{ background:'rgba(99,102,241,0.2)',  color:'#818cf8' }, title:'PayWave Fintech Wallet', desc:'Biometric auth, instant funds transfer & encrypted vault', notif:'Incoming transfer of $1,450.00 from Stripe Payout received.' },
];

export default function Simulator() {
  const [activeApp, setActiveApp]       = useState('ggi');
  const [isAndroid, setIsAndroid]       = useState(false);
  const [notifVisible, setNotifVisible] = useState(false);
  const [notifMsg, setNotifMsg]         = useState(APPS[0].notif);
  const timerRef = useRef(null);

  const triggerNotif = () => {
    const app = APPS.find(a => a.id === activeApp);
    setNotifMsg(app.notif);
    setNotifVisible(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setNotifVisible(false), 3800);
  };

  return (
    <section className="section simulator-section" id="simulator">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Interactive Sandbox</span>
          <h2>Try Live Mini-Apps In Simulated Device</h2>
          <p>Interact with the live mobile frame below to experience real React Native UI patterns, gestures, dynamic state, and push alerts directly in your browser.</p>
        </div>

        <div className="simulator-container">
          {/* Left: Controls */}
          <div className="simulator-info">
            <h3 style={{ fontSize:'1.4rem' }}>Select an App Experience</h3>
            <p>Each view demonstrates different mobile architecture challenges — from crypto wallet balances to real-time fitness step counters and shopping carts.</p>

            <div className="simulator-controls">
              <div className="app-selector-group">
                {APPS.map(app => (
                  <div
                    key={app.id}
                    className={`app-select-btn${activeApp === app.id ? ' active' : ''}`}
                    onClick={() => setActiveApp(app.id)}
                  >
                    <div className="app-btn-icon" style={app.iconStyle}>{app.icon}</div>
                    <div className="app-btn-details">
                      <h4>{app.title}</h4>
                      <p>{app.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="device-toolbar">
                <div className="platform-switch">
                  <button className={`platform-btn${!isAndroid ? ' active' : ''}`} onClick={() => setIsAndroid(false)}>iOS Frame</button>
                  <button className={`platform-btn${isAndroid  ? ' active' : ''}`} onClick={() => setIsAndroid(true)}>Android</button>
                </div>
                <button className="notify-trigger-btn" onClick={triggerNotif}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                  Send Test Push
                </button>
              </div>
            </div>
          </div>

          {/* Right: Phone */}
          <PhoneFrame
            activeApp={activeApp}
            isAndroid={isAndroid}
            notifVisible={notifVisible}
            notifMsg={notifMsg}
          />
        </div>
      </div>
    </section>
  );
}
