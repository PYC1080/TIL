## Spring - Spring Boot

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
```

### 3) Spring boot profile

```

2. Properties
	1) 의미 : properties 파일의 값을 @Value 을 통해 읽을 수 있다

3. @ConfigurationProperties
	1) 기능 : 프로퍼티 파일의 값을 받는 클래스를 하나 생성하여 그 클래스를 @Autowired 같은 어노테이션을 통해 자동 주입한다
	2) 특징
		(1) 자동 주입하는 방법이 Type-safe 하여 유지 보수 측면에서 장점을 갖는다
		(2) 프로퍼티 클래스를 작성하여 여러 프로퍼티를 묶어서 읽어올 수 있다
		(3) 프로퍼티 클래스를 bean으로 등록해 다른 bean에 주입할 수 있다
		(4) Application.properties에 똑같은 key 값을 가진 property가 많은 경우 프로퍼티 클래스를 작성 할 수 있다
		
4. @Profile
```

### 4) Logging

```
6 Logging Facade vs logger 구현체
	1) Logging Facade 
		(1) 종류 : Commons Logging, SLF4j(Simple Logging Facade for java)
		(2) 기능 : Logger API 를 추상해 놓은 로깅 퍼사드 인터페이스들이다. 로깅 퍼사드를 통해 Logger를 사용했을 때 로깅 구현체들을 교체하기 쉽게 해준다
	2) Logger 구현체
		(1) 종류 : JUL(java.util.logging), Log4j2, Logback
		(2) 기능 : 로깅 퍼사드 구현체들
```

### 5) Spring Boot Devtols

```
5. Spring boot devtools
	1) 기능 : 클래스 패스에 있는 파일이 변경 될 때마다 자동으로 재시작 해준다.
	2) 방법 : pom.xml에 dependency 추가
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
    </dependency>
```





##  4. Spring Boot  Data

### 1) In-Memory DB

```
1. 지원하는 In-Memory DB 종류
	1) H2 : 콘솔기능을 지원해주므로 추천한다
	2) HSQL
	3) Derby

2. H2 콘솔 접근
	1) POM.XML에 의존성 추가 :
	<dependency>
     <groupId>com.h2database</groupId>
     <artifactId>h2</artifactId>
     <scope>runtime</scope>
	</dependency>
    <dependency>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-jdbc</artifactId>
    </dependency>
    2) properties 파일에 코드 추가 : spring.h2.console.enabled=true
    3) 콘솔 접근 
    	(1) 입력 :localhost:포트번호/h2-console/
    	(2) JDBC URL : jdbc:h2:mem:testdb
    	(3) User Name: sa
    	(4) Password : 없음

3.
	
```

### 2) Maria DB

```
1. DB 설치시 준수 사항
	1) root password : mysql 
	2) Use UFT8 as default server's character set : check
	3) Enable the Feeback plugin and submit anonymous usage information ; uncheck
	
2. DB 생성
	1) 기존 DB 확인 : show databases;
	2) mysql DB 사용 : use mysql;
	3) 새로운 계정 생성 : create user 새로운계정@localhost identified by 'spring';
	4) 새로운 계정에 권한 부여 : grant all on *.* to spring@localhost;
	5) 부여한 권한 flush privileges;
	6) 새로운 계정에 로그인하기 위해 기존 db 로그아웃 : exit
	7) 새로운 계정 로그인 : mysql -u spring -p
	8) 새로운 db 생성 : create database spring_db;
	9) db가 생성되었는지 확인 : show databases;
	10) 생성된 db 사용 : use spring_db;
	11) db가 사용되는지 확인 : MariaDB [생성된DB이름]>
	
```

### 3) ORM 과 JPA

```
1. ORM, Object-Relational Mapping
	1) 기능 : 객체는 객체대로 설계하고 관계형 데이터베이스는 관계형 데이터베이대로 설계한다. ORM 프레임워크는 이 중간에서 서로를 매핑해준다
	2) ORM rule
		(1) Java class와 Table이 연관된다
		(2) Runtime ojbect는 Row와 연관된다
		(3) Ojbec의 Variable은 Column과 연관된다
	
	
2. JPA, Java Persistence API
	1) 기능 : 자바 진영의 ORM 기술 표준으로 인터페이스 모음이다
	2) JPA 2.1 표준 명세를 구현한 구현체
		(1) Hibernate : ORM framework, JPA 인터페이스를 구현한 대표적인 오픈소스
		(2) EclipseLink :
		(3) DataNucleus :
		
3. Spring data JPA : JPA를 쉽게 사용하기 위해 스프링에서 제공하는 프레임워크이다. Repository Bean을 자동 생성해주며 쿼리 메소드를 자동으로 구현해준다.

4. Entity class 작성
	1) Entity : 데이터베이스에서 표현하려고 하는 유무형의 객체로서 서로 구별되는 것을 뜻한다. 보통 DB상에서 table로 나타내어 진다.
	2) Annotation
    	(1) @Entity : Entity class 임을 지정해 DB 테이블과 mapping 해주는 객체를 나타내주는 어노테이션
    	(2) @Id : 엔티티의 기본키를 나타내는 어노테이션이다. 해당 어노테이션이 하나는 반드시 포함되어야 한다.
    	(3) @GeneratedValue : 주 키의 값을 자동으로 생성하기 위해 명시해주는 어노테이션이다. 자동 생성 전략은 AUTO, IDENTITY, SEQUENCE, TABLE이 있으며 기본 값은 AUTO 이다.
    	(4) @Column : @Entity를 선언해 줬다면 자동으로 부여되므로 명시하지 않아도 된다.
    	
 5. JPA를 사용한 데이터베이스 초기화
 	1) spring.jpa.hibernate.ddl-auto=**
 		(1) 기능
 		(2) ** 값
            a) create : JPA가 DB와 상호작용할 때 기존에 있던 테이블(스키마)을 삭제하고 새로 만든다
            b) create-drop : JPA 종료 시점에 기존에 있었던 테이블을 삭제한다
            c) update : 기존 테이블은 유지하므로 기존 데이터를 유지한 채 새로운 것만 추가한다. 변경된 부분만 반영하므로 개발할 때 적합하다.
            d) validate : 엔티티와 테이블이 정상 매핑되어 있는지 검증한다
 	2) spring.jpa.show-sql=**
 		(1) 의미 : JPA가 생성한 SQL문을 보여줄 지 에 대한 여부를 알려주는 프로퍼티
 		(2) ** 값
 			a) true
 			b) false
 
 6. Repository 인터페이스
 	1) 의미 : AccountRepository의 구현체를 작성하지 않아도 spring-data-jpa가 자동적으로 해당 문자열 username에 대한 인수를 받아 자동적으로 DB table과 매핑한다
 	2) Repository에 finder 메서드 선언 규칙
 	3) Repository interface 수정 : java.util.OPtional<T> 클래스
 		(1) 의미 : Null이 될 수도 있는 객체를 감싸고 있는일종의 래퍼 클래스. 명시적으로 해당 변수가 Null일 수도 있다는 가능성을 표현해 불필요한 NullPointException 방어 로직을 줄일 수 있게 된다.
    	
```

