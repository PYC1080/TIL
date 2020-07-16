# Re-act : chapter03 중요하지만 헷갈리는 리i액트 개념 이해하기

> 실전 리액트 프로그래밍 : 리액트 훅부터 Next.js 까지



## 3.1 상탯값과 속성값으로 관리하는 UI 데이터

### 1) 

### 2) 컴포넌트의 속성값과 상탯값

#### (1) 속성값과 상탯값으로 관리하는 UI 데이터

* 컴포넌트 상탯값 : 해당 컴포넌트가 관리하는 데이터
* 컴포넌트 속성값 : 부모 컴포넌트로부터 전달받는 데이터
* React - UI 데이터 : 리액트의 UI 데이터는 반드시 상탯값과 속성값으로 관리해햐 한다. 그렇지 않으면 UI데이터가 변경되더라도 화면이 갱신되지 않을 수 있다 

**code 3-4**

1) ch03/src/App.js

```js
import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <MyComponent/>
  );
}

export default App;
```

2) ch03/src/MyComponent.js

```js
import React from 'react';

class MyComponent extends React.Component{
    state = {color : 'red'}
    onClick = () => {
        this.setState({ color: 'blue'});
    }
    render (){
        return(
            <button
                style={{backgroundColor: this.state.color}} onClick={this.onClick}
            >
                좋아요
            </button>
        )
    }
}

export default MyComponent
```

**result - code3-4**

![2code 3-4 result1](https://user-images.githubusercontent.com/55272324/74601556-dd120c80-50e2-11ea-845c-2b466b403ea6.PNG)
![code 3-4 result1](https://user-images.githubusercontent.com/55272324/74601557-ddaaa300-50e2-11ea-8685-4a5711b6c6bd.PNG)

#### (2) setState 메서드 이해하기

* `setState` : 클래스형 컴포넌트에서 상탯값을 변경할 때 호출하는 메서드이다. setState 메서드로 입력된 객체는 기존 상탯값과 병합된다.

## 3.2 리액트 요소와 가상 돔

* 리액트 요소(element) : 리액트가 UI를 표현하는 수단
* 가상 돔(virtual dom) : 빠른 랜더링을 위해 돔 변경을 최소화 하고자 리액트는 가상 돔을 올려 놓고 이전과 이후의 가상 돔을 비교해 변경된 부분만 실제 돔에 반영하는 돔을 사용한다.

### 1) 리액트 요소 이해하기

* 리액트 요소는 불변 객체이기 때문에 속성 값을 변경할 수 없다
* 리액트는 전달된 리액트 요소를 이전의 리액트 요소와 비교해서 변경된 부분만 실제 돔에 반영한다

### 2) 리액트 요소가 돔 요소로 만들어지는 과정



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

```
1) constructor() 
2) static get DerviedStateFromProps() 
3) render() 
4) componentDidMount()
```

**업데이트 단계**

* 업데이트 단계 : 초기화 단계와 소멸 단계 사이에서 반복해서 수행.
* 업데이트 단계에서 호출되는 생명 주기 메서드의 호출 순서

```
1) static getDerivedStateFromProps()
2) shouldComponentUpdate()
3) render()
4) getSnapshotBeforeUpdate()
5) componentDidUpdate()
```

**소멸 단계**

* 소멸 단계에서 호출되는 생명 주기 메서드

```
1) componentWillUnmount()
```

**예외 발생 시 호출되는 메서드**

```
1) static getDerivedStateFromError()
2) componentDidCatch()
```

### 1) constructor 메서드

* `constructor` 메서드 내부에서 반드시 `super` 함수를 호출해야한다

#### (1) constructor 메서드에서는 setState 메서드를 호출하지 말자 

* `constructor` 메서드 내부에서 호출되는 `setState` 메서드는 무시된다

* 데이터를 가져오기 위해 호출하는 API는 `componentDidMount` 메서드 내부에서 호출하는게 적절하다

#### (2) getDerivedStateFromProps 메서드

* `getDerivedStateFromProps` 메서드 구조

```js
static getDerivedStateFromProps(props, state)
```

* `getDerivedStateFromProps`  특징

```
1. 정적 메서드이기 때문에 함수 내부에서 this 객체에 접근할 수 없다. 오로지 속성값과 상탯값을 기반으로 새로운 상탯값을 만든다
```

#### (3) 속성값 변화에 따른 API 호출

* `componentDidUpdate` 메서드를 사용해 API 호출을 위한 this 객체에 접근할 수 있다

#### (4) 속성값을 입력으로 하는 메모이제이션

* 메모이제이션 : 불필요한 계산량을 줄이기 위한 기술이다. 같은 입력값에 대해 항상 같은 출력값이 나온다는 메모이제이션을 사용할 수 있다.

## 3.4 콘텍스트 API로 데이터 전달하기



## 3.5 ref속성값으로 자식 요소에 접근하기

