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

```
1. jQuery Ajax 메서드
	1) $.ajax()
		(1) 기능 : Ajax가 성공했을 때 자동으로 success 이벤트를 실행한다
		(2) 형태
			a) $.ajax(options)
			b) $.ajax(url, options)
		(3) 메서드 옵션
			a) async : Boolean형. 동기 및 비동기를 지정
			b) complete(xhr,status) : Function형. Ajax 완료 이벤트 리스너를 지정
			c) data : Object, String형. 요청 매개변수를 지정
			d) error(xhr, status, error) : Function형. Ajax 실패 이벤트 리스너를 지정
			e) jsonp : String형, JSONP 매개변수 이름을 지정
			f) jsonpCallback : String, Function 형. JSONP 콜백 함수 이름을 지정
			g) success(data,status,xhr) : Function, Array 형. Ajax 성공 이벤트 리스너를 지정
			h) timeout : Number형. 만료 시간을 지정
			i) type : String형. 'GET' 또는 'POST'등을 지정
			j) url : String형. 대상 URL을 지정
	2) $.get()
		(1) 기능 : get방식으로 Ajax를 수행한다
		(2) 형태 : $.get(url, (data,) function(data, textStatus, jqXHR){})
	3) $.post()
		(1) 기능 : post방식으로 Ajax를 수행한다 
		(2) 형태 : $.post(url, (data,) function(data, textStatus, jqXHR){})
	4) $.getJSON()
		(1) 기능 : get방식으로  Ajax를 수행해 JSON데이터를 가지고 온다
		(2) 형태
	5) $.getScript()
    	(1) 기능 : get방식으로 Ajax를 수행해 Script 데이터를 가지고 온다
    	(2) 형태 :
	6) $(selector).load()
		(1) 기능 : Ajax를 수행하고 선택자로 선택한 문서 객체 안에 집어 넣는다
		(2) 형태 :
    7) serialize()
    	(1) 기능 : 입력 양식의 내용을 요청 매개변수 문자열로 만든다
    	(2) 형태 :
    8) serializeArray()
    	(1) 기능 : 입력 양식의 내용을 객체로 만든다
    	(2) 형태
    9) $.param()
    	(1) 기능 : 객체의 내용을 요청 매개변수 문자열로 만든다
    	(2) 형태 :
    10) ajaxComplete(function)
    	(1) 기능 : Ajax 요청이 완료될 때 함수를 실행한다. document 객체에만 사용할 수 있다.
    	(2) 형태 : 
    11) ajaxError(function)
    	(1) 기능 : Ajax 요청이 완료될 때 함수를 실행한다. document 객체에만 사용할 수 있다.
    	(2) 형태 : 
    12) ajaxSend(function)
    	(1) 기능 : Ajax 요청을 보낼 때 함수를 실행한다. document 객체에만 사용할 수 있다.
    	(2) 형태 : 
    13) ajaxStart(function)
    	(1) 기능 : Ajax 요청을 시작할 때 함수를 실행한다. document 객체에만 사용할 수 있다.
    	(2) 형태 : 
    14) ajaxStop(function)
    	(1) 기능 : Ajax 요청 멈출 때 함수를 실행한다. document 객체에만 사용할 수 있다.
    	(2) 형태 : 
    15) ajaxSuccess(function)
    	(1) 기능 : Ajax 요청이 성공할 때 함수를 실행한다. document 객체에만 사용할 수 있다.
    	(2) 형태 : 
2. jQuery Ajax로 입력 양식을 전송하는 방법
	1) 각각의 입력 양식에서 value 속성을 직접 가져온 뒤 URL을 생성한다.
	2) 각각의 입력 양식에서 value 속성을 가져온다. 그런 다음 value 속성을 이용해 객체를 만들고 param() 메서드를 사용해 쿼리로 만든 후에 ajax와 관련된 메서드의 data 속성을 넣는다.
	3) 각각의 입력 양식에서 value 속성을 가져온 다. 가져온 속성을 이용해 객체를 만들고 곧바로 ajax 고나련 메서드의 data 속성에 집어넣는다.
	4) serialize() 메서드를 사용해 입력 양식에 적힌 값을 쿼리 문자열로 바꾼다
	5) serializeArray() 메서드를 사용해 입력 양식에 적힌 값을 객체로 만든다. 이어서 Ajax관련 메서드의 data 속성에 넣는다
```

## 4. MySQL 데이터베이스

### 1) MySQL

```mysql
1. 데이터베이스
	1) 생성 : CREATE DATABASE database_name;
	2) 사용선언 : USE database_name
	3) 삭제 : DROP DATABASE database_name; 
2. 테이블
	1) 필드와 레코드
		(1) 필드
			a) 의미 : 테이블의 세로에 위치한 열
			b) 속성
				(a) NOT NULL : 반드시 입력하게 만든다
				(b) AUTO_INCREMENT : 자동으로 숫자가 증가하게 만든다
				(c) PRIMARY KEY : 기본 키로 지정한다
		(2) 레코드
			a) 의미 : 테이블의 가로에 위치한 행
	2) 생성 : CREATE TABLE table_name(필드명 자료형 속성, 필드명 자료형 속성, ...); 
	3) 정보 확인 : DESCRIBE table_name;
	4) 삭제 : DROP TABLE table_name;

3. 데이터
	1) 입력 : INSERT INTO 테이블명(필드, 필드, ...) VALUE('데이터', '데이터', ...)
	2) 조회 : SELECT 필드, 필드, ... FROM 테이블 option; 
	3) 수정 : UPDATE table_name SET 변경 내용 WHERE 조건 (WHERE 조건 미 입력시 모든 데이터 속성이 변경된다)
	4) 삭제 : DELETE FROM table_name WHERE 조건 (WHERE 조건 미 입력시 모든 데이터가 삭제된다)
    2) option
    	(1) WHERE option : 조건식
        	a) option
            	(a) 관계 연산자
                	ㄱ) = : 좌변과 우변이 같다
                    ㄴ) != or <> : 좌변과 우변이 다르다
                    ㄷ) < : 좌변보다 우변이 크다
                    ㄹ) > : 좌변이 우변보다 크다
                    ㅁ) <= : 좌변이 우변이랑 같거나 작다
                    ㅂ) >= : 좌변이 우변이랑 같거나 크다
                (b) 논리 연산자
                	ㄱ) OR : 논리합 연산자
                    ㄴ) AND : 논리곱 연산자
    	(2) LIKE option : 일부 조건식
        	a) 옵션
            	(a) '%' : 추가로 몇 글자 인지 모르는 경우 모든 글자를 선택하는 옵션
                (b) '_' : 추가로 몇 글자로 제한 할 것인지 선택하는 옵션
       	(3) ORDER BY field_name option : 정렬
        	a) option
            	(a) 오름차순 : (ASC); 
                (b) 내림차순 : DESC;
        (4) LIMIT 가져올 갯수, 시작 순번 : 특정 위치에 있는 데이터 선택
        (5) GROUP BY : 데이터 그룹화

```

### 2) MySQL Module

```
1. createConnection(options)
	1) 기능 : 데이터베이스에 접속한다
	2) 옵션
		(1) host : 연결할 호스트를 나타낸다
		(2) port : 연결할 포트를 나타낸다
		(3) user : 사용자 이름을 나타낸다. 필수로 입력할 요소이다
		(4) password : 사용자 비밀번호를 나타낸다. 필수로 입력할 요소이다
		(5) database : 연결할 데이터베이스를 나타낸다
		(6) debug : 디버그 모드를 사용할지를 나타낸다
2. query(sql[,callback])
	1) 기능 : 쿼리 문장을 실행한다
3.
```

## 5. 크로스 도메인

```
1. 개요
	1) CORS(Cross-Origin Rescure Sharing) : 서로 다른 도메인끼리 통신하는 것을 의미한다. 웹 블라우저는 보안상의 위협으로부터 사용자를 보호하기 위해 이런 통신 유형을 막는다.
	2) JSONP(JSON with Padding) : 서로 다른 도메인끼리 어떻게 해서라도 통신을 하기 위해 만들어진 방법
	
```

## 6. Reverse Ajax

```
1. Reverse Ajax : 서버에서 원하는 경우에 클라이언트에게 데이터를 제공하는 방법
2. Ajax 기법
	1) Polling : 주기적인 타이머를 이용해 서버에게 변경된 사항이 있는지 계속 Ajax요청으로 물어보는 방식
	2) Long Polling : 클라이언트가 서버에게 Ajax 요청을 하면 서버가 이를 이벤트가 발생하기 전까지 붙잡고 있는 방식
	3) Streaming(comet) : 서버가 원하는 순간에 데이터를 전송한다. 가장 완벽한 Reverse Ajax 방식
```

