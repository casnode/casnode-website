---
title: コントローラ
description: Use controllers to handle requests
keywords:
  - handler
  - controllers
  - request
authors:
  - kininaru
---

`routers/router.go`では、

```go
beego.Router("/api/get-topics", &controllers.ApiController{}, "GET:GetTopics")
```

3番目のパラメータ `"GET:GetTopics"` に注意してください。 この文字列は HTTP リクエストメソッドとリクエストハンドラの関数名の組み合わせです。 You can find a function called `GetTopics` in the package `controllers`, and it is the handler of the request `/api/get-topics`.

この方法でリクエストの対応する機能を見つけることができます。

:::tip

If you are using **Goland**, you can press `Ctrl+Shift+F`(vscode use `Ctrl+F` instead), and search `func (c *ApiController) FunctionName` to locate to the function quickly.

:::