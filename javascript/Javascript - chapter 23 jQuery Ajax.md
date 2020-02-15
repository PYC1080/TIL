# Javascript - chapter 23 jQuery Ajax

> PART 3 Ajax

## 23.1 기본

* `$.ajax()` 메서드 형태

```
1. $.ajax(options);
2. $.ajax(url, options);
```

* `$.ajax()` 메서드의 옵션

```
1. async : 동기, 비동기를 지정한다 / Boolean형
2. complete(xhr, status) : Ajax 완료 이벤트 리스너를 지정한다 /Function 
3. data : 요청 매개변수를 지정한다 / Object, String
4. error(xr, status, error) : Ajax 실패 이벤트 리스너를 지정한다 / Function 
5. jsonp : JSONP 매개변수 이름을 지정한다 / String
6. jsonpCallback : JSONP 콜백 함수 이름을 지정한다 / String, Function
7. success(data, status, xhr) : Ajax 성공 이벤트 리스너를 지정한다 / Function, Array
8. timeout : 완료 시간을 지정한다 / Number
9. type : 'GET' 또는 'POST' 등을 지정한다 / String 
10. url : 대상 URL을 지정한다 / String
```



## 23.2 추가적인 jQuery Ajax 메서드

* 추가적인 jQuery Ajax 메서드

```
1. $.get() : get 방식으로 Ajax를 수행한다
2. $.post() : post 방식으로 Ajax를 수행한다
3. $.getJSON() : get 방식으로 Ajax를 수행해 JSON 데이터를 가져온다
4. $.getScript() : get 방식으로 Ajax를 수행해 Script 데이터를 가져온다
5. $(selector).load() : Ajax를 수행하고 선택자로 선택한 문서 객체 안에 집어넣는다.
```



## 23.3 XML 조작



## 23.4 데이터 요청 방식



## 23.5 보조 메서드

* 보조 메서드

```
1. serialize() : 입력 양식의 내용을 요청 매개변수 문자열로 만든다 
2. serializeArray() : 입력 양식의 내용을 객체로 만든다
3. $.param() : 객체의 내용을 요청 매개변수 문자열로 만든다.
```



## 23.6 이벤트 관리



## 연습문제

