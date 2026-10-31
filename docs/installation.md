---
title: Installation
description: Install Casnode from a release archive or build it from source
keywords: [installation, install, deploy, release]
authors: [hsluoyz]
---

Casnode is distributed as an archive for Linux, macOS and Windows (amd64 and arm64), and can also be built from source. Both ways need [Node.js](https://nodejs.org/) 20 or newer on the machine that runs the forum, because the pages are rendered by a Next.js server.

## From a release archive

1. Download the archive for your platform from the [latest release](https://github.com/casnode/casnode/releases/latest) and unpack it. The archive contains the `casnode` binary (`casnode.exe` on Windows), the `conf/` folder and the built frontend in `web/build/`.
2. Optional: put your settings in `conf/app.local.conf`, next to `conf/app.conf`. The file uses the same `key = value` format and is not in git, so a new release does not overwrite it. See [Configuration](configuration.md).
3. Start the binary from the folder you unpacked:

   ```bash
   ./casnode
   ```

   On Windows, run `casnode.exe` from the same folder.
4. Open `http://localhost:16900` in a browser. The first account you register becomes the administrator. With the default configuration the database is a SQLite file called `casnode.db` and uploads go to `files/uploads/`, both relative to the working directory.

To run it as a service and put HTTPS in front, see [Deployment](deployment.md).

## From source

Requirements: Go 1.25 or newer, Node.js 20 or newer, and Yarn 1.

```bash
git clone https://github.com/casnode/casnode
cd casnode

cd web
yarn install
yarn build
cd ..

go build -o casnode .
./casnode
```

`yarn build` writes the frontend server to `web/build/server-<time>` and records it in `web/build/server.txt`. The Go binary starts that server on `httpport + 1` and proxies page requests to it.

## The first account

The first account registered on an empty database is the administrator, whether it signs up with a password or logs in through a single sign-on provider. Later accounts are ordinary members until an administrator promotes them on `/admin/users`.

The `admins` setting in `conf/app.conf` is different: it lists Casdoor user names that are always administrators. It does not apply to local accounts, because anyone could register a local account with such a name. Leave it empty if you do not use Casdoor.

## What to back up

- The database: `casnode.db` for SQLite, or the MySQL/PostgreSQL/SQL Server database configured in `conf/app.local.conf`.
- The uploads folder (`uploadsDir`, `files/uploads` by default).
- `conf/app.local.conf`.

Site settings, categories, users and posts live in the database, so the database backup is what matters most.

## Upgrading

2.x releases are drop-in replacements: stop the process, replace the binary and `web/build/`, keep `conf/app.local.conf` and the data, then start it again. 1.x cannot be upgraded in place; see [Introduction](introduction.md#casnode-2x-is-a-rewrite).