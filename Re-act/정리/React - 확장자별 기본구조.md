#  React - 확장자별 기본 구조

## 0. 기본 설정

facebook 배포판 `Create-react-app` 사용

### 1) react 파일 생성

```powershell
PS C:\Users\pyc\desktop\work\study\til\Re-act> npx create-react-app my-app
npx: installed 99 in 5.626s

Creating a new React app in C:\Users\pyc\desktop\work\study\til\Re-act\my-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


> core-js@2.6.11 postinstall C:\Users\pyc\desktop\work\study\til\Re-act\my-app\node_modules\babel-runtime\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js@3.6.4 postinstall C:\Users\pyc\desktop\work\study\til\Re-act\my-app\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js-pure@3.6.4 postinstall C:\Users\pyc\desktop\work\study\til\Re-act\my-app\node_modules\core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"

+ react@16.12.0
+ cra-template@1.0.1
+ react-scripts@3.3.1
+ react-dom@16.12.0
added 1550 packages from 747 contributors and audited 918301 packages in 125.821s

46 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


Installing template dependencies using npm...
npm WARN eslint-config-react-app@5.2.0 requires a peer of eslint-plugin-flowtype@3.x but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\webpack-dev-server\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\jest-haste-map\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @testing-library/user-event@7.2.1
+ @testing-library/jest-dom@4.2.4
+ @testing-library/react@9.4.0
added 16 packages from 40 contributors and audited 918473 packages in 24.239s

46 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Removing template package using npm...

npm WARN eslint-config-react-app@5.2.0 requires a peer of eslint-plugin-flowtype@3.x but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\webpack-dev-server\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\jest-haste-map\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

removed 1 package and audited 918472 packages in 16.638s

46 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


Success! Created my-app at C:\Users\pyc\desktop\work\study\til\Re-act\my-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  npm start

Happy hacking!
PS C:\Users\pyc\desktop\work\study\til\Re-act>
```

### 2) name 이동

```powershell
PS C:\Users\pyc\desktop\work\study\til\Re-act> cd my-app
PS C:\Users\pyc\desktop\work\study\til\Re-act\my-app> ls


    디렉터리: C:\Users\pyc\desktop\work\study\til\Re-act\my-app


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----     2020-02-06   오전 9:12                node_modules
d-----     2020-02-06   오전 9:11                public
d-----     2020-02-06   오전 9:11                src
-a----     1985-10-26   오후 5:15            310 .gitignore
-a----     2020-02-06   오전 9:12         581442 package-lock.json
-a----     2020-02-06   오전 9:12            742 package.json
-a----     1985-10-26   오후 5:15           2891 README.md
```

### 3) React 서버 가동

```powershell
PS C:\Users\pyc\desktop\work\study\til\Re-act\my-app> npm start

> my-app@0.1.0 start C:\Users\pyc\desktop\work\study\til\Re-act\my-app
> react-scripts start

i ｢wds｣: Project is running at http://192.168.72.1/
i ｢wds｣: webpack output is served from /
i ｢wds｣: Content not from webpack is served from C:\Users\pyc\desktop\work\study\til\Re-act\my-app\public
i ｢wds｣: 404s will fallback to /index.html
Starting the development server...
Compiled successfully!

You can now view my-app in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.72.1:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

### 4) 결과

<img width="637" alt="0  기본 설정 결과" src="https://user-images.githubusercontent.com/55272324/73895507-2ed8bc80-48c3-11ea-83ea-28a74ee0945f.PNG">





## 1 `.js` 기본 형태

```js
import React, { Component } from 'react';

class className extends Component {
    render() {
        return(
            <form>
                <div>

                </div>
                <div>

                </div>
            </form>
        )
    }
}

```

