---
title: Paquet principal
description: Casnode main packages
keywords:
  - main
authors:
  - kininaru
---

Il y a plusieurs paquets dans le backend de Casnode. The main function and the Beego framework call these packages when the program starts.

## principal

Le paquet principal est l'entrée de Casnode. Nous faisons quelques étapes de configuration de base dans le paquet principal :

* **Configurer quelques variables globales**: adaptateur de base de données, client http, adaptateur OSS, Segmenter et informations de base du forum (version du forum, numéro en ligne, Google Groupes Crawlers)

* **Définition des filtres :** Filtre des requêtes API, filtre des robots de recherche

* **Données de session :** Casnode utilise la session Beego pour stocker les informations de l'utilisateur. Dans la fonction principale, a écrit ces lignes pour utiliser une session basée sur un fichier :

```go
beego.BConfig.WebConfig.Session.SessionProvider = "file"
beego.BConfig.WebConfig.Session.SessionProviderConfig = "./tmp"
beego.BConfig.WebConfig.SessionGCMaxLifetime = 3600 * 24 * 365
```

Veuillez vous référer à la [session Beego](https://beego.me/docs/mvc/controller/session.md) si vous voulez utiliser un autre adaptateur de session dans Beego.