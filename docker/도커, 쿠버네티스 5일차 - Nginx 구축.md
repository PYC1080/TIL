# 도커 / 쿠버네티스 5일차 - Nginx 구축 

> p. 158 -



## 0. 설정 : git 에서 해당 파일 pull

> p 158 - 164 

### 0-1. nginx.conf 파일 구성하기

### 0-2. entrykit 템플릿 기능 -  etc/nginx/nginx.conf.tmpl

만들어져야 하는 파일에 바뀌어야할 정보가 존재한다. 따라서 환경 변수를 고정 값이 아닌 변동 값을 주기 위해 entrykit을 이용한다.

### 0-3. 로그 - etc/nginx/conf.d/log.conf

### 0-4. 백엔드 서버 지정 - etc/nginx/conf.d/upstream.conf.tmpl

### 0-5. 라우팅 - etc/nginx/conf.d/public.conf.tmpl



## 1. Nginx 컨테이너의 Dockerfile

> p. 165 -167
### 1-1. Docker build & push

``` powershell
0. 위치 : 
PS C:\Users\HPE\docker\day04\swarm\todo\todonginx> ls


    디렉터리: C:\Users\HPE\docker\day04\swarm\todo\todonginx


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----     2020-01-10   오후 5:00                etc
-a----     2020-01-10   오후 4:59            701 Dockerfile
-a----     2020-01-10   오후 4:59            699 Dockerfile-nuxt

1. build
PS C:\Users\HPE\docker\day04\swarm\todo\todonginx> docker build -t localhost:5000/ch04/nginx:latest .
Sending build context to Docker daemon  13.31kB
Step 1/13 : FROM nginx:1.13
1.13: Pulling from library/nginx
f2aa67a397c4: Pull complete
3c091c23e29d: Pull complete
4a99993b8636: Pull complete
이하 중략

2. push
PS C:\Users\HPE\docker\day04\swarm\todo\todonginx> docker push localhost:5000/ch04/nginx:latest
The push refers to repository [localhost:5000/ch04/nginx]
a2f3cb81c026: Pushed
ebacd984fda7: Pushed
abe35a9d052a: Pushed
07618ebcfeab: Pushed
af50d2fd2347: Pushed
c70854cebe30: Pushed
f518425496f1: Mounted from ch04/tododb
32f8fce83e8a: Pushed
eb8f7c85f38c: Pushed
0e7f039d8116: Pushed
7ab428981537: Pushed
82b81d779f83: Pushed
d626a8ad97a1: Pushed
latest: digest: sha256:51636c37f473385f02d9fda5745a170a537aea698857daaa4e3450c29c815574 size: 3039
```

### 1-2. stack re-deploy

```yaml
0. todo-app.yml 수정 : # 해제
version: "3"
services:
  nginx:
    image: registry:5000/ch04/nginx:latest
    deploy:
      replicas: 2
      placement:
        constraints: [node.role != manager]
    depends_on:
      - api
    environment:
      WORKER_PROCESSES: 2
      WORKER_CONNECTIONS: 1024
      KEEPALIVE_TIMEOUT: 65
      GZIP: "on"
      BACKEND_HOST: todo_app_api:8080
      BACKEND_MAX_FAILES: 3
      BACKEND_FAIL_TIMEOUT: 10s
      SERVER_PORT: 8000
      SERVER_NAME: todo_app_nginx
      LOG_STDOUT: "true"
    networks:
      - todoapp

  api:
    image: registry:5000/ch04/todoapi:latest 
    deploy:
      replicas: 2
      placement:
        constraints: [node.role != manager]
    environment:
      TODO_BIND: ":8080"
      TODO_MASTER_URL: "gihyo:gihyo@tcp(todo_mysql_master:3306)/tododb?parseTime=true"
      TODO_SLAVE_URL: "gihyo:gihyo@tcp(todo_mysql_slave:3306)/tododb?parseTime=true"
    networks:
      - todoapp

networks:
  todoapp:
    external: true
```

```powershell
1. re-deploy
PS C:\Users\HPE\docker\day04\swarm\todo\todonginx> docker exec -it manager sh
/ # docker stack deploy -c /stack/todo-app.yml todo_app
Creating service todo_app_nginx
Updating service todo_app_api (id: awe9znee02hswm8847jx54nra)

2. check
/ # docker stack services todo_app
ID                  NAME                MODE                REPLICAS            IMAGE                               PORTS
awe9znee02hs        todo_app_api        replicated          2/2                 registry:5000/ch04/todoapi:latest
ice95hhz1vzd        todo_app_nginx      replicated          2/2                 registry:5000/ch04/nginx:latest

/ # docker service ps todo_app_api
ID                  NAME                IMAGE                               NODE                DESIRED STATE       CURRENT STATE         ERROR               PORTS
8e62trp4e3jw        todo_app_api.1      registry:5000/ch04/todoapi:latest   e50acc725436        Running             Running 3 hours ago
ypa35bl9i1qc        todo_app_api.2      registry:5000/ch04/todoapi:latest   20ac576cdaaf        Running             Running 3 hours ago

/ # docker service ps todo_app_nginx
ID                  NAME                IMAGE                             NODE                DESIRED STATE       CURRENT STATE            ERROR               PORTS
3u1hfge3w9n3        todo_app_nginx.1    registry:5000/ch04/nginx:latest   6ba4121c3022        Running             Running 35 minutes ago
sq0c2icdo1v4        todo_app_nginx.2    registry:5000/ch04/nginx:latest   20ac576cdaaf        Running             Running 35 minutes ago

PS C:\Users\HPE\docker\day04\swarm\todo\todonginx> docker exec -it worker02 sh
/ # docker ps
CONTAINER ID        IMAGE                              COMMAND                  CREATED             STATUS              PORTS                 NAMES
9416b194a025        registry:5000/ch04/nginx:latest    "render /etc/nginx/n…"   36 minutes ago      Up 36 minutes       80/tcp                todo_app_nginx.1.3u1hfge3w9n3hw1p7wjqf9gmk
49f3017bd977        registry:5000/ch04/tododb:latest   "prehook add-server-…"   4 hours ago         Up 4 hours          3306/tcp, 33060/tcp   todo_mysql_slave.1.lw29u9pah0b5ltlj0s2n60g88

/ # docker exec -it 9416b194a025 hostname -i
10.0.3.14

PS C:\Users\HPE\docker\day04\swarm\todo\todonginx> docker exec -it worker01 sh
/ # docker ps -a
CONTAINER ID        IMAGE                               COMMAND                  CREATED             STATUS              PORTS                 NAMES
4bc309f8b7e4        registry:5000/ch04/nginx:latest     "render /etc/nginx/n…"   39 minutes ago      Up 39 minutes       80/tcp                todo_app_nginx.2.sq0c2icdo1v4qi60sdjnjzu6q
c018f94152df        registry:5000/ch04/todoapi:latest   "todoapi"                3 hours ago         Up 3 hours                                todo_app_api.2.ypa35bl9i1qchlv63kscp872l
7b410ed45397        registry:5000/ch04/tododb:latest    "prehook add-server-…"   4 hours ago         Up 4 hours          3306/tcp, 33060/tcp   todo_mysql_master.1.gl06stqha7yxdltlsrkpa4knd

/ # docker exec -it 4bc309f8b7e4 hostname -i
10.0.3.15

```

### 1-3 visualizer 확인

![docker-nginx 결과](https://user-images.githubusercontent.com/55272324/72314767-8eccb080-36d3-11ea-9c22-5c9bec566c4c.PNG)





``` powershell
1. nginx1 접속

PS C:\Users\HPE\docker\day04\swarm\todo\todonginx> docker exec -it worker02 sh
/ # docker ps -a
CONTAINER ID        IMAGE                              COMMAND                  CREATED             STATUS              PORTS                 NAMES
9416b194a025        registry:5000/ch04/nginx:latest    "render /etc/nginx/n…"   42 minutes ago      Up 42 minutes       80/tcp                todo_app_nginx.1.3u1hfge3w9n3hw1p7wjqf9gmk
49f3017bd977        registry:5000/ch04/tododb:latest   "prehook add-server-…"   4 hours ago         Up 4 hours          3306/tcp, 33060/tcp   todo_mysql_slave.1.lw29u9pah0b5ltlj0s2n60g88

/ # docker exec -it 9416b194a025 bash
root@9416b194a025:/# echo "current -> todo_app_nginx.1"
current -> todo_app_nginx.1

2. apt-get update
root@9416b194a025:/# apt-get update
Ign:2 http://deb.debian.org/debian stretch InRelease
Hit:3 http://deb.debian.org/debian stretch-updates InRelease

3. apt-get install net-tools

root@9416b194a025:/# apt-get install net-tools
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following NEW packages will be installed:
  net-tools
0 upgraded, 1 newly installed, 0 to remove and 28 not upgraded.
Need to get 248 kB of archives.
After this operation, 963 kB of additional disk space will be used.
Get:1 http://deb.debian.org/debian stretch/main amd64 net-tools amd64 1.60+git20161116.90da8a0-1 [248 kB]
Fetched 248 kB in 0s (262 kB/s)
debconf: delaying package configuration, since apt-utils is not installed
Selecting previously unselected package net-tools.
(Reading database ... 7510 files and directories currently installed.)
Preparing to unpack .../net-tools_1.60+git20161116.90da8a0-1_amd64.deb ...
Unpacking net-tools (1.60+git20161116.90da8a0-1) ...
Setting up net-tools (1.60+git20161116.90da8a0-1) ...

4.netstat -ntpl
root@9416b194a025:/# netstat -ntpl
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 127.0.0.11:40247        0.0.0.0:*               LISTEN      -
tcp        0      0 0.0.0.0:8000            0.0.0.0:*               LISTEN      1/nginx: master pro
```





## 2. 웹 서비스 구축



```powershell
0 위치 
PS C:\Users\HPE\docker\day04\swarm\todo\todoweb> ls


    디렉터리: C:\Users\HPE\docker\day04\swarm\todo\todoweb


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----     2020-01-10   오후 5:00                assets
d-----     2020-01-10   오후 5:00                layouts
d-----     2020-01-10   오후 5:00                middleware
d-----     2020-01-10   오후 5:00                pages
d-----     2020-01-10   오후 5:00                plugins
d-----     2020-01-10   오후 5:00                static
d-----     2020-01-10   오후 5:00                store
-a----     2020-01-10   오후 4:59            192 Dockerfile
-a----     2020-01-10   오후 4:59           1206 nuxt.config.js
-a----     2020-01-14   오후 2:30         393251 package-lock.json
-a----     2020-01-10   오후 4:59            944 package.json
-a----     2020-01-10   오후 4:59           1152 server.js

1. npm install

PS C:\Users\HPE\docker\day04\swarm\todo\todoweb> npm install

> uglifyjs-webpack-plugin@0.4.6 postinstall C:\Users\HPE\docker\day04\swarm\todo\todoweb\node_modules\webpack\node_modules\uglifyjs-webpack-plugin
> node lib/post_install.js


> nuxt@1.0.0 postinstall C:\Users\HPE\docker\day04\swarm\todo\todoweb\node_modules\nuxt
> opencollective postinstall || exit 0


     *** Thank you for using nuxt! ***

Please consider donating to our open collective
     to help us maintain this package.

  https://opencollective.com/nuxtjs/donate

                    ***

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.3 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 1249 packages from 696 contributors and audited 8206 packages in 133.232s
found 391 vulnerabilities (1 low, 13 moderate, 376 high, 1 critical)
  run `npm audit fix` to fix them, or `npm audit` for details
  
PS C:\Users\HPE\docker\day04\swarm\todo\todoweb> ls


    디렉터리: C:\Users\HPE\docker\day04\swarm\todo\todoweb


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----     2020-01-10   오후 5:00                assets
d-----     2020-01-10   오후 5:00                layouts
d-----     2020-01-10   오후 5:00                middleware
d-----     2020-01-14   오후 2:30                node_modules
d-----     2020-01-10   오후 5:00                pages
d-----     2020-01-10   오후 5:00                plugins
d-----     2020-01-10   오후 5:00                static
d-----     2020-01-10   오후 5:00                store
-a----     2020-01-10   오후 4:59            192 Dockerfile
-a----     2020-01-10   오후 4:59           1206 nuxt.config.js
-a----     2020-01-14   오후 2:30         393251 package-lock.json
-a----     2020-01-10   오후 4:59            944 package.json
-a----     2020-01-10   오후 4:59           1152 server.js

2. npm run build

PS C:\Users\HPE\docker\day04\swarm\todo\todoweb> npm run build

> todoweb@1.0.0 build C:\Users\HPE\docker\day04\swarm\todo\todoweb
> nuxt build

  nuxt:build Building... +0ms
  nuxt:build App root: C:\Users\HPE\docker\day04\swarm\todo\todoweb +0ms
  nuxt:build Generating C:\Users\HPE\docker\day04\swarm\todo\todoweb\.nuxt files... +0ms
  nuxt:build Generating files... +7ms
  nuxt:build Generating routes... +12ms
  nuxt:build Building files... +36ms
  ████████████████████ 100%

Build completed in 34.197s



 WARNING  Compiled with 1 warnings                                                                       오후 3:01:17

 warning

asset size limit: The following asset(s) exceed the recommended size limit (300 kB).
This can impact web performance.
Assets:
  vendor.02f6d802134b07f9fff1.js (401 kB)

Hash: 3e78329d204906da13b0
Version: webpack 3.12.0
Time: 34200ms
                                   Asset       Size  Chunks                    Chunk Names
     pages_index.5754ae5cf96ae9082fb3.js    3.31 kB       0  [emitted]         pages_index
 layouts_default.0755df0a9ed4efdb8b2d.js  762 bytes       1  [emitted]         layouts_default
          vendor.02f6d802134b07f9fff1.js     401 kB       2  [emitted]  [big]  vendor
             app.3f4a02ac9e9268800d99.js    27.9 kB       3  [emitted]         app
        manifest.3e78329d204906da13b0.js    1.47 kB       4  [emitted]         manifest
app.679dda00106c09b9e741e66ee7e4dd3b.css     281 kB       3  [emitted]         app
                                LICENSES  766 bytes          [emitted]
 + 3 hidden assets

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (300 kB).
This can impact web performance.
Assets:
  vendor.02f6d802134b07f9fff1.js (401 kB)
Hash: 44da3e64b9c3254304a3
Version: webpack 3.12.0
Time: 15597ms
             Asset    Size  Chunks             Chunk Names
server-bundle.json  128 kB          [emitted]
  nuxt:build Building done +52s
  
3. npm run start
  
  

```

TODO의 진행 상황을 보여주는 웹 애플리케이션

1. vue

2. reace

3. angular