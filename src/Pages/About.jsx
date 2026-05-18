import React from 'react';
import { Target, Shield, Handshake, Megaphone, TrendingUp } from 'lucide-react';

const CRITERIA = [
  {
    icon: Target,
    label: '目的',
    body: 'なぜそのプロダクトを作ったかを評価します。誰のために（ペルソナの設定）どんな不便を解消するために作ったのか、どんな新体験・おもしろさを作り出しているか（0→1）を審査対象とします。また既存の類似プロダクトとの差別化・付加価値（1→10）も評価対象です。',
  },
  {
    icon: Shield,
    label: 'プロダクトの信頼性',
    body: 'プロダクトの計画がどれだけされたかを評価します。ロゴ運用や配色ルール、コンセプトの整合性（デザイン設計）、外部仕様（ユーザー視点での機能計画）、内部仕様（実現するためのコード計画）が審査対象です。',
  },
  {
    icon: Handshake,
    label: '開発チームの信頼性',
    body: 'チーム全員にモチベーションがあり、割り振られた仕事を全うしているかを評価します。役割分担の偏り、品質担保のためのルール設定、チームメンバーのモチベーション管理の工夫などを確認します。',
  },
  {
    icon: Megaphone,
    label: 'プロダクトの宣伝',
    body: 'プロダクトをユーザーにどう伝えるかを評価します。SNS・技術ブログ・紹介動画などを活用した広報活動や、README・説明書・ルールブック・Webページなどによるユーザーへの理解促進が対象です。',
  },
  {
    icon: TrendingUp,
    label: 'プロダクト / チームの向上心',
    body: '完成後も改善し続けようとする姿勢を評価します。「今後追加したい機能」「広げたいユーザー層」などの将来展望や、開発中の問題への向き合い方・解決プロセスを確認します。',
  },
];

const About = () => (
  <div className="subpage">
    <div className="subpage-hero">
      <div className="subpage-hero-inner">
        <p className="subpage-eyebrow">INFORMATION</p>
        <h1 className="subpage-title">About</h1>
        <p className="subpage-lead">Branding Hackathonとは</p>
      </div>
    </div>

    <div className="subpage-body">
      <p className="subpage-intro">
        本ハッカソンは通常のハッカソンとは異なり、プロダクトの完成度だけでなく多角的な視点から評価します。以下の5項目が審査対象です。
      </p>

      <div className="criteria-list">
        {CRITERIA.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.label} className="criteria-item">
              <div className="criteria-icon-wrap">
                <Icon size={20} color="#0057ff" />
              </div>
              <div className="criteria-content">
                <h2 className="criteria-label">{c.label}</h2>
                <p className="criteria-body">{c.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default About;
