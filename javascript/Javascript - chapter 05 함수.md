# Javascript 2일차 - chapter 05 함수

> chapter 05 121 -



## 5.1 익명 함수

* 함수 : 괄호 내부에 코드를 넣어 나타내는 자료형


```html
var 함수 = function(){};
```

* 코드 5-1 함수 생성과 출력

#### 코드 5-1 : 함수 생성과 출력 (alert 함수 사용)

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      let func = function() {
          let output = prompt("숫자를 입력해 주세요 : ");
          alert(output);
      };
	 alert(func);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 5-1 : 함수 생성과 출력

![5-1 함수 생성과 출력1 - alert함수사용](https://user-images.githubusercontent.com/55272324/72952512-79dbd580-3dd5-11ea-9a40-d633b5907e4f.PNG)

#### 코드 5-2 : 선언적 함수

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      alert(alert);
      alert(prompt);
    </script>
  </head>
  <body>

  </body>
</html>

```

* 선언적 함수 :  함수의 이름이 존재하는 함수

#### 결과 - 코드 5-2 : 선언적 함수

![1  코드 5-2 선언적 함수 결과1](https://user-images.githubusercontent.com/55272324/73144349-3f7d7b80-40e8-11ea-91fb-07afe1427ebc.PNG)
![1  코드 5-2 선언적 함수 결과2](https://user-images.githubusercontent.com/55272324/73144350-3f7d7b80-40e8-11ea-8a60-6806fcd134bf.PNG)

#### 코드 5-3 : 함수 호출(func() 함수 사용)

```html
중략
    //  alert(func);
    func();
중략
```

#### 결과 - 코드 5-3 : 함수호출

![5-1 함수 생성과 출력2 - func함수사용](https://user-images.githubusercontent.com/55272324/72952513-79dbd580-3dd5-11ea-8867-c02e137df730.PNG)



### 5.2 선언적 함수

* 선언적 함수

```html
function 함수(){

}
```

#### 코드 5-4 : 선언적 함수의 재정의1

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      function 함수(){alert('함수A')};
      function 함수(){alert('함수B')};
      함수();
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 5-4 : 선언적 함수의 재정의1

![2  코드 5-4 선언적 함수의 재정의1](https://user-images.githubusercontent.com/55272324/73144403-bdda1d80-40e8-11ea-98d1-f12748d26969.PNG)

변수는 같은 이름으로 다시 선언하는 경우 다시 선언한 변수 내용이 기존 변수 내용을 덮어 씌우므로 뒤쪽에 있는 변수 내용이 출력된 모습이다.

* 선언적 함수와 익명 함수의 순서 : 웹 브라우저는 script 태그 내부의 내용을 한 줄씩 읽기 전에 선언적 함수부터 읽는다. 이와 다르게 익명 함수의 경우에는 순서대로 script 내용을 읽기 때문에 순서가 중요하다

#### 코드 5-6 익명 함수의 재정의2

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      함수();
      let 함수 = function (){alert('함수A')};
      let 함수 = function (){alert('함수B')};
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 5-6 : 익명함수의 재정의2

![3  코드 5-6 익명 함수의 재정의2](https://user-images.githubusercontent.com/55272324/73144513-c7b05080-40e9-11ea-8692-ff8eeda33414.PNG)

익명 함수의 경우 변수를 선언하기 이전에 변수를 사용하기 때문에 오류가 발생해 실행되지 않는 모습이 나타난다.

#### 코드 5-7 : 선언적 함수의 재정의2

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      함수();
      function 함수(){alert('함수A')};
      function 함수(){alert('함수B')};
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 5-7 : 선언적 함수의 재정의2

![4  코드 5-7 선언적 함수의 재정의2 결과](https://user-images.githubusercontent.com/55272324/73144536-0f36dc80-40ea-11ea-98d5-f9b59026bb0b.PNG)

익명 함수와 다르게 선언적 함수의 경우 정상적으로 실행된다. 웹 브라우저가 script 내부에 선언적 함수를 먼저 찾아 `function 함수(){alert('함수A')};` 와 ` function 함수(){alert('함수B')};` 를 먼저 실행한 후에 `함수();` 를 실행하기 때문이다.

## 5.3 매개변수와 리턴 값

* 매개변수 : 함수를 호출할 때 괄호 안에 적는 것을 매개변수라고 한다.
* 리턴 값 : 함수를 호출하고 함수가 변환되는 값을 리턴값이라 한다.

```html
function <함수_이름><매개변수>, <매개변수>,<매개변수>{
	<함수_코드>
     return <리턴_값>;    
}
```

#### 코드 5-9 : 매개변수와 리턴 값

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      function f(x) {return x*x;}

      alert(f(3));
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 5-9 : 매개변수와 리턴 값

![5  코드 5-9 매개변수와 리턴 값](https://user-images.githubusercontent.com/55272324/73144614-ed8a2500-40ea-11ea-8a7b-7264f74b26c9.PNG)

## 5.4 매개변수

* 매개변수의 선언 갯수 : 선언할 수 있는 매개변수보다 많은 수를 선언하면 일반적으로 추가된 매개변수는 무시한다. 반대로 매개변수보다 적은 수를 선언하면 지정하지 않은 매개변수는 `undefined`로 입력된다.

#### 코드 5-11 : Array() 함수

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      let array1 = Array();
      let array2 = Array(10);
      let array3 = Array(10,0,0,254);

      console.log(array1 + '\n' + array2 + '\n' + array3);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 5-11 : Array() 함수

![6  코드 5-11 array함수 결과](https://user-images.githubusercontent.com/55272324/73144765-5f16a300-40ec-11ea-9c08-1317fc6910dd.PNG)

* `Array()` 함수의 매개변수에 따른 차이

```html
1. Array() : 빈 배열을 만든다.
2. Array(Number) : 매개변수 값만큼의 크기를 가지는 배열을 만든다.
3. Array(any,..any) : 매개변수를 배열로 만든다.
```



## 5.5 가변 인자 함수

* 가변 인자 함수 : 매개변수의 갯수가 변할 수 있는 함수
* `sumAll()` 함수

```html
<script>
	function sumAll(){
        
    }
</script>
```

##### 예제 : 가변 인자 함수

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
      <script>
          let myarray1 = ["apple", "banana", "orange"];
          let myarray2 = new Array();

          myarray2[0] = "grape";
          myarray2[1] = "lemon";
          
          console.log(myarray1);
          console.log(myarray2);
      </script>
  </head>
  <body>

  </body>
</html>
```

##### 결과 - 예제 : 가변 인자 함수

![5-5 가변 인자 함수](https://user-images.githubusercontent.com/55272324/72963542-f634df80-3dfa-11ea-9302-4d7d51b5af4e.PNG)

## 5.6 리턴 값

* `return` : 함수가 실행되는 도중에 함수를 호출한 곳으로 돌아가라는 의미

##### 예제 : return

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script>
        let add = function(a, b){
          return a + b;
        };

        let subtract = function(a, b){
          return a - b;
        }
        let addresult = add(10, 5);
        let subtractresult = subtract(20, 10);
        console.log(addresult);
        console.log(subtractresult);
    </script>
  </head>
  <body>

  </body>
</html>

```

##### 결과 - 예제 : return

![5-6 return 예제 결과](https://user-images.githubusercontent.com/55272324/72963260-17490080-3dfa-11ea-8539-16852cacba04.PNG)

## 5.7 내부 함수

* 내부 함수 : 함수 내부에 선언하는 함수
* 자기 호출 함수 : 함수를 생성하자마자 호출해 다른 개발자에게 영향을 주지 않는 함수

```html
<script>
	(function(){
       코드
       코드
       코드
    })();
</script>
```

## 5.8 콜백 함수

* 콜백 함수 : 자바스크립트에서는 함수도 하나의 자료형이므로 매개변수로 전달할 수 있다. 콜백 함수란 자바스크립트에서 매개 변수로 전달하는 함수를 의미한다.

#### 코드 5-23 : 익명 함수를 매개변수로 전달

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      function CallTenTimes(callback){
        for (let i = 0; i < 10 ; i ++){
          callback();
        }
      }
      let callback = function(){
        console.log('함수 호출');
      }
      CallTenTimes(callback);
    </script>
  </head>
  <body>

  </body>
</html>
```

#### 결과 - 코드 5-23 : 익명 함수를 매개변수로 전달

![7  코드 5-23 익명 함수를 매개변수로 전달 결과](https://user-images.githubusercontent.com/55272324/73144978-16f88000-40ee-11ea-9a25-41c429aeb35e.PNG)

## 5.9 함수를 리턴하는 함수

* 함수를 리턴하는 함수 : 클로저(closure) 때문에 사용한다.

## 5.10 클로저

* 클로저 : 클로저의 정의는 다양하다. 지역 변수를 남겨두는 현상을 클로저라고 부르기도 하고 함수 내부이 변수들이 살아있는 것으로 보아 함수로 생성된 간을 클로저라고 부르기도 한다. 또한 리턴된 함수 자체를 클로저라고 부르기도 한다.

## 5.11 자바스크립트 내장 함수

### (1) 타이머 함수

* 타이머 함수

```html
1. setTimeout(function, millisecond) : 일정 시간 후 함수를 한 번 실행한다.
2. setinterval(function, milliesecond) : 일정 시간마다 함수를 반복해서 실행한다.
3. clearTimeout(id) : 일정 시간 후 함수를 한 번 실행하는 것을 중지한다.
4. clearinterval(id) : 일정 시간마다 함수를 반복하는 것을 중단한다.
```



##### 예제 : 타이머 함수 

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
        setInterval(function(){
          console.log('외부서비스에서 데이터 호출');
        }, 1000 * 1 * 10);
    </script>
  </head>
  <body>

  </body>
</html>

```

##### 결과 - 예제 : 타이머 함수

![5-11-1 타이머 함수 예제 결과](https://user-images.githubusercontent.com/55272324/72964528-8411ca00-3dfd-11ea-930a-fb8c7da7bbaf.PNG)

### (2) 인코딩과 디코딩 함수

* 인코딩과 디코딩 함수

```html
1. escape() : 적절한 정도로 인코딩한다
2. unescape() : 적절한 정도로 디코딩한다
3. encodeURI(uri) : 최소한의 문자만 코딩한다
4. decodeURI(encoded URI) : 최소한의 문자만 디코딩한다
5. encodeURIComponent(uriComponent) : 문자 대부분을 모두 인코딩한다
6. decodeURIComponent(encodedURI) : 문자 대부분을 모두 디코딩한다.

<!--
1. 적절한 정도란
	1) 영문 알파벳과 숫자, 일부 특수문자(@,*,-,_,+,.../)를 제외하고
	2) 1바이트 문자는 %XX 형태로, 2바이트 문자는 %uXXXX 형태로 변환한다.
2. 최소한 정도란
	1) 적절한 정도에서 사용하는 일부 특수문자 (:,;,/,=,?,&) 를 변환하지 않는다.
3. 대부분 정도란
	1) 알파벳과 숫자를 제외한 모든 문자를 인코딩한다
	2) UTF-8 인코딩과 같다.
```

#### 코드 5-31 : 인코딩과 디코딩 함수

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      var URI = 'http://test.co.kr?test=한글입니다.';
      var output ='';
      output += 'escape()\n'
      output += escape(URI) + '\n\n';
      output += 'encodeURI()\n'
      output += encodeURI(URI) + '\n\n';
      output += 'encodeURIComponent()\n'
      output += encodeURIComponent(URI) + '\n\n';

      console.log(output);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 5-31 : 인코딩과 디코딩 함수

![8  코드 5-31 인코딩과 디코딩 함수 결과](https://user-images.githubusercontent.com/55272324/73146173-a143e280-40f4-11ea-857c-4dd6dfc28478.PNG)

### (3) 코드 실행 함수

* `eval(string)`: string을 자바스크립트 코드로 실행하는 함수

#### 예제 : 코드 실행 함수

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      let willEval = "";
      willEval += "let number=10;";
      willEval += "console.log(number);";

      eval(willEval);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 예제 : 코드 실행 함수

![5-11-3 코드실행함수 결과](https://user-images.githubusercontent.com/55272324/72964795-23cf5800-3dfe-11ea-8b67-01fa2fd7fa11.PNG)

### (4) 숫자 확인 함수

* 숫자 확인 함수

```html
1. isFinite() : number가 무한한 값인지 확인한다.
2. isNaN() : number 가 NaN 값인지 확인한다.
```



### (5) 숫자 변환 함수

* 숫자 변환 함수

```html
1. parseInt(string) : string을 정수로 바꾸어줍니다.
2. parseFloat(string) : string을 유리수로 바꾸어줍니다.

<!--
1. 자바스크립트는 0으로 시작하거나 0x로 시작하면 10진수가 아닌 8진수, 16진수로 생각하고 변환한다.
2. parseInt() 함수의 두 번째 매개변수에 진법을 입력하면 첫 번째 매개변수에 해당하는 수를 두 번째 매개변수에 입력한 진법의 수로 인식한다.
-->
```

## 5.12 조금 더 나아가기

### (1) 자바스크립트 실행 순서

### (2) 반복문과 콜백 함수

### (3) 기본 매개변수

* 기본 매개변수(Default Parameter) : 매개변수를 입력하지 않았을 때, 매개변수를 강제로 초기화 하는 것

### (4) 화살표 함수 - ECMAScript 6

* 화살표 함수 : 전역 객체( 웹 브라우저 환경에서는 window 객체)

```
() => {}
```

#### 예제 : 화살표 함수

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script>
        let func1 = function() {
          console.log("Hello, world!");
        }
        let func2 = () => {
          console.log("Hello, world!");
        }
        func1();
        func2();
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 예제 : 화살표 함수

![5-12-4 화살표 함수 예제 결과](https://user-images.githubusercontent.com/55272324/72965774-8aee0c00-3e00-11ea-8f36-c5df91fe6fbe.PNG)

### (5) 함수에서의 전개 연산자



## 연습문제

### 01 .다음 코드의 실행 결과를 예측하세요.

```html
function test(a,b,c){
	console.log(a);
    console.log(a * b);
    console.log(a * b * c);
}

test (10, 100);
```

#### 01) 결과

![9  연습문제 01 결과](https://user-images.githubusercontent.com/55272324/73147254-05b57080-40fa-11ea-9679-04e5780af9ba.PNG)

console.log(a) : a값 이외 입력된 값을 무시하고 `a`값만 표시한다.

console.log(a*b) : a,b 값 이외 입력된 값을 무시하고 a\*b값을 표시한다

console.log(a*b\*c) : a,b 값만 입력되었고 c 값이 없으므로 NaN으로 표시된다.



### 02. 다음과 같은 함수를 만들어 보세요.

```html
1. 함수이름 : Power
	1) 매개 변수를 하나 넣으면 제곱해준다 
	2) 매개 변수를 두 개 넣으면 첫 번째 매개변수를 두 번째 매개 변수만큼 제곱해준다
2. 함수이름 : multiply
	1) 매개변수로 넣은 값을 모두 곱해준다
```

#### 02-1) power

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      var a = Number(prompt("숫자를 입력해주세요 : "))
      var b = (prompt("숫자를 입력해주세요 : "))
      function power(a,b){
        if (isNaN(b)){
          console.log(a*a);
        } else if (b >= 0){
          console.log(Math.pow(a,b));
        } else {
          console.log(a*a);
        }
      }
      console.log("a 값 : " + a);
      console.log("b 값 : " + b);
      power(a,b);
    </script>
  </head>
  <body>

  </body>
</html>
```

#### 결과 02-1) power

![10  연습문제 02-1 결과1](https://user-images.githubusercontent.com/55272324/73155879-5b504400-411f-11ea-93dc-1116081bba6d.PNG)
![10  연습문제 02-1 결과2](https://user-images.githubusercontent.com/55272324/73155880-5be8da80-411f-11ea-87e0-e0eb32e7b914.PNG)

#### 02-2) multiply

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      var array = [];
      let mp = 1;
      for(let i = 0; i <5 ;i++){
        let input = Number(prompt("숫자를 입력해 주세요 : "));
        if (isNaN(input)){
          console.log("입력하신 값은 " +input+"이며 숫자가 아닙니다.")
        } else {
          array[i] = input
        }
      }
      function multiply(array){
        for(j=0; j <array.length; j++){
        mp *= array[j];
        }
        console.log("입력하신 값을 모두 곱한 값은 " + mp + "입니다.")
      }
      multiply();
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 02-2) multiply

----오류----

### 04. 사용자에게 입력을 받아서 입력이 숫자인지 확인하는 코드를 작성하세요

#### 04 코드

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      let input = Number(prompt("숫자를 입력하세요 : "));

      if (isNaN(input)){
        console.log("입력한 값은 " +input+ " 이며 숫자가 아닙니다.")
      } else {
        console.log("입력한 값은 " +input+ " 이며 숫자가 맞습니다.")
      }
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과

![12  연습문제4 결과1](https://user-images.githubusercontent.com/55272324/73155704-dbc27500-411e-11ea-9676-f39e4f475b5f.PNG)
![12  연습문제4 결과2](https://user-images.githubusercontent.com/55272324/73155705-dbc27500-411e-11ea-95b5-03c5f57951d0.PNG)