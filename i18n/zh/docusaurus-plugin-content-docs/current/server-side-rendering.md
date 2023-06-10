---
title: 服务端渲染
description: Server Side Rendering
keywords:
  - SSR
authors:
  - Nekotoxin
---

Casnode 支持 SSR。 SSR(Server-side rendering) 是一种在服务器上呈现客户端单页应用程序(SPA)，然后向客户端发送完全呈现的页面的常用技术。

这将允许动态组件作为静态HTML标记。 当索引无法正确处理 JavaScript 时，他的方法可以用于搜索引擎优化(SEO)。 在下载一个大型JavaScript包因网络缓慢而受到损害的情况下，它也可能是有益的。

## Implementation

您可以在 `路由器/filter_ssr.go`中看到服务器端渲染。我们使用 Chromedp 来渲染搜索引擎机器人的页面。 如果安装了 Chrome ，此文件中的函数将返回渲染页面到bots。

我们使用正则表达式 `bot|slurp|bing|crawler` 来匹配请求的用户代理人。 如果匹配，我们认为请求是由机器人发送的。
