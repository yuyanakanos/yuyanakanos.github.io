export const profile = {
  name: 'Yuya Nakano',
  role: '編集者 / Editorial AI Integrator',
  tagline: '編集・企画・AI実装を横断し、コンテンツの設計と言語化を行う。',
  intro: '編集の力で情報の価値を最大化し、AIを活用してコンテンツの未来をデザインします。',
  description:
    'Yuya Nakanoのポートフォリオ。編集、企画、取材、執筆、生成AI、ワークフロー設計を横断し、コンテンツの設計と言語化を行います。',
  email: 'hello@yuyanakano.com',
  contactHref: 'mailto:hello@yuyanakano.com',
  copyrightYear: '2024',
};

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#works', label: 'Works' },
  { href: '#contact', label: 'Contact' },
] as const;

export const capabilities = [
  {
    title: '編集',
    description: '構成・企画設計から言語化までを一貫してリードします。',
    icon: 'eye',
  },
  {
    title: '企画',
    description: '読者と目的に向き合い、価値あるコンテンツの骨格を設計します。',
    icon: 'circles',
  },
  {
    title: '取材',
    description: '人や現場から本質を引き出し、一次情報を丁寧に言語化します。',
    icon: 'microphone',
  },
  {
    title: '執筆',
    description: '読みやすく、伝わる文章・コピーを執筆します。',
    icon: 'pencil',
  },
  {
    title: '生成AI',
    description: '生成AIを活用し、アイデア発想から制作・検証まで支援します。',
    icon: 'cube',
  },
  {
    title: 'ワークフロー設計',
    description: '制作プロセスを可視化し、再現性のある仕組みを構築します。',
    icon: 'flow',
  },
] as const;
