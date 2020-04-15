# MyBatis - 기초

> https://mybatis.org/mybatis-3/ko/index.html



## 0. 용어

### 1) Log4j

```
1. 정의 : 프로그램을 작성하는 도중에 로그를 남기기 위해 사용되는 디버그용 자바 기반 로깅 유틸리티이다. 설정 파일에 대상별(패키지별) 레벨 지정이 가능하고 그 등급 이상의 로그만 저장하는 방식을 갖는다

2. 레벨 순서 : 레벨이 높을 수록 하위 레벨의 정보를 포함해서 나타낸다
	1) FATAL : 시스템적으로 심각한 문제가 발생해서 어플리케이션 작동이 불가능한 경우
	2) ERROR : 요청을 처리하는 중 문제가 발생한 경우
	3) WARN : 처리가능한 문제가 발생한 경우. 시스템 에러의 원인이 될 수 있는 경고성 메시지를 나타낸다
	4) INFO : 상태 변경과 같은 정보성 메시지를 나타낸다
	5) DEBUG : 프로그램을 디버깅하기 위한 정보를 지정한다
	6) TRACE : DEBUG 보다 좀 더 상세한 정보
	
3. 방법
	1) log4j 파일을 다우낟아 lib 폴더에 넣는다.
	2) log4j에 관련된 dependency를 추가한다
	3) 콘솔에 어떤 형태로 로그를 찍을 것인지 세팅하는 레이아웃 파일 생성
	4) web.xml 파일에 log4j 리스너와 3번에서 생성한 파일 위치를 정해주는 설정 추가
	5) log4j 코드 작성

4. 페이지 히스토리
	1) %p : Log4j의 레벨 priority가 출력된다
	2) %m : 로그내용이 출력된다
	3) %d : 로깅 이벤트가 발생한 시간을 기록한다
	4) %t : 로그이벤트가 발생된 스레드의 이름을 출력한다
	5) %% : %표시를 출력하기 위해 사용한다
	6) %n : 플랫폼 종속적인 개행문자가 출력된다
	7) %c : 카테고리를 표시한다
	8) %C : 클래스명을 표시한다
	9) %F : 로깅이 발생한 프로그램 파일명을 나타낸다
	10) %l : 로깅이 발생한 Caller의 정보를 나타낸다
	11) %L : 로깅이 발생한 caller의 라인수를 나타낸다
	12) %M : 로깅이 발생한 method의 이름을 나타낸다
	13) %r : 어플리케이션 시작 이후부터 로깅이 발생한 시점의 시간
	14) %x : 로깅이 발생한 thread와 관련된 NDC(Nested Diagnostic Context)를 출력한다
	15) %X : 로깅이 발생한 threa와 관련된 MDC(Mapped Diagnostic Context)를 출력한다
```



### 2) LogBack

### 3) SLF4j

### 4) Thread-safe

```
1. 정의 : 하나의 함수가 한 스레드로부터 호출되어 실행 중 일 때, 다른 스레드가 해당 함수를 호출하여 동시에 함께 실행되더라도 각 스레드에서 함수의 실행 결과가 올바르게 나오는 것

2. 방법
	1) Re-entrancy : 어떤 함수가 한 스레드에 의해 호출되어 실행 중일 때, 다른 스레드가 그 함수를 호출하더라도 그 결과가 각각에게 올바로 주어져야 한다
	2) Thread-local storage : 공유 자원의 사용을 최대한 줄여 각각의 스레드에서만 접근 가능한 저장소들을 사용함으로써 동시 접근을 막는 것
	3) Mutual exclustion : 공유 자원을 꼭 사용해야 하는 경우 해당 자원의 접근을 세마포어 등의 락으로 통제한다
	4) Atomic operations : 공유 자원에 접근할 때 원자 연산을 이용하거나 원자적으로 접근된 접근 방법을 사용함으로써 상호 배제를 구현할 수 있다
```





## 1. MyBatis  개요 및 특징

```
0. JDBC의 문제점 : JDBC는 SQL을 이용하여 DB에 데이터를 입/출력한다. 따라서 소스코드에 SQL문과 결과를 객체로 매핑하는 로직을 포함하여 sQL 개발과 유지보수를 어렵게 한다

1. MyBatis : 자바 오브젝트와 SQL문 사이의 자동 mapping 기능을 지원하는 ORM 프레임워크

2. MyBatis 특징
	1) 쉬운 접근성과 코드의 간결함 : XML 형태로 서술된 JDBC의 모든 기능을 대부분 제공한다. 따라서 수동적인 파라미터 설정과 쿼리 결과에 대한 맵핑 구문을 제거할 수 있다
	2) SQL문과 프로그래밍 코드 분리 : SQL에 변경이 있을 때마다 자바 코드를 수정하거나 컴파일 하지 않아도 되므로 개발자가 아닌 다른사람에게 SQL 작성 관리 및 컴토를 맡길 수 있따
	3) 다양한 프로그래밍 언어로 구현이 가능하다 : Java, C#, .NET, Ruby
	
	
```

* ORM, Object-relational mapping 객체 관계 매핑 : 데이터베이스와 객체 지향 프로그래밍 언어 간의 호환되지 않는 데이터를 변환하는 프로그래밍 기법

dbcp, database connection pooling : 

JNDI, Java Naming Directory Interface : 

* log4j : 

```
1. 정의 : 로그문의 출력을 다양한 대상으로 할 수 있도록 도와주는 도구

2. 특징
	1) 속도 최적화
	2) 이름있는 로그 계층 기반
	3) fail-stop이지만 신뢰성은 없다
	4) thread-safe : 멀티스레드 완경에서도 안전
	5) 융통성이 풍부
```

* LogBack
* SLF4J
* Mapper 인터페이스의 사용

```
1. 초기에는 단순 문자열로 매퍼를 줬다 : 
<mapper namespace="">
	<select id="" parameterType="" resultType="">
	sql 구문
	</select>
</mapper>


User : myspring.user.vo.UserVo 클래스를 줄여쓴 alias 문자열이다
VO에 대한 aliasing 설정은 SQlMapConfig.xml(MyBatis Confg xml)에 설정하였다

2. Mapper 인터페이스를 사용하는 목적
	1) Type safe 하게 Query를 호출해 보자
	
3. SqlSession 인터페이스의 역할 : Mapper XML(sql 문 포함)에 있는 sQL을 실행 및 수행한다

```

* 

```

```

