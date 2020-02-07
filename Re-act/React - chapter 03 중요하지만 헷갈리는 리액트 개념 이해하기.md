# Re-act : chapter03 중요하지만 헷갈리는 리i액트 개념 이해하기

> 실전 리액트 프로그래밍 : 리액트 훅부터 Next.js 까지



## 3.1 상탯값과 속성값으로 관리하는 UI 데이터



## 3.2 리액트 요소와 가상 돔



## 3.3 생명 주기 메서드

> [생명 주기 메서드를 정리한 사이트](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

* 생명 주기 메서드 : 모든 컴포넌트는 다음과 같은 세 단계를 거친다. 이때 각 단계 속에서 호출되는 메서드를 생명 주기 메서드라 한다.

```
1. 초기화 단계
2. 업데이트 단계
3. 소멸 단계
```

<img width="841" alt="그림3-1 리액트의 각 단계에서 호출되는 생명 주기 메서드" src="https://user-images.githubusercontent.com/55272324/73904821-a537e780-48e0-11ea-8c54-5ec283ec23eb.PNG">

**초기화 단계 **

* 초기화 단계 : 최초에 컴포넌트 객체가 생성될 때 한 번 만 수행.
* 초기화 단계에서 호출되는 생명 주기 메서드의 호출 순서 
  1) constructor() 
  2) static get DerviedStateFromProps() 
  3) render() 
  4) componentDidMount()



**업데이트 단계**

* 업데이트 단계 : 초기화 단계와 소멸 단계 사이에서 반복해서 수행.
* 업데이트 단계에서 호출되는 생명 주기 메서드의 호출 순서
  1) static getDerivedStateFromProps()
  2) shouldComponentUpdate()
  3) render()
  4) getSnapshotBeforeUpdate()
  5) componentDidUpdate()



**소멸 단계**

* 소멸 단계에서 호출되는 생명 주기 메서드
  1) componentWillUnmount()



**예외 발생 시 호출되는 메서드**

1) static getDerivedStateFromError()

2) componentDidCatch()



#### (1) constructor 메서드



## 3.4 콘텍스트 API로 데이터 전달하기



## 3.5 ref속성값으로 자식 요소에 접근하기

