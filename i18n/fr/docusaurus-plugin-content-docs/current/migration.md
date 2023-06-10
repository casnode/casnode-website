---
title: Migration depuis DiscuzX
description: Migration from DiscuzX
keywords:
  - discuz
  - discuz!
  - discuzx
authors:
  - hsluoyz
---

Casnode a fourni un grand nombre de scripts Go pour aider les utilisateurs à migrer leurs forums de DiscuzX 3.x vers Casnode. Les scripts se trouvent à l'adresse : https://github.com/casbin/casnode/tree/master/discuzx

Une base de données prise en charge par Xorm (par exemple, MySQL) est utilisée par Cansode pour stocker des données de forum comme des sujets et des réponses. Le stockage d'objets (comme la forme du fournisseur de stockage Casdoor) est utilisé par Casnode pour stocker des images et des fichiers joints.

## Préparation

Vous devez préparer les environnements suivants avant d'effectuer la migration :

1. Une VM nuageuse (mieux avec plus de 4 cœurs et 8 Go de mémoire, 8 cœurs et 16 Go est encore mieux), mieux avec la connexion Intranet avec la base de données pour une vitesse plus élevée. Cette machine virtuelle est utilisée pour exécuter les scripts de migration Go.
2. Un dépôt git de Casnode avec les scripts de migration Go dans la machine virtuelle ci-dessus (la instance de Casnode peut être exécutée ou arrêtée).
3. Une instance Casdoor en cours d'exécution (meilleure dans la même VM nuageuse pour une vitesse plus élevée), avec au moins un stockage d'objet est configuré en tant que fournisseur de stockage Casdoor . Ceci est utilisé pour télécharger les images et fichiers attachés de DiscuzX sur le stockage d'objet.
4. Votre instance DiscuzX est en ligne.

## Configuration

Tout d'abord, configurez correctement Casdoor et Casnode en fonction de leurs guides d'installation, assurez-vous qu'ils fonctionnent normalement avant la migration.

:::tip

Let Casdoor and Casnode connect to the DB's Intranet URL. Let Casdoor's storage provider's endpoint be the Intranet URL of the cloud object storage. It will be much faster.

:::

Configure the Casdoor database in Casnode's app.conf, so Casnode can directly connect to Casdoor's DB and create users. This will be faster than calling Casdoor's RESTful API to create users.

```ini
format@@0 casdoorDbName = casdoor
```

Configure the migration script at: https://github.com/casbin/casnode/blob/master/discuzx/conf.go .

1. dbName: le nom de votre DB de DiscuzX
2. discuzxDomain: le domaine public de votre DiscuzX, avec slash final
3. discuzxAttachmentBaseUrl : l'URL de base de votre pièce jointe DiscuzX, avec une barre oblique finale (vous pouvez la récupérer à partir d'une URL de fichier attaché de votre DiscuzX)
4. avatarPoolBaseUrl: ne pas changer ceci

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

### 1. Migration des utilisateurs

To migrate all your DiscuzX's UCenter members to Casdoor's users:

Run `TestAddUsers` in: https://github.com/casbin/casnode/blob/master/discuzx/user_test.go

This step will roughly take 2 minutes for 60,000 users.

### 2. Migration des avatars de l'utilisateur

To migrate all your DiscuzX's UCenter members' avatars to Casdoor's resources (via Casdoor's storage provider, backed by the cloud object storage):

Run `TestSyncAvatars` in: https://github.com/casbin/casnode/blob/master/discuzx/avatar_test.go

This step will roughly take 10 minutes for 60,000 users.

### 3. Migration du forum

To migrate all your DiscuzX's forums to Casdoor's tabs and nodes:

Run `TestAddForums` in: https://github.com/casbin/casnode/blob/master/discuzx/forum_test.go

This step will usually finish in 2 seconds.

### 4. Migration de fils et de messages

To migrate all your DiscuzX's threads & posts to Casdoor's topics & replies:

Run `TestAddThreads` in: https://github.com/casbin/casnode/blob/master/discuzx/thread_test.go

This step will roughly take 7 minutes for 10,000 users.

## Finalisation

During the migration, you can keep the Casnode instance running at the same time, so you can see the effect immediately by pressing `F5` in Casnode's public homepage.

If you encounter panic when running the migration scripts, contact the Casnode authors.
