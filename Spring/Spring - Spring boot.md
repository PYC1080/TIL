## Spring - Spring boot

## 0. 설정

### 1) [Spring initalizr](https://start.spring.io/)

```
1. project : maven project

2. language : java

3. spring boot : 2.1.13

4. project metadata (소문자로 할 것)
    1) Group : com.pyc
    2) Artifact : myspringboot
    3) Name : myspringboot
    4) Description : first spring boot project
    5) package : com.pyc.myspringboot
    6) Packaging : Jar
    7) Java : 8
    
5. Dependencies
	1) spring web : web 검색 -> Srping web 추가
	
6. Generate 버튼 클릭
```

### 2) STS

```
1. 1)에서 generate한 파일 압축 풀기

2. STS-file-open Project From file sysmtem-browser클릭-1.에서 푼 압축 파일의 src 상단 파일 불러오기-finish

3. myspringboot(내가 불러온 파일)/src/main/resources/application.properties : server.port=8090(default port = 8080, 해당 포트 번호가 사용중이면 다른 포트번호를 할당해준다)

4. myspringboot 우클릭 - run as - spring boot app

```

### 3) 설정 시 주의할 점

```
1. src/main/java에 패키지를 생성하지 말 것 : 컴포넌트 스캔을 할 때 베이스 페키지(src/main/java의 com.***.*** 패키지)가 먼저 실행되므로 베이스 패키지에 다른 패키지가 있더라도 실행되지 않는다. 따라서 베이스 패키지 하부에 파일을 만들어야 한다.

2. src/main/java에 테스트 케이스를 만들지 말 것 : 테스트 케이스는 src/test/java에 만들어야 한다

3. src/main/resources/static : 정적 파일(순수 html, css 등)들 위치 장소

4. src/main/resources/templates : jsp, timeleaf 등 위치 장소
```

