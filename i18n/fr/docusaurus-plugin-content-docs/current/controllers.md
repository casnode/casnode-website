---
title: Contrôleurs
description: Use controllers to handle requests
keywords:
  - handler
  - controllers
  - request
authors:
  - kininaru
---

Dans `routers/router.go`, vous pouvez trouver beaucoup de lignes comme

```go
Beego.Router("/api/get-topics", &controllers.ApiController{}, "GET:GetTopics")
```

Veuillez prêter attention au troisième paramètre `"GET:GetTopics"`. Cette chaîne de caractères est une combinaison de la méthode de requête HTTP et du nom de la fonction du gestionnaire de requêtes. Vous pouvez trouver une fonction appelée `GetTopics` dans le paquet `contrôleurs`, et c'est le gestionnaire de la requête `/api/get-topics`.

Vous pouvez trouver la fonction correspondante de la requête de cette façon.

:::tip

If you are using **Goland**, you can press `Ctrl+Shift+F`(vscode use `Ctrl+F` instead), and search `func (c *ApiController) FunctionName` to locate to the function quickly.

:::