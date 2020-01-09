# 도커 / 쿠버네티스 3일차

>
>
>_______
>
>도커 / 쿠버네티스를 활용한 컨테이너 개발 실전 입문
>
>현장에서 바로 활용할 수 있는 컨테이너 개발 기법과 실전 기술



## 목표

> mongodb 3대를 띄워 아래 작업을 진행한다.

```powershell


0. Node01, node02, node03
	/etc/hosts 파일에 node01, node02, node03의 IP address 등록
		ex) 10.0.0.11 	node01	
			10.0.0.12 	node02	
			10.0.0.13 	node03

1.  mkdir 각 NODE의 디렉토리에 ./mongo/data 
2.  (NODE01) mongod --replSet myapp --dbpath ./mongo/data --port 40001 --bind_ip_all
    (NODE02) mongod --replSet myapp --dbpath ./mongo/data --port 40002 --bind_ip_all
    (NODE03) mongod --replSet myapp --dbpath ./mongo/data --port 40003 --bind_ip_all

3.  (NODE01)
	mongo --host 10.0.0.11 --port 40000
4.  rs.initiate()
5.  rs.add("10.0.0.12:40002")
    rs.add("10.0.0.13:40003", {arbiterOnly: true}) --> Primary 선정에만 관여, 복제는 하지 않음
6.  db.isMaster()
7.  rs.status()
8.  (NODE01)
	mongo 10.0.0.11:40001
        > use bookstore
        > db.books.insert({title: "Oliver Twist"})
        > show dbs
9.  mongo 10.0.0.12:40002
        > rs.slaveOk()
        > show dbs
        > db.books.find()
10. (Primary) > db.shutdownServer()
11. (Secondary) -> (Primary) 로 승격
    - db.books.insert() 사용 가능
    - 나머지 노드들은 지속적으로 master에게 heartbeat 전달
12. (기존 Master 다시 기동) -> Secondary로 작동 됨
```



### 과정1 : Mongodb 작동 확인

```powershell
1. mongodb 3대를 띄운다

PS C:\Users\HPE\docker\day02\mongo> docker run -d -p 27017:27017 --name mymongo yuchan0315/mymongdb
PS C:\Users\HPE\docker\day02\mongo> docker run -d -p 27017:27017 --name mymongo yuchan0315/mymongdb
PS C:\Users\HPE\docker\day02\mongo> docker run -d -p 27017:27017 --name mymongo yuchan0315/mymongdb

CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                      NAMES
16ce28585217        yuchan0315/mymongdb   "docker-entrypoint.s…"   47 minutes ago      Up 47 minutes       0.0.0.0:47017->27017/tcp   mymongo3
112c39f77869        yuchan0315/mymongdb   "docker-entrypoint.s…"   47 minutes ago      Up 47 minutes       0.0.0.0:37017->27017/tcp   mymongo2
8450e7da2da4        yuchan0315/mymongdb   "docker-entrypoint.s…"   About an hour ago   Up About an hour    0.0.0.0:27017->27017/tcp   mymongo

2. mongodb 3대의 ip를 확인한다
	
	ip를 확인하는 방법
	1)ip -a
	2)addr show
	3)hostname -i
	4)docker inspect 컨테이너이름 : 네트워크 정보확인
   
mymongo  : "172.17.0.2"
mymongo1 : "172.17.0.3"
mymongo2 : "172.17.0.4"

3. mongodb에 접속하여 mongodb간 접속이 되는지 확인해 본다.

PS C:\Users\HPE\docker\day02\mongo> docker exec -it mymongo bash
root@8450e7da2da4:/# ping "ip주소"

	ping테스트가 원활하지 않은경우
	
	1) ping package download

root@8450e7da2da4:/# apt-get install iputils-ping

	2) iputils-ping 설치가 되지 않은 경우 apt를 최신버전으로 업데이트 해줘야한다

root@8450e7da2da4:/# apt-get install apt
root@8450e7da2da4:/# apt-get update
	
	3) apt를 최신버전으로 업데이트 한 후 iputils-ping을 설치해준다.

root@8450e7da2da4:/# apt-get install iputils-ping

4. mongodb에서 ping test를 진행한다.

root@8450e7da2da4:/# ping "172.17.0.3"
PING 172.17.0.3 (172.17.0.3) 56(84) bytes of data.
64 bytes from 172.17.0.3: icmp_seq=1 ttl=64 time=0.115 ms
64 bytes from 172.17.0.3: icmp_seq=2 ttl=64 time=0.094 ms
이하 중략
```



## 과정 2 : docker-compose로 mongodb 띄우기

#### 1 :setup.sh 코드작업

```shell
1. mongo가 설치된 폴더에서 코드 작업을 진행한다

PS C:\Users\HPE\docker\day02\mongo> code .

2. vsc에서 해당 코드작업 실행

mongo mongodb://172.17.0.2:27017 replicaSet.js
```



#### 2 :replicaSet.js 코드작업

```js


2. vsc에서 해당 코드작업 실행

config ={
    _id: "myapp",
    members: [
        {_id:0, host: "172.17.0.2:27017"}, ## ip는 변동될 수 있으므로 확인해줘야 한다.
        {_id:1, host: "172.17.0.3:27017"},
        {_id:2, host: "172.17.0.4:27017"},
    ]
}

rs.initiate(config);
rs.conf();
```



####  3 : Dockerfile 수정

```dockerfile
FROM mongo
RUN mkdir /usr/src/configs 	#
WORKDIR /usr/src/configs	#
COPY replicaSet.js .		#
COPY setup.sh .				#

CMD ["./setup.sh"]
```



####  4

```powershell
0. 기존 image, container 삭제
	
	컨테이너를 중지시킨 후 지워준다.
    
PS C:\Users\HPE\docker\day02\mongo> docker stop mymongo mymongo2 mymongo3
mymongo
mymongo2
mymongo3
PS C:\Users\HPE\docker\day02\mongo> docker rm mymongo mymongo2 mymongo3
mymongo
mymongo2
mymongo3

	이미지도 지워준다.
	
PS C:\Users\HPE\docker\day02\mongo> docker rmi ec4f2a36fe48
Untagged: yuchan0315/mymongdb:latest
Deleted: sha256:ec4f2a36fe48c76245f0ee8d6e2bdc86b6f50f164bfda47585e6b647cc391177

1. build : image 생성

PS C:\Users\HPE\docker\day02\mongo> docker image build -t yuchan0315/mymongodb .
Sending build context to Docker daemon  4.096kB
Step 1/6 : FROM mongo
 ---> a0e2e64ac939
Step 2/6 : RUN mkdir /usr/src/configs
 ---> Running in 0b73e11a2b7c
Removing intermediate container 0b73e11a2b7c
 ---> ae1d47fd10e9
Step 3/6 : WORKDIR /usr/src/configs
 ---> Running in 81ab97bbe4ed
Removing intermediate container 81ab97bbe4ed
 ---> 89630774f93a
Step 4/6 : COPY replicaSet.js .
 ---> d0a5a62bf807
Step 5/6 : COPY setup.sh .
 ---> 6da6af3bcca7
Step 6/6 : CMD ["./setup.sh"]
 ---> Running in 2308b15909d7
Removing intermediate container 2308b15909d7
 ---> 476c76bd391f
Successfully built 476c76bd391f
Successfully tagged yuchan0315/mymongodb:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.

2. container 생성

PS C:\Users\HPE\docker\day02\mongo> docker run -p 27017:27017 yuchan0315/mymongodb
MongoDB shell version v4.2.2
connecting to: mongodb://172.17.0.2:27017/?compressors=disabled&gssapiServiceName=mongodb
2020-01-09T01:40:28.014+0000 E  QUERY    [js] Error: couldn't connect to server 172.17.0.2:27017, connection attempt failed: SocketException: Error connecting to 172.17.0.2:27017 :: caused by :: Connection refused :
connect@src/mongo/shell/mongo.js:341:17
@(connect):2:6
2020-01-09T01:40:28.016+0000 F  -        [main] exception: connect failed
2020-01-09T01:40:28.016+0000 E  -        [main] exiting with code 1

	오류가 발생했다. 오류의 원인을 다음과 같이 생각해 볼 수 있다.
	1)서버가 가동되지 않았다.
	2)ip가 할당되지 않았다.
	
	해결법
	
	1. vsc에서 yaml 코드작업 추가 : docker-compose.yml
	
version: "3"
services:
    ## 서버가 가동되어야 작동하므로 서버를 먼저 띄우는 작업을 한다.
    mongo1:
        image: "mongo"
        ports:
            - "27017:27017"
        voulumes:
            - $HOME/mongoRepl/mongo1:/data/db
        network:
            - mongo-networks
        command: mongod --replSet myapp
    mongo_setup:
    ## Build: .-> Dockerfil 이미지 비륻
        image: "mongo_repl_setup:latest"
    ## mongo1이 실행된 이후 mongo_setup이 실행되기 위해 추가   
        depends_on:
            - mongo1
        network:
            - mongo-networks

networks:
    mongo-networks:
        driver: bridge
        
        2. mongo_repl_setup:latest 이미지를 사용할 것이므로 기존 이미지와 컨테이너는 삭제해 준다
       
       	3. mongo_repl_setup:latest 이미지를 생성하기 위해 고정 ip를 가변 ip로 바꿔준다
       	
       	(1) replicaSet.js

config ={
    _id: "my app",
    members: [
        {_id:0, host: "mongo1:27017"},
        {_id:1, host: "mongo2:27017"},
        {_id:2, host: "mongo3:27017"},
    ]
}

rs.initiate(config);
rs.conf();
       	
       2. docker-compose.yml
        
version: "3"
services:
    ## 서버가 가동되어야 작동하므로 서버를 먼저 띄우는 작업을 한다.
    mongo1:
        image: "mongo"
        ports:
            - "27017:27017"
        volumes:
            - $HOME/mongoRepl/mongo1:/data/db
        networks:
            - mongo-networks
        command: mongod --replSet myapp --bind_ip_all
    mongo2:
        image: "mongo"
        ports:
            - "37017:27017"
        volumes:
            - $HOME/mongoRepl/mongo2:/data/db
        networks:
            - mongo-networks
        depends_on:
            - mongo1
        command: mongod --replSet myapp --bind_ip_all
    mongo3:
        image: "mongo"
        ports:
            - "47017:27017"
        volumes:
            - $HOME/mongoRepl/mongo3:/data/db
        depends_on:
            - mongo2
        networks:
            - mongo-networks
        command: mongod --replSet myapp --bind_ip_all
    mongo_setup:
    ## Build: .-> Dockerfil 이미지 비륻
        image: "mongo_repl_setup:latest"
    ## mongo1이 실행된 이후 mongo_setup이 실행되기 위해 추가   
        depends_on:
            - mongo3

        networks:
            - mongo-networks

networks:
    mongo-networks:
        driver: bridge

		3. Dockerfile 수정
		
FROM mongo
RUN mkdir /usr/src/configs
WORKDIR /usr/src/configs
COPY replicaSet.js .
COPY setup.sh .

CMD ["mongo","mongodb://mongo1:27017","./replicaSet.js"]
	
3. 확인

	1번 powershell
	
PS C:\Users\HPE\docker\day02\mongo> docker image build -t mongo_repl_setup:latest .
PS C:\Users\HPE\docker\day02\mongo> docker-compose up

	2번 powershell
	
PS C:\Users\HPE\docker\day02\mongo> docker exec -it 4d mongo mongodb://mongo1:27017
이하 중략
---

myapp:SECONDARY> rs.status()
{
        "set" : "myapp",
        "date" : ISODate("2020-01-09T04:24:48.358Z"),
        "myState" : 2,
        "term" : NumberLong(1),
        "syncingTo" : "mongo3:27017",
        "syncSourceHost" : "mongo3:27017",
        "syncSourceId" : 2,
        "heartbeatIntervalMillis" : NumberLong(2000),
        "majorityVoteCount" : 2,
        "writeMajorityCount" : 2,
        "optimes" : {
                "lastCommittedOpTime" : {
                        "ts" : Timestamp(1578543880, 1),
                        "t" : NumberLong(1)
                },
                "lastCommittedWallTime" : ISODate("2020-01-09T04:24:40.042Z"),
                "readConcernMajorityOpTime" : {
                        "ts" : Timestamp(1578543880, 1),
                        "t" : NumberLong(1)
                },
                "readConcernMajorityWallTime" : ISODate("2020-01-09T04:24:40.042Z"),
                "appliedOpTime" : {
                        "ts" : Timestamp(1578543880, 1),
                        "t" : NumberLong(1)
                },
                "durableOpTime" : {
                        "ts" : Timestamp(1578543880, 1),
                        "t" : NumberLong(1)
                },
                "lastAppliedWallTime" : ISODate("2020-01-09T04:24:40.042Z"),
                "lastDurableWallTime" : ISODate("2020-01-09T04:24:40.042Z")
        },
        "lastStableRecoveryTimestamp" : Timestamp(1578543860, 1),
        "lastStableCheckpointTimestamp" : Timestamp(1578543860, 1),
        "electionParticipantMetrics" : {
                "votedForCandidate" : true,
                "electionTerm" : NumberLong(1),
                "lastVoteDate" : ISODate("2020-01-09T04:20:19.166Z"),
                "electionCandidateMemberId" : 2,
                "voteReason" : "",
                "lastAppliedOpTimeAtElection" : {
                        "ts" : Timestamp(1578543608, 1),
                        "t" : NumberLong(-1)
                },
                "maxAppliedOpTimeInSet" : {
                        "ts" : Timestamp(1578543608, 1),
                        "t" : NumberLong(-1)
                },
                "priorityAtElection" : 1,
                "newTermStartDate" : ISODate("2020-01-09T04:20:20.030Z"),
                "newTermAppliedDate" : ISODate("2020-01-09T04:20:21.394Z")
        },
        "members" : [
                {
                        "_id" : 0,
                        "name" : "mongo1:27017",
                        "ip" : "172.22.0.2",
                        "health" : 1,
                        "state" : 2,
                        "stateStr" : "SECONDARY",
                        "uptime" : 288,
                        "optime" : {
                                "ts" : Timestamp(1578543880, 1),
                                "t" : NumberLong(1)
                        },
                        "optimeDate" : ISODate("2020-01-09T04:24:40Z"),
                        "syncingTo" : "mongo3:27017",
                        "syncSourceHost" : "mongo3:27017",
                        "syncSourceId" : 2,
                        "infoMessage" : "",
                        "configVersion" : 1,
                        "self" : true,
                        "lastHeartbeatMessage" : ""
                },
                {
                        "_id" : 1,
                        "name" : "mongo2:27017",
                        "ip" : "172.22.0.3",
                        "health" : 1,
                        "state" : 2,
                        "stateStr" : "SECONDARY",
                        "uptime" : 279,
                        "optime" : {
                                "ts" : Timestamp(1578543880, 1),
                                "t" : NumberLong(1)
                        },
                        "optimeDurable" : {
                                "ts" : Timestamp(1578543880, 1),
                                "t" : NumberLong(1)
                        },
                        "optimeDate" : ISODate("2020-01-09T04:24:40Z"),
                        "optimeDurableDate" : ISODate("2020-01-09T04:24:40Z"),
                        "lastHeartbeat" : ISODate("2020-01-09T04:24:47.523Z"),
                        "lastHeartbeatRecv" : ISODate("2020-01-09T04:24:47.110Z"),
                        "pingMs" : NumberLong(0),
                        "lastHeartbeatMessage" : "",
                        "syncingTo" : "mongo3:27017",
                        "syncSourceHost" : "mongo3:27017",
                        "syncSourceId" : 2,
                        "infoMessage" : "",
                        "configVersion" : 1
                },
                {
                        "_id" : 2,
                        "name" : "mongo3:27017",
                        "ip" : "172.22.0.4",
                        "health" : 1,
                        "state" : 1,
                        "stateStr" : "PRIMARY",
                        "uptime" : 279,
                        "optime" : {
                                "ts" : Timestamp(1578543880, 1),
                                "t" : NumberLong(1)
                        },
                        "optimeDurable" : {
                                "ts" : Timestamp(1578543880, 1),
                                "t" : NumberLong(1)
                        },
                        "optimeDate" : ISODate("2020-01-09T04:24:40Z"),
                        "optimeDurableDate" : ISODate("2020-01-09T04:24:40Z"),
                        "lastHeartbeat" : ISODate("2020-01-09T04:24:47.524Z"),
                        "lastHeartbeatRecv" : ISODate("2020-01-09T04:24:47.300Z"),
                        "pingMs" : NumberLong(0),
                        "lastHeartbeatMessage" : "",
                        "syncingTo" : "",
                        "syncSourceHost" : "",
                        "syncSourceId" : -1,
                        "infoMessage" : "",
                        "electionTime" : Timestamp(1578543619, 1),
                        "electionDate" : ISODate("2020-01-09T04:20:19Z"),
                        "configVersion" : 1
                }
        ],
        "ok" : 1,
        "$clusterTime" : {
                "clusterTime" : Timestamp(1578543880, 1),
                "signature" : {
                        "hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
                        "keyId" : NumberLong(0)
                }
        },
        "operationTime" : Timestamp(1578543880, 1)
}
myapp:SECONDARY>
```





## 결과

#### 0 : primary, secondary db 확인

``` powershell
1. 어느 하나의 mongodb 접속 
PS C:\Users\HPE\docker\day02\mongo> docker exec -it 4d mongo mongodb://mongo1:27017
myapp:SECONDARY> rs.status()
{
        "set" : "myapp",
        "date" : ISODate("2020-01-09T04:24:48.358Z"),
        "myState" : 2,
        "term" : NumberLong(1),
        "syncingTo" : "mongo3:27017",
        "syncSourceHost" : "mongo3:27017",
        "syncSourceId" : 2,
        "heartbeatIntervalMillis" : NumberLong(2000),
        "majorityVoteCount" : 2,
        "writeMajorityCount" : 2,
        "optimes" : {
                "lastCommittedOpTime" : {
                        "ts" : Timestamp(1578543880, 1),
                        "t" : NumberLong(1)
                },
                "lastCommittedWallTime" : ISODate("2020-01-09T04:24:40.042Z"),
                "readConcernMajorityOpTime" : {
                        "ts" : Timestamp(1578543880, 1),
                        "t" : NumberLong(1)
                },
                "readConcernMajorityWallTime" : ISODate("2020-01-09T04:24:40.042Z"),
                "appliedOpTime" : {
                        "ts" : Timestamp(1578543880, 1),
                        "t" : NumberLong(1)
                },
                "durableOpTime" : {
                        "ts" : Timestamp(1578543880, 1),
                        "t" : NumberLong(1)
                },
                "lastAppliedWallTime" : ISODate("2020-01-09T04:24:40.042Z"),
                "lastDurableWallTime" : ISODate("2020-01-09T04:24:40.042Z")
        },
        "lastStableRecoveryTimestamp" : Timestamp(1578543860, 1),
        "lastStableCheckpointTimestamp" : Timestamp(1578543860, 1),
        "electionParticipantMetrics" : {
                "votedForCandidate" : true,
                "electionTerm" : NumberLong(1),
                "lastVoteDate" : ISODate("2020-01-09T04:20:19.166Z"),
                "electionCandidateMemberId" : 2,
                "voteReason" : "",
                "lastAppliedOpTimeAtElection" : {
                        "ts" : Timestamp(1578543608, 1),
                        "t" : NumberLong(-1)
                },
                "maxAppliedOpTimeInSet" : {
                        "ts" : Timestamp(1578543608, 1),
                        "t" : NumberLong(-1)
                },
                "priorityAtElection" : 1,
                "newTermStartDate" : ISODate("2020-01-09T04:20:20.030Z"),
                "newTermAppliedDate" : ISODate("2020-01-09T04:20:21.394Z")
        },
        "members" : [
                {
                        "_id" : 0,
                        "name" : "mongo1:27017",
                        "ip" : "172.22.0.2",
                        "health" : 1,
                        "state" : 2,
                        "stateStr" : "SECONDARY",
                        "uptime" : 288,
                        "optime" : {
                                "ts" : Timestamp(1578543880, 1),
                                "t" : NumberLong(1)
                        },
                        "optimeDate" : ISODate("2020-01-09T04:24:40Z"),
                        "syncingTo" : "mongo3:27017",
                        "syncSourceHost" : "mongo3:27017",
                        "syncSourceId" : 2,
                        "infoMessage" : "",
                        "configVersion" : 1,
                        "self" : true,
                        "lastHeartbeatMessage" : ""
                },
                {
                        "_id" : 1,
                        "name" : "mongo2:27017",
                        "ip" : "172.22.0.3",
                        "health" : 1,
                        "state" : 2,
                        "stateStr" : "SECONDARY",
                        "uptime" : 279,
                        "optime" : {
                                "ts" : Timestamp(1578543880, 1),
                                "t" : NumberLong(1)
                        },
                        "optimeDurable" : {
                                "ts" : Timestamp(1578543880, 1),
                                "t" : NumberLong(1)
                        },
                        "optimeDate" : ISODate("2020-01-09T04:24:40Z"),
                        "optimeDurableDate" : ISODate("2020-01-09T04:24:40Z"),
                        "lastHeartbeat" : ISODate("2020-01-09T04:24:47.523Z"),
                        "lastHeartbeatRecv" : ISODate("2020-01-09T04:24:47.110Z"),
                        "pingMs" : NumberLong(0),
                        "lastHeartbeatMessage" : "",
                        "syncingTo" : "mongo3:27017",
                        "syncSourceHost" : "mongo3:27017",
                        "syncSourceId" : 2,
                        "infoMessage" : "",
                        "configVersion" : 1
                },
                {
                        "_id" : 2,
                        "name" : "mongo3:27017",
                        "ip" : "172.22.0.4",
                        "health" : 1,
                        "state" : 1,
                        "stateStr" : "PRIMARY",
                        "uptime" : 279,
                        "optime" : {
                                "ts" : Timestamp(1578543880, 1),
                                "t" : NumberLong(1)
                        },
                        "optimeDurable" : {
                                "ts" : Timestamp(1578543880, 1),
                                "t" : NumberLong(1)
                        },
                        "optimeDate" : ISODate("2020-01-09T04:24:40Z"),
                        "optimeDurableDate" : ISODate("2020-01-09T04:24:40Z"),
                        "lastHeartbeat" : ISODate("2020-01-09T04:24:47.524Z"),
                        "lastHeartbeatRecv" : ISODate("2020-01-09T04:24:47.300Z"),
                        "pingMs" : NumberLong(0),
                        "lastHeartbeatMessage" : "",
                        "syncingTo" : "",
                        "syncSourceHost" : "",
                        "syncSourceId" : -1,
                        "infoMessage" : "",
                        "electionTime" : Timestamp(1578543619, 1),
                        "electionDate" : ISODate("2020-01-09T04:20:19Z"),
                        "configVersion" : 1
                }
        ],
        "ok" : 1,
        "$clusterTime" : {
                "clusterTime" : Timestamp(1578543880, 1),
                "signature" : {
                        "hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
                        "keyId" : NumberLong(0)
                }
        },
        "operationTime" : Timestamp(1578543880, 1)
}

## mongodb 확인
replicaSet.js에서 mongo작업의 순서를 정해주지 않았으므로 어떤 컨테이너가 먼저 설치되어 primary로 설정되었는지 모르는 상황이다. 따라서 위와 같은 작업을 해 어떤 db가 primary db 인지 확인해주자.
mongo1 : secondary
mongo2 : secondary
mongo3 : primary

```



#### 1 : primary, secondary database 입력 후 확인

```powershell
1. primary db에서 예제 database, data 생성

myapp:PRIMARY> use bookstore;
switched to db bookstore
myapp:PRIMARY> db.books.save({"title": "docker compose files"});
WriteResult({ "nInserted" : 1 })

2. secondary db에서 예제 database, data 연동 확인

myapp:SECONDARY> use bookstore;
switched to db bookstore
myapp:SECONDARY> db.books.find();
{ "_id" : ObjectId("5e16aca969b35379b5f7fbe5"), "title" : "docker compose files" }
```



#### 2 : primary, secondary 변경 및 확인

```powershell
1. primary db 서버 다운

myapp:PRIMARY> db.shutdownServer()
2020-01-09T04:43:44.413+0000 I  NETWORK  [js] DBClientConnection failed to receive message from 127.0.0.1:27017 - HostUnreachable: Connection closed by peer

PS C:\Users\HPE\docker\day02\mongo> docker ps -a
CONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS                      PORTS                      NAMES
85b5b967807a        mongo_repl_setup:latest   "docker-entrypoint.s…"   24 minutes ago      Exited (0) 24 minutes ago                              mongo_mongo_setup_1
bf794ef81741        mongo                     "docker-entrypoint.s…"   24 minutes ago      Exited (0) 35 seconds ago                              mongo_mongo3_1
6c451ecc4933        mongo                     "docker-entrypoint.s…"   24 minutes ago      Up 24 minutes               0.0.0.0:37017->27017/tcp   mongo_mongo2_1
4d17472d2f0d        mongo                     "docker-entrypoint.s…"   24 minutes ago      Up 24 minutes               0.0.0.0:27017->27017/tcp   mongo_mongo1_1

## primary 서버를 다운시키는 경우 자동적으로 컨테이너도 종료된다.

2. secondary -> primary 확인

yapp:PRIMARY> rs.status()
{
        "set" : "myapp",
        "date" : ISODate("2020-01-09T05:18:20.942Z"),
        "myState" : 1,
        "term" : NumberLong(2),
        "syncingTo" : "",
        "syncSourceHost" : "",
        "syncSourceId" : -1,
        "heartbeatIntervalMillis" : NumberLong(2000),
        "majorityVoteCount" : 2,
        "writeMajorityCount" : 2,
        "optimes" : {
                "lastCommittedOpTime" : {
                        "ts" : Timestamp(1578547095, 1),
                        "t" : NumberLong(2)
                },
                "lastCommittedWallTime" : ISODate("2020-01-09T05:18:15.949Z"),
                "readConcernMajorityOpTime" : {
                        "ts" : Timestamp(1578547095, 1),
                        "t" : NumberLong(2)
                },
                "readConcernMajorityWallTime" : ISODate("2020-01-09T05:18:15.949Z"),
                "appliedOpTime" : {
                        "ts" : Timestamp(1578547095, 1),
                        "t" : NumberLong(2)
                },
                "durableOpTime" : {
                        "ts" : Timestamp(1578547095, 1),
                        "t" : NumberLong(2)
                },
                "lastAppliedWallTime" : ISODate("2020-01-09T05:18:15.949Z"),
                "lastDurableWallTime" : ISODate("2020-01-09T05:18:15.949Z")
        },
        "lastStableRecoveryTimestamp" : Timestamp(1578547035, 1),
        "lastStableCheckpointTimestamp" : Timestamp(1578547035, 1),
        "electionCandidateMetrics" : {
                "lastElectionReason" : "stepUpRequestSkipDryRun",
                "lastElectionDate" : ISODate("2020-01-09T04:43:43.360Z"),
                "electionTerm" : NumberLong(2),
                "lastCommittedOpTimeAtElection" : {
                        "ts" : Timestamp(1578545020, 1),
                        "t" : NumberLong(1)
                },
                "lastSeenOpTimeAtElection" : {
                        "ts" : Timestamp(1578545020, 1),
                        "t" : NumberLong(1)
                },
                "numVotesNeeded" : 2,
                "priorityAtElection" : 1,
                "electionTimeoutMillis" : NumberLong(10000),
                "priorPrimaryMemberId" : 2,
                "numCatchUpOps" : NumberLong(0),
                "newTermStartDate" : ISODate("2020-01-09T04:43:45.842Z"),
                "wMajorityWriteAvailabilityDate" : ISODate("2020-01-09T04:43:55.834Z")
        },
        "electionParticipantMetrics" : {
                "votedForCandidate" : true,
                "electionTerm" : NumberLong(1),
                "lastVoteDate" : ISODate("2020-01-09T04:20:19.166Z"),
                "electionCandidateMemberId" : 2,
                "voteReason" : "",
                "lastAppliedOpTimeAtElection" : {
                        "ts" : Timestamp(1578543608, 1),
                        "t" : NumberLong(-1)
                },
                "maxAppliedOpTimeInSet" : {
                        "ts" : Timestamp(1578543608, 1),
                        "t" : NumberLong(-1)
                },
                "priorityAtElection" : 1
        },
        "members" : [
                {
                        "_id" : 0,
                        "name" : "mongo1:27017",
                        "ip" : "172.22.0.2",
                        "health" : 1,
                        "state" : 1,
                        "stateStr" : "PRIMARY",
                        "uptime" : 3500,
                        "optime" : {
                                "ts" : Timestamp(1578547095, 1),
                                "t" : NumberLong(2)
                        },
                        "optimeDate" : ISODate("2020-01-09T05:18:15Z"),
                        "syncingTo" : "",
                        "syncSourceHost" : "",
                        "syncSourceId" : -1,
                        "infoMessage" : "",
                        "electionTime" : Timestamp(1578545023, 1),
                        "electionDate" : ISODate("2020-01-09T04:43:43Z"),
                        "configVersion" : 1,
                        "self" : true,
                        "lastHeartbeatMessage" : ""
                },
                {
                        "_id" : 1,
                        "name" : "mongo2:27017",
                        "ip" : "172.22.0.3",
                        "health" : 1,
                        "state" : 2,
                        "stateStr" : "SECONDARY",
                        "uptime" : 3492,
                        "optime" : {
                                "ts" : Timestamp(1578547095, 1),
                                "t" : NumberLong(2)
                        },
                        "optimeDurable" : {
                                "ts" : Timestamp(1578547095, 1),
                                "t" : NumberLong(2)
                        },
                        "optimeDate" : ISODate("2020-01-09T05:18:15Z"),
                        "optimeDurableDate" : ISODate("2020-01-09T05:18:15Z"),
                        "lastHeartbeat" : ISODate("2020-01-09T05:18:20.452Z"),
                        "lastHeartbeatRecv" : ISODate("2020-01-09T05:18:20.397Z"),
                        "pingMs" : NumberLong(0),
                        "lastHeartbeatMessage" : "",
                        "syncingTo" : "mongo1:27017",
                        "syncSourceHost" : "mongo1:27017",
                        "syncSourceId" : 0,
                        "infoMessage" : "",
                        "configVersion" : 1
                },
                {
                        "_id" : 2,
                        "name" : "mongo3:27017",
                        "ip" : "172.22.0.4",
                        "health" : 1,
                        "state" : 2,
                        "stateStr" : "SECONDARY",
                        "uptime" : 2030,
                        "optime" : {
                                "ts" : Timestamp(1578547095, 1),
                                "t" : NumberLong(2)
                        },
                        "optimeDurable" : {
                                "ts" : Timestamp(1578547095, 1),
                                "t" : NumberLong(2)
                        },
                        "optimeDate" : ISODate("2020-01-09T05:18:15Z"),
                        "optimeDurableDate" : ISODate("2020-01-09T05:18:15Z"),
                        "lastHeartbeat" : ISODate("2020-01-09T05:18:19.089Z"),
                        "lastHeartbeatRecv" : ISODate("2020-01-09T05:18:20.449Z"),
                        "pingMs" : NumberLong(0),
                        "lastHeartbeatMessage" : "",
                        "syncingTo" : "mongo1:27017",
                        "syncSourceHost" : "mongo1:27017",
                        "syncSourceId" : 0,
                        "infoMessage" : "",
                        "configVersion" : 1
                }
        ],
        "ok" : 1,
        "$clusterTime" : {
                "clusterTime" : Timestamp(1578547095, 1),
                "signature" : {
                        "hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
                        "keyId" : NumberLong(0)
                }
        },
        "operationTime" : Timestamp(1578547095, 1)
}
myapp:PRIMARY>

mongo1 : primary
mongo2 : secondary
mongo3 : secondary
```

