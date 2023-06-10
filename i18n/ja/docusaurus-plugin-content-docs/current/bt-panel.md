- - -
title: BT panel description: Install Casnode under the Linux BT panel keywords: [bt panel] authors: [oranges-eating]
- - -

:::caution

The tutorial environment is Ubuntu 20.04

:::

## LinuxBTパネルにCasnodeをインストールします

### 作業の準備
After installing the BT panel, the browser visits the BT panel, selects the software store, searches for and installs MySQL, and then searches for node, you can see that there is a PM2 manager, install the PM2 manager.

After the installation is complete, disconnect from the server or restart the server, node will be automatically written into the environment variable.

Enter `git --version` to make sure git is , if the prompts Command `git` not found, use `apt-get install git` to install git.

:::tip

To access the Casnode successfully, you need to open the **7001** and **8000** port.

:::

#### Install Golang

The root user executes the following commands to download and decompress the Go binary file to the **/usr/local** directory.
```shell
wget -c https://dl.google.com/go/go1.16.5.linux-amd64.tar.gz -O - | sudo tar -xz -C /usr/local
```
Then we need to add Golang to the environment variables, edit `/etc/profile`, add the following code in the last line of the file.

```shell
export GOROOT=/usr/local/go
export PATH=$PATH:$GOROOT/bin
```

Then use command `source /etc/profile` to make the newly added environment variables work.

Now, enter `go version`, you will see the go version, and we installed it successfully. If you can’t connect to GitHub, you can set up the mirror. The command is
```go
go env -w GOPROXY=https://goproxy.cn,direct
```
#### Git clone Casnode & Casdoor

Next, execute the following commands in the folder where you want to store the project.
```shell
git clone https://github.com/casbin/casdoor.git
git clone https://github.com/casbin/casnode.git
```
Now, you can see there are two folders, Casnode and Casdoor.

### Casdoor の設定

#### カスドア

We first configure Casdoor.
```go
cd casdoor
go build main.go
```
Then edit `conf/app.conf`, find
```
dataSourceName = root:123@tcp(localhost:3306)/
```

Change MySQL password provided by the BT panel as **123**.
```shell
cd web
npm install
npm run build
cd ..
sudo nohup ./main &
```
#### CasdoorのCasnodeを構成する

Now that Casdoor has been configured, visit http://your-ip:8000 to configure Casnode.

The default administrator login account is `admin/123`.

Click Organization, then click Add, click Edit for the added organization, and change the name to the organization name you want. Here I set it to casbin-forum, and then click Save.

Click Applications, then click Add, for the application you just added, click Edit, change the name to the application name you want, I changed it to app-casbin-forum. Click on the organization, select the organization you just added, my organization  is casbin- forum. Click Redirect URLs, modify the link in the box to http://your-ip:7000/callback.Finally, remember the Client ID and Client Secret, and click Save.

Click Users, click Add, then click Edit, modify the added user, click Organization, select casbin-forum, and click is admin. Finally click Save, now your organization has an administrator account.
<br/>

### Casnodeの設定

Next we configure in Casnode.

```shell
cd casnode
go build main.go
```

Edit `conf/app.conf`, find

```
dataSourceName = root:123@tcp(localhost:3306)/
```

Change MySQL password provided by the BT panel to **123**, then find casdoorEndpoint, modify it to http://your-ip:8000 (Casdoor backend address), find **ClientId** and **ClientSecret**, and modify them to the previously remembered Application client id and client secret, find casdoorOrganization, modify the organization name to your set. Save and exit.

Edit `web/src/Conf.js`, modify `serverUrl` to http://your-ip:8000 (Casdoor front-end access address), modify `ClientId` to the ClientId of the application just added, modify `appName` to the set application name, and modify `organizationName` to the set organization name.
```shell
npm install
npm run build
cd ..
nohup ./main &
```
Next visit **http://your-ip:7000**, click login, enter the account you added before, user_1/123, you have now successfully logged in to Casnode.

For more settings please see [Casnode.](https://casnode.org/docs)

