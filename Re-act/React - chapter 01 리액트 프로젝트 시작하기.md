# Re-act : chapter01 리액트 프로젝트 시작하기

>실전 리액트 프로그래밍 : 리액트 훅부터 Next.js 까지

## 1.1 리액트란 무엇인가?

### (1) 리액트란 무엇인가

* `Re-act` : 페이스북에서 개발하고 관리하는 UI라이브러리. `angular`가 웹 애플리케이션 개발에 필요한 다수의 기능을 제공하는 것과는 다르게 `Re-act`는 UI기능만 제공한다.
* front-end 라이브러리 or 프레임워크를 사용하는 이유 : UI를 자동으로 업데이트 해준다. 만약 `Re-act`와 같은 도구를 사용하지 않으면 브라우저의 DOM을 직접 업데이트해야 한다.

### (2) 리액트 개발 환경 직접 구축하기

#### 1) Hello World 페이지 만들기

#### 목표 : 외부 패키지를 전혀 사용하지 않고 리액트로 간단한 웹페이지 만들기

##### a. 사전 작업 

다음 경로로 리액트 자바스크립트 4개를 내려받기.

(a) [react.development.js](https://unpkg.com/react@16/umd/react.development.js)

(b) [react.production.min.js](https://unpkg.com/react@16/umd/react.production.min.js)

(c) [react-dom.development.js](https://unpkg.com/react-dom@16/umd/react-dom.development.js)

(d) [react-dom.production.min.js](https://unpkg.com/react-dom@16/umd/react-dom.production.min.js)

##### b. 코드 작업

(a) simple1.html

```html
<!DOCTYPE html>
<html>
    <head>

    </head>
    <body> 
        <h2>안녕하세요, 이 프로젝트가 마음에 드시면 좋아요 버튼을 눌러 주세요</h2>
        <div id="react-root"></div>
        <script src="react.development.js"></script>
        <script src="react-dom.development.js"></script>
        <script src="simple1.js"></script>
    </body>
</html>
```



(b) simple1.js

```js
class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {liked: false};
    }
    render(){
        const text = this.state.liked ? '좋아요 취소' : '좋아요';
        return React.createElement(
            'button',
            { onClick: ( )=> this.setState({liked: true}) },
            text,
        );
    }
}
const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(LikeButton), domContainer);
```



(c) simple2.html

```html
<!DOCTYPE html>
<html>
    <head>

    </head>
    <body> 
        <h2>안녕하세요, 이 프로젝트가 마음에 드시면 좋아요 버튼을 눌러 주세요</h2>
        <div id="react-root1"></div>
        <div id="react-root2"></div>
        <div id="react-root3"></div>
        <script src="react.development.js"></script>
        <script src="react-dom.development.js"></script>
        <script src="simple2.js"></script>
    </body>
</html>
```



(d) simple2.js

```js
class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {liked: false};
    }
    render(){
        const text = this.state.liked ? '좋아요 취소' : '좋아요';
        return React.createElement(
            'button',
            { onClick: ()=> this.setState({liked: true}) },
            text,
        );
    }
}
const domContainer = document.querySelector('#react-root');

ReactDOM.render(
    React.createElement(LikeButton),
    document.querySelector('#react-root1')
)
ReactDOM.render(
    React.createElement(LikeButton),
    document.querySelector('#react-root2')
)
ReactDOM.render(
    React.createElement(LikeButton),
    document.querySelector('#react-root3')
)
```



##### c. 코드 결과

(a) simple1.html / simpl1.js

<img width="643" alt="1  simpl1 결과1" src="https://user-images.githubusercontent.com/55272324/73725905-c29a7380-4771-11ea-9116-55505291d027.PNG">
<img width="644" alt="1  simpl1 결과2" src="https://user-images.githubusercontent.com/55272324/73725906-c29a7380-4771-11ea-93ef-eeca8608372d.PNG">

(b) simple2.html / simple2.js

<img width="640" alt="2  simple2 결과1" src="https://user-images.githubusercontent.com/55272324/73725907-c3330a00-4771-11ea-8529-e8fcd2a1d22b.PNG">
<img width="641" alt="2  simple2 결과2" src="https://user-images.githubusercontent.com/55272324/73725908-c3330a00-4771-11ea-8520-a4d3e19e52a0.PNG">



#### 2) 바벨 사용해 보기

* `babel` : 자바스크립트 코드를 변환해 주는 컴파일러.

#### 목표 : 최초의 외부 패키지인 바벨을 추가해 웹사이트 구축

##### a. 사전 작업

simple1 작업의 코드가 너무 단순 하므로 몇 가지 컴포넌트를 추가

(a) simple3.html

```html
<!DOCTYPE html>
<html>
    <head>

    </head>
    <body> 
        <h2>안녕하세요, 이 프로젝트가 마음에 드시면 좋아요 버튼을 눌러 주세요</h2>
        <div id="react-root"></div>
        <script src="react.development.js"></script>
        <script src="react-dom.development.js"></script>
        <script src="simple3.js"></script>
    </body>
</html>
```

(b) simple3.js

```js
class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {liked: false};
    }
    render(){
        const text = this.state.liked ? '좋아요 취소' : '좋아요';
        return React.createElement(
            'button',
            { onClick: ( )=> this.setState({liked: true}) },
            text,
        );
    }
}

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state ={count:0};
    }
    render(){
        return React.createElement(
            'div',
            null,
            React.createElement(LikeButton),
            React.createElement(
                'div',
                { style: { marginTop: 20} },
                React.createElement('span', null, '현재 카운트: '),
                React.createElement('span', null, this.state.count),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({ count: this.state.count + 1 })},
                    '증가',
                ),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({ count: this.state.count - 1 })},
                    '감소',
                ),
            ),
        );
    }
}
const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);
```

결과

<img width="640" alt="3  simple3 결과" src="https://user-images.githubusercontent.com/55272324/73728252-55d5a800-4776-11ea-9a30-bb2aa3681da8.PNG">

#### 3) 웹팩의 기본 개념 이해하기



#### 4) 웹팩 사용해 보기



### (3) create-react-app으로 시작하기

#### 1) create-react-app 사용해 보기

#### 2) 주요 명령어 알아보기



## 1.2 리액트 개발 환경 직접 구축하기



## 1.3 create-react-app 으로 시작하기



## 1.4 CSS 작성 방법 결정하기



## 1.5 단일 페이지 애플리케이션 만들기 

App.js

```
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello, world?
        i'm here
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```



 App.css

```
.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
```





___________________________



### 1. props

​	1) 부모 컴포넌트가 자식 컴포넌트에게 전달하는 값

​	2) 