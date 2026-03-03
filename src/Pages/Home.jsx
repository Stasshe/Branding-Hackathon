import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const heroStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 10%',
    backgroundImage: 'url("/hero-bg.jpg")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    color: '#fff',
    overflow: 'hidden',
    backgroundColor: '#333' // 画像がない時のための予備色
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div>
      <section style={heroStyle}>
        <div style={overlayStyle}></div>
        <motion.div 
          style={{ position: 'relative', zIndex: 2 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} style={{ fontSize: '5rem', fontWeight: '800', margin: 0 }}>
            Empowering <br /> Digital Future.
          </motion.h1>
          <motion.p variants={itemVariants} style={{ fontSize: '1.2rem', marginTop: '30px' }}>
            デジタル・アドバタイジング・コンソーシアム株式会社
          </motion.p>

          <motion.div variants={itemVariants} style={{ marginTop: '40px' }}>
            <button 
              className="dac-button"
              style={{
                padding: '15px 45px',
                backgroundColor: 'var(--dac-blue, #0057ff)', 
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                transition: 'all 0.3s ease',
                borderRadius: '2px'
              }}
            >
              VIEW MORE
            </button>
          </motion.div>
        </motion.div>
      </section>

      <section style={{ padding: '100px 10%', backgroundColor: '#f8f9fa' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} style={{ 
            fontSize: '2.5rem', 
            marginBottom: '50px', 
            textAlign: 'center',
            position: 'relative' 
          }}>
            Our Service
            <span style={{
              display: 'block',
              width: '40px',
              height: '4px',
              backgroundColor: 'var(--dac-blue, #0057ff)',
              margin: '15px auto 0'
            }}></span>
          </motion.h2>

<div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
  gap: '40px' 
}}>
  {[
    { title: "Media Services", desc: "メディアの価値を最大化する広告運用とプランニングを提供します。" },
    { title: "Solution Services", desc: "最新のテクノロジーを活用し、企業のDXを強力に推進します。" },
    { title: "Data Business", desc: "膨大なデータを分析し、次の一手につながるインサイトを導き出します。" }
  ].map((service, i) => (
    <motion.div 
      key={i}
      variants={itemVariants}
      whileHover={{ y: -10 }} // ★マウスを置くと10px上に浮く
      className="service-card"
      style={{ 
        backgroundColor: '#fff', 
        padding: '50px 40px', 
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        borderBottom: '4px solid transparent', // ホバー時の仕掛け
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* カード内の装飾（青い小さな正方形） */}
      <div style={{ 
        width: '30px', 
        height: '30px', 
        backgroundColor: 'rgba(0, 87, 255, 0.1)', 
        marginBottom: '20px',
        borderRadius: '4px'
      }}></div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: 'bold' }}>
        {service.title}
      </h3>
      <p style={{ color: '#666', lineHeight: '1.8', fontSize: '0.95rem' }}>
        {service.desc}
      </p>

      {/* 右下の矢印アイコン（擬似要素） */}
      <div style={{ 
        marginTop: '30px', 
        color: 'var(--dac-blue)', 
        fontWeight: 'bold', 
        fontSize: '0.8rem',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      }}>
        LEARN MORE <span>→</span>
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