# Javascript 1일차 - Chapter4

> Chapter 4 반복문 97 -



## 4.1 반복문의 장점

* 반복 : 컴퓨터는 아무리 반복하더라도 능률이 떨어지지 않는다.

## 4.2 배열

* 배열 : 배열은 여러 개의 변수를 한꺼번에 선언해 다룰 수 있는 객체 자료형이다.
* 자료형의 종류 : 문자, 숫자, 불 , 함수, 객체, undefined
* Index : 배열 기호 안에 들어간 숫자를 인덱스라 부른다.
* 속성 : 어떤 대상이 가진 변수
* 메서드 : 어떤 대상이 가진 함수

#### 코드 4-3 : 요소에 접근하는 방법

```html
<!DOCTYPE html>
<html>
<head>
    <script>
        let array = [232, 32, 103, 55, 52];
        console.log(array);
        console.log(typeof array);
        console.log(array.length);
        console.log(array[0]);
       
        array.push(45);
        array.push(146);

        console.log(array);
        console.log(typeof array);
        console.log(array.length);
        console.log(array[0]);
    </script>
</head>
<body>
    
</body>
</html>
```

* `length` 속성 : 현재 배열에 요소가 몇 개 있는지 확인할 수 있다.
* `push()` 메서드 : 배열에 요소를 추가하는 메서드 

#### 결과 - 코드 4-3 : 요소에 접근하는 방법

![1  코드4-3 요소에 접근하는 방법 결과](https://user-images.githubusercontent.com/55272324/73134423-b92a5080-4079-11ea-89d3-d65e04ad70ee.PNG)

## 4.3 while 반복문

* while 반복문 : if 조건문과 다르게 불 표현식이 참인 동안에는 지속적으로 문장이 실행된다.

```html
while(<불_표현식){
	<문장>               
}
```

* while 반복문을 종료하는 방법

```
1. 반복되는 숫자를 제한한다.
2. 내부 조건을 변화시켜 반복문을 종료시킨다
```

#### 예제 : while 반복문 - 1초 안에 반복하는 횟수 구하기

```html
<<!DOCTYPE html>
<html>
  <head>
    <script>
      var value = 0;
      var startTime = new Date().getTime();
      while (new Date().getTime() < startTime + 1000) {value++;}

      alert(value);
    </script>

  </head>
  <body>

  </body>
</html>

```

#### 결과 - 예제 : while 반복문

![4-3 while 반복문 예제 결과](https://user-images.githubusercontent.com/55272324/72947454-6c1e5400-3dc5-11ea-99f6-c8f59e533aa8.PNG)





## 4.4 do while 반복문

* do while 반복문을 사용하는 경우 : while반복문 안에 있는 조건의 참, 거짓 여부와 상관없이 내부의 문장을 최소한 한 번은 실행해야 하는 경우에 사용한다.
* do while 반복문의 구조

```html
<<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript">
      do{
        <문장>
      } while (<불 표현식>);
    </script>
  </head>
  <body>
    
  </body>
</html>
```



## 4.5 for 반복문

* for 반복문 : 조건보다 횟수에 비중을 둘때 사용하는 반복문

```html
for(<초기식>; <조건식>; <종결식>){
        <문장>
}
<!-- 로직
1. 초기식을 실행한다
2. 조건식을 비교한다. 조건이 false이면 반복문을 종료한다.
3. 문장을 실행한다
4. 종결식을 실행한다
5. 2단계로 돌아가 반복한다
```

#### 예제 : for 반복문

```html
<!DOCTYPE html>
<html>
<head>
    <script>
        let array = [232, 32, 103, 55, 52];
        console.log("i = 0 ~ 4");
        for (let i=0; i<5; i++){
            console.log(array[i]);
        }
        console.log("i = 1 ~ 5");
        for (let i=1; i<=5; i++){
            console.log(array[i]);
        }
    </script>
</head>
<body>

</body>
</html>
```

#### 결과 - 예제 : for 반복문

![4 - 4 for 예제 결과](https://user-images.githubusercontent.com/55272324/72875384-7f82de00-3d37-11ea-9fbc-83437c4620e1.PNG)

## 4.6 for in 반복문

* for in 반복문

```html
for(var i in array) {

}
```

#### 코드 4-14 : for in 반복문

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      let array = ['포도','사과','바나나','망고'];

      for (let i in array){
        console.log(array[i]);
      }
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 4-14 : for in 반복문

![2  코드 4-14 for in 반복문](https://user-images.githubusercontent.com/55272324/73134854-d6155280-407e-11ea-9aa6-a850e252d4ee.PNG)

## 4.7 중첩 반복문

* 중첩 반복문 : 반복문을 여러 겹 중첩해 사용하면 중첩 반복문이라고 불린다.

#### 코드4-15 :  피라미드1 “좌측 정렬 형태의 * 피라미드”

```html
<<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script>
      var output = '';
        for (let row = 0; row < 10; row++){
          output += "*";
          console.log(output);
        }
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드4-15 : 피라미드1

![4-7 중첩 반복문 예제 결과](https://user-images.githubusercontent.com/55272324/72948530-c836a780-3dc8-11ea-8326-1be222601380.PNG)

#### 코드 4- 16 : 피라미드2 “ 좌측 정렬 형태의 역 *피라미드”

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script>
      var output = '';
        for (let row = 10; row > 0; row--){
          for(let col = 1; col <= row; col++){
            output += "*";
          }
          output += "\n";
        }
        console.log(output);
    </script>
  </head>
<body>

</body>
</html>
```

#### 결과 - 코드4-16 : 피라미드2

![4-7 중첩 반복문 실습1 결과](https://user-images.githubusercontent.com/55272324/72949313-4300c200-3dcb-11ea-872c-7eb3f4853efc.PNG)

#### 코드 4-17 : 피라미드3 “중간 정렬 *피라미드”

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      var output = '*';
        for (row = 1 ; row <10 ; row ++){
          for (space=10; space > row; space --){
            output += ' ';
          }
          for (star=1; star < row ; star ++){
            output += '**';
          }
          output += '\n';
        }
        console.log(output);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 4-17 : 피라미드3

![3  코드 4-17 피라미드 3 결과](https://user-images.githubusercontent.com/55272324/73136049-8c336900-408c-11ea-9003-e18774e97928.PNG)

## 4.8 break 키워드

* break : switch 조건문이나 반복문을 벗어날 때 사용하는 키워드

## 4.9 continue 키워드

* continue : 반복문 안의 현재 반복 작업을 멈추고 다시 반복문의 처음으로 돌아가 다음 반복 작업을 진행시키는 키워드 

#### 실습 : 1-100까지 숫자 중에 prime number(소수)를 구하시오

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script>
      var output = 0;
        for(let pn = 2; pn <= 100; pn ++){
          let isPrime = true;
          for(let dn = 2; dn < pn ; dn++){
            if (pn % dn == 0){
                isPrime = false;
                break;
            }
          }
          if (isPrime){
            console.log(pn);
          }
        }
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 실습 : 프라임 넘버 구하기

![4-9 continue 실습 결과](https://user-images.githubusercontent.com/55272324/72950424-b1934f00-3dce-11ea-91a9-5aa52a1f20c7.PNG)



## 4.10 조금 더 나아가기

> ECMAScript6에서 추가된 반복문 문법

### (1) for of 반복문

* for of 반복문 : 반복 변수에 인덱스가 아닌 요소가 들어간다.

```html
1. for in 반복문
var array = [요소]
for (var i in array){

}

2. for of 반복문
for(const elment of [요소]){

}
```



## 4장 연습문제

### 01) 이전 장의 연습문제에서 입력에 " 안녕"이 들어가 있으면 "안녕하세요"를 출력하는 프로그램을 만들었다. 여기에 반복문을 적용해서 계속해서 입력을 받게 하고, 입력한 문장 또는 현재 시각에 따라서 다양한 질문과 답변을 하는 프로그램을 만들어 보세요("잘 있어" 등을 입력하면 반복문을 종료해서 벗어나게 만들어보세요.)



### 02) 1부터 100까지 더하는 프로그램을 만들어보시오. 만든 다음에는 사용자에게 입력을 받아 특정한 숫자부터 특정한 숫자까지 더하는 프로그램을 만들어보시오.

#### 02) 실습코드1 : 1부터 100까지 더하는 프로그램

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      let sum = 0;
      for (i =1; i<=100; i++) {
        sum += i;
      }
      console.log(sum);
    </script>
  </head>
  <body>

  </body>
</html>
```

#### 02) 결과 - 실습코드1

![5  연습문제2-실습1 결과](https://user-images.githubusercontent.com/55272324/73136169-10d2b700-408e-11ea-8900-28321980ab3e.PNG)

#### 02) 실습코드2 : 사용자에게 입력을 받아 특정한 숫자부터 특정한 숫자까지 더하는 프로그램

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      var no1 = Number(prompt("숫자를 입력해 주세요 : "));
      var no2 = Number(prompt("숫자를 입력해 주세요 : "));
      var sum = 0;
      if(no1 > no2){
        for( no2; no2 <= no1; no2++){
            sum += no2;
          }
      }else{
        for(no1; no1<= no2; no1++){
            sum += no1;
            }
          }
      console.log(sum);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 02) 결과 - 실습코드2

![5  연습문제2-실습2 결과](https://user-images.githubusercontent.com/55272324/73136376-4f697100-4090-11ea-900c-70e5b5bd1d73.PNG)

### 03) 1부터 100까지 곱하는 프로그램을 만들어보시오. 만든 다음에는 사용자에게 입력을 받아 특정한 숫자부터 특정한 숫자까지 곱하는 프로그램을 만들어 보시오.

#### 03) 실습코드1 : 1부터 100까지 곱하는 프로그램

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      let sum = 1;
      for (i =1; i<=100; i++) {
        sum *= i;
      }
      console.log(sum);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 03) 결과 - 실습코드1

![6  연습문제3-실습1 결과](https://user-images.githubusercontent.com/55272324/73136433-f948fd80-4090-11ea-9e82-7dac3a03a176.PNG)

#### 03) 실습코드2 : 특정 숫자를 입력받아 특정 숫자부터 특정 숫자까지 곱하는 프로그램

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      var no1 = Number(prompt("숫자를 입력해 주세요 : "));
      var no2 = Number(prompt("숫자를 입력해 주세요 : "));
      var sum = 1;
      if(no1 > no2){
        for( no2; no2 <= no1; no2++){
            sum *= no2;
          }
      }else{
        for(no1; no1<=no2; no1++){
            sum *= no1;
            }
          }
      console.log(sum);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 03) 결과 - 실습코드2

![6  연습문제3-실습2 결과](https://user-images.githubusercontent.com/55272324/73136434-f948fd80-4090-11ea-97a3-abe6444fb713.PNG)


### 04) [52,273,103,32,47,103,31,2]와 같은 숫자 배열이 주어질 때, 배열 내부에서의 최댓값과 최솟값을 찾는 코드를 작성해보세요

#### 04) 실습코드

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script type="text/javascript">
      var array = [52,273,103,32,47,103,31,2];
      var max = array[0];
      var min = array[0];
        for(i=0; i <array.length; i++){
          if(array[i]>max){
            max = array[i];
          } 
          if(array[i] < min){
            min = array[i];
          } else {
            continue
          }
        }
        console.log("최댓값은 : " +max);
        console.log("최솟값은 : " +min);
    </script>
  </head>
  <body>

  </body>
</html>
```

#### 04) 결과

![7  연습문제4 결과](https://user-images.githubusercontent.com/55272324/73136606-b25c0780-4092-11ea-94fe-58a00e73d9e4.PNG)