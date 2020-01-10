# 도커 / 쿠버네티스 4일차 - docker stack

>p. -127
>
>_____
>
>도커/쿠버네티스를 활용한 컨테이너 개발 실전 입문
>
>현장에서 바로 활용할 수 있는 컨테이너 개발 기법과 실전 기술







### 0. 기본설정

```powershell
1. docker token

docker swarm join --token SWMTKN-1-5o64tbl6zocifr7vsw9j3zrensw1mtgui578x42s3b5cw27hjp-6l2r9nqd7qeexbtzq2x451xki 172.27.0.3:2377

2. docker node 

PS C:\Users\HPE\docker\day04\swarm> docker exec -it manager sh
ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
ucv1fidg1tyc530pjt1vs199c *   5d2524614b63        Ready               Active              Leader              19.03.5
vueywlk0cw1wiorwi10w8yu6i     5e42d842f527        Ready               Active                                  19.03.5
oyv928i9b3o3smfeqe25gxrgr     803dadef4fed        Ready               Active                                  19.03.5
l1yx7rxhyzsfwww2ddxs7xqjg     0832c17c05a5        Ready               Active                                  19.03.5

3. swarm 설정 확인 : manager sh 에서 확인

/ # docker info
Client:
 Debug Mode: false

Server:
 Containers: 0
  Running: 0
  Paused: 0
  Stopped: 0
 Images: 0
 Server Version: 19.03.5
 Storage Driver: overlay2
  Backing Filesystem: extfs
  Supports d_type: true
  Native Overlay Diff: true
 Logging Driver: json-file
 Cgroup Driver: cgroupfs
 Plugins:
  Volume: local
  Network: bridge host ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file local logentries splunk syslog
 Swarm: active
  NodeID: ucv1fidg1tyc530pjt1vs199c
  Is Manager: true
  ClusterID: wzwo1359pkip4f5u4rtimin5o
  Managers: 1
  Nodes: 4
  Default Address Pool: 10.0.0.0/8
  SubnetSize: 24
  Data Path Port: 4789
  Orchestration:
   Task History Retention Limit: 5
  Raft:
   Snapshot Interval: 10000
   Number of Old Snapshots to Retain: 0
   Heartbeat Tick: 1
   Election Tick: 10
  Dispatcher:
   Heartbeat Period: 5 seconds
  CA Configuration:
   Expiry Duration: 3 months
   Force Rotate: 0
  Autolock Managers: false
  Root Rotation In Progress: false
  Node Address: 172.27.0.3
  Manager Addresses:
   172.27.0.3:2377
 Runtimes: runc
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: b34a5c8af56e510852c35414db4c1f4fa6172339
 runc version: 3e425f80a8c931f88e6d94a8c831b9d5aa481657
 init version: fec3683
 Security Options:
  seccomp
   Profile: default
 Kernel Version: 4.9.184-linuxkit
 Operating System: Alpine Linux v3.11 (containerized)
 OSType: linux
 Architecture: x86_64
 CPUs: 2
 Total Memory: 1.934GiB
 Name: 5d2524614b63
 ID: YJWS:HL5V:6QZQ:IYSW:LBQV:MR5E:E5ZJ:H5DM:F5D5:MB33:6AVR:RS5N
 Docker Root Dir: /var/lib/docker
 Debug Mode: false
 Registry: https://index.docker.io/v1/
 Labels:
 Experimental: false
 Insecure Registries:
  registry:5000
  127.0.0.0/8
 Live Restore Enabled: false
 Product License: Community Engine

WARNING: bridge-nf-call-iptables is disabled
WARNING: bridge-nf-call-ip6tables is disabled

# Swarm: active 확인
```



### 1. 서비스

> p.115 -

```powershell
1. manager 에서 서비스 하나 생성
	
	실습예제1 : gihyodocker/echo 이미지를 올린 후 manager에서 서비스 생성
	
	1) gihyodocker/echo:latest 를 localhost:5000/example/ehco:latest 이름으로 tag 생성
	
PS C:\Users\HPE\docker\day04\swarm> docker tag gihyodocker/echo localhost:5000/example/ehco:latest

	2) registry:5000에 추가
	
PS C:\Users\HPE\docker\day04\swarm> docker push localhost:5000/example/ehco:latest
The push refers to repository [localhost:5000/example/ehco]
66b13673465b: Pushed
1d46d350d3ef: Pushed
103136343d58: Pushed
d8098ff4464c: Pushed
8af637b7b756: Pushed
af1e37edd79f: Pushed
b31411566900: Pushed
06f4de5fefea: Pushed
851f3e348c69: Pushed
e27a10675c56: Pushed
latest: digest: sha256:4520b6a66d2659dea2f8be5245eafd5434c954485c6c1ac882c56927fe4cec84 size: 2417

# echo:latest 에서 오타가 발생했다 -> ehco:latest

	3) manager에서 service 생성
		- replicas : 1개
		- name : echo
		
PS C:\Users\HPE\docker\day04\swarm> docker exec -it manager sh
/ # docker service create --replicas 1 --publish 8000:8080 --name echo registry:5000/example/ehco:latest
y0n86arzo50t41ir6kbrnghra
overall progress: 1 out of 1 tasks
1/1: running   [==================================================>]
verify: Service converged

/ # docker service ls
ID                  NAME                MODE                REPLICAS            IMAGE                               PORTS
y0n86arzo50t        echo                replicated          1/1                 registry:5000/example/ehco:latest   *:8000->8080/tcp

	실습예제2 서비스 포트를 8000 -> manager 포트로 변경
	
	1) manager port 확인
	
PS C:\Users\HPE\docker\day04\swarm> docker ps -a
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                                                   NAMES
803dadef4fed        docker:19.03.5-dind   "dockerd-entrypoint.…"   44 minutes ago      Up 44 minutes       2375-2376/tcp, 4789/udp, 7946/tcp, 7946/udp                             worker03
0832c17c05a5        docker:19.03.5-dind   "dockerd-entrypoint.…"   44 minutes ago      Up 44 minutes       2375-2376/tcp, 4789/udp, 7946/tcp, 7946/udp                             worker01
5e42d842f527        docker:19.03.5-dind   "dockerd-entrypoint.…"   44 minutes ago      Up 44 minutes       2375-2376/tcp, 4789/udp, 7946/tcp, 7946/udp                             worker02
5d2524614b63        docker:19.03.5-dind   "dockerd-entrypoint.…"   44 minutes ago      Up 44 minutes       2375-2376/tcp, 3375/tcp, 0.0.0.0:9000->9000/tcp, 0.0.0.0:8000->80/tcp   manager
cfaab01fa323        registry:latest       "/entrypoint.sh /etc…"   44 minutes ago      Up 44 minutes       0.0.0.0:5000->5000/tcp                                                  registry

## manager port 80번 확인

	2) manager 포트 변경

/ # docker service rm y0
y0
/ # docker service create --replicas 1 --publish 80:8080 --name echo registry:5000/example/ehco:latest
zg2yzg22ahwri3fakny78n0b0
overall progress: 1 out of 1 tasks
1/1: running   [==================================================>]

# port 80:8080 의미 : 두개의 포트포워딩이 걸려있다.
docker server인 windows의 포트 : 8000
docker manager 포트 : 80
docker echo service 포토 : 8080

8000 out - in 80 out - in 8080

	3) service 내용 확인하기
	
/ # docker service ls
ID                  NAME                MODE                REPLICAS            IMAGE                               PORTS
zg2yzg22ahwr        echo                replicated          1/1                 registry:5000/example/ehco:latest   *:80->8080/tcp

/ # docker service ps echo
ID                  NAME                IMAGE                               NODE                DESIRED STATE       CURRENT STATE            ERROR               PORTS
ngio3qt9kj2e        echo.1              registry:5000/example/ehco:latest   5e42d842f527        Running             Running 38 seconds ago

## 해당 서비스가 worker02에 설치되었다. 따라서 이를 확인 해보자.

PS C:\Users\HPE\docker\day04\swarm> docker exec -it worker02 sh
/ # docker ps
CONTAINER ID        IMAGE                               COMMAND                  CREATED             STATUS              PORTS               NAMES
b854506cd54a        registry:5000/example/ehco:latest   "go run /echo/main.go"   21 minutes ago      Up 21 minutes                           echo.1.ngio3qt9kj2ezjluu9giqoey7


## 해당 서비스가 worker02에 설치되었음이 확인되었다.

2. docker service scale 

/ # docker service scale echo=3
echo scaled to 3
overall progress: 3 out of 3 tasks
1/3: running   [==================================================>]
2/3: running   [==================================================>]
3/3: running   [==================================================>]
verify: Service converged

/ # docker service ps echo
ID                  NAME                IMAGE                               NODE                DESIRED STATE       CURRENT STATE            ERROR               PORTS
ngio3qt9kj2e        echo.1              registry:5000/example/ehco:latest   5e42d842f527        Running             Running 35 minutes ago
rps01booinma        echo.2              registry:5000/example/ehco:latest   5d2524614b63        Running             Running 17 minutes ago
w23em0gw248s        echo.3              registry:5000/example/ehco:latest   0832c17c05a5        Running             Running 16 minutes ago

# 해당 노드별로 하나씩 설치되었으므로 해당 내용을 확인해 보자

PS C:\Users\HPE\docker\day04\swarm> docker exec -it worker01 sh
/ # docker ps
CONTAINER ID        IMAGE                               COMMAND                  CREATED             STATUS              PORTS               NAMES
d02edb5c911d        registry:5000/example/ehco:latest   "go run /echo/main.go"   18 minutes ago      Up 18 minutes                           echo.3.w23em0gw248si1yloczg7n8b5

PS C:\Users\HPE\docker\day04\swarm> docker exec -it worker02 sh
/ # docker ps
CONTAINER ID        IMAGE                               COMMAND                  CREATED             STATUS              PORTS               NAMES
b854506cd54a        registry:5000/example/ehco:latest   "go run /echo/main.go"   37 minutes ago      Up 37 minutes                           echo.1.ngio3qt9kj2ezjluu9giqoey7


3. docker network overlay

	
```





### 2. 스택

> p.117 -

```powershell
1. manager 에서 기본 설정하기
		
	1) overlay 네트워크 생성
	
PS C:\Users\HPE\docker\day04\swarm> docker exec -it manager sh
/ # docker network create --driver=overlay --attachable ch03
ko77j8mj3lcjthebebc3y35ws

/ # docker network ls
NETWORK ID          NAME                DRIVER              SCOPE
6c901ba11631        bridge              bridge              local
ko77j8mj3lcj        ch03                overlay             swarm
2e0d595a7b99        docker_gwbridge     bridge              local
d6d6f50f2d27        host                host                local
ffndzdy9kw4t        ingress             overlay             swarm
9160103a34cb        none                null                local

## ch03 네트워크가 생성되었음이 확인 되었다.

	2) dockere stack 확인
		
/ # docker stack ls
NAME                SERVICES            ORCHESTRATOR

	3) docker 기존 service 삭제
		
/ # docker service rm zg
zg


```



```yaml
2. yaml 파일 생성 p118-119 : C:\Users\HPE\docker\day04\swarm\stack\my-webapi.yml

version: "3"

services:
    api:
        image: registry:5000/example/ehco:latest
        deploy:
            replicas: 3
            placement:
                constraints: [node.role != manager]
        networks:
            - ch03

    nginx:
        image: gihyodocker/nginx-proxy:latest
        deploy:
            replicas: 3
            placement:
                constraints: [node.role != manager]
        environment:
            BACKEND_HOST: echo_api:8080
        networks:
            - ch03
        depends_on:
            - api
networks:
    ch03:
        external: true
```

​		

```powershell
3. docker stack 생성

	1) stack 생성
	
PS C:\Users\HPE\docker\day04\swarm> docker exec -it manager sh
/ # 

/ # cd /stack

/stack # docker stack deploy -c /stack/my-webapi.yml echo
Creating service echo_api
Creating service echo_nginx

	2) stack 생성 확인
/stack # docker stack ls
NAME                SERVICES            ORCHESTRATOR
echo                2                   Swarm
```



```yaml
4. visualizer를 사용해 컨테이너 배치 시각화하기

	1) C:\Users\HPE\docker\day04\swarm\stack\visualapp.yml 작성
    
version: "3"
services:
    app:
        image: dockersamples/visualizer
        ports:
            -"9000:8080"
        volumes:
            - /var/run/docker.sock:/var/run/docker.sock
        deploy:
            mode: global
            placement:
                constraints: [node.role == manager]
```



```powershell
	2) Manager에서 해당 visualizer 작동
	
PS C:\Users\HPE\docker\day04\swarm> docker exec -it manager sh
/ # docker stack deploy -c /stack/visualapp.yml visualizer
Creating network visualizer_default
Creating service visualizer_app


```

 아래는 visualizer 가동이 된 모습을 확인한 것이다. 컨테이너의 위치를 지정해주지 않았기에 아래 모습과 다르게 나타날 수 있다.

![visualizer 시각화모습](https://user-images.githubusercontent.com/55272324/72126823-f4a5f900-33b0-11ea-87f6-53fb62fcfe22.PNG)





### 3. 스웜 클러스터 외부에서 서비스 사용하기

> p.123 -



```yaml
1. echo_nginx 서비스는 여러 컨테이너가 여러 노드에 흩어져 배치되어 있기 때문에 서비스 클러스터 외부에서 오는 트래픽을 목적하는 서비스에 접근하기 프록시 서버가 있어야 한다. 따라서 haproxy 서버를 사용해 해당 서비스에 접근할 수 있도록 해보자.

version: "3"
services:
    api:
        image: registry:5000/example/ehco:latest
        deploy:
            replicas: 3
            placement:
                constraints: [node.role != manager]
        networks:
            - ch03
    nginx:
        image: gihyodocker/nginx-proxy:latest
        deploy:
            replicas: 3
            placement: 
                constraints: [node.role != manager]
        environment:
            SERVICE_PORTS: 80
            BACKEND_HOST: echo_api:8080
        depends_on:
            - api
        networks:
            - ch03

networks:
    ch03:
        external: true
```

현 단계에서 포트포워딩 관계도

```powershell
windows port : 8000
Manager port : 80
HAProxy port : 80
api port : 8080

windows - manager - HAProxy - api
8000        80        80      8080
```



```yaml
2. ch03-ingress.yaml 파일 생성

version: "3"

services:
    haproxy:
        image: dockercloud/haproxy
        networks:
            - ch03
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
    ch03:
        external: true
```



```powershell
3. deploy

/ # docker stack deploy -c /stack/my-webapi.yml echo
Creating service echo_api
Creating service echo_nginx

/ # docker stack deploy -c /stack/ch03-ingress.yml ingress
Creating service ingress_haproxy

4. 해당 deploy 확인

/ # docker stack services echo
ID                  NAME                MODE                REPLICAS            IMAGE                               PORTS
96bfb02mer3m        echo_nginx          replicated          3/3                 gihyodocker/nginx-proxy:latest
wy31nyw1tkhm        echo_api            replicated          3/3                 registry:5000/example/ehco:latest

/ # docker stack services ingress
ID                  NAME                MODE                REPLICAS            IMAGE                        PORTS
bhihu30p7d93        ingress_haproxy     global              1/1                 dockercloud/haproxy:latest   *:80->80/tcp, *:1936->1936/tcp
```

5. 결과 확인

<img src="https://user-images.githubusercontent.com/55272324/72130189-10fb6300-33bc-11ea-9c90-0589f1a35ef3.PNG" alt="스웜 클러스터 외부에서 서비스 사용하기 결과" style="zoom:80%;" />

<img src="https://user-images.githubusercontent.com/55272324/72130190-1193f980-33bc-11ea-9b17-da28fe0b3323.PNG" alt="스웜 클러스터 외부에서 서비스 사용하기 결과2" style="zoom:80%;" />