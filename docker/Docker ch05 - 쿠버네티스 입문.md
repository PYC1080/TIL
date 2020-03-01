# Docker ch05 - 쿠버네티스 입문

## 1. 쿠버네티스란 무엇인가

* 쿠버네티스(kubernetes) : 컨테이너 운영을 자동화하기 위한 컨테이너 오케스트레이션 도구

## 2. 로컬 PC에서 쿠버네티스 실행

* Kubectl 설치 :  다운로드 후 파일 경로를 PATH에 추가

```
https://storage.googleapis.com/kubernetes-release/release/v1.17.0/bin/windows/amd64/kubectl.exe
```

* 대시보드 설치

```powershell
1. PS C:\...> kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.8.3/src/deploy/recommended/kubernetes-dashboard.yaml

2. PS C:\...> kubectl get pods --namespace=kube-system -l k8s-app=kubernetes-dashboard 

3.PS C:\...> kubectl proxy --port=8001
```

* 대시보드 확인

```
http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/
```

## 3. 쿠버네티스의 주요 개념

* 주요 개념

```
1. 노드 : 컨테이너가 배치되는 서버
2. 네임스페이스 : 쿠버네티스 클러스터 안의 가상 클러스터
3. 파드 : 컨테이너의 집합 중 가장 작은 단위. 컨테이너의 실행 방법을 정의
4. 레플리카세트 : 같은 스펙을 갖는 파드를 여러 개 생성하고 관리하는 역할을 한다
5. 디플로이먼트 : 레플리카 세트의 리비젼을 관리한다
6. 서비스 : 파드의 집합에 접근하기 위한 경로를 정의
7. 인그레스 : 서비스를 쿠버네티스 클러스터 외부로 노출시킴
8. 컨피그맵 : 설정 정보를 정의하고 파드에 전달
9. 퍼시스턴트볼륨 : 파드가 사용할 스토리지의 크기 및 종류를 정의
10. 퍼시스턴스볼륨클레임 : 퍼시스턴트 볼륨을 동적으로 확보
11. 스토리지클래스 : 퍼시스턴트 볼륨이 확보하는 스토리지의 종류를 정의
12. 스테이트풀세트 : 같은 스펙으로 묻 동일 한 파드를 여러 개 생성하고 관리
13. 잡 : 상주 실행을 목적으로 하지 않는 파드를 여러 개 생성하고 정장적인 종료를 보장
14. 크론잡 : 크론 문법으로 스케줄링되는 잡
15. 시크릿 : 인증 정보 가은 기밀데이터를 정의한다.
16. 롤 : 네임스페이스 안에서 조작 가능한 쿠버네티스 리소스의 규칙을 정의한다
17. 롤바인딩 : 쿠버네티스 리소스 사용자와 롤을 연결 짓는다
18. 클러스터롤 : 클러스터 전체적으로 조작 가능한 쿠버네티스 리소스의 규칙을 정의한다
19. 클러스터롤바인딩 : 쿠버네티스 리소스 사용자와 클러스터롤을 연결 짓는다
20. 서비스 계정 : 파드가 쿠버네티스 리소스를 조작할 때 사용하는 계정
```



## 4. 쿠버네티스 클러스터와 노드

* 쿠버네티스 클러스터 : 쿠버네티스의 여러 리소스를 관리하기 위한 집합체
* 현재 클러스터에 소속된 노드의 목록을 확인하는 명령어

```powershell
PS C:\...> kubectl get nodes
```

* 마스터를 구성하는 관리 컴포넌트

```
1. kube-apiserver : 쿠버네티스 API를 노출하는 컴포넌트 kubectl로부터 리소스를 조작하라는 지시를 받는다
2. etcd : 고가용성을 갖춘 분산 키-값 스토어, 쿠버네티스 클러스터의 백킹 스토어로 쓰인다
3. kube-scheduler : 노드를 모니터링하고 컨테이너를 배치할 적절한 노드를 선택한다
4. kube-controller-manager : 리소스를 제어하는 컨트롤러를 실행한다
```

## 5. 네임스페이스

* 네임스페이스 : 클러스터 안의 가상 클러스터를 네임스페이스라고 한다
* 현재 클러스터 안에 존재하는 네임스페이스 목록을 확인 하는 명령어

```powershell
PS C:\...> kubectl get namespace
```

## 6. 파드

* 파드 : 컨테이너가 모인 집합체의 단위로 적어도 하나 이상의 컨테이너로 이루어져 있다. 한 파드 안의 컨테이너는 모두 같은 노두에 배치되어야 하므로 파드 하나가 여러 노드에 걸쳐 배치될 수 없다.

### 1) 파드 생성 및 배포하기

* 매니페스트 파일 : 쿠버네티스의 여러 가지 리소스를 정의하는 파일
* 로컬 쿠버네티스 클러스터에 파드 배포

```powershell
PS C:\...> kubectl apply -f manifest_file_name.yaml
```

### 2) 파드 다루기

* 파드 상태 확인

```powershell
PS C:\...> kubectl get pod
```

* 파드 안의 컨테이너 안에 접근

```powershell
PS C:\...> kubectl exec -it metadata_name sh -c container_name
```

* 파드 안에 잇는 컨테이너의 표준 출력을 화면에 출력

```powershell
PS C:\...> kubectl logs -f metadata_name -c container_name
```

* 명령어를 통한 파드 삭제

```powershell
PS C:\...> kubectl delete pod metadata_name
```

* 매니페스트 파일로 파드 삭제, 단 이방법을 사용하면 매니페스트에 작성된 리소스 전체가 삭제된다

```powershell
PS C:\...> kubectl delete -f manaifest_file_name.yaml
```

* 파드와 파드 안에 든 컨테이너가 접근할 수 있는 이유

```
파드에는 각가 고유의 가상 ip주소가 할당된다. 파드에 할당된 가상 ip주소는 해당 파드에 속하는 모든 컨테이너가 공유한다. 따라서 같은 파드 안의 모든 컨테이너는 가상 ip주소가 같기 때문에 같은 파드 안에서는 컨테이너 간의 통신이 가능해진다.
```

## 7. 레플리카 세트

* 레플리카 세트 : 매니페스트 파일로는 파드를 하나밖에 생성할 수 없다. 따라서 어느 정도 규모가 되는 애플리케이션을 구축하기 위해 레플리카 세트를 사용한다. 레플리카 세트는 똑같은 정의를 갖는 파드를 여러 개 생성하고 관리하기 위한 리소스이다.
* 레플리카세트 배포

```powershell
PS C:\...> kubectl apply -f replicaset_file_name.yaml
```

* 레플리카세트 삭제

```powershell
PS C:\...> kubectl delete -f replicaset_file_name.yaml
```

## 8. 디플로이먼트

* 디플로이먼트 : 레플리카세트보다 상위에 해당하는 리소스
* 디플로이먼트 배포

```powershell
PS C:\...> kubectl apply -f deployment_file_name.yaml --record
```

`--record` :  해당 파일이 어떤 kubectl 명령을 실행했는지 기록을 남기는 옵션

* 디플로이먼트 리비젼 확인

```powershell
PS C:\...> kubectl rollout history deployment container_name
```

### 1) 레플리카세트의 생애주기

```
1. 디플로이먼트를 수정하면 레플리카세트가 새로 생성되고 기존 레플리카세트와 교체된다.
2. 파드 개수만 수정하면 레플리카세트가 새로 생성되지 않는다
3. 컨테이너 정의가 변경된 경우 새로운 리비전이 생성된다
```

### 2) 롤백 실행하기

* 바로 직전 리비전으로 롤백

```powershell
PS C:\...> kubectl rollout undo deployment deployment_app_name
```

* 디플로이먼트 삭제 : 디플로이먼트 및 관련 레플리카세트와 파드가 함께 삭제된다.

```powershell
PS C:\...> kubectl delete -f deployment_file_name.yaml
```

## 9. 서비스

* 서비스 : 쿠버네티스 클러스터 안에서 파드의 집합에 대한 경로나 서비스 디스커버리를 제공하는 리소스. 서비스 대상이 되는 파드는 서비스에서 정의하는 레이블 셀렉터로 정해진다
* 서비스 배포

```powershell
PS C:\...> kubectl apply -f service_file_name.yaml
```

* 서비스의 네임 레졸루션 : 쿠버네티스 클러스터의 DNS는 서비스를 `서비스명.네임스페이스명.scv.local`로 연결해준다

### 1) ClusterIP 서비스

* ClusterIP service : 쿠버네티스 클러스터 내부 IP주소에 서비스를 공개할 수 있다. 단 외부로부터는 접근할 수 없다.

### 2) NodePort 서비스

* NodePort service : ClusterIP 서비스와 다르게 각 노드에서 서비스 포트로 접속하기 위한 글로벌 포트를 개방해 서비스 클러스터 외부에서 접근할 수 있게 해준다.( L4 까지만 가능)

### 3) LoadBalancer 서비스

* LoadBalancer service : 로컬 쿠버네티스 화경에서는 사용할 수 없는 서비스이다. 해당 서비스는 각 클라우드 플랫폼에서 제공하는 로드 밸런서와 연동하기 위해 사용한다

### 4) ExternalName 서비스

* ExternalName service : 쿠버네티스 클러스터에서 외부 호스트를 네임 레졸루션하기 위한 별명을 제공한다

## 10. 인그레스

* 인그레스 : 서비스를 이용한 쿠버네티스 클러스터 외부에 대한 노출과 가상 호스트 및 경로 기반의 정교한 HTTP 라우팅을 양립시키기 위해 사용하는 리소스