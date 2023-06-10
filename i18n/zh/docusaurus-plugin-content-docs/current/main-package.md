---
title: 主包
description: Casnode main packages
keywords:
  - main
authors:
  - kininaru
---

Casnode后端有几个软件包。 The main function and the Beego framework call these packages when the program starts.

## 主要的

主要的包裹是卡斯诺德的入口。 我们在主包中做一些基本设置步骤：

* **设置一些全局变量**: 数据库适配器、http 客户端、开放源码软件适配器、Segmenter 和论坛基本信息 (论坛版本、在线号码、谷歌组 Crawlers)

* **设置过滤器：** API请求过滤器，搜索引擎机器人过滤器

* **会话数据：** Casnode 使用 Beego 会话来存储用户信息。 在主要函数中，写下这些行使用基于文件的会话：

```go
Beego.BConfig.WebConfig.SessionProvider = "file"
beego.BConfig.WebConfig.Session.SessionProviderConfig = "./tmp"
beego.BConfig.WebConfig.SessionGCMaxLifetime = 360* 24 * 365
```

如果您想要在Beego使用另一个会话适配器，请参阅 [Beego会话](https://beego.me/docs/mvc/controller/session.md)。