---
title: Main Features
slug: /main-features
---

There special features distinguish Casnode from other forums. Here is a short introduction of these features. Read forward for more details.

## Mailing list

Casnode supports Google Groups well. After setting up a Google Group config in Casnode, a two-way synchronization will be started. For now, Casnode can only sync conversation from Google Groups, but can push conversations to any other mailing lists.

## Multi-platform

Casnode supports computer and mobile access. Frontend UI adapts to PC and mobile.

## Built-in search

Casnode support built-in search, of course, also support search using various engines such as Google.

## Upload pictures and attachments

Casnode support drag and drop to upload pictures and attachments. At the same time, each account has its own file library and quota. Files in the file library can also be shared using sharing links, making it more convenient to post pictures and pictures. Supports various OSS storages such as Alibaba Cloud and Tencent Cloud.

## Site advertisement

Support for setting up site advertisements, which can be delivered independently through the background.

## Server side rendering

Casnode support server side rendering, friendly to search engine SEO.

## All kinds of databases

Casnode uses [xorm](https://github.com/go-xorm/xorm) to connect to databases. You can use MySQL, sqlite3, mymysql and Postgres for Casnode.

## Multi-languages

Casnode uses i18next and [Crowdin](https://crowdin.com/project/casnode-web/) to support multi-language. Now Casnode supports Chinese and English, and it is easy to support other languages. Welcome to make a PR or file an issue to support your language! And any translation contribution is welcomed!

## Use Casdoor to manage members

Casnode does not maintain a member table in the database. Casnode uses [Casdoor](https://github.com/casbin/casdoor) to manage users. Casdoor is a SSO platform based on OAuth2. Through Casdoor, Casnode supports a variety of third-party login/registration methods. There are many registration methods, mobile phone, email, QQ, WeChat, GitHub,  Facebook, Google, LinkedIn, DingTalk and Gitee. It also supports graphic verification codes for Human-machine verification. If you use Casdoor for your organization management, your members can sign into Casnode directly, no need to signing up for Casnode again.