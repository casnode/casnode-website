---
title: Routers
description: Filters in Casnode
keywords:
  - routers
  - filter
authors:
  - kininaru
---

実際、 `ルータ` はBeegoの組み込みパッケージです。 `routers.init()` はプログラム起動時にフレームワークによって実行されます。 しかし、いくつかのフィルタ関数をパッケージに追加しました。

ここでは、 `routers/router.go` について話すつもりはありません。Beego はすでに良いドキュメントを持っています。 ここではフィルターをご紹介します。

## ルーター/filter.go

**TransparentStatic:** 静的なファイルを提供するフィルタです。 リクエストパスが `/api/`で始まらない場合、フィルタは静的ファイルをブラウザーに提供します。 フィルターは `web/build/`で要求されたファイルを見つけ、存在する場合はファイルを提供します。

**FreshAccountActiveStatus:** リクエストを送信すると、ユーザーのオンライン状態を更新します。

## routers/filter_ssr.go

検索エンジンのボット用にページをレンダリングするためにChromedpを使用しています。 Chrome がインストールされている場合、このファイルの関数はレンダリングされたページを bots に返します。

正規表現 `bot|slurp|bing|croller` を使用して、リクエストの User Agent と一致します。 一致する場合、リクエストはボットによって送信されると考えられます。