// src/pages/Home.jsx

import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
  }
};

const Home = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 200]);

  const sponsorLogos = [
    { id: 1, src: "/assets/sponsor1.png", name: "Sponsor A" },
    { id: 2, src: "/assets/sponsor2.png", name: "Sponsor B" },
    { id: 3, src: "/assets/sponsor3.png", name: "Sponsor C" },
  ];

  const contents = [
    { 
      id: 'about', 
      title: "ABOUT", 
      desc: "Branding Hackathonとは", 
      detail: "初心者でも参加でき、ハッカソンでの動き方を基礎から学ぶことができるイベントです。チームで協力し、新しい価値を創造する10日間を体験してください。" 
    },
    { 
      id: 'schedule', 
      title: "SCHEDULE", 
      desc: "開催概要・アクセス", 
      detail: "【日時】2026/06/11 ~ 2026/06/20 \n【場所】立命館大学 大阪茨木キャンパス（大阪府茨木市岩倉町2-150） \nJR茨木駅から徒歩約5分。最新の設備が整ったキャンパスで開催します。" 
    },
    { 
      id: 'rule', 
      title: "RULE", 
      desc: "参加規約・ルール", 
      detail: "【参加資格】学生・社会人問わず参加可能。個人またはチーム(最大4名)での応募が可能です。\n\n【開発規定】期間中にゼロから作成したプロダクトが対象です。" 
    }
  ];

  const DetailPage = ({ content }) => (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
        backgroundColor: '#fff', zIndex: 3000, padding: '100px 10%', color: '#333',
        overflowY: 'auto'
      }}
    >
      <button 
        onClick={() => setSelectedPage(null)}
        style={{ marginBottom: '40px', border: 'none', background: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', color: '#0057ff' }}
      >
        ← BACK TO HOME
      </button>
      <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: '#0057ff', marginBottom: '30px' }}>
        {content.title}
      </h1>
      <div style={{ fontSize: '1.2rem', lineHeight: '2', color: '#444', maxWidth: '800px', whiteSpace: 'pre-wrap' }}>
        {content.detail}
      </div>
    </motion.div>
  );

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <AnimatePresence>
        {selectedPage && <DetailPage content={selectedPage} />}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%', position: 'relative', color: '#fff', overflow: 'hidden', backgroundColor: '#1a1a1a' }}>
        <motion.div 
          style={{ 
            position: 'absolute', top: 0, left: 0, width: '100%', height: '120%', zIndex: 0,
            y: backgroundY, 
            backgroundImage: 'url("/Branding1.png")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }} 
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}></div>

        <motion.div style={{ position: 'relative', zIndex: 2 }} initial="hidden" animate="visible" variants={containerVariants}>
          <motion.h1 
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: '900', margin: 0, lineHeight: 0.9, letterSpacing: '-0.02em' }} 
            variants={itemVariants}
          >
            Branding <br /> 
            <span style={{ color: '#0057ff' }}>Hackathon</span>
          </motion.h1>
          <motion.p 
            style={{ fontSize: '1.2rem', marginTop: '40px', fontWeight: '500', letterSpacing: '0.2em' }} 
            variants={itemVariants}
          >
            2026.06.11 - 06.20 | Ritsumeikan OIC
          </motion.p>
        </motion.div>
      </section>

      {/* CARDS SECTION */}
      <section style={{ padding: '120px 10%', backgroundColor: '#f8f9fa' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {contents.map((item) => (
            <motion.div 
              id={item.id}
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedPage(item)}
              style={{ 
                backgroundColor: '#fff', padding: '60px 40px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', 
                cursor: 'pointer', borderBottom: '4px solid transparent', transition: 'all 0.3s ease' 
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: '900', color: '#1a1a1a' }}>{item.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.8' }}>{item.desc}</p>
              <div style={{ marginTop: '30px', color: '#0057ff', fontWeight: 'bold', fontSize: '0.8rem' }}>READ MORE →</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SPONSORS SECTION */}
      <section id="sponsors" style={{ padding: '100px 10%', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: '900', textAlign: 'center', marginBottom: '60px', color: '#999', letterSpacing: '0.3em' }}>SPONSORS</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '60px', opacity: 0.8 }}>
          {sponsorLogos.map((logo) => (
            <motion.img 
              key={logo.id}
              src={logo.src} 
              alt={logo.name}
              whileHover={{ scale: 1.1, opacity: 1 }}
              style={{ height: '40px', width: 'auto', filter: 'grayscale(100%)', transition: 'all 0.3s ease', cursor: 'pointer' }} 
            />
          ))}
        </div>
      </section>

      {/* CLEAN FOOTER */}
      <footer style={{ padding: '80px 10% 40px', backgroundColor: '#1a1a1a', color: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div>
            <h4 style={{ color: '#0057ff', marginBottom: '20px', fontSize: '14px' }}>ORGANIZERS</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#999', fontSize: '13px', lineHeight: '2' }}>
              <li>RiPPro / RiST</li>
              <li>立命館大学 情報理工学部</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#0057ff', marginBottom: '20px', fontSize: '14px' }}>SOCIAL</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#999', fontSize: '13px', lineHeight: '2' }}>
              <li>X (Twitter)</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #333', paddingTop: '40px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: '11px' }}>
            © 2026 Branding Hackathon Executive Committee.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;