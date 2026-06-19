export type WorkType = 'city' | 'brand' | 'ai' | 'report';

export type Work = {
  title: string;
  description: string;
  tags: string[];
  type: WorkType;
  sourcePath: string;
};

export const works: Work[] = [
  {
    title: '都市と自然を“なめらか”に繋ぐ、“SANU式”別荘ライフのススメ',
    description: '暮らし方の変化を起点に、サービスの思想と利用体験を伝える記事の企画・編集を担当。',
    tags: ['企画・編集', '取材', 'ライフスタイル'],
    type: 'city',
    sourcePath:
      'myVault/10_Structured/Clippings/NewsPicks/中野過去案件/20240426_都市と自然を“なめらか”に繋ぐ、“SANU式”別荘ライフのススメ.md',
  },
  {
    title: '【Roblox成功事例】ベイブレードが証明した「日本発IP」の可能性とは',
    description: 'IP、ゲーム、グローバル展開を横断するテーマを、読者に届く構成へ整理。',
    tags: ['企画・編集', '取材', 'ブランド'],
    type: 'brand',
    sourcePath:
      'myVault/10_Structured/Clippings/NewsPicks/中野過去案件/20250324_【Roblox成功事例】ベイブレードが証明した「日本発IP」の可能性とは.md',
  },
  {
    title: '“散らかった業務”はこう整える。AIエージェント時代の見直し術',
    description: '生成AI導入を単なるツール論にせず、業務設計の視点から読み解く記事を編集。',
    tags: ['企画・編集', '生成AI', '業務設計'],
    type: 'ai',
    sourcePath:
      'myVault/10_Structured/Clippings/NewsPicks/中野過去案件/20250410_“散らかった業務”はこう整える。AIエージェント時代の見直し術.md',
  },
  {
    title: '巨額のGX投資を支える、これからのリスクマネジメントとは',
    description: '大きな社会テーマを、事業者の意思決定に接続する記事として構成・編集。',
    tags: ['編集', '構成', 'レポート'],
    type: 'report',
    sourcePath:
      'myVault/10_Structured/Clippings/NewsPicks/中野過去案件/20250121_巨額のGX投資を支える、これからのリスクマネジメントとは.md',
  },
];
