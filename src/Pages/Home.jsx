import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import bgImage from '/Branding1.png';

const ENTRY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSedrQBRVl9iQsvCj-enYqWWXabb-ieJAuYv-PebJK6nXTNNwg/viewform?usp=publish-editor';

const CARDS = [
  { id: 'about',    path: '/about',    num: '01', title: 'ABOUT',    desc: 'Branding Hackathonとは' },
  { id: 'schedule', path: '/schedule', num: '02', title: 'SCHEDULE', desc: '開催概要・アクセス' },
  { id: 'guideline',path: '/guideline',num: '03', title: 'GUIDELINE',desc: '参加に関する案内' },
];

const TICKER = 'BRANDING HACKATHON · RITSUMEIKAN UNIVERSITY · 2026.06.11 → 06.21 · OIC · RiST × RiPPro · ';

const heroContainer = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};
const heroItem = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const Home = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ['0%', '14%']);

  return (
    <div style={{ backgroundColor: 'var(--bg)' }}>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="hero-section">
        <motion.div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          y: bgY, scale: 1.12,
        }} />
        <div className="hero-overlay" />
        <div className="hero-noise" />

        <motion.div
          className="hero-content"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={heroItem} className="hero-eyebrow">
            RITSUMEIKAN UNIVERSITY × OIC ─ 2026
          </motion.p>

          <motion.h1 variants={heroItem} className="hero-title">
            Branding
            <span className="hero-title-blue">Hackathon</span>
          </motion.h1>

          <motion.p variants={heroItem} className="hero-date">
            06.11 <span style={{ opacity: 0.38 }}>→</span> 06.21, 2026
          </motion.p>

          <motion.div variants={heroItem} className="hero-ctas">
            <motion.a
              href={ENTRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              エントリーする <ArrowUpRight size={14} strokeWidth={2.5} />
            </motion.a>
            <motion.button
              className="btn-ghost"
              onClick={() => document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              詳細を見る
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        >
          <div className="scroll-line" />
          <span>SCROLL</span>
        </motion.div>
      </section>

      {/* ── Ticker ────────────────────────────────────────── */}
      <div className="ticker-outer">
        <div className="ticker-track">
          <span className="ticker-text">{TICKER}</span>
          <span className="ticker-text">{TICKER}</span>
        </div>
      </div>

      {/* ── Info Cards ────────────────────────────────────── */}
      <section id="info" className="info-section">
        <div className="section-header">
          <span className="section-num">01</span>
          <p className="section-label">INFORMATION</p>
        </div>
        <div className="cards-grid">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={card.path} className="card">
                <span className="card-num">{card.num}</span>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
                <div className="card-arrow">
                  READ MORE <ArrowRight size={10} strokeWidth={2.5} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Sponsors ──────────────────────────────────────── */}
      <section id="sponsors" className="sponsors-section">
        <div className="section-header">
          <span className="section-num">02</span>
          <p className="section-label">SPONSORS</p>
        </div>
        <motion.p
          className="sponsors-tbd"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          スポンサー情報は順次公開予定です。
        </motion.p>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">Branding <span>Hackathon</span></p>
            <p className="footer-muted">RiST / RiPPro<br />立命館大学 情報理工学部</p>
          </div>
          <div>
            <h4 className="footer-col-title">ORGANIZERS</h4>
            <ul className="footer-links">
              <li>RiST</li>
              <li>RiPPro</li>
              <li>立命館大学 情報理工学部</li>
            </ul>
          </div>
          <div>
            <h4 className="footer-col-title">SOCIAL</h4>
            <ul className="footer-links">
              <li>
                <a href="https://x.com/realrist?s=11&t=A_siZ3q3GkjvsfojOOQrIA" target="_blank" rel="noopener noreferrer" className="footer-link">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rist_rits.sec?igsh=c3FnMWVraTlwYjNq" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copy">
          © 2026 Branding Hackathon Executive Committee. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
