---
title: Router
description: Filters in Casnode
keywords:
  - routers
  - filter
authors:
  - kininaru
---

Tatsächlich ist `Router` ein integriertes Paket von Beego. `routers.init()` wird beim Programmstart vom Framework ausgeführt. Allerdings haben wir dem Paket einige Filterfunktionen hinzugefügt.

Wir werden hier nicht über die `Routers/Router.go` sprechen. Beego hatte bereits ein gutes Dokument dafür. Wir werden unsere Filter hier vorstellen.

## routers/filter.go

**TransparentStatic:** Dieser Filter dient zur Ausgabe statischer Dateien. Wenn ein Abfragepfad nicht mit `/api/`beginnt, wird der Filter eine statische Datei an den Browser weitergeben. Der Filter findet die angeforderte Datei in `web/build/`und liefert die Datei, falls vorhanden.

**FreshAccountActiveStatus:** Aktualisieren Sie die Online-Status der Benutzer, wenn sie eine Anfrage senden.

## routers/filter_ssr.go

Wir verwenden Chromedp um Seiten für Suchmaschinen-Bots zu rendern. Wenn Chrome installiert ist, werden Funktionen in dieser Datei eine gerenderte Seite an Bots zurückgeben.

Wir verwenden einen regulären Ausdruck `Bot|slurp|bing|crawler` um dem User Agent der Anfrage zu entsprechen. Wenn dies der Fall ist, denken wir, dass die Anfrage von einem Bot gesendet wird.