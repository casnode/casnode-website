---
title: DiscuzXからの移行
description: Migration from DiscuzX
keywords:
  - discuz
  - discuz!
  - discuzx
authors:
  - hsluoyz
---

Casnodeは、ユーザーがDiscuzX 3.xからCasnodeにフォーラムを移行するのに役立つ多くのGoスクリプトを提供しています。 スクリプトの場所は https://github.com/casbin/casnode/tree/master/discuzx

Xorm対応のデータベース(MySQLなど)は、トピックや返信などのフォーラムデータを保存するためにCansodeによって使用されます。 オブジェクトストレージ(Casdoorストレージプロバイダの形式として)は、Casnodeによって画像や添付ファイルを保存するために使用されます。

## 準備

移行を行う前に、以下の環境を準備する必要があります。

1. クラウド VM (4 つのコアと 8 GB のメモリ、8 つのコアと 16 GB の方が優れています) 高速化のためのデータベースとイントラネット接続に優れています。 この VM は、Go マイグレーションスクリプトを実行するために使用されます。
2. 上記のVMでGo移行スクリプトを使用したCasnodeのgitリポジトリ(Casnodeインスタンスを実行または停止することができます)。
3. 実行中のCasdoor インスタンス (同じクラウド VM で高速化) 少なくとも 1 つのオブジェクトストレージは、Casdoor ストレージプロバイダーとして構成されています。 これはDiscuzXの画像と添付ファイルをオブジェクトストレージにアップロードするために使用されます。
4. DiscuzXインスタンスはオンラインです。

## 設定

最初に、インストールガイドに基づいてCasdoorとCasnodeを正しく設定し、移行前に正常に動作していることを確認します。

:::tip

Let Casdoor and Casnode connect to the DB's Intranet URL. Let Casdoor's storage provider's endpoint be the Intranet URL of the cloud object storage. It will be much faster.

:::

Configure the Casdoor database in Casnode's app.conf, so Casnode can directly connect to Casdoor's DB and create users. This will be faster than calling Casdoor's RESTful API to create users.

```ini
casdoorDbName = casdoor
```

Configure the migration script at: https://github.com/casbin/casnode/blob/master/discuzx/conf.go .

1. dbName: あなたのDiscuzXのDB名
2. discuzxDomain: DiscuzXのパブリックドメイン、末尾のスラッシュ付き
3. discuzxAttachmentBaseUrl: 末尾スラッシュ付きDiscuzXの添付ベースURL（DiscuzXの添付ファイルURLから取得できます）
4. avatarPoolBaseUrl: これを変更しない

```go
package discuzx

var dbName = "ultrax"
var discuzxDomain = "https://www.discuz.net/"
var discuzxAttachmentBaseUrl = "https://attachment.discuz.net/forum/"
```

:::tip

In Casnode, we assume you use the same DB username and password for all 3 DBs: Casnode's DB, Casdoor's DB and DiscuzX's DB. So make sure this DB user can access all 3 DBs.

:::

## 移行

You may see the `XXXConcurrency` is defined at the top of the scripts, this is the number of the concurrent threads to do the migration. You can tune this value based on your environment. If it is too small, the migration will be very slow. If it is too high, the DB connections will be more likely to report "Connections too many" errors.

```go
var SyncAvatarsConcurrency = 20
```

:::tip

The estimation time we provide in the following sections is measured in a machine with remote Internet connection with the DB and object storage. If your VM is in the same subnet with the DB and object storage, you will be much faster.

:::

### 1. ユーザーの移行

To migrate all your DiscuzX's UCenter members to Casdoor's users:

Run `TestAddUsers` in: https://github.com/casbin/casnode/blob/master/discuzx/user_test.go

This step will roughly take 2 minutes for 60,000 users.

### 2. ユーザーアバターの移行

To migrate all your DiscuzX's UCenter members' avatars to Casdoor's resources (via Casdoor's storage provider, backed by the cloud object storage):

Run `TestSyncAvatars` in: https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go

This step will roughly take 10 minutes for 60,000 users.

### 3. フォーラムの移行

To migrate all your DiscuzX's forums to Casdoor's tabs and nodes:

Run `TestAddForums` in: https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go

This step will usually finish in 2 seconds.

### 4. スレッドと移行投稿

To migrate all your DiscuzX's threads & posts to Casdoor's topics & replies:

Run `TestAddThreads` in: https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go

This step will roughly take 7 minutes for 10,000 users.

## 完了

During the migration, you can keep the Casnode instance running at the same time, so you can see the effect immediately by pressing `F5` in Casnode's public homepage.

If you encounter panic when running the migration scripts, contact the Casnode authors.
