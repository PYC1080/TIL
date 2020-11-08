# CORS - Cross Origin Resouce Sharing

## 0. 참고 자료

*  [MDN - 교차 출처 리소스 공유 (CORS)](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS#%EC%9D%B4_%EA%B8%80%EC%9D%80_%EB%88%84%EA%B0%80_%EC%9D%BD%EC%96%B4%EC%95%BC_%ED%95%98%EB%82%98%EC%9A%94)
* [CORS](https://homoefficio.github.io/2015/07/21/Cross-Origin-Resource-Sharing/)

## 1.  CORS 개념



## 2 . CORS 요청의 종류

### 1) Simple Request

```
1. 조건 : 3가지 조건을 모두 만족해야 한다
	1) GET, HEAD, POST 중의 한 가지 방식을 사용해야 한다.
	2) POST 방식일 경우 Content-type이 아래 셋 중 하나여야 한다.
		(1) application/x-www-form-urlencoded
		(2) multipart/form-data
		(3) text/plain
	3) 커스텀 헤더를 전송하지 말아야 한다
	
2. 방식 : 서버에 1번 요청하고 서버도 1번 회신하는 것으로 처리가 종료됨
```

### 2) Preflight Request

```
1 조건 : Simple Request 조건에 해당하지 않으면 브라우저는 Preflight Request 방식으로 요청한다

2. 방식 : 예비 요청과 본 요청으로 나뉘어 전송된다. 먼저 서버에 예비 요청(Preflight Request)를 보내고 서버는 예비 요청에 대해 응답한다. 그 다음에 본 요청(Actual Request)을 서버에 보내고 서버도 본 요청에 응답한다.
 하지만, 예비 요청과 본 요청에 대한 서버단의 응답을 프로그래머가 프로그램 내에서 구분하여 처리하는 것은 아니다. Access-control 계열의 Response header 만 적절지 정해주면 본 요청 처리는 서버가 스스로 처리한다.
```

### 3) Credential Request

```
1. 조건
	1) Response Header에 Access-control-Allow-Credentials: true 를 반드시 포함해야한다.
	2) Access-Control-Allow-Credentials 헤더의 값에는 *가 오면 안되고 구체적인 도메인이 와야한다.
	3) xhr.withCredentials = true를 지정해서 credential 요청을 보낼 수 있다.

2. 방식 : HTTP Cookie와 HTTP Authenticaton 정보를 인식할 수 있게 해주는 요청이다. 
```

### 4) Non-Credential Request 

```
1. 조건
	1) xhr.withCredentials = true를 지정하지 않는다.

2. 방식 : CORS 요청은 기본적으로 Non-Credentials Request이다.
```

## 3. CORS 관련 HTTP Response Headers


```
1. Access-Control-Allow-Origin
	1) Response header : Access-Control-Allow-Origin : <origin>|*
	2) 기능 : <origin>에는 요청 도메인의 URI를 지정한다. 만약 모든 도에민으로부터 서버 리소스 접근을 허용하려면 *를 지정한다. Request with Credential의 겨웅에는 *를 사용할 수 없다.
	
2. Access-Control-Expose-Headers
	1) Response header : Access-Control-Expose-Headers: Content-Length, X-My-Custom-Header, X-Another-Custom-Header
	2) 기능 : 기본적으로 브라우저에게 노출이 되지 않지만, 브라우저 측에서 접근할 수 있게 허용해주는 헤더를 지정한다.

3. Access-Control-Max-Age
	1) Response header :  Access-Control-Max-Age:<delta-seconds>
	2) 기능 : Preflight Request의 결과가 캐쉬에 얼마나 오래동안 남이있는지를 나타낸다.
	
4. Access-Control-Allow-Credentials
	1) Response header : Access-Control-Allow-Credentials: trul|false
	2) 기능 : Request with Credential 방식이 사용될 수 있는지를 지정한다. Access-Control-Allow-Credentials: false를 포함하면, 본 요청은 Request with Credential을 보낼 수 없다.
	
5. Access-Control-Allow-Methods
	1) Response header : Access-Control-Allow-Methods: <method>[, <method>]*
	2) 기능 : 예비 요청에 대한 Response Header에 사용되며, 서버의 리소스에 접근할 수 있는 HTTP Method 방식을 지정한다.
	
6. Access-Control-Allow-Headers
	1) Response header : Access-Control-Allow-Headers: <field-name>[, <field-name>]*
	2) 기능 : 예비 요청에 대한 Response Header에 사용되며, 본 요청에서 사용할 수 있는 HTTP Header를 지정한다.
```

## 4. CORS 관련 HTTP Request Headers

```
1. Origin 
	1) Request header : Origin : <origin>
	2) 기능 : Corss-site 요청을 날리는 요청 도메인 URI. Access Control이 적용되는 모든 요청에 Origin 헤더는 반드시 포함된다.
	
2. Access-Control-Request-Method
	1) Request header : Access-Control-Request-Method: <method>
	2) 기능 : 예비 요청을 보낼 때 포함되어, 본 요청에서 어떤 HTTP Method를 사용할 지 서버에게 알려준다.
	
3. Access-Control-Request-Headers
	1) Request header : Access-Control-Request-Headers
	2) 기능 : 예비 요청을 보낼 때 포함되어, 본 요청에서 어떤 HTTP Header를 사용할 지 서버에게 알려준다.
```

### 
