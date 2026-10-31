---
title: Email
description: Configure SMTP, password resets and notification emails
keywords: [email, smtp, notifications, password reset]
authors: [hsluoyz]
---

Casnode sends password-reset mail and notification mail over SMTP. Nothing is sent until `smtp_host` and `notification_email` are set; notification mail additionally needs `email_enabled`.

## SMTP settings

Set these on `/admin/site_settings` (group **Email**):

| Setting | Default | Meaning |
| --- | --- | --- |
| `smtp_host` | empty | The SMTP server, for example `smtp.example.com`. |
| `smtp_port` | `587` | Port; 465 for implicit TLS, 25 or 587 for STARTTLS. |
| `smtp_security` | `starttls` | `starttls`, `ssl` or `none`. |
| `smtp_username` | empty | User name, if the server needs one. |
| `smtp_password` | empty | Password. After saving, the admin page shows `********` and never returns the value. |
| `notification_email` | empty | The From address. It should be an address the SMTP server is allowed to send as. |
| `email_enabled` | `false` | Send members notifications for replies, mentions, private messages and chat mentions. |
| `email_delay_minutes` | `5` | How long a notification waits for the member to read it in the forum before it is emailed. |
| `new_post_notification_emails` | empty | Addresses that receive every new topic and reply immediately, separated by a vertical bar or a comma. Personal messages are not included. |

Use **Send test email** on `/admin/email` to check the settings. A wrong security mode or port is the usual reason for a failure: port 465 normally needs `ssl`, port 587 normally needs `starttls`.

## What gets sent

- **Password reset:** always available when `smtp_host` and `notification_email` are set, even if `email_enabled` is off. The link is valid for one hour and can be used once.
- **Notifications:** replies, quotes, mentions, private messages and chat mentions. By default, replies and mentions are only emailed when the member has not read them after `email_delay_minutes`; private messages are emailed as well. Members can change their email level in their preferences.
- **New topic and reply copies:** every address in `new_post_notification_emails` receives each new topic and reply immediately, regardless of `email_enabled`. It is meant for a team inbox or a moderator list, not for members.

Imported users have no email address; they get one only if the same person later signs in through Casdoor or a provider that supplies it. Members who signed up with a password have one from the start.

## Deliverability

Use an address on your own domain as `notification_email`, and publish SPF and DKIM records for the SMTP provider. A From address that does not belong to the sending server is the most common reason for mail landing in spam.

## Not implemented

- Inbound email (replying to a notification by email posts nothing).
- Digest emails.
- Email verification when signing up.