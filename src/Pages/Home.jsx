// src/pages/Home.jsx

import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// ★ 画像をインポート (src/assets または public にある場合でも、Viteが正しく処理します)
// ファイルが src/assets/Branding1.png にあると想定していますが、
// もし public にある場合は import bgImage from '/Branding1.png'; に書き換えてください
import bgImage from '/Branding1.png'; 

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
      detail: `【日時】\n※さらに詳しいタイムテーブルは公式Discordにて発表します。\n\n・6/11(木) 17:00~18:00\n　対面キックオフ（参加困難な場合は要連絡）\n・6/13(土) 12:00\n　開発開始（ハックオフ）\n・6/18(木) 17:00~18:00\n　オンライン中間発表会\n・6/20(土) 12:00\n　コードフリーズ（開発終了）\n・6/21(日)\n　対面最終プレゼンテーション・審査会\n\n【場所】\n立命館大学 大阪茨木キャンパス（OIC）\n大阪府茨木市岩倉町2-150\nJR茨木駅から徒歩約5分。\n\n【MAP】`
    },
    { 
      id: 'rule', 
      title: "GUIDELINE", 
      desc: "参加に関する案内", 
      detail: "【参加資格】\n学生のみ参加可能です。個人での応募（運営側でチームを編成します）、または1チーム3〜4名での応募を受け付けています。\n\n【開発規定】\nハッカソン期間中にゼロから作成されたプロダクトが審査対象となります。\n\n【参加費】\n500円。6/11のキックオフ当日に徴収させていただきます。\n\n【賞について】\nComing Soon... 詳細が決まり次第、順次発表いたします。" 
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
        {content.id === 'schedule' && (
          <div style={{ marginTop: '30px', width: '100%', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.7118182276324!2d135.55909241199347!3d34.81438967702812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000fcc06990393d%3A0x6b40556157077983!2z56uL5ZG96aSo5aSn5a2mIOWkp-mYqueMqOacqOOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1715753000000!5m2!1sja!2sjp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <AnimatePresence>
        {selectedPage && <DetailPage content={selectedPage} />}
      </AnimatePresence>

      <section style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%', position: 'relative', color: '#fff', overflow: 'hidden', backgroundColor: '#1a1a1a' }}>
        <motion.div 
          style={{ 
            position: 'absolute', top: 0, left: 0, width: '100%', height: '120%', zIndex: 0,
            y: backgroundY, 
            // ★ import した bgImage を使用するように変更
            backgroundImage: `url(${bgImage})`, 
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
            2026.06.11 - 06.21 | Ritsumeikan OIC
          </motion.p>
        </motion.div>
      </section>

      {/* 以下のセクション（CARDS, SPONSORS, FOOTER）は変更なし */}
      <section style={{ padding: '120px 10%', backgroundColor: '#f8f9fa' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {contents.map((item) => (
            <motion.div id={item.id} key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} onClick={() => setSelectedPage(item)} style={{ backgroundColor: '#fff', padding: '60px 40px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', cursor: 'pointer', borderBottom: '4px solid transparent', transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: '900', color: '#1a1a1a' }}>{item.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.8' }}>{item.desc}</p>
              <div style={{ marginTop: '30px', color: '#0057ff', fontWeight: 'bold', fontSize: '0.8rem' }}>READ MORE →</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="sponsors" style={{ padding: '100px 10%', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: '900', textAlign: 'center', marginBottom: '60px', color: '#999', letterSpacing: '0.3em' }}>SPONSORS</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '60px', opacity: 0.8 }}>
          {sponsorLogos.map((logo) => (
            <motion.img key={logo.id} src={logo.src} alt={logo.name} whileHover={{ scale: 1.1, opacity: 1 }} style={{ height: '40px', width: 'auto', filter: 'grayscale(100%)', transition: 'all 0.3s ease', cursor: 'pointer' }} />
          ))}
        </div>
      </section>

      <footer style={{ padding: '80px 10% 40px', backgroundColor: '#1a1a1a', color: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div>
            <h4 style={{ color: '#0057ff', marginBottom: '20px', fontSize: '14px', letterSpacing: '0.1em' }}>ORGANIZERS</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#999', fontSize: '13px', lineHeight: '2.2' }}>
              <li>RiST / Rippro </li>
              <li>立命館大学 情報理工学部</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#0057ff', marginBottom: '20px', fontSize: '14px', letterSpacing: '0.1em' }}>SOCIAL</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#999', fontSize: '13px', lineHeight: '2.2' }}>
              <li style={{ cursor: 'pointer' }}><a href="https://x.com/realrist?s=11&t=A_siZ3q3GkjvsfojOOQrIA" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>X (Twitter)</a></li>
              <li style={{ cursor: 'pointer' }}><a href="https://www.instagram.com/rist_rits.sec?igsh=c3FnMWVraTlwYjNq" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #333', paddingTop: '40px', textAlign: 'center' }}>
          <div style={{ marginBottom: '15px' }}>
             <span style={{ fontWeight: '900', fontSize: '18px', letterSpacing: '0.05em' }}>Branding <span style={{ color: '#0057ff' }}>Hackathon</span></span>
          </div>
          <p style={{ color: '#666', fontSize: '11px', letterSpacing: '0.05em' }}>
            © 2026 Branding Hackathon Executive Committee. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;