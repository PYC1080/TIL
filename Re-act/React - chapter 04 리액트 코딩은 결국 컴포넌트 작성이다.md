# Re-act :  chapter 04 리액트 코딩은 결국 컴포넌트 작성이다

> 실전 리액트 프로그래밍 : 리액트 훅부터 Next.js 까지



## 4.1 가독성과 생산성을 고려한 컴포넌트 코드 작성법

### 1) 추천하는 컴포넌트 파일 작성법

#### (1) 코드를 그룹으로 나누고 우선순위에 따라 배치하기

```js
import React, { Component} from 'react';

class Mycomponent extends Component{
    static propTypes= {}; // 1
    state = {} // 2
    construtor(props){} // 3
    componentDidMount(){ } // 4
    componentWillMount(){ } // 4
    requestData(){ } // 5
    onClick=()=> {} // 5
    render(){ 
        const{ prop1, prop2 } = this.props;
        const{ state1, state2 } = this.state;
    } // 6
}

const URL_PRODUCT_LIST = '/api/products'; // 7
function getTotalPrice({price, total}){} // 7

export default Mycomponent;
```

```
1. 파일의 최상단에 속성 값의 타입을 정의한다
2. 상탯값의 초기화 코드를 작성한다
3. 생성자 정의
4. render 메서드를 제외한 생명 주기 메서드 정의
5. render 메서드를 제외한 나머지 메서드를 정의
6. render 메서드 정의
7. 외부 변수 및 함수 정의
```



#### (2) 함수형 컴포넌트 작성하기

```js
Mycomponent.propTypes={}; // 1

function Mycomponent({prop1, prop2}){}; // 2

const URL_PRODUCT_LIST = '/api/products'; // 3
function getTotalPrice({price, total}){}  // 3

export default Mycomponent; //4
```

```
1. 속성값 타입을 정의
2. 함수형 컴포넌트의 매개변수는 명명된 매개변수로 정의
3. 컴포넌트에서 사용되는 변수, 함수는 컴포넌트 코드 밑에 작성
4. 컴포넌트를 외부로 내보내는 코드는 파일 가장 밑에 작성
```

### 2) 속성값 타입 정의하기 : prop-types

* `prop-types` : 동적 타입 언어를 사용해야만 하는 경우 리액트에서 속성 값의 타입을 정의할 수 있는 prop-types 패키지를 사용한다. 단, prop-types에서 함수의 매개변수와 반환값에 대한 타입 정보는 정의 할 수 없다.

### 3) 가독성을 높이는 조건부 렌더링 방법

* 조건부 렌더링(conditional rendering) : 랜더 함수 내부에서 특정 값에 따라 선택적으로 렌더링 하는 것 

#### (1) 연산자를 이용한 조건부 렌더링

* `&&` 와 `||` :  두 연산자 모두 마지막으로 검사한 값을 반환한다.

```
1. && : 첫 거짓값 또는 마지막 값을 반환한다
	1) 변수가 숫자 타입인 경우 0은 false 값이다
	2) 변수가 문자 타입인 겨우 빈 문자열을 false 값이다
2. || : 첫 참값 또는 마지막 값을 반환한다
```




## 4.2 이벤트 처리 함수 작성하기

### 1) 클래스 필드를 이용해 이벤트 처리 메서드 작성하기

* 함수 바인딩이 필요한 이유

```
클래스형 컴포넌트의 이벤트 처리 메서드는 자식 컴포넌트 또는 DOM 요소의 속성값으로 전달된다. 이때 이벤트 처리 메서드와 this 객체를 바인딩하지 않으면 메서드 호출 시 엉뚱한 객체를 가리킬 수 있다.
```



## 4.3 컴포넌트의 공통 기능 관리하기



## 4.4 핸더링 속도를 올리기 위한 성능 최적화 방법



