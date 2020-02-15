# Javascript - chapter 16 이벤트



## 16.1 이벤트 개요



## 16.2 이벤트 연결 기본

* `on()` : jQuery로 이벤트를 연결하는 가장 기본적인 방법

* `on()` 메서드를 사용하는 방법

```
1. $(selector).on(eventName, function(event){})
2. $(selector).on(object)
```



## 16.3 간단한 이벤트 연결

* 간단한 방식으로 이벤트 연결

```
$(selector).method(function(event){});
```

* `hover()` : mouseenter 이벤트와 mouseleave 이벤트를 동시에 연결

## 16.4 이벤트 연결 제거

* `off()` : 이벤트를 제거
* `off()` 메서드 사용 형태

```
1. $(selector).off();
2. $(selector).off(eventName);
3. $(selector).off(eventName, function);
```

* `one()` : 이벤트를 한 번만 연결

## 16.5 매개변수 control



## 16.6 이벤트 객체

* jQuery 에서 이벤트 객체 : 기존 자바스크립트의 이벤트 객체는 웹 브라우저마다 사용 방법은 물론 이벤트 객체에 있는 속성조차 달랐다. 하지만 jQuery가 스스로 이벤트 객체를 정형화 하므로 jQuery의 이벤트 객체는 모든 웹 브라우저에서 같은 방법으로 사용할 수 있으며, 같은 속성을 같는다.

## 16.7 이벤트 강제 발생



## 16.8 기본 이벤트와 이벤트 전달

* 이벤트 객체의 메서드

```
1. preventDefault() : 기본 이벤트를 제거한다
2. stopPropagation() : 이벤트 전달을 제거한다.
```



## 16.9 이벤트 연결 범위 한정



## 16.10 마우스 이벤트



## 16.11 키보드 이벤트



## 16.12 윈도우 이벤트



## 16.13 입력 양식 이벤트



## 16.14 조금 더 나아가기



## 연습문제





