---
title: 概要
description: Casnode's architecture
keywords:
  - architecture
authors:
  - kininaru
---

Casnodeはオープンソースプロジェクトです。 アクティブなコミュニティは、その活力です。

この章はCasnodeに貢献したい開発者のためのものです。 ここでは、Casnodeのアーキテクチャとその仕組みを学びます。

## 建築

Casnodeには、フロントエンドとバックエンドの2つの部分があります。

| 名前       | 説明                        | ツール                             | ソース コード                                           |
| -------- | ------------------------- | ------------------------------- | ------------------------------------------------- |
| Frontend | Casnode用WebフロントエンドUI      | JavaScript + React + Ant-Design | https://github.com/casbin/casnode/tree/master/web |
| バックエンド   | CasnodeのRESTful APIバックエンド | Golang + Beego + MySQL + Xorm   | https://github.com/casbin/casnode                 |

前述したように、製品環境では、Casnodeのフロントエンドが構築され、バックエンドによって提供されます。 開発環境では、フロントエンドは Node.js によって提供されます。 