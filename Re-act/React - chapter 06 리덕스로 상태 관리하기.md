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

### 1) 하나의 객체에 프로그램의 전체 상탯값을 저장한다



### 2) 상탯값을 불변 객체로 관리한다



### 3) 오직 순수 함수에 의해서만 상탯값을 변경해야 한다

* `reducer` : 이전 상탯값과 액션 객체를 입력으로 받아서 새로운 상탯값을 만드는 순수 함수이다. 따라서 같은 상탯값과 액션 객체를 입력하면 상상 똑같은 상탯값을 반환한다
* 순수 함수 : 함수 외부의 상태를 변경시키는 부수 효과를 발생시키지 않는 함수

## 6.2 리덕스의 주요 개념 이해하기

<img width="778" alt="picture 6-1" src="https://user-images.githubusercontent.com/55272324/74210949-1e647f80-4cd1-11ea-9f0b-b095a8a3b509.PNG">

### 1) 액션

* 액션 : type 속성값을 가진 자바스크립트 객체. 액션 객체에 `dispatch` 메서드를 넣어서 호출하면 리덕스는 상탯값을 변경하는 작업을 한다.

### 2) 미들웨어

* 미들웨어 : 리듀서가 액션을 처리하기 전에 실행되는 함수다. 디버깅 목적으로 상탯값 변경 시 로그를 출력하거나 리듀서에서 발생한 예외를 서버로 전송하는 등의 목적으로 활용된다.

### 3) 리듀서

* 리듀서 : 액션이 발생했을 때 새로운 상탯값을 만드는 함수이다. 
* 리듀서 작성시 주의점

```
1. 데이터 참조: 리덕스의 상탯값은 불변 객체이기 때문에 언제든지 객체의 레퍼런스가 변경될 수 있으므로 객체를 참조할 때에는 객체의 레퍼런스가 아닌 고유한 ID 값을 이용하는게 좋다.
2. 순수 함수 : 리듀서는 순수 함수이므로 순수 함수가 아닌 함수로 리듀서를 작성하면 안된다.
```

### 4) 스토어

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
PS C:\...\ > npx create-react-app redux-test
```

##### 2) redux, react-redux

```powershell
PS C:\...\redux-test> npm install redux react-redux
```



#### (3) 구조

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

### 1. 코드

#### (1) 기초틀

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



#### (2) 전체 코드

##### 1) redux-test/src

* App.js

```js
import React from 'react';
import './App.css';
import BookList from './containers/booklist.js'
import BookDetail from './containers/bookdetail.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookList />
        <BookDetail />
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

* index.js

```js
export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
```

##### 3) redux-test/src/components

##### 4) redux-test/src/contaienrs

* bookdetail.js

```js
import React, { Component } from 'react'
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book to get started.</div>;
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>                
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        book: state.activebook
    }
}

export default connect(mapStateToProps)(BookDetail);
```

* booklist.js

```js
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { selectBook } from '../actions/index.js'

class Booklist extends Component{
    renderList()
    {
        return this.props.books.map( book => {
            return (
                <li 
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}>
                {book.title}
                </li>
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

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {selectBook: selectBook}, dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
```

##### 5) redux-test/src/reducers

* index.js

```js
import {combineReducers} from 'redux';
import BookReducer from './reducerbooks.js';
import ActiveBook from './redcueractivebook.js';

const rootReducer = combineReducers({
    books: BookReducer,
    activebook: ActiveBook
})

export default rootReducer;
```

* reduceractivebook.js

```js
export default function (state = null, action){
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
        default:
            return state;
    }
}
```

* reducerbooks.js

```js
export default function(){
    return [
        {title: 'Javascript', pages:'101'},
        {title: 'Docker and Kubernetes', pages:'102'},
        {title: 'Java programming', pages:'103'},
        {title: 'Microservice Architecture', pages:'104'}
    ]
}
```

### 2. 결과

![실습1 - 결과1](https://user-images.githubusercontent.com/55272324/74243179-9c9d4200-4d22-11ea-8e2a-35f6a2830c0c.PNG)
![실습1 - 결과2](https://user-images.githubusercontent.com/55272324/74243180-9dce6f00-4d22-11ea-862b-dbfa3b1b2e85.PNG)
![실습1 - 결과3](https://user-images.githubusercontent.com/55272324/74243182-9e670580-4d22-11ea-98a9-eb1e1b103373.PNG)
![실습1 - 결과4](https://user-images.githubusercontent.com/55272324/74243183-9e670580-4d22-11ea-9735-f2e3fdcc4449.PNG)
![실습1 - 결과5](https://user-images.githubusercontent.com/55272324/74243186-9eff9c00-4d22-11ea-85ac-2359e240e62a.PNG)





## 실습 2



### 0. 사전 작업

#### (1) guide

```

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

### 1. 코드

#### (1) redux-test2/src/

* App.js

```js
import React from 'react';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <div>
      Counter
      <CounterContainer />
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

import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
```

#### (2) redux-test2/src/actions

* ActionTypes.js

```js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COLOR = 'SET_COLOR';
```

* index.js

```js
import * as types from './ActionTypes';

export const increment = () => ({
  type: types.INCREMENT
});

export const decrement = () => ({
  type: types.DECREMENT
});

export const setColor = (color) => ({
  type: types.SET_COLOR,
  color
});

```

#### (3) redux-test2/src/components

* Counter.js

```js
import React, { Fragment } from 'react';
import './Counter.css';
import { getRandomColor } from '../utils';

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
  return (
    <Fragment>
      <div className="Counter" 
          style={{backgroundColor: color}}>
        {number}
      </div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={(e) => {onSetColor(getRandomColor())}}>change color</button>
    </Fragment>
  );
};
export default Counter;
```

* Counter.css

```css
.Counter {
  /* 레이아웃 */
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

   /* 색상 */
  color: white;

  /* 폰트 */
  font-size: 3rem;

  /* 기타 */
  border-radius: 100%;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.75s;
}
```

#### (4) redux-test2/src/containers

* book-list.js

```js
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component { 
  renderList() { // -> BookItem
    return this.props.books.map( book => {
      return (
        <li key={book.title}>{book.title}</li>
      )
    });
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList);
```

* CounterContainer.js

```js
import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    color: state.counter.color,
    number: state.counter.number  
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    onIncrement: actions.increment,
    onDecrement: actions.decrement,
    onSetColor: actions.setColor
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

#### (5) redux-test2/src/ reducers

* index.js

```js
import { combineReducers } from 'redux';
import CounterReducer from './reducer-counter';

const rootReducer = combineReducers({
  counter: CounterReducer
});

export default rootReducer;
```

* reducer-books.js

```js
export default function() {
  return [
    {title: 'Javascript'},
    {title: 'Docker and Kubernetes'},
    {title: 'Java programming'},
    {title: 'Microservice Acrchitecure'},
    {title: 'Spring framework'}
  ]
}
```

* reducer-counter.js

```js
import * as types from '../actions/ActionTypes';

const initialState = {
  color: 'black',
  number: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color
    };
    default:
      return state;
  }
};
```

#### (6) redux-test2/src/utils

* index.js

```js
export function getRandomColor() {
  const colors = [
      '#495057',
      '#f03e3e',
      '#d6336c',
      '#ae3ec9',
      '#7048e8',
      '#4263eb',
      '#1c7cd6',
      '#1098ad',
      '#0ca678',
      '#37b24d',
      '#74b816',
      '#f59f00',
      '#f76707'
  ];

  // 0 부터 12까지 랜덤 숫자
  const random = Math.floor(Math.random() * 13);

  // 랜덤 색상 반환
  return colors[random];
}
```

### 2. 결과

![실습2 - 결과1](https://user-images.githubusercontent.com/55272324/74244375-a9bb3080-4d24-11ea-8309-d69795f2a578.PNG)
![실습2 - 결과2](https://user-images.githubusercontent.com/55272324/74244377-aa53c700-4d24-11ea-946c-568d613becb7.PNG)
![실습2 - 결과3](https://user-images.githubusercontent.com/55272324/74244457-c8b9c280-4d24-11ea-8105-d184d3833e2f.PNG)
![실습2 - 결과4](https://user-images.githubusercontent.com/55272324/74244379-aaec5d80-4d24-11ea-85d5-d16f66d5897c.PNG)