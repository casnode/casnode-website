---
title: 路由
description: Filters in Casnode
keywords:
  - routers
  - filter
authors:
  - kininaru
---

实际上， `路由器` 是一个内置的Beego包件。 `routers.init()` 程序启动时由框架运行。 然而，我们在包裹中添加了一些过滤功能。

我们不会在这里说 `路由器/路由器` 。Beego已经有一个很好的文档。 我们将在这里介绍我们的过滤器。

## 路由器/过滤器.go

**透明静态：** 此过滤器将服务于静态文件。 如果请求路径不是以 `/api/`开头的，那么过滤器将为浏览器提供静态文件。 过滤器将在 `web/build/`中找到请求的文件，如果存在则服务于该文件。

**新旧账户激活状态：** 更新用户发送请求时的在线状态。

## 路由器/filter_ssr.go

我们使用 Chromedp 渲染搜索引擎机器人的页面。 如果安装了 Chrome ，此文件中的函数将返回渲染页面到机器人。

我们使用正则表达式 `bot|slurp|bing|crawler` 来匹配请求的用户代理人。 如果匹配，我们认为请求是由机器人发送的。