---
title: Docker
description: Run Casnode in a container
keywords: [docker, container, compose]
authors: [hsluoyz]
---

The repository contains a multi-stage `Dockerfile` that builds the Next.js frontend, compiles the Go backend and produces a small runtime image based on `node:22-alpine`.

## Build and run

```bash
docker build -t casnode .
docker run -d --name casnode \
  -p 16900:16900 \
  -v casnode-data:/app/data \
  casnode
```

Open `http://localhost:16900`. The first account you register is the administrator.

The image sets `dbName=/app/data/casnode.db` and `uploadsDir=/app/data/uploads`, so the SQLite database and uploads live in the `casnode-data` volume. Back up that volume, or the database and uploads separately if you use another database.

## Use MySQL or PostgreSQL

Configuration items can be passed as environment variables with the same names. This runs Casnode against a MySQL 8 container:

```yaml
services:
  db:
    image: mysql:8.4
    environment:
      MYSQL_ROOT_PASSWORD: change-me
      MYSQL_DATABASE: casnode
    volumes:
      - mysql-data:/var/lib/mysql

  casnode:
    build: .
    ports:
      - "16900:16900"
    environment:
      driverName: mysql
      dataSourceName: root:change-me@tcp(db:3306)/
      dbName: casnode
      httpport: "16900"
    depends_on:
      - db

volumes:
  mysql-data:
```

For PostgreSQL, use a DSN such as `user=casnode password=change-me host=db port=5432 sslmode=disable` and `driverName: postgres`. For SQL Server, use `driverName: mssql` and a DSN such as `sqlserver://sa:change-me@db:1433`.

You can also mount a `conf/app.local.conf` into the container instead of passing environment variables:

```bash
docker run -d -p 16900:16900 \
  -v casnode-data:/app/data \
  -v ./app.local.conf:/app/conf/app.local.conf:ro \
  casnode
```

## Behind a reverse proxy

The Go backend listens on `httpport` and proxies page requests to the Next.js server on `httpport + 1`. Only `httpport` needs to be exposed. When a proxy is in front, set `trustProxyHeader = true` (or `TRUSTPROXYHEADER=true`) so that the forum records the real client IP. See [Deployment](deployment.md).

## Upgrades

Build a new image and replace the container; the volume keeps the data. A 2.x image can be replaced by a newer 2.x image in place. A 1.x database cannot be upgraded; see [Introduction](introduction.md#casnode-2x-is-a-rewrite).