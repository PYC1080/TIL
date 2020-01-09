# 도커/쿠버네티스 3일차 -

>
>
>_____
>
>도커 / 쿠버네티스를 활용한 컨테이너 개발 실전 입문
>
>현장에서 바로 활용할 수 있는 컨테이너 개발 기법과 실전 기술

## docker network

```
1. bridge network

   (1)docker network create --driver bridge [브릿지 이름]

   (2)

2. host network

3. none network

4. container network

5. overlay network
```



## docker swam

| 이름    | 역할                                                         | 대응 명령어    |
| ------- | ------------------------------------------------------------ | -------------- |
| compose | 여러 컨테이너로 구성된 도커 애플리케이션을 관리 (주로 단일 호스트) | docker-compose |
| swarm   | 클러스 구축 및 관리 (주로 멀티 호스트)                       | docker swarm   |
| service | 스웜에서 클러스터 안의 서비스(컨테이너 하나 이상의 집합)을 관리 | docker service |
| stack   | 스웜에서 여러 개의 서비스를 합한 전체 애플리케이션을 관리    | docker stack   |



## docker swarm 실습 

>p.108-



### 0. docker swarm 설치

```powershell
1. swarm 버전 확인

PS C:\Users\HPE\docker\day03\swarm> docker search swarm
NAME                                   DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
swarm                                  Swarm: a Docker-native clustering system.       1032                [OK]      
swarmpit/swarmpit                      Lightweight Docker Swarm management UI          19                            
stefanprodan/swarmprom-prometheus      Prometheus Docker Swarm                         5                             
charypar/swarm-dashboard               A simple monitoring dashboard for Docker in …   5                                       [OK]
crazymax/swarm-cronjob                 Create jobs on a time-based schedule on Swarm   4                             
stefanprodan/swarmprom-node-exporter   Docker Swarm Prometheus Node Exporter           4                             
stefanprodan/swarmprom-grafana         Docker Swarm Prometheus Grafana                 4                             
swarmpit/agent                         Swarmpit docker agent                           3                             
stefanprodan/swarmprom-alertmanager    Docker Swarm Prometheus Alertmanager            3                             
jsalonen/swarmist                      Simple GUI for Docker Swarm Mode                2                                       [OK]
dockerswarm/swarm                      Swarm: a Docker-native clustering system        2                                       [OK]
kenits/swarmpit_agent                  My port of fancy docker swarm controller to …   2                            
nordluf/swarm-discovery                Service discovery designed for Docker Swarm …   2                                       [OK]
fangcha/swarm-elasticsearch            use elasticsearch in docker swarm mode.         2                                       [OK]
tpbowden/swarm-ingress-router          Route DNS names to Swarm services based on l…   2                            
swarmpit/install                       Swarmpit installer                              1                             
rayyanqcri/swarm-scheduler             A distributed scheduler for docker swarm mod…   1                                       [OK]
decentralize/swarm-tcp-proxy           TCP load balancer service for other swarm se…   1                                       [OK]
ethdevops/swarm                        Official Swarm Docker image used on https://…   1                                       [OK]
swarmpack/swarm-sync                   Gitops for Docker Swarm                         0                             
stefanprodan/swarm-logspout-logstash   Logspout adapter to send Docker Swarm logs t…   0                                       [OK]
anilskp/swarmdemo                      Swarmdemo app                                   0                             
imagenarium/swarmstorage                                                               0                             
ethdevops/swarm-smoke                                                                  0                             
codestation/swarm-updater              Automatically update Docker services wheneve…   0  
2. docker swam 설치

PS C:\Users\HPE\docker\day03\swarm> docker pull docker:19.03.5-dind
19.03.5-dind: Pulling from library/docker
이하 중략

```



### 1.  registry 와 Manager

```powershell
1. registry와 manager 란?

Registry는 도커 레지스트리 역할을 할 컨테이너로, manager 및 worker 컨터에너가 사용하는 컨테이너이다.

Manager는 스웜 클러스트 전체를 제어하는 역할을 한다. 
```

``` yaml
2. docker-compose.yaml 작성

version: "3"
services: 
  registry:
    container_name: registry
    image: registry:latest
    ports: 
      - 5000:5000
    volumes: 
      - "./registry-data:/var/lib/registry"

  manager:
    container_name: manager
    image: docker:19.03.5-dind
    privileged: true
    tty: true
    ports:
      - 8000:80
      - 9000:9000
    depends_on: 
      - registry
    expose: 
      - 3375
    command: "--insecure-registry registry:5000"
    volumes: 
      - "./stack:/stack"

  worker01:
    container_name: worker01
    image: docker:19.03.5-dind
    privileged: true
    tty: true
    depends_on: 
      - manager
      - registry
    expose: 
      - 7946
      - 7946/udp
      - 4789/udp
    command: "--insecure-registry registry:5000"

  worker02:
    container_name: worker02
    image: docker:19.03.5-dind
    privileged: true
    tty: true
    depends_on: 
      - manager
      - registry
    expose: 
      - 7946
      - 7946/udp
      - 4789/udp
    command: "--insecure-registry registry:5000"

  worker03:
    container_name: worker03
    image: docker:19.03.5-dind
    privileged: true
    tty: true
    depends_on: 
      - manager
      - registry
    expose: 
      - 7946
      - 7946/udp
      - 4789/udp
    command: "--insecure-registry registry:5000"
 
 ## 추후 단계에 작업할 내용이 미리 추가되어 있다.

```

```powershell
3. 클러스터 구성

PS C:\Users\HPE\docker\day03\swarm> docker-compose up
Creating network "swarm_default" with the default driver
Pulling registry (registry:latest)...
latest: Pulling from library/registry
c87736221ed0: Pull complete
1cc8e0bb44df: Pull complete
54d33bcb37f5: Pull complete
e8afc091c171: Pull complete
b4541f6d3db6: Pull complete
Digest: sha256:8004747f1e8cd820a148fb7499d71a76d45ff66bac6a29129bfdbfdc0154d146
Status: Downloaded newer image for registry:latest
Creating registry ... done
Creating manager  ... done
Creating worker03   ... done
Creating worker01   ... done
Creating worker02   ... done
Attaching to registry, manager, worker02, worker01, worker03

4. swarm 설정

PS C:\Users\HPE\docker\day03\swarm> docker swarm init
Swarm initialized: current node (fallbs2qlgdlwdmb8ce894kr3) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-3580auw48rtixo7rqsxxhr4cmvhnd9c3t6mydrq5fy169c7v4x-d1t4p6qa9sfvvltou6j0dhfqz 192.168.65.3:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.

## token은 현 단계에서만 사용되므로 바뀔 수 있다.

PS C:\Users\HPE\docker\day03\swarm> docker node ls
ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
fallbs2qlgdlwdmb8ce894kr3 *   docker-desktop      Ready               Active              Leader              19.03.5

5. docker swarm leave

PS C:\Users\HPE\docker\day03\swarm> docker swarm leave
Error response from daemon: You are attempting to leave the swarm on a node that is participating as a manager. Removing the last manager erases all current state of the swarm. Use `--force` to ignore this message.

## 해당 node 가 manager 이므로 '--force' 명령어를 추가해 주어야 한다.

PS C:\Users\HPE\docker\day03\swarm> docker swarm leave --force
Node left the swarm.

6. system ip address 할당

PS C:\Users\HPE\docker\day03\swarm> docker exec -it manager sh
/ # docker swarm init
Error response from daemon: could not find the system's IP address - specify one with --advertise-addr

	위와같은 오류가 발생한 경우 해결법 
	
	기존 swarm을 내린 후 다시 compose up 을 해 default 값이 올라오는지 확인한다
	
PS C:\Users\HPE\docker\day03\swarm> docker-compose up
Creating network "swarm_default" with the default driver
Creating registry ... done
Creating manager  ... done
Creating worker03 ... done
Creating worker01 ... done
Creating worker02 ... done
	
	다시 시도해 보면 정상적으로 값이 설정되는 것을 확인할 수 있다.
	
PS C:\Users\HPE\docker\day03\swarm> docker exec -it manager sh
/ # docker swarm init
Swarm initialized: current node (o4pvpu4hr421xqpmiih9mto2u) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-4vakdp36hpmzddu89akr7m5c2ysbq9nq30njjq8clu9thdt3l7-c9db5k1ln1911ip08i1xw6izg 172.25.0.3:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.

/ #

	이제 worker에 ip address를 부여 해주자.
	
PS C:\Users\HPE\docker\day03\swarm> docker exec -it worker01 sh
/ # docker swarm join --token SWMTKN-1-4vakdp36hpmzddu89akr7m5c2ysbq9nq30njjq8clu9thdt3l7-c9db
5k1ln1911ip08i1xw6izg 172.25.0.3:2377
This node joined a swarm as a worker.
/ # exit
PS C:\Users\HPE\docker\day03\swarm> docker exec -it worker02 sh
/ # docker swarm join --token SWMTKN-1-4vakdp36hpmzddu89akr7m5c2ysbq9nq30njjq8clu9thdt3l7-c9db
5k1ln1911ip08i1xw6izg 172.25.0.3:2377
This node joined a swarm as a worker.
/ # exit
PS C:\Users\HPE\docker\day03\swarm> docker exec -it worker03 sh
/ # docker swarm join --token SWMTKN-1-4vakdp36hpmzddu89akr7m5c2ysbq9nq30njjq8clu9thdt3l7-c9db
5k1ln1911ip08i1xw6izg 172.25.0.3:2377
This node joined a swarm as a worker.

	worker가 node에 정상적으로 참여했는지 manager에서 node를 확인해본다.
	
PS C:\Users\HPE\docker\day03\swarm> docker exec -it manager sh
/ # docker node ls
ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
m34drfabtq3pmfusy563l2e04     754512ab2873        Ready               Active                                  19.03.5
tnke4jr9sycjkbiqric0br045     4153656372a0        Ready               Active                                  19.03.5
163zgl2srpc9xg485nyxuvoe7 *   da09cb43a7e1        Ready               Active              Leader              19.03.5
kv5fuhotvtcs4sbckw39tql5g     f3f29b6d6533        Ready               Active                                  19.03.5
/ #
```



### 2. 도커 레지스트리에 이미지 등록하기

```powershell
1. host pc에 존재하는 image 파일 확인

PS C:\Users\HPE\docker\day03\swarm> docker images
REPOSITORY               TAG                 IMAGE ID            CREATED             SIZE
mysql_repl_setup         latest              1e26474483ce        3 hours ago         456MB
mongo_repl_setup         latest              59df426a4e65        4 hours ago         364MB
mysql                    5.7                 db39680b63ac        11 days ago         437MB
mysql                    latest              ed1ffcb5eff3        11 days ago         456MB
docker                   19.03.5-dind        a90db1182c99        13 days ago         237MB
busybox                  latest              6d5fcfe5ff17        13 days ago         1.22MB
node                     alpine              e1495e4ac50d        2 weeks ago         111MB
mongo                    latest              a0e2e64ac939        3 weeks ago         364MB
registry                 latest              f32a97de94e1        10 months ago      
25.8MB

	busybox를 이용해 실습을 진행 할 것이다.

2. localhost에 해당 이미지 올리기

PS C:\Users\HPE\docker\day03\swarm> docker push localhost:5000/busybox:latest
The push refers to repository [localhost:5000/busybox]
195be5f8be1d: Pushed
latest: digest: sha256:edafc0a0fb057813850d1ba44014914ca02d671ae247107ca70c94db686e7de6 size: 527

	http://localhost:5000/v2/_catalog 에 접속해 {"repositories":["busybox"]} 가 나타나는지 확인 한다
	
3. manager에 접속해 해당 이미지 다운로드

PS C:\Users\HPE\docker\day03\swarm> docker exec -it manager sh
/ # docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
/ # docker pull localhost:5000/busybox:latest
Error response from daemon: Get http://localhost:5000/v2/: dial tcp 127.0.0.1:5000: connect: connection refused

	해당 오류 해결 방법
	
/ # docker pull registry:5000/busybox:latest
latest: Pulling from busybox
bdbbaa22dec6: Pull complete
Digest: sha256:edafc0a0fb057813850d1ba44014914ca02d671ae247107ca70c94db686e7de6
Status: Downloaded newer image for registry:5000/busybox:latest
registry:5000/busybox:latest
/ # docker images
REPOSITORY              TAG                 IMAGE ID            CREATED             SIZE
registry:5000/busybox   latest              6d5fcfe5ff17        13 days ago         1.22MB
```

