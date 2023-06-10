---
title: Контроллеры
description: Use controllers to handle requests
keywords:
  - handler
  - controllers
  - request
authors:
  - kininaru
---

В `маршрутизатора/маршрутизатора`, вы можете найти много строк, как

```go
beego.Router("/api/get-topics", &controllers.ApiController{}, "GET:GetTopics")
```

Обратите внимание на третий параметр `"GET:GetTopics"`. Эта строка представляет собой комбинацию метода HTTP-запроса и имени функции обработчика запроса. Вы можете найти функцию под названием `GetTopics` в пакете `контроллеров`, и это обработчик запроса `/api/get-topics`.

Вы можете найти соответствующую функцию запроса таким образом.

:::tip

If you are using **Goland**, you can press `Ctrl+Shift+F`(vscode use `Ctrl+F` instead), and search `func (c *ApiController) FunctionName` to locate to the function quickly.

:::