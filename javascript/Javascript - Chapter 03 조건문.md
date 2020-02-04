# Javascript 1 일차 - Chapter 3

> Ch 03 조건문 79 - 

## chapter03 조건문

### 3.1 if 조건문 

* if 조건문의 형태 : 불_표현식이 true 이면 문장을 실행하고 false이면 문장을 무시한다.

```html
if (<불_표현식>){
    <문장>    
}
```

#### 코드3-2 : if 조건문 - 시간을 사용한 조건 분기

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      var date = new Date();
      var hour = date.getHours();

      if (hour < 12) {
        alert('오전입니다.');
      }
      if (hour >= 12) {
        alert('오후입니다.');
      }
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드3-2 : if 조건문

![1 if조건문 코드 3-2 결과](https://user-images.githubusercontent.com/55272324/73114069-ec29f280-3f5a-11ea-83c7-3de2b6c41e30.PNG)



### 3.2 if else 조건문

* if else 조건문 : 서로 반대되는 상황을 표현하는 조건문

```html
if (<불_표현식>){
    <문장>    
} else {
    <문장>   
}
```

#### 코드3-3 : if else 조건문

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      var date = new Date();
      var hour = date.getHours();

      if (hour < 12) {
        alert('오전입니다.');
      } else{
        alert('오후입니다.');
      }
    </script>
  </head>
  <body>

  </body>
</html>
```

#### 결과 - 코드3-3 : if else  조건문

![2 ifelse조건문 코드 3-3 결과](https://user-images.githubusercontent.com/55272324/73114215-dbc64780-3f5b-11ea-9923-3a96d05e92d7.PNG)



### 3.3 중첩 조건문

* 중첩 조건문 : 조건문 안에 조건문을 중첩해 사용

```html
if (<불_표현식>){    
	if (<불_표현식>){
        <문장>    
    } else {
        <문장>   
    }
} else {
 	if (<불_표현식>){
        <문장>    
    } else {
        <문장>   
    }
}
```

#### 코드 : 중첩 조건문

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      var date = new Date();
      var hour = date.getHours();

      if (hour < 9) {
        alert('아침 먹을 시간 입니다.');
        } else{
          if (hour <= 12) {
            alert('아침 먹은 후 점심 먹기 이전입니다');
            } else{
              if (hour > 12) {
                alert('점심 이후 입니다');
                }
              }
          }
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드3-4 : 중첩 조건문

![3 중첩조건문 코드 3-4 결과](https://user-images.githubusercontent.com/55272324/73114371-3318e780-3f5d-11ea-8f89-7e1a9757d374.PNG)



### 3.4 if else if 조건문

* if else if : 겹치지 않는 세가지 이상의 조건을 나눌 경우 사용한다

```html
if (<불_표현식>){
    <문장>    
} else if (<불_표현식>){
    <문장>   
} else if (<불_표현식>){
    <문장>   
} else {
    <문장>   
}
```

#### 코드 3-5 : if else if 조건문

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      var date = new Date();
      var hour = date.getHours();

      if (hour < 9) {
        alert('아침 먹을 시간 입니다.');
      } else if (hour <= 12) {
        alert('아침 먹은 후 점심 먹기 이전입니다');
      } else {
        alert('점심 이후 입니다');
      }
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 3-5 : if else if 조건문

![4 ifelseif조건문 코드 3-5 결과](https://user-images.githubusercontent.com/55272324/73114797-30b88c80-3f61-11ea-8812-c737ab8561d9.PNG)



### if 조건문과 관련된 예제

#### 예제 1 : 사용자에게 숫자를 입력받아 양수, 0, 음수를 구분하는 프로그램

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script>
      let number = Number(prompt("숫자를 입력하세요 : "));
      if (number > 0){
        console.log("입력값은 " + number +  "이고 양수입니다.");
      } else if (number < 0){
        console.log("입력값은 " + number +  "이고 음수입니다.");
      } else {
        console.log("입력값은 " + number +  "이고 0입니다.");
      }
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 예제 1 : 사용자에게 숫자를 입력받아 양수, 0, 음수를 구분하는 프로그램

![5  예제 1 결과1 양수](https://user-images.githubusercontent.com/55272324/73114913-6447e680-3f62-11ea-9ed4-1420e1b6c2d4.PNG)
![5  예제 1 결과2 음수](https://user-images.githubusercontent.com/55272324/73114914-6447e680-3f62-11ea-9cc8-b191a0b28f56.PNG)
![5  예제 1 결과3 0](https://user-images.githubusercontent.com/55272324/73114915-6447e680-3f62-11ea-9d8d-ba31aa12e7ee.PNG)



#### 예제 2 : 사용자에게 숫자를 입력받아 홀수와 짝수를 구분하는 프로그램

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script>
      let number = Number(prompt("숫자를 입력하세요 : "));
      if (number <= 0){
        console.log("입력값은 " + number +  "입니다 양수를 입력해 주세요");
      } else if (number % 2 == 1){
        console.log("입력값은 " + number +  "이고 홀수입니다.");
      } else {
        console.log("입력값은 " + number +  "이고 짝수입니다.");
      }
    </script>
  </head>
  <body>

  </body>
</html>
```

#### 결과 - 예제 2 : 사용자에게 숫자를 입력받아 홀수와 짝수를 구분하는 프로그램

![6  예제 2 결과1 음수](https://user-images.githubusercontent.com/55272324/73114978-02d44780-3f63-11ea-9b9f-b6877b113e86.PNG)
![6  예제 2 결과2 0](https://user-images.githubusercontent.com/55272324/73114979-02d44780-3f63-11ea-9290-398fe42bb0b1.PNG)
![6  예제 2 결과3 홀수](https://user-images.githubusercontent.com/55272324/73114980-02d44780-3f63-11ea-9db5-eedbd1f9724f.PNG)
![6  예제 2 결과4 짝수](https://user-images.githubusercontent.com/55272324/73114981-02d44780-3f63-11ea-82df-f65a70aa4845.PNG)

#### 예제 3 : 사용자에게 국어, 영어, 수학을 입력받아 평균을 구한 뒤 수우미양가를 구분하는 프로그램

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script>
      let krpoint = Number(prompt("국어 성적을 입력하세요 : "));
      let enpoint = Number(prompt("영어 성적을 입력하세요 : "));
      let mathpoint = Number(prompt("수학 성적을 입력하세요 : "));
      let sum = (krpoint+enpoint+mathpoint) / 3 ;
      let total = Math.round(sum);
      if (total >= 90){
        console.log("평균 성적은 " + total +  "이고 종합성적은 수입니다");
      } else if (total >= 80) {
        console.log("평균 성적은 " + total +  "이고 종합성적은 우입니다");
      } else if (total >= 70) {
        console.log("평균 성적은 " + total +  "이고 종합성적은 미입니다");
      } else if (total >= 60) {
        console.log("평균 성적은 " + total +  "이고 종합성적은 양입니다");
      } else {
        console.log("평균 성적은 " + total +  "이고 종합성적은 가입니다");
      }
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 에제 3 : 사용자에게 국어, 영어, 수학 점수를 입력받아 평균을 구한 뒤 수우미양가를 구분하는 프로그램

![7  예제 3 결과1 우](https://user-images.githubusercontent.com/55272324/73115110-5e073980-3f65-11ea-8234-0276edee0995.PNG)
![7  예제 3 결과2 양](https://user-images.githubusercontent.com/55272324/73115111-5e073980-3f65-11ea-907d-981e7c88917f.PNG)


### 3.5 switch 조건문

* switch 조건문

```html
switch(<비교할 값>){
	case <값>:
		<문장>
    break;
	case <값>:
		<문장>
    break;
    default: 
        <문장>
    break;
}
<!--
1. break : switch 조건문을 빠져나가려고 사용하는 키워드
-->
```

#### 코드 3-7 : switch 조건문

```html

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <script>
      var input = Number(prompt('숫자를 입력하세요'));

      switch (input % 2) {
        case 0:
          alert('짝수입니다');
          break;
        case 1:
          alert('홀수입니다');
          break;
        default:
          alert('숫자가 아닙니다');
          break;
      }
    </script>
  </head>
<body>

</body>
</html>
```

#### 결과 - 코드 3-7 : switch 조건문

![8  switch 코드 3-7 결과1](https://user-images.githubusercontent.com/55272324/73115519-3f577180-3f6a-11ea-9025-471ea3f81222.PNG)
![8  switch 코드 3-7 결과2](https://user-images.githubusercontent.com/55272324/73115520-3f577180-3f6a-11ea-9a0a-f2cd49e02c81.PNG)



### 3.6 삼항 연산자

* 삼항 연산자 : 프로그램의 실행을 조건에 따라 변화시킬 수 있는 연산자

```html
<불_표현식> ? <참일_때_실행하는_문장> : <거짓일_때_실행하는_문장>
```

#### 코드 3-9 : 삼항 연산자

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <script>
      let input = prompt("숫자를 입력해주세요", "");
      let number = Number(input);

      (number > 0) ? alert('양수 입니다') : alert('양수가 아닙니다');
    </script>
  </head>
<body>

</body>
</html>

```

#### 결과 - 코드 3-9 : 삼항 연산자

![9  삼항연산자 코드 3-9 결과1](https://user-images.githubusercontent.com/55272324/73115606-bb05ee00-3f6b-11ea-8fa9-034a3cc01f2c.PNG)
![9  삼항연산자 코드 3-9 결과2](https://user-images.githubusercontent.com/55272324/73115607-bb05ee00-3f6b-11ea-91b0-abb74c526bdf.PNG)

### 3.7 짧은 조건문

* 짧은 조건문 : 논리연산자의 특성을 조건문으로 사용한다.

```html
1. (<불_표현식>) || (<불_표현식이_거짓일_때_실행할_문장>)
2. (<불_표현식>) && (<불_표현식이_거짓일_때_실행할_문장>)
```

#### 코드 3-11 : 짧은 조건문

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <script>

      let input = Number(prompt("숫자를 입력해주세요 : "));
      input % 2 == 0 || console.log('입력값은 ' +input+ '이고 홀수입니다');
      input % 2 == 0 && console.log('입력값은 ' +input+ '이고 짝수입니다');

    </script>
  </head>
<body>

</body>
</html>

```

#### 결과 코드 3-11 : 짧은 조건문

![10 짧은연산자 코드 3-11 결과1](https://user-images.githubusercontent.com/55272324/73115697-0a005300-3f6d-11ea-8576-f99616729829.PNG)
![10 짧은연산자 코드 3-11 결과2](https://user-images.githubusercontent.com/55272324/73115698-0a98e980-3f6d-11ea-97fb-fa24e88aa1dd.PNG)

### 연습문제

#### (1) promt() 함수로 문자열을 입력받아 "안녕"이 들어가 있으면 "안녕하세요", "잘자"또는 "잘 자"를 입력하면 "안녕히 주무세요"를 출력하는 코드를 작성하시오

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <script>
      let input = prompt("인삿말을 입력하세요 : ");
      capcha1 = "안녕";
      capcha2 = "잘자";
      capcha3 = "잘 자";
      console.log("당신의 인삿말은 " + input + "입니다.");
      if (input.indexOf(capcha1) != -1){
        console.log("안녕하세요");
      } else if (input.indexOf(capcha2) != -1){
        console.log("안녕히 주무세요");
      } else if (input.indexOf(capcha3) != -1){
        console.log("안녕히 주무세요");
      } else {
      }
    </script>
  </head>
<body>

</body>
</html>

```

##### 결과 - (1)

![11  연습문제1 결과1](https://user-images.githubusercontent.com/55272324/73116127-a9751400-3f74-11ea-95ea-1014d1c89555.PNG)
![11  연습문제1 결과2](https://user-images.githubusercontent.com/55272324/73116128-a9751400-3f74-11ea-8f44-2f3ae9345595.PNG)
![11  연습문제1 결과3](https://user-images.githubusercontent.com/55272324/73116129-a9751400-3f74-11ea-89d8-34483c117a2e.PNG)
![11  연습문제1 결과4](https://user-images.githubusercontent.com/55272324/73116130-aa0daa80-3f74-11ea-91bd-cded9c06c747.PNG)

#### (2) 문자열을 입력받아 "안녕"이라는 글자가 들어있지 않으면 "인사를 안 하다니"라고 출력하는 코드를 작성하시오

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <script>
      let input = prompt("인삿말을 입력하세요 : ");
      capcha1 = "안녕";
      console.log("당신의 인삿말은 " + input + " 입니다.");
      if (input.indexOf(capcha1) != -1){
        console.log("안녕하세요");
      } else {
        console.log("인사를 안하다니");
      }
    </script>
  </head>
<body>

</body>
</html>

```

##### 결과 - (2)

![12  연습문제 2 결과1](https://user-images.githubusercontent.com/55272324/73116099-38cdf780-3f74-11ea-83f1-7b995331b85e.PNG)
![12  연습문제 2 결과2](https://user-images.githubusercontent.com/55272324/73116100-38cdf780-3f74-11ea-89cf-05f5b4162048.PNG)

#### (3) 숫자를 입력받아 4로 나눌 수 있는 숫자라면 "4로 나눌 수 있는 숫자입니다"를 출력하는 코드를 작성하시오

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <script>
      let number = Number(prompt("숫자를 입력해주세요 : "));

      (number % 4 == 0) ? console.log("입력한 숫자는" + number + "이고 4로 나눌 수 있는 숫자입니다.") : console.log("입력한 숫자는" + number + "이고 4로 나눌 수 없는 숫자입니다.");
    </script>
  </head>
<body>

</body>
</html>
```

##### 결과 - (3)

![13  연습문제3 결과1](https://user-images.githubusercontent.com/55272324/73116175-446dee00-3f75-11ea-82b9-c833ff960c11.PNG)
![13  연습문제3 결과2](https://user-images.githubusercontent.com/55272324/73116176-446dee00-3f75-11ea-961a-331463652b60.PNG)

#### (4) 숫자를 입력받아 양수라면 "양수입니다." 음수라면 "음수입니다", 0이라면 "0입니다"를 출력하는 코드를 작성하시오

```html
<!DOCTYPE html>
<html>
<head>
    <script> 
        let inputdata = Number(prompt("숫자를 입력하세요."))
    if (inputdata == 0){
        console.log(+ inputdata +" 값은 0입니다.")
    } else if(inputdata % 2 == 0){
        console.log(+ inputdata +" 값은 짝수입니다.")
    } else {
        console.log(+ inputdata +" 값은 홀수입니다.")
    }
    </script>
</head>
<body>
    
</body>
</html>
```

##### 결과 - (4)

![3-(4) 결과 0](https://user-images.githubusercontent.com/55272324/72874103-9a078800-3d34-11ea-94ab-137838eda33f.PNG)

![3-(4) 결과 홀수](https://user-images.githubusercontent.com/55272324/72874102-996ef180-3d34-11ea-8e20-532ebf4f5120.PNG)

![3-(4) 결과 짝수](https://user-images.githubusercontent.com/55272324/72874101-996ef180-3d34-11ea-8803-37897d849358.PNG)