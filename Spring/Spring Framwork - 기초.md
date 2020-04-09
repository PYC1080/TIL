# Spring Framwork - 기초

## 0. 용어

### 1) IoC, 제어의 역전

> Inversion Of Control

```
1. 의미 : 인스턴스 생성부터 소멸까지의 인스턴스 생명주기 관리를 개발자가 아닌 컨테이너가 대신 해준다. 컨테이너 역할을 제어 권한을 가진 프레임워크가 하고 개발자는 핵심 코드에 역량을 집중 할 수 있게 된다.

2. 특징
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

3. singletone 패턴 : 
```

## 2. Spring framework

경량급 : framework 등장 이전에는 EJB 기술을 사용했으며 해당 기술은 반드시 WAS 위에서 돌려야 했다. 이런 의존적인 상황을 낮추기 위해 spring framework는 EJB도 WAS도 필요없이 가볍게 돌리게 해준다.

pojo , plain old java object :  오래된 방식의 간단한 자바 오브젝트. Java EE 등의 중량 플레임워크들을 사용하게 되면서 해당 프레임워크에 종속된 무거운 객체를  만들게 된 것에 반발하여 사용되게 된 용어