# Re-act : chapter01 리액트 프로젝트 시작하기

>실전 리액트 프로그래밍 : 리액트 훅부터 Next.js 까지

## 1.1 리액트란 무엇인가?

### 1) 리액트란 무엇인가

* `Re-act` : 페이스북에서 개발하고 관리하는 UI라이브러리. `angular`가 웹 애플리케이션 개발에 필요한 다수의 기능을 제공하는 것과는 다르게 `Re-act`는 UI기능만 제공한다.
* front-end 라이브러리 or 프레임워크를 사용하는 이유 : UI를 자동으로 업데이트 해준다. 만약 `Re-act`와 같은 도구를 사용하지 않으면 브라우저의 DOM을 직접 업데이트해야 한다.



## 1.2 리액트 개발 환경 직접 구축하기
### 1) Hello World 페이지 만들기

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



### 2) 바벨 사용해 보기

* `babel` : 자바스크립트 코드를 변환해 주는 컴파일러이다. 바벨을 사용하는 경우 최신 자바스크립트 묹법을 지원하지 않는 환경에서도 최신 문법을 사용할 수 있다. 리액트에서는 JSX 문법을 사용하기 위해 바벨을 사용한다. JSX 문법으로 작성된 코드를 createElement 함수를 호출하는 코드로 변환해 준다.

#### 목표 

```
외부 패키지 없이 만든 리액트 웹사이트에 최초의 외부 패키지로 바벨을 추가해보자.

1. 화면에 count 상탯값을 보여준다
2. 증가, 감소 버튼을 통해 count 상탯값을 변경
3. 좋아요 버튼 추가
```

##### code 1-6 simple3.js 

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

바벨의 도움을 받기 전이라 단순한 기능임에도`render` 메서드 코드가 상당히 복잡하다

##### 결과 : code1-6

<img width="640" alt="3  simple3 결과" src="https://user-images.githubusercontent.com/55272324/73728252-55d5a800-4776-11ea-9a30-bb2aa3681da8.PNG">

#### JSX 문법 사용해 보기

* 구조

```
hello-world
	ㄴreact.development.js
	ㄴreact.production.min.js
	ㄴreact-dom.development.js
	ㄴreact-dom.production.js
	ㄴsimple4.html
	ㄴsrc
		ㄴsimple4.js
```

##### code 1-7 simple4.js

```js
...

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state ={count:0};
    }
    render(){
        return(
            <div>
                <LikeButton />
                <div style={{ marginTop: 20}}>
                    <span>현재 카운트 : </span>
                    <span>{this.state.count}</span>
                    <button
                        onClick={() => this.setState({ count: this.state.count + 1 })}
                    >
                    증가
                    </button>
                    <button
                        onClick={() => this.setState({ count: this.state.count - 1 })}
                    >
                    감소
                    </button>
                </div>
            </div>
        )
    }
}

...
```

##### 결과 : code1-7

<img width="642" alt="1-2-2 code1-7 result" src="https://user-images.githubusercontent.com/55272324/74496418-fcac0800-4f1d-11ea-9f85-0eb8d14bc9ff.PNG">

#### JSX 문법을 바벨로 컴파일하기

* 파일변환 패키지 설치

```powershell
PS C:\Users\...> npm install @babel/core @babel/cli @babel/preset-reac
```

`@babel/cli` : 커맨드 라인에서 바벨을 실행할 수 있는 바이너리 파일

`@babel/preset-react` : JSX로 작성된 코드를 `createElement`함수를 이용한 코드로 변환해 주는 바벨 플러그인이 포함

* 설치된 패키지를 이용해서 자바스크립트 파일을 변환

```powershell
PS C:\Users\...> npx babel --watch src --out-dir . --presets @babel/preset-react
Successfully compiled 1 file with Babel.
```

`npx` : 외부 패키지에 포함된 실행 파일을 실행할 때 사용한다.

##### 결과 : 바벨을 이용해 자바스크립트 파일 변환

```js
hello-world
	ㄴ...
    ㄴsimple4.js

...

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return React.createElement("div", null, React.createElement(LikeButton, null), React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8 : "), React.createElement("span", null, this.state.count), React.createElement("button", {
      onClick: () => this.setState({
        count: this.state.count + 1
      })
    }, "\uC99D\uAC00"), React.createElement("button", {
      onClick: () => this.setState({
        count: this.state.count - 1
      })
    }, "\uAC10\uC18C")));
  }
}

...
```

### 3) 웹팩의 기본 개념 이해하기

* `webpack` : 자바스크립트로 만든 프로그램을 배포하기 좋은 형태로 묶어주는 툴이다. 웹팩은 ES6 모듈 시스템(ESM) 과 commonJS 를 모두 지원한다.
* 배포하기 좋은 형태 : 웹사이트 제작 방식이 SPA로 전환되면서 한 페이지에 수 많은 자바스크립트 파일이 필요해졌다. 이에 따라 파일 간의 의존성 때문에 선언되는 순서와 순서에 따른 전역 변수간의 관계도 고려해 주어야 한다.
* 모듈 시스템 : include, import 키워드를 이용해서 한 파일에서 다른 파일의 코드르 가져다 쓸 수 있다. 자바스크립트에서는 ES6부터 모듈 시스템이 언어 차원에서 지원된다.

### 4) 웹팩 사용해 보기

* 구조

```
webpack-test
	ㄴnode_modules
	ㄴsrc
		ㄴButton.js
		ㄴindex.html
	ㄴpackage-lcok.json
	ㄴpackage.json
```

##### 코드 작업

* package.json

```powershell
PS C:\Users\...\webpack-test> npm init -y            
Wrote to C:\Users\...\webpack-test\package.json:

{
  "name": "webpack-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

* 외부 패키지 설치

```powershell
PS C:\Users\...\webpack-test> npm install webpack webpack-cli react react-dom
```

* webpack-test/src/Button.js

```js
import React from 'react';

function Button(props) {
    return React.createElement('button', null, props.babel);
}

export default Button;
```

* webpack-test/src/index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';

function Container(){
    return React.createElement(
        'div',
        null,
        React.createElement('p', null, '버튼을 클릭해 주세요'),
        React.createElement(Button, { label: '좋아요'}),
        React.createElement(Button, { label: '싫어요'}),
    );
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);
```

* webpack-test/index.html

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
        <script src="dist/main.js"></script>
    </body>
</html>
```

* **웹팩 사용**

```powershell
PS C:\Users\...\webpack-test> npx webpack            
Hash: 0f66f2e449c4fbfb54ab
Version: webpack 4.41.6
Time: 1533ms
Built at: 2020-02-14 13:21:58
  Asset     Size  Chunks             Chunk Names
main.js  128 KiB       0  [emitted]  main
Entrypoint main = main.js
[7] ./src/index.js + 1 modules 674 bytes {0} [built]
    | ./src/index.js 519 bytes [built]
    | ./src/Button.js 145 bytes [built]
    + 7 hidden modules

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

##### 결과

<img width="641" alt="1-2-4 webpack result" src="https://user-images.githubusercontent.com/55272324/74501673-32f18380-4f2e-11ea-8c57-bdf5a5ca036f.PNG">

**클래스형 컴포넌트와 함수형 컴포넌트 **

```
기능적인 측면에서 보면 클래스형 컴포넌트는 함수형 컴포넌트가 할 수 있는 모든 일을 할 수 있다. 리액트 훅이 추가되면서 기존 함수형 컴포넌트에서 할 수 없던 상탯값을 가지는 것과 생명 주기 함수 코드를 작성할 수 있게 되었다.
```


## 1.3 create-react-app 으로 시작하기

* create-react-app이 제공하는 기능 및 환경

```
1. babel
2. webpack
3. test system
4. hot-module-replacement(HMR)
5. ES6+ 문법
6. CSS 후처리
```

### 1) create-react-app 사용해 보기

* `create-react-app` 개발 환경 설치

```powershell
PS C:\...> npx create-react-app "folder name"
```

### 2) 주요 명령어 알아보기

#### (1) `npm start` : 개발 모드로 프로그램을 실행하는 명령어

* https로 실행하는 옵션

```
1. Mac : HTTPS=true npm start
2. windows : set HTTPS=true && npm start
```

#### (2) `npm run build` : 배포 환경에서 사용할 파일을 만들어 주는 명령어



#### (3) `npm test` : 테스트 코드를 실행시키는 명령어

* 테스트 파일로 인식하는 조건

```
1. __tests__ 폴더 밑에 있는 모든 자바스크립트 파일
2. 파일 이름이 .test.js 로 끝나는 파일
3. 파일 이름이 .spec.js 로 끝나는 파일
```

* watch 모드가 필요 없는 환경에서의 테스트 코드 명령어

```
1. Mac : CI=true npm test
2. windows : set "CI=true" && npm test
```

#### (4) `npm run eject` : 숨겨져 있던 create-react-app 의 내부 설정 파일이 노출되는 명령어



### 3) 자바스크립트 지원 범위

* ES6 이후에 추가되거나 제안된 기능 중에서 create-react-app 에서 지원하는 기능

```
1. 지수 연산자 (exponentiation operator)
2. async await 함수
3. 나머지 연산자(rest operator), 전개 연산자(spread operator)
4. 동적 임포트(dynamic import)
5. 클래스 필드(class field)
6. JSX 문법
7. 타입스크립트(typescript), 플로 타입 시스템(flow type system)
```

* 폴리필(polyfill)

```
실행 시점에 기능이 존재하는지 검사해서 객체나 함수가 현재 환경에 존재하지 않는 경우에만 주입하는 것을 폴리필이라고 부른다
```

### 4) 코드 분할하기

* `코드 분할(code splitting)` : 사용자에게 필요한 양의 코드만 내려 주는 기능

### 5) 환경 변수 사용하기

* create-react-app 에서 환경 변수 

## 1.4 CSS 작성 방법 결정하기

* `CSS` : 웹 애플리케이션 개발시 DOM 요소에 스타일을 적용하기 위한 파일

* `Sass(syntatically awesome stylesheets)` : 순수 CSS 문법이 코드를 재사용하기 힘들다는 점을 개선

### 1) 일반적인 CSS 파일로 작성하기

#### 구조

```
css-test
	ㄴ...
	ㄴsrc
		ㄴBox1.css
		ㄴBox1.js
		ㄴButton1.css
		ㄴButton1.js
		ㄴApp.js
		ㄴindex.js
	ㄴ...
```



#### 코드

* Button1.css

```css
.big {
    width: 100px;
}

.small {
    width: 50px;
}

.button {
    height: 30px;
    background-color: #aaaaaa;
}
```

* Button1.js

```js
import React from 'react';
import './Button1.css';

function Button({ size }) {
    if (size === 'big'){
        return <button className="button big">큰 버튼</button>
    } else {
        return <button className="button small">작은 버튼</button>
    }
}

export default Button;
```

* Box1.css

```css
.big {
    width: 200px;
}

.small {
    width: 100px;
}

.box {
    height: 50px;
    background-color: #aaaaaa;
}
```

* Box1.js

```js
import React from 'react';
import './Box1.css'

function Box({ size }) {
    if (size === 'big'){
        return <button className="box big">큰 박스</button>
    } else {
        return <button className="box small">작은 박스</button>
    }
}

export default Box;
```

* App.js

```js
import React, { Component } from 'react';
import Button from './Button1';
import Box from './Box1';

class App extends Component {
  render(){
    return (
      <div>
        <Button size="big"/>
        <Button size="small"/>
        <Box size="big"/>
        <Box size="small"/>
      </div>
    )
  }
}
export default App;
```

#### 결과

<img width="641" alt="4-1 result" src="https://user-images.githubusercontent.com/55272324/74506118-37bd3400-4f3c-11ea-8668-e5336187a736.PNG">

일반적인 CSS 파이에서는 클래스명이 충돌할 수 있다.

### 2) CSS-module로 작성하기

* CSS-module의 장점 : 일반적인 CSS 파일에서 클래스 명이 충돌 할 수 있다는 단점을 극복할 수 있다.

* CSS-moudle

```
{이름}.module.css
```

#### 구조

#### 코드

* Box2.module.css

```css
.big {
    width: 200px;
}

.small {
    width: 100px;
}

.box {
    height: 50px;
    background-color: #aaaaaa;
}
```

* Box2.js

```js
import React from 'react';
import style from './Box2.module.css';
import cn from 'classnames';

function Box({ size }) {
    const isBig = size === 'big';
    const label = isBig ? '큰 박스' : '작은 박스';
    return (
        <div
            className={cn(style.box, { [style.big]: isBig, [style.small]: !isBig})}
        >
            {label}
        </div>
    )
}

export default Box;
```

* Button2.module.css

```css
.big {
    width: 100px;
}

.small {
    width: 50px;
}

.button {
    height: 30px;
    background-color: #aaaaaa;
}

```

* Button2.js

```js
import React from 'react';
import style from './Button2.module.css';
import cn from 'classnames';

function Button({ size }) {
    if (size === 'big'){
        return <button className={cn(style.button, style.big)}>큰 버튼</button>
    } else {
        return <button className={cn(style.button, style.small)}>작은 버튼</button>
    }
}

export default Button;
console.log(style)
```



#### 결과

<img width="377" alt="4-2 result" src="https://user-images.githubusercontent.com/55272324/74507758-b61bd500-4f40-11ea-9105-5e59ead9edac.PNG">

### 3) Sass 로 작성하기



## 1.5 단일 페이지 애플리케이션 만들기 

<img width="709" alt="5-picture1-5-1 전통적인 방식" src="https://user-images.githubusercontent.com/55272324/74509026-dc8f3f80-4f43-11ea-981b-351e031ee288.PNG">
<img width="692" alt="5-picture1-5-2 SPA" src="https://user-images.githubusercontent.com/55272324/74509027-ddc06c80-4f43-11ea-80bb-c28d4fad77d6.PNG">

* `단일 페이지 애플리케이션(Single Page Application)` : 최초 요청 시 서버에서 첫 페이지를 처리하고 이후의 라우팅은 클라이언트에서 처리하는 웹 애플리케이션

### 1) 브라우저 히스토리 API

* SPA 구현시 필요한 조건

```
1. 자바스크립트에서 브라우저로 페이지 전환 요청을 보낼수 있으나 브라우저는 서버로 요청을 보내지 않아야 한다.
2. 브라우저에서 사용자의 페이지 전환 요청을 자바스크립트에서 처리할 수 있어야 한다. 이때 브라우저는 서버로 요청을 보내지 않아야 한다.
```

* SPA 구현시 필요한 조건을 만족하는 브라우저 API

```
1. 함수
	1) pushState
	2) replaceState
2. 이벤트
	1) popstate
```

#### code 1-43 브라우저 히스토리 API의 동작을 확인하는 코드

```js
import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    window.onpopstate = function(event) {
      console.log(`location: ${document.location}, state: ${event.state}`);
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => window.history.pushState('v1', '', '/page1')}>
          page1
        </button>
        <button onClick={() => window.history.pushState('v2', '', '/page2')}>
          page2
        </button>
      </div>
    )
  }
}

export default App;

```

#### result : code 1-43

<img width="245" alt="5-1 code 1-43 result2" src="https://user-images.githubusercontent.com/55272324/74509805-b8ccf900-4f45-11ea-8976-f11fb860705a.PNG">
<img width="225" alt="5-1 code 1-43 result1" src="https://user-images.githubusercontent.com/55272324/74509809-b9fe2600-4f45-11ea-9932-15e963a56fae.PNG">

#### code 1-44

```js
import React, { Component } from 'react';

class App extends Component {
  state = {
    pageName: '',
  };
  componentDidMount() {
    window.onpopstate = event => {
      this.onChangePage(event.state);
    };
  }

  onChangePage = pageName => {
    this.setState({ pageName });
  };

  onClick1 = () => {
    const pageName ='page1';
    window.history.pushState(pageName, '', '/page1');
    this.onChangePage(pageName);
  }

  onClick2 = () => {
    const pageName ='page2';
    window.history.pushState(pageName, '', '/page2');
    this.onChangePage(pageName);
  }

  render() {
    const { pageName } = this.state;
    return (
      <div>
        <button onClick={this.onClick1}>
          page1
        </button>
        <button onClick={this.onClick2}>
          page2
        </button>
        {!pageName && <Home />}
        {pageName === 'page1' && <Page1 />}
        {pageName === 'page2' && <Page2 />}
      </div>
    )
  }
}

function Home() {
  return <h2>여기는 홈페이지 입니다. 원하는 페이지 버튼을 누르세요.</h2>
}

function Page1() {
  return <h2>여기는 page1 입니다.</h2>
}

function Page2() {
  return <h2>여기는 pag2 입니다.</h2>
}
export default App;

```

#### result code1-44

<img width="638" alt="5-1 code 1-44 result1" src="https://user-images.githubusercontent.com/55272324/74511354-2890b300-4f49-11ea-8fd9-443a9c5bccdd.PNG">
<img width="637" alt="5-1 code 1-44 result2" src="https://user-images.githubusercontent.com/55272324/74511302-1151c580-4f49-11ea-878d-1938775a69f0.PNG">
<img width="640" alt="5-1 code 1-44 result3" src="https://user-images.githubusercontent.com/55272324/74511304-1151c580-4f49-11ea-8ec1-98014fba258f.PNG">

### 2) react-router-dom 사용하기

#### 코드

* App.js

```js
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Rooms from './Rooms.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div
          style={{ padding:20, border: '5px solid gray'}}
        >
          <Link to="/">홈</Link>
          <br />
          <Link to="/photo">사진</Link>
          <br />
          <Route exact path="/" component={Home}/>
          <Route path="/photo" component={Photo}/>
          <Route path="/rooms" component={Rooms}/>
        </div>
      </BrowserRouter>
    )
  }
}

function Home({ match }){
  return <h2>이곳은 홈페이지입니다. </h2>;
}

function Photo({ match }){
  return <h2>여기서 사진을 감상하시오 </h2>;
}
export default App;

```

* Rooms.js

```js
import React from 'react';
import { Route, Link } from 'react-router-dom';

function Rooms({match}) {
    return(
        <div>
            <h2>방을 소개하는 페이지입니다</h2>
            <Link to={`${match.url}/blueRoom`}>파란 방</Link>
            <br />
            <Link to={`${match.url}/greenRoom`}>초록 방</Link>
            <br />
            <Route path={`${match.url}/:roomId`} component={Room}/>
            <Route
                exact
                path={match.url}
                render={()=><h3>방 선택</h3>}
            />
        </div>
    )
}

export default Rooms;

function Room({ match }){
    return <h2>{`${match.params.roomId} 방을 선택하셨습니다.`}</h2>;
}
```

#### 결과

<img width="637" alt="5-2 code1-47 result1" src="https://user-images.githubusercontent.com/55272324/74514756-92f92180-4f50-11ea-967f-c3f6060f40bc.PNG">
<img width="639" alt="5-2 code1-47 result2" src="https://user-images.githubusercontent.com/55272324/74514760-942a4e80-4f50-11ea-80d7-5de554770940.PNG">

