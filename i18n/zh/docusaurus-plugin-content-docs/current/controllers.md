---
title: 控制器
description: Use controllers to handle requests
keywords:
  - handler
  - controllers
  - request
authors:
  - kininaru
---

在 `路由器/路由器`中，您可以找到很多行像是

```go
Beego.Router("/api/get-topics", &controllers.ApiController{}, "GET:GetTopics")
```

请注意第三个参数 `"GET:GetTopics"`。 此字符串是HTTP 请求方法和请求处理器的函数名称的组合。 您可以在软件包 `控制器`中找到一个名为 `GetTopics` 的函数。 并且它是请求的处理程序 `/api/get-topics`

您可以通过这种方式找到请求的相应函数。

:::tip

If you are using **Goland**, you can press `Ctrl+Shift+F`(vscode use `Ctrl+F` instead), and search `func (c *ApiController) FunctionName` to locate to the function quickly.

:::