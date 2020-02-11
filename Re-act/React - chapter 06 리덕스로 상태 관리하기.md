# Re-act : chapter06 리덕스로 상태 관리하기 

> 실전 리액트 프로그래밍 : 리액트 훅부터 Next.js 까지

* `redux` : 자바스크립트를 위한 상태 관리 프레임워크

* `redux`를 사용하는 이유

```
1. 컴포넌트 코드로부터 상태 관리 코드를 분리할 수 있다.
2. 서버 렌더링 시 데이터 전달이 간편하다
3. 로컬 스토리지에 데이터를 저장하고 불러오는 코드를 쉽게 작성할 수 있다.
4. 같은 상탯값을 다수의 컴포넌트에서 필요로 할 때 좋다.
5. 부모 컴포넌트에서 깊은 곳에 잇는 자식 컴포넌트에 상탯값을 전달할 때 좋다
6. 알림창과 같은 전역 컴포넌트의 상탯값을 관리할 때 좋다
7. 페이지가 전환디어도 데이터는 살아 있어야 할 때 좋다.
```



## 6.1 리덕스 사용 시 따라야 할 세 가지 원칙

### (1) 하나의 객체에 프로그램의 전체 상탯값을 저장한다



### (2) 상탯값을 불변 객체로 관리한다



### (3) 오직 순수 함수에 의해서만 상탯값을 변경해야 한다

## 6.2 리덕스의 주요 개념 이해하기

<img width="778" alt="picture 6-1" src="https://user-images.githubusercontent.com/55272324/74210949-1e647f80-4cd1-11ea-9f0b-b095a8a3b509.PNG">



### (4) 스토어

* 스토어 : 리덕스의 상탯값을 갖는 객체이다.



## 6.3 데이터 종류별로 상탯값 나누기

* `combineReducer` 함수 : reducer 함수를 여러개로 분리할 수 있다.

## 6.4 리액트 상탯값을 리덕스로 관리하기



## 6.5 reselect 패키지로 선택자 함수 만들기



## 6.6 리덕스 사가를 이용한 비동기 액션 처리



_____

# Redux 실습

## 실습1



### 0. 사전 작업

#### (1) 설치

##### 1) create-react-app

```powershell
PS C:\...\ > npx create-react-app redux-test
```

##### 2) redux, react-redux

```powershell
PS C:\...\redux-test> npm install redux react-redux
```



#### (2) 구조

```
redux-test
	ㄴnode_modules
	ㄴpublic
	ㄴsrc
		ㄴactions
			ㄴindex.js
		ㄴcomponents
		ㄴcontianers
			ㄴbooklist.js
		ㄴreducers
			ㄴindex.js
			ㄴreducerbooks.js
			ㄴreduceractivebook.js
	ㄴapp.js
```





### 1. 과정



#### (1)

##### 1) redux-test/src

* App.js

```js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './containers/booklist.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookList />
      </header>
    </div>
  );
}

export default App;

```

* index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

```



##### 2) redux-test/src/actions

##### 3) redux-test/src/components

##### 4) redux-test/src/containers

* booklist.js

```js
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Booklist extends Component{
    
    renderList()
    {
        return this.props.books.map( book => {
            return (
                <li key={book.title}>{book.title}</li>
            )
        })
    }
    
    render()
    {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    };
}

function mapStateToProps(state){
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(Booklist);
```



##### 5) redux-test/src/reducers

* index.js

```js
// src/reducers/index.js -> Root reducer

import {combineReducers} from 'redux';
import BookReducer from './reducerbooks.js';

const rootReducer = combineReducers({
    books: BookReducer,
})

export default rootReducer;
```



* reducerbooks.js
```js
export default function(){
    return [
        {title: 'Javascript'},
        {title: 'Docker and Kubernetes'},
        {title: 'Java programming'},
        {title: 'Microservice Architecture'},

    ]
}
```

##### 6) 결과

<img width="817" alt="1-1 결과" src="https://user-images.githubusercontent.com/55272324/74213444-8f5d6480-4cdc-11ea-9764-c2505d3b6a47.PNG">



#### (2)

##### 1) redux-test/src

* App.js

```js

```

* index.js

```js

```



##### 2) redux-test/src/actions

##### 3) redux-test/src/components

##### 4) redux-test/src/contaienrs

##### 5) redux-test/src/reducers

##### 6) 결과





## 실습 2



### 0. 사전 작업

#### (1) guide

```
1. Reducer
	-Biz logic(데이터 처리, 상태처리)
	-Root reducer에 reducer 추가
	-src/reducers/reducer-books.js
	-src/reducers/reducer-active-book.js
2. src/index.js
	-reducer를 가지고 store 생성
	-app.js 실행 시 store 지정
3. 사용자의 요청 작업(이벤트 등)
	-src/ actions/index.js 등록 - > selectBook
	-Action -> type(BOOK_SELECTED), payload(상탯 값)
4. 사용자 view (or container) component
	-src/containers/book-list.js
	-src/containers/book-detail.js
5. Component하고 Reducer(store) 하고 연결
	-mapStateToProps(state)
	-mapDispatchToProps(dispatch)
	-connect()함수 이용
		-ex1) connect(mapStateToProps, mapDispatchToProps)(BookList)
		-ex2) connect(mapStateToProps)(BookDetail)
```

#### (2) 설치

##### 1) create-react-app

```powershell
PS C:\...\ > npx create-react-app redux-test2
```

#### 2) redux, react-redux

```powershell
PS C:\...\ redux-test2> npm install redux react-redux
```

#### (3) 구조

```
redux-test2
	ㄴnode_modules
	ㄴpublic
	ㄴsrc
		ㄴactions
			ㄴActionTypes.js
			ㄴindex.js
		ㄴcomponents
			ㄴCounter.css
			ㄴCounter.js
		ㄴcontainers
			ㄴbook-list.js
			ㄴCounterContainers.js
		ㄴreducers
			ㄴindex.js
			ㄴreducer-books.js
			ㄴreducer-counter.js
		ㄴutils
			ㄴindex.js
		ㄴApp.css
		ㄴApp.js
		ㄴindex.css
		ㄴindex.js
	ㄴ...
```

### 1. 과정

