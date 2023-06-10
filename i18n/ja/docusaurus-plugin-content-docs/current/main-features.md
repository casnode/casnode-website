---
title: 主な機能
description: Casnode main features
keywords:
  - features
authors:
  - kininaru
---

Casnodeと他のフォーラムを区別する特別な機能があります。 ここでは、これらの機能の簡単な紹介です。 詳細については、お読みください。

## 📧 メーリングリスト

CasnodeはGoogleグループをよくサポートしています。 [google-group-crowler](https://github.com/casbin/google-groups-crawler)を統合することにより、CasnodeでGoogleグループの設定を行った後、双方向の同期が開始されます。 現時点では、CasnodeはGoogleグループからの会話のみを同期することができますが、他のメーリングリストへの会話をプッシュすることができます。

## ✨ マルチプラットフォーム

Casnodeはコンピュータとモバイルアクセスをサポートしています。 フロントエンドUIはPCとモバイルに適応します。

## 🔍 内蔵の検索

Casnodeは組み込み検索をサポートしており、もちろん、Googleなどのさまざまなエンジンを使用した検索もサポートしています。

## 🖼️ 写真と添付ファイルをアップロード

Casnodeサポートのドラッグ&ドロップで写真や添付ファイルをアップロードできます。 同時に、各アカウントには独自のファイルライブラリとクォータがあります。 ファイルライブラリ内のファイルは、リンクを共有することで共有することもでき、写真や写真を投稿するのに便利です。 Alibaba CloudやTencent CloudなどのさまざまなOSSストレージをサポートしています。

## 📢 サイト広告

バックグラウンドを介して個別に配信できるサイト広告を設定するためのサポート。

## 🎯 サーバーサイドレンダリング

Casnodeはサーバー側のレンダリングをサポートしており、検索エンジンSEOにフレンドリーです。

## :file_caviet_selector: あらゆる種類のデータベース

Casnode は [xorm](https://github.com/go-xorm/xorm) を使用してデータベースに接続します。 MySQL、sqlite3、mymysql、Postgres for Casnodeを使用できます。

## 🌐 複数言語

Casnode uses i18next and [Crowdin](https://crowdin.com/project/casnode/) to support multi-language. Casnodeは、中国語、英語、フランス語、ドイツ語、ロシア語、日本語、韓国語に対応しています。 あなたの言語をサポートするためのPRや問題を提起することへようこそ! そしてどんな翻訳の貢献も歓迎します!

## 🚪 Casdoorを使用してメンバーを管理する

Casnodeはデータベースにメンバテーブルを保持しません。 Casnodeはユーザーを管理するために [Casdoor](https://github.com/casbin/casdoor) を使用します。 Casdoor は OAuth2.0 ベースの SSO プラットフォームです。 Casdoorを通じて、Casnodeは様々なサードパーティのログイン/登録方法をサポートしています。 たくさんの登録方法、携帯電話、電子メール、QQ、WeChat、GitHub、Facebook、Google、LinkedIn、DingTalk、Gitee、wecom、GitLabがあります。 また、ヒューマンマシン検証用のグラフィック検証コードもサポートしています。 組織管理にCasdoorを使用している場合、メンバーはCasnodeに直接サインインできます。Casnodeに再度サインアップする必要はありません。 より詳細な機能を入手するには、 [Casdoor](https://casdoor.org) をご覧ください。
