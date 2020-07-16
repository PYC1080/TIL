# Docker ch02 - 도커 컨테이너 배포

## 1. 컨테이너 애플리케이션 실행하기



* 도커 이미지 : 도커 컨테이너를 구성하는 파일 시스템과 실행할 애플리케이션 설정을 하나로 합친 것. 컨테이너를 생성하는 템플릿 역할을 한다.
* 도커 컨테이너 : 도커 이미지를 기반으로 생성. 파일 시스템과 애플리케이션이 구체화되어 실행되는 상태이다.

### 1) 도커 이미지와 도커 컨테이너

* 도커 이미지 다운로드

```powershell
PS C:\...> docker image pull gihyodocker/echo:latest
PS C:\...> docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
gihyodocker/echo    latest              3dbbae6eb30d        2 years ago         733MB
```

* 도커 실행

```powershell
PS C:\Users\pyc\Desktop\Work\study\TIL\docker\script> docker container run -t -p 9000:8080 gihyodocker/echo:latest
```

* 도커 통신 확인

ps1 : docker server

```powershell
PS C:\Users\pyc\Desktop\Work\study\TIL\docker\script> docker container run -t -p 9000:8080 gihyodocker/echo:latest
2020/02/24 06:20:10 start server
```

ps2 : http requeset

```powershell
PS C:\...> curl http://localhost:9000


StatusCode        : 200
StatusDescription : OK
Content           : Hello Docker!!
RawContent        : HTTP/1.1 200 OK
                    Content-Length: 14
                    Content-Type: text/plain; charset=utf-8
                    Date: Mon, 24 Feb 2020 06:29:47 GMT

                    Hello Docker!!
Forms             : {}
Headers           : {[Content-Length, 14], [Content-Type, text/plain; charset=utf-8], [Date, Mon, 24 Feb 2020 06:29:47 GMT]}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 14
```

### 2) 간단한 애플리케이션과 도커 이미지 만들기

#### (1) FROM 인스트럭션

```
1. FROM(이하 from 인트스럭션): 도커 이미지의 바탕이 될 베이스 이미지를 지정한다. dockerfile로 이미지를 빌드 할 때 먼저 FROM 인트스럭션에서 지정된 이미지를 내려받는다. 이때 받아오는 이미지는 도커 허브라는 레지스트리에 공개된 것이다.
2. tag(태그) : 각 이미지의 버전 등을 구별하는 식별자다
```

#### (2) RUN 인스트럭션

```
1. RUN(이하 run 인스트럭션) : 도커 이미지를 실행할 때 컨테이너 안에서 실행할 명령을 정의하는 인트럭션이다
2. run 인스트럭션은 이미지를 빌드할 때 실행된다
```

#### (3) COPY 인스트럭션

````
1. COPY(이하 copy 인스트럭션) : 도커가 동작 중인 호스트 머신의 파일이나 디렉터리를 도커 컨테이너 안으로 복사하는 인스트럭션
````

#### (4) CMD 인스트럭션

```
1. CMD(이하 CMD 인스트럭션) : 도커 컨테이너를 실행할 때 컨테이너 안에서 실행할 프로세스를 지정한다
2. CMD 인스트럭션은 컨테이너를 시작할 때 한 번 실행된다
```

### 3) 도커 이미지 빌드하기

```powershell
docker image build -t 이미지명[:태그명] Dockerfile경로
```

### 칼럼 2-3 그 밖의 Dockerfil 인스트럭션

#### (1) ENV

```
도커 컨테이너 안에서 사용할 수 있는 환경 변수를 지정한다
```

#### (2) ARG

```
이미지를 빌드할 때 정보를 함께 넣기 위해 사용한다. 이미지를 빌드할 때만 사용할 수 있는 일시적인 환경변수이다
```

### 칼럼 2-4 CMD 인스트럭션 작성 방법

```dockerfile
1. CMD ["실행 파일", "인자1", "인자2"] : 실행 파일에 인자를 전달한다.
2. CMD 명령 인자1 인자2 : 명령과 인자를 지정한다. 셀에서 실행되므로 셀에 정의된 변수를 참조할 수 있다.
3. CMD ["인자1", "인자2"] ; ENTRYPOINT에 지정된 명령에 사용할 인자를 전달한다.
```

### 4) 도커 컨테이너 실행

#### (1) 포트 포워딩

```
도커 포트 포워딩 : 도커 컨테이너는 가상 환경이지만, 외부에서 봤을때는 독립된 하나의 머신처럼 다룰 수 있다는 특징이 있따. HTTP 요청을 받는 애플리케이션을 사용하려면 컨테이너 밖에서 온 요청을 컨테이너 안에 있는 애플리케이션에 전달해줘야 한다. 이때 해당 역할을 수행하는 것이 도커의 포트 포워딩이다.
```



## 2. 도커 이미지 다루기

### 1) docker image build

* `docker image build` : Dockerfilㄷ에 기술된 구성에 따라 도커 이미지를 생성하는 명령어

```powershell
docker image build -t 이미지명[:태그명] dockerfile경로
```

#### (1) 옵션 `-t`

* `-t` : 이미지명과 태그명을 붙이는 것

#### (2) 옵션 `-f`

* `-f` :  Dockerfile 이외의 파일명으로 된 Dockerfile을 이용해야 할 경우 사용하는 옵션

```powershell
docker image build -f dockerfile이름 -t 이미지명 dockerfile경로
```

#### (3) 옵션 `--pull`

* `--pull` : 레지스트리에서 받아온 도커 이미지는 일부러 삭제하지 않는 한 호스트 운영 체제에 저장된다. 따라서 이미지를 빌드할 때 매번 베이스 이미지를 받아오지는 않는다. 따라서 `--pull` 옵션을 사용하면 매번 베이스 이미지를 강제로 새로 받아온다.

```powershell
docker image buil --pull=true -t 이미지명 dockerfile경로
```

### 2) docker search

* `docker search` : 도커 허브에 등록된 리포지토리를 검색

```powershell
docker search [options] 검색키워드
```

### 3) docker image pull

* `docker image pull` : 도커 레지스트리에서 도커 이미지를 내려 받으려는 경우 사용하는 명령어

```powershell
docker image pull [options] 리포지토리명[:태그명]
```

### 4) docker image ls

* `docker image ls` : 현재 호스트 운영 체제에 저장된 도커 이미지 목록을 보여준다

```powershell
docker image ls [options] [리포지토리[:태그]]
```

### 5) docker image tag

* `docker image tag` : 도커 이미지 특정 버전에 태그를 붙일 때 사용한다. 어떤 특정 이미지 ID를 갖는 도커 이미지를 쉽게 식별하는 것을 목적으로 한다.

#### (1) 도커 이미지의 버전

<img width="333" alt="2-5-1 도커 이미지의 버전" src="https://user-images.githubusercontent.com/55272324/75136069-d446b980-5726-11ea-9498-ddab9bc7be9f.PNG" style="zoom:150%;" >

`IMAGE ID` 에 나온 해시 값은 이미지마다 다르게 할당된 식별자이다.  `IMAGE ID` 를 통해 도커 이미지의 버전 넘버 역할을 한다

#### (2) 이미지 ID에 태그 부여하기

```powershell
docker image tag 기반이미지명[:태그] 새이미지명[:태그]
```

해당 명령어를 통해 이미지ID에 새로운 태그명을 부여할 수 있지만, 두 이미지는 동일한 `IMAGE ID(해시 값)`을 가리키고 있따

### 6) docker image push

*  `docker image push` : 현재 저장된 도커 이미지를 도커 허브 등의 레지스트리에 등록하기 위해 사용한다

```powershell
docker image push [options] 리포지토리명[:태그]
```

### 칼럼 2-6 도커 허브

* 도커 로그인

```powershell
docker login -u docker_id -p password
```



## 3. 도커 컨테이너 다루기

### 1) 도커 컨테이너의 생애주기

* 도커 컨테이너 생애주기 : 실행 중 - 정지 - 파기의 3가지 상태를 갖는다

#### (1) 실행 중 상태

* 실행 중 상태 : 도커 이미지를 기반으로 ㅓㄴ테이너가 생성되면 이미지를 생성했던 Dockerfile에 포함된 CMD 및 ENTRYPOINT 인스트럭션에 정의된 애플리케이션이 수행된다. 이 애플리케이션이 실행 중인 상태가 컨테이너의 실행 중 상태가 된다. 실행이 끝나면 정지 상태로 변한다

#### (2) 정지 상태

* 정지 상태 : 실행 중 상태에 있는 컨테이너를 사용자가 명시적으로 정지하거나 컨테이너에서 실행된 애플리케이션이 정상/오류 여부를 막론하고 종료된 경우에는 컨테이너가 자동으로 정지 상태가 된다. 컨테이너를 정지시키면 가상 환경으로서는 더 이상 작동하지 않지만, 디스크에 컨테이너가 종료된 시점의 상택 저장되어 남아 있다.

#### (3) 파기 상태

* 파기 상태 : 정지 상태의 컨테이너는 명시적으로 파기하지 않는 이상 디스크에 그대로 남아 있다.

### 2) 컨테이너 생성 및 실행

* docker container run : 도커 이미지로부터 컨테이너를 생성하고 실행하는 멍령이다

```powershell
docker container run [options] 이미지명[:태그] [명령] [명령인자...]
```

#### (1) docker container run 명령의 인자

* docker container run 명령에 명령인자를 전달하면 Dockerfile에서 정의했던 CMD 인스트럭션을 오버라이드 할 수 있다.

#### (2) 컨테이너에 이름 붙이기

```powershell
docker container run --name [컨테이너 명] [이미지명]:[태그]
```

### 칼럼 2-7 도커 명령에서 자주 사용되는 옵션

```
1. -i : 컨테이너를 실행할 때 컨테이너 쪽 표준 입력과의 연결을 그대로 유지
2. -t : 유사 터미널 기능을 활성화
3. --rm : 컨테이너를 종료할 때 컨테이너를 파기하도록 하는 옵션
4. -v : 호스트와 컨테이너 간에 디렉터리나 파일을 공유하기 위해 사용하는 옵션
```

### 3) 도커 컨테이너 목록 보기

* `docker container ls`  : 실행 중이거나 종료된 컨테이너의 목록을 보여주는 명령어

```powershell
docker contianer ls [options]
```

* 도커 컨테이너 각 항목의 의미

```
1. CONTAINER ID : 컨테이너를 식별하기 위한 유일 식별자
2. IMAGE : 컨테이너를 만드는 데 사용된 도커 이미지
3. COMMAND : 컨테이너에서 실행되는 애플리케이션 프로세스
4. CREATED : 컨테이너 생성 후 경과된 시간
5. STATUS : 컨테이너 실행 상태
6. PORTS : 호스트 포트와 컨테이너 포트의 연결 관계
7. NAMES : 컨테이너의 이름
```

#### (1) 컨테이너 ID만 추출하기

* `-q`옵션 : 컨테이너 ID만 추출할 수 있다

```powershell
docker container ls -q
```

#### (2) 컨테이너 목록 필터링하기

* `--filter`옵션 옵션: 특정 조건을 만족하는 컨테이너의 목록

```
docker container ls --filter "필터명=값"
```

#### (3) 종료된 컨테이너 목록 보기

* `-a` 옵션 : 이미 종료된 컨테이너를 포함한 컨테이너 목록을 볼 수 있다.

```
docker container ls -a
```

### 4) 컨테이너 정지하기

* `docker container stop` : 실행 중인 컨테이너 종료

```powershell
docker container stop 컨테이너ID or 컨테이너명
```

### 5) 컨테이너 재시작하기

* `docker container restart` : 파기하지 않은 정지 상태 컨테이너를 재시작할 수 있는 명령어

```powershell
docker contaienr restart 컨테이너ID or 컨테이너명
```

### 6) 컨테이너 파기하기

* `docker container rm` : 정지시킨 컨테이너를 완전히 파기하려는 경우 사용하는 명령어
* `-f`옵션  : 실행 중인 컨테이너를 삭제할때 사용하는 옵션

* `--rm`옵션 : 생성한 컨테이너가 실행이 끝나면 자동으로 파기되는 옵션

### 7) 표준 출력 연결하기

* `docker container logs` : 현재 실행 중인 특정 도커 컨테이너의 표준 출력 내용을 확인 할 수 있다. 

```powershell
docker container logs [options] 컨테이너ID or 컨테이너명
```

### 8) 실행 중인 컨테이너에서 명령 실행하기

* `docker container exec`: 실행 중인 컨테이너에서 원하는 명령을 실행 할 수 있다.

```powershell
docker container exec [options] 컨테이너ID or 컨테이너명 컨테이너에서_실행할_명령
```

### 8) 파일 복사하기

* `docker container cp` : 컨테이너끼리 혹은 컨테이너와 호스트 간에 파일을 복사하기 위한 명령이다

```powershell
docker container cp [options] 컨테이너 ID or 컨테이너명: 원본파일 대상파일
```

## 4. 운영과 관리를 위한 명령

### 1) 컨테이너 및 이미지 파기

* `docker container prune` : 실행 중이 아닌 모든 컨테이너를 삭제하는 명령

```powershell
docker container prune [options]
```

* `docker image prune` : 태그가 붙지 않은 모든 이미지를 삭제

```powershell
docker image prune [options]
```

* `docker system prune` : 사용하지 않는 도커 이미지, 컨테이너, 볼륨, 네트워크 등 모든 도커 리소스를 일괄적으로 삭제

### 2) 사용 현황 확인하기

* `docker container stats` : 시스템 리소스 사용 현황을 컨테이너 단위로 확인

```powershell
docker container stats [options] [대상_컨테이너ID]
```

## 5. 도커 컴포즈로 여러 컨테이너 실행하기

### 1) 여러 컨테이너의 실행 관리

* `docker-compose` : `yaml` 포맷으로 기술된 설정 파일로, 여러 컨테이너의 실행을 한 번에 관리할 수 있다.

## 6. 컴포즈로 여러 컨테이너 실행하기



 