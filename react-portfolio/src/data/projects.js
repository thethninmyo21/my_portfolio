export const projects = [
  {
    id: 'lions',
    platform: 'Singapore · Lions Befrienders Service Association',
    title: 'Lions Befrienders Ecosystem (I-GOOD / IM-OK)',
    role: 'React Native Developer — UI & API Architecture',
    chips: ['React Native', 'Redux', 'Firebase', 'Figma'],
    links: [],
    mockup: {
      header: 'LB I-GOOD / IM-OK',
      status: { label: '● Singapore', color: 'var(--accent-emerald)' },
      card: {
        style: { background: 'linear-gradient(135deg,#0d9488 0%,#0f766e 100%)', borderRadius: 10, padding: '0.85rem 0.7rem', textAlign: 'center', color: 'white' },
        label: 'Befriender Visits',
        value: '1,240+',
        tag: 'Synced via Firebase',
      },
      items: [
        { icon: '👵', label: 'Elderly & Volunteer Apps' },
        { icon: '🔔', label: 'Reminder Drops & Alerts' },
      ],
    },
  },
  {
    id: 'mandai',
    platform: 'Singapore · Mandai Wildlife Reserve',
    title: 'Incident Management System',
    role: 'Maintenance & Support Engineer — Codebase Handover',
    chips: ['React', 'Redux', 'Firebase', 'RBAC'],
    links: [],
    mockup: {
      header: 'Mandai Reserve IMS',
      status: { label: '● Azure Secured', color: 'var(--accent-emerald)' },
      card: {
        style: { background: 'linear-gradient(135deg,#166534 0%,#14532d 100%)', borderRadius: 10, padding: '0.85rem 0.7rem', textAlign: 'center', color: 'white' },
        label: 'Open Incidents',
        value: 'Role-Based',
        tag: 'Admin · Super User · Junior',
      },
      items: [
        { icon: '🐘', label: 'Wildlife Incident Ops' },
        { icon: '🔐', label: 'Azure OAuth Login' },
      ],
    },
  },
  {
    id: 'ggi',
    platform: 'iOS & Android · App Store & Google Play',
    title: 'GGI Nippon Life Insurance App',
    role: 'Solo React Native Developer — End-to-End Delivery',
    chips: ['React Native', 'REST API', 'Push Notifications'],
    links: [
      { label: 'App Store ↗',   href: 'https://apps.apple.com/us/app/ggi-nippon-life/id6752456749' },
      { label: 'Google Play ↗', href: 'https://play.google.com/store/apps/details?id=com.ggi_mobile.prod' },
    ],
    mockup: {
      header: 'GGI Nippon Life',
      status: { label: '● Production', color: 'var(--accent-emerald)' },
      card: {
        style: { background: 'linear-gradient(135deg,#0284c7 0%,#0369a1 100%)', borderRadius: 10, padding: '0.85rem 0.7rem', textAlign: 'center', color: 'white' },
        label: 'Active Policy Tier',
        value: '$50,000',
        tag: 'Instant Policy Alerts',
      },
      items: [
        { icon: '🛡️', label: 'Policy & Claims Engine' },
        { icon: '📄', label: 'PDF Brochure & E-Docs' },
      ],
    },
  },
  {
    id: 'fabrix',
    platform: 'iOS & Android · App Store & Google Play',
    title: 'Fabrix Mobile Application',
    role: 'Solo React Native Developer — End-to-End Delivery',
    chips: ['React Native', 'Redux Toolkit', 'REST APIs'],
    links: [
      { label: 'App Store ↗',   href: 'https://apps.apple.com/us/app/fabrix-fashion/id6756332826' },
      { label: 'Google Play ↗', href: 'https://play.google.com/store/search?q=fabrix%20fashion&c=apps' },
    ],
    mockup: {
      header: 'Fabrix Member',
      status: { label: '● VIP Member', color: 'var(--accent-rose)' },
      card: {
        style: { background: 'linear-gradient(135deg,#881337 0%,#be123c 100%)', borderRadius: 10, padding: '0.85rem 0.7rem', textAlign: 'center', color: 'white' },
        label: 'Loyalty Rewards',
        value: '2,450 PTS',
        tag: 'Enterprise Workflows',
      },
      items: [
        { icon: '✨', label: 'Synced State Transitions' },
        { icon: '🛍️', label: 'Pixel-Perfect UI Modules' },
      ],
    },
  },
];

export const moreApps = [
  { name: 'Solo POS',        stack: 'Flutter' },
  { name: 'M Highway',       stack: 'React Native' },
  { name: 'King Real Estate', stack: 'React Native' },
  { name: 'Thit San',        stack: 'React Native' },
  { name: 'VJM Member',      stack: 'React Native' },
  { name: 'Mingalar Hinthar', stack: 'React Native' },
  { name: 'Marigold',        stack: 'React Native' },
  { name: 'Mingalar Hospital', stack: 'React Native' },
];

export const education = {
  degree: 'Bachelor of Computer Science (B.C.Sc.)',
  school: 'University of Computer Studies, Taungoo',
  date: '12/2014 — 08/2019',
};

export const languages = [
  { name: 'English',   level: 'Professional Working Proficiency' },
  { name: 'Japanese',  level: 'JLPT N3 Passed' },
];
