---
title: Importing topics
description: Bring topics, users and files from another forum or chat into Casnode
keywords: [import, migration, discord, discourse]
authors: [hsluoyz]
---

Casnode ships a small import tool that writes topics, posts, users, avatars and files straight into the database, keeping the original authors and timestamps and sending no notifications. It reads a folder with an `import.json` file and a `media/` folder.

The tool is part of the source tree, not of the release archive, so you need Go 1.25 or newer. Back up the database and uploads before the first import.

## Plan and apply

Run it from the forum's folder, so that it uses that forum's `conf/`, database and uploads:

```bash
go run ./tools/import_topics /path/to/bundle          # show what would happen
go run ./tools/import_topics -apply /path/to/bundle   # write it
```

The first run only prints the categories, users and topics it would create. `-apply` writes them.

## The bundle

```text
bundle/
  import.json
  media/
    screenshot.png
    avatar.jpg
```

`import.json` has three lists:

```json
{
  "categories": [
    {"name": "Casdoor", "slug": "casdoor", "description": "Casdoor questions", "color": "0088CC"}
  ],
  "users": [
    {"externalId": "discord:1", "username": "alice", "name": "Alice", "avatar": "upload://avatar.jpg"}
  ],
  "topics": [
    {
      "externalId": "discord:2",
      "title": "How do I import an old forum?",
      "category": "Casdoor",
      "tags": ["import"],
      "posts": [
        {
          "externalIds": ["3"],
          "user": "alice",
          "raw": "See the screenshot: ![shot](upload://screenshot.png)",
          "createdAt": "2024-05-02T02:31:00Z"
        },
        {
          "externalIds": ["4"],
          "user": "alice",
          "raw": "Replying to the same conversation",
          "createdAt": "2024-05-02T02:33:00Z",
          "replyToExternalId": "3"
        }
      ]
    }
  ]
}
```

- `externalId` is the original ID in the other system. It is what makes re-running the import safe: imported users and topics are recorded, and a second run skips them.
- `category` is the category name; a missing category is created when listed in `categories`.
- `raw` is Markdown. A file is referred to as `upload://<file name in media/>`. Images and attachments are saved as the post author's uploads, after the same extension and size checks as a normal upload; files the forum does not accept are skipped and listed.
- Posts are shown in the order given. `replyToExternalId` points at the `externalIds` of an earlier post and turns the post into a reply to it.
- `createdAt` is an RFC 3339 timestamp. Times are shown in the reader's local time.

## What happens to users

- A user whose name does not exist is created as an imported account: it has no password and cannot be logged into. Its profile shows the imported posts.
- When a real member signs in later with the same user name (through Casdoor or a provider), Casnode gives the real account the name and renames the imported one, for example `alice-discord`, so the posts stay attributed but the real person gets the account.
- Administrators listed in `admins` are the exception: they keep their own imported posts when they sign in.
- A user name that already exists in the forum is linked to that existing account rather than duplicated.

## After the import

New categories and imported topics appear immediately, but a running forum keeps its category list in memory: restart the process after an import if new categories do not show up. No notifications or emails are sent for imported content.

## From Discord or Discourse

There is no built-in Discord or Discourse reader; the importer takes the JSON above. A Discord export (or a Discourse export) can be converted into this format outside Casnode: map channels/categories to `categories`, authors to `users`, messages to posts, and download attachments into `media/`. The format is intentionally plain so that a converter is a short script.

See also [Configuration](configuration.md) for the database and [Deployment](deployment.md#backups) for backups.