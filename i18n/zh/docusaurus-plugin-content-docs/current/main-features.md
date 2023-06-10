---
title: 主要功能
description: Casnode main features
keywords:
  - features
authors:
  - kininaru
---

这里有特殊的特征区分Casnode 和其他论坛。 以下是这些功能的简短介绍。 向前阅读更多细节。

## 📧 邮件列表

Casnode 很好地支持 Google 小组。 通过集成 [Google group-crawler](https://github.com/casbin/google-groups-crawler), 在设置谷歌群组配置后，将开始双向同步。 现在，Casnode 只能同步谷歌群组的对话，但可以将对话推送到任何其他邮件列表。

## ✨ 多平台

Casnode 支持计算机和移动访问。 前端用户界面适用于 PC 和移动设备。

## 🔍 内置搜索

Casnode 支持内置搜索当然也支持使用诸如Google等各种引擎搜索。

## 🖼️ 上传图片和附件

Casnode 支持拖放以上传图片和附件。 同时，每个账户都有自己的文件库和配额。 文件库中的文件也可以使用共享链接共享，从而更方便地发布图片和图片。 支持各种开放源码软件储存，如Alibaba云和腾讯云。

## 📢 网站广告

支持建立可以通过背景独立发送的网站广告。

## 🎯 服务器端渲染

Casnode 支持服务器端渲染，友好以搜索引擎SEO。

## 🗄️ 所有类型的数据库

Casnode 使用 [xorm](https://github.com/go-xorm/xorm) 连接到数据库。 您可以使用 MySQL 、 sqlite3 、 mymysql 和 Postgres for Casnode。

## 🌐 多语言

Casnode uses i18next and [Crowdin](https://crowdin.com/project/casnode/) to support multi-language. 现在，Casnode 支持中文、英文、法文、德文、俄文、日文和朝鲜文。 欢迎使用 PR 或文件作为一个问题来支持您的语言！ 任何翻译贡献都受到欢迎！

## 🚪 使用 Casdoor 管理成员

Casnode 在数据库中没有成员表。 Casnode 使用 [Casdoor](https://github.com/casbin/casdoor) 来管理用户。 Casdoor是基于 OAuth2.0 的 SSO 平台。 通过Cassdoor，Casnode 支持各种第三方登录/注册方法。 注册方法多种多样，手机、 电子邮件、 QQ、 WeChat、 GitHub、 Facebook、 Google、 LinkedIn、 DingTalk、 Gitee、 wecom和 GitLab。 它还支持人类机器核查的图形核查代码。 如果您使用Casdoor 来管理您的组织，您的成员可以直接登录到Casnode ，无需再次注册。 要获取更多详细的功能，请前往 [Casdoor](https://casdoor.org)。
