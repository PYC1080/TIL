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
1. src/main/java에 패키지를 생성하지 말 것
	1)  () :
	2) 이유 : 컴포넌트 스캔을 할 때 베이스 페키지(@SrpringBootApplication 이 선언된 클래스)가 먼저 실행되므로 베이스 패키지와 다른 패키지가 있더라도 실행되지 않으므로 별도의 packgage를 작성하면 안된다.

2. 테스트 케이스는 src/test/java에 만들어야 한다 : 테스트 케이스의 scope 설정이 <scope>test</scope>으로 설정되있으므로 반드시 src/test/java에 테스트 케이스를 설정해야 하며 특히 src/main/java에 테스트 케이스를 만들지 말 것

3. src/main/resources 하부 sub 폴더 생성 시 반드시 Config에 클래스 설정을 해야 한다
```

## 1. Spring boot 시작하기

```
1. Srping boot prj 구조
	1) src/main/java : java source 파일들
	2) src/main/resources/application.properties : spring boot property 값들을 모아 놓은 파일
	3) src/main/resources/static : html,css 같은 정적 파일들
	4) src/main/resources/templates : jsp, thymeleaf같은 동적 파일들
	5) src/test/java : java test 파일들

```



## 2.  Spring Boot 원리

```
	
1. 의존성 관리의 이해 : Spring boot는 의존성 관리를 내부적으로 해준다. 따라서 Spring framework에 비해 개발자가 따로 의존관계를 설정해야할 부분이 많이 줄었다

2. Dependency 계층 구조 : parent에서 버전을 명시하므로 버전을 따로 명시할 필요가 없다

3. @SpringBootApplication
	1) @SpringBootConfiguration +  @EnableAutoConfiguration + @ComponentScan ...
	2) Bean을 두 단계로 나눠서 등록한다
		a) 1단계 @ComponentScan : 스프링 프레임워크에서 @Repository, @Configuration, @Service 등 스프링 빈을 나타내는 어노테이션을 @ComponentScan이 붙은 클래스가 위치해 있는 현재 패키지를 기준으로 하부 패키지 까지 찾아내서 스프링 빈으로 등록하는 기능을 가진 어노테이션
		b) 2단계 @EnableAutoConfiguration : 스프링 프레임워크에서 많이 쓰이는 스프링 bean들을 스프링 부트에 자동적으로 컨테이너 등록 역할을 하는 어노테이션이다. 등록하는 bean 목록은 spring-boot-autoconfigure-2.x.x.RELEASE.jar 파일에 포함되어 있다.
		
4. 스프링 부트를 웹 애플리케이션 프로젝트로 만들지 않고 일반 프로젝트로 사용하는 방법
	1) src/main/java/Application.java 생성
	2) 코드입력
		
 SpringApplication application = new SpringApplication(Application.class);
 //Default WebApplication Type 설정은 SERVLET 으로 되어있다.
 application.setWebApplicationType(WebApplicationType.NONE);
 application.run(args);
```

## 3. Spring Boot 활용

### 1) Spring application

```
1. Spring Boot Banner 변경하기
	1) 변경
		(1)src/main/resources/banner.txt/gif/png/jpg 파일 생성 : new->file->banner.txt 생성
		(2) 원하는 문구 삽입 
	(예) 
==========================================
My Spring Boot ${spring-boot.version} / ${application.version}
==========================================
	2) 특징
		(1) ${spring-boot.version}, ${application.version} 사용가능
		(2) Banner 파일 위치 변경 : src/main/resources/application.properties에 spring.banner.location=classpath:banner파일명 추가
		
2. Spring Boot project를 jar파일로 생성하기 
	1) pom.xml에 설정 추가 : <packaging>jar</packaging>
	2) 추가 설정 가동 : Run as - Maven build - Goals:Package - run
	3) build success 시 : target 파일에 generated-* 폴더가 없다면 f5 눌러서 target 파일 refresh
	4) terminal open : target우클릭-showin-terminal클릭
	5) 터미널에서 명령어 입력 : >java -jar jartest-0.0.1-SNAPSHOT.jar
	
3. Event Listener
	1) 의미 : 스프링 부트 구동시 단계마다 여러 이벤트들이 발생하게 된다. 해당 이벤트들을 나타내는 객체를 인자로 받아 각 단계마다 원하는 처리를 할 수 있다.
	2) ApplicationStartingEvent
		(1) 스프링 컨테이너가 생성되기 전에 생성되는 이벤트이므로 해당 이벤트를 처리하려면 SpringApplication 객체에 해당 리스너를 추가해야 한다
	3) ApplicationStartedEvent
		(1) 스프링 컨테이너가 만들어진 이후에 생성되는 이벤트이므로 스프링 Bean을 등록해 해당 이벤트를 처리할 수 있다
		
4. Web application Type 지정

5. ApplicationRunner
	1) 기능 : SpringApplication이 실행된 후에 arguments를 받거나, 무엇인가를 실행하고 싶을 때 ApplicationRunner 인터페이스를 구현하는 Runner 클래스
	2) 방법
		(1) Runner 관련 패키지 및 클래스 작성
		(2) 클래스에 코드 추가 : implements ApplicationRunner
		(3) 클래스에 코드 추가 : @Component
		(4) 클래스에 코드 추가 : @Oreder(*)
		(5) 클래스에 코드 추가 : run(ApplicationArguments args) 오버라이드 
		(6) myspringboot - Run configuration 
		(7) program arguments에 --bar 추가 / VM arguments에 -Dfoo 추가
		()
```

### 2) 외부 설정

```
1. 외부 설정 : Spring Boot는 외부 설정을 통해 Spring Boot application의 환경 설정 혹은 설정값을 정할 수 있다. Spring Boot에서 사용할 수 있는 외부 설정은 Properties, YAML, 환경 변수, Command line 등이 있다

2. 외부 설정 우선 순위
	1) 유저 홈 디렉토리에 있는 properties 파일
	2) 테스트에 있는 @TestPropertySource
	3) @SpringBootTest 어노테이션의 Properties Attribute
	4) Command line Arguments
	5) 환경 변수 또는 시스템 프로퍼티(SPRING_APPLICATION_JSON)에 들어있는 프로퍼티
	6) ServletConfig parameter
	7) ServletContext Parameter
	8) Java:comp.env JNDI Attribute
	9) System.getProperties() 자바 시스템 프로퍼티
	10) OS 환경 변수
	11) RandomValuePropertySource
	12) JAR 밖에 있는 특정 파일용 application properties
	13) JAR 안에 있는 특정 파일용 application properties
	14) JAR 밖에 있는 application properties
	15) JAR 안에 있는 application properties
	16) @propertySource
	17) 기본 프로퍼티(SpringApplication.setDefaultProperties)

2. Properties
	1) 의미 : properties 파일의 값을 @Value 을 통해 읽을 수 있다
```



