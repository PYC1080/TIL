# Kafka - 기본개념

## 1. Kafka architecture

![kafka architecture](https://user-images.githubusercontent.com/55272324/81563629-78a8d580-93d1-11ea-88cc-5d0607debad1.png)

```
1. ZooKeeper
	1) 클러스터의 최신 설정 정보를 관리하며 동기화 및 리더 채택 등 클러스터의 서버들이 공유하는 데이터를 관리하기 위해 사용된다
	2) Kafka 구동시 클러스터를 관리하는 zookeeper가 반드시 필요하다

2. Broker
	1) kafka server에 해당한다
	2) 하나의 클러스터 내에서 여러 대의 서버를 띄울 수 있다
	
3. Topic
	1) 메시지가 생산되고 소비되는 주체이다
	2) 주제에 따라 여러 topic을 생성하면 된다

4. partition
	1) Topic 내에서 메시지가 분산되어 저장되는 단위이다

5. Log
	1) partition의 한 칸에 해당한다
	2) Key, value, timestamp로 구성된다

6. Offset
	1) partition의 각 메시지를 식별할 수 있는 유니크한 값이다.
```

## 2. Producer와 Consumer Group

> [consumer group 참고 자료 1](https://www.popit.kr/kafka-consumer-group/)

![consumer와 producer](https://user-images.githubusercontent.com/55272324/81564288-7abf6400-93d2-11ea-81e1-ef1bd272511b.png)

```
1. Producer
	1) producer는 정해진 topic으로 메시지를 기록한다
	2) partition이 여러 개가 있을 경우, 기록될 partition의 선택은 기본적으로 Round-Robin 방식을 따른다 : partition이 여러 개 있으면 병렬 처리라는 이점이 있지만 partition 개수에 주의해야 한다
	3) 각 partition 내에서는 가장 마지막 offset 뒤에 신규 메시지가 저장되므로, partition 내에서 순서가 보장되며 기록된다 : 그러나, Consumer의 동작 방식 때문에 실제 메시지가 사용되는 순서는 보장되지 않는다
	
2. consumer group
	1) consumer group은 하나의 topic을 담당한다 : topic은 여러 개의 consumer group이 접근할 수 있지만 하나의 그룹은 하나의 주제에만 접근할 수 있다
	2) 존재 이유
		(1) partiton에 접근하는 consumer 관리
		(2) offset을 공유하여 고가용성 확보
```

## 3. Consumer Desion

```
1. RabbitMq : Message Broker가 consumer에게 메시지를 Push하는 방식을 사용한다. 
	1) Broker는 consumer의 처리여부에 관계없이 push하므로 메시지 소비 속도보다 생산 속도가 빠를 경우 consumer에 부하를 주게된다
	2) DRAM을 사용하므로 buffer를 사용하지만 DRAM을 다 사용하면 disk에 저장한다. 따라서 batch 같이 큰 작업에서는 disk로 메시지를 읽어올 경우 지연이 발생한다
	
2. Kafka : Consumer가 Broker로부터 메시지를 pull하는 방식
	1) Consumer가 처리할 수 있을 때 메시지를 가져오므로 자원을 효율적으로 사용한다
	2) kafka는 애초에 메시지를 disk에 저장하고 이미 처리한 과거의 offset으로 자유롭게 움직일 수 있으므로 batch 작업에서 자원의 낭비라던지 지연이 발생하지 않는다.
	3) 단, 데이터가 없음에도 정기적으로 polling하게 되므로 자원을 낭비하는 문제가 발생한다. 이러한 단점을 보완하기 위해 실제 데이터가 도착할 때까지 long poll 대기를 할 수 있는 parameter를 지원한다
```

## 4. Replication

![replication](https://user-images.githubusercontent.com/55272324/81564291-7bf09100-93d2-11ea-8027-f295b00a7396.png)

```
1. Replication이란 zookeepr가 leader가 되는 partition을 정하고, partition을 각 broker마다 복제하는 것이다. 이때 leader를 복제하는 partition을 follower라한다

2. ISR, In-Sync Replica : 혹시 leader가 죽었을 경우 follower중 하나가 leader가 되어야 하기 때문에 follwer는 leader와 싱크를 맞춰야한다. 즉, 고가용성을 높이기 위한 수단
```

