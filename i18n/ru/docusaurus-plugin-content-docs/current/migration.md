---
title: Миграция с DiscuzX
description: Migration from DiscuzX
keywords:
  - discuz
  - discuz!
  - discuzx
authors:
  - hsluoyz
---

Casnode предоставил множество скриптов Go, чтобы помочь пользователям перенести их форумы с DiscuzX 3.x на Casnode. Скрипты находятся в: https://github.com/casbin/casnode/tree/master/discuzx

База данных, поддерживаемая Xorm-ом (например, MySQL), используется Cansode для хранения данных форума, таких как темы и ответы. Хранилище объектов (в виде провайдера хранения кастрюля) используется Casnode для хранения изображений и вложенных файлов.

## Подготовка

Перед миграцией необходимо подготовить следующие окружения:

1. Облачный VM (лучше с 4 ядрами и 8GB памяти, 8 ядрами и 16ГБ еще лучше), лучше при подключении к Intranet с базой данных для более высокой скорости. Этот ВМ используется для запуска сценариев миграции Го.
2. Репозиторий Casnode git со скриптами миграции Go в вышеприведенном VM (экземпляр Casnode может быть запущен или остановлен).
3. Заработающий экземпляр каштана (лучше в том же облаке VM для более высокой скорости), с хотя бы одним хранилищем объектов сконфигурировано как провайдер хранения кассет. Используется для загрузки изображений и вложенных файлов DiscuzX в хранилище объектов.
4. Экземпляр DiscuzX находится в сети.

## Конфигурация

Сначала настройте корпус и кастро правильно основываясь на руководствах по установке, убедитесь, что они работают нормально перед миграцией.

:::tip

Let Casdoor and Casnode connect to the DB's Intranet URL. Let Casdoor's storage provider's endpoint be the Intranet URL of the cloud object storage. It will be much faster.

:::

Configure the Casdoor database in Casnode's app.conf, so Casnode can directly connect to Casdoor's DB and create users. This will be faster than calling Casdoor's RESTful API to create users.

```ini
casdoorDbName = люк
```

Configure the migration script at: https://github.com/casbin/casnode/blob/master/discuzx/conf.go .

1. dbName: название базы данных DiscuzX
2. discuzxDomain: публичный домен DiscuzX с конечной косой чертой
3. discuzxAttachmentBaseUrl: URL базы вложений DiscuzX с замыкающей косой чертой (вы можете получить его из URL-адреса вложенного файла DiscuzX)
4. avatarPoolBaseUrl: не изменяйте это

```go
пакет discuzx

var dbName = "ultrax"
var discuzxDomain = "https://www.discuz.net/"
var discuzxAttachmentBaseUrl = "https://attachment.discuz.net/forum/"
```

:::tip

In Casnode, we assume you use the same DB username and password for all 3 DBs: Casnode's DB, Casdoor's DB and DiscuzX's DB. So make sure this DB user can access all 3 DBs.

:::

## Миграция

You may see the `XXXConcurrency` is defined at the top of the scripts, this is the number of the concurrent threads to do the migration. You can tune this value based on your environment. If it is too small, the migration will be very slow. If it is too high, the DB connections will be more likely to report "Connections too many" errors.

```go
SyncAvatarsConcurrency = 20
```

:::tip

The estimation time we provide in the following sections is measured in a machine with remote Internet connection with the DB and object storage. If your VM is in the same subnet with the DB and object storage, you will be much faster.

:::

### 1. Перенос пользователей

To migrate all your DiscuzX's UCenter members to Casdoor's users:

Run `TestAddUsers` in: https://github.com/casbin/casnode/blob/master/discuzx/user_test.go

This step will roughly take 2 minutes for 60,000 users.

### 2. Перенос аватара пользователя

To migrate all your DiscuzX's UCenter members' avatars to Casdoor's resources (via Casdoor's storage provider, backed by the cloud object storage):

Run `TestSyncAvatars` in: https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go

This step will roughly take 10 minutes for 60,000 users.

### 3. Перенос форума

To migrate all your DiscuzX's forums to Casdoor's tabs and nodes:

Run `TestAddForums` in: https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go

This step will usually finish in 2 seconds.

### 4. Миграция темы и постов

To migrate all your DiscuzX's threads & posts to Casdoor's topics & replies:

Run `TestAddThreads` in: https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go

This step will roughly take 7 minutes for 10,000 users.

## Завершение

During the migration, you can keep the Casnode instance running at the same time, so you can see the effect immediately by pressing `F5` in Casnode's public homepage.

If you encounter panic when running the migration scripts, contact the Casnode authors.
