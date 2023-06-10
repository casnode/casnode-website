---
title: Hauptpaket
description: Casnode main packages
keywords:
  - main
authors:
  - kininaru
---

Es gibt mehrere Pakete im Backend von Casnode. The main function and the Beego framework call these packages when the program starts.

## wichtigsten

Das Hauptpaket ist der Eingang von Casnode. Wir machen einige grundlegende Installationsschritte im Hauptpaket:

* **Richte einige globale Variablen**ein: Datenbankadapter, http Client, OSS-Adapter, Segmenter und Forum Basisinformationen (Forum-Version, Online-Nummer, Google Groups Crawlers)

* **Filter einrichten:** API-Request-Filter, Suchmaschinen-Bot-Filter

* **Sitzungsdaten:** Casnode verwendet Beego Session um Benutzerinformationen zu speichern. In der Hauptfunktion hat diese Zeilen geschrieben, um eine dateibasierte Sitzung zu verwenden:

```go
beego.BConfig.WebConfig.SessionProvider = "file"
beego.BConfig.WebConfig.Session.SessionProviderConfig = "./tmp"
beego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 3600 * 24 * 365
```

Bitte wenden Sie sich an [Beego Session](https://beego.me/docs/mvc/controller/session.md) wenn Sie einen anderen Sitzungsadapter in Beego verwenden möchten.