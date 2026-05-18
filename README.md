---
title: ポートフォリオサイト方針メモ
date: 2026-05-18
status: planning
project: portfolio-site
---

# ポートフォリオサイト方針メモ

## 1行判断

このサイトは「編集実績の陳列」ではなく、編集判断をAIとチームが再利用できる形に変換する職能を見せる場所にする。

## サイトの中核

表に出す主語は「Obsidian」「AI活用」「ポートフォリオ制作」ではなく、次の一文に寄せる。

> 編集者の暗黙知を、AIとチームが使える実行可能な型に変える。

サイトで伝えるべきことは3つ。

1. 10年以上、編集現場で判断してきたこと
2. その判断を言語化・手順化できること
3. AIワークフローやスキルとして実装できること

## 想定構成

```text
TOP
 ├─ Statement: 編集観を一文で
 ├─ Expertise: 何を支援できるか
 ├─ Selected Works: 代表実績6〜9件
 ├─ Editorial Frameworks: 思考フレーム
 ├─ Notes: noteや思考ログ
 └─ Contact
```

## 各セクション方針

### TOP

- 一文ステートメント
- BD編集、企画設計、AIワークフロー設計を横断すること
- CTA: 相談する / Worksを見る

### Statement

思想文を長く書かず、編集観を短く言い切る。

候補:

> よい編集は、情報を整えることではなく、読者の見方が変わる地点を設計することだと考えています。いまはその判断を、AIとチームが再利用できる形に変換する仕事をしています。

### Expertise

3本に絞る。

- Editorial Planning: ブランドストーリー、連載企画、記事の切り口設計、広告っぽさから編集への変換
- AI Workflow Design: 編集業務のAI化、Claude Code / Skills / AI秘書、チーム向けワークフロー設計
- Knowledge Structuring: 暗黙知の言語化、ナレッジ設計、判断基準のドキュメント化・再利用化

### Selected Works

記事実績だけにしない。普通の編集者に見えるため、Client Work / AI Implementation / Research Output を混ぜる。

候補:

- ブランドストーリー企画制作
- Adobe Acrobat AI系の編集企画
- BitTrade BS連載の企画刷新
- NP社内AI活用登壇
- ai-secretary / AI秘書の配布・運用
- NPBD LP v6.0 マルチロール秘書
- 二次利用ジャッジAI / 掲載可否判断支援
- 編集スキル群の設計
- 1年運用した個人ナレッジシステム

### Editorial Frameworks

Vault語彙をそのまま出さず、普通の言葉に翻訳する。

- 広告を編集に変える4ステップ
- AIはプロンプトではなく蓄積で効く
- 人間に残す判断と、AIに渡す作業を分ける

### Notes

日記ではなく研究ログとして見せる。

- 編集とAI
- 企画の作り方
- ナレッジ設計
- 働き方・判断論

### Contact

相談テーマを明示する。

- 編集企画の相談
- AIワークフロー設計
- 社内勉強会・登壇
- ナレッジ整理・チーム導入

## Obsidian-as-CMS 方針

ObsidianをCMSとして使う。ただしVault全体をCMSにはしない。

公開用Markdownだけを置く小さな領域を作り、サイトはそこだけを読む。

```text
Obsidian
  ↓
公開用Markdownだけを置くフォルダ
  ↓
GitHub
  ↓
Next.js / Astro などで静的サイト生成
  ↓
Vercel
```

想定ディレクトリ:

```text
portfolio-cms/
  statement.md
  expertise/
    editorial-planning.md
    ai-workflow-design.md
    knowledge-structuring.md
  works/
    adobe-acrobat-ai.md
    bittrade-bs.md
    np-ai-talk.md
  frameworks/
    editorial-jump.md
    llm-compound.md
    human-ai-division.md
  notes/
    2026-xx-xx-title.md
```

各Markdownはfrontmatterで公開制御する。

```yaml
---
title: "広告を編集に変える4ステップ"
type: framework
order: 1
status: published
summary: "機能を、読者の見方が変わる企画に翻訳する手順。"
---
```

サイト側は `status: published` のファイルだけ読む。

## 実装方式

最初は半自動publish型を採用する。

1. Obsidianで公開用Markdownを編集
2. 公開対象フォルダだけをサイトリポジトリへ同期
3. GitHubへpush
4. Vercelが自動デプロイ

保存即公開の完全自動型は採用しない。Vaultは思考途中の情報や非公開情報を含むため、誤公開リスクが高い。

## 役割分担

### Codex

設計担当。

- サイトの主語を決める
- セクション構成を決める
- Obsidian-as-CMSの情報設計を決める
- 公開してよい情報と出してはいけない情報の境界を設計する
- 平均的なAI活用サイトに寄っていないかを監査する

### Claude Design

ワイヤーフレーム / ビジュアル設計担当。

- TOPのファーストビュー案
- セクション配置
- タイポグラフィ / 余白 / トーン
- WorksやFrameworksの見せ方
- モバイル表示を含む画面設計

### Claude Code

実装担当。

- Next.js or Astro の実装
- Markdown / frontmatter の読み込み
- `status: published` による公開制御
- GitHub / Vercel公開
- Obsidian公開フォルダとサイトリポジトリの同期導線

## タスク分解

### Phase 0: 方針固定

- [x] サイトの主語を決める
- [x] 想定構成を決める
- [x] Obsidian-as-CMS方針を決める
- [x] 役割分担を決める

### Phase 1: 情報設計

- [x] 公開用CMSフォルダの場所を決める
  - `portfolio-site/portfolio-cms/`
- [x] 各content typeのfrontmatter仕様を決める
  - `portfolio-cms/_schemas/frontmatter.md`
- [x] Works 6〜9件の候補を初期ドラフト化する
  - `portfolio-cms/works/`
- [x] Frameworks 3件の本文粒度を初期ドラフト化する
  - `portfolio-cms/frameworks/`
- [x] Notesに出す記事 / ログの範囲を仮決めする
  - `portfolio-cms/notes/README.md`
- [ ] Works各項目の公開可否を確認する
- [ ] Worksの成果表現を公開可能な言い方に整える
- [ ] `status: published` にする初期公開対象を選ぶ

### Phase 2: 原稿化

- [ ] Statementの確定
- [ ] Expertise 3本の短文作成
- [ ] Works各項目のタイトル、要約、役割、成果、公開可否を整理
- [ ] Frameworks各項目の本文作成
- [ ] Contact文面作成

### Phase 3: ワイヤーフレーム

- [ ] Claude Designに渡す設計ブリーフを作る
- [ ] PC / mobile のワイヤーフレームを作る
- [ ] Works / Frameworks の表示パターンを選ぶ
- [ ] トーンが「AI活用術」や「Obsidian活用術」に寄っていないか確認する

### Phase 4: 実装

- [ ] 技術スタックを確定する
- [ ] サイトリポジトリを作る
- [ ] Markdown読み込みを実装する
- [ ] セクション別コンポーネントを作る
- [ ] レスポンシブ対応する
- [ ] Vercelへ接続する

### Phase 5: 公開運用

- [ ] Obsidian公開フォルダからサイトリポジトリへの同期手順を作る
- [ ] 公開前チェックリストを作る
- [ ] 初回公開
- [ ] 更新手順を固定する

## 平均回帰リスク

- 「Obsidianで更新できるサイト」を前面に出しすぎると、AI活用 / PKM文脈に寄る
- Worksが記事実績だけになると、普通の編集者ポートフォリオに見える
- FrameworksがVault語彙のままだと、外部には伝わらない
- 自動公開を急ぐと、思考途中のものを出す危険がある

表で見せるべきものは、ツールではなく、編集判断を公開可能な実績・方法論・記事に変換していく職能。
