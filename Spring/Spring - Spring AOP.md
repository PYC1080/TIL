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
	1) Around advice : JoinPoint 앞과 뒤에서 실행되는 Advice. 타겟의 메서드가 호출되기 이전 시점과 이후 시점에 모두 처리해야 할 필요가 있는 부가기능을 정의한다
	2) Before advice : JoinPoint 앞에서 실행되는 Advice. 타겟의 메서드가 실행되기 이전 시점에 처리해야 할 필요가 있는 부가기능을 정의한다
	3) After Returning advice : JoinPoint 메서드 호출이 정상적으로 종료된 뒤에 실행되는 Advice. 타겟의 메서드가 정상적으로 실행된 이후 시점에 처리해야 할 필요가 있는 부가기능을 정의한다
	4) After Thrwoing advice : 예외가 던져질 때 실행되는 Advice. 타겟의 메서드가 예외를 발생한 이후 시점에 처리해야할 필요가 있는 부가기능을 정의한다

2. Advice 정의 태그
	1) <aop:around> : 메서드 호출 이전, 이후, 예외 발생 등 모든 시점에 적용 가능한 어드바이스를 정의한다
	2) <aop:beforer> : 메서드 실행 전에 적용되는 어드바이스를 정의한다
	3) <aop:after-returning> : 메서드가 정상적으로 실행된 후에 적용되는 어드바이스를 정의한다
	4) <aop:after-thrwoing> : 메서드가 예외를 발생시킬 때 적용되는 어드바이스를 정의한다
	5) <aop:after> : 메서드가 정상적으로 실행되는지, 예외를 발생시키는지 여부와 상관없이 어드바이스를 정의한다.

3. Advice 클래스 정보
	1) PerformanceTraceAdvice
		(1) 기능 : 타겟 객체의 메서드 실행 시간을 계산해서 출력해주는 부가기능을 제공한다.
		(2) Advice 유형 : Around advice
		(3) 구현 메서드명 : trace(ProceedingJoinPoin joinPoint)
```

### 3) JoinPoint

```
1. JoinPoint 의미 :Spring AOP 혹은 AspectJ에서 AOP가 적용되는 지점

2. JoinPoint interface의 method
	1) getArgs() : 메서드 args 반환
	2) geThis() : 프록시 객체 반환
	3) getTarget() : 대상 객체 반환
	4) getSignature() : Advice 되는 메서드의 설명을 반환
	5) toString() : Adivce 되는 메서드의 설명을 출력
	
3. JoinPoint interface

4. ProceedingJoinPoint interface
```

### 4) PointCut

#### (1) AspectJ PointCut 표현식

```
AspectJ PointCut 표현식 구조 :

execution([접근제한자 패턴]타입패턴[타입패턴.]이름패턴(타입패턴|"..",...)[throws 예외패턴])

예시)

1. [접근제한자 패턴] 
	1) 기능 : 접근 제한자의 종류를 적는 곳
	2) 항목 : public/private/protected 등
	3) 특징 : 생략이 가능하다
	
2. 타입패턴 
	1) 기능 : 리턴값의 타입을 나타내는 곳
	2) 특징
		(1) 리턴값의 타입패턴은 필수항목이다.
		(2) * 입력시 모든 패키지 이름/클래스/인터페이스 선택이 가능하다

3. [타입패턴.] 
	1) 기능 : 패키지와 타입이름을 포함한 클래스의 타입 패턴이다.
    2) 특징
    	(1) 생략이 가능하다.
        (2) '.'을 사용해 연결한다
        (3) '..'을 사용해 여러 개의 패키지를 선택할 수 있다

4. 이름패턴
	1) 기능 : 메서드의 이름패턴이다.
	2) 특징
		(1) 필수항목이다
		(2) * 입력시 모든 메서드 선택이 가능하다

5. (타입패턴|"..",...) 
	1) 기능 : 메서드 파라미터 타입 패턴이다.
	2) 특징
		(1) '.'을 사용해 메서드 파라미터의 타입을 구분해 순서대로 적는다
		(2) '..'을 사용하면 파라미터의 타입과 개수에 상관없이 모두 다 허용하는 패턴으로 만들 수 있다
		(3) '...'을 이용해 뒷부분의 파라미터 조건만도 생략이 가능하다
		(4) 필수항목이다
		
6. [throws 예외패턴]
	1) 기능 : 예외이름패턴
	2) 특징 : 생략이 가능하다
```

### 5) Aspect

```

```

## 4. Spring transaction