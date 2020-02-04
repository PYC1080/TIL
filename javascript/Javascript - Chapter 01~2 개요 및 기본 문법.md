# javascript 1일차 -  Chapter 1~2

> Chapter 01 개요 5-24
>
> Chapter 02 기본문법 26-76



## 1. chaper 01 개요

> Chapter 01 5-24

* ECMAScript(ES) : 자바스크립트의 표준 명칭

* 네이티브 애플리케이션 : 자바와 스위프트 등 스마트폰에 최적화된 프로그래밍 언어로 만든 애플리케이션
* 데이터베이스 : 데이터를 저장할 때 사용하는 프로그램

### HTML 파일 만들기

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

#### 결과 - hello1

![2  hell1 예제 결과 1](https://user-images.githubusercontent.com/55272324/72857592-70813900-3d01-11ea-94e8-5b9af88076e4.PNG)

vsc 코드 - html 파일 shift+alt+r

![2  hell1 예제 결과 2](https://user-images.githubusercontent.com/55272324/72857593-70813900-3d01-11ea-8d66-ef871a02c8d8.PNG)

페이지 소스 보기 : ctrl+u

![2  hell1 예제 결과 3](https://user-images.githubusercontent.com/55272324/72857594-70813900-3d01-11ea-8d93-7122219b784a.PNG)

개발자 모드 - console 창 : ctrl+shift+i



## 2. chapter2 기본 문법

> Chapter 02 27-76

### 2.1 기본 용어

#### (1) 표현식과 문장

표현식 : 자바스크립트에서 값을 만들어낸 간단한 코드를 표현식이라고 한다.

```html
'example'
10
20+40+60*2
```

문장 : 하나 이상의 표현식이 모인 것. 문장 끝에는 세미콜론을 찍어 문장을 종결한다.

```html
alert('example');
10;
20+40+60*2;
```

```html
<!-- ### 자바스크립트 와 세미콜론 ###
자바스크립트의 경우 세미콜론을 입력하지 않아도 프로그램을 실행하는데 문제가 발생하지 않는다. 하지만 관례상 세미콜론을 입력하는 것이다.
-->
```

프로그램 : 문장이 모여서 프로그램을 이룬다.

#### (2) 키워드

키워드 : 자바스크립트가 처음 만들어질 때 정해진 특별한 의미가 있는 단어를 키워드라고 한다.

#### (3) 식별자

식별자 : 식별자는 자바스크립트에서 이름을 붙일 때 사용하는 단어이다.

```html
식별자 규칙
1. 키워드를 사용할 수 없다.
2. 숫자로 시작하면 안된다
3. 특수문자는 _ 와 $ 만 허용한다.
4. 공백문자를 포함 할 수 없다.
```

```
자바스크립트 개발자가 지키는 식별자 관례
1. 생성자 함수의 이름은 항상 대문자로 시작한다.
2. 변수와 인스턴스, 함수, 메서드의 이름은 항상 소문자로 시작한다.
3. 여러 단어로 이루어진 식별자는 각 단어의 첫 글자를 대문자로 한다.
```

#### (4) 주석

주석 : 주석은 프로그램 코드를 설명하는데 사용하며 프로그램을 진행하는데 전혀 영향을 주지 않는다.

* HTML 태그 주석

```html
<!-- 주석문 -->
```

* 자바스크립트

```javascript
1. 한줄 주석 : // 주석문
2. 라인 주석 : /* 주석문 */
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

### 2.2 출력

#### alert() 함수와 매개변수

* `alert()` 함수 : 자바스크립트의 가장 기본적인 출력 방법
* 매개변수 : 함수의 괄호 안에 들아가는 것

### 2.3 문자열 자료형

#### 자바스크립트에서 문자열 생성 방법

* '(single quotation)' & "(double quotation)"

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



* 문자열 안에 따옴표를 사용해야 하는 경우

```
1. 문자열 내부에 '' 사용하고 외부에 "" 를 사용해서 문자열 내부 '' 표시
2. 문자열 내부에 "" 사용하고 외부에 '' 를 사용해서 문자열 내부 "" 표시
3. \+"or' 를 통해 문자열 "or' 표시
```

* \ (이스케이프) 종류

```javascript
1. \t : 수평 탭
2. \n : 줄 바꿈
3. \' : 작은 따옴표를 문자열로 표시
4. \" : 큰 따옴표를 문자열로 표시
5. \\ : 역슬래시를 문자열로 표시
6. \b : 백스페이스 효과
7. \r : 다시 처음으로 커서를 옮깁니다.
```

### 2.4 숫자 자료형

* 사칙 연산자

```
1. + : 더하기 연산자
2. - : 빼기 연산자
3. * : 곱하기 연산자
4. / : 나누기 연산자
```

### 2.5 불 자료형

* 불 자료형 : 자바스크립트에서 참과 거짓이라는 값을 표현
* 비교 연산자 : 사용한 두 대상을 비교할 수 있는 연산자

```
1. a >= b  a가 b 보다 크거나 같다
2. a <= b  a가 b 보다 작거나 같다
3. a > b   a가 b 보다 크다
4. a < b   a가 b 보다 작다
5. a == b  a가 b와 같다
6. a != b  a는 b와 다르다
```

* 논리 연산자

```
1. !  : 논리 부정 연산자
2. && : 논리 곱 연산자
	1) true && true = true
	2) true && false = false
	3) false && true = false
	4) false && false = false
3. || : 논리 합 연산자
	1) true || true = true
	2) true || false = true
	3) false || true = true
	4) false || false = false
```

#### (1) 예제 : 불 자료형

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

##### 결과 - 예제 : 불 자료형 

![5  불 자료형 예제 결과1](https://user-images.githubusercontent.com/55272324/72858958-b50ed380-3d05-11ea-83e1-5b9319ff5d41.PNG)

![5  불 자료형 예제 결과2](https://user-images.githubusercontent.com/55272324/72858960-b50ed380-3d05-11ea-9354-aa6a235fca3f.PNG)

#### (2) 불 자료형 실습 예제

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

### 2.6 변수

#### (1) 변수 생성과 사용

* 변수 선언 방법

```
1. var : 일반 변수, 전역에 걸쳐 사용할 수 있는 변수를 지정 해준다. 
```

#### (2) 복합 대입 연산자

* 복합 대입 연산자 : 대입 연산자와 다른 연산자를 함계 사용하는 연산자

```html
1. += : 기존 변수의 값에 값을 더합니다.
2. -= : 기존 변수의 값에 값을 뺍니다.
3. *= : 기존 변수의 값에 값을 곱합니다.
4. /= : 기존 변수의 값에 값을 나눕니다.
5. %= : 기존 변수의 값에 나머지를 구합니다.
```

##### 예제 코드 2-26 : 복합 대입 연산자의 활용

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

##### 결과 - 예제 코드 2-26 : 복합 대입 연산자의 활용

![9 2-26 복합 대입 연산자의 활용 결과](https://user-images.githubusercontent.com/55272324/72860894-9d3a4e00-3d0b-11ea-97f5-395d14792d14.PNG)

![9 2-26 복합 대입 연산자의 활용 결과2 -body](https://user-images.githubusercontent.com/55272324/72861077-2c476600-3d0c-11ea-874d-465403135cb1.PNG)

document.body.innerHTML : body에 해당 내용이 없음에도 해당 코드로 인해 body에 표현되게 된다.

![9 2-26 복합 대입 연산자의 활용 결과3 -console로그](https://user-images.githubusercontent.com/55272324/72861165-6d3f7a80-3d0c-11ea-9a85-d38ab29321f2.PNG)

`console.log(list);` 를 추가한 결과 코드에서 아무리 `enter`를 입력해 줄을 바꾸더라도 컴퓨터는 해당 줄바꿈을 인식하지 않는다.



#### (3) 증감 연산자

* 증감 연산자 : 복합 대입 연산자를 약간 간략하게 사용한 형태

```
1. 변수 ++ : 기존의 변수 값에 1을 더합니다 (후위)
2. ++ 변수 : 기존의 변수 값에 1을 더합니다 (전위)
3. 변수 -- : 기존의 변수 값에 1을 뺍니다 (후위)
4. -- 변수 : 기존의 변수 값에 1을 뺍니다 (전위)
```

##### 예제 : 증감 연산자

```html
<!DOCTYPE html>
<html>
<head>
    <!-- 자바스크립트 예제-->
    <script>
            let a = 10;
            console.log(a);
            console.log(a++);
            console.log(++a);
            console.log(a);
    </script>
</head>
<body>
    
</body>
</html>
```

##### 결과 - 예제 : 증감 연산자

![10  증감 연산자 예제 결과](https://user-images.githubusercontent.com/55272324/72861546-96143f80-3d0d-11ea-980a-981e70124c72.PNG)

#### (4) 변수의 특성

* 자바스크립트는 기존에 존재하는 변수를 재선언할 수 있다.

### 2.7 자료형 검사

* `typeof`연산자 : 자바스크립트에서 자료형의 종류를 확인할 때 사용하는 연산자
* 이항 연산자와 단항 연산자

```
1. 이항 연산자 : 연산자의 양쪽에 항을 사용 예) a+b, a-b
2. 단항 연산자 : 연산자의 한쪽에만 항을 사용 예) -기호를 사용하여 부호를 바꿔주는 것
```

### 2.8 undefined 자료형

* `undefined` : 선언하지 않는 변수 이거나 변수를 선언했지만 초기화하지 않았을 때 해당 변수의 자료형을 `undefined`라 한다

### 2.9 입력

* 숫자 자료형 입력 : 입력한 숫자는 우선 문자열 자료형으로 인식하므로 숫자 자료형으로 인식하기 위해서는 변환과정이 필요하다

* 문자열 자료형을 입력하는 함수 : `prompt()`

##### 실습 : 2-19 prompt() 함수 사용

```html
<!DOCTYPE html>
<html>
<head>
    <script> 
        let userData = prompt("숫자를 입력하세요.");

        let result = userData + 10;
        console.log("result=" + result);

    </script>
</head>
<body>
    
</body>
</html>
```

##### 결과 - 실습 : 2-19 prompt() 함수 사용

![11  2-19 prompt 함수 사용 결과1](https://user-images.githubusercontent.com/55272324/72870287-1d23e080-3d2b-11ea-9aa1-729c1eb02954.PNG)

![11  2-19 prompt 함수 사용 결과2](https://user-images.githubusercontent.com/55272324/72870289-1d23e080-3d2b-11ea-86ff-ef07ce973c20.PNG)

userData 값을 string으로 취급해 정상적으로 결과값이 도출되지 않았다.

### 2.10 숫자와 문자열 자료형 변환

* `string()` : 다른 자료형을 문자열 자료형으로 바꿔준다.
* `number()` : 다른 자료형을 숫자열 자료형으로 바꿔준다.
* `NaN` : 자바스크립트로 나타낼 수 없는 숫자

##### 결과 - 실습 : 2-19 prompt() 함수 사용 수정

```html
<!DOCTYPE html>
<html>
<head>
    <script> 
        let userData = prompt("숫자를 입력하세요.");
        let result = Number(userData) + 10;
        console.log("result=" + result);

    </script>
</head>
<body>
    
</body>
</html>
```

![11  2-19 prompt 함수 사용 결과1](https://user-images.githubusercontent.com/55272324/72870287-1d23e080-3d2b-11ea-9aa1-729c1eb02954.PNG)

![11  2-19 prompt 함수 사용 결과3](https://user-images.githubusercontent.com/55272324/72870421-84419500-3d2b-11ea-8cf2-4a1ef397ed49.PNG)

정상적으로 결과값이 도출 되었다.

### 2.11 불 자료형 변환

* `boolean()` : 다른 자료형을 불 자료형으로 변환

### 2.12 일치 연산자

* 일치 연산자 : 자동으로 자료형이 변환되는 것을 막고 원하는 자료형을 확실하게 구분 짓고 싶은 경우 사용한다.

```html
1. a===b : a와 b의 자료형과 값이 일치합니다.
2. a!==b : a와 b의 자료형과 값이 일치하지 않습니다.
```



### 2.13 조금 더 나아가기

#### (1) 템플릿 문자열

* 템플릿 문자열 : `${}`를 사용하여 내부에 표현식을 만들면, 문자열이 만들어질 때 표현식이 계산되어 들어간다.

```html
<!-- 인터넷 익스플로러와 템플릿 문자열
인터넷 익스플로러에서는 해당 템플릿 문자열을 사용할 수 없다. 따라서 바벨 등의 변환 모듈을 사용해 코드를 변환해줘야 한다.
-->
```

#### (2) let 과 const 

##### a) 기본

* 식별자에 값을 넣을 때 사용하는 키워드

```
1. var : 변수 / 전역 스코프 / 재선언 가능
2. let : 변수 / 해당 스코프 / 재선언 불가능
3. const : 상수 / 해당 스코프 / 재선언 불가능
```

##### b) 변수와 상수 구분

* 변수 : 변할 수 있는 값
* 상수 : 변하지 않는 값이므로 상수를 선언할 때 반드시 값을 함께 넣어줘야 한다.

##### c) var 키워드로 선언한 변수와 let 키워드로 선언한 변수의 차이 

* 유효 범위(스코프) : 특정 변수를 사용할 수 있는 유효 범위

```html
//전역 스코프
{
	// 스코프 A
	{
		// 스코프 B
	}
}
```

```html
<!-- var 키워드의 비동기 함수 문제
전역에 걸처 변수가 설정되어 있어 변수 재지정시 변수 값에 대한 문제가 발생하므로 웬만해선 사용하지 않는 것을 추천한다.
-->
```

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

###### 결과 - 예지 : var 변수 선언 방법

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

###### 결과 - 예제 : let 변수 선언 방법![8  let 실습 결과](https://user-images.githubusercontent.com/55272324/72860522-66b00380-3d0a-11ea-9537-21bb8283c0b4.PNG)

정상적으로 오류가 발생한다.



##### d) 재선언

* 재선언 : 같은 이름으로 변수 또는 상수를 다시 선언하는 것