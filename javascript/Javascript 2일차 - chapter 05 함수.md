# Javascript 2일차 - chapter 05 함수

> chapter 05 121 -



### 5.1 익명 함수

* 함수 : 코드의 집합을 나타내는 자료형

* 함수의 형태

```html
var 함수 = function(){};
```

* 코드 5-1 함수 생성과 출력

#### alert 함수 사용

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

#### 결과 : alert 함수 사용

![5-1 함수 생성과 출력1 - alert함수사용](https://user-images.githubusercontent.com/55272324/72952512-79dbd580-3dd5-11ea-9a40-d633b5907e4f.PNG)

#### func() 함수 사용

```html
중략
    //  alert(func);
    func();
중략
```

#### 결과 : func() 함수 사용

![5-1 함수 생성과 출력2 - func함수사용](https://user-images.githubusercontent.com/55272324/72952513-79dbd580-3dd5-11ea-8867-c02e137df730.PNG)



### 5.2 선언적 함수



### 5.3 매개변수와 리턴 값



### 5.4 매개변수



### 5.5 가변 인자 함수

* 가변 인자 함수 : 매개변수의 갯수가 변할 수 있는 함수

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

### 5.6 리턴 값

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

### 5.7 내부 함수

* 내부 함수 : 함수 내부에 선언하는 함수

### 5.8 콜백 함수

* 콜백 함수 : 자바스크립트에서는 함수도 하나의 자료형이므로 매개변수로 전달할 수 있다. 콜백 함수란 자바스크립트에서 매개 변수로 전달하는 함수를 의미한다.

### 5.9 함수를 리턴하는 함수



### 5.10 클로저



### 5.11 자바스크립트 내장 함수

#### (1) 타이머 함수

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

#### (2)

#### (3) 코드 실행 함수

* `eval()`: 문자열을 자바스크립트 코드로 실행하는 함수

##### 예제 : 코드 실행 함수

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

##### 결과 - 예제 : 코드 실행 함수

![5-11-3 코드실행함수 결과](https://user-images.githubusercontent.com/55272324/72964795-23cf5800-3dfe-11ea-8b67-01fa2fd7fa11.PNG)

#### (4) 숫자 확인 함수



#### (5) 숫자 변환 함수

* 숫자 변환 함수

```html
1. parseInt(string) : string을 정수로 바꾸어줍니다.
2. parseFloat(string) : string을 유리수로 바꾸어줍니다.
```



### 5.12 조금 더 나아가기



#### (4) 화살표 함수 - ECMAScript 6

* 화살표 함수

```

```

##### 예제 : 화살표 함수

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

##### 결과 - 예제 : 화살표 함수

![5-12-4 화살표 함수 예제 결과](https://user-images.githubusercontent.com/55272324/72965774-8aee0c00-3e00-11ea-8f36-c5df91fe6fbe.PNG)