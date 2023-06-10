---
title: 概览
description: Casnode's architecture
keywords:
  - architecture
authors:
  - kininaru
---

Casnode 是一个开源项目。 一个活跃的社区就是它的活力。

本章针对的是想要为Casnode做出贡献的开发人员。 您将在这里学习种子节点的结构以及它如何运作。

## 结构

Casnode 有两个部分：前端和后端。

| 名称 | 描述                     | 实用小工具                           | 源代码                                               |
| -- | ---------------------- | ------------------------------- | ------------------------------------------------- |
| 前端 | Casnode Web 前端界面       | JavaScript + React + Ant-Design | https://github.com/casbin/casnode/tree/master/web |
| 后端 | Casnode RESTful API 后端 | Golang + Beego + MySQL + Xorm   | https://github.com/casbin/casnode                 |

正如我们前面提到的，在产品环境中，卡斯诺节点的前端是由后端构建和服务的。 在发展环境中，诺代日人为前端服务。 