---
title: Overview
description: Casnode's architecture
keywords: [architecture]
authors: [kininaru]
---

Casnode is an open source project. An active community is its vitality.

This chapter is for developers who want to contribute to Casnode. Here you will learn the architecture of Casnode, and how it works.

## Architecture

Casnode has 2 parts: the frontend and the backend.

| Name     | Description | Tools | Source code |
| ---- | ---- | ---- | ---- |
| Frontend | Web frontend UI for Casnode | JavaScript + React + Ant-Design | <https://github.com/casbin/casnode/tree/master/web> |
| Backend | RESTful API backend for Casnode | Golang + Beego + MySQL + Xorm | <https://github.com/casbin/casnode> |

As we mentioned before, in product environments, the frontend of Casnode is built and served by the backend. In develop environments, the frontend is served by Nodejs.
