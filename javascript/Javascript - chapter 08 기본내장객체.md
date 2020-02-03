# Javascript - chapter 08 기본내장객체

## 8.1 기본 자료형과 객체의 차이점

* 기본 자료형과 객체의 차이점 : 기본 자료형은 객체가 아니므로 객체와 달리 속성과 메서드를 추가할 수 없다.

* 기본 자료형에 속성이나 메서드를 추가하는 방법 : `prototype`을 사용한다

#### 코드 8-3 : 생성자 함수에 메서드 추가

```html
<!DOCTYPE html>
<html>
    <head>
        <script>
            let primitiveNumber = 273;
            let objectNumber = new Number(273);

        Number.prototype.method = function(){
            return 'Method on Prototype';
        };

        let output = '';
        output += primitiveNumber.method() + '\n';
        output += objectNumber.method();

        alert(output);
        </script>
    </head>
    <body>
        
    </body>
</html>

```

#### 결과 - 코드 8-3 : 생성자 함수에 메서드 추가

![1  코드 8-3 결과](https://user-images.githubusercontent.com/55272324/73637354-6b31d000-46ab-11ea-877b-e5002417e1c1.PNG)





## 8.2 Object 객체

* `Object` 객체 : 자바스크립트의 최상위 객체

### (1) 생성

* Ojbect 생성자 함수로 만든 인스턴스는 자바스크립트의 가장 기본적인 내장 객체에 해당한다.
* Object 객체의 생성 방법

```html
1. let object = {};
2. let object = new Object();
```



### (2) 속성과 메서드

* Ojbect 객체의 메서드

```html
1. constructor() : 객체의 생성자 함수를 나타낸다
2. hasOwnProperty(name) : 객체가 name 속성이 있는지 확인한다
3. isPrototypeof(object) : 객체가 object의 프로토타입인지 검사한다
4. propertyEnumerable(name) : 반복문으로 열거할 수 있는지 확인한다
5. toLocaleString() : 객체를 호스팅 환경에 맞는 언어의 문자열로 바꾼다
6. toString() : 객체를 문자열로 바꾼다
7. valueOf() : 객체의 값을 나타낸다
```

#### 코드 8-4,5,6 : Object 객체의 메서드

```html

```



### (3) 자료형 구분



### (4) 모든 객체에 메서드 추가



## 8.3 Number 객체

### (1) 메서드



### (2) 생성자 함수의 속성



## 8.4 String 객체



### (1) 생성



### (2) 기본 속성과 메서드



### (3) HTML 관련 메서드



## 8.5 Array 객체



### (1) 생성



### (2) 속성과 메서드



### (3) 정렬



### (4) 요소 제거



## 8.6 Date 객체



### (1) 생성



### (2) 메서드



### (3) 시간 간격 계산



## 8.7 Math 객체



## 8.8 ECMAScript 5 Array 객체



### (1) 확인 메서드



### (2) 탐색 메서드



### (3) 반복 메서드



### (4) 조건 메서드



### (5) 연산 메서드



## 8.9 ECMAScript 5 String 객체



## 8.10 조금 더 나아가기



### (1)  JSON 객체



### (2) 화살표 함수를 사용한 Array 객체의 메서드 활용 - ECMAScript 6



### (3) underscore 라이브러리



## 연습문제

### 01



### 02



### 03



### 04



### 05

