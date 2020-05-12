# kafka - [Quickstart](https://kafka.apache.org/quickstart#quickstart_download)

## 0. settings

### 1) Error

```
1. 입력 줄이 너무 깁니다. 명령 구문이 올바르지 않습니다.

폴더 경로가 너무 길어서 발생하는 문제이다. kafka 폴더를 c드라이브 바로 밑으로 옮겨서 실행하면 된다.

2. [time] ERROR Shutdown broker because all log dirs in kafka_pathlogs have failed (kafka.log.LogManager)

kafka_path에 있는 kafka-logs 폴더와 zookeper 폴더를 제거하면된다. 서버 재실행시 해당 폴더가 재생성되므로 걱정말고 삭제하자
```



## 1. Download the code

### 1) [Download kafka](https://www.apache.org/dyn/closer.cgi?path=/kafka/2.5.0/kafka_2.12-2.5.0.tgz)

### 2) un-tar

```powershell
1. tar -xzf kafka_2.12-2.5.0.tgz
2. cd kafka_2.12-2.5.0
```

## 2. Start the server

```
1. Zookeeper 실행 

C:\test\kafka_2.12-2.5.0>.\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties

2. Kafka 실행

C:\test\kafka_2.12-2.5.0> .\bin\windows\kafka-server-start.bat .\config\server.properties
```

## 3.  Topic

### 1) topic?

```

```

### 2) topic 관련 명령어

* topic 관련 옵션 보기

```
.\bin\windows\kafka-topics.bat --help
```

* topic 생성하기

```
C:\test\kafka_2.12-2.5.0> .\bin\windows\kafka-topics.bat --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test

Created topic test.

1. --create : 새로운 topic을 생성할 때 사용하는 옵션

2. --bootstrap-server : 연결할 kafka 서버(host:port), 해당 옵션을 추가하면 직접 Zookeeper에 연결하지 않아도 된다

3. --replication-factor : partition의 복제 수, 해당 옵션을 사용하지 않으면 server.properties의 기본 값을 사용한다,

4. --partitions : Topic 이 생성되거나 변경될 때의 partition의 숫자. 해당 옵션을 사용하지 않으면 server.proeprties의 기본 값을 사용한다

5. --topic : create,alter,describe,delete 옵션에 사용할 topic 명

```

* topic 목록 확인

```
.\bin\windows\kafka-topics.bat --list --bootstrap-server localhost:9092
```

* topic 상세 정보 확인

```
.\bin\windows\kafka-topics.bat --describe --topic test --bootstrap-server localhost:9092
```

* topic 삭제 : topic을 삭제하기 위해서는 server.properties 파일에서 delete.topic.enable=true 설정을 추가해줘야 하며 서버 재시작이 필요하다

```
 .\bin\windows\kafka-topics.bat --delete --topic test --bootstrap-server localhost:9092
```

## 4. Producer

### 1) Producer

### 2) Producer 명령어

* producer 관련 옵션 보기

```
.\bin\windows\kafka-console-producer.bat --help
```

* message produce

```

```

## 5. Consumer

### 1) Consumer

### 2) Consumer 명령어

* Consumer 관련 옵션 보기

```
.\bin\windows\kafka-console-consumer.bat --help
```

* 메시지 소비

```
.\bin\windows\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic test --from-beginning
```

