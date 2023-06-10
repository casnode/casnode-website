---
title: Migration von DiscuzX
description: Migration from DiscuzX
keywords:
  - discuz
  - discuz!
  - discuzx
authors:
  - hsluoyz
---

Casnode hat eine Menge Go-Skripte zur Verfügung gestellt, um Benutzern zu helfen, ihre Foren von DiscuzX 3.x nach Casnode zu migrieren. Die Skripte befinden sich unter: https://github.com/casbin/casnode/tree/master/discuzx

Eine Xorm-unterstützte Datenbank (z.B. MySQL) wird von Cansode verwendet, um Forendaten wie Themen und Antworten zu speichern. Die Objektspeicherung (als Form des Casdoor Speicheranbieters) wird von Casnode zur Speicherung von Bildern und Dateianhängen verwendet.

## Zubereitung

Sie müssen die folgenden Umgebungen vorbereiten, bevor Sie die Migration durchführen:

1. Eine Cloud-VM (besser mit über 4 Kernen und 8 GB Speicher, 8 Kerne und 16 GB ist noch besser), besser bei Intranet-Verbindung mit der Datenbank für höhere Geschwindigkeit. Diese VM wird verwendet, um die Go-Migrationsskripte auszuführen.
2. Ein Casnode Git-Repository mit den Go-Migrationsskripten in der obigen VM (die Casnode-Instanz kann ausgeführt oder gestoppt werden).
3. Eine laufende Casdoor Instanz (besser in der gleichen Cloud VM für höhere Geschwindigkeit), mit mindestens einem Objektspeicher als Speicheranbieter von Casdoor konfiguriert. Dies wird zum Hochladen der Bilder und Anhänge von DiscuzX in den Objektspeicher verwendet.
4. Ihre DiscuzX-Instanz ist online.

## Konfiguration

Konfigurieren Sie zuerst die Casdoor und Casnode basierend auf den Installationsanleitungen, stellen Sie sicher, dass sie vor der Migration normal funktionieren.

:::tip

Let Casdoor and Casnode connect to the DB's Intranet URL. Let Casdoor's storage provider's endpoint be the Intranet URL of the cloud object storage. It will be much faster.

:::

Configure the Casdoor database in Casnode's app.conf, so Casnode can directly connect to Casdoor's DB and create users. This will be faster than calling Casdoor's RESTful API to create users.

```ini
casdoorDbName = casdoor
```

Configure the migration script at: https://github.com/casbin/casnode/blob/master/discuzx/conf.go .

1. dbName: Ihr DiscuzX's DB-Name
2. discuzxDomain: DiscuzX public Domain, mit folgendem Schrägstrich
3. discuzxAttachmentBaseUrl: Die Anhang-Basis-URL Ihres DiscuzX mit folgendem Schrägstrich (Sie können es von einer URL der Anhang-Datei Ihres DiscuzX erhalten)
4. avatarPoolBaseUrl: Ändern Sie dies nicht

```go
package discuzx

var dbName = "ultrax"
var discuzxDomain = "https://www.discuz.net/"
var discuzxAttachmentBaseUrl = "https://attachment.discuz.net/forum/"
```

:::tip

In Casnode, we assume you use the same DB username and password for all 3 DBs: Casnode's DB, Casdoor's DB and DiscuzX's DB. So make sure this DB user can access all 3 DBs.

:::

## Migration

You may see the `XXXConcurrency` is defined at the top of the scripts, this is the number of the concurrent threads to do the migration. You can tune this value based on your environment. If it is too small, the migration will be very slow. If it is too high, the DB connections will be more likely to report "Connections too many" errors.

```go
var SyncAvatarsConcurrency = 20
```

:::tip

The estimation time we provide in the following sections is measured in a machine with remote Internet connection with the DB and object storage. If your VM is in the same subnet with the DB and object storage, you will be much faster.

:::

### 1. Benutzermigration

To migrate all your DiscuzX's UCenter members to Casdoor's users:

Run `TestAddUsers` in: https://github.com/casbin/casnode/blob/master/discuzx/user_test.go

This step will roughly take 2 minutes for 60,000 users.

### 2. Benutzer Avatar-Migration

To migrate all your DiscuzX's UCenter members' avatars to Casdoor's resources (via Casdoor's storage provider, backed by the cloud object storage):

Run `TestSyncAvatars` in: https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go

This step will roughly take 10 minutes for 60,000 users.

### 3. Forum Migration

To migrate all your DiscuzX's forums to Casdoor's tabs and nodes:

Run `TestAddForums` in: https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go

This step will usually finish in 2 seconds.

### 4. Thread und Post-Migration

To migrate all your DiscuzX's threads & posts to Casdoor's topics & replies:

Run `TestAddThreads` in: https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go

This step will roughly take 7 minutes for 10,000 users.

## Fertigstellung

During the migration, you can keep the Casnode instance running at the same time, so you can see the effect immediately by pressing `F5` in Casnode's public homepage.

If you encounter panic when running the migration scripts, contact the Casnode authors.
