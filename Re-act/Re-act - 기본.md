# Re-act - 기본기

## 1. 리액 프로젝트 구축하는 방법

### 1) 리액트란?

```
1. React : 페이스북에서 개발하고 관리하는 UI라이브러리. angular가 웹 애플리케이션 개발에 필요한 다수의 기능을 제공하는 것과는 대조적으로 React는 UI기능만 제공한다. React와 같은 frontend libraray or framework를 사용하는 이유는 UI를 자동으로 업데이트해 준다는 점이다. 리액트는 virtual dom을 통해서 UI를 빠르게 업데이트한다는 점이다.
2. React 제약사항
	1) 렌더 함수는 순수 함수로 작성해야 한다
	2) 컴포넌트 상탯값은 불변 객체로 관리해야 한다
```

### 2) 리액트 개발 환경 직접 구축

* 리액트 네이티브

```
리액트 네이티브 : 리액트로 안드로이드와 iOS의 네이티브 앱을 만들 수 있다. 리액트 네이티브를 이용하면 하나의 소스코드로 안드로이드와 iOS에서 동작하는 앱을 만들 수 있다. 그러나 플랫폼에 종속적인 기능을 사용하기 위해서는 플랫폼별로 코드를 작성해야 한다
```

* createElement

```js
1. 구조 : React.createElement(component,props,...children) => ReactElement
2. 매개 변수
	1) component : 문자열이나 리액트 컴포넌트. component의 인수가 문자열이면 HTML 태그에 해당하는 돔 요소가 생성된다
    2) props : 컴포넌트가 사용하는 데이터
    3) children : 해당 컴포넌트가 감싸고 있는 내부의 컴포넌트를 가리킨다
```

* babel 

```
1. babel : 자바스크립트 코드를 변환해 주는 컴파일러. babel을 사용하면 최신 자바스크립트 문법을 지원하지 않는 환경에서도 최신 문법을 사용할 수 있다
2. babel plug-in & preset
	1) babel plug-in : 자바스크립트 파일을 변환해 주는 작업은 플러그인 단위로 이루어진다
	2) babel preset : 플러그인의 집합 
```

* webpack

```
1. webpack : 자바스크립트로 만든 프로그램을 배포하기 좋은 형태로 묶어주는 툴
```

### 3) create-react-app

* create-react-app : react로 웹 애플리케이션을 만들기 위한 환결을 제공한다

* create-react-app 개발 환경 설치

```powershell
PS ...> npx create-react-app folder_name
```

* 주요 명령어

```powershell
1. 개발 모드 실행
	1) 명령어 : PS ...> npm start
	2) 특징 : 개발 모드로 실행하면 HMR이 동작하기 때문에 코드를 수정하면 화면에 즉시 반영된다
	3) 옵션 : https로 실행
		(1) 맥 : HTTPS=true npm start
		(2) 윈도우 : set HTTPS=true && npm start
2. 빌드
	1) 명령어 : PS ...> npm run build
```



## 2. 자바스크립트 최신 문법

## 3. 리액트의 주요 개념

