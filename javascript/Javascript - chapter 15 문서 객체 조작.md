# Javascript - chapter 15 문서 객체 조작



## 15.1 문서 객체 조작의 개요



## 15.2 문서 객체의 클래스 속성 추가

* `addClass()` : 문서 객체의 클래스 속성을 추가

## 15.3 문서 객체의 클래스 속성 제거

* `removeClass()` : 문서 객체의 클래스 속성을 제거

## 15.4 문서 객체의 속성 검사

* `attr()` : 속성과 관련된 모든 기능을 수행

## 15.5 문서 객체의 속성 추가

* 문서 객체의 속성 추가

```
1. $(selector).attr(name, value);
2. $(selector).attr(name, function(index, attr){});
3. $(selector).attr(object);
```



## 15.6 문서 객체의 속성 제거

* `removeAttr(name)` : 문서 객체의 속성 제거

## 15.7 문서 객체의 스타일 검사

* `css()`: 스타일과 관련된 모든 기능 수행

## 15.8 문서 객체의 스타일 추가

* 문서 객체의 스타일 추가

```
1. $(selector).css(name, value);
2. $(selector).css(name, function(index, style){});
3. $(selector).css(object);
```



## 15.9 문서 객체의 내부 검사

* 문서 객체의 내부 검사 메서드

```
1. html() : 문서 객체 내부의 글자와 고나련된 모든 기능을 수행(HTML 태그 인식)
2. text() : 문서 객체 내부의 글자와 고나련된 모든 기능을 수행
```



## 15.10 문서 객체의 내부 추가

* 문서 객체의 내부 추가

```
1. $(selector).html(value);
2. $(selector).text(value);
3. $(selector).html(function(index, html){});
3. $(selector).text(function(index, text){});
```



## 15.11 문서 객체 제거

* 문서 객체의 제거 메서드

```
1. remove() : 문서 객체를 제거한다
2. empty() : 문서 객체 내부를 비운다
```



## 15.12 문서 객체 생성1

* `$()` : 문서 객체를 생성

## 15.13 문서 객체 생성2

* 텍스트 노드를 갖지 않는 문서 객체를 생성하는 방법 : `attr()` 메서드로 속성 입력

## 15.14 문서 객체 삽입1

* 문서 객체 삽입 메서드1

```
1. $(A).appendTo(B) : A를 B의 뒷부분에 추가한다
2. $(A).prependTo(B) : A를 B의 앞부분에 추가한다
3. $(A).insertAfter(B) : A를 B의 뒤에 추가한다
4. $(A).insertBefore(B) : A를 B의 앞에 추가한다.
```

![picture 15-21](https://user-images.githubusercontent.com/55272324/74587768-0a56b000-503a-11ea-8679-ced61cb3c2aa.PNG)

## 15.15 문서 객체 삽입2

* 문서 객체 삽입 메서드2

```
1. $(A).append(B) : B를 A의 뒷부분에 추가한다
2. $(A).prepend(B) : B를 A의 앞부분에 추가한다
3. $(A).After(B) : B를 A의 뒤에 추가한다
4. $(A).Before(B) : B를 A의 앞에 추가한다.
```



## 15.16 문서 객체 이동

* 문서 객체 이동 : 문서 객체 삽입 메서드를 사용하면 문서 객체를 이동 시킬 수 있다.

## 15.17 문서 객체 복제

* `clone()` : 문서 객체를 복제

* `clone()` 사용 형태

```
1. $(selector).clone()
2. $(selector).clone(Boolean dataAndEvents)
3. $(selector).clone(Boolean dataAndEvents, Boolean deepDataAndEvents)
```



## 연습문제

