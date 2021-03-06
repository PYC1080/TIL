# IPv4 

## 1. IPv4 의미

IPv4는 인터넷 프로토콜의 4번째 판이며, 전세계적으로 사용된 첫번째 인터넷 프로토콜이다 .2011년 2월 4일부터 모든 IPv4주소가 소진되어 현재는 IPv4 할당이 중지된 상황이다. 따라서 오늘날에는 IPv6가 대중화 되어있다.

IPv4는 패킷 교환 네트워크상에서 데이터를 교환하기 위한 프로토콜이다. 따라서 데이터가 정확하게 전달될 것을 보장하지 않으며 중복된 패킷을 전달하거나 패킷의 순서를 잘못 전달할 가능성을 포함하고 있다. 데이터의 정확하고 순차적인 전달은 IPv4보다 상위 프로토콜인 TCP(또한 UDP 일부에서)에서 보장하고 있다.

## 2. IPv4 주소체계

IPv4의 주소체계는 총 12자리로서 네 부분으로 나뉜다. 각 부분은 0~255까지 3자리의 수로 표현된다. IPv4 주소는 32비트로 구성되어 있다. (IPv4가 32비트로 구성되어 주소공간이 고갈되었기에  IPv6는 128비트 주소체계를 갖고있다.)

## 3. 구성단위

| Class | 구성                        | 범위                      | 예   |
| ----- | --------------------------- | ------------------------- | ---- |
| A     | **xxx**.xxx.xxx.xxx         | 1.0.0.1~126.255.255.254   |      |
| B     | **xxx**.**xxx**.xxx.xxx     | 128.0.0.1~191.255.255.254 |      |
| C     | **xxx**.**xxx**.**xxx**.xxx | 192.0.0.1~223.255.255.254 |      |
| D     |                             | 224.0.0.0~239.255.255.255 |      |
| E     |                             | 240.0.0.0~254.255.255.254 |      |

유니크한 주소체계가 부여되어야 통신이 가능하다.  클래스 구분은 A,B,C 클래스로 구분한다. 
1) A class는 최고위의 class로서 1~126(0과 127은 예약되어 있다)범위의 IP주소를 가진다. 두 번째와 세번째 그리고 마지막인 네 번째의 세 숫자는 A class가 자유롭게 네트워크 사용자에게 부여 가능한 Ip에  해당한다.

2) B class는 두 번째로 높은 단위의 class로서, Ip구성에서 첫 번째 단위의 세 숫자는 128-191 가운데 하나를 가지며, 두 번째 단위의 세 숫자는 B class가 접속할 수 있는 네트워크를 지시한다.

3) C class는 최하위 class로서, Ip 구성에서 첫 번째 단위의 세 숫자는 192-223 가운데 하나를 가지며, 두 번째와 세 번째의 세 숫자는 C class가 접속할 수 있는 네트워크를 지시한다. C class가 자유로이 부여할 수 있는 ip는 마지막 네 번째 단위의 254개 이다. 

## 4. 패킷구조

![IPv4-패킷구조](https://user-images.githubusercontent.com/55272324/71610143-e1857300-2bd1-11ea-8abe-a7d7cd3bcd24.PNG)

* 오프셋

* 옥텟 : 전산학에서 팔중수를 가리키는 말이다.
* IHL : IPv4 패킷 헤더의 두 번째 필드
* DSCP : IP헤더에 붙는 DiffServ 모델에 따른 서비스 품질 유형을 나타내는 표식을 의미한다.
* ECN
* 프래그먼트 오프셋 : 단편화 되기 전 데이터의 시작점으로부터의 차이이다. 전체 데이터그램에서 단편에 포함된 데이터의 시작 위치를 의미한다.
* 헤더 체크섬 : 헤더에 대한 오류검출
* IP 헤더 : IP패킷의 앞부분에서 주소등 각종 제어정보를 담고 있는 부분이다.  IPv4헤더사이즈는 옵션을 지정하지 않은 경우 최소 20바이트가 할당된다.
* TTL : Time to live  생존시간

## 5. 특수 용도 주소 

|    주소대역    |             용도              |
| :------------: | :---------------------------: |
|   0.0.0.0/8    |         자체 네트워크         |
|   10.0.0.0/8   |         사설 네트워크         |
|  127.0.0.0/8   |      자기자신(Loopback)       |
| 169.254.0.0/16 |     링크 로컬(link local)     |
| 172.16.0.0/12  |         사설 네트워크         |
|  192.0.2.0/24  |   예제 등 문서에서 사용한다   |
| 192.88.99.0/24 |    6to4 릴레이 애니캐스트     |
| 192.168.0.0/16 |         사설 네트워크         |
| 198.18.0.0/15  | 네트워크 장비 벤치마킹 테스트 |
|  224.0.0.0/4   |          멀티캐스트           |
|  240.0.0.0/4   |     미래 사용 용도로 예약     |

## 6. IP주소 및 도메인 검색

WHOIS 검색 서비스를 통해 IP 주소 및 도메인을 검색할 수 있다.