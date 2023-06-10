---
title: メインパッケージ
description: Casnode main packages
keywords:
  - main
authors:
  - kininaru
---

Casnodeのバックエンドにはいくつかのパッケージがあります。 The main function and the Beego framework call these packages when the program starts.

## メイン

メインパッケージはCasnodeの入り口です。 メインパッケージでいくつかの基本的なセットアップ手順を実行します。

* **グローバル変数の設定**: データベースアダプタ, httpクライアント, OSSアダプタ, セグメンター, フォーラムの基本情報(フォーラムのバージョン, オンライン番号, Google Groups Crawlers)

* **フィルタのセットアップ:** API リクエストフィルタ、検索エンジンボットフィルタ

* **セッションデータ:** Casnodeは、ユーザー情報を保存するためにBeegoセッションを使用します。 メイン関数では、ファイルベースのセッションを使用するためにこれらの行を書きました。

```go
beego.BConfig.WebConfig.Session.Session.SessionProvider = "file"
beego.BConfig.WebConfig.Session.Session.Session.Session.Session.Session.SessionProviderConfig = ".tmp"
beego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 365 * 24 * 365
```

Beego で別のセッションアダプタを使用する場合は、 [Beego セッション](https://beego.me/docs/mvc/controller/session.md) を参照してください。