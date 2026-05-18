---
title: portfolio-cms README
date: 2026-05-18
status: draft
type: cms-guide
---

# portfolio-cms

Obsidianからポートフォリオサイトを更新するための公開用CMS領域。

このフォルダには、外部に出てもよい文章だけを置く。Vault本体の思考途中メモ、クライアント固有の非公開情報、社内事情、個人名ベースの評価は入れない。

## 公開ルール

- `status: published` のファイルだけをサイトに表示する
- `status: draft` は制作中
- `status: needs_review` は公開可否確認が必要
- `visibility: public` 以外は本番サイトに出さない

初期状態ではすべて `draft` か `needs_review` にする。

## ディレクトリ

```text
portfolio-cms/
  statement.md
  expertise/
  works/
  frameworks/
  notes/
  _schemas/
```

## コンテンツ型

| type | 用途 | 表示場所 |
|---|---|---|
| `statement` | サイト全体の一文・自己紹介 | TOP / Statement |
| `expertise` | 支援できる領域 | Expertise |
| `work` | 代表実績 | Selected Works |
| `framework` | 思考フレーム | Editorial Frameworks |
| `note` | 公開記事・思考ログ | Notes |

## 重要な線引き

このCMSの目的は「Obsidianで更新できること」を見せることではない。公開サイトで見せるべきものは、編集判断を実績・方法論・記事に変換していく職能。

