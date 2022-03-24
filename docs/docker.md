:::caution
The tutorial environment is Ubuntu 20.0.4 .  
:::

## Install casnode through docker  
### Prepare work
#### Install docker and docker-compose
Install Docker and Docker-compose, you see [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/)
<br/>

#### Clone casnode & casdoor
Next, clone Casdoor and Casndoe from GitHub.    
```shell
git clone https://github.com/casbin/casdoor.git
git clone https://github.com/casbin/casnode.git
```
Now, you can see two folders, casnode and casdoor.
<br/>

#### Create network

Casdoor and Casnode need to be deployed on the same network

You can create bridge network like this command

```shell
docker network create -d bridge casdoor
```

### Configure casdoor

#### Run casdoor
We first configure casdoor.
```shell
cd casdoor
vim conf/app.conf
```
Modify `dataSourceName = root:123@tcp(localhost:3306)/` to `dataSourceName = root:123@tcp(db:3306)/`.

Then edit `docker-compose.yml`

```shell
vim docker-compose.yml
```

Modify `MYSQL_ROOT_PASSWORD: 123456` to `MYSQL_ROOT_PASSWORD: 123` and set containers to the network you create.

Here is an example:

```yaml
version: '3.1'
services:
  casdoor:
    restart: always
    build:
      context: ./
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    depends_on:
      - db
    environment:
      RUNNING_IN_DOCKER: "true"
    extra_hosts:
      - "host.docker.internal:host-gateway"
    volumes:
      - ./conf:/conf/
    networks:
      - casdoor

  db:
    restart: always
    image: mysql:8.0.25
    platform: linux/amd64
    ports:
      - "3306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: 123
    volumes:
      - /usr/local/docker/mysql:/var/lib/mysql
    networks:
      - casdoor

networks:
  casdoor:
    external:
      name: casdoor
```

Then start casdoor with docker-compose

```shell
docker-compose up
```
<br/>

:::tip
mysql and casdoor are in different docker containers.
:::

#### Configure casnode in casdoor
Now that Casdoor has been configured, visit http://your-ip:8000 to configure Casnode.  

The default administrator login account is ```admin/123```.

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
Modify **dataSourceName = root:123@tcp(localhost:3306)/** to **dataSourceName = root:123@tcp(db:3306)/** so that the data come from your database.

Then find casdoorEndpoint, modify it to `http://your-ip:8000` (Casdoor backend address), find clientId and clientSecret, and modify them to the previously remembered Application client id and client secret, find casdoorOrganization, modify the organization name to you set. Finally press **Esc**, enter: wq to save and exit.

```shell
cd web
vim src/Conf.js
```
Press **i**, modify serverUrl to http://your-ip:8000 (Casdoor front-end access address), modify clientId to the clientId of the application just added, modify appname to the set application name, and modify the organization to the set organization name. Click **Esc**, enter: wq to save and exit.

Next, you need

```shell
cd ..
vim docker-compose.yml
```

You just need to configure it like casdoor and deploy containers in the network you created, here is an example:

```
version: '3.1'
services:
  casnode:
    build:
      context: ./
      dockerfile: Dockerfile
    ports:
     - "7000:7000"
    volumes:
      - ./conf:/conf/
    networks:
      - casnode

networks:
  casnode:
    external: 
      name: casdoor
```

Next visit http://your-ip:7000, click login, enter the account you added before, user_1/123, you have now successfully logged in to Casnode.  

More settings reference [casnode.](https://casnode.org/docs)

