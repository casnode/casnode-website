---
title: Administration
description: Site settings, categories, users, moderation, groups, badges and chat
keywords: [admin, settings, moderation, categories, users]
authors: [hsluoyz]
---

Administrators and moderators see the staff tools in the interface. Most settings are changed on the admin pages; no restart is needed.

## Admin pages

| Page | What it is for |
| --- | --- |
| `/admin/site_settings` | Site name, branding, texts, posting rules, tags, login, uploads, chat, badges, email and analytics. |
| `/admin/users` | Search members, grant or revoke admin/moderator, suspend or silence an account. |
| `/admin/logins` | Single sign-on providers (see [Accounts and single sign-on](accounts-and-sso.md)). |
| `/admin/email` | SMTP settings and a test email (see [Email](email.md)). |
| `/admin/badges` | Disable system badges, create custom badges, grant and revoke them. |
| `/review` | The review queue for flagged posts. |

## Site settings

Settings are grouped by category on `/admin/site_settings`:

- **Required:** `title`, `site_description`, `short_site_description` (used in the topic list and meta tags), `contact_email`, `site_url`. Set `site_url` to the public URL, including `https://`.
- **Branding:** logo and dark/small logo URLs, favicon, brand and accent colors (light and dark), header background and text colors, base and heading fonts, header links (`Name,https://example.com|Name,/path`), homepage banner title, text, image and search box, and custom CSS.
- **Basic:** default locale (`en` or `zh`), the top menu (`latest`, `new`, `unread`, `hot`, `top`, `categories`), the category page style, the About, FAQ, terms of service and privacy texts, header and footer HTML, how many days a topic counts as new, and whether personal messages are enabled.
- **Posting:** whether uncategorized topics are allowed, minimum and maximum title and post lengths, the edit time limit, and whether polls are enabled.
- **Tags:** tagging on/off, tags per topic, and whether only staff can create tags.
- **Login:** see [Accounts and single sign-on](accounts-and-sso.md).
- **Files:** `max_upload_size_kb` and `authorized_extensions`. See [Configuration](configuration.md#uploads).
- **Chat:** enable chat and set the maximum message length.
- **Badges:** enable or disable badges.
- **Email:** see [Email](email.md).
- **Analytics:** `google_analytics_id` and `baidu_analytics_id`; leave empty to include neither.

The HTML and CSS fields are rendered as written, so only give administrators access to them.

## Categories and tags

Create a category from `/new-category`: name, slug, description, color and group permissions (full access, create posts, or read-only per group). Edit it from the category page (`/c/<slug>/<id>/edit`), where it can also be deleted. Tags are created from the composer; admins can rename or delete them on `/tags` and control who may create new ones with `staff_only_tag_creation`.

## Users

On `/admin/users` you can filter by active, new, staff, suspended and silenced accounts, and search by name. From the menu next to a member you can:

- grant or revoke administrator or moderator,
- suspend an account until a date (it cannot log in),
- silence an account until a date (it can read but not post),
- clear a suspension or silence.

Administrators can promote other members here; the first account is the only automatic administrator.

## Moderation

- **Flags:** members flag a post, and staff handle it in `/review`. Accepting a flag can hide the post and notify the author; rejecting it restores the post.
- **Topics:** the wrench menu on a topic lets staff close, pin, archive, unlist, delete or recover it.
- **Moving posts:** choose “select posts” in the wrench menu, select replies and move them to a new topic or to the end of another topic. Moving every post merges the topic; the old URL redirects to the new one.
- **Members:** silence or suspend from `/admin/users`.
- **Restricted categories:** grant read, reply or full access to a group; the category then only appears to members of that group (and staff).

## Groups

Groups live at `/g`. Admins, moderators and staff are automatic groups; members can create public groups, and groups can require approval to join. Group owners manage members, and group mentions and group messages work for groups that allow them. A category can be restricted to a group.

## Badges

The site ships with 28 system badges. On `/admin/badges` you can disable a system badge, create custom badges with a name, description and icon, grant or revoke a badge for a member, and choose which badges can be shown as a title. Members choose their title in their preferences.

## Chat

When `chat_enabled` is on, members see `/chat`: one channel per category they can read, plus direct chats. Administrators create and edit channels in `/chat/browse` (name, description, category, members). Messages support reactions, replies, editing and mentions; mentions and direct messages create notifications.