import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  // スクロール量を検知
  const { scrollY } = useScroll();

  // スクロールに合わせて背景の位置を 0px から 200px まで動かす
  const backgroundY = useTransform(scrollY, [0, 500], [0, 200]);

  const heroStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 10%',
    position: 'relative',
    color: '#fff',
    overflow: 'hidden',
    backgroundColor: '#333' // 画像がない時のための予備色
  };

  const backgroundWrapperStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '120%', // 少し長めに用意して、動いても端が見えないようにする
    zIndex: 0
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
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
      {/* ヒーローセクション */}
      <section style={heroStyle}>
        <motion.div
          style={{
            ...backgroundWrapperStyle,
            y: backgroundY, // スクロールに連動して動く
            backgroundImage: 'url("/Rippro.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div style={overlayStyle}></div>

        <motion.div
          style={{ position: 'relative', zIndex: 2 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              fontWeight: '900',
              margin: 0,
              lineHeight: 0.95,
              textTransform: 'uppercase',
            }}
          >
            Empowering <br />
            <span style={{ color: 'var(--dac-blue)' }}>Digital</span> Future.
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

      {/* Serviceセクション */}
      <section style={{ padding: '120px 10%', backgroundColor: '#f8f9fa' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* タイトル部分 */}
          <motion.div variants={itemVariants}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '60px', textAlign: 'center' }}>
              OUR SERVICE
              <span style={{ display: 'block', width: '60px', height: '4px', backgroundColor: 'var(--dac-blue)', margin: '20px auto 0' }}></span>
            </h2>
          </motion.div>

          {/* カードのグリッド */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {[
              { title: "Media Services", desc: "メディアの価値を最大化する広告運用とプランニングを提供します。" },
              { title: "Solution Services", desc: "最新のテクノロジーを活用し、企業のDXを強力に推進します。" },
              { title: "Data Business", desc: "膨大なデータを分析し、次の一手につながるインサイトを導き出します。" }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                whileHover={{ y: -10 }}
                className="service-card"
                style={{
                  backgroundColor: '#fff',
                  padding: '50px 40px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  borderBottom: '4px solid transparent',
                  transition: 'border-color 0.3s ease'
                }}
              >
                <div style={{ width: '30px', height: '30px', backgroundColor: 'rgba(0, 87, 255, 0.1)', marginBottom: '25px' }}></div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: 'bold' }}>{service.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>{service.desc}</p>
                <div style={{ marginTop: '30px', color: 'var(--dac-blue)', fontWeight: 'bold', fontSize: '0.8rem' }}>
                  LEARN MORE →
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