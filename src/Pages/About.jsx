import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const CRITERIA = [
  {
    label: '目的',
    body: 'なぜそのプロダクトを作ったかを評価します。誰のために（ペルソナの設定）どんな不便を解消するために作ったのか、どんな新体験・おもしろさを作り出しているか（0→1）を審査対象とします。また既存の類似プロダクトとの差別化・付加価値（1→10）も評価対象です。',
  },
  {
    label: 'プロダクトの信頼性',
    body: 'プロダクトの計画がどれだけされたかを評価します。ロゴ運用や配色ルール、コンセプトの整合性（デザイン設計）、外部仕様（ユーザー視点での機能計画）、内部仕様（実現するためのコード計画）が審査対象です。',
  },
  {
    label: '開発チームの信頼性',
    body: 'チーム全員にモチベーションがあり、割り振られた仕事を全うしているかを評価します。役割分担の偏り、品質担保のためのルール設定、チームメンバーのモチベーション管理の工夫などを確認します。',
  },
  {
    label: 'プロダクトの宣伝',
    body: 'プロダクトをユーザーにどう伝えるかを評価します。SNS・技術ブログ・紹介動画などを活用した広報活動や、README・説明書・ルールブック・Webページなどによるユーザーへの理解促進が対象です。',
  },
  {
    label: 'プロダクト / チームの向上心',
    body: '完成後も改善し続けようとする姿勢を評価します。「今後追加したい機能」「広げたいユーザー層」などの将来展望や、開発中の問題への向き合い方・解決プロセスを確認します。',
  },
];

const About = () => (
  <div className="subpage">
    <div className="subpage-hero" data-title="About">
      <div className="subpage-hero-inner">
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="subpage-eyebrow">
          INFORMATION
        </motion.p>
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="subpage-title">
          About
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className="subpage-lead">
          Branding Hackathonとは
        </motion.p>
      </div>
    </div>

    <div className="subpage-body">
      <motion.p
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="subpage-intro"
      >
        本ハッカソンは通常のハッカソンとは異なり、プロダクトの完成度だけでなく多角的な視点から評価します。以下の5項目が審査対象です。
      </motion.p>

      <div className="criteria-list">
        {CRITERIA.map((c, i) => (
          <motion.div
            key={c.label}
            className="criteria-item"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            custom={i * 0.2}
          >
            <div className="criteria-num">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="criteria-content">
              <h2 className="criteria-label">{c.label}</h2>
              <p className="criteria-body">{c.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
