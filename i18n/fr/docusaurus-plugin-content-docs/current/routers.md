---
title: Routeurs
description: Filters in Casnode
keywords:
  - routers
  - filter
authors:
  - kininaru
---

En fait, `routeurs` est un paquet intégré de Beego. `routers.init()` est exécuté par le framework lorsque le programme démarre. Cependant, nous avons ajouté quelques fonctions de filtrage au paquet.

Nous n'allons pas parler du `routers/router.go` ici, Beego a déjà eu un bon document pour cela. Nous allons introduire nos filtres ici.

## go

**TransparentStatique :** Ce filtre est pour servir les fichiers statiques. Si un chemin de requête ne commence pas par `/api/`, alors le filtre servira un fichier statique au navigateur. Le filtre va trouver le fichier demandé dans `web/build/`, et servir le fichier s'il existe.

**FreshAccountActiveStatus :** Mettez à jour les états en ligne des utilisateurs lorsqu'ils envoient une demande.

## routeurs/filtre_ssr.go

Nous utilisons Chromedp pour afficher les pages des robots des moteurs de recherche. Si Chrome est installé, les fonctions de ce fichier retourneront une page rendue aux bots.

Nous utilisons une expression régulière `bot|slurp|bing|crawler` pour correspondre à l'agent utilisateur de la requête. En cas de correspondance, nous pensons que la requête est envoyée par un bot.