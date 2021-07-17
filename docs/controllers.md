---
title: Controllers
slug: /controllers
---

In `routers/router.go`, you can find lots of lines like 

```go
beego.Router("/api/get-topics", &controllers.ApiController{}, "GET:GetTopics")
```

Please pay attention to the third parameter `"GET:GetTopics"`. This string is a combination of HTTP request method, and the function name of the request handler. You can find a function called `GetTopics` in the package `controllers`, and it is the handler of the request `/api/get-topics`.

You can find the corresponding function of the request this way.

:::tip
If you are using **Goland**, you can press `Ctrl+Shift+F`, and search `func (c *ApiController) FunctionName` to locate to the function quickly.
:::