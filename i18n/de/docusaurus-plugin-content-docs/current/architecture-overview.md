---
title: Übersicht
description: Casnode's architecture
keywords:
  - architecture
authors:
  - kininaru
---

Casnode ist ein Open-Source-Projekt. Eine aktive Gemeinschaft ist ihre Vitalität.

Dieses Kapitel ist für Entwickler, die zu Casnode beitragen wollen. Hier erfahren Sie die Architektur von Casnode und wie es funktioniert.

## Architektur

Casnode hat 2 Teile: das Frontend und das Backend.

| Name     | Beschreibung                    | Werkzeuge                           | Quellcode                                         |
| -------- | ------------------------------- | ----------------------------------- | ------------------------------------------------- |
| Frontend | Web-Frontend UI für Casnode     | JavaScript + Reagieren + Ant-Design | https://github.com/casbin/casnode/tree/master/web |
| Backend  | RESTful API Backend für Casnode | Golang + Beego + MySQL + Xorm       | https://github.com/casbin/casnode                 |

Wie bereits erwähnt, wird das Frontend von Casnode in der Produktumgebung gebaut und von der Backend bedient. In Entwicklungsumgebungen wird das Frontend von Nodejs bedient. 