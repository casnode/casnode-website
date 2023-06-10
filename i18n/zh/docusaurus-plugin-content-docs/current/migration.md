---
title: 从 DiscuzX 迁移
description: Migration from DiscuzX
keywords:
  - discuz
  - discuz!
  - discuzx
authors:
  - hsluoyz
---

Casnode 提供了很多Go 脚本来帮助用户将他们的论坛从 DiscuzX 3.x 迁移到Casnode。 脚本位于：https://github.com/casbin/casnode/tree/master/discuzx

Xorm支持的数据库(例如MySQL) 由 Cansode 用于存储主题和回复等论坛数据。 Casnode 用于存储图像和附件文件的对象存储(作为Casdoor 存储提供商的形式)。

## 准备工作

您需要在进行迁移之前准备好以下环境：

1. 云端虚拟机（含4个核心和8GB内存，8个核心和16GB更高）， 更快地使用内联网与数据库的连接。 此 VM 用于运行迁移脚本。
2. 上面虚拟机中带有迁移脚本的 Casnode git 仓库(Casnode 实例可以运行或停止)。
3. 正在运行的 Casdoor 实例 (在同一个云端虚拟机中更优越，速度更快)， 至少有一个对象存储被配置为Casdoor 存储提供商。 这用于将DiscuzX的图像和附件文件上传到对象存储。
4. 您的 DiscuzX 实例已上线。

## 配置

首先根据他们的安装指南正确配置Casdoor 和 Casnode ，确保他们在迁移前正常工作。

:::tip

Let Casdoor and Casnode connect to the DB's Intranet URL. Let Casdoor's storage provider's endpoint be the Intranet URL of the cloud object storage. It will be much faster.

:::

Configure the Casdoor database in Casnode's app.conf, so Casnode can directly connect to Casdoor's DB and create users. This will be faster than calling Casdoor's RESTful API to create users.

```ini
casdoorDbName = casdoor
```

Configure the migration script at: https://github.com/casbin/casnode/blob/master/discuzx/conf.go .

1. dbname: 你的 DiscuzX's 数据库名称
2. discuzxDomain: 你的 DiscuzX's 公共域名, 带有尾随斜杠的
3. discuzxAttachmentBaseUrl: 你的 DiscuzX的附件基URL, 带有尾随斜杠(你可以从你DiscuzX的附件文件 URL 获取)
4. 头像PoolBaseUrl: 不要更改

```go
package discuzx

var dbname = "ultrax"
var discuzxDomain = "https://www.discuz.net/"
var discuzxAttachmentBaseUrl = "https://attachment.discuz.net/forum/"
```

:::tip

In Casnode, we assume you use the same DB username and password for all 3 DBs: Casnode's DB, Casdoor's DB and DiscuzX's DB. So make sure this DB user can access all 3 DBs.

:::

## Migration

You may see the `XXXConcurrency` is defined at the top of the scripts, this is the number of the concurrent threads to do the migration. You can tune this value based on your environment. If it is too small, the migration will be very slow. If it is too high, the DB connections will be more likely to report "Connections too many" errors.

```go
var SyncAvatarsConcurus = 20
```

:::tip

The estimation time we provide in the following sections is measured in a machine with remote Internet connection with the DB and object storage. If your VM is in the same subnet with the DB and object storage, you will be much faster.

:::

### 1. 用户迁移

To migrate all your DiscuzX's UCenter members to Casdoor's users:

Run `TestAddUsers` in: https://github.com/casbin/casnode/blob/master/discuzx/user_test.go

This step will roughly take 2 minutes for 60,000 users.

### 2. 用户头像迁移

To migrate all your DiscuzX's UCenter members' avatars to Casdoor's resources (via Casdoor's storage provider, backed by the cloud object storage):

Run `TestSyncAvatars` in: https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go

This step will roughly take 10 minutes for 60,000 users.

### 3. 论坛迁移

To migrate all your DiscuzX's forums to Casdoor's tabs and nodes:

Run `TestAddForums` in: https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go

This step will usually finish in 2 seconds.

### 4. 线程和帖子迁移

To migrate all your DiscuzX's threads & posts to Casdoor's topics & replies:

Run `TestAddThreads` in: https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go

This step will roughly take 7 minutes for 10,000 users.

## 最后完成

During the migration, you can keep the Casnode instance running at the same time, so you can see the effect immediately by pressing `F5` in Casnode's public homepage.

If you encounter panic when running the migration scripts, contact the Casnode authors.
