# Spring - Spring Boot Security

```
@generatedValue(strategy = GenerationType.**)0
	1) AUTO : default 값, JPA 구현체가 자동으로 생성 전략을 결정한다
	2) IDENTITY : 기본키 생성을 DB에 위임한다. 예를 들어 MySQL의 경우 AUTO_INCREMENT를 상요해서 기본키를 생성한다
	3) SEQUENCE : DB의 특별한 sequence 오브젝트를 사용해서 기본키를 생성한다
	@SequenceGenerator(name="seq", sequenceName="jpa_sequence")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="seq")
	4) TABLE : key를 생성하는 생성 전용 테이블을 하나 만들고 이를 사용해서 기본키를 생성한다
```

## 1. 소개

```
1. Web security, method security
2. 다양한 인증 방법 지원
	1) Basic 인증
	2) Form 인증
	3) OAuth
	4) LDAP
3. spring boot security 자동 설정
	1) SecurityAutoConfiguration
	2) UserDetailsServiceAutoConfiguration
	3) 모든 요청에 인증이 필요하다
	4) 기본 사용자를 자동으로 생성해준다
		Username : user
		Password : 애플리케이션을 실행할 때마다 랜덤 값 생성해 콘솔에 출력해준다
```

## 2. Basic 인증 구현

```
1. Spring boot security dependencies
<dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-starter-security</artifactId>
</dependency>

2. 
```

