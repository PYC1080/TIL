# 실습 - React-router



## 목표



## 0. 설정

### 1) create-react-app

```powershell
PS C:\Users\pyc\desktop\work\study\til\re-act\ex> npx create-react-app react-router
npx: installed 99 in 5.562s
...
```

### 2) 하부 파일 구조 생성

```
...React-router
		ㄴnode_modules
		ㄴsrc
			ㄴcomponents
				ㄴheaders.js
				ㄴrouters.js
			ㄴroutes
				ㄴpage1.js
				ㄴpage2.js
				ㄴpage3.js
			ㄴApp.js
			,,,
```



### 3) 





## 1. 과정



### 1) 각 파일 기본 구조 작성

* App.js

```js
import React from 'react';
import Header from './components/headers'
import Router from './components/routers'
import Page1 from './routes/page1'
import Page2 from './routes/page2'
import Page3 from './routes/page3'

const App = () => {
  return (
    <div>
      Mynotes
      <Header />
      <Router />
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
};

export default App;
```

* header.js

```js
import React from 'react';

const Header = () => {
    return (
        <div>
            <ul>
                <li>page1</li>
                <li>page2</li>
                <li>page3</li>
            </ul>
        </div>
    );
};

export default Header;
```

* routers.js

```js
import React from 'react';

const routers = () => {
    return (
        <div>
            
        </div>
    );
};

export default routers;
```

* page1.js

```js
import React from 'react';

const Page1 = () => {
    return (
        <h1>
            page1입니다 
        </h1>
    );
};

export default Page1;
```

* page2.js

```js
import React from 'react';

const Page2 = () => {
    return (
        <h1>
            page2입니다 
        </h1>
    );
};

export default Page2;
```

* page3.js

```js
import React from 'react';

const Page3 = () => {
    return (
        <h1>
            page3입니다 
        </h1>
    );
};

export default Page3;
```

### 2) React-router-dom install

가동되는 서버를 중지한 후 아래 경로에 `react-router-dom`을 설치한다

* react-router-dom 설치

```powershell
PS C:\Users\pyc\desktop\work\study\til\Re-act\ex\react-router> npm install --save react-router-dom
npm WARN eslint-config-react-app@5.2.0 requires a peer of eslint-plugin-flowtype@3.x but none is installed. You must install peer dependencies yourself.
...
PS C:\Users\pyc\desktop\work\study\til\Re-act\ex\react-router>
```

설치 후 서버를 재가동 한다.



### 3) React-router-dom code

* headers.js

```js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to ="/my_note1">page1 </ Link>
                </li>
                <li>
                    <Link to ="/my_note2">page2 </ Link>
                </li>
                <li>
                    <Link to ="/my_note3">page3 </ Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
```

* routers.js

```js
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './headers';
import Page1 from '../routes/page1';
import Page2 from '../routes/page2';
import Page3 from '../routes/page3';

export default () => {
    return (
        <Router>
            <Header/>
            <Route path ="/my_note1" component={Page1} />
            <Route path ="/my_note2" component={Page2} />
            <Route path ="/my_note3" component={Page3} />
        </Router>
    );
};

```

* App.js

```js
import React from 'react';

import Router from './components/routers'


const App = () => {
  return (
    <div>
      Mynotes

      <Router />

    </div>
  );
};

export default App;
```

* 결과

<img width="888" alt="1-3 react-router-dom code 결과" src="https://user-images.githubusercontent.com/55272324/74004378-f5827880-49b8-11ea-85e9-dfa285959ca9.PNG">