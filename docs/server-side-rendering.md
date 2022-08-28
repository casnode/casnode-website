---
title: Server Side Rendering
description: Server Side Rendering
keywords: [SSR]
---

Casnode support SSR. SSR(Server-side rendering) is a popular technique for rendering a client-side single page application (SPA) on the server and then sending a fully rendered page to the client. 

This allows for dynamic components to be served as static HTML markup.This approach can be useful for search engine optimization (SEO) when indexing does not handle JavaScript properly.
It may also be beneficial in situations where downloading a large JavaScript bundle is impaired by a slow network.

## Implementation

You can see the implementation of server side rendering in `routers/filter_ssr.go`.We use Chromedp to render pages for search engine bots. If Chrome is installed, functions in this file will return a rendered page to bots.

We use a Regular expression `bot|slurp|bing|crawler` to match the User Agent of the request. If matched, we think the request is sent by a bot.
