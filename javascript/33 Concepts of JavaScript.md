# 33 Concepts of JavaScript 

> [Original Source](https://github.com/leonardomso/33-js-concepts)
>
> [자바스크립트 개발자라면 알아야 할 33가지 개념] (https://velog.io/@jakeseo_me/2019-03-15-2303-%EC%9E%91%EC%84%B1%EB%90%A8-rmjta5a3xh)

## 1. Call stack

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

## 3. Value Types and Reference Types

## 4. Implicit, Explicit, Nominal, Structuring and Duck Typing

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

