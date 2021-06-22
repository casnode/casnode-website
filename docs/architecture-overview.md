---
title: Overview
slug: /architecture-overview
---

Casnode is an open source project. An active community is its vitality. 

This chapter is for developers who want to contribute to Casnode. Here you will learn the architecture of Casnode, and how it works.

## Architecture

Casnode has 2 parts: the frontend and the backend.

**Frontend:** The frontend is made with JavaScript and React. Files of the frontend are all in the `web` folder.

**Backend:** The backend is made with Golang and Beego framework. Also, Casnode uses Xorm as a database adapter.

As we mentioned before, in productive environments, the frontend of Casnode is built and served by the backend. In development environments, the frontend is run by Nodejs. 

Using `localhost` to access the frontend pages to enter the development mode.

