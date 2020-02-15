# Javascript  - chapter 13 기본

> Part2. jQuery



## 13.1 개요



## 13.2 다운로드

* [jQuery Download](https://jquery.com/download/)
* CDN : 인터넷이 연결되어 있는 상황에서 jQuery를 다운로드 받지 않더라도 해당 jQuery를 인터넷 환경을 통해 사용할 수 있게 해준다

```html
Google hosted libraries - jQuery 3.x snippet :
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```



## 13.3 $(document).ready()

#### code 13-4 document 객체의 ready 이벤트 연결 및 간단한 연결

```html
<script>
	$(document).ready(function(){
        
    });
</script>
__________________________________
<script>
	$(function(){
        
    });
</script>
```

`$(document).ready ready()` : 문서가 준비되면 매개변수로 넣은 콜백 함수를 실행하라

#### code 13-5 window 객체의 load 이벤트 연결

```html
<script>
	window.onload = function(){
        
    };
</script>
```

고전 이벤트 모델은 한 번에 하나의 이벤트만 연결할 수 있다. 반면에 jQuery 이벤트 메서드는 여러 개의 함수를 연결 할 수 있다.

#### code 13-6 복수개의 이벤트 연결

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script>
            $(document).ready(function (){
                console.log('First Ready');
            })
            $(document).ready(function (){
                console.log('Second Ready');
            })
            $(document).ready(function (){
                console.log('Third Ready');
            })
        </script>
    </head>
    <body>

    </body>
</html>
```

![code 13-6 result](https://user-images.githubusercontent.com/55272324/74077981-3be2e080-4a68-11ea-951d-0d35a2cef168.PNG)

* `$`,`_` : 자바스크립트에서 사용할 수 있는 식별자

## 13.4 기본 선택자

### (1) 전체 선택자

* `*`(전체 선택자) : HTML 페이지에 있는 모든 문서 객체를 선택하는 선택자

**code 13-8 전체 선택자(*)**

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script>
            $(document).ready(function(){
                $('*').css('color', 'red');
            });
        </script>
    </head>
    <body>
        <h1>body-h1</h1>
        <h2>body-h2</h2>
        <h3>body-h3</h3>
    </body>
</html>
```

**결과**

![code 13-8 result](https://user-images.githubusercontent.com/55272324/74078245-2e7b2580-4a6b-11ea-9f05-af5b609ead9b.PNG)

### (2) 태그 선택자

* `'tag name'`(태그 선택자) : 태그 이름을 그냥 사용해 특정 태그를 선택하는 선택자

**code 13-10 태그 선택자**

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script>
            $(document).ready(function(){
                $('h1').css('color', 'red');
                $('h2').css('color', 'blue');
                $('h3').css('color', 'yellow');
            });
        </script>
    </head>
    <body>
        <h1>body-h1</h1>
        <h2>body-h2</h2>
        <h3>body-h3</h3>
    </body>
</html>
```

**결과**

![code 13-10 result](https://user-images.githubusercontent.com/55272324/74079420-9ab15580-4a7a-11ea-939f-7b49555b4594.PNG)

* 여러개의 태그를 선택하는 방법 :  하나 이상의 태그 선택자를 동시에 사용하고 싶은 경우에는 쉼표로 선택자를 구분한다.

**code 13-11**

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script>
            $(document).ready(function(){
                $('h1, h3').css('color', 'red');
                $('h2').css('color', 'blue');
            });
        </script>
    </head>
    <body>
        <h1>body-h1</h1>
        <h2>body-h2</h2>
        <h3>body-h3</h3>
    </body>
</html>
```

**결과**

![code 13-11 result](https://user-images.githubusercontent.com/55272324/74079451-0d223580-4a7b-11ea-862e-df9c9f714793.PNG)

### (3) 아이디 선택자

* `id=''`(아이디 선택자) :특정 id 속성이 있는 문서 객체를 선택하는 선택자

**code 13-14**

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script>
            $(document).ready(function(){
                $('#target').css('color', 'red');
                $('h3#target').css('color', 'blue');
                $('h2#target2').css('color', 'purple');
            });
        </script>
    </head>
    <body>
        <h1 id="target">body-h1</h1>
        <h2 id="target2">body-h2</h2>
        <h3 id="target">body-h3</h3>
    </body>
</html>
```

**결과**

![code 13-14 result](https://user-images.githubusercontent.com/55272324/74080586-c63b3c80-4a88-11ea-85ed-dd9fd6c30fac.PNG)

### (4) 클래스 선택자

* `class=''`(클래스 선택자) : 특정 class 속성이 있는 문서 객체를 선택하는 선택자

**code 13-17 클래스 선택자**

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script>
            $(document).ready(function(){
                $('.item').css('color', 'red');
                $('.item2').css('color', 'gray');
                $('h1.item').css('color', 'blue');
                $('h2.item').css('color', 'purple');
                $('.item.select').css('color', 'orange');
            });
        </script>
    </head>
    <body>
        <h1 class="item">h1-item</h1>
        <h1 class="item">h1-item</h1>
        <h1 class="item2">h1-item2</h1>
        <h2 class="item">h2-item</h2>
        <h2 class="item">h2-item</h2>
        <h2 class="item2">h2-item2</h2>
        <h2>______________________</h2>
        <h2 class="item select">h2-item select</h2>
    </body>
</html>
```

**결과**

![code 13-17 result](https://user-images.githubusercontent.com/55272324/74080703-43b37c80-4a8a-11ea-8940-8c5a220ad07f.PNG)

`.item` 보다 클래스를 명확하게 지정해준 `h1.item` & `h2.item`이 적용되었다.

두음절로 되어있는 `item select`의 경우 해당 음절을 붙여주어야 정상적으로 적용되었다.

## 13.5 자손 선택자와 후손 선택자 

* 자손 선택자와 후손 선택자는 기본 선택자의 앞에 붙여 사용하며, 기본 선택자의 범위를 제한 한다.

### (1) 자손 선택자

* 자손 선택자 : 자손 선택자는 `요소 A > 요소 B` 형태로 사용한다. 요소 A 내부에 있는 요소 B 를 대상으로 범위를 한정해 주는 효과를 갖는다.

**code 13-19 자손 선택자**

```html
<!DOCTYPE html>
<html>
    <head>
        <script 
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
        </script>
        <script>
            $(document).ready(function(){
                $('body > div').css('color', 'red');
            })
        </script>
    </head>
    <body>
        <div>
            <ul>
                <li>Apple</li>
                <li>Bag</li>
            </ul>
        </div>
        <ul>
            <li>Cat</li>
            <li>Dog</li>
            <li>Elephant</li>
        </ul>
    </body>
</html>
```

**결과**

![code 13-19 result](https://user-images.githubusercontent.com/55272324/74080985-000e4200-4a8d-11ea-8ff4-9a62d1250df3.PNG)

### (2) 후손 선택자

* 후손 선택자 : 후손 선택자는 `요소A 요소B` 형태로 사용한다. 요소 A의 후손인 요소 B로 범위를 한정한다

**code 13-20 후손 선택자**

```html
<!DOCTYPE html>
<html>
    <head>
        <script 
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
        </script>
        <script>
            $(document).ready(function(){
                $('body > div').css('color', 'red');
                $('body ul').css('color', 'blue');
            })
        </script>
    </head>
    <body>
        <div>
            <li>Apple</li>
            <ul>
                <li>Bag</li>
            </ul>
        </div>
        <ul>
            <li>Cat</li>
            <div>
                <li>Dog</li>
            </div>
        </ul>
    </body>
</html>
```

**결과**

![code 13-20 result](https://user-images.githubusercontent.com/55272324/74081037-bd009e80-4a8d-11ea-9504-6192a6226dcb.PNG)

## 13.6 속성 선택자

* 속성 선택자 : 기본 선택자 뒤에 붙여 사용

```
1. 요소[속성=값] : 속성과 값이 같은 문서 객체를 선택한다
2. 요소[속성!=값] : 속성 안의 값이 특정 값과 같은 문서 객체를 선택한다
3. 요소[속성~=값] : 속성 안의 값이 특정 값을 단어로 시작하는 문서 객체를 선택한다
4. 요소[속성^=값] : 속성 안의 특정 값으로 시작하는 문서 객체를 선택한다
5. 요소[속성$=값] : 속성 안의 값이 특정 값으로 끝나는 문서 객체를 선택한다
6. 요소[속성*=값] : 속성 안의 값이 특정 값을 포함하는 문서 객체를 선택한다
```

**code 13-22**

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script>
            $(document).ready(function(){
                $('input[type="text"]').val('input type : text');
            })
        </script>
    </head>
    <body>
        <input type="text"/>
        <input type="password"/>
        <input type="radio"/>
        <input type="checkbox"/>
        <input type="file"/>
    </body>
</html>
```

**result - code 13-22**

![code13-22 result](https://user-images.githubusercontent.com/55272324/74582203-4ec35b00-4ffc-11ea-89d7-7bcc5328a645.PNG)





## 13.7 필터 선택자

### (1) 입력 양식 필터 선택자



### (2) 위치 필터 선택자



### (3) 함수 필터 선택자



## 13.8 배열 관리

* `each()`메서드 : jQuery로 배열을 관리할 때 사용하는 메서드이다. each() 메서드를 통해 매개변수로 입력한 함수로 객체나 배열의 요소를 검사할 수 있다.

* each() 메서드의 형태

```html
1. $.each(object, function(index, html){})
2. $(selector).each(function(index, item){})
```

### (1) 자바스크립트 배열 관리

**code 13-30 $.each() 메서드**

```html
<!DOCTYPE html>
<html>
    <head>
        <script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
        </script>
        <script>
            $(document).ready(function(){
                let array =[
                    { name: 'Naver', link:'https://www.naver.com'},
                    { name: 'Daum', link:'https://www.daum.net'},
                    { name: 'Google', link:'https://www.google.com'}
                ];
                $.each(array, function(index, item){
                    let output ="";
                    output += '<a href="' + item.link + '">';
                    output += '     <h1>' + item.name + '</h1>';
                    output += '</a>'

                    document.body.innerHTML += output;
                });
            })
        </script>
    </head>
    <body>

    </body>
</html>
```

**결과**

![code 13-30 result](https://user-images.githubusercontent.com/55272324/74081531-57afac00-4a93-11ea-9a58-aaf3b39e131d.PNG)

* `forEach()` 메서드와 `each()` 메서드의 차이

```html
1. forEach() : [].forEach(function (item, index){});
2. each() : $.each(function (index, item){});
```

### (2) jQuery 배열 관리

* jQuery 배열 : jQuery 배열 객체는 따로 만드는 것이 아니라, 선택자로 여러 개의 문서 객체를 선택할 때 생성된다.

**code 13-36 each()메서드**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            .hight-light-0 {background: yellow; }
            .hight-light-1 {background: orange; }
            .hight-light-2 {background: blue; }
            .hight-light-3 {background: green; }
            .hight-light-4 {background: red; }
        </style>
        <script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
        </script>
        <script>
            $(document).ready(function(){
                $('h1').each(function(index, item){
                    $(item).addClass('hight-light-' +index);
                })
            })
        </script>
    </head>
    <body>
        <h1>item - 0</h1>
        <h1>item - 1</h1>
        <h1>item - 2</h1>
        <h1>item - 3</h1>
        <h1>item - 4</h1>
    </body>
</html>
```

**결과**

![code 13-37 result](https://user-images.githubusercontent.com/55272324/74081873-ff7aa900-4a96-11ea-9155-d6cb7e85c986.PNG)

## 13.9 객체 확장

* `$.extend()` 메서드 :  많은 수의 속성을 추가혀려면 코드가 지저분해지고 매우 귀찮은 문제를 해결하고자 만들어진 메서드

* `$.extend()` 메서드의 형태

```
$.extend(object, addObject, addObject, ...)
```

**code 13-40 $.extend() method**

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script>
            $(document).ready(function (){
                var object = {
                    name: 'PYC'
                };

                $.extend(object, {
                    region: 'Seoul',
                    part: 'SG'
                })

                let output = '';
                $.each(object, function(key, item){
                    output += key + ': '+item +'\n';
                })
                alert(output);
            })
        </script>
    </head>
    <body>

    </body>
</html>
```

**result - code13-40**

![code13-22 result](https://user-images.githubusercontent.com/55272324/74583376-da8fb400-5009-11ea-8007-7e0e93e13c64.PNG)

## 13.10 jQuery 충돌 방지



## 13.11 조금 더 나아가기

### (1) $.extend() 메서드를 사용한 옵션 객체 보완



## 연습문제

### 01



### 02



### 03



### 04

