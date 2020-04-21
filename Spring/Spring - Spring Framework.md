# Spring Framwork - 기초

## 0. 용어

### 1) IoC, 제어의 역전

> Inversion Of Control

```
1. 의미 : 인스턴스 생성부터 소멸까지의 인스턴스 생명주기 관리를 개발자가 아닌 컨테이너가 대신 해준다. 컨테이너 역할을 제어 권한을 가진 프레임워크가 하고 개발자는 핵심 코드에 역량을 집중 할 수 있게 된다.

2. 특징
	1) Spring 컨테이너는 IoC를 지원하며, 메타데이터(XML)를 통해 beans를 관리하고 어플리케이션의 중요부분을 형성한다
	2) Spring 컨테이너는 관리되는 beans들을 의존성 주입(DI)을 통해 IoC를 지원한다
```



```
1. DI, Dependency Injection
2. TestContext Framework
3. DAO, Data Access Object
4. JDBC, Java DataBase Connectivity
5. ORM, Object Relational Mapping
6. MyBatis : 영속성 지원
7. JPA, Java Persistence architecture : 영속성 지원
8. Spring MVC
9. MVC, Model view Controller
10. IoC, Inversion Of Control 제어의 역전 
	1) 의미 : 
	2) 특징 : 
11. AOP, Aspect Oriented Programming
12. JSP, Java Sever Page
13. JSON
14. XML
15. Ajax, Asynchoronous Javascript And XML
16. React
17. JPA, Java Persistence Api
18. REST, Representational State Transfer
19. OXM, Object Xml Mapping
20. EJB, Enterprise Java Beans
21. WAS, Web Application Server
22. JEUS
23. Web sphere
24. Web logic
25. XSD, XML 스키마
```

## 1. Framework 개념

### 1) 정의

```
프레임워크는 비기능적 요구사항(Non-Functional)에 해당하는 성능, 보안, 확장성, 안정성 등을 만족하는 구조와 구현된 기능을 안정적으로 실행하도록 제어해주는 잘 만들어진 구조의 라이브러리 덩어리이다. 따라서 애플리케이션들의 최소한의 공통점을 찾아 하부 구조를 제공함으로써 개발자로 하여금 시스템의 하부 구조를 구현하는데 들어가는 노력을 절감시켜준다.
```

### 2) Library 와 Framework

```
라이브러리는 객체 생성을 개발자가 하지만 프레임워크는 객체 생성을 프레임워크가 제공하는 컨테이너가 한다. 따라서 프레임워크를 사용할 때 개발자는 XML에 해당 설정을 반드시 해야한다
```

### 3) Framework 장점

```
1. 비기능적 요소들을 초기 개발 단계마다 구현해야하는 불합리함을 극복해준다
2. 비기능적 요소들을 프레임워크가 담당하므로 개발자는 기능적인 요구사항에 집중할 수 있따
3. 디자인 패턴과 마찬가지고 반복적으로 발견되는 문제를 해결 하기 위한 특화된 솔루션을 제공한다
```

### 4) 디자인 패턴

```
1. 디자인 패턴과 프레임워크의 관련성 : 디자인 패턴은 프레임워크의 핵심적인 특징이다. 프레임워크를 사용하는 애플리케이션에 해당 패턴이 적용되지만 프레임 워크 자체는 디자인 패턴이 아니다.

2. 디자인 패턴과 프레임워크 비교 : 디자인 패턴은 애플리케이션을 설계할 때 필요한 구조적인 가이드라인이 되어 줄 수 있지만 구체적인 구현 기반 코드를 제공하지 않는다. 이와 달리 프레임워크는 디자인 패턴과 함께 패턴이 적용 된 기반 클래스 라이브러리를 제공해 프레임워크를 사용하는 구조적인 틀과 구현 코드를 함께 제공한다

3. singletone 패턴 : 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생정자가 생성한 객체를 리턴하는 디자인 패턴. 힙 영역을 하나만 사용하기에 메모리적 이득을 갖는다
```

## 2. Spring framework

### 1) 개요

```
1. Spring Framework
	1) 의미 : Java enterprise 개발을 편하게 해주는 오픈소스 경량급 애플리케이션 프레임워크
	2) 경량급 : 프레임워크 등장 이전에는 EJB 기술을 사용해 WAS 위에서 돌렸다. 이런 상황을 해결하고자 등장한 Spring framework는 EJB도 WAS도 필요 없었기에 가볍다.

2. Spring 삼각형
	1) 의미 : 엔터프라이즈 개발의 복잡함을 상대하는 Spring 전략
	2) 삼각형 요소
		(1) POJO, Plain Old Java Object : 오래된 방식의 간단한 자바 오브젝트. Java EE 등의 중량 프레임워크들을 사용하게 되면서 해당 프레임워크에 종속된 무거운 객체를 만들게 된 것에 반발하여 사용하게 된 용어이다.
		(2) DI, Dependency Injection, 의존성 주입 : 하나의 객체가 다른 객체의 의존성을 제공하는 테크닉. 객체의 생성과 사용의 관심을 분리해 가독성과 코드 재사용을 높여준다.
		(3) PSA, Portable Service Abstraction, 서비스 추상화 : 트랜잭션 추상화, OXM 추상화, 데이터 액세스의 Exception 변환기능 등 기술적인 복잡함은 추상화를 통해 Low level 기술 구현 부분과 기술을 사용하는 인터페이스로 구분한다 
```

### 2) 특징

```
1. 컨테이너 역할 : Spring 컨테이너는 Java 객체의 라이프사이클을 관리하며 Spring 컨테이너로부터 필요한 객체를 가져와 사용할 수 있다.

2. DI 지원 : spring은 설정 파일이나 annotation을 통해 객체 간의 의존관게를 설정할 수 있도록 한다

3. AOP 지원 : Spring은 트랜잭션이나 로깅, 보안과 같이 공통적으로 필요로 하는 모듈들을 실제 핵심 모듈에서 분리해 적용하 수 있다

4. POJO 지원 : Spring 컨테이너에 저자오디는 Java객체는 특정한 인터페이스를 구현하거나 특정 클래스를 상속받지 않아도 된다

5. 트랜잭션 처리를 위한 일관된 방법을 지원 : JDBC, JTA등 어떤 트랜잭션을 사용하던 설정을 통해 정보를 관리하므로 트랜잭션 구현에 상관없이 동일한 코드를 사용 가능하다

6. 영속성과 관련된 다양한 API 지원 : MyBatis, Hibernate 등 데이터베이스 처리를 위한 ORM 프레임워크들과의 연동을 지원한다
```

### 3) 기능요소

```
1. Core 컨테이너 : Spring framework의 기본기능을 제공한다. 해당 모듈에 있는 BeanFactory는  spring의 기본 컨테이너이면서 스프링 DI의 기반이다.

2. Context 모듈 : BeanFactory의 개념을 확장한 것으로 국제화 메시지, 애플리케이션 생명주기 이벤트, 유효성 검증등을 지원한다.

3. DAO 패키지 : JDBC에 대한 추상화 계층으로 JDBC 코딩이나 예외처리하는 부분을 간편화 시켰으며, AOP 모듈을 이용해 프랜잭션 관리 서비스도 제공한다.

4. ORM : MyBatis, Hibernate, JPA 등 널리 사용되는 ORM 프레임워크와의 연결고리를 제공한다. ORM 제품들을 Spring의 기능과 조합해서 사용할 수 있도록 해준다.

5. AOP 모듈 : 스프링 애플리케이션에서 Aspect를 개발할 수 있는 기반을 지원한다.

6. Web : 일반적인 웹애플리케이션 개발에 필요한 기본기능을 제공하고 Webwork나 struts와 같은 다른 웹어플리케이션 프레임워크와의 통합을 지원한다.

7. WebMVC : MVC(Model, View, Controller) 패러다임은 사용자 인터페이스가 애플리케이션 로직과 분리되는 웹 애플리케이션을 만드는 경우에 일반적으로 사용되는 패러다임이다.
```

## 3. IoC 와 Spring DI

### 1) IoC, 제어 역전

> Inversion of Controller

```
1. IoC 개념 : 객체의 생성에서부터 생명 주기의 관리까지 모든 객체에 대한 제어권을 갖은 주체가 바뀌는 것을 의미한다

2. IoC 컨테이너 : 객체의 생성을 책임지고 의존성을 관리하며 POJO의 생성 초기화 서비스 및 소멸에 대한 권한을 가진다

3. DL과 DI
	1) DL, Dependency Lookup, 의존성 검색 : 저장소에 저장되어 있는 bean에 접근하기 위해 컨테이너가 제공하는 API를 이용하는 Bean을 Lookup 하는 것
	2) DI, Dependency Injection, 의존성 주입 : 각 클래스간의 의존관계를 빈 설정(bean definition) 정보를 바탕으로 컨테이너가 자동으로 연결해주는 것
```

### 2) DI, 의존성 주입

> Dependency Injection

```
1. DI 개념 
	1) Dependency, 의존성 : B 클래스가 A클래스를 내부에 변수로 사용하게 되면 B 클래스가 A 클래스에 대해 의존관계가 생기게 된다
	2) Injection, 주입 : 객체 생성을 내부가 아닌 외부에서 넣어주는 것
	3) 의존성 분리 : 의존관계 역전 원칙에 따라 의존관계를 분리시킨다
	4) 의존관계 역전 원칙
		(1) 상위 모듈은 하위 모듈에 의존해서는 안된다. 상위 모듈과 하위 모듈 모두 추상화에 의존한다
		(2) 추상화는 세부 사항에 의존해서는 안된다. 세부사항이 추상화에 의존한다
	5) 결론 : DI란 각 클래스 간의 의존관계를 빈 설정 정보를 바탕으로 컨테이너가 자동으로 연결해준다.

2. Spring DI 용어
	1) Bean, 빈 : 스프링이 IoC 방식으로 직접 생성과 제어를 담당하는 객체.
	2) Bean factory, 빈 팩토리 : 스프링의 IoC를 담당하는 핵심 컨테이너. bean을 생성하고 조회하며 반환하는 기능을 담당한다. beanfactory를 바로 사용하지 않고 이를 확장한 ApplicationContext를 주요 이용한다
	3) ApplicationContext, 애플리케이션 컨텍스트 : Beanfactory를 확장한 IoC 컨테이너. Bean factory와 동일한 기능한 기능에 더불어 각종 부가 서비스를 추가로 제공한다.
	4) Configuration metadata, 설정 메타정보 : ApplicationContext가 IoC를 적용하기 위해 사용하는 메타정보를 말한다
	
3. DI 유형
	1) Setter Injection : 의존성을 입력 받는 Setter메서드를 만들고 이를 통해 의존성을 주입한다
	2) Constructor Injection : 필요한 의존성을 포함하는 클래스의 생성자를 만들고 이를 통해 의존성을 주입한다
	3) Method Injection : 의존성을 입력 받는 일반 메서드를 만들고 이를 통해 의존성을 주입한다
	
4. Setter Injection
	1) 의미 : 기본생성자로 객체르 생성하고 setter method의 인자로 의존하는 객체를 1개씩 주입해주는 방식
	2) 방식 : <property>, Setter 메서드를 통해 의존관계가 있는 bean을 주입한다
	3) 특징
		(1) ref : ref 속성을 사용하면 bean의 id를 이용해 주입할 bean을 찾는다.
		(2) value : value 속성은 단순 값 또는 bean이 아닌 객체를 주입할 때 사용한다
 	
5. Constructor Injection
	1) 의미 : 오버로딩된 생성자로 객체를 생성하고 이 생성자의 인자로 의존하는 객체를 여러개씩 주입해주는 방식
	2) 방식 :  <constructor-args> 
		
6. Method Injection : 의존성을 입력 받는 일반 메서드를 만들고 이를 통해 의존성을 주입한다

7. 컬렉션 타입 값 주입
```


### 3) jUnit을 사용한 DI 테스트 클래스

```
1. jUnit : Java에서 독립된 단위테스트를 지원해주는 프레임워크이다. jUnit은 보이지 않고 숨겨진 단위 테스트를 끌어내어 정형화시켜 단위테스트를 쉽게 해주는 테스트 지원 프레임워크이다.

2. 단위 테스트 : 소스 코드의 특정 모듈이 의도된 대로 정확히 작동하는지 검증하는 절차. 모든 함수와 메소드에 대한 테스트 케이스를 작성하는 절차이다.

3. jUnit의 특징
	1) 단정 메서드(assert method)를 사용해 테스트 케이스의 수행 결과를 판별
	2) 테스트를 지원하는 어노테이션을 제공한다
	3) 각 @Test 메서드가 호출될 때마다 새로운 인스턴스를 생성하여 독립적인 테스트가 이루어지도록 한다

4. 단정메서드
	1) assertEquals(a,b); : 객체 A와 B 값이 일치함을 확인한다
	2) assertArrayEquals(a,b); : 배열 A와 B값이 일치함을 확인한다
	3) assertSame(a,b); :  객체 A와 B의 레퍼런스가 동일한가를 확인한다
	4) assertTrue(a); : 조건 A가 참인가를 확인한다
	5) assertNotNull(a); :  객체 A가 Null이 아님을 확인한다
```

### 4) Bean metatdata 구성 전략

```
전략1.
	1) 방식 : xml에 configuration 내용을 전부 작성한다.
	2) 특징
        (1) 모든 Bean을 명시적으로 XML에 등록
        (2) 생성되는 모든 Bean을 XML에서 확인할 수 있다. 그러나 Bean의 갯수가 많아지면 XML 파일을 관리하기 번거로울 수 있다
        (3) 여러 개발자가 같은 설정 파일을 공유해서 개발하다 보면 설정파일을 동시에 수정하다가 충돌이 일어나는 경우가 적지 않다
        (4) DI에 필요한 적절한 setter 메서드 또는 constructor가 코드 내에 반드시 존재해야 한다
        (5) 개발 중에는 어노테이션 설정방법을 사용했지만 운영 중에는 관리의 편의성을 위해 XML 설정으로 변경하는 전략을 쓸 수도 있다
    3) 장단점
    	(1) 장점
    		a) 전체 의존관계 구조 파악이 쉽다
    	(2) 단점
    		a) 개발과정에서 여러 개발자가 XML 파일 공유시 sharing 문제가 발생한다
	
전략2.
	1) 방식 : Annotaion과 XML 을 혼용해서 사용한다
	2) 특징
        (1) Bean으로 사용될 클래스에 특별한 어노테이션을 부여해주면 해당 클래스를 자동으로 찾아서 Bean으로 등록한다
        (2) Bean Scanning을 통한 자동 인식 bean 등록 기능 : @Component 어노테이션이 선언된 클래스를 자동으로 찾아서 Bean으로 등록해주는 방식
        (3) 어노테이션을 부여하고 자동 스캔으로 bean을 등록하면 XML 문서 생성과 관리에 따른 수고를 덜어주고 개발 속도를 향상시킬 수 있다
        (4) 애플리케이션에 등록될 bean이 어떤 것들이 있고 bean들 간의 의존관계가 어떻게 되는지를 한눈에 파악할 수 없다는 단점이 있다
	2) 장단점
		(1) 장점
			a) XML이 간편해 진다
			b) 개발모드에서 편리하다
		(2) 단점
			a) Bean 의존관계 파악이 쉽지 않다 : 소스 안 클래스들에 어노테이션이 나누어져 있다
	
전략3.
	1) 특징
        (1) Java Config : XML이 아닌 자바 코드를 이용해서 컨테이너를 설정할 수 있는 기능을 제공하는 프로젝트이다
        (2) 어노테이션을 이용해 스프링컨테이너에 새로운 빈 객체를 제공할 수 있다
        (3) no XML : Bean 을 등록하고 Bean들 간의 연결 설정을 자바 코드 내부에 하므로 XML을 전혀 사용하지 않는다
	

```

### 5) Annotation

```
1. Annotation 의미 ;

2. 종류
	1) jUnit에서 테스트를 지원
        (1) @After : @Test 메소드가 실행된 후 실행된다
        (2) @BeforeClass : @Test 메소드 보다 먼저 한번만 수행되어야 할 경우에 사용하면 된다
        (3) @AfterClass : @Test 메소드 보다 나중에 한번만 수행되여야 할 경우에 사용하면 된다
        
    2) Spring-test에서 테스트 지원
    	(1) @RunWith(SpringJUnit4ClassRunner.class) : jUnit 프레임워크 테스트 실행방법을 확장할 때 사용하는 어노테이션이다. SpringJUnit4ClassRunner 클래스를 지정해주면 jUnit이 테스트를 진행하는 중에 ApplicationContext를 만들고 관리하는 작업을 진행해준다. 이때 각각의 테스트 별로 객체가 생성되더라도 싱글톤의 ApplicationContext를 보장한다
    	(2) @ContextConfiguration : 스프링 빈 설정 파일의 위치를 지정할 때 사용한다
    	(3) @Autowired : 스프링 DI에서 사용되는 특별한 어노테이션이다. 해당 변수에 자동으로 빈을 매핑 해주므로 GenericXmlApplicationContext를 사용할 필요가 없다.
    	
    3) Bean 등록
    	(1) @Component : 컴포넌트를 나타내는 일반적인 스테레오 타입으로 <bean> 태그와 동일한 역할을 한다
        (2) @Repository : 퍼시스턴스 레이어, 영속성을 가지는 속성을 가진 클래스
        (3) @Service : 서비스 레이어, 비즈니스 로직을 가진 클래스
        (4) @Controller : 프레젠테이션 레이어, 웹 어플리케이션에서 웹 요청과 응답을 처리하는 클래스
        (5) @Bean : 새로운 빈 객체를제공할 때 사용되며 메서드의 이름을 식별값으로 사용된다
        (6) @Configuration : 해당 어노테이션을 설정하면 스프링 IoC 컨테이너가 해당 클래스를 bean 정의의 설정을 사용하는 것이 된다.
        
    4) Bean 의존관계 주입
    	(1) @Autowired : 정밀한 DI이 필요한 경우에 유용하다. 변수, setter메서드, 생성자, 일반 메서드에 적용이 가능하다. 의존하는 객체를 주입할 때 주로 Type을 이용하게 된다.
    	(2) @Resource : 어플리케이션에서 필요로 하는 자원을 자동 연결할 때 사용된다. 변수, setter메서드에 적용이 가능하다. 의존하는 객체를 주입할 때 주로 Name을 이용하게 된다.
    	(3) @Value : 단순한 값을 주입할 때 사용되는 어노테이션
    	(4) @Qualifier : @Autowired는 타입을 찾아서 의존성을 주입한다. 동일한 타입의 Bean 객체가 여러 개 존재할 때 특정 Bean을 찾기 위해 사용하는 어노테이션


```

### 6) ${}

```
1. property 치환자, ${} : 애플리케이션이 동작하는 환경에 따라 변경될 수 있는 변동 값

2. 특징
	1) 키와 값의 쌍으로 구성되어 있다
	2) <context:property-placehoder>태그에 의해 자동으로 등록되어 PorpertyPlaceHolderConfigure Bean이 값을 자동으로 치환해 준다
```









0416

```
1. resultType => "User" : 컬럼명과 VO의 getter/setter의 이름이 같은 경우
resultMap => 컬럼명과 VO의 getter/setter의 이름이 같지 않은 경우 직접 개발자가 수동으로 매핑을 해주는 것

2. J2EE 기술중에서 Servlet과 JSP(Java Server Page), JSTL(Java Standard Tag Library)
	1) Tomat(Web container) 가 필요하다 : tomcat 서버에서 동작
	2) Servlet은 클래스, JSP는 스크립트에 해당한다
	3) JSP와 비슷한 종류는 php,asp 등이 있다
	4) HTML:그림을 그려준다,CSS: 그림을 예쁘게 해준다,Javascript: 다이나믹한 사용자와 인터랙션 하게 해준다 => 정적인 컨텐츠만 생산할 수 있다. 따라서 HTML에서 UerDAO(DB 연동) 객체 method를 호출할 수 없다. 그 결과, HTML이 Servlet/jsp를 통해 DAO 객체를 부른다
	5) Sevlet과 JSP는 동적인(Dynamic) 컨텐츠를 생산할 수 있다
	6) MVC 패턴(Model/View/Controller) : Separation of Concens(=Responsibility 책임 및 역할), 모든 종류의 코드를 JSP에 작성하면 코드가 버무려져 작성한 개발자를 제외하고는 유지보수가 힘들어진다. 따라서 코드를 MVC 패턴을 기반으로 Web Architecture를 구성한다
	7) Web Architecture의 종류
		(1) 구 모델 :  Model1 아키텍쳐 : Model(Java - Dao,Serivce, VO 모두 포함), View(Back단 : Jsp, HTML), Controller(Model과 Viewㄹ를 연결 : JSP)
		(2) 신 모델 : Model2 아키텍처 : Model(Java - Dao,Serivce, VO 모두 포함), View(Back단 : Jsp, HTML), Controller(Model과 View를 연결 : Servlet)
	8) Spring MVC는 Model2 아키텍처를 사용한다 : Front Controller 역할을 하는 DispatcherServlet 클래스를 제공한다
		
```

new->dynamic web application -> model2Project- > next->web.xml generate 체크 -> finish

URL mapping : 해당 매핑으로 호출하겠다

0417

```
1. OLTP, Online Transaction Processing : 트랜잭션 지향 애플리케이션을 손쉽게 관리할 수 있도록 도와주는 정보시스템의 한 계열로서 일반적으로 데이터 기입 및 트랜잭션 처리를 위해 존재한다.

2. Batch Processing, 일괄 처리 : 컴퓨터 프로그램 흐름에 따라 순차적으로 자료를 처리하는 방식이다. 대량의 데이터를 특정시간에 일괄적으로 처리하는 프로그램이다.

3. Javax.validation : 서버사이드 측에서 사용자가 입력한 정보가 유효한지 검사한다

4. Javax.xml.bind : 
```

