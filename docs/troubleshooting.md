---
title: Troubleshooting
description: Common problems when installing or running Casnode
keywords: [troubleshooting, faq, errors]
authors: [hsluoyz]
---

## The site does not open

- Check that the process is running and listening on `httpport` (16900 by default).
- Open `http://127.0.0.1:16900/api/get-site` on the server. If it returns JSON, the backend is up and the problem is the proxy or firewall; if it does not, read the process output.
- The Go process starts the Next.js server on `httpport + 1`; make sure that port is free. An old Casnode instance on the same port is normally replaced automatically when the new one starts.
- On a server, open only `httpport`. The frontend port does not need to be public.

## The page is blank or returns a 500

- Node.js 20 or newer must be installed and on `PATH`. Without it the Go process cannot start the frontend.
- The `web/build` folder must exist (it is in the release archive, or created by `yarn build`). If it is missing, the frontend cannot start.
- Check the process log; the Next.js server prints the actual error there.

## The first account is not an administrator

The first account registered on an **empty** database becomes the administrator. If the database already had users (for example from a previous test, or an import), the next account is an ordinary member. Promote it on `/admin/users` with “grant admin”. The `admins` setting in `conf/app.conf` only applies to Casdoor user names.

## I cannot turn off password login

`enable_local_logins` can only be turned off when Casdoor is configured or a provider exists on `/admin/logins`. Otherwise the save is refused with a message, because nobody could log in afterwards.

## Login keeps redirecting to Casdoor

Clear `casdoorEndpoint` in `conf/app.local.conf` if you do not want the Casdoor button, and restart. If you do use Casdoor, add `https://your-forum.example.com/callback` to the Casdoor application's redirect URLs; a mismatch shows a Casdoor error after the redirect.

## A single sign-on provider returns an error

- Register exactly `https://your-forum.example.com/api/auth/callback/<provider name>` at the provider. The name in the URL is the provider's name on `/admin/logins`.
- For OIDC, check the issuer URL; Casnode reads the endpoints from `<issuer>/.well-known/openid-configuration`.
- For OAuth 2.0, check the authorization, token and user-info URLs and the field names in the user-info response.
- The provider's client secret is hidden after saving; re-enter it if you are not sure it is correct.

## Password reset emails do not arrive

- Set `smtp_host` and `notification_email` on `/admin/site_settings`. These two are enough for password resets; `email_enabled` is for notifications.
- Use the test button on `/admin/email`. Port 465 normally needs `ssl`, port 587 normally needs `starttls`.
- Check the spam folder and the SMTP server's log. A From address that the SMTP server is not allowed to send as is the most common cause.
- The account must have an email address. Imported users may not have one until they log in through Casdoor or a provider.

## Uploads are rejected

- Check `authorized_extensions` and `max_upload_size_kb` in the site settings.
- If a reverse proxy is in front, raise its body limit (Nginx: `client_max_body_size 64m;`).
- The server refuses requests larger than 64 MB regardless of the site setting.
- Make sure the process can write to `uploadsDir`.

## The forum shows the proxy's IP instead of the member's

Set `trustProxyHeader = true` in `conf/app.local.conf` and restart. The proxy must send `X-Forwarded-For`.

## Database errors on first start

- SQLite: the folder holding `casnode.db` must be writable by the process.
- MySQL, PostgreSQL and SQL Server: the DSN must be in the format shown in [Configuration](configuration.md#database-connection). Casnode creates the database and its tables on first start when the database user is allowed to; otherwise create the database first and grant the user access.
- Casnode creates a MySQL database as `utf8mb4`, so emoji and non-Latin text are stored correctly; if you create the database yourself, use `utf8mb4` as well.

## I upgraded from 1.x and nothing works

2.x is a rewrite with a different schema; it cannot read a 1.x database. Keep the 1.x forum on its own port and install 2.x as a new forum. See [Introduction](introduction.md#casnode-2x-is-a-rewrite).

## The live update stops after a while

A proxy is closing the long-poll request too early. Set its read timeout above 30 seconds (Nginx: `proxy_read_timeout 120s;`).

## Still stuck?

Ask on the [Casbin forum](https://forum.casbin.com) or open an issue at [github.com/casnode/casnode/issues](https://github.com/casnode/casnode/issues). Include the version, the database, the OS and the error from the process log.