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
0. 사전 설정
	1) JSP를 권장하지 않는 이유
        (1) JAR 패키징할 때 동작하지 않으므로 WAR로 패키징 해야한다
        (2) Sevlet Engine인 Undertow는 JSP를 지원하지 않는다
    2) Thymeleaf 사용 방법
		(1)dependencies 추가
<dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
		(2) URI 태그 추가 
<html xmlns:th="http://www.thymeleaf.org">

1. Introducing Thymeleaf
	1) Thymeleaf?
        (1) Java Template engine : HTML, XML, JavaScript, CSS 및 일반 텍스트를 처리할 수 있는 웹 및 독립형 환경을 위한 최신 서버를 지원하는 웹 템플릿 엔진이다.
        (2) highly-maintainable way of creating templates : Natural templates 개념을 바탕으로 템플릿을 디자인 프로토 타입으로 사용해 디자인 팀과 개발 팀의 격차를 해소한다
        (3) Web Standards in HTML5 : HTML5을 기반으로 설계되어 HTML5 문법으로 서버쪽 로직을 수행하고 필요한 경우 완전 유효성 검사 템플릿을 만들수 있다.
    2) Thymeleaf로 처리가능한 템플릿 종류
    	(1) Markup template mode
    		a) HTML : HTML4, HTML5, XHTML를 지원한다. 템플릿 코드와 구조는 최대한 지원하나 유효성 검사와 수행성 검사는 지원하지 않는다
    		b) XML : 닫히지 않은 태그, 인용되지 않은 속성 등의 코드 형식이 양호하지 않은 경우 예외를 발생시킨다. 그러나 DTD와 XML 스키마에 대한 유효성 검사는 수행되지 않는다
    	(2) Textual Template mode
    		a) Text : Markup natural template을 위한 특별한 구문을 사용할 수 있다.
    		b) JavaScript : Thymeleaf 응용 프로그램에서 자바스크립트 파일을 처리할 수 있다.
    		c) CSS : Thymeleaf 응용 프로그램에서 CSS 파일을 처리할 수 있따
    		d) Raw : 처리되지 않은 템플릿을 처리중인 템플릿에 삽입하는 데 사용된다.
    3) The Standard Dialect : Thymeleaf's core library		
    		
	


4. Standar Expression Syntax
	1) ${}, Variable Expressions : 해당 Context에 포함된 변수들을 사용할 수 있다.
	2) *{}, Selection Variable Expressions : 가까운 DOM에 th:object로 정의된 변수가 있다면 그 변수에 포함된 값을 나타낼 수 있다.
	3) #{}, Message Expressions : 미리 정의된 message.properties 파일이 있을 때 해당 표현식을 사용해 나타낼 수 있따
	4) @{}, Link URL Expressions : 해당 표현식을 사용해 URL을 표현할 수 있다
	5) ~{}, Fragment Expressions : 잘 사용되지 않는다
```

## 6. HtmlUnit

```
1. HtmlUnit
	1) Html template view test를 좀 더 전문적으로 하고 싶은 경우에 사용한다
	2) HtmlUnit은 프로그래밍적으로 Html 사이트와 상호작용할 수 있게 하는 자바 오픈소시이다
	3) 테스트 프레임워크로서 생각할 수 있지만 브라우저와 프로그래밍적으로 상호작용 할 수 있게 하는 확장된 개념이다
	4) 스프링 4 이후로 스프링에 통합되어 MVC 테스트 때 유용하게 사용할 수 있다.
	
2. HtmlUnit 사용법
	1) dependencies
<dependency> 
	<groupId>org.seleniumhq.selenium</groupId>
	<artifactId>htmlunit-driver</artifactId>
	<scope>test</scope>
</dependency>
<dependency> 
	<groupId>net.sourceforge.htmlunit</groupId>
	<artifactId>htmlunit</artifactId>
<scope>test</scope>
</dependency>
```

## 7. 예외처리

```
1. @ExceptionHandler
	1) SpringBoot에서 기본적으로 등록하여 Exception을 처리하는 핸들러
	2) BasicErrorController : 스프링에서 자동적으로 등록하는 기본 예외 처리기
	3) HTML과 JSON 응답을 지원한다
	
2. @ControllerAdvice : 해당 어노테이션을 통해서 이 클래스의 객체가 컨트롤러에서 발생하는 excepetion을 전문적으로 처리하는 클래스라는 것을 명시할 수 있다.
```

## 8. CORS

```
1. CORS, Cross-Origin Resource Sharing : 일반적으로 보안 상의 이슈 때문에 웹에서는 동일 출처 원칙(SOP, Single Origin Policy)을 지켜야 한다. CORS는 이런 SOP를 우회해 서로 다른 origin간에 resource를 share 하기 위한 방법이다.

2. origin
	1) 구조 : URI 스키마 + hostname + 포트 번호
	2) 예시 : http://localhost:8080
		(1) URI 스키마 : http/https
		(2) hostName : localhost
		(3) 포트 번호 : 8080
		
3. @CrossOrigin
	1) @Controller / @RequestMapping 과 함께 사용할 수 있다
	2) 구조 : @CrossOrigin(origins = "http://localhost:8080")
```

