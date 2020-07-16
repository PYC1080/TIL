# 실습 -  My-youtube 만들기

## 목표 : youtube 구조를 바탕으로 My-youtube-app 만들기

<img width="864" alt="0  목표-1" src="https://user-images.githubusercontent.com/55272324/73918941-ea224500-4905-11ea-91ab-711a2ad58b02.PNG">

## 0. 기본 설정

### 1) npm install

```powershell
PS C:\Users\pyc\desktop\work\study\til\Re-act\0206My-youtube> npm install
added 382 packages from 386 contributors in 25.811s
```

### 2) npm start

```powershell
PS C:\Users\pyc\desktop\work\study\til\Re-act\0206My-youtube> npm start

> redux-simple-starter@1.0.0 start C:\Users\pyc\desktop\work\study\til\Re-act\0206My-youtube
> node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js

 http://localhost:8080/webpack-dev-server/
webpack result is served from /
content is served from ./
404s will fallback to /index.html
Hash: f1db36941ad47434345c
Version: webpack 1.15.0
Time: 1725ms
    Asset    Size  Chunks             Chunk Names
bundle.js  917 kB       0  [emitted]  main
chunk    {0} bundle.js (main) 890 kB [rendered]
    [0] multi main 28 bytes {0} [built]
    [1] ./src/index.js 854 bytes {0} [built]
    [2] ./~/react/index.js 190 bytes {0} [built]
    [3] ./~/process/browser.js 5.42 kB {0} [built]
    [4] ./~/react/cjs/react.production.min.js 5.67 kB {0} [built]
    [5] ./~/object-assign/index.js 2.11 kB {0} [built]
    [6] ./~/fbjs/lib/invariant.js 1.51 kB {0} [built]
    [7] ./~/fbjs/lib/emptyObject.js 332 bytes {0} [built]
    [8] ./~/fbjs/lib/emptyFunction.js 959 bytes {0} [built]
    [9] ./~/react/cjs/react.development.js 47 kB {0} [built]
   [10] ./~/fbjs/lib/warning.js 1.9 kB {0} [built]
   [11] ./~/prop-types/checkPropTypes.js 2.87 kB {0} [built]
   [12] ./~/prop-types/lib/ReactPropTypesSecret.js 314 bytes {0} [built]
   [13] ./~/react-dom/index.js 1.36 kB {0} [built]
   [14] ./~/react-dom/cjs/react-dom.production.min.js 101 kB {0} [built]
   [15] ./~/fbjs/lib/ExecutionEnvironment.js 935 bytes {0} [built]
   [16] ./~/fbjs/lib/getActiveElement.js 912 bytes {0} [built]
   [17] ./~/fbjs/lib/shallowEqual.js 1.62 kB {0} [built]
   [18] ./~/fbjs/lib/containsNode.js 923 bytes {0} [built]
   [19] ./~/fbjs/lib/isTextNode.js 479 bytes {0} [built]
   [20] ./~/fbjs/lib/isNode.js 702 bytes {0} [built]
   [21] ./~/react-dom/cjs/react-dom.development.js 608 kB {0} [built]
   [22] ./~/fbjs/lib/hyphenateStyleName.js 848 bytes {0} [built]
   [23] ./~/fbjs/lib/hyphenate.js 674 bytes {0} [built]
   [24] ./~/fbjs/lib/camelizeStyleName.js 875 bytes {0} [built]
   [25] ./~/fbjs/lib/camelize.js 582 bytes {0} [built]
   [26] ./~/react-redux/lib/index.js 751 bytes {0} [built]
   [27] ./~/react-redux/lib/components/Provider.js 3.4 kB {0} [built]
   [28] ./~/prop-types/index.js 956 bytes {0} [built]
   [29] ./~/prop-types/factoryWithTypeCheckers.js 19.8 kB {0} [built]
   [30] ./~/prop-types/factoryWithThrowingShims.js 1.49 kB {0} [built]
   [31] ./~/react-redux/lib/utils/PropTypes.js 814 bytes {0} [built]
   [32] ./~/react-redux/lib/utils/warning.js 691 bytes {0} [built]
   [33] ./~/react-redux/lib/components/connectAdvanced.js 14.7 kB {0} [built]
   [34] ./~/hoist-non-react-statics/index.js 2.6 kB {0} [built]
   [35] ./~/invariant/browser.js 1.4 kB {0} [built]
   [36] ./~/react-redux/lib/utils/Subscription.js 2.68 kB {0} [built]
   [37] ./~/react-redux/lib/connect/connect.js 5.91 kB {0} [built]
   [38] ./~/react-redux/lib/utils/shallowEqual.js 736 bytes {0} [built]
   [39] ./~/react-redux/lib/connect/mapDispatchToProps.js 1.19 kB {0} [built]
   [40] ./~/redux/lib/redux.js 23.1 kB {0} [built]
   [41] ./~/symbol-observable/lib/index.js 664 bytes {0} [built]
   [42] (webpack)/buildin/module.js 251 bytes {0} [built]
   [43] ./~/symbol-observable/lib/ponyfill.js 449 bytes {0} [built]
   [44] ./~/react-redux/lib/connect/wrapMapToProps.js 3.17 kB {0} [built]
   [45] ./~/react-redux/lib/utils/verifyPlainObject.js 626 bytes {0} [built]
   [46] ./~/react-redux/~/lodash/isPlainObject.js 1.65 kB {0} [built]
   [47] ./~/react-redux/~/lodash/_baseGetTag.js 792 bytes {0} [built]
   [48] ./~/react-redux/~/lodash/_Symbol.js 118 bytes {0} [built]
   [49] ./~/react-redux/~/lodash/_root.js 300 bytes {0} [built]
   [50] ./~/react-redux/~/lodash/_freeGlobal.js 173 bytes {0} [built]
   [51] ./~/react-redux/~/lodash/_getRawTag.js 1.14 kB {0} [built]
   [52] ./~/react-redux/~/lodash/_objectToString.js 565 bytes {0} [built]
   [53] ./~/react-redux/~/lodash/_getPrototype.js 163 bytes {0} [built]
   [54] ./~/react-redux/~/lodash/_overArg.js 382 bytes {0} [built]
   [55] ./~/react-redux/~/lodash/isObjectLike.js 614 bytes {0} [built]
   [56] ./~/react-redux/lib/connect/mapStateToProps.js 693 bytes {0} [built]
   [57] ./~/react-redux/lib/connect/mergeProps.js 2.04 kB {0} [built]
   [58] ./~/react-redux/lib/connect/selectorFactory.js 4.51 kB {0} [built]
   [59] ./~/react-redux/lib/connect/verifySubselectors.js 997 bytes {0} [built]
   [60] ./src/components/app.js 2.21 kB {0} [built]
   [61] ./src/reducers/index.js 337 bytes {0} [built]
webpack: Compiled successfully.
```



### 3) 초기 구조

```
...My-youtube
        ㄴnode_modules
            ㄴ...
        ㄴsrc
            ㄴindex.js
        ㄴstyle
            ㄴstyle.css
        ㄴtest
            ㄴcomponents
                ㄴapp_test.js
            ㄴtest.helper.js
        ㄴ.babelrc
        ㄴ.gitignore
        ㄴ.npmrc
        ㄴindex.html
        ㄴpackage-lock.json
        ㄴpackage.json
        ㄴwebpack.config.js
```



### 4) 초기 구조별 파일 내용

* node_modules : `npm install` 시 자동 설치


* src\index.js

```js

```

* style\style.css

```css

```

* test\components\app_test.js

```js
import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});

```



* test\test.helper.js

```js
import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);

chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};

```



* .babelrc

```
{
  "presets": ["react", "es2015", "stage-1"]
}

```



* .gitignore

```
/node_modules
bundle.js
npm-debug.log
.DS_Store

# IntelliJ
*.iml
/.idea

```



* .npmrc

```
audit=false
loglevel=error

```



* index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/style/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAq06l5RUVfib62IYRQacLc-KAy0XIWAVs"></script>
  </head>
  <body>
    <div class="container"></div>
  </body>
  <script src="/bundle.js"></script>
</html>

```



* package-lock.json

```json

```



* package.json

```json
{
  "name": "redux-simple-starter",
  "version": "1.0.0",
  "description": "Simple starter package for Redux with React and Babel support",
  "main": "index.js",
  "repository": "git@github.com:StephenGrider/ReduxSimpleStarter.git",
  "scripts": {
    "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js",
    "test": "mocha --compilers js:babel-core/register --require ./test/test_helper.js --recursive ./test",
    "test:watch": "npm run test -- --watch",
    "build": "webpack -p --define process.env.NODE_ENV='\"production\"' --progress --colors"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.2.1",
    "babel-loader": "^6.2.0",
    "babel-preset-es2015": "^6.1.18",
    "babel-preset-react": "^6.1.18",
    "webpack": "^1.12.9",
    "webpack-dev-server": "^1.14.0"
  },
  "dependencies": {
    "babel-preset-stage-1": "^6.1.18",
    "lodash": "^3.10.1",
    "react": "16.3.2",
    "react-dom": "16.3.2",
    "react-redux": "5.0.7",
    "redux": "4.0.0"
  }
}

```



* webpack.config.js

```js
module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};

```



### 5) 결과

<img width="640" alt="0  기본 설정 - localhost8080 결과" src="https://user-images.githubusercontent.com/55272324/73897263-d86e7c80-48c8-11ea-8e16-a471275cac5f.PNG">

#### (1) 오류 

a. favicon이 없어 발생하는 오류 : favicon이 없어 발생하는 오류이나 큰 오류가 아니므로 무시해도 무방하다

```
8080/favicon.ico:1 Failed to load resource: the server responded with a status of 404 (Not Found)
```







## 1. 과정

### 1) App.js : 기초 토대 잡기

```js
import React from 'react';
import ReactDOM from'react-dom';

const App = function(){
  return (
    <div>
      Hi
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
```

**결과**

<img width="349" alt="1-1-1 indexjs 기본토대 결과" src="https://user-images.githubusercontent.com/55272324/73898007-4b78f280-48cb-11ea-8d7d-61f6f5bb83dc.PNG">



### 2) ...src\components\ 4개 js 파일 만들기

* ...src\components\video_list.js

* ...src\components\video_list_item.js

* ...src\components\video_detail.js

* ...src\components\search_bar.js

  

### 3) 구글 API를 활용하여 youtube data api 받아오기

> [YouTube -DataAPI 관련 Search 정보 주소](https://developers.google.com/youtube/v3/docs/search/list?hl=ko)

* [주소](https://console.developers.google.com/apis/library?supportedpurview=project&q=youtube) 접속 - YouTube Data API v3 - 사용설정 - 사용자 인증 정보 - `+`사용자 인증 정보 만들기 - API 키 생성

* API key

```
AIzaSyAGYD4qZLoLrL2BEjIWWq-_a_2busuy0ys
```

* API key 값 index.js 에 입력

```js
import React from 'react';
import ReactDOM from'react-dom';

const API_KEY = 'AIzaSyAGYD4qZLoLrL2BEjIWWq-_a_2busuy0ys'
const App = function(){
  return (
    <div>
      Hi
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
```



### 4) install : youtube-api-search 

기존에 돌아가던 npm server를 멈추고 아래와 같은 명령어를 입력해 다운로드한다

```powershell
PS C:\Users\pyc\desktop\work\study\til\Re-act\0206My-youtube> npm install --save youtube-api-search              + youtube-api-search@0.0.5
added 2 packages from 2 contributors in 3.277s
```

`--save` : package.json 파일에 해당 내용을 추가해주는 명령어

다운로드가 완료되었다면 서버를 재가동한다

```powershell
PS C:\Users\pyc\desktop\work\study\til\Re-act\0206My-youtube> npm start
```

* index.js

```js
import React from 'react';
import ReactDOM from'react-dom';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAGYD4qZLoLrL2BEjIWWq-_a_2busuy0ys'
class App extends Component{
  
  constructor(props){
    super(props);

    this.state= {
      videos: [],
    };


    YTSearch(
      {key:API_KEY, term: 'surfboards'}, 
      (data) => {
        this.setState({
          videos: data,
        })
      }
    );
  }

  render(){
    return (
      <div>
          <SearchBar />
      </div>
      );
    }
}
ReactDOM.render(<App/>, document.querySelector('.container'));
```

`GET https://www.googleapis.com/youtube/v3/search` 대신에 `YTsearch`를 이용해 해당 정보를 불러왔다.



### 5) API 내용 추가

* search_bar.js

```js
import React, { Component } from 'react';

class SearchBar extends Component{
    render(){
        return (
            <input />
        )
    }
}

export default SearchBar;
```

* index.js

```js
import React from 'react';
import ReactDOM from'react-dom';
import SearchBar from '../src/components/search_bar';

const API_KEY = 'AIzaSyAGYD4qZLoLrL2BEjIWWq-_a_2busuy0ys'
const App = function(){
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('.container'));

```

### 6) 검색창 만들기1 : 검색기능

* search_bar.js

```js
import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onInputChange = (event) => {
        console.log(event.target.value)
    }
    render(){
        return (
            <div>
                <input onChange={this.onInputChange}/>
            </div>
        )
    }
}

export default SearchBar;
```

* index.js

```js
import React,{ Component } from 'react';
import ReactDOM from'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from '../src/components/search_bar';

const API_KEY = 'AIzaSyAGYD4qZLoLrL2BEjIWWq-_a_2busuy0ys';
class App extends Component{
  
  constructor(props){
    super(props);

    this.state= {
      videos: [],
    };


    YTSearch(
      {key:API_KEY, term: 'surfboards'}, 
      (data) => {
        this.setState({
          videos: data,
        })
      }
    );
  }

  render(){
    return (
      <div>
          <SearchBar />
      </div>
      );
    }
}
ReactDOM.render(<App/>, document.querySelector('.container'));

```

* 결과

<img width="1280" alt="1-6-1 검색창1 결과" src="https://user-images.githubusercontent.com/55272324/73901700-ef1bd000-48d6-11ea-9b90-6a7289ec19c7.PNG">



### 7) 검색창 만들기2 : 검색 갯수 확인

* index.js

```js
import React,{ Component } from 'react';
import ReactDOM from'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from '../src/components/search_bar';
import VideoList from './components/video_list_item';


const API_KEY = 'AIzaSyAGYD4qZLoLrL2BEjIWWq-_a_2busuy0ys';
class App extends Component{
  
  constructor(props){
    super(props);

    this.state= {
      videos: [],
    };


    YTSearch(
      {key:API_KEY, term: 'surfboards'}, 
      (data) => {
        this.setState({
          videos: data,
        })
      }
    );
  }

  render(){
    return (
      <div>
          <SearchBar />
          <VideoList videos={this.state.videos}/>
      </div>
      );
    }
}
ReactDOM.render(<App/>, document.querySelector('.container'));

```

* video_list.js

```js
import React from 'react';

const VideoList = (props) => {
    return (
        <ul className='cold-md-4 list-group'>
            갯수
            {props.videos.length}
        </ul>
    )
}

export default VideoList; 
```

* 결과

<img width="639" alt="1-7 검색 갯수 확인" src="https://user-images.githubusercontent.com/55272324/73906662-15e20280-48e7-11ea-843c-fa0ccfc44414.PNG">

### 8) 검색창 만들기3 : 검색창 디자인 개선

* index.js

```js
import React,{ Component } from 'react';
import ReactDOM from'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from '../src/components/search_bar';
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyAGYD4qZLoLrL2BEjIWWq-_a_2busuy0ys';
class App extends Component{
  
  constructor(props){
    super(props);

    this.state= {
      videos: [],
    };


    YTSearch(
      {key:API_KEY, term: 'surfboards'}, 
      (data) => {
        this.setState({
          videos: data,
        })
      }
    );
  }

  render(){
    return (
      <div>
          <SearchBar />
          <VideoList videos={this.state.videos}/>
      </div>
      );
    }
}
ReactDOM.render(<App/>, document.querySelector('.container'));

```

* video_list.js

```js
import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
    const videoItems = props.videos.map((v) => 
        {
            return (
                <VideoListItem 
                    key = {v.etag}
                    video ={v}/> 
            )
        });
    return (
        <ul className='cold-md-4 list-group'>
            {videoItems}
        </ul>
    )
}

export default VideoList; 
```

* video_list_item.js

```js
import React from 'react';

const VideoListItem = (props) => {
    const imageUrl =props.video.snippet.thumbnails.default.url;
    console.log(imageUrl);
    return(
        <li className ='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-objec' src={imageUrl}/>
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        {props.video.snippet.title}
                    </div>
                </div>
            </div> 
            {props.video.snippet.title}
        </li>
    )
};

export default VideoListItem;
```

* 결과

<img width="637" alt="1-8 검색창 디자인 개선1 결과" src="https://user-images.githubusercontent.com/55272324/73908425-06fe4e80-48ed-11ea-876e-dea2e8dcc59e.PNG">



### 9) 동영상 플레이어 만들기 

* index.js

```js
import React,{ Component } from 'react';
import ReactDOM from'react-dom';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import SearchBar from '../src/components/search_bar';
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyAGYD4qZLoLrL2BEjIWWq-_a_2busuy0ys';
class App extends Component{
  
  constructor(props){
    super(props);

    this.state= {
      videos: [],
    };


    YTSearch(
      {key:API_KEY, term: 'surfboards'}, 
      (data) => {
        this.setState({
          videos: data,
          selectedVideo: data[0]
        })
      }
    );
  }
  
  render(){
    return (
      <div>
          <SearchBar />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos}/>
      </div>
      );
    }
}
ReactDOM.render(<App/>, document.querySelector('.container'));

```

* search_bar.js

```js
import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    }

    render(){
        return (
            <div>
                <input onChange={this.onInputChange}/>
            </div>
        )
    }
}

export default SearchBar;
```

* video_detail.js

```js
import React from 'react';

const VideoDetail = ({video}) =>{
    if (!video){
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;;
    const url= `https://www.youtube.com/embed/${videoId}`;

    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}/>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )


}

export default VideoDetail;
```

* video_list_item.js

```js
import React from 'react';

const VideoListItem = ({video})=> {
    const imageUrl =video.snippet.thumbnails.default.url;
    // console.log(imageUrl);
    return(
        <li className ='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-objec' src={imageUrl}/>
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        {video.snippet.title}
                    </div>
                </div>
            </div> 
            {video.snippet.title}
        </li>
    )
};

export default VideoListItem;
```

* video_list.js

```js
import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
    const videoItems = props.videos.map((v) => 
        {
            return (
                <VideoListItem 
                    key = {v.etag}
                    video ={v}/> 
            )
        });
    return (
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    )
}

export default VideoList; 
```

* 결과

<img width="1280" alt="1-9 동영상 플레이어 결과" src="https://user-images.githubusercontent.com/55272324/73913617-d6bdac80-48fa-11ea-9dfd-785a990a42bf.PNG">

### 10) 동영상 이미지를 클릭하면 해당 동영상을 재생하는 기능 추가

* index.js

```js
import React,{ Component } from 'react';
import ReactDOM from'react-dom';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import SearchBar from '../src/components/search_bar';
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyAGYD4qZLoLrL2BEjIWWq-_a_2busuy0ys';
class App extends Component{
  
  constructor(props){
    super(props);

    this.state= {
      videos: [],
    };


    YTSearch(
      {key:API_KEY, term: 'surfboards'}, 
      (data) => {
        this.setState({
          videos: data,
          selectedVideo: data[0]
        })
      }
    );
  }
  handleSelect = (selectedVideo) => {
    this.setState({
      selectedVideo : selectedVideo
    })
  }

  render(){
    return (
      <div>
          <SearchBar />
          <VideoDetail 
            video={this.state.selectedVideo} />
          <VideoList 
            onVideoSelect={this.handleSelect}
            videos={this.state.videos}/>
      </div>
      );
    }
}
ReactDOM.render(<App/>, document.querySelector('.container'));

```

* video_list.js

```js
import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
    const videoItems = props.videos.map((v) => 
        {
            return (
                <VideoListItem 
                    onVideoSelect ={props.onVideoSelect}
                    key = {v.etag}
                    video ={v}/> 
            )
        });
    return (
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    )
}

export default VideoList; 
```

* video_list_item.js

```js
import React from 'react';

const VideoListItem = ({video, onVideoSelect})=> {
    const imageUrl =video.snippet.thumbnails.default.url;
    // console.log(imageUrl);
    return(
        <li className ='list-group-item'
            onClick={() => onVideoSelect(video)}>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-objec' src={imageUrl}/>
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        {video.snippet.title}
                    </div>
                </div>
            </div> 
            {video.snippet.title}
        </li>
    )
};

export default VideoListItem;
```

* 결과

<img width="628" alt="1-10 동영상 클릭기능 추가 결과" src="https://user-images.githubusercontent.com/55272324/73916214-59953600-4900-11ea-831d-c5d4ef6d233d.PNG">

### 11) 검색기능 디자인 개선

* ...style\style.css

```css
.search-bar {
    margin: 20px;
    text-align: center;
}

.search-bar input {
    width: 75%;
}

.video-item img{
    max-width: 64px;
}

.video-detial .details{
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.list-group-item {
    cursor: pointer;
}

.list-group-item:hover {
    background-color: #eee;
}


```

* search_bar.js

```js
import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    }

    render(){
        return (
            <div className="search-bar">
                <input onChange={this.onInputChange}/>
            </div>
        )
    }
}

export default SearchBar;
```

* 결과 

<img width="866" alt="1-11 검색창 디자인 개선 결과" src="https://user-images.githubusercontent.com/55272324/73990511-b2121500-498c-11ea-99a4-9f9c157c4070.PNG">

### 12) 검색어 찾기 기능 추가

* index.js

```js
import React,{ Component } from 'react';
import ReactDOM from'react-dom';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import SearchBar from '../src/components/search_bar';
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyAGYD4qZLoLrL2BEjIWWq-_a_2busuy0ys';
class App extends Component{
  
  constructor(props){
    super(props);

    this.state= {
      videos: [],
      selectedVideo:null,
      search_term:''
    };
    
    YTSearch(
      {key:API_KEY, term: this.state.search_term}, 
      (data) => {
        this.setState({
          videos: data,
          selectedVideo: data[0]
        })
      }
    );
  }
  handleSelect = (selectedVideo) => {
    this.setState({
      selectedVideo : selectedVideo
    })
  }
  handleSearchTerm = (searchterm)=>{
    this.setState({
      search_term:searchterm,
      selectedVideo:null,
      videos:[]
    })

    YTSearch(
      {key:API_KEY, term: this.state.search_term}, 
      (data) => {
        this.setState({
          videos: data,
          selectedVideo: data[0]
        })
      }
    );
  }


  render(){
    return (
      <div>
          <SearchBar handleSearchTerm={this.handleSearchTerm}/>
          <VideoDetail 
            video={this.state.selectedVideo} />
          <VideoList 
            onVideoSelect={this.handleSelect}
            videos={this.state.videos}/>
      </div>
      );
    }
}
ReactDOM.render(<App/>, document.querySelector('.container'));

```

* search_bar.js

```js
import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    }
    onSubmit=(e) => {
        e.preventDefault();
        this.props.handleSearchTerm(this.state.term);
    }

    render(){
        return (
            <div>
                <form className="search-bar" onSubmit={this.onSubmit}>
                    <input onChange={this.onInputChange}/>
                    <button type="submit">검색</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;
```

* 결과

<img width="880" alt="1-12 검색기능 추가 결과" src="https://user-images.githubusercontent.com/55272324/73992878-d9201500-4993-11ea-83ee-80c956529bf0.PNG">

### 13) 검색 시간을 조절

가동시키던 서버를 중지시킨 후 아래 라이브러리를 설치한다

* `lodash`검색 시간을  조절하는 라이브러리 설치 

```js
PS C:\Users\pyc\desktop\work\study\til\re-act\0206My-youtube> npm install --save lodash                                                     + lodash@3.10.1
updated 1 package in 4.025s
```

라이브러리 설치 후 아래 코드 수정

* index.js

```js

```

