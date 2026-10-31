---
title: Features
description: What a Casnode forum can do
keywords: [features]
authors: [hsluoyz]
---

Casnode follows Discourse's default experience closely, from the topic list to the composer, and adds the administration tools a small community needs. Everything below is part of the 2.x code base.

## Reading and posting

- **Topic lists:** Latest, New, Unread, Hot and Top (year, quarter, month, week, day), filtered by category or tag. Pinned topics, unread counts, poster avatars and endless scrolling.
- **Topics:** The post stream loads in both directions, with the timeline on the right, views, likes, participants and reading time. Replies appear in place, and new replies arrive without a refresh through long polling.
- **Composer:** Markdown with a live preview and toolbar, image and file uploads by paste or drag and drop, `@mentions`, tags, drafts, polls, emoji shortcodes, and Discourse's `[quote]` and `[details]` blocks. Links on their own line turn into preview cards.
- **Quoting and editing:** Quote a selected passage, edit your own posts (with an edit history), and see suggested topics below a topic.
- **Search:** Full-text search with `@user`, `#category`, `tags:name`, `in:title`, `in:messages`, `status:open`, `order:latest`, `order:likes` and `order:views`, plus quick results in the header.

## People and notifications

- **Notifications:** Mentions, replies, quotes, likes and private messages. Notification levels per topic (Watching, Tracking, Normal, Muted) and the reading position are remembered.
- **Email:** Replies, mentions, private messages and chat mentions can be sent by email, immediately or after a delay, depending on whether the member is online. Admins can also send every new topic and reply to a fixed list of addresses. See [Email](email.md).
- **Private messages and chat:** Personal messages between members, category chat channels and direct chats, with reactions, replies and unread counts.
- **Profiles and the user directory:** Profiles with activity and badges, user cards, and the member directory.
- **Groups:** Public groups, groups that require approval, group mentions, group messages, and category permissions granted to a group.
- **Badges:** 28 system badges, custom badges, badges shown on profiles and user cards, and badges that can be chosen as a title.
- **Flags and moderation:** Members can flag posts; staff handle them in the review queue. Staff can close, pin, archive, unlist, delete and recover topics and posts, move or merge posts into another topic, and silence or suspend members.

## Administration

- **Site settings:** Site name, logos, brand colors, fonts, header links, a homepage banner, custom CSS, header and footer HTML, About/FAQ/terms/privacy texts, posting limits, tags, upload rules and analytics IDs.
- **Categories and tags:** Create and reorder categories, choose colors, and restrict reading or posting to groups.
- **Users:** Browse and search members, promote administrators, silence or suspend accounts, and inspect their activity.
- **Sign-in:** Local accounts, single sign-on providers and Casdoor, all managed from the admin area. See [Accounts and single sign-on](accounts-and-sso.md).
- **Email:** SMTP settings, a test email button, and notification rules. See [Email](email.md).
- **Badges and chat:** Manage badges and chat channels in the same admin area.

## Search engines and sharing

Every topic, category, tag and profile page is rendered on the server with a canonical URL, Open Graph tags and JSON-LD (`DiscussionForumPosting`) for topics. The site publishes a sitemap, RSS feeds for topics and categories, and crawler-friendly pagination. A wrong topic slug redirects to the canonical one with a 308; a missing topic returns 404.

## Interface

English and Chinese, light and dark themes that follow the system setting, a layout that works on phones, and the same keyboard shortcuts as Discourse (`?` shows them all).

## Databases and deployment

Casnode talks to MySQL, PostgreSQL, SQLite and SQL Server through [xorm](https://github.com/xorm-io/xorm); the schema is created on first start. The default SQLite setup is a single file, which makes backups and small deployments simple. One Go process plus its Next.js child process is the whole runtime; no Redis, message queue or background worker is required.