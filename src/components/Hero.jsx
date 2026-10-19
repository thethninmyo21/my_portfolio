import { useEffect, useState } from "react";
import profileImg from '../assets/images/profile.jpg';
import { motion } from "framer-motion";

export const GHIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.05.138 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" /></svg>
);

export const LIIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.75S5.53 3.23 6.5 3.23s1.75.79 1.75 1.75-.78 1.75-1.75 1.75zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77C14.4 7.21 20 7.03 20 12.41V19z" /></svg>
);

export const MailIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);

export const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.45-1.27a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92z" /></svg>
);

export const socials = [
  { href: 'https://github.com/thethninmyo21/thethninmyo21', label: 'GitHub', icon: <GHIcon /> },
  { href: 'https://www.linkedin.com/in/thet-hnin-myo-11bba723b', label: 'LinkedIn', icon: <LIIcon /> },
  { href: 'mailto:thethninmyo21@gmail.com', label: 'Email', icon: <MailIcon /> },
  { href: 'tel:+959794412389', label: 'Phone', icon: <PhoneIcon /> },
];

export default function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="container hero-container">
          <div className="hero-content">
            {/* <h1 className="hero-title">
              Hello, I&apos;m {' '}
              <span className="hero-name">Thet Hnin Myo</span>.
            </h1> */}
            <SlideInText text="Hello, I'm Thet Hnin Myo." />


            {/* <div className="container"> */}
            {/* <h2 className="section-title">About <span className="accent">ME</span></h2> */}
            <p className="about-text">
              I am a Senior React Native Developer based in Yangon, Myanmar, with 7 years of experience
              building cross-platform mobile applications for iOS and Android using React Native,
              TypeScript, and JavaScript. I have developed enterprise and consumer applications,
              integrated REST APIs, implemented Redux Toolkit and RTK Query, and published apps to the
              App Store and Google Play. I am a strong team collaborator with experience working on
              projects for Singapore-based clients.
            </p>
            {/* </div> */}
          </div>
          <div className="hero-image-wrapper">
            <img src={profileImg} alt="Thet Hnin Myo" className="hero-profile-img" />
          </div>
        </div>

      </section>
    </>
  );
}

const SlideInText = ({
  text = "Hello, I'm Thet Hnin Myo",
  interval = 3000,
}) => {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <h1 className="hero-title">
        {text.split('').map((char, i) => (
          <motion.span
            key={`${cycle}-${i}`}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.03, ease: "easeOut" }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
    </h1>
  );
};