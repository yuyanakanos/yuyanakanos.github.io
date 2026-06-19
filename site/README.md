# Yuya Nakano Portfolio

Yuya Nakano の個人ポートフォリオサイトです。既存構成に合わせて Astro で実装し、1ページ完結の静的サイトとして `/` に Header / Hero / About / Selected Works / Contact / Footer を配置しています。

## 起動方法

```bash
npm install
npm run dev
```

本番ビルド確認:

```bash
npm run build
```

## 作品データの差し替え

担当案件は `src/data/works.ts` の `works` 配列で管理しています。

```ts
{
  title: '案件タイトル',
  description: '短い説明文',
  tags: ['企画・編集', '取材'],
  type: 'ai',
  sourcePath: '参照元メモのパス'
}
```

`type` は `city` / `brand` / `ai` / `report` から選ぶと、カード上部の簡易ビジュアルが切り替わります。

## メールアドレスの変更

`src/data/siteData.ts` の `profile.email` と `profile.contactHref` を変更してください。

```ts
email: 'hello@yuyanakano.com',
contactHref: 'mailto:hello@yuyanakano.com',
```

フォームURLが決まった場合は `contactHref` をそのURLに差し替えます。

## デザイントークン

色、罫線、フォント、余白などのトークンは `src/styles/global.css` の `:root` に定義しています。
