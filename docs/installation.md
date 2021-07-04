---
title: Installation
slug: /installation
---

These paragraphs will help you deploy Casnode on your server.If you want to install Casnode by BT panel,look [here.](./BTpanel.md)

Please clone Casnode first, and follow these steps.

## 1. Setup Casdoor

Casnode uses [Casdoor](https://github.com/casbin/casdoor) to manage members. So you need to create an organization and an application for Casnode in a Casdoor instance. 

Follow these steps to setup Casdoor for Casnode:
- Naviate to Casdoor (Click [here](https://casdoor.org/docs/overview) for details of Casdoor)
- Sign into the organization "built-in"
- Click "Organizations" in the top bar
- Click "add" button
- Remember the Organization name (Of course you can change the organization name first)
- Click "Applications" in the top bar
- Click "add" button
- Remember the Application name (Of course you can change the Application name first)
- Click "Edit"
- Select the organization you just created as the application organization
- Modify the redirect URLs to the forum URL. If you are in a development environment, your redirect URL is http://localhost:3000/callback. If you are in a production environment, your redirect URL is http://yourip:7000/callback
- Click "Save" and remember the `Client ID` and `Client Secret`

## 2. Modify `conf/app.conf`

Here is an explanation to some of those config items:

Database connection:
```ini
driverName = mysql
dataSourceName = root:123@tcp(localhost:3306)/
dbName = casnode
```
Object Storage Service (Casnode uses OSS to store resources):
```ini
OSSProvider = ""
accessKeyID     = ""
accessKeySecret = ""
OSSCustomDomain = ""
OSSBasicPath = ""
OSSRegion = ""
OSSEndPoint = ""
OSSBucket = ""
```
If you can not access Google in normal ways, you need to set up a http proxy here:
```ini
httpProxy = "127.0.0.1:10808"
```
Casdoor config:
```ini
# Your Casdoor endpoint in step 1
casdoorEndpoint = http://localhost:8000

# Client ID you copied in step 1
clientId = xxx

# Client Secret you copied in step 1
clientSecret = xxx

jwtSecret = CasdoorSecret

# Organization name in step 1
casdoorOrganization = "casbin-forum"
```

## 3. Modify `web/src/Conf.js`

```js
export const AuthConfig = {
  // Your Casdoor endpoint in step 1
  serverUrl: "http://localhost:7001",

  // Client ID you copied in step 1
  clientId: "014ae4bd048734ca2dea",

  // Application name you copied in step 1
  appName: "app-casbin-forum",

  // Organization name you copied in step 1
  organizationName: "casbin-forum",
};
```

## 4. Build front end

In folder `web`, run the following commands:
```shell
npm install
npm run build
```
If you prefer yarn, you can run:
```shell
yarn install
yarn run build
```

## 5. Build back end

In repository root, run:
```shell
go build
./casnode
```

Then the Casnode app should run on port 7000. You can setup a nginx proxy pass to manage SSL or something else.

For most of site owners, steps above is enough. But if you are a developer, want to contribute to Casnode, or modify the code to suit your environment, then you can run Casnode in debug mode. Please follow these steps to start debug mode:

## 1. Do step 1-3 above

## 2. Run back end
```shell
go run main.go
```
## 3. Run front end
In `web` folder:
```shell
npm install
npm run start
```
For yarn users:
```shell
npm install
npm run start
```

Now, Casnode runs it's front end at port 3000 and runs it's back end at port 7000. You can modify the code and see want will happen.

## Notice
The front end uses these codes to determine whether it is a dev mode:
```js
export function initServerUrl() {
  const hostname = window.location.hostname;
  if (hostname === "localhost") {
    ServerUrl = `http://${hostname}:7000`;
  }
}
```
It means if hostname is `localhost`, then you are in dev mode. If not, then you are in productive mode. Port of the back end is not same in dev mode and productive mode, so please do not use `127.0.0.1` instead of `localhost` in your browser in dev mode.
