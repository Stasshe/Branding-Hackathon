import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Coins, Trophy } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const SECTIONS = [
  {
    icon: GraduationCap,
    label: '参加資格',
    body: '学生のみ参加可能です。個人での応募（運営側でチームを編成）、または1チーム3〜4名での応募を受け付けています。',
  },
  {
    icon: Code2,
    label: '開発規定',
    body: 'ハッカソン期間中にゼロから作成されたプロダクトが審査対象となります。期間外に開発されたプロダクトは対象外です。',
  },
  {
    icon: Coins,
    label: '参加費',
    body: '参加費は500円です。6/11のキックオフ当日に徴収させていただきます。',
  },
  {
    icon: Trophy,
    label: '賞について',
    body: 'Coming Soon... 詳細が決まり次第、順次発表いたします。',
    soon: true,
  },
];

const Guideline = () => (
  <div className="subpage">
    <div className="subpage-hero">
      <div className="subpage-hero-inner">
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="subpage-eyebrow">
          INFORMATION
        </motion.p>
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="subpage-title">
          Guideline
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className="subpage-lead">
          参加に関する案内
        </motion.p>
      </div>
    </div>

    <div className="subpage-body">
      <div className="guideline-grid">
        {SECTIONS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
              custom={i * 0.5}
              className={`guideline-card${s.soon ? ' guideline-card--soon' : ''}`}
            >
              <span className="guideline-card-index">0{i + 1}</span>
              <div className="guideline-card-left">
                <div className="guideline-icon-wrap">
                  <Icon size={20} color="#0057ff" />
                </div>
                <h2 className="guideline-label">{s.label}</h2>
              </div>
              <p className="guideline-body">{s.body}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
);

export default Guideline;
