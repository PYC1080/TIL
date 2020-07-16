# Docker ch06 - 쿠버네티스 클러스터 구축

## 1. Google Kubernetes Engine 환경 설정

### 1) GCP 프로젝트 생성

### 2) 구글 클라우드 SKD 설치

* gcloud 컴포넌트 업데이트

```powershell
PS C:\...> gcloud components update
```

* gcloud  로그인

```powershell
PS C:\...> gcloud auth login
```

* gcloud 조작할 대상 프로젝트 선정

```powershell
PS C:\...> gcloud config set project 프로젝트_ID
```

* gcloud GCP 리전 선택

```powershell
PS C:\...> gcloud config set compute/zone 리젼명
```

### 3) 쿠버네티스 클러스터 생성

* gcloud 를 사용해 쿠버네티스 클러스터 생성

```powershell
PS C:\...> gcloud container clusters create 클러스터_이름
```

`--cluster--version` : 쿠버네티스 클러스터 버젼 지정

`--num-nodes` : 인스턴스 수 지정

* 클러스터 정보 확인

```powershell
PS C:\...> gcloud container clusters describe 클러스터_이름
```

* gcloud로 클러스터를 제어할 수 있도록 kubectl 인증정보 설정

```powershell
PS C:\...> gcloud container clusters get-credentials 클러스터_이름
```

## 2. GKE에 TODO 애플리케이션 구축



## 3. GKE에 MySQL을 마스터-슬레이브 구성으로 구축

### 1) 퍼시스턴트볼륨과 퍼시스턴트볼륨클레임

* 퍼시스턴트볼륨 : 스토리지
* 퍼시스턴트볼륨클레임 : 추상화된 

### 2) 스토리지클래스

* 스토리지클래스 : 퍼시스턴트볼륨으로 확보한 스토리지의 종류를 정의하는 리소스

### 3) 스테이트풀세트

* 스테이트풀세트 : 상태가 있는 애플리케이션을 관리하는데 적합한 리소스

## 4. GKE에 TODO API를 구축

칟

## 5. GKE에 TODO 웹 애플리케이션 구축하기



## 6. 인그레스로 웹 애플리케이션 노출하기



## 7. 온프레미스 환경에서 쿠버네티스 클러스터 구축



## 8. Kuberspray를 사용한 쿠버네티스 클러스터 구축

* kubespary :  구성 관리 도구인 `Ansible`을 이용해 쿠버네티스 클러스터를 구축하는 도구