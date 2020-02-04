# Javascript - chapter 10 문서 객체 모델



## 10.1 문서 객체 모델과 관련된 용어 정리

* 문서 객체 : HTML 페이지에 존재하는 태그를 자바스크립트에서 이용할 수 있는 객체로 만든 것이 문서 객체이다 

![6  문서객체모델 예시](https://user-images.githubusercontent.com/55272324/73320906-36291600-4284-11ea-9d3c-e5fd8a93e5d4.PNG)

* 요소 노드 : HTML 태그
* 텍스트 노드 : 요소 노드 안에 들어있는 글자
* 객체 생성

```
1. 정적 객체 생성 : 웹페이지가 처음 HTML 페이지에 적혀 있는 태그들을 읽으며 생성하는 것
2. 동적 객체 생성 : 자바스크립트로 원래 HTML 페이지에는 없던 문서 객체를 생성하는 것
```



## 10.2 문서 객체 만들기 1

* body 태그 구성

```html
<body>
    
</body>
```

* document 객체의 노드 생성 메서드

```html
1. createElement(tagName) : 요소 노드를 생성
2. createTextNode(text) : 텍스트 노드를 생성
```

* 문서 객체의 연결 메서드

```html
1. aapendChild(node) : 객체에 노드를 연결
```

#### 예제 : document

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
     
        let h1_tag = document.createElement("h1");
        let greeting_text = document.createTextNode("Hi, there");
        h1_tag.appendChild(greeting_text);
        document.body.appendChild(h1_tag);

    </script>
  </head>
  <body>
    <h1>Hello, DOM</h1>
  </body>
</html>

```

![7  document 오류](https://user-images.githubusercontent.com/55272324/73321244-3aa1fe80-4285-11ea-9a7e-78eca1fc14fd.PNG)



#### 해결 - 예제 : document

* 방법 1

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      window.onload = function(){
        let h1_tag = document.createElement("h1");
        let greeting_text = document.createTextNode("Hi, there");
        h1_tag.appendChild(greeting_text);
        document.body.appendChild(h1_tag);
      };

    </script>
  </head>
  <body>
    <h1>Hello, DOM</h1>
  </body>
</html>

```

* 결과 - 방법1

![8  document 오류해결1](https://user-images.githubusercontent.com/55272324/73321339-7b9a1300-4285-11ea-9ebd-0696f1f66107.PNG)

* 방법 2

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <h1>Hello, DOM</h1>
    <script type="text/javascript">
      let h1_tag = document.createElement("h1");
      let greeting_text = document.createTextNode("Hi, there");
      h1_tag.appendChild(greeting_text);
      document.body.appendChild(h1_tag);
    </script>
  </body>
</html>

```

* 결과 - 방법 2

![8  document 오류해결1](https://user-images.githubusercontent.com/55272324/73321339-7b9a1300-4285-11ea-9ebd-0696f1f66107.PNG)

#### 실습 : document

```html
<body>
    <h1>Hello, DOM</h1>
</body>

body 부분에 daum과 naver가 추가되어 나타날 수 있도록 코드 작성
```



#### 결과 - 실습 : document

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      window.onload = function(){
      let _ul = document.createElement("ul");
      let _li1 = document.createElement("li");
      let _li2 = document.createElement("li");
      let _naver = document.createTextNode("Naver");
      let _daum = document.createTextNode("Daum");

      _li1.appendChild(_naver);
      _li1.appendChild(_daum);

      _ul.appendChild(_li1);
      _ul.appendChild(_li2);

      document.body.appendChild(_ul);
    };
    </script>
  </head>
  <body>
    <h1>Hello, DOM</h1>

  </body>
</html>

```

![9  document 실습 결과](https://user-images.githubusercontent.com/55272324/73322500-40e5aa00-4288-11ea-8f06-3a51f83d261b.PNG)



## 10.3 문서 객체 만들기 2

> 텍스트 노드를 갖지 않는 노드를 생성하는 방법

#### 예제 : 문서 객체 만들기2

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      window.onload = function(){
      let myImg = document.createElement("img");
      myImg.src ="1-1. dom 구조 구체화.PNG";
      myImg.width = 745;
      myImg.height = 487;
      document.body.appendChild(myImg);
    };
    </script>
  </head>
  <body>
    <h1>Hello, Img</h1>

  </body>
</html>
```

#### 결과 - 예제 : 문서 객체 만들기2

![10  문서 객체 만들기 2 결과](https://user-images.githubusercontent.com/55272324/73323103-a1c1b200-4289-11ea-8829-f2de987bd548.PNG)



* 문서 객체의 속성 메서드

```html
1. setAttribute(name,value) : 객체의 속성을 지정한다
2. getAttribute(name) : 객체의 속성을 가져온다
```

#### 예제 : 문서 객체 속성 메서드

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
     window.onload = function(){
       let _ul = document.reateElement("ul");
       let _li1 = document.createElement("li");
       let _li2 = document.createElement("li");
       let _naver = document.createTextNode("Naver");
       let _daum = document.createTextNode("Daum");

       _li1.appendChild(_naver);
       _li1.appendChild(_daum);

       _ul.appendChild(_li1);
       _ul.appendChild(_li2);

       document.body.appendChild(_ul);

       let myImg = document.createElement("img");
       myImg.src ="1-1. dom 구조 구체화.PNG";
       myImg.width = 745;
       myImg.height = 487;


       document.body.appendChild(myImg);

       let div1 = document.getElementById("myDiv1");
       div1.innerHTML = "<h1 style='color: blue;'> Hello, PARK. Hi, Document</h1>"
   
     }
    </script>
  </head>
  <body>
    <h1>Hello, DOM</h1>
    <div id="myDiv1">

    </div>
  </body>
</html>

```

#### 결과 - 예제 : 문서 객체 속성 메서드

![11  문서 객체의 속성 메서드 결과](https://user-images.githubusercontent.com/55272324/73323440-cc603a80-428a-11ea-8fd5-6dc25ed3a57b.PNG)



## 10.4 문서 객체 만들기 3

> 앞에서 살펴본 노드를 만들고 연결하는 방법보다 더 쉬운 방법

* 문서 객체의 innerHTML 속성

```html
<여는_태그> innerHTML 속성 <닫는_태그>
```

#### code 10-11 : innerHTML 속성을 사용한 문서 객체 생성

```html
<!DOCTYPE html>
<html>
    <head>
        <script>
            window.onload = function(){
                let output =''
                output += '<ul>';
                output += ' <li>JavaScript</li>';
                output += ' <li>jQuery</li>'
                output += ' <li>Ajax</li>'
                output += '</ul>'
                document.body.innerHTML = output;
                document.body.innerHTML += '<h1>Document Object Model</h1>';
            };
        </script>
    </head>
    <body>

    </body>
</html>
```

#### 결과 - code 10-11 : innerHTML 속성을 사용한 문서 객체 생성

![1  code 10-11 result](https://user-images.githubusercontent.com/55272324/73743761-a955ef00-4792-11ea-80b6-d275eda46998.PNG)

* `textContent`속성 : HTML 형태의 문자열을 HTML 태그로 넣지 않고 단순 글자로 넣고 싶은 경우 사용하는 속성

#### code 10-12 : 문서 객체의 textContent 속성

```html
<!DOCTYPE html>
<html>
    <head>
        <script>
            window.onload = function(){
                let output =''
                output += '<ul>';
                output += ' <li>JavaScript</li>';
                output += ' <li>jQuery</li>'
                output += ' <li>Ajax</li>'
                output += '</ul>'
                document.body.textContent = output;
                document.body.textContent += '<h1>Document Object Model</h1>';
            };
        </script>
    </head>
    <body>

    </body>
</html>
```

#### 결과 - code 10-12 : 문서 객체의 textContent 속성

![2  code 10-12 result](https://user-images.githubusercontent.com/55272324/73743937-09e52c00-4793-11ea-8213-a312b9cb59c8.PNG)

## 10.5 문서 객체 가져오기 1

>웹페이지에 이미 존재하는 HTML 태그를 자바스크립트로 가져오는 방법

* document 객체의 문서 객체 선택 메서드(1)

```html
1. getElementById(id) : 태그의 id 속성이 id 매개변수와 일치하는 문서 객체를 가져온다.
```

#### code 10-15 : 문서 객체의 innerHTML 속성 변경

```html
<!DOCTYPE html>
<html>
    <head>
        <script>
            window.onload = function(){
                var header1 = document.getElementById('header-1');
                var header2 = document.getElementById('header-2');

                header1.innerHTML = 'with getElementById()';
                header2.innerHTML = 'with getElementById()';
            };
        </script>
    </head>
    <body>
    </body>
</html>
```

#### 결과 - code 10-15 : 문서 객체의 innerHTML 속성 변경

![3  code 10-15 result](https://user-images.githubusercontent.com/55272324/73744893-1e2a2880-4795-11ea-8cd5-c9ac3eb050c3.PNG)

* `innerHTML` 과 `innerText` 비교 

#### 예제 : innerHTML 과 innerText 비교

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
     window.onload = function(){
       let div1 = document.getElementById("myDiv1");
       div1.innerHTML = "<h1 style='color: blue;'> Hello, PARK. Hi, Document</h1>"


       let div2 = document.getElementById("myDiv2");

       div2.innerText = "<h1 style='color: blue;'> Hello, PARK. Hi, Document</h1>"
     }
    </script>
  </head>
  <body>
    <h1>Hello, innerHTML 과 innerText 비교</h1>
    <div id="myDiv1"></div>
    <div id="myDiv2"></div>
  </body>
</html>

```

#### 결과 - 예제 : innerHTML과 innerText 비교

![12  innerHTML과 innerText 비교](https://user-images.githubusercontent.com/55272324/73323702-a12a1b00-428b-11ea-84ac-89d06cd7be85.PNG)



## 10.6 문서 객체 가져오기 2

> 여러 개의 문서 객체를 가저오는 방법

* document 객체의 문서 객체 선택 메서드(2) 

```html
1. getElementsByName(name) : 태그의 name 속성이 name 매개변수와 일치하는 문서 객체를 배열로 가져온다.
2. getElementsByTagName(tagName) : tagName 매개변수와 일치하는 문서 객체를 배열로 가져온다.
```

#### code 10-16 : document.getElementsByTagName() 메서드

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Index</title>
        <script>
            window.onload = function(){
                let headers = document.getElementsByTagName('h1');
            }
        </script>
    </head>
    <body>
        <h1>Header</h1>
        <h1>Header</h1>
    </body>
</html>
```

#### 결과 - code 10-16 : document.getElementsByTagName() 메서드

![4  code 10-16 result](https://user-images.githubusercontent.com/55272324/73745167-bde7b680-4795-11ea-83e1-8b71f0023db3.PNG)

* 문서 객체 배열에 `for in` 반복문을 사용하면 안되는 이유 : for in 반복문을 사용하면 문서 객체 이외의 속성에도 접근하기 때문이다

#### code 10-18 : getElementsByTagName() 메서드

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Index</title>
        <script>
            window.onload = function(){
                let headers = document.getElementsByTagName('h1');

                for (let i = 0; i<headers.length; i++){
                    headers[i].innerHTML = 'with getElementsByTagName()';
                }
            }
        </script>
    </head>
    <body>
        <h1>Header</h1>
        <h1>Header</h1>
    </body>
</html>
```

#### 결과 - code 10-18 : getElementsByTagName() 메서드

![5  code 10-18 result](https://user-images.githubusercontent.com/55272324/73745426-567e3680-4796-11ea-8b79-c974044f087a.PNG)

#### code 10-19 : 잘못된 문서 객체 배열의 사용

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Index</title>
        <script>
            window.onload = function(){
                let headers = document.getElementsByTagName('h1');
                let output ='';
                for (let i in headers){
                    output += i + '\n';
                }
                console.log(output);
            }
        </script>
    </head>
    <body>
        <h1>Header</h1>
        <h1>Header</h1>
    </body>
</html>
```

#### 결과 - code 10-19 : 잘못된 문서 객체 배열의 사용

![6  code 10-19 result](https://user-images.githubusercontent.com/55272324/73745569-b379ec80-4796-11ea-9657-10a4ccf0e26a.PNG)

## 10.7 문서 객체 가져오기 3

* document 객체의 문서 객체 선택 메서드(3) : 문서 객체를 선택하는 메서드

```html
1. querySelector(선택자) ; 선택자로 가장 처음 선택되는 문서 객체를 가져온다
2. querySelectorAll(선택자) : 선택자를 통해 선택되는 문서 객체를 배열로 가져온다
```

#### code 10-20 : document.querySelector() 메서드

```html
<!DOCTYPE html>
<html>
    <head>
        <title>DOM Basic</title>
        <script>
            window.onload = function(){

                let header1 = document.querySelector('#header-1');
                let header2 = document.querySelector('#header-2');

                header1.innerHTML = 'with getElementById()';
                header2.innerHTML = 'with getElementById()';
            }
        </script>
    </head>
    <body>
        <h1 id='header-1'>header</h1>
        <h1 id='header-2'>header</h1>
    </body>
</html>
```

#### 결과 - code 10-20 : document.querySelector() 메서드

![7  code 10-20 result](https://user-images.githubusercontent.com/55272324/73745864-592d5b80-4797-11ea-8172-bc792e92d21c.PNG)

## 10.8 문서 객체의 스타일 조작

> style 속성 : style 속성을 사용해 해당 문서 객체의 스타일을 변경할 수 있다.

* sytle tag 구성

```html
<body>
   	<h1 id="header">header</h1>
</body>
```

#### code 10-22 : 문서 객체의 스타일 지정

```html
<!DOCTYPE html>
<html>
    <head>
        <script>
            window.onload = function(){
                var header = document.getElementById('header');
                header.style.border = '2px solid black';
                header.style.color = 'orange';
                header.style.fontFamily = 'hevetica';
            }
        </script>
    </head>
    <body>
        
    </body>
</html>
```

#### 결과 - code 10-22 : 문서 객체의 스타일 지정

![8  code 10-22 result](https://user-images.githubusercontent.com/55272324/73746515-b544af80-4798-11ea-8779-410ac4fef777.PNG)

* 스타일 속성 이름 : 자바스크립트는 특수 기호 `-`를 식별자에 사용할 수 없다. 따라서 특수 기호 `-`으로 끊긴 단어의 첫 글자를 대문자로 변경하여 사용한다

```html
예시) 
background-image : backgroundImage
box-sizing : boxSizing
```



## 10.9 문서 객체 제거

* 문서 객체의 제거 메서드

```html
1. removeChild(child) : 문서 객체의 자식 노드를 제거한다
```

* 문서 객체의 제거 메서드 body 태그 구성

``` html
<body>
    <h1 id="will-remove">
        Header
    </h1>
</body>
```



## 10.10 조금 더 나아가기

### (1) 문서 객체를 사용한 시계

* 시계 태그 구성

```html
<body>
    <h1 id="clock">
        
    </h1>
</body>
```

#### 코드 10-27 현재 시각 표시

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
        <script>
            window.onload = () => {
            let clock = document.getElementById('clock');

            setInterval(function () {
                clock.innerHTML = new Date().toString();
            } ,1000);

            clock.onclick = function() {
                clock.style = "color : white;"
                clock.style.backgroundColor = "black";
            };
        };
        </script>
    </head>
    <body>
        <h1 id="clock">

        </h1>
    </body>
</html>

```

#### 결과 - 코드 10-27 : 현재 시각 표시

![14  코드 10-27 현재 시각 표시 결과1](https://user-images.githubusercontent.com/55272324/73335242-1f99b380-42b2-11ea-9abc-b34419886385.PNG)
![14  코드 10-27 현재 시각 표시 결과2](https://user-images.githubusercontent.com/55272324/73335244-20324a00-42b2-11ea-861c-db4d3d5c8cf7.PNG)

### (2) 문서 객체를 사용한 움직임 구현

#### code 10-33 : 문서 객체를 사용한 움직임 구현

```html
<!DOCTYPE html>
<html>
    <title>Animation Basic</title>
    <head>
        <script>
            window.onload = function() {
                let sun = document.getElementById('sun');
                let earth = document.getElementById('earth');
                let moon = document.getElementById('moon');

                sun.style.position = 'absolute';
                earth.style.position = 'absolute';
                moon.style.position = 'absolute';
                sun.style.left = 250 + 'px';
                sun.style.top = 200 + 'px';

                let earthAngle = 0;
                let moonAngle = 0;

                setInterval(function(){
                    let earthLeft = 250 + 150 * Math.cos(earthAngle);
                    let earthTop = 200 + 150 * Math.sin(earthAngle);
                    let moonLeft = earthLeft + 50 * Math.cos(moonAngle);
                    let moonTop = earthTop + 50 * Math.sin(moonAngle);

                    earth.style.left = earthLeft + 'px';
                    earth.style.top = earthTop + 'px';
                    moon.style.left = moonLeft +'px';
                    moon.style.top = moonTop + 'px';

                    earthAngle += 0.1;
                    moonAngle += 0.3;
                }, 1000 / 30);
            };
        </script>
    </head>
    <body>
        <h1 id="sun">@</h1>
        <h1 id="earth">o</h1>
        <h1 id="moon">*</h1>
    </body>
</html>
```

#### 결과 - code 10-33 : 문서 객체를 사용한 움직임 구현

![9  code 10-33 result](https://user-images.githubusercontent.com/55272324/73748751-749b6500-479d-11ea-80ca-2285e7b8e4b0.PNG)

### (3) 문서 객체와 객체지향을 사용한 움직임 구현

#### code 10-40 : 문서 객체와 객체 지향을 사용한 움직임 구현

```html
<!DOCTYPE html>
<html>
    <head>
        <script>
            function nextRandomInteger(limit){
                return Math.round(Math.random() * limit);
            }

            let alphabet = 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ'
            function randomAlphabet(){
                return alphabet.charAt(nextRandomInteger(14));
            }

            function randomSpeed(maxSpeed){
                return Math.random() * maxSpeed - Math.random() * maxSpeed;
            }
        </script>
        <script>

            var canvasWidth = 700;
            var canvasHeight = 400;

            function MovingText(){
                this.x = nextRandomInteger(canvasWidth);
                this.y = nextRandomInteger(canvasHeight);
                this.vx = randomSpeed(10);
                this.vy = randomSpeed(10);

                this.body = document.createElement('h1');
                this.body.innerHTML = randomAlphabet();
                this.body.style.position = 'absolute';

                document.body.appendChild(this.body);
            }

            MovingText.prototype.move = function (){
                if (this.x < 0 || this.x > canvasWidth)(this.vx *= -1);
                if (this.y < 0 || this.y > canvasHeight)(this.vy *= -1);

                this.x += this.vx;
                this.y += this.vy;

                this.body.style.left = this.x + 'px';
                this.body.style.top = this.y + 'px';
            };
        </script>
        <script>
            window.onload = () => {
                var movingTexts = [];

                for(var i =0; i <100; i++){
                    movingTexts.push(new MovingText());
                }

                setInterval(function(){
                    for (var i in movingTexts){
                        movingTexts[i].move();
                    }
                }, 1000 / 30)
            }
        </script>
    </head>
    <body>
        
    </body>
</html>
```

#### 결과 - code 10-40 : 문서 객체와 객체 지향을 사용한 움직임 구현

![10  code 10-40 result](https://user-images.githubusercontent.com/55272324/73749705-3b63f480-479f-11ea-9872-6b2f2c674ca3.PNG)

## 연습문제

### 01 다음 문서 객체 선택 메서드 중에 문서 객체를 하나만 선택하는 메서드는 무엇인가

```
1. document.getElementsByName()
2. document.getElementsByClassName()
3. document.querySelector()
4. document.getElementByClassName()
```



### 02 다음 중에서 문서 객체의 스타일을 변경할 때 사용하는 속성은 무엇인가

```
1. styles 	2. style 	3. appearance  	4. exterior
```



### 03 다음 표의 오른쪽 부분을 채워보라

| 스타일 시트의 스타일 속성 | 자바스크립트 문서 객체의 스타일 속성 |
| ------------------------- | ------------------------------------ |
| font-family               |                                      |
| border-radius             |                                      |
| background-size           |                                      |
| border                    |                                      |



## 04 부록 C와 D 의 내용을 살펴보라