---
title: Основной пакет
description: Casnode main packages
keywords:
  - main
authors:
  - kininaru
---

В бекенде Casnode есть несколько пакетов. The main function and the Beego framework call these packages when the program starts.

## основная

Основным пакетом является вход в Casnode. Мы делаем некоторые основные шаги настройки в основном пакете:

* **Настройка глобальных переменных**: адаптер баз данных, http клиент, OSS адаптер, Segmenter и основная информация форума (версия форума, онлайновый номер, Google Groups Crawlers)

* **Фильтры установки:** Фильтр API, фильтр ботов поисковых систем

* **Данные сессии:** Casnode использует Beego сессию для хранения информации о пользователе. В основной функции написал эти строки, чтобы использовать сеанс на основе файла:

```go
beego.BConfig.WebConfig.Session.SessionProvider = "file"
beego.BConfig.WebConfig.Session.SessionProviderConfig = "./tmp"
beego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 3600 * 24 * 365
```

Пожалуйста, обратитесь к [Beego session](https://beego.me/docs/mvc/controller/session.md) , если вы хотите использовать другой сессионный адаптер в Beego.