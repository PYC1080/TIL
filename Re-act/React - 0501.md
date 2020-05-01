# React -

## 0. 환경 설정

```
1. Server
	1) Oracle JDK 8
	2) Spring Tool Suite
	3) MariaDB

2. Client
	1) VisualStudio Code
	2) Nodejss
	
3. VSCode plug-in
	1) Relative path : 상대 경로에 있는 파일 경로를 편하게 작성할 수 있는 도구
	2) Guides : 들여쓰기 가이드라인을 그려준다
	3) VSCode-js-import : import
	4) CSS Formatter
	5) IntelliSense For css class names
	6) react extension pack
	7) ESLint
	8) Reactjs code snippets
	
4. Chrome web store
	1) React Developer Tools
	2) Redux DevTools
```

## 1. 개념

### 1) Front-end library / Framework

```
1. Angular : Router, HTTP 클라이언트 등 웹 프로젝트에서 필요한 대부분의 도구들이 프레임워크 안에 내장되어 있으며 컴포넌트와 템플릿이 완벽하게 분리되어 있다. AngularJS는 Javascript와 함께 사용되며, 기업에서 많이 사용된다. 유지보수하고 있는 프로젝트가 많은 편해 속한다. Angular2부터는 주로 typescript와 함께 사용된다

2. React : Component라는 개념에 집중이 되어있는 라이브러리이다. 생태계가 엄청 넓고 사용하는 곳도 많다. HTTP 클라이언트, Router, 상태 관리 등의 기능들은 내장되어 있지 않다. 따로 공식 라이브러리가 있는 것이 아니므로 개발자가 원하는 스택을 마음대로 골라서 사용할 수 있다.

3. VueJS : 입문자가 사용하기 쉽다. Webpack 같은 모듈 번들러를 사용하여 프로젝트를 구성해야하는 Angular와 React와 달리 단순 CDN에 있는 파일을 로딩을 하는 형태로 스크립트를 불러와 사용하기 편하다. HTML을 템플릿처럼 그대로 사용할 수 있어 마크업을 만들어 주는 디자이너/퍼블리셔가 있는 경우 작업 흐름이 매우 매끄럽다. Vue-Router, Vuex 상태 관리 라이브러리가 존재한다.
```

### 2) React

#### (1) 

```
1. 변환, Mutation : 변화라는 것은 상당히 복잡한 작업이다. 특정 이벤트가 발생했을 때, 모델에 변화를 일으키고 변화에 따라 어떤 DOM을 가져와서 어떠한 방식으로 뷰를 업데이트 할 것인지에 대한 로직을 정해야 한다.

2 Virtual DOM : 가상의 DOM이다. 변화가 일어나면 실제로 브라우저의 DOM에 새로운 것을 넣지 않고 자바스크립트로 이루어진 가상 DOM에 한 번 랜더링하고 기존의 DOM과 비교한 다음 변화가 필요한 곳에만 업데이틀 해준다.

3. Library : React는 다른 Front-end framework가 MVC 또는 MVW 구조를 지향하는 것과는 다르게 오직 View만을 담당한다.
```

#### (2) JSX

```
1. JSX

2. JSX 특징
	1) React에 적합 : 최적화React.js는 일반 Javascript 문법이 아닌 JSX 문법을 사용해 UI를 템플릿화 한다
	2) 최적화 : JSX는 컴파일링 되면서 최적화가 이루어지므로 속도가 빠르다
	3) Type-safe : 컴파일링 과정에서 에러 감지가 가능하다
	4) HTML문법을 자바스크립트 형태로 변환 : HTML과 비슷한 문법으로 작성하면 이를 React.createElement를 사용하는 자바스크립트 형태로 변환시켜 준다
	
2. Nested Element
	1) 의미 : 컴포넌트에서 여러 Element를 렌더링 해야할 때 해당 element들은 필수적으로 container element 안에 포함시켜줘야 한다.
```

#### (3) Component

```
1. props
	1) 의미 : 부모 컴포넌트가 자식 컴포넌트에게 주는 값
	2) 특징
		(1) 자식 컴포넌트에서는 props를 받아오기만 할 수 있고 props 값을 수정할 수 없다.
	
		
2. State
	1) 의미 :
	2) 특징
		(1) 컴포넌트 내부에 선언하여 값을 변경 할 수 있다
        
```





### 3) ECMAScript6

* ES6

```

```

* 삼항 조건 연산자

```

```

* 간략 계산법

```

```

* 변수 선언

```

```

* For loop

```

```

* 객체 프로퍼티

```

```

* Arrow function

```

```

* 묵시적 반환

```

```

* 파라미터 기본 값 지정

```

```

* 템플릿 리터럴

```

```

* 비구조화 할당

```

```

* 전개연산자

```

```

* 필수 파라미터

```

```

* Object.assign()

```

```

* Promise

```

```

* JSX

```

```

