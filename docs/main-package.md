---
title: Main package
slug: /main-package
---

There are several packages in the backend of Casnode. The main function and the Beego framework call these packages when  the program starts.

## main

The main package is the entrance of Casnode. We do some basic setup steps in the main package: 

* **Setup some global variables**: Database adapter, http Client, OSS adapter, Segmenter and Forum basic info (forum version, online number, Google Groups Crawlers) 

* **Setup filters:** API requests filter, search engine bot filter

* **Session data:** Casnode uses Beego session to store user info. In the main function, wrote these lines to use a file based session:

```go
beego.BConfig.WebConfig.Session.SessionProvider = "file"
beego.BConfig.WebConfig.Session.SessionProviderConfig = "./tmp"
beego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 3600 * 24 * 365
```

Please refer to [Beego session](https://beego.me/docs/mvc/controller/session.md) if you want to use another session adapter in Beego.

## routers

This package has 3 files. 

`filter.go` This file contains 2 filters, `TransparentStatic` and 