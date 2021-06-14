---
title: Main Features
slug: /main-features
---

Casnode has some special features from other forums. Here is a short introduction of these features. Read forward for more details.

## Mailing list

Casnode supports Google Groups well. After setting up a Google Group config in Casnode, a two-way synchronization will be started. For now, Casnode can only sync conversation from Google Groups, but can push conversations to any other mailing lists.

## All kinds of databases

Casnode uses [xorm](https://github.com/go-xorm/xorm) to connect to databases. You can use MySQL, sqlite3, mymysql and postgres for Casnode.

## Multi-languages

Casnode uses i18next to support multi-language. Now Casnode supports Chinese and English, and it is easy to support other languages. Welcome to make a PR or raise an issue to support your language!

## Use Casdoor to manage members

Casnode does not maintain a member table in the database. Casnode uses [Casdoor](https://github.com/casbin/casdoor) to manage users. Casdoor is a SSO platform based on OAuth2. If you use Casdoor for your organization management, your members can sign into Casnode directly, no need to signing up for Casnode again.