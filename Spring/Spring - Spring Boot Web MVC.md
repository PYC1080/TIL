# Spring - Spring Boot Web MVC

## 0. 설정

```
1. org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration에서 WebMvc와 관련된 자동 설정 클래스가 적용된다.

2. Spring Mvc 확장 : @Configuration + WebMvcConfigurer 인터페이스 구현
```

## 1. RestController

```
1. @ReuestBody
	1) 해당 어노테이션을 통해 HTTP 메시지와 객체 
```

## 2. 정적 리소스

## 3. webjar

## 4. index와 favicon

## 5. Thymeleaf

```
0. JSP를 권장하지 않는 이유
	1) JAR 패키징할 때 동작하지 않으므로 WAR로 패키징 해야한다
	2) Sevlet Engine인 Undertow는 JSP를 지원하지 않는다

1. Thymeleaf
	1) 스프링 부트가 자동 설정을 지원하는 웹 템플릿 엔진이다
	2) HTML 문서에 HTML5 문법으로 서버쪽 로직을 수행하고 적용할 수 있다
	3) HTML 디자인에 전혀 영향을 미치지 않고 웹 템플릿 엔진을 통해 HTML을 생성할 수 있다
	4) 템플릿엔진, th:xx 형식으로 속성을 HTML 태그에 추가하여 값을 처리할 수 있따
	5) JSP, Groovy등 다른 템플릿도 스프링 부트에서 사용가능하지만 Thymeleaf가 가장 많이 사용된다
	
2. Thymeleaf 사용 방법
	1)dependencies 추가
<dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
	2) URI 태그 추가 
<html xmlns:th="http://www.thymeleaf.org">

3. Thymeleaf 표현식
	1) ${}, Variable Expressions : 해당 Context에 포함된 변수들을 사용할 수 있다.
	2) *{}, Selection Variable Expressions : 가까운 DOM에 th:objec로 정의된 변수가 있다면 그 변수에 포함된 값을 나타낼 수 있다.
	3) #{}, Message Expressions : 미리 정의된 message.properties 파일이 있을 때 해당 표현식을 사용해 나타낼 수 있따
	4) @{}, Link URL Expressions : 해당 표현식을 사용해 URL을 표현할 수 있다
```

## 6. HTMLUnit

```

```

## 7. 예외처리

```

```

## 8. CORS

```

```

