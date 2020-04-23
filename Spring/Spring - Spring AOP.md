# Spring - Spring AOP

## 0. 용어 및 설정

### 1) 용어

```
1. AOP, Aspect Oriented Programming 관점 지향 프로그래밍 : 어떤 로직을 기준으로 핵심적인 관점과 부가적인 관점으로 나누어서 보고 각 관점을 기준으로 각각 모듈화(모듈화 : 어떤 공통된 로직이나 기능을 하나의 단위로 묶는 것)한다. 

2. target : Advice를 적용하는 대상. 핵심기능을 담고 있는 모듈로써 타겟은 부가기능을 부여할 대상이 된다

3. Advice : target에 제공할 부가기능을 담고 있는 모듈로써 실질적인 부가기능을 담은 모듈이나 클래스이다

4. PointCut : 정규표현식에 의거해 Advice를 적용할 target 메서드를 선별하는 것. Join Point의 상세한 스펙을 정의해 Advice가 더욱 구체적으로 실행될 지점을 정할 수 있게 된다.

5. Join Point : Adivce가 적용될 수 있는 위치. 끼어들 수 있는 지점, 메서드 진입 지점, 생성자 호출 시점, 필드에서 값을 꺼내올 때 등 target 객체가 구현한 인터페이스의 모든 메서드가 조인 포인트가 된다.

6. Aspect (= Advice + PointCut) : 흩어진 관심사(소스 코드상 부분을 계속 반복해서 쓰는 코드)를 AOP의 기본 모듈화 한 것. Aspect는 주로 부가기능을 모듈화 하며 싱글톤 형태의 객체로 존재한다.

7. Adivsor (= Advice +PointCut) : Aspect와 같은 의미이지만 Spring AOP에서만 사용되는 특별한 용어이다.

8. Weaving : PointCut에 의해서 결정된 target의 Join Point에 Advice를 삽입하는 과정이다. 해당 과정을 통해 AOP의 핵심기능(target)의 코드에 영향을 주지 않으면서 필요한 부가기능(Advice)을 추가할 수 있도록 해주는 핵심적인 처리과정이다.
```

### 2) 설정

* [spring AOP](https://mvnrepository.com/artifact/org.springframework/spring-aop/5.2.5.RELEASE)

```
<!-- https://mvnrepository.com/artifact/org.springframework/spring-aop -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-aop</artifactId>
    <version>${spring.version}</version>
</dependency>
```

* [AspectJ Weaver](https://mvnrepository.com/artifact/org.aspectj/aspectjweaver/1.9.5)

```
<!-- https://mvnrepository.com/artifact/org.aspectj/aspectjweaver -->
<dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
    <version>1.9.5</version>
</dependency>

```

* [AspectJ Runtime](https://mvnrepository.com/artifact/org.aspectj/aspectjrt/1.9.5)

```
<!-- https://mvnrepository.com/artifact/org.aspectj/aspectjrt -->
<dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjrt</artifactId>
    <version>1.9.5</version>
</dependency>
```

## 1. AOP 개요

```
1. AOP, Aspect Oriented Programming : AOP는 애플리케이션의 관심사의 분리(기능의 분리)를 목적으로 한다. 즉, AOP는 핵심적인 기능에서 부가적인 기능을 분리하여 분리한 부가기능을 Aspect라는 독특한 모듈형태로 만들어서 설계하고 개발하는 방법을 일컫는다.

2. 핵심기능과 부가기능
	1) 핵심기능, Core Concens : 업무 로직(Business logic)을 포함하는 기능
	2) 부가기능, Cross-Cutting Concerns : 핵심기능을 도와주는 부가기능(로깅 및 보안 등)
```

## 2. Spring AOP 특징

```
1. Spring은 Proxy 기반 AOP 를 지원한다
	1) Spring은 target 객체에 대한 프록시(Proxy)를 만들어 제공한다
	2) target을 감싸는 프록시는 Runtime에 생성된다
	3) 프록시는 advice target 객체에 적용하면서 생성되는 객체이다
	
2. 프록시가 호출을 가로챈다
	1) 전처리 어드바이스 : 프록시는 target 객체에 대한 호출을 가로챈 다음 advice 부가기능 로직을 수행하고 난 뒤에 target의 핵심 기능 로직을 호출한다.
	2) 후처리 어드바이스 : 프록시가 타겟의 핵심기능 로직 메서드를 호출한 후에 부가기능을 수행한다.
	
3. Spring AOP는 메서드 조인 포인트만 지원한다
	1) Spring은 동적 프록시를 기반으로 AOP를 구현하므로 메서드 조인 포인트만 지원할 수 있다. 즉, 핵심기능의 메서드가 호출되는 런타임 시점에만 부가기능을 적용할 수 있다
	2) 반면에 Aspectj 같은 고급 AOP 프레임워크를 사용하면 다양한 작업 시점에 부가기능을 적용할 수 있다
```

## 3. Spring AOP 구현

### 1) Sprng AOP 구현 방식

```
1. XML 기반의 POJO 클래스를 이용한 AOP 구현 : 부가기능을 제공하는 Advice 클래스르 작성한다. 그리고 XML 설정 파일에 <aop:config>를 이용해 aspect를 설정한다.

2. @Aspect annotation을 이용한 AOP 구현 : @Aspect 어노테이션을 이용해 부가기능을 제공하는 Aspect 클래스를 작성한다. 이때 Aspect 클래스는 advice를 구현하는 메서드와 pointcut을 포함한다. 또한 XML 설정 파일에 <aop:aspectj-autoproxy/>를 설정한다
```

### 2) Advice

```
1. Advice 종류

2. Advice 정의 태그

3. Advice 클래스 정보
```

### 3) JoinPoint

```

```

