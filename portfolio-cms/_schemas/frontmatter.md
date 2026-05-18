# Frontmatter Schema

## 共通

```yaml
---
title: ""
type: statement | expertise | work | framework | note
status: draft | needs_review | published | archived
visibility: public | private | unlisted
order: 1
summary: ""
---
```

本番サイトの表示条件:

```text
status == "published" && visibility == "public"
```

## statement

```yaml
---
title: "Statement"
type: statement
status: draft
visibility: public
headline: ""
summary: ""
---
```

## expertise

```yaml
---
title: ""
type: expertise
status: draft
visibility: public
order: 1
summary: ""
services: []
---
```

## work

```yaml
---
title: ""
type: work
status: needs_review
visibility: public
order: 1
category: client-work | ai-implementation | research-output
role: ""
period: ""
summary: ""
outcome: ""
public_link: ""
review_required: true
---
```

`work` は公開可否確認が必要。クライアント名、媒体名、成果の数字、社内反応は公開前に確認する。

## framework

```yaml
---
title: ""
type: framework
status: draft
visibility: public
order: 1
summary: ""
keywords: []
---
```

Vault語彙は本文にそのまま出さず、普通の言葉に翻訳する。

## note

```yaml
---
title: ""
type: note
status: draft
visibility: public
date: 2026-05-18
summary: ""
external_url: ""
topics: []
---
```

