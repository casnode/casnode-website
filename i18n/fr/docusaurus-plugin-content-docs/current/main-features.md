---
title: Caractéristiques principales
description: Casnode main features
keywords:
  - features
authors:
  - kininaru
---

Il y a des caractéristiques spéciales qui distinguent Casnode des autres forums. Voici une courte introduction de ces fonctionnalités. Lisez ici pour plus de détails.

## :e-mail : Liste de diffusion

Casnode supporte bien les groupes Google. En intégrant [google-group-crawler](https://github.com/casbin/google-groups-crawler), après avoir configuré une configuration Google Group dans Casnode, une synchronisation bidirectionnelle sera lancée. Pour l'instant, Casnode ne peut que synchroniser les conversations de Google Groups, mais peut pousser des conversations vers d'autres listes de diffusion.

## ✨ Multi-plateforme

Casnode prend en charge l'accès aux ordinateurs et aux mobiles. L'interface utilisateur s'adapte au PC et au mobile.

## :magnifying_glass_tilted_left : Recherche intégrée

Casnode prend en charge la recherche intégrée, bien sûr, aussi la recherche à l'aide de différents moteurs tels que Google.

## 🖼️ Télécharger des images et des pièces jointes

Support casnode glisser-déposer pour télécharger des images et des pièces jointes. En même temps, chaque compte a sa propre bibliothèque de fichiers et quota. Les fichiers de la bibliothèque de fichiers peuvent également être partagés en utilisant des liens de partage, ce qui rend plus pratique la publication d'images et d'images. Supporte divers stockages OSS tels que Alibaba Cloud et Tencent Cloud.

## :loudspeaker : Publicité du site

Soutien à la mise en place de publicités sur le site, qui peuvent être fournies de manière indépendante à partir de l'arrière-plan.

## 🎯 rendu latéral du serveur

Casnode supporte le rendu côté serveur, convivial pour le référencement des moteurs de recherche.

## 🗄️ Toutes sortes de bases de données

Casnode utilise [xorm](https://github.com/go-xorm/xorm) pour se connecter à des bases de données. Vous pouvez utiliser MySQL, sqlite3, mymysql et Postgres pour Casnode.

## 🌐 Multi-langues

Casnode uses i18next and [Crowdin](https://crowdin.com/project/casnode/) to support multi-language. Maintenant Casnode supporte le chinois, l'anglais, le français, l'allemand, le russe, le japonais et le coréen. Bienvenue pour faire une PR ou déposer un problème pour supporter votre langue! Et toute contribution à la traduction est la bienvenue!

## 🚪 Utiliser Casdoor pour gérer les membres

Casnode ne maintient pas de table de membre dans la base de données. Casnode utilise [Casdoor](https://github.com/casbin/casdoor) pour gérer les utilisateurs. Casdoor est une plate-forme SSO basée sur OAuth2.0. Grâce à Casdoor, Casnode prend en charge une variété de méthodes de connexion et d'enregistrement de tiers. Il existe de nombreuses méthodes d'inscription, téléphone mobile, email, QQ, WeChat, GitHub, Facebook, Google, LinkedIn, DingTalk, Gitee, wecom et GitLab. Il supporte également les codes de vérification graphique pour la vérification de la machine humaine. Si vous utilisez Casdoor pour la gestion de votre organisation, vos membres peuvent vous connecter directement à Casnode, pas besoin de vous inscrire à nouveau à Casnode. Pour obtenir des fonctionnalités plus détaillées, veuillez aller sur [Casdoor](https://casdoor.org).
