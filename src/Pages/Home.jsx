import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, MapPin, Calendar, Users, Megaphone, TrendingUp, ChevronDown } from 'lucide-react';

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

const CONTENTS = [
  {
    id: 'about',
    title: 'ABOUT',
    icon: Users,
    desc: 'Branding Hackathonとは',
    detail: `本ハッカソンは普通のハッカソンとは違い、プロダクトの完成度だけでなく以下も採点対象とします。\n\n■ 目的\n項目「目的」では主に何故そのプロダクトを作ったのかについてを確認します。\n例えば誰のために(ペルソナの設定)どんな不便を解消するために作ったのか、どんな新体験/おもしろさを作り出しているかなど(0→1の部分)を採点します。また、この世の中に既に同じようなプロダクトがあったとき、そのプロダクトとどこで差別化をつけているかという付加価値(1→10の部分)も採点対象です。\n\n■ プロダクトの信頼性\n項目「プロダクトの信頼性」では主にプロダクトの計画がどれだけされたかを確認します。\n例えばロゴ運用や色合いのルール、その作ったものの世界観を守りきるコンセプトの整合性(デザイン設計の部分)を採点します。また、中身のコードを知らないユーザーから見てどんなことができるかの計画(外部仕様の部分)やそれを実現するためにどんなコードを作ればいいかの計画(内部仕様の部分)も採点対象とします。\n\n■ 開発チームの信頼性\n項目「開発チームの信頼性」では主にチーム全員にモチベーションがあり、割り振られた仕事を全うしているかを採点します。\n例えば役割分担が極端に偏りすぎていないかやチーム開発をする上で品質を担保するための何かしらのルールの設定、また、チームメンバーのモチベーションを管理するための工夫などが行われているかを確認します。\n\n■ プロダクトの宣伝\n項目「プロダクトの宣伝」では主にそのプロダクトをユーザーにどう伝えるかを採点します。\n例えばSNSや技術ブログ、紹介動画などを活用した広報活動や、Readme・説明書・ルールブック・Webページなどによるユーザーへの理解促進を確認します。\n\n■ プロダクト/チームの向上心\n項目「プロダクト/チームの向上心」では主に完成後も改善し続けようとする姿勢を採点します。\n例えば「今後どのような機能を追加したいか」「どのようなユーザー層へ広げたいか」といった将来展望や、開発中に発生した問題に対してどのように向き合い、解決したかを確認します。`,
  },
  {
    id: 'schedule',
    title: 'SCHEDULE',
    icon: Calendar,
    desc: '開催概要・アクセス',
    detail: `【日時】\n※さらに詳しいタイムテーブルは公式Discordにて発表します。\n\n・6/11(木) 17:00〜18:00\n　対面キックオフ（参加困難な場合は要連絡）\n・6/13(土) 12:00\n　開発開始（ハックオフ）\n・6/18(木) 17:00〜18:00\n　オンライン中間発表会\n・6/20(土) 12:00\n　コードフリーズ（開発終了）\n・6/21(日)\n　対面最終プレゼンテーション・審査会\n\n【場所】\n立命館大学 大阪茨木キャンパス（OIC）\n大阪府茨木市岩倉町2-150\nJR茨木駅から徒歩約5分。\n\n【MAP】`,
    hasMap: true,
  },
  {
    id: 'rule',
    title: 'GUIDELINE',
    icon: Megaphone,
    desc: '参加に関する案内',
    detail: `【参加資格】\n学生のみ参加可能です。個人での応募（運営側でチームを編成します）、または1チーム3〜4名での応募を受け付けています。\n\n【開発規定】\nハッカソン期間中にゼロから作成されたプロダクトが審査対象となります。\n\n【参加費】\n500円。6/11のキックオフ当日に徴収させていただきます。\n\n【賞について】\nComing Soon... 詳細が決まり次第、順次発表いたします。`,
  },
];

const DetailPage = ({ content, onClose }) => {
  const Icon = content.icon;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100dvh',
        backgroundColor: '#fff', zIndex: 3000, overflowY: 'auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="detail-inner"
      >
        <button onClick={onClose} className="back-btn">
          <ArrowLeft size={16} strokeWidth={2.5} />
          BACK
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <div style={{ width: '48px', height: '48px', backgroundColor: '#0057ff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon size={24} color="#fff" />
          </div>
          <h1 className="detail-title">{content.title}</h1>
        </div>

        <div className="detail-body">
          {content.detail}
        </div>

        {content.hasMap && (
          <div className="map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.7118182276324!2d135.55909241199347!3d34.81438967702812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000fcc06990393d%3A0x6b40556157077983!2z56uL5ZG96aSo5aSn5a2mIOWkp-mYqueMqOacqOOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1715753000000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Home = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], ['0%', '20%']);

  const sponsorLogos = [
    { id: 1, src: '/assets/sponsor1.png', name: 'Sponsor A' },
    { id: 2, src: '/assets/sponsor2.png', name: 'Sponsor B' },
    { id: 3, src: '/assets/sponsor3.png', name: 'Sponsor C' },
  ];

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <AnimatePresence>
        {selectedPage && (
          <DetailPage
            key={selectedPage.id}
            content={selectedPage}
            onClose={() => setSelectedPage(null)}
          />
        )}
      </AnimatePresence>

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
              href="https://docs.google.com/forms/d/e/1FAIpQLSedrQBRVl9iQsvCj-enYqWWXabb-ieJAuYv-PebJK6nXTNNwg/viewform?usp=publish-editor"
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
                const el = document.getElementById('about');
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
      <section style={{ padding: 'clamp(60px, 10vw, 120px) clamp(20px, 8%, 10%)' , backgroundColor: '#f8f9fa' }}>
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
          {CONTENTS.map((item, i) => {
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
                onClick={() => setSelectedPage(item)}
                className="card"
              >
                <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(0,87,255,0.08)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <Icon size={20} color="#0057ff" />
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', fontWeight: '900', color: '#1a1a1a', letterSpacing: '0.05em' }}>{item.title}</h3>
                <p style={{ color: '#777', lineHeight: '1.7', fontSize: '0.9rem' }}>{item.desc}</p>
                <div style={{ marginTop: '28px', color: '#0057ff', fontWeight: '700', fontSize: '0.75rem', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  READ MORE <ArrowRight size={13} strokeWidth={2.5} />
                </div>
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
