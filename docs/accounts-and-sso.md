---
title: Accounts and single sign-on
description: Local accounts, OpenID Connect, OAuth 2.0 and Casdoor
keywords: [accounts, login, signup, sso, oidc, oauth, casdoor]
authors: [hsluoyz]
---

Casnode has its own accounts, and can also let members sign in through any OpenID Connect or OAuth 2.0 provider, or through Casdoor. A forum can use one of them or several at the same time.

## Local accounts

Members sign up with an email address, a user name and a password, and can log in with either the user name or the email. The password is stored as a bcrypt hash. A few rules apply:

- The first account registered on an empty database becomes the administrator. Later accounts are ordinary members until an administrator promotes them on `/admin/users`.
- Passwords must be at least `min_password_length` characters (8 by default).
- The email address is required and is unique among accounts that have a password.
- Failed logins and registrations are rate limited: 20 failed logins per IP and 10 per account in 15 minutes, 5 registrations per IP per hour, and 5 password-reset requests per IP and 3 per account per hour.
- Signing up does not verify the email address. The address is used for password resets and notifications, so make sure members enter one they can read.

The settings are on `/admin/site_settings`:

| Setting | Default | Meaning |
| --- | --- | --- |
| `enable_local_logins` | `true` | Show the email and password form. Turning it off is only allowed when Casdoor or at least one provider on `/admin/logins` is enabled, otherwise nobody could log in. |
| `allow_new_registrations` | `true` | Let people create accounts themselves. |
| `min_password_length` | `8` | Minimum password length. |
| `login_required` | `false` | Require a login to read the forum. |

### Password reset

Forgot-password emails need an SMTP server. Set `smtp_host` and `notification_email` on `/admin/site_settings` (see [Email](email.md)); `email_enabled` is not required for password resets. The reset link is valid for one hour and can be used once. The form does not reveal whether an address has an account.

## Single sign-on providers

Administrators add providers on `/admin/logins`. The page offers presets for GitHub, Google, Microsoft Entra ID, GitLab, Discord, Keycloak and Casdoor, plus generic OpenID Connect and OAuth 2.0. A provider has:

- a name (used in the callback URL; `casdoor` is reserved for the Casdoor configured in `conf/app.conf`),
- a display name and an icon,
- a type: `oidc` or `oauth2`,
- for OIDC, the issuer URL; the endpoints are read from its `/.well-known/openid-configuration`,
- for OAuth 2.0, the authorization URL, token URL, user-info URL and the names of the fields in the user-info response (`id`, `username`, `name`, `email`, `avatar`),
- the scopes, whether sign-up is allowed, whether it is enabled, and its sort order.

Register this callback URL at the provider:

```text
https://your-forum.example.com/api/auth/callback/<provider name>
```

The login flow uses the authorization code with PKCE (S256) and a state value kept in the session. Casnode reads the user's profile from the user-info endpoint; it does not validate the ID token's signature. GitHub's preset asks for `user:email` and reads `/user/emails` when the profile has no public email.

The first login through a provider creates a forum account. The user name comes from the provider's preferred user name, the email prefix or the name; a duplicate gets a numeric suffix. Accounts are linked by provider and subject, **not** by email: two providers with the same email address create two accounts, and there is no UI yet to link or unlink providers on an existing account.

## Casdoor

Casdoor is configured in `conf/app.local.conf` rather than `/admin/logins`:

```ini
casdoorEndpoint = https://door.example.com
clientId = your-client-id
clientSecret = your-client-secret
casdoorOrganization = casnode
casdoorApplication = app-casnode
```

Create an application in Casdoor with the redirect URL `https://your-forum.example.com/callback`, copy its client ID and secret, and restart the forum. A "Continue with Casdoor" button appears on the login page. Casdoor users are created in the forum on their first login and linked by organization and user name. Casdoor administrators are forum administrators, and the `admins` setting in `conf/app.conf` adds more Casdoor user names as administrators.

Casdoor is also the easiest way to support what Casnode does not implement directly: SAML, LDAP, WeChat, QQ, DingTalk and other enterprise or regional providers. Put them in Casdoor (or in a Keycloak realm) and connect Casnode to it through OpenID Connect.

## What is not there yet

- Email verification at sign-up.
- Linking or unlinking a provider on an existing account.
- SAML and LDAP without an identity platform in front.
- A session ID change after login.