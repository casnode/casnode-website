---
title: Configuration
description: Configure Casnode with app.conf, app.local.conf and environment variables
keywords: [configuration, config, app.conf, database, port]
authors: [hsluoyz]
---

Casnode reads its configuration from three places, in this order:

1. `conf/app.conf`, the defaults that ship with the code.
2. `conf/app.local.conf`, a file with the same `key = value` format that is **not** in git. Put your own settings and secrets here, so pulling a new release never conflicts with them.
3. Environment variables with the same names as the items below. An environment variable wins over both files.

Changes to these items take effect when the process restarts. Settings in the admin area (site name, branding, email, posting rules and so on) are stored in the database and apply immediately.

## Items

| Item | Default | Meaning |
| --- | --- | --- |
| `httpport` | `16900` | Port of the Go backend. The Next.js frontend server listens on `httpport + 1`; the Go process starts it and proxies page requests to it. Only `httpport` needs to be reachable from outside. |
| `driverName` | `sqlite` | `sqlite`, `mysql`, `postgres` or `mssql`. |
| `dataSourceName` | empty | The DSN for MySQL, PostgreSQL or SQL Server; unused by SQLite. |
| `dbName` | `casnode.db` | The database name, or the file name for SQLite. |
| `uploadsDir` | `files/uploads` | Where uploaded images and files are stored. |
| `casdoorEndpoint` | empty | Your Casdoor URL, for example `https://door.example.com`, to show a "Continue with Casdoor" login button. Leave empty to hide it. |
| `clientId`, `clientSecret` | empty | The Casdoor application's client ID and secret. Put the secret only in `conf/app.local.conf`. |
| `casdoorOrganization`, `casdoorApplication` | empty | Only users of this Casdoor organization can sign in through Casdoor. |
| `admins` | `admin` | Casdoor user names that always administer the forum, comma-separated. It does not apply to local accounts, because anyone could register a local account with such a name. |
| `trustProxyHeader` | `false` | Behind Nginx, Caddy or CasWAF, take the client IP from `X-Forwarded-For`. |
| `devSignin` | `false` | Sign in as any user name without a password, only from `127.0.0.1`. For local development only; never enable it on a server. |

## Database connection

SQLite needs nothing beyond `dbName`:

```ini
driverName = sqlite
dbName = casnode.db
```

MySQL, PostgreSQL and SQL Server examples:

```ini
driverName = mysql
dataSourceName = root:123456@tcp(localhost:3306)/
dbName = casnode
```

```ini
driverName = postgres
dataSourceName = user=postgres password=123456 host=localhost port=5432 sslmode=disable
dbName = casnode
```

```ini
driverName = mssql
dataSourceName = sqlserver://sa:123456@localhost:1433
dbName = casnode
```

The database and its tables are created on the first start. Keep the database and `uploadsDir` backed up; they hold everything the forum knows. See [Deployment](deployment.md#backups).

## Casdoor

To let members sign in through Casdoor, set:

```ini
casdoorEndpoint = https://door.example.com
clientId = your-client-id
clientSecret = your-client-secret
casdoorOrganization = casnode
casdoorApplication = app-casnode
```

and add `https://your-forum.example.com/callback` to the application's redirect URLs in Casdoor. The Casdoor user names in `admins` are administrators of the forum, and anyone who is an administrator in Casdoor is one here too.

Local accounts and providers added on `/admin/logins` work without Casdoor. See [Accounts and single sign-on](accounts-and-sso.md).

## Uploads

`uploadsDir` is where files are written. Two site settings limit what members can upload:

- `max_upload_size_kb` (default 4096) is the largest file, in KB.
- `authorized_extensions` (default `jpg|jpeg|png|gif|webp|svg|pdf|zip|txt`) is the list of allowed extensions.

The HTTP server itself also has a hard limit of 64 MB per request. If a reverse proxy is in front, raise its body limit as well (for Nginx, `client_max_body_size 64m;`).

## Running several forums from one folder of code

A forum normally needs the binary, `conf/app.conf`, `web/build/` and its own data. Several forums on one server can share the code and keep only their own settings and files. Create a folder next to the main `casnode` folder with just `conf/app.local.conf` (and its `tmp/`, `files/` and database), and start the same binary from it. When a file such as `conf/app.conf` or `web/build` is missing from the site's folder, Casnode reads it from the sibling `casnode` folder. Each site still needs its own `httpport`, database and `uploadsDir`.

```text
/opt/forums/
  casnode/                 the full install: casnode, conf/app.conf, web/build/
  forum-a/                 conf/app.local.conf, casnode.db, files/
  forum-b/                 conf/app.local.conf, casnode.db, files/
```

Start each forum from its own folder (`cd /opt/forums/forum-a && ../casnode/casnode`).

## Reverse proxy

Set `trustProxyHeader = true` behind a proxy so that the recorded client IP is the real one. See [Deployment](deployment.md) for an Nginx example and a systemd unit.