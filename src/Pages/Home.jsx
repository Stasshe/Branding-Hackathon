import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Users, Megaphone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import bgImage from '/Branding1.png';

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const CARDS = [
  { id: 'about', path: '/about', title: 'ABOUT', icon: Users, desc: 'Branding Hackathonとは' },
  { id: 'schedule', path: '/schedule', title: 'SCHEDULE', icon: Calendar, desc: '開催概要・アクセス' },
  { id: 'rule', path: '/guideline', title: 'GUIDELINE', icon: Megaphone, desc: '参加に関する案内' },
];

const ENTRY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSedrQBRVl9iQsvCj-enYqWWXabb-ieJAuYv-PebJK6nXTNNwg/viewform?usp=publish-editor';

const Home = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], ['0%', '20%']);

  const sponsorLogos = [
    { id: 1, src: '/assets/sponsor1.png', name: 'Sponsor A' },
    { id: 2, src: '/assets/sponsor2.png', name: 'Sponsor B' },
    { id: 3, src: '/assets/sponsor3.png', name: 'Sponsor C' },
  ];

  return (
    <div style={{ backgroundColor: '#fff' }}>
      {/* Hero */}
      <section className="hero-section">
        <motion.div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: backgroundY,
            scale: 1.15,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.45)', zIndex: 1 }} />

        <motion.div
          style={{ position: 'relative', zIndex: 2, width: '100%' }}
          initial="hidden"
          animate="visible"
          variants={heroContainer}
        >
          <motion.p
            variants={heroItem}
            style={{ fontSize: '0.75rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.6)', marginBottom: '20px', fontWeight: '700' }}
          >
            RITSUMEIKAN UNIVERSITY × OIC
          </motion.p>
          <motion.h1 className="hero-title" variants={heroItem}>
            Branding<br />
            <span style={{ color: '#0057ff' }}>Hackathon</span>
          </motion.h1>
          <motion.p variants={heroItem} className="hero-sub">
            2026.06.11 — 06.21 | Ritsumeikan OIC
          </motion.p>
          <motion.div variants={heroItem} style={{ marginTop: '48px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <motion.a
              href={ENTRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              エントリーする
              <ArrowRight size={16} strokeWidth={2.5} />
            </motion.a>
            <motion.button
              className="hero-cta-secondary"
              onClick={() => {
                const el = document.getElementById('info');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              詳細を見る
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ position: 'absolute', bottom: '32px', left: '50%', x: '-50%', zIndex: 2, color: 'rgba(255,255,255,0.5)' }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* Cards */}
      <section id="info" style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 8%, 10%)', backgroundColor: '#f8f9fa' }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: '0.7rem', letterSpacing: '0.35em', color: '#999', fontWeight: '700', marginBottom: '48px' }}
        >
          INFORMATION
        </motion.p>
        <div className="cards-grid">
          {CARDS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                id={item.id}
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <Link to={item.path} className="card" style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(0,87,255,0.08)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <Icon size={20} color="#0057ff" />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', fontWeight: '900', color: '#1a1a1a', letterSpacing: '0.05em' }}>{item.title}</h3>
                  <p style={{ color: '#777', lineHeight: '1.7', fontSize: '0.9rem' }}>{item.desc}</p>
                  <div style={{ marginTop: '28px', color: '#0057ff', fontWeight: '700', fontSize: '0.75rem', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    READ MORE <ArrowRight size={13} strokeWidth={2.5} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 8%, 10%)', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: '0.7rem', fontWeight: '900', textAlign: 'center', marginBottom: '56px', color: '#999', letterSpacing: '0.35em' }}
        >
          SPONSORS
        </motion.h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '48px' }}>
          {sponsorLogos.map((logo, i) => (
            <motion.img
              key={logo.id}
              src={logo.src}
              alt={logo.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ opacity: 1, scale: 1.08 }}
              style={{ height: '36px', width: 'auto', filter: 'grayscale(100%)', cursor: 'pointer' }}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: 'clamp(48px, 8vw, 80px) clamp(20px, 8%, 10%) 36px', backgroundColor: '#1a1a1a', color: '#fff' }}>
        <div className="footer-grid">
          <div>
            <p style={{ fontWeight: '900', fontSize: '20px', letterSpacing: '0.05em', marginBottom: '12px' }}>
              Branding <span style={{ color: '#0057ff' }}>Hackathon</span>
            </p>
            <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.8' }}>
              RiST / Rippro<br />
              立命館大学 情報理工学部
            </p>
          </div>

          <div>
            <h4 style={{ color: '#0057ff', marginBottom: '16px', fontSize: '12px', letterSpacing: '0.15em' }}>ORGANIZERS</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#888', fontSize: '13px', lineHeight: '2.2' }}>
              <li>RiST / Rippro</li>
              <li>立命館大学 情報理工学部</li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#0057ff', marginBottom: '16px', fontSize: '12px', letterSpacing: '0.15em' }}>SOCIAL</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', lineHeight: '2.2' }}>
              <li>
                <a href="https://x.com/realrist?s=11&t=A_siZ3q3GkjvsfojOOQrIA" target="_blank" rel="noopener noreferrer" style={{ color: '#888', textDecoration: 'none' }} className="footer-link">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rist_rits.sec?igsh=c3FnMWVraTlwYjNq" target="_blank" rel="noopener noreferrer" style={{ color: '#888', textDecoration: 'none' }} className="footer-link">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '28px', textAlign: 'center' }}>
          <p style={{ color: '#555', fontSize: '11px', letterSpacing: '0.05em' }}>
            © 2026 Branding Hackathon Executive Committee. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
