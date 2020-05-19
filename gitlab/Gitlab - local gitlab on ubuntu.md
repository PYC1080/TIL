# Gitlab - local gitlab on ubuntu

## 0. 설정

```
1. ubuntu : 16.04LTS(64bit)

2. gitlab-ctl : gitlab-ce

3. vmware workstation : 12.0.0

4. docker : 18.09.7
```

## 1. 목표

### 1) gitlab

```
1. 서버 설치를 목적으로 나온 호스팅 서비스이다
2. CE(Community edition)와 EE(Enterprise edition)으로 나뉜다. 
3. CE버전으로 설치하면 Private 서비스를 무료로 인원 제한 없이 이용할 수 있다. 
4. 모든 repository의 코드는 개인 서버에 저장된다.
5. CE 버전은 오픈소스 라이센스로 설치하는 과정이 복잡하지만 문서가 잘 정리되어 잇다
```

### 2) Goal

```
host pc의 vmware workstation에 ubuntu 가상 환경을 띄운다. 해당 가상 환경에 gitlab을 local로 설치한 후 client pc에서 ubuntu 가상 환경의 gitlab으로 접속이 가능한 지 확인한다
```

### 3) Guideline

```
1. host pc의 VMware workstation에 ubuntu 설치

2. ubuntu가 설치된 가상 환경에 docker 설치

3. ubuntu가 설치된 가상 환경에 gitlab 설치를 위한 기초 소프트웨어 설치

4. ubuntu가 설치된 가상 환경에 gitlab-ce 설치

5. gitlab 관련 설정 변경

6. host pc와 ubuntu 가상 환경 사이의 포트포워딩 설정

7. host pc와 client pc 사이의 포트 포워딩 설정

8. 결과 확인
```

## 2. 과정

### 1) 가상 환경 구성

* [vmware Workstation 설치](https://my.vmware.com/web/vmware/info/slug/desktop_end_user_computing/vmware_workstation_pro/12_0) :  VMware Workstation Pro 12.5.9 for Windows
* [ubuntu 16.04 LTS.iso](http://ftp.kaist.ac.kr/ubuntu-cd/16.04/)

```
1. hard disk : 30GB
2. Memory : 5GB
```

### 2) ubuntu : docker 설치

* Docker 저장소 GPG key 추가

```
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
```

* Docker 저장소 추가

```
echo "deb https://apt.dockerproject.org/repo ubuntu-xenial main" | sudo tee /etc/apt/sources.list.d/docker.list
```

* apt update

```
sudo apt-get update
```

* Docker 및 docker-compose 설치

```
1. sudo apt-get install -y docker-engine

2. sudo apt-get install -y docker-compose
```

* docker를 sudo 명령어 없이 사용하도록 사용자에게 권한 부여

```
sudo usermod -aG docker $USERNAME
```

* docker 명령어 실행

```
1. docker -v

2. docker-compose -v
```

* docker 설치 확인

```
docker --version
```

### 3) ubuntu : gitlab-ce 설치

* 기초 소프트웨어 설치

```
sudo apt-get install curl openssh-server ca-certificates postfix

1. postifx 선택 옵션 : No configuration
```

* gitlab 패키지 프로그램 저장소 추가

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
```

* apt-get update

```
apt-get update
```

* gitlab CE 설치, 설치가 완료되면 Gitlab 로고가 뜬다

```
sudo apt-get install gitlab-ce
```

### 4) Gitlab 설정 변경

* gitlab 설정 파일 수정

```
1. sudo vi /etc/gitlab/gitlab.rb

2. 변경 내용
	0) 포트번호
		(1) 80번 및 8080번 포트는 사용하는 경우가 많으므로 해당 포트 번호를 제외한 포트를 할당해준다
		(2) external_url의 포트번호와 unicorn,gitlab_workhorse의 포트번호를 다르게 입력한다
		(3) unicorn의 포트번호와 gitlab_workhorse의 포트번호는 같은 번호를 입력한다
	1) external_url : external_url 'http://ip(vmware 가상 ip):포트번호(입력)'
	2) gitlab_workhorse['auth_backend'] = "http://localhost(수정안함):포트번호(입력)"
	3) unicorn['port'] = 포트번호(입력)
```

* gitlab 적용 및 재시작

```
1. sudo gitlab-ctl reconfigure

2. sudo gitlab-ctl restart
```

* gitlab 구동 확인

```
sudo gitlab-ctl status
```

* gitlab 접속

```
http://external_url
```

### 5) 포트 바인딩 : vmware - host pc

```
1. vmware workstation : edit-Virtual network Editor

2. change settings

3. VMnet information : NAT -> NAT settings

4. add
	1) Host port : client가 host로 접속하기 위해 할당되는 포트
	2) Type : TCP
	3) virtual machine IP address : vmware 가상 호스트 IP
	4) Virtual Machine port : external_url의 포트번호 입력
	5) Description : 생략해도 무방

5. OK

6. Apply -> OK
```

### 6) 포트 바인딩 : Client pc - host pc

```
1. host pc 인바운드 규칙 추가
	1) 제어판-시스템 및 보안-Windows Defender 방화벽-고급설정
	2) 인바운드 규칙-새 규칙
		(1) 규칙 종류 : 포트
		(2) 프로토콜 및 포트
			a) TCP(T)
			b) 특정 포트 : external_url의 포트번호 입력
		(3) 작업 : 연경 허용
		(4) 프로필 : 도메인/개인/공용 모두 체크
		(5) 이름 : 원하는 이름 입력

2. 네트워크 설정
	1) 제어판-네트워크 및 인터넷-네트워크 연결
	2) VMware Network Adapter VMnet8-인터넷프 프로토콜 버전4(TCP/IPv4)
	3) 일반 탭
		(1) 다음 IP 주소 사용
			a) 주소 : 가상 환경 IP
			b) 서브넷 마스크 : 255.255.255.0
			c) 기본 게이트 웨이
		(2) 다음 DNS 서버주소사용

```

## 3. 결과

<img width="1275" alt="gitlab 결과" src="https://user-images.githubusercontent.com/55272324/82345625-73323780-9a30-11ea-938c-b3346d0cbed9.png">