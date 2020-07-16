# Docker ch04 - 스웜을 이용한 실전 애플리케이션 개발

## 1. 웹 애플리케이션 구성

### 1) 애플리케이션 요구 조건

```
1. TODO를 등록, 수정, 삭제할 수 있다.
2. 등록된 TODO의 목록을 출력할 수 있다.
3. 블라우저에서 사용할 수 있는 웹 애플리케이션이다
4. 블라우저 외에서도 사용할 수 있도록 JSON API endpoint를 제공한다
```

### 2) 아키텍쳐

#### (1) 아키텍쳐를 구성하는 요소

* MySQL

```
1. 용도 : datastore
2. 서비스 명 : mysql_master, mysql_slave
3. 스택 명 : MySQL
```

* API

```
1. 용도 : 데이터스토어를 다룰 API 서버
2. 서비스 명 : app_api
3. 스택 명 : Application
```

* Web

```
1. 용도 : 뷰 생성을 담당하는 애플리케이션 서버
2. 서비스 명 : frontend_web
3. 스택 명 : Frontend
```

* Nginx

```
1. 용도 : 프록시 서버
2. 서비스 명 : app_nginx, frontend_nginx
3. 스택 명 : Application Frontend
```

#### (2) 배치

* node

```powershell
PS C:\...> docker container exec -it manager docker node ls
ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
gmykxqvldw0mnbgq1egt82it9     72d816931c11        Ready               Active                                  18.05.0-ce
k5gtg4vic8wz904c7q2ln9qg0 *   a3a2dc081703        Ready               Active              Leader              18.05.0-ce
qzwvssb72t8c4sw28zb6v9o79     a63a2fed3d51        Ready               Active                                  18.05.0-ce
28m6bvueryy2r1ayo14fe61rt     acd53ad2f1a4        Ready               Active                                  18.05.0-ce
```

* network

```powershell
PS C:\...> docker container exec -it manager docker network create --driver=overlay --attachable todoapp
```

#### (3) TODO 애플리케이션의 전체 구조

```
1. 데이터 스토어 역할을 할 MySQL 서비스를 master-slave 구조로 구축
2. MySQL과 데이터를 주고받을 API 구현
3. Nginx를 웹 애플리케이션과 API 사이에서 리버스 프록스 역할을 하도록 설정
4. API를 사용해 서버사이드 렌더링을 수행할 웹 애플리케이션 구현
5. 프론트엔드 쪽에 리버스 프록시(Nginx) 배치
```



## 2. MySQL 서비스 구축

* MySQL 이미지를 만들기 위한 공개 리포지토리

``` powershell
PS C:\...> git clone https://github.com/gihyodocker/tododb
```

### 1) 데이터베이스 컨테이너 구성

* 도커 이미지 구성 방식

```
1. MySQL 컨테이너는 도커 허브에 등록된 mysql:latest 이미지를 기반으로 생성한다.
2. 마스터-슬레이브 컨테이너는 두 역할을 모두 수행할 수 있는 하나의 이미지로 생성한다.
3. MYSQL_MASTER 환경 변수의 유무에 따라 해당 컨테이너가 마스터로 동작할 지, 슬레이브로 동작할 지가 결정된다.
4. replicas 값을 조절해 슬레이브를 늘릴 수 있게 한다. 이때 마스터, 슬레이브 모두 일시 정지(다운타임)를 허용한다.
```

### 2) MySQL 설정

* tododb/etc/mysql/mysql.conf.d/mysqld.cnf

```mysql
[mysql]
character-set-server = utf8mb4
collation-server = utf8mb4_general_ci
pid-file = /var/run/mysqld/mysqld.pid
socket = /var/run/mysqld/mysqld.sock
datadir = /var/lib/mysql
#log-error = /var/log/mysql/error.log
#By default we only accept connections from localhost
#bind-address = 127.0.0.1
#Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0
relay-log=mysqld-relay-bin
relay-log-index=mysql-relay-bin

log-bin=/var/log/mysql/mysql-bin.log

server-id = 1
```

* tododb/add-server-id.sh

```sh
#!/bin/bash -e
OCTETS=(`hostname -i | tr -s '.' ' '`)

MYSQL_SERVER_ID=`expr ${OCTETS[2]} \* 256 + ${OCTETS[3]}`
echo "server-id=$MYSQL_SERVER_ID" >> /etc/mysql/mysql.conf.d/mysqld.cnf

```

### 3) 레플리케이션 설정

### 4) MySQL Dockerfile

```dockerfile
FROM mysql:latest

RUN apt-get update
RUN apt-get install -y wget

RUN wget https://github.com/progrium/entrykit/releases/download/v0.4.0/entrykit_0.4.0_linux_x86_64.tgz
RUN tar -xvzf entrykit_0.4.0_linux_x86_64.tgz
RUN rm entrykit_0.4.0_linux_x86_64.tgz
RUN mv entrykit /usr/local/bin/
RUN entrykit --symlink

COPY add-server-id.sh /usr/local/bin/
COPY etc/myslq/mysql.conf.d/mysqld.cnf /etc/mysql/mysql.conf.d/
COPY etc/mysql/conf.d/mysql.cnf /etc/mysql/conf.d/
COPY prepare.sh /docker-entrypoint-initdb.d
COPY init-data.sh /usr/local/bin/
COPY sql /sql

ENTRYPOINT [ \
    "prehook", \
    "add-server-id.sh", \
    "--", \
    "docker-entrypoint.sh"]


CMD [ "mysqld" ]
```

#### (1) 빌드 및 스웜 클러스터에서 사용하기

* 이미지 생성

```powershell
PS C:\...\tododb> docker image build -t ch04/tododb:latest .
```

* 태그

```powershell
PS C:\...\tododb> docker image tag ch04/tododb:latest localhost:5000/ch04/tododb:latest
```

* 레지스트리에 등록

```powershell
PS C:\...\tododb> docker image push localhost:5000/ch04/tododb:latest
```

### 5) 스웜에서 마스터 및 슬레이브 실행

* stack/todo-mysql.yml

```yaml
version: "3"

services:
  master:
    image: registry:5000/ch04/tododb:latest
    deploy:
      replicas: 1
      placement:
        constraints: [node.role != manager]
    environment:
      MYSQL_ROOT_PASSWORD: gihyo
      MYSQL_DATABASE: tododb
      MYSQL_USER: gihyo
      MYSQL_PASSWORD: gihyo
      MYSQL_MASTER: "true"
    networks:
      - todoapp

  slave:
    image: registry:5000/ch04/tododb:latest
    deploy:
      replicas: 2
      placement:
        constraints: [node.role != manager]
    depends_on:
      - master
    environment:
      MYSQL_MASTER_HOST: master
      MYSQL_ROOT_PASSWORD: gihyo
      MYSQL_DATABASE: tododb
      MYSQL_USER: gihyo
      MYSQL_PASSWORD: gihyo
      MYSQL_REPL_USER: repl
      MYSQL_REPL_PASSWORD: gihyo
    networks:
      - todoapp
    
networks:
  todoapp:
    external: true
      
```

#### (1) 스웜으로 배포하기

* todo-mysql.yml에 정의된 서비스를 todo_mysql스택으로 manager 컨테이너에 배포

```powershell
PS C:\...> docker container exec -it manager docker stack deploy -c /stack/todo-mysql.yml todo_mysql                                                                               Creating service todo_mysql_master
Creating service todo_mysql_slave
```

### 6) MySQL 컨테이너 확인 및 초기 데이터 투입



## 3. API 서비스 구축

* TODOAPI 공개 리포지토리

```powershell
PS C:\...> git clone https://github.com/gihyodocker/todoapi
```

### 1) 애플리케이션 환경 변수 통제

* todoapi/cmd/main.go
* todoapi/env.go

### 2) MySQL 접속 및 테이블 매핑

* todoapi/db.go

### 3) 핸들러 구현하기

* todoapi/handler.go

#### (1) serveGET : 요청 파라미터를 받아 쿼리 실행

#### (2) servePOST : 새로운 TODO 추가

#### (3) servePUT  : 이미 추가된 TODO 수정

### 4) API를 위한 Dockerfile

* API 이미지 빌드

```powershell
PS C:\...\todoapi> docker image build -t ch04/todoapi:latest .
```

`golang: 1.9`

* API 이미지 태그

```powershell
PS C:\...\todoapi> docker image tag ch04/todoapi:latest localhost:5000/ch04/todoapi:latest
```

* API 이미지 push

```powershell
PS C:\...\todoapi> docker image push localhost:5000/ch04/todoapi:latest
```

### 5) 스웜에서 todoapi 서비스 실행하기

* stack/todo-app.yml

```yaml
version: "3"
services:
  api:
      image: registry:5000/ch04/todoapi:latest
      deploy:
          replicas: 2
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

* 스택 서비스 배포

```powershell
PS C:\...> docker container exec -it manager docker stack deploy -c /stack/todo-app.yml todo_app  
```

## 4. Nginx 구축

* nginx 구축을 위한 공개 리포지토리

```powershell
PS C:\...> git clone https://github.com/gihyodocker/todonginx
```

### 1) Nginx.conf 파일 구성하기

#### (1) entrykit 템플릿 기능

* todonginx/etc/nginx/nginx.conf.tmpl

#### (2) 로그

* todonginx/etc/nginx/conf.d/log.conf

#### (3) 백엔드 서버 지정

* todonginx/etc/nginx/conf.d/upstream.conf.tmpl

#### (4) 라우팅

* todonginx/etc/nginx/conf.d/public.conf.tmpl

### 2) Nginx 컨테이너의 Dockerfile

* todonginx 이미지 생성

```powershell
PS C:\...\todonginx> docker image build -t ch04/nginx:latest .
```

* todonginx tag

```powershell
PS C:\...\todonginx> docker image tag ch04/nginx:latest localhost:5000/ch04/nginx:latest
```

* todonginx push

```powershell
PS C:\...\todonginx> docker image push localhost:5000/ch04/nginx:latest
```

### 3) Nginx를 거쳐 API에 접근하기

* stack/todo-app.yml

```yaml
version: '3'
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
      BACKEND_MAX_FAILS: 3
      BACKEND_FAIL_TIMEOUT: 10s
      SERVER_PORT: 80
      SERVER_NAME: todo_app_nginx
      LOG_STDOUT: "true"
    networks:
      - todoapp

  api:
      image: registry:5000/ch04/todoapi:latest
      deploy:
          replicas: 2
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

* 스택 배포

```powershell
PS C:\...> docker container exec -it manager docker stack deploy -c /stack/todo-app.yml todo_app 
```

## 5. 웹 서비스 구축

* todoweb 구축을 위한 공개 리포지토리

```powershell
PS C:\...> git clone https://github.com/gihyodocker/todoweb
```

### 1) TODO API 호출 및 페이지 HTML 렌더링

* todoweb/pages/index.vue : 대시보드 구현

### 2) 웹 서비스의 Dockerfile

* todoweb 이미지 생성

```powershell
PS C:\...\todoweb> docker image build -t ch04/todoweb:latest .
```

* todoweb tag

```powershell
PS C:\...\todoweb> docker image tag ch04/todoweb:latest localhost:5000/ch04/todoweb:latest
```

* todoweb push

```powershell
PS C:\...\todoweb> docker image push localhost:5000/ch04/todoweb:latest
```

### 3) 정적 파일을 다루는 방법

* todonginx/public.conf.tmpl 복사

```powershell
PS C:\...\todonginx> cp etc/nginx/conf.d/public.conf.tmpl etc/nginx/conf.d/nuxt.conf.tmpl 
```

* todonginx/etc/nginx/conf.d/nuxt.conf.tmpl 파일 수정

```
server {
	...
	
    location /_nuxt/ {#
      alias /var/www/_nuxt/$1;
      {{ if var "LOG_STDOUT" }}
      access_log /dev/stdout json;
      error_log /dev/stderr;
      {{ else }}
      access_log /var/log/nginx/assets_access.log json;
      error_log /var/log/nginx/assets_error.log;
      {{ end}}
    }

	...
    }
}

```

* todonginx/Dockerfile-nuxt

```dockerfile
FROM nginx:1.13

RUN apt-get update
RUN apt-get install -y wget
RUN wget https://github.com/progrium/entrykit/releases/download/v0.4.0/entrykit_0.4.0_linux_x86_64.tgz
RUN tar -xvzf entrykit_0.4.0_linux_x86_64.tgz
RUN rm entrykit_0.4.0_linux_x86_64.tgz
RUN mv entrykit /usr/local/bin/
RUN entrykit --symlink

RUN rm /etc/nginx/conf.d/*
COPY etc/nginx/nginx.conf.tmpl /etc/nginx/
COPY etc/nginx/conf.d/ /etc/nginx/conf.d/

ENTRYPOINT [ \
  "render", \
      "/etc/nginx/nginx.conf", \
      "--", \
  "render", \
      "/etc/nginx/conf.d/upstream.conf", \
      "--", \
  "render", \
      "/etc/nginx/conf.d/nuxt.conf", \
      "--" \
]

CMD ["nginx", "-g", "daemon off;"]

```

* nginx-nuxt 이미지 생성

```powershell
PS C:\...\todonginx> docker image build -f Dockerfile-nuxt -t ch04/nginx-nuxt:latest .
```

* nginx-nuxt 태그

```powershell
PS C:\...\todonginx> docker image tag ch04/nginx-nuxt:latest localhost:5000/ch04/nginx-nuxt:latest
```

* nginx-nuxt push

```powershell
PS C:\...\todonginx> docker image push localhost:5000/ch04/nginx-nuxt:latest
```

### 4) Nginx 를 통한 접근 허용

* stack/todo-frontend.yml

```yaml
version: '3.2'

services:

  nginx:
    image: registry:5000/ch04/nginx-nuxt:latest
    deploy:
      replicas: 2
      placement:
        constraints: [node.role != manager]
    depends_on:
      - web
    environment:
      SERVICE_PORTS: 80
      WORKER_PROCESSES: 2
      WORKER_CONNECTIONS: 1024
      KEEPALIVE_TIMEOUT: 65
      GZIP: "on"
      BACKEND_HOST: todo_frontend_web:3000
      BACKEND_MAX_FAILS: 3
      BACKEND_FAIL_TIMEOUT: 10s
      SERVER_PORT: 80
      SERVER_NAME: localhost
      LOG_STDOUT: "true"
    networks:
      - todoapp
    volumes:
      - assets:/var/www/_nuxt
  
  web:
    image: registry:5000/ch04/todoweb:latest
    deploy:
      replicas: 2
      placement:
        constraints: [node.role != manager]
    environment:
      TODO_API_URL: http://todo_app_nginx
    networks:
      - todoapp
    volumes:
      - assets:/todoweb/.nuxt/dist

networks:
  todoapp:
    external: true

volumes: 
  assets:

```

* 스택 배포

```powershell
PS C:\...> docker container exec -it manager docker stack deploy -c /stack/todo-frontend.yml todo_frontend 
```

### 5) 인그레스로 서비스 노출하기

* stack/todo-ingress.yml

```yaml
version: '3'

services:
  haproxy:
    image: dockercloud/haproxy
    networks:
      - todoapp
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    deploy:
      mode: global
      placement:
        constraints:
          - node.role == manager
    ports:
      - 80:80
      - 1936:1936

networks:
  todoapp:
    external: true

```

* todo-ingress.yml 배포

```powershell
PS C:\...> docker container exec -it manager docker stack deploy -c /stack/todo-ingress.yml todo_ingress 
```

* 최종 모습

## 6. 컨테이너 오케이스트레이션을 적용한 개발 스타일

