# MyBatis - 기초

> https://mybatis.org/mybatis-3/ko/index.html

## 1. MyBatis  개요 및 특징

```
0. JDBC의 문제점 : JDBC는 SQL을 이용하여 DB에 데이터를 입/출력한다. 따라서 소스코드에 SQL문과 결과를 객체로 매핑하는 로직을 포함하여 sQL 개발과 유지보수를 어렵게 한다

1. MyBatis : 자바 오브젝트와 SQL문 사이의 자동 mapping 기능을 지원하는 ORM 프레임워크

2. MyBatis 특징
	1) 쉬운 접근성과 코드의 간결함 : XML 형태로 서술된 JDBC의 모든 기능을 대부분 제공한다. 따라서 수동적인 파라미터 설정과 쿼리 결과에 대한 맵핑 구문을 제거할 수 있다
	2) SQL문과 프로그래밍 코드 분리 : SQL에 변경이 있을 때마다 자바 코드를 수정하거나 컴파일 하지 않아도 되므로 개발자가 아닌 다른사람에게 SQL 작성 관리 및 컴토를 맡길 수 있따
	3) 다양한 프로그래밍 언어로 구현이 가능하다 : Java, C#, .NET, Ruby
	
	
```

* connection pulling : 

