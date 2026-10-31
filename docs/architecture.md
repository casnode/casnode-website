---
title: Architecture
description: How a Casnode request flows through the Go backend and the Next.js frontend
keywords: [architecture, internals, data model]
authors: [hsluoyz]
---

Casnode is two processes started as one: a Go backend and a Next.js server that the backend starts and proxies to. The Go process is the only one that talks to the database, the filesystem and the outside world.

```text
browser
  │
  ▼
Go backend (httpport, 16900)
  ├── /api/...            JSON API
  ├── /uploads/...        uploaded files
  ├── /sitemap.xml, /robots.txt, *.rss
  └── everything else ──> Next.js server (httpport + 1)
                              └── server-rendered HTML
```

## The backend

- **HTTP:** [beego](https://github.com/beego/beego) v2 with [xorm](https://github.com/xorm-io/xorm) for MySQL, PostgreSQL, SQLite and SQL Server.
- **Data model:** `user`, `category`, `topic`, `post`, `post_revision`, `post_action`, `topic_user`, `topic_allowed_user`, `tag`, `topic_tag`, `notification`, `reviewable`, `upload`, `site_setting`, `user_visit`, plus the tables for groups, badges, polls, chat, link previews, import records and auth providers.
- **Sessions:** file-based, in `tmp/`; the cookie is `casnode_session_id` and lasts 30 days.
- **Uploads:** written to `uploadsDir` and served at `/uploads/...`.
- **Live updates:** `object/message_bus.go` keeps recent events in memory and answers `/api/message-bus-poll` with a long poll of up to 25 seconds. The frontend uses it for new replies, notifications and chat.
- **Periodic jobs:** email delivery, badge grants and other housekeeping run in the Go process; there is no external queue or worker.
- **Search, RSS and sitemaps:** served by the Go process. The sitemap is split into pages of 10,000 URLs and points at the canonical site URL from the site settings.

## The frontend

Next.js 16 App Router with React Server Components. Pages are rendered on the server so that crawlers receive the full HTML; the Go process forwards anything that is not `/api`, `/uploads`, a feed, a sitemap or a static file. Topic pages include canonical, Open Graph and JSON-LD (`DiscussionForumPosting`) metadata; categories, tags and profiles have their own metadata.

Static assets can be served from a CDN. `routers/cdn.go` reads the frontend build's `cdn.txt` and rewrites `/_next/static/` URLs and `Link` headers to the CDN base when one is configured.

## Accounts

- Local accounts: bcrypt hashes in `user.password_hash`, rate-limited logins and resets.
- Single sign-on: `auth_provider` holds providers, `user_auth` links a provider and subject to a user. The flow is authorization code with PKCE; profiles come from the provider's user-info endpoint.
- Casdoor: configured in `conf/app.conf`, with the same session and user model as the other providers.

## Thin sites

One installation can serve several forums. A thin site's folder contains only its own `conf/app.local.conf` and data; missing files such as `conf/app.conf` and `web/build` are read from the sibling `casnode` folder (`conf.GetSharedPath`). This is how several forums share one binary and one frontend build on a server.

## Constraints

The design favors a simple single-node deployment:

- The message bus is in memory, so multiple instances do not share live updates.
- Sessions are files in `tmp/`, local to the instance.
- SQLite has a single writer.

For a multi-instance deployment, use MySQL or PostgreSQL, share `uploadsDir` and `tmp/`, and use sticky sessions at the load balancer. One instance is the supported configuration.