---
title: Introduction
description: What Casnode is and how it is put together
keywords: [introduction, overview, architecture]
authors: [hsluoyz]
---

Casnode is an open-source forum with the look and features of Discourse. The backend is a single Go binary; the pages are rendered by a Next.js server that the Go process starts and proxies to. It keeps the familiar Discourse interface (topic lists, the timeline beside a topic, the composer docked at the bottom, notifications and badges) without Ruby, PostgreSQL or Redis.

The project is developed by the Casbin community and used as its official forum at [forum.casbin.com](https://forum.casbin.com). A demo anyone can post in runs at [demo.casnode.com](https://demo.casnode.com). The code is at [github.com/casnode/casnode](https://github.com/casnode/casnode), under the Apache-2.0 license.

## How it fits together

```text
browser ──> Go backend (httpport, 16900 by default) ──> /api, /uploads, RSS, sitemap
                    │
                    └──> Next.js server (httpport + 1) ──> server-rendered pages
```

- The Go process owns the database, uploads, sessions, notifications, email, search and the HTTP API.
- The Next.js server renders every page on the server, so crawlers get the full HTML. The Go process forwards page requests to it.
- The default database is SQLite. MySQL, PostgreSQL and SQL Server are supported.
- Members can sign up with an email and a password, log in through any OpenID Connect or OAuth 2.0 provider, or use Casdoor.

## What you need

- A Linux, macOS or Windows machine.
- [Node.js](https://nodejs.org/) 20 or newer. The frontend server is a Node process, started by the Go binary.
- Go 1.25 or newer only if you build from source.

## Casnode 2.x is a rewrite

2.0 is a new code base with a new database schema. A 1.x forum cannot be upgraded in place: keep the old forum running and set up 2.x as a separate site. The old V2EX-style code is kept at [casnode/casnode-old](https://github.com/casnode/casnode-old) and is no longer maintained.

## Next steps

- [Installation](installation.md): run a release archive or build from source.
- [Configuration](configuration.md): ports, database, uploads and Casdoor.
- [Accounts and single sign-on](accounts-and-sso.md): local accounts, OIDC/OAuth providers and Casdoor.