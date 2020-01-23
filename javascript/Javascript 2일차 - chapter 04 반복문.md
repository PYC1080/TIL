# Javascript 2일차 - chapter 04 반복문

> Chapter 4.3 101 -



## 1. chapter 04 반복문



### 4.3 while 반복문

* if 조건문과의 차이점 : 문장을 한번만 실행하고 끝나는 것이 아니라 불 표현식이 참인 동안은 지속적으로 문장을 실행하는 **무한 루프** 구조를 갖는다.

* while 반복문을 종료하는 방법

```
1. 반복되는 숫자를 제한한다.
2. 내부 조건을 변화시켜 반복문을 종료시킨다
```

#### 예제 : while 반복문 - 1초 안에 반복하는 횟수 구하기

```
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





### 4.4 do while 반복문

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



### 4.5 for 반복문



* for 반복문 구조

```html
<<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <script>
      for(<초기식>; <조건식>; <종결식>){
        <문장>
      }
    </script>
  </head>
  <body>
    
  </body>
</html>
```



### 4.6 for in 반복문



### 4.7 중첩 반복문

* 중첩 반복문 : 반복문을 여러 겹 중첩해 사용하면 중첩 반복문이라고 불린다.

#### 예제 : 중첩 반복문 - *로 표현되는  10층짜리 피라미드 만들기 

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

#### 결과 - 예제 : 중첩 반복문

![4-7 중첩 반복문 예제 결과](https://user-images.githubusercontent.com/55272324/72948530-c836a780-3dc8-11ea-8326-1be222601380.PNG)

#### 실습 : 중첩 반복문1 - 예제에서 표현된 피라미드를 뒤집힌 모양으로 출력하기

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

#### 결과 - 실습 : 중첩반복문1

![4-7 중첩 반복문 실습1 결과](https://user-images.githubusercontent.com/55272324/72949313-4300c200-3dcb-11ea-872c-7eb3f4853efc.PNG)

#### 실습 : 중첩 반복문2 -예제에서 표현된 피라미드를 중간 정렬 형태로 출력하기

```html

```

#### 결과 - 실습 : 중첩반복문2





### 4.8 break 키워드



### 4.9 continue 키워드



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



### 4.10 조금 더 나아가기



### 4장 연습문제

#### 01문제) 이전 장의 연습문제에서 입력에 " 안녕"이 들어가 있으면 "안녕하세요"를 출력하는 프로그램을 만들었다. 여기에 반복문을 적용해서 계속해서 입력을 받게 하고, 입력한 문장 도는 현재 시각에 따라서 다양한 질문과 답변을 하는 프로그램을 만들어 보세요("잘 있어" 등을 입력하면 반복문을 종료해서 벗어나게 만들어보세요.)



#### 02문제) 1부터 100까지 더하는 프로그램을 만들어보시오. 만든 다음에는 사용자에게 입력을 받아 특정한 숫자부터 특정한 숫자까지 더하는 프로그램을 만들어보시오.

##### 02) 실습코드

```html

```

##### 02) 결과



#### 03문제) 1부터 100까지 곱하는 프로그램을 만들어보시오. 만든 다음에는 사용자에게 입력을 받아 특정한 숫자부터 특정한 숫자까지 곱하는 프로그램을 만들어 보시오.

##### 03) 실습코드

```html

```

##### 03) 결과



#### 04문제) [52,273,103,32,47,103,31,2]와 같은 숫자 배열이 주어질 때, 배열 내부에서의 최댓값과 최솟값을 찾는 코드를 작성해보세요

##### 04) 실습코드

```html

```

##### 04) 결과

