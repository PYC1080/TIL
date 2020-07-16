# Spring - Spring Boot Web MVC

## 0. Spring Boot Web MVC

```
1. Web on Servlet Stack : https://docs.spring.io/spring/docs/5.0.7.RELEASE/spring-framework-reference/web.html#spring-web

2. 자동 설정으로 여러가지 기본적인 기능을 제공한다 :org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration에서
WebMvc와 관련된 자동 설정 클래스가 적용된다.

3. 스프링 MVC 확장 : @Configuration + WebMvcConfigurer 인터페이스 구현
```

## 1. RestController

```
1. @ReuestBody
	1) 해당 어노테이션을 통해 HTTP 메시지와 객체를 매핑한다
	2) JsonMessageConverter : HTTP 요청 본문을 Json 객체로 변경하거나 Json 객체를 HTTP 응답으로 변경할 때 사용한다
	3) ContentNegotiatingViewResolver : Controller에서 Json 타입에 대한 정보를 명시하지 않아도 자동적으로 Json 형식으로 데이터를 반환하도록 스프링 부트에서 제공한다.
	4) ViewResolver : Controller에서 반환한 값(ModelAndView or Model)을 통해 뷰를 만드는 역할
	
2. XML message Converter dependencies
<dependency>
 <groupId>com.fasterxml.jackson.dataformat</groupId>
 <artifactId>jackson-dataformat-xml</artifactId>
 <version>2.9.6</version>
</dependency>
```

## 2. 정적 리소스

```
1. 정적 리소스를 지원한다

2. 기본 리소스 위치
classpath:/static
classpath:/public
classpath:/resources/
classpath:/META
-INF/resources

3. 정적 리소스 매핑 설정 변경 : application properties 파일에 spring.mvc.static-path-pattern = 매핑 경로 추가

4. 정적 리소스 매핑 커스터 마이징
	1) Webconfig 파일에 WebMvcConfigurer을 impements 한다
	2) addResourceHandlers 메서드로 커스터 마이징 : 리소스 위치와 매칭될 URL을 등록한다.
```

## 3. webjar

```
1. 용도 : Frontend에서 사용되는 JavaScript library를 Maven에서 다운받을 수 있다

2. 방법
	1) jQuery Library : pom.xml에 dependencies 추가
<dependency>
 <groupId>org.webjars.bower</groupId>
 <artifactId>jquery</artifactId>
 <version>3.3.1</version>
</dependency>
	2) Library 버전을 생략하고 jQuery를 사용하는 경우
<dependency>
<groupId>org.webjars</groupId>
<artifactId>webjars-locator-core</artifactId>
<version>0.36</version>
</dependency>
```

## 4. index와 favicon

```
1. welcome page : index.html을 찾아 있으면 제공하고 없으면 에러페이지를 보여준다

2. Favicon
	1) favicon 만들기 : https://favicon.io/favicon-generator/
	2) 다음 경로에 favicon.ico 파일명 추가 : /resources/static/favicon.ico 
```



## 5. Thymeleaf

```
1. Dependencies & URI tag
	1) Dependencies
<dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
	2) URI 태그 추가 
<html xmlns:th="http://www.thymeleaf.org">

2. Standar Expression Syntax
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

3. Http 에러 코드 값에 따른 에러 페이지 작성 디렉토리 : src/main/resources/static/error/code_number.html
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

