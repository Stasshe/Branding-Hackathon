import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 200]);

  const heroStyle = {
    height: '100vh', width: '100%', display: 'flex', flexDirection: 'column',
    justifyContent: 'center', padding: '0 10%', position: 'relative',
    color: '#fff', overflow: 'hidden', backgroundColor: '#1a1a1a'
  };

  // --- アップロードされたファイルの内容を反映したデータ ---
  const contents = [
    { 
      id: 'welcome', 
      title: "RiPProとは", 
      desc: "競技プログラミングの能力を高めコンテストでの入賞を目指す団体です。", 
      detail: "競技プログラミングとは、与えられた問題をプログラムを用いて早く正確に解く種目です。AtCoderなどで初心者から熟練者まで幅広く参加できるコンテストが毎週開催されています。パズルを解くような楽しさがあり、実際の開発でも役立ちます。" 
    },
    { 
      id: 'event', 
      title: "新歓講演会", 
      desc: "2025/4/7(月) OIC H324教室にて開催！", 
      detail: "普段の活動内容や、配布したビラの解説などを行います。プログラミング未経験者、情報理工学部以外の方も大歓迎です！時間は16:40〜18:25を予定しています。" 
    },
    { 
      id: 'activity', 
      title: "普段の活動", 
      desc: "サークル内で競いながら問題を解いています。", 
      detail: "コンテスト形式で切磋琢磨するほか、年に1〜2回は自分たちで問題を作ることもあります（立命合宿など）。クイズやパズルが好きな方、ぜひ部室に来てください！" 
    }
  ];

  // 詳細画面コンポーネント
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
        style={{ marginBottom: '40px', border: 'none', background: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', color: 'var(--dac-blue)' }}
      >
        ← BACK TO HOME
      </button>
      
      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '900', color: 'var(--dac-blue)', marginBottom: '30px' }}>
        {content.title}
      </h1>
      <div style={{ fontSize: '1.2rem', lineHeight: '2', color: '#444', maxWidth: '800px' }}>
        {content.detail}
      </div>
      
      <div style={{ marginTop: '60px', padding: '40px', borderLeft: '4px solid var(--dac-blue)', backgroundColor: '#f9f9f9' }}>
        <p style={{ fontWeight: 'bold' }}>💡 Pick Up Information</p>
        <p>新歓情報は公式DiscordやTwitter(X)でも随時発信中です！</p>
      </div>
    </motion.div>
  );

  return (
    <div>
      <AnimatePresence>
        {selectedPage && <DetailPage content={selectedPage} />}
      </AnimatePresence>

      {/* ヒーローセクション */}
      <section style={heroStyle}>
        <motion.div 
          style={{ 
            position: 'absolute', top: 0, left: 0, width: '100%', height: '120%', zIndex: 0,
            y: backgroundY, backgroundImage: 'url("/Rippro.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center',
          }} 
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1 }}></div>

        <motion.div style={{ position: 'relative', zIndex: 2 }} initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
          <motion.h1 
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: '900', margin: 0, lineHeight: 0.95, textTransform: 'uppercase' }} 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            Ritsumeikan <br /> 
            <span style={{ color: 'var(--dac-blue)' }}>Programming</span> Project
          </motion.h1>
          <motion.p 
            style={{ fontSize: '1.2rem', marginTop: '30px', fontWeight: '500', letterSpacing: '0.1em' }} 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            立命館大学情報理工学部プロジェクト団体 RiPPro
          </motion.p>
        </motion.div>
      </section>

      {/* コンテンツセクション */}
      <section style={{ padding: '120px 10%', backgroundColor: '#f8f9fa' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '60px', textAlign: 'center', letterSpacing: '0.1em' }}>
              ABOUT RiPPro
              <span style={{ display: 'block', width: '60px', height: '4px', backgroundColor: 'var(--dac-blue)', margin: '20px auto 0' }}></span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {contents.map((item) => (
              <motion.div 
                key={item.id}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedPage(item)}
                className="service-card"
                style={{ 
                  backgroundColor: '#fff', padding: '50px 40px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', 
                  cursor: 'pointer', borderRadius: '4px', borderBottom: '4px solid transparent', transition: 'all 0.3s ease' 
                }}
              >
                <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', fontWeight: 'bold' }}>{item.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.desc}</p>
                <div style={{ marginTop: '25px', color: 'var(--dac-blue)', fontWeight: 'bold', fontSize: '0.8rem' }}>
                  VIEW DETAILS →
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;