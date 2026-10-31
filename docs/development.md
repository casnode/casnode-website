---
title: Development
description: Build and run Casnode from source, and work on the code
keywords: [development, source, build, contribute]
authors: [hsluoyz]
---

## Requirements

- Go 1.25 or newer.
- Node.js 20 or newer and Yarn 1.
- No database server for development: the default is a SQLite file.

## Run the backend and frontend

```bash
git clone https://github.com/casnode/casnode
cd casnode
echo "devSignin = true" > conf/app.local.conf
go run .
```

The backend runs on `http://localhost:16900` and creates `casnode.db` on first start. In a second terminal:

```bash
cd web
yarn install
yarn dev
```

The frontend development server runs on `http://localhost:13900` with hot reload and forwards `/api` and the other backend paths to port 16900.

Open `http://localhost:13900/login` and sign in as any user name without a password (`devSignin` only accepts requests from `127.0.0.1`; never enable it on a server). The first account created on an empty database is the administrator.

## Production build

```bash
cd web
yarn install
yarn build
cd ..
go build -o casnode .
./casnode
```

`yarn build` writes the Next.js server to `web/build/server-<time>` and records the folder in `web/build/server.txt`. The Go binary starts that server on `httpport + 1` and proxies page requests to it. Building a new frontend does not disturb a running forum until you restart the backend.

## Checks

```bash
gofmt -l .
go vet ./...
cd web && yarn lint && yarn build
```

CI runs the same checks on every push.

## Where the code is

| Path | Contents |
| --- | --- |
| `main.go` | Starts the database, the API, the Next.js child process and the periodic jobs. |
| `object/` | Data model and business logic: users, topics, posts, groups, badges, chat, email, search, the message bus. |
| `controllers/` | The HTTP API handlers. |
| `routers/` | Routes, RSS/sitemap/robots, static files and the proxy to Next.js. |
| `conf/` | Configuration loading (`app.conf`, `app.local.conf`, environment variables, shared code). |
| `tools/import_topics/` | The import tool (see [Importing topics](importing.md)). |
| `web/src/app/` | Next.js App Router pages. |
| `web/src/components/` | UI components. |
| `web/src/lib/locales/` | Interface translations. |

The backend expects `conf/app.conf` and, for a frontend build, `web/build` to be reachable from the working directory. When a thin site's folder does not have them, the sibling `casnode` folder is used (see [Configuration](configuration.md#running-several-forums-from-one-folder-of-code)).

## Commit and release

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org) (`feat: ...`, `fix: ...`, `docs: ...`). Releases are made by hand: pushing a tag such as `v2.1.0` makes CI build the backend for Linux, macOS and Windows (amd64 and arm64), pack each with `conf/` and the built frontend, and publish a GitHub release.

```bash
git tag v2.1.0
git push origin v2.1.0
```

## Architecture

See [Architecture](architecture.md) for how a request flows through the backend and the frontend, and [HTTP API](api.md) for the endpoints the frontend uses.