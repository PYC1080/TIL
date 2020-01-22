# javascript 1일차 - 

> 



## 1. chaper 01 개요



### 1) ECMAScript(ES) : 자바스크립트의 표준 명칭



### 2) HTML 파일 만들기

#### (1) Hello World 예제

```html
<!DOCTYPE html>
<html>
<head>
    <script>
        alert('Hello World..!'); 
    </script>
</head>
<body>
    
</body>
</html>
```

#### 결과 : Hello World 예제

<img src="https://user-images.githubusercontent.com/55272324/72856085-db7c4100-3cfc-11ea-8d92-b45b1e776a09.PNG" alt="1  hello world 예제" style="zoom:67%;" />

#### (2) hello1 예제

```html
<!DOCTYPE html>
<html>
<head>
    <script>
        var name = "이도원";
        alert('Hello ' + name);
        console.log("hello world!");
    </script>
</head>
<body>

</body>
</html>


<!-- 
1. alert는 경고메세지를 호출 해주는 함수이다.
2. \+특수문자 : 해당 특수문자를 문법이 아닌 문자로 표현해준다.
3. '(single quotation)' 과 "(double quotation)"의 차이 
4. + : 1. 덧셈 처리 2. 문자열 결합
5. + 처리과정에 문자열이 하나라도 있다면 +은 문자열 결합으로 파악한다.
6. console.log : console 창에 해당 로그 내용을 나타내준다.
-->
```

#### 결과

![2  hell1 예제 결과 1](https://user-images.githubusercontent.com/55272324/72857592-70813900-3d01-11ea-94e8-5b9af88076e4.PNG)

vsc 코드 - html 파일 shift+alt+r

![2  hell1 예제 결과 2](https://user-images.githubusercontent.com/55272324/72857593-70813900-3d01-11ea-8d66-ef871a02c8d8.PNG)

페이지 소스 보기 : ctrl+u

![2  hell1 예제 결과 3](https://user-images.githubusercontent.com/55272324/72857594-70813900-3d01-11ea-8d93-7122219b784a.PNG)

개발자 모드 - console 창 : ctrl+shift+i





## 2. chapter2 기본 문법



### 2.1 기본 용어

#### (1) 표현식과 문장

##### 표현식 : 자바스크립트에서 값을 만들어낸 간단한 코드를 표현식이라고 한다.



#### (2) 키워드

##### 키워드 : 자바스크립트가 처음 만들어질 때 정해진 특별한 의미가 있는 단어를 키워드라고 한다.



#### (3) 식별자

##### 식별자 : 식별자는 자바스크립트에서 이름을 붙일 때 사용하는 단어이다.



#### (4) 주석

##### 주석 : 주석은 프로그램 코드를 설명하는데 사용하며 프로그램을 진행하는데 전혀 영향을 주지 않는다.

```html
주석 표기방법
1. <!-- 주석문 -->
2. // 주석문
3. /* 주석문 */ (라인 주석)
```

##### 주석 예제

```html
<!DOCTYPE html>
<html>
<head>
    <!-- 자바스크립트 예제-->
    <script>
        //var name = "이도원";
        var console:Console
        alert('Hello ' + name);
        console.log("hello world!");
    </script>
</head>
<body>
    <h1> 제목입니다.</h1>
    <!-- <h1>두번째 제목입니다.</h1> -->
</body>
</html>
```

##### 예제 결과

<img src="https://user-images.githubusercontent.com/55272324/72858414-146be400-3d04-11ea-9c00-ccd07c8264d2.PNG" alt="3  주석문 예제 결과 1" style="zoom: 67%;" />

![3  주석문 예제 결과 2](https://user-images.githubusercontent.com/55272324/72858415-15047a80-3d04-11ea-86eb-ffd90238a1c3.PNG)



#### (5) ''(single quotation) & ""(double quotation)



##### 예제

```html
<!DOCTYPE html>
<html>
<head>
    <!-- 자바스크립트 예제-->
    <script>
        var name = "이도원";
        console.alert('Hello "' + name + '"');
        console.log("hello \"이도원\"");
    </script>
</head>
<body>
    <h1> 제목입니다.</h1>
    <!-- <h1>두번째 제목입니다.</h1> -->
</body>
</html>
```

##### 예제 결과

![4  quotation 결과](https://user-images.githubusercontent.com/55272324/72858596-ae339100-3d04-11ea-996e-12c24b0b5da4.PNG)



#### 2.2 출력



#### 2.3 문자열 자료형



#### 2.4 숫자 자료형



#### 2.5 불 자료형

> 불 자료형을 사용하는 경우 : 참과 거짓이라는 값을 표현할 때 사용한다.

##### 예제 1

```html
<!DOCTYPE html>
<html>
<head>
    <!-- 자바스크립트 예제-->
    <script>
       alert(52 > 273);
       alert(52 < 273);
    </script>
</head>
<body>
    
</body>
</html>
```

##### 결과 : 예제 1 

![5  불 자료형 예제 결과1](https://user-images.githubusercontent.com/55272324/72858958-b50ed380-3d05-11ea-83e1-5b9319ff5d41.PNG)

![5  불 자료형 예제 결과2](https://user-images.githubusercontent.com/55272324/72858960-b50ed380-3d05-11ea-9354-aa6a235fca3f.PNG)

##### 불 자료형 실습 예제

```html
값을 하나 받아와서 짝수인지 홀수인지 판단하여 결과값을 표출해준다.
```

##### 실습 예제 코드

```html
<!DOCTYPE html>
<html>
<head>
    <!-- 자바스크립트 예제-->
    <script>
        var userVal = prompt("값을 입력하세요 : ");
        console.log("당신이 입력한 값은 : " + userVal);
        if(userVal % 2 == 0) {
            console.log("짝수입니다.");
        } else{
            console.log("홀수입니다.");
        }
        
    </script>
</head>
<body>
    
</body>
</html>
```

##### 실습 예제 결과

![6  불 자료형 실습 예제 결과 1](https://user-images.githubusercontent.com/55272324/72859449-37e45e00-3d07-11ea-9fcc-41a256bc5422.PNG)

![6  불 자료형 실습 예제 결과 2](https://user-images.githubusercontent.com/55272324/72859450-37e45e00-3d07-11ea-90e8-8132e244da68.PNG)

홀수 값 입력 결과

![6  불 자료형 실습 예제 결과 3](https://user-images.githubusercontent.com/55272324/72859451-37e45e00-3d07-11ea-8e4b-c4029446b315.PNG)

짝수 값 입력 결과





#### 2.6 변수

##### (1) 변수 생성과 사용

###### 변수 선언 방법

* var : 일반 변수, 전체에 걸처 사용할 수 있다.
* let : 로컬 변수, 해당 블록을 벋어나서는 해당 변수를 사용할 수 없다.
* const : 상수 변수

###### 예제 : var 변수 선언 방법

```html
<!DOCTYPE html>
<html>
<head>
    <!-- 자바스크립트 예제-->
    <script>
        var userVal = prompt("값을 입력하세요 : ");
        console.log("당신이 입력한 값은 : " + userVal);
        if(userVal % 2 == 0) {
            console.log("짝수입니다.");
        } else{
            console.log("홀수입니다.");
        }
        userVal = "test1";
        console.log("당신이 입력한 값은 = " + userVal);
        var userVal = "test2";
        console.log("당신이 입력한 값은 = "+ userVal);
    </script>
</head>
<body>
    
</body>
</html>
```

###### var 예제 결과

![7  var 실습 결과](https://user-images.githubusercontent.com/55272324/72860381-fb663180-3d09-11ea-9df4-0ea9bb278235.PNG)

userVal를 두번이나 선언해 주었으므로 오류가 발생해야 한다. 하지만, 6번째 라인에서 선언한  userVal와 15번째 라인인 userVal가 혼동됨에도 결과값은 나오므로 userVal가 애매 모호해진다.

###### 예제 : let 변수 선언 방법

```html
<!DOCTYPE html>
<html>
<head>
    <!-- 자바스크립트 예제-->
    <script>
        let userVal = prompt("값을 입력하세요 : ");
        console.log("당신이 입력한 값은 : " + userVal);
        if(userVal % 2 == 0) {
            console.log("짝수입니다.");
        } else{
            console.log("홀수입니다.");
        }
        userVal = "test1";
        console.log("당신이 입력한 값은 = " + userVal);
        var userVal = "test2";
        console.log("당신이 입력한 값은 = "+ userVal);
    </script>
</head>
<body>
    
</body>
</html>
```

###### let 예제 결과

![8  let 실습 결과](https://user-images.githubusercontent.com/55272324/72860522-66b00380-3d0a-11ea-9537-21bb8283c0b4.PNG)

정상적으로 오류가 발생한다.



##### (2) 복합 대입 연산자

###### 복합 대입 연산자

```html
1. += : 기존 변수의 값에 값을 더합니다.
2. -= : 기존 변수의 값에 값을 뺍니다.
3. *= : 기존 변수의 값에 값을 곱합니다.
4. /= : 기존 변수의 값에 값을 나눕니다.
5. %= : 기존 변수의 값에 나머지를 구합니다.
```

###### 예제 2-26 : 복합 대입 연산자의 활용

```html
<!DOCTYPE html>
<html>
<head>
    <!-- 자바스크립트 예제-->
    <script>
        window.onload = function () {
            var list = '';

            list += '<ul>';
            list += '   <li>Hello</li>';
            list += '   <li>JavaScript..!</li>';
            list += '</ul>';
            document.body.innerHTML = list;
       };
    </script>
</head>
<body>
    
</body>
</html>
```

###### 결과 - 예제 2-26 : 복합 대입 연산자의 활용

![9 2-26 복합 대입 연산자의 활용 결과](https://user-images.githubusercontent.com/55272324/72860894-9d3a4e00-3d0b-11ea-97f5-395d14792d14.PNG)

![9 2-26 복합 대입 연산자의 활용 결과2 -body](https://user-images.githubusercontent.com/55272324/72861077-2c476600-3d0c-11ea-874d-465403135cb1.PNG)

document.body.innerHTML : body에 해당 내용이 없음에도 해당 코드로 인해 body에 표현되게 된다.

![9 2-26 복합 대입 연산자의 활용 결과3 -console로그](https://user-images.githubusercontent.com/55272324/72861165-6d3f7a80-3d0c-11ea-9a85-d38ab29321f2.PNG)

`console.log(list);` 를 추가한 결과 코드에서 아무리 `enter`를 입력해 줄을 바꾸더라도 컴퓨터는 해당 줄바꿈을 인식하지 않는다.



##### (3) 증감 연산자

