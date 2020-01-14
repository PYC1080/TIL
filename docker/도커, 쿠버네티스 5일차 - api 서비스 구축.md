# 도커 / 쿠버네티스 5일차 -

>p. 
>
>______
>
>도커/쿠버네티스를 활용한 컨테이너 개발 실전 입문
>
>현장에서 바로 활용할 수 있는 컨테이너 개발 기법과 실전 기술



## 0. 설정

>

### 0 - 1. docker ps -a

```powershell
PS C:\Users\HPE\docker\day04\swarm\stack> docker ps -a
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                                                   NAMES
e50acc725436        docker:19.03.5-dind   "dockerd-entrypoint.…"   17 seconds ago      Up 12 seconds       2375-2376/tcp, 4789/udp, 7946/tcp, 7946/udp                             worker03
20ac576cdaaf        docker:19.03.5-dind   "dockerd-entrypoint.…"   17 seconds ago      Up 12 seconds       2375-2376/tcp, 4789/udp, 7946/tcp, 7946/udp                             worker01
6ba4121c3022        docker:19.03.5-dind   "dockerd-entrypoint.…"   17 seconds ago      Up 14 seconds       2375-2376/tcp, 4789/udp, 7946/tcp, 7946/udp                             worker02
9e455bf45664        docker:19.03.5-dind   "dockerd-entrypoint.…"   19 seconds ago      Up 17 seconds       2375-2376/tcp, 3375/tcp, 0.0.0.0:9000->9000/tcp, 0.0.0.0:8000->80/tcp   manager
11066b67fea7        registry:latest       "/entrypoint.sh /etc…"   21 seconds ago      Up 19 seconds       0.0.0.0:5000->5000/tcp                                                  registry
```

### 0 - 2. docker service / stack

```powershell
PS C:\Users\HPE\docker\day04\swarm\stack> docker exec -it manager sh
/  # docker service ls
ID                  NAME                MODE                REPLICAS            IMAGE                              PORTS
thqmfihtpw5p        todo_mysql_master   replicated          1/1                 registry:5000/ch04/tododb:latest
yztp6lzbrsw6        todo_mysql_slave    replicated          2/2                 registry:5000/ch04/tododb:latest
oot6ty6xumv0        visualizer_app      global              1/1                 dockersamples/visualizer:latest    *:9000->8080/tcp
```



### # command

``` powershell
1. docker swarm join --token SWMTKN-1-06xvywl12h595cj7et6pmaui71p86n8i8jv5g6soy7cr59b2l3-5xf9bt01r6ytk9oz1zht56us8 172.19.0.3:2377

2 docker exec -it manager docker service ps todo_mysql_master --no-trunc --filter "desired-state=running" --format "docker exec -it {{.Node}} docker exec -it {{.Name}}.{{.ID}} bash"

나오는 메시지를 통해서 bash로 접근 가능
```



## 1.  API를 위한 Dockerfile

> p. 155-157

``` powershell
1. master db node 확인
PS C:\Users\HPE\docker\day04\swarm\todo\todoapi> docker exec -it manager sh
 # docker service ps todo_mysql_master
ID                  NAME                  IMAGE                              NODE                DESIRED STATE       CURRENT STATE            ERROR               PORTS
gl06stqha7yx        todo_mysql_master.1   registry:5000/ch04/tododb:latest   20ac576cdaaf        Running             Running 14 minutes ago

2. master db 접속
PS C:\Users\HPE\docker\day04\swarm\todo\todoapi> docker exec -it 20ac576cdaaf sh
/ # docker ps -a
CONTAINER ID        IMAGE                              COMMAND                  CREATED             STATUS              PORTS                 NAMES
7b410ed45397        registry:5000/ch04/tododb:latest   "prehook add-server-…"   20 minutes ago      Up 20 minutes       3306/tcp, 33060/tcp   todo_mysql_master.1.gl06stqha7yxdltlsrkpa4knd

/ # docker exec -it 7b410ed45397 bash
root@7b410ed45397:/# init-data.sh

root@7b410ed45397:/# mysql -uroot -p tododb
Enter password:(gihyo입력)

Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 19
Server version: 5.7.28-log MySQL Community Server (GPL)

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>

3. mysql data 확인
mysql> select * from todo;

+----+----------------------------------+-------------------------------------------------------------------------------------------------------+----------+---------------------+---------------------+
| id | title                            | content                                                                                               | status   | created             | updated             |
+----+----------------------------------+-------------------------------------------------------------------------------------------------------+----------+---------------------+---------------------+
|  1 | MySQL 도커 이미지 만들기         | MySQL 마스터와 슬레이브를 환경 변수로 설정할 수 있는 MySQL 이미지 생성                                | DONE     | 2020-01-14 02:07:04 | 2020-01-14 02:07:04 |
|  2 | MySQL 스택 만들기                | MySQL 마스터 및 슬레이브 서비스로 구성된 스택을 스웜 클러스터에 구축한다                              | DONE     | 2020-01-14 02:07:04 | 2020-01-14 02:07:04 |
|  3 | API구현하기                      | Go 언어로 TODO를 확인, 수정할 수 있는 API 구현                                                        | PROGRESS | 2020-01-14 02:07:04 | 2020-01-14 02:07:04 |
|  4 | Nginx 도커 이미지 만들기         | HTTP 요청을 백엔드로 전달하는 Nginx 이미지 만들기                                                     | PROGRESS | 2020-01-14 02:07:04 | 2020-01-14 02:07:04 |
|  5 | API 스택 구축하기                | 스웜에 Nginx와 API로 구성된 스택을 구축                                                               | PROGRESS | 2020-01-14 02:07:04 | 2020-01-14 02:07:04 |
|  6 | 웹 앱 구현하기                   | Nuxt.js를 통해 API와 연동되는 웹 애플리케이션 구현                                                    | PROGRESS | 2020-01-14 02:07:04 | 2020-01-14 02:07:04 |
|  7 | 웹 앱 스택 구축                  | 스웜에 Nginx와 웹 앱으로 구성되는 스택을 구축                                                         | PROGRESS | 2020-01-14 02:07:04 | 2020-01-14 02:07:04 |
|  8 | 인그레스 구축하기                | 외부에서 스웜 클러스터에 접근하게 해주는 인그레스 구축                                                | TODO     | 2020-01-14 02:07:04 | 2020-01-14 02:07:04 |
+----+----------------------------------+-------------------------------------------------------------------------------------------------------+----------+---------------------+---------------------+
8 rows in set (0.00 sec)

4. push
PS C:\Users\HPE\docker\day04\swarm\todo\tododb> docker push localhost:5000/ch04/todoapi:latest

PS C:\Users\HPE\docker\day04\swarm\todo\tododb> curl http://localhost:5000/v2/_catalog


StatusCode        : 200
StatusDescription : OK
Content           : {"repositories":["busybox","ch04/todoapi","ch04/tododb","example/ehco"]}

RawContent        : HTTP/1.1 200 OK
                    Docker-Distribution-Api-Version: registry/2.0
                    X-Content-Type-Options: nosniff
                    Content-Length: 73
                    Content-Type: application/json; charset=utf-8
                    Date: Tue, 14 Jan 2020 02:15:03 GMT...
Forms             : {}
Headers           : {[Docker-Distribution-Api-Version, registry/2.0], [X-Content-Type-Options
                    , nosniff], [Content-Length, 73], [Content-Type, application/json; charse
                    t=utf-8]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 73
```



## 2. 스웜에서 todoapi 서비스 실행하기

> p. 157 -  158

### 1. todo-app.yml 수정 
```yaml

version: "3"
services:
  # nginx:
  #   image: registry:5000/ch04/nginx:latest
  #   deploy:
  #     replicas: 2
  #     placement:
  #       constraints: [node.role != manager]
  #   depends_on:
  #     - api
  #   environment:
  #     WORKER_PROCESSES: 2
  #     WORKER_CONNECTIONS: 1024
  #     KEEPALIVE_TIMEOUT: 65
  #     GZIP: "on"
  #     BACKEND_HOST: todo_app_api:8080
  #     BACKEND_MAX_FAILES: 3
  #     BACKEND_FAIL_TIMEOUT: 10s
  #     SERVER_PORT: 8000
  #     SERVER_NAME: todo_app_nginx
  #     LOG_STDOUT: "true"
  #   networks:
  #     - todoapp

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

### 2. 
```powershell
1. manager sh 접속
PS C:\Users\HPE\docker\day04\swarm\stack> docker exec -it manager sh
/ #

2. todoapi deploy
/ # docker stack deploy -c /stack/todo-app.yml todo_app
Creating service todo_app_api

/ # docker stack services todo_app
ID                  NAME                MODE                REPLICAS            IMAGE                               PORTS
awe9znee02hs        todo_app_api        replicated          2/2                 registry:5000/ch04/todoapi:latest
```

### 3.

```powershell
1. net-tools 설치
PS C:\Users\HPE\docker\day04\swarm\todo\todoapi> docker exec -it worker01 sh
/ # docker ps -a
CONTAINER ID        IMAGE                               COMMAND                  CREATED             STATUS              PORTS                 NAMES
c018f94152df        registry:5000/ch04/todoapi:latest   "todoapi"                7 minutes ago       Up 7 minutes                              todo_app_api.2.ypa35bl9i1qchlv63kscp872l
7b410ed45397        registry:5000/ch04/tododb:latest    "prehook add-server-…"   49 minutes ago      Up 49 minutes       3306/tcp, 33060/tcp   todo_mysql_master.1.gl06stqha7yxdltlsrkpa4knd

/ # docker exec -it c018f94152df bash
root@c018f94152df:/# apt-get update
Ign:1 http://deb.debian.org/debian stretch InRelease
Get:2 http://security.debian.org/debian-security stretch/updates InRelease [94.3 kB]
Get:3 http://deb.debian.org/debian stretch-updates InRelease [91.0 kB]
Get:4 http://deb.debian.org/debian stretch Release [118 kB]
Get:5 http://security.debian.org/debian-security stretch/updates/main amd64 Packages [513 kB]
Get:6 http://deb.debian.org/debian stretch Release.gpg [2365 B]
Get:7 http://deb.debian.org/debian stretch-updates/main amd64 Packages [27.9 kB]
Get:8 http://deb.debian.org/debian stretch/main amd64 Packages [7086 kB]
Fetched 7933 kB in 6s (1139 kB/s)
Reading package lists... Done

root@c018f94152df:/# apt-get install -y net-tools
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following NEW packages will be installed:
  net-tools
0 upgraded, 1 newly installed, 0 to remove and 39 not upgraded.
Need to get 248 kB of archives.
After this operation, 963 kB of additional disk space will be used.
Get:1 http://deb.debian.org/debian stretch/main amd64 net-tools amd64 1.60+git20161116.90da8a0-1 [248 kB]
Fetched 248 kB in 1s (236 kB/s)
debconf: delaying package configuration, since apt-utils is not installed
Selecting previously unselected package net-tools.
(Reading database ... 15092 files and directories currently installed.)
Preparing to unpack .../net-tools_1.60+git20161116.90da8a0-1_amd64.deb ...
Unpacking net-tools (1.60+git20161116.90da8a0-1) ...
Setting up net-tools (1.60+git20161116.90da8a0-1) ...

2. serveGET/ServePOST/servePUT 명령어 확인 : p 154-155

root@c018f94152df:/# curl -XGET http://localhost:8080/todo?status=TODO
[{"id":8,"title":"인그레스 구축하기","content":"외부에서 스웜 클러스터에 접근하게 해주는 인그레스 구축","status":"TODO","created":"2020-01-14T02:07:04Z","updated":"2020-01-14T02:07:04Z"}]root@c018f94152df:/#

root@c018f94152df:/# curl -XPOST -d '{"title":"Test1", "content":"Test contest1"}' http://localhost:8080/todo
root@c018f94152df:/# curl -s -XGET http://localhost:8080/todo?status=TODO
[{"id":9,"title":"Test1","content":"Test contest1","status":"TODO","created":"2020-01-14T02:46:56Z","updated":"2020-01-14T02:46:56Z"},{"id":8,"title":"인그레스 구축하기","content":"외부에서 스웜 클러스터에 접근하게 해주는 인그레스 구 축","status":"TODO","created":"2020-01-14T02:07:04Z","updated":"2020-01-14T02:07:04Z"}]root@c018f94152df:/#
```

## 4. master/slave 정보 확인

#### worker01

``` powershell
PS C:\Users\HPE\docker\day04\swarm\stack> docker exec -it 20ac576cdaaf  sh
/ # docker ps
CONTAINER ID        IMAGE                               COMMAND                  CREATED             STATUS              PORTS                 NAMES
c018f94152df        registry:5000/ch04/todoapi:latest   "todoapi"                About an hour ago   Up About an hour                          todo_app_api.2.ypa35bl9i1qchlv63kscp872l
7b410ed45397        registry:5000/ch04/tododb:latest    "prehook add-server-…"   2 hours ago         Up 2 hours          3306/tcp, 33060/tcp   todo_mysql_master.1.gl06stqha7yxdltlsrkpa4knd
/ # hostname -i
172.19.0.6
/ # docker exec -it 7b410ed45397 hostname -i
10.0.3.3
/ # docker exec -it c018f94152df  hostname -i
10.0.3.11
```

#### worker02

``` powershell
PS C:\Users\HPE\docker\day04\swarm\stack> docker exec -it worker02 sh
/ # docker ps
CONTAINER ID        IMAGE                              COMMAND                  CREATED             STATUS              PORTS                 NAMES
49f3017bd977        registry:5000/ch04/tododb:latest   "prehook add-server-…"   2 hours ago         Up 2 hours          3306/tcp, 33060/tcp   todo_mysql_slave.1.lw29u9pah0b5ltlj0s2n60g88
/ # hostname -i
172.19.0.4
/ # docker exec -it 49f3017bd977 hostname -i
10.0.3.5
```

#### worker03

```powershell
PS C:\Users\HPE\docker\day04\swarm\stack> docker exec -it worker03 sh
/ # docker ps
CONTAINER ID        IMAGE                               COMMAND                  CREATED             STATUS              PORTS                 NAMES
03d6dbbed85e        registry:5000/ch04/todoapi:latest   "todoapi"                About an hour ago   Up About an hour                          todo_app_api.1.8e62trp4e3jw3ypdcdx1h257s
122d2122bb6c        registry:5000/ch04/tododb:latest    "prehook add-server-…"   2 hours ago         Up 2 hours          3306/tcp, 33060/tcp   todo_mysql_slave.2.d6zk2goviy4lj2xjjrfhvvp7y
/ # hostname -i
172.19.0.5
/ # docker exec -it 122d2122bb6c  hostname -i
10.0.3.6
```

