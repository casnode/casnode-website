---
title: Migration from DiscuzX
slug: /migration
---

Casnode has provided a lot of Go scripts to help users migrate their forums from DiscuzX 3.x to Casnode. The scripts are located at: https://github.com/casbin/casnode/tree/master/discuzx

A Xorm-supported database (e.g., MySQL) is used by Cansode to store forum data like topics and replies. Object storage (as the form of Casdoor storage provider) is used by Casnode to store images and attachment files.

## Preparation

You need to prepare the following environments before conducting the migration:

1. A cloud VM (better with above 4 cores and 8GB memory, 8 cores and 16GB is even better), better with Intranet connection with the database for higher speed. This VM is used to run the Go migration scripts. 
2. A Casnode git repository with the Go migration scripts in the above VM (the Casnode instance can be running or stopped).
3. A running Casdoor instance (better in the same cloud VM for higher speed), with at least one object storage is configured as a Casdoor storage provider. This is used for uploading the images and attachment files of DiscuzX to the object storage.
4. Your DiscuzX instance is online.

## Configuration

First configure the Casdoor and Casnode correctly based on the their installation guides, make sure they are working normally before migration.

:::tip
Let Casdoor and Casnode connect to the DB's Intranet URL. Let Casdoor's storage provider's endpoint be the Intranet URL of the cloud object storage. It will be much faster.
:::

Configure the Casdoor database in Casnode's app.conf, so Casnode can directly connect to Casdoor's DB and create users. This will be faster than calling Casdoor's RESTful API to create users.

```ini
casdoorDbName = casdoor
```

Configure the migration script at: https://github.com/casbin/casnode/blob/master/discuzx/conf.go .

1. dbName: your DiscuzX's DB name
2. discuzxDomain: your DiscuzX's public domain, with trailing slash
3. discuzxAttachmentBaseUrl: your DiscuzX's attachment base URL, with trailing slash (you can get it from a attachment file URL of your DiscuzX)
4. avatarPoolBaseUrl: don't change this

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

### 1. User migration

To migrate all your DiscuzX's UCenter members to Casdoor's users:

Run `TestAddUsers` in: https://github.com/casbin/casnode/blob/master/discuzx/user_test.go

This step will roughly take 2 minutes for 60,000 users.

### 2. User avatar migration

To migrate all your DiscuzX's UCenter members' avatars to Casdoor's resources (via Casdoor's storage provider, backed by the cloud object storage):

Run `TestSyncAvatars` in: https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go

This step will roughly take 10 minutes for 60,000 users.

### 3. Forum migration

To migrate all your DiscuzX's forums to Casdoor's tabs and nodes:

Run `TestAddForums` in: https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go

This step will usually finish in 2 seconds.

### 4. Thread and post migration

To migrate all your DiscuzX's threads & posts to Casdoor's topics & replies:

Run `TestAddThreads` in: https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go

This step will roughly take 7 minutes for 10,000 users.

## Finalization

During the migration, you can keep the Casnode instance running at the same time, so you can see the effect immediately by pressing `F5` in Casnode's public homepage.

If you encounter panic when running the migration scripts, contact the Casnode authors.
