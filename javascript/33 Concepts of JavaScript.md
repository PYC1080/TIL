# 33 Concepts of JavaScript 

> [Original Source](https://github.com/leonardomso/33-js-concepts)

## 1. Call stack

> [자바스크립트 개발자라면 알아야 할 33가지 개념](https://velog.io/@jakeseo_me/2019-03-15-2303-%EC%9E%91%EC%84%B1%EB%90%A8-rmjta5a3xh)

### 1) 콜 스택, Call stack

```
콜 스택은 함수의 호출을 기록하는 자료 구조이다. 기본적으로 프로그램 안에 위치한 곳이다. 어떠한 함수를 실행시키면 스택 위에 무언가를 올리는(push)행위를 하며 해당 함수로부터 반환을 받을 때 스택의 맨 위(pop)를 가져온다. 즉, 콜 스택을 후입 선출 순서로 가져온다. 크롬 브라우저 콘솔에서 빨간색 에러 스택들은 콜스택의 현재 상태를 나타낸다.
```

### 2) 힙, Heap

```
힙은 거의 구조화되지 않은 영역(unstructured)의 메모리이다. 변수와 객체(오브젝트)들의 모든 메모리 할당이 여기서 일어난다.
```

### 3) 큐, Queue

```
메시지 큐는 실행될 콜백함수나 실행될 메시지들에 대한 리스트이다. 자바스크립트 런타임은 메시지 큐를 가지고 있으며 스택이 충분한 공간을 갖고 있을 때, 메시지 큐 밖으로 나오게 되고 메시지가 가지고 있던 함수 목록들이 실행된다. 이렇게 초기 스택 프레임이 만들어진다. 
```

### 4) 이벤트 루프, event loop

```
1. 자바스크립트는 싱글 스레드 언어이다 : JS는 비동기 콜백들을 제외하고는 한 번에 한가지 일만 한다.
```

## 2. Primitive Types

> [33 concepts of js - 자바스크립트의 원시 타입](https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-33%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90-2-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%9B%90%EC%8B%9C-%ED%83%80%EC%9E%85Primitive-Type-%EB%B2%88%EC%97%AD)

### 1) 원시 데이터 타입

```
1. Boolean : true or false
2. null
3. undefined
4. number : 64-bit float (자바스크립트에는 정수 타입이 존재하지 않는다)
5. string
6. symbol : ES6에서 처음 생긴 원시타입이다

6가지 원시 데이터 타입에 더해 ECMAScript 표준은 Object를 정의했다. 따라서 Primitive Type이 아닌것은 Object가 된다. 
```

### 2) 원시 타입

```
1. 원시타입은 불변적이다(Primitive types are immutable) : 원시 타입에는 어떠한 메소드도 붙어있지 않다. 따라서 원시 타입은 자신을 변경할 수 있는 메소드를 갖지 않으므로 원시타입은 변하지 않는 속성(immutable)을 갖는다. 원시 변수를 재할당 하는 것은 실제로 변수에 할당되어있던 원시타입의 값이 바뀌는 것이 아니라 새로운 원시타입의 값이 들어가는 것이다.

2. 원시 타입은 값(value)으로 저장되고 객체들은 참조(reference)로 저장된다
```

### 3) 함수

```
1. 함수 : 특별한 프로퍼티들을 가진 새로운 형태의 객체이다

2. 함수의 조건
    1) 다른 함수의 인자값으로 넘겨질 수 있다.
    2) 변수나 데이터에 할당이 가능하다.
    3) 객체의 리턴 값으로 리턴 가능하다.
```

### 4) 메소드

```
1. 메소드 : 함수와 같이 객체의 프로퍼티이다.
```

### 5) 생성자 함수

```
1. 생성자 함수 : 리턴 값으로 생성하는 함수를 객체 그 자체로서 반환하는 함수이다.
```

### 6) 래퍼 오브젝트(Wrapper Object)

```
1. 래퍼 오브젝트 : String, Number, Boolean, Function과 같은 원시타입을 new 키워드로 생성하면 원시타입에 대한 래퍼 오브젝트가 생성된다. 이렇게 래퍼 오브젝트가 생성되면 원시 데이터 타입도 생성자 함수로도 쓰일 수 있다. (undefined나 null은 래퍼오브젝트가 없다.)
```

### 7) 오토박싱(Auto-Boxing)

```
1. 오토박싱 : 우리가 특정한 원시타입에서 프로퍼티나 메소드를 호출하려 할 때, 자바스크립트는 처음으로 이것을 임시 래퍼 오브젝트로 바꾼 뒤에 프로퍼티나 메소드에 접근하려고 한다. 이 과정에서 원본은 아무런 영향을 받지 않는다.
```

## 3. Value Types and Reference Types

> [33 concepts of JS - 값vs참조](https://velog.io/@jakeseo_me/2019-04-01-1904-%EC%9E%91%EC%84%B1%EB%90%A8-2bjty7tuuf)

```
1. 값에 의한 전달 : Boolean, Null, Undfined, String, Number 와 같은 원시 데이터 타입은 값에 의한 전달을 한다.

2. 참조에 의한 전달 : Array, Function, Object 데이터 타입은 원시 타입이 아닌 값이 할당된 변수들은 그 값으로 향하는 참조를 갖게 한다.

3. 순수 함수, pure functions : 함수 중에 함수 바깥 스코프에 아무런 영향도 미치지 않는 함수를 순수 함수라고 한다. 해당 함수는 바깥 스코프에는 아무런 영향도 끼칠 수 없고 안에서 만들어진 모든 변수들은 함수에서 반환이 실행되는 즉시 가비지 콜렉션 처리가 된다.


```

## 4. Implicit, Explicit, Nominal, Structuring and Duck Typing

### 1) 암묵적 타입 변환 , implicit coercion

```
1. 암묵적 타입 변환 : 예상치 못한 타입을 받았을 때 예상 가능한 타입으로 바꿔준다.
```

### 2) 숫자 표현식에서 숫자가 아닌 값

```
1. 문자열 : 숫자 문자를 가졌다면 어떤 문자열이라도 동등한 숫자로 바뀐다. 만약 문자열에 숫자가 아닌 것을 포함하면 NaN을 리턴한다.

2. +연산자
	1) 수학적인 덧셈
	2) 문자열 합치기
	
3. 객체 : 자바스크립트에서 객체의 대부분의 암묵적 형변환은 결과값으로 [object Object]를 반환한다.

4. true, false, ""
	1) Number(true) : 1
	2) Number(false) : 0
	3) Number("") : 0

5. valueOf 메소드
```

### 3) Falsy와 Truthy

```
1. falsy : false로 형변환을 강제하는 것
	1) false
	2) 0
	3) null
	4) undefined
	5) ""
	6) NaN
	7) -0
2. truthy : true로 형변환을 강제하는 것, falsy 이외에는 전부 true 취급
```

### 4) NaN

```
1. NaN : NaN은 자기 자신과도 같지 않은 유일한 숫자 값이다.
```

## 5. == vs. === vs. typeof



## 6. Function Scope, Block Scope and Lexical Scope



## 7. Expression vs Statement



## 8. IIFE, Modules And Namespaces

## 9. Message Qeue and Event Loop

## 10. setTimeout, setInterval and requestAnimationFrame

## 11. JavaScript Engines

## 12. Bitwise Operators, Type Arrays and Array Buffers

## 13. DOM and Layout trees

## 14. Factories and Classes

## 15. this, call, apply and bind

## 16. new, Constructor, instanceof and Instances

## 17. Prototype Inheritance and Prototype Chain

## 18. Object.create and Object.assign

## 19. map, reduce, filter

## 20. Pure Functions, Side Effects and State Mutation

## 21. Closures

## 22. High Order Functions

## 23. Recursion

## 24. Collections and Generators

## 25. Promises

## 26. async/await

## 27. Data Structures

## 28. Expensive Operation and Big O Notation

## 29. Algorithms

## 30. Inheritance, Polymorphism and Code Reuse

## 31. Design Patterns

## 32. Parital Applications, Currying, Compose and Pipe

## 33. Clean Code

