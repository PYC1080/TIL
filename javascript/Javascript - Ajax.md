# Javascript - Ajax

## 1. node.js 기본

### 1) Ajax 개요

* Ajax : Ajax는 특정 프로그래밍 언어나 특정 프레임워크가 아닌 구현하는 방식을 지칭한다. Ajax를 사용하면 페이지를 전환하지 않고 서버에서 데이터를 받아와 사용자에게 보여줄 수 있다.

### 2) 데이터 전송 형식

* 데이터 전송 형식

```
1. csv : Comma Separated Values, 각 항목을 쉼표로 구분해 데이터를 표현하는 방법 
2. XML : HTML 형식처럼 태그로 데이터를 표현
3. JSoN : Javascript Object Notation, 자바스크립트에서 사용하는 객체 형태로 데이터를 표현하는 방법. Ajax를 사용할 때 표준으로 사용되는 데이터 표현 방식
```

* 데이터 전송 형식 비교

| 형식 | 장점                                                  | 단점                                                        |
| ---- | ----------------------------------------------------- | ----------------------------------------------------------- |
| CSV  | 용량이 적다. 따라서 많은 양의 데이터를 전송할 때 좋다 | 가독성이 떨어진다                                           |
| XML  | 가독성이 좋다.                                        | 용량이 크다. 따라서 데이터 양이 커지면 분석 속도가 떨어진다 |
| JSON | 용량도 적고 가독성도 좋다                             | 데이터 양이 커지면 분석 속도가 떨어진다                     |

### 3) node.js 기본

* `REPL(Read Eval Print Loop)` : CMD, Powershell과같은 명령 프롬프트 창

* Module

```
1. 내부 모듈 : 모듈 중에서 Node.js에 기본적으로 있는 모듈을 내부 모듈이라고 부른다.
2. 외부 모듈 : node.js가 기본적으로 갖지 않고 개인 또는 단체가 만들어 배포하는 모듈
```

* 서버 생성 및 실행

```
1. express : 웹 서버를 만들 때 사용하는 외부 모듈
2. app.use() 메서드 : 웹 서버에 기능 부여
```

* 미들웨어 함수 : 요청 오브젝트(request), 응답 오브젝트(response) 그리고 애플리케이션의 요청-응답 주기 중 미들웨어 함수에 대한 액세스 권한을 갖는 함수. 미들웨어 함수는 일반적으로 next 라는 이름의 변수로 표시된다.
* `favicon` : 웹 브라우저 상단에 표시되는 아이콘
* static 미들웨어 : 정적 파일을 제공할 때 사용하는 미들웨어

* route : 사용자의 요청에 따라 사용자가 필요한 정보를 제공하는 것
* app 객체 메서드

```
1. app.get() : 클라이언트 GET요청을 처리
2. app.post() : 클라이언트 POST요청을 처리
3. app.put() : 클라이언트 PuT요청을 처리
4. app.del() : 클라이언트 DELETE요청을 처리
5. app.all() : 클라이언트 모든 요청을 처리
```

* postman : HTTP 요청을 수행하는 크롬 확장 프로그램

* 요청과 매개변수

```
1. 요청 매개변수 (Request Parameter) : 클라이언트가 서버로 전달하는 데이터
2. 요청 매개변수의 종류
	1) 일반 요청 매개변수 : 키=값 블록으로 데이터를 전달하는 방법
	2) 동적 라우트 요청 매개변수 :동적으로 변할 수 있는 부분을 처리하는 라우트를 경로에 직접 입력한다
```

* 웹 요청방식

```
1. GET : 자원 조회
2. POST : 자원 추가
3. PUT : 자원 수정
4. DELETE : 자원 삭제
5. HEAD : 자원의 메타 데이터 조회
6. OPTIONS : 사용 가능한 요청 방식 조회
7. TRACE : 테스트 목적의 데이터 조회
8. CONNECT : 연결 요청
```

* `body parser` 미들웨어 : GET 요청 이외의 요청 방식에는 데이터의 주소가 나타나지 않는다. 따라서 body parser 미들웨어를 사용해 별도로 전달되는 데이터를 분해해서 사용한다

* HTML5 부터는 form 태그로 `PUT` 요청과 `DELETE`요청을 보낼 수 없다.

## 2. XMLHttpRequest

### 1) XMLHttpRequest 객체

* opne() 메서드

```
1. open() 메서드 : XMLHttpRequest 객체의 전송 위치와 방식을 지정
2. open() 메서드 형식 : request.open(<전송방식>,<경로>,<비동기 사용 여부>)
	1) 전송방식 : 'GET', 'POST'
	2) 경로
	3) 비동기 사용 여부
		(1) true : 비동기 사용, 데이터를 받는 동안에도 코드를 지속적으로 실행한다
		(2) false : 동기 사용, 데이터를 받는 동안에는 코드진행이 멈춘다
```

### 2) 동기 방식과 비동기 방식

* 동기 방식 과 비동기 방식

```
1. 동기방식 : 데이터를 서버와 클라이언트가 같은 속도로 연계하여 동작하는 방식을 말한다
2. 비동기 방식 : 데이터를 서버와 클라이언트가 별개의 속도로 연계하여 동작하는 방식을 말한다
```

* ready State 속성

```
0 : request 객체를 만들었지만 open() 메서드로 초기화하지 않았음
1 : request 객체를 만들고 초기화했지만 send() 메서드가 사용되지 않음
2 : send() 메서드를 사용했지만 아직 데이터를 받지 못함
3 : 데이터의 일부만을 받음
4 : 모든 데이터를 받음
```

* HTTP status code

```
1xx : 처리 중
2xx : 성공
3xx : 리다이렉트
4xx : 클라이언트 오류
5xx : 서버 오류
```

### 3) 데이터 요청과 조작

* JSON 요청과 조작 

```
1. eval() 함수를 이용해 자바스크립트 객체로 변환
2. JSON.parse() 메서드를 사용해 JSON 문자열을 분해시킬 수 있다.
```

* XML 요청과 조작

## 3. jQuery Ajax

### 1) jQuery Ajax 메서드

* `$.ajax()`메서드

```
1. 메서드 기능 : Ajax가 성공했을 때 자동으로 success 이벤트를 실행한다
2. 메서드 형태
	1) $.ajax(options)
	2) $.ajax(url, options)
3. 메서드 옵션
	1) async : Boolean형. 동기 및 비동기를 지정
	2) complete(xhr,status) : Function형. Ajax 완료 이벤트 리스너를 지정
	3) data : Object, String형. 요청 매개변수를 지정
	4) error(xhr, status, error) : Function형. Ajax 실패 이벤트 리스너를 지정
	5) jsonp : String형, JSONP 매개변수 이름을 지정
	6) jsonpCallback : String, Function 형. JSONP 콜백 함수 이름을 지정
	7) success(data,status,xhr) : Function, Array 형. Ajax 성공 이벤트 리스너를 지정
	8) timeout : Number형. 만료 시간을 지정
	9) type : String형. 'GET' 또는 'POST'등을 지정
	10) url : String형. 대상 URL을 지정
```

* `$.get()`메서드

```
1. 메서드 기능 : get방식으로 Ajax를 수행한다
2. 메서드 형태 : $.get(url, (data,) function(data, textStatus, jqXHR){})
```

* `$.post()`메서드

```
1. 메서드 기능 : post방식으로 Ajax를 수행한다 
2. 메서드 형태 : $.post(url, (data,) function(data, textStatus, jqXHR){})
```

* `$.getJSON()`메서드

```
1. 메서드 기능 : get방식으로  Ajax를 수행해 JSON데이터를 가지고 온다
```

* `$.getScript()`메서드

```
1. 메서드 기능 : get방식으로 Ajax를 수행해 Script 데이터를 가지고 온다
```

* `$(selector).load()`메서드

```
1. 메서드 기능 : Ajax를 수행하고 선택자로 선택한 문서 객체 안에 집어 넣는다
```

* `$(selector).serialize()`메서드

```
1. 메서드 기능 : 입력 양식의 내용을 요청 매개변수 문자열로 만든다
```

* `$(selector).serializeArray()`메서드

```
1. 메서드 기능 : 입력 양식의 내용을 객체로 만든다
```

* `$.param()`메서드

```
1. 메서드 기능 : 객체의 내용을 요청 매개변수 문자열로 만든다
```

