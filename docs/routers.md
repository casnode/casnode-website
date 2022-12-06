---
title: Routers
description: Filters in Casnode
keywords: [routers, filter]
authors: [kininaru]
---

Actually, `routers` is a built-in package of Beego. `routers.init()` is run by the framework when program starts. However, we added some filter functions to the package.

We are not going to talk about the `routers/router.go` here, Beego has already had a good document for it. We are going to introduce our filters here.

## routers/filter.go

**TransparentStatic:** This filter is to serve static files. If a request path is not starts with `/api/`, then the filter will serve a static file to the browser. The filter will find the requested file in `web/build/`, and serve the file if exist.

**FreshAccountActiveStatus:** Update users' online states when they send a request.

## routers/filter_ssr.go

We use Chromedp to render pages for search engine bots. If Chrome is installed, functions in this file will return a rendered page to bots.

We use a Regular expression `bot|slurp|bing|crawler` to match the User Agent of the request. If matched, we think the request is sent by a bot.