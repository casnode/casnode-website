:::caution
The tutorial environment is Ubuntu 20.0.4 .  
:::
## Install casnode through docker  
### Prepare work
#### Install docker and docker-compose
Install Docker and Docker-compose,you see [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/)
<br/>

#### Git casnode & casdoor
Next, execute the following commands in the folder where you want to store the project.  
```shell
git clone https://github.com/casbin/casdoor.git
git clone https://github.com/casbin/casnode.git
```
Now, you can see two folders, casnode and casdoor.
<br/>

### Configure casdoor

#### Run casdoor
We first configure casdoor.
```shell
cd casdoor
vim conf/app.conf
```
Modify dataSourceName = root:123@tcp(localhost:3306)/ to dataSourceName = root:123@tcp(`db`:3306)/
```shell
docker-compose up
```
<br/>
:::tip
mysql and casdoor are in different docker containers.
:::

#### Configure casnode in casdoor
Now that Casdoor has been configured, visit http://your-ip:8000 to configure Casnode.  

The default administrator login account is admin/123.

Click Organization, then click Add, click Edit for the added organization, and change the name to the organization name you want. Here I set it to casbin-forum, and then click Save.  
Click Applications, then click Add, for the application you just added, click Edit, change the name to the application name you want, I changed it to app-casbin-forum.Click on the organization, select the organization you just added, my organization  is casbin- forum. Click Redirect URLs, modify the link in the box to `http://your-ip:7000/callback`.Finally, remember the Client ID and Client Secret, and click Save. 

Click Users, click Add, then click Edit, modify the added user, click Organization, select casbin-forum, and click is admin. Finally click Save, now your organization has an administrator account.
<br/>

### Configure casnode
Next we configure in Casnode.
```shell
cd casnode
vim conf/app.conf
```
Modify dataSourceName = root:123@tcp(localhost:3306)/ to dataSourceName = root:123@tcp(`db`:3306)/.  
Then find casdoorEndpoint, modify it to `http://your-ip:8000` (Casdoor backend address), find clientId and clientSecret, and modify them to the previously remembered Application client id and client secret, find casdoorOrganization, modify the organization name to you set. Finally press **Esc**, enter: wq to save and exit.
```shell
cd web
vim src/Conf.js
```
Press **i**, modify serverUrl to http://your-ip:8000 (Casdoor front-end access address), modify clientId to the clientId of the application just added, modify appname to the set application name, and modify the organization to the set organization name. Click **Esc**, enter: wq to save and exit.
```shell
cd ..
docker-compose up
```
Next visit http://your-ip:7000, click login, enter the account you added before, user_1/123, you have now successfully logged in to Casnode.  

More settings reference [casnode.](https://casnode.org/docs)

