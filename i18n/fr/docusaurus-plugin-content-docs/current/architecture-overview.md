---
title: Aperçu
description: Casnode's architecture
keywords:
  - architecture
authors:
  - kininaru
---

Casnode est un projet open source. Une communauté active est sa vitalité.

Ce chapitre est destiné aux développeurs qui veulent contribuer à Casnode. Ici, vous apprendrez l'architecture de Casnode, et comment cela fonctionne.

## Architecture

Casnode a 2 parties : le frontend et le backend.

| Nom      | Libellé                                      | Outils                          | Code source                                       |
| -------- | -------------------------------------------- | ------------------------------- | ------------------------------------------------- |
| Frontend | Interface web pour Casnode                   | JavaScript + React + Ant-Design | https://github.com/casbin/casnode/tree/master/web |
| Backend  | Administration de l'API RESTful pour Casnode | Golang + Beego + MySQL + Xorm   | https://github.com/casbin/casnode                 |

Comme nous l'avons mentionné précédemment, dans les environnements de produits, le frontend de Casnode est construit et servi par le backend. Dans les environnements de développement, le frontend est servi par Nodejs. 