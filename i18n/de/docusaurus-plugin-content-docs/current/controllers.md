---
title: Controller
description: Use controllers to handle requests
keywords:
  - handler
  - controllers
  - request
authors:
  - kininaru
---

In `routers/router.go`findest du viele Linien wie z.B.

```go
beego.Router("/api/get-topics", &controllers.ApiController{}, "GET:GetTopics")
```

Bitte beachten Sie den dritten Parameter `"GET:GetTopics"`. Dieser String ist eine Kombination aus HTTP-Request-Methode und dem Funktionsnamen des Request-Handlers. Sie finden eine Funktion namens `GetTopics` im Paket `Controller`, und es ist der Handler der Anfrage `/api/get-topics`.

Auf diese Weise finden Sie die entsprechende Funktion der Anfrage.

:::tip

If you are using **Goland**, you can press `Ctrl+Shift+F`(vscode use `Ctrl+F` instead), and search `func (c *ApiController) FunctionName` to locate to the function quickly.

:::