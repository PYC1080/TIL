# Javascript 1 일차 - Chapter 3

> Ch 03 조건문 79 - 



## 3.1-4 조건문

> 3.1 if 조건문
>
> 3.2 if  else 조건문
>
> 3.3 중첩 조건문
>
> 3.4 if else if 조건문

### 실습

#### 실습 목표 : 사용자에게 국어, 영어, 수학 점수를 입력 받아 평균을 구한 뒤 수우미양가를 구분하는 프로그램



##### 실습 코드 

```html
<!DOCTYPE html>
<html>
<head>
    <script> 
        let krpoint = Number(prompt("국어 점수를 입력하세요 : "));
        let engpoint = Number(prompt("영어 점수를 입력하세요 : "));
        let mathpoint = Number(prompt("수학 점수를 입력하세요 : "));
        let sum = krpoint + engpoint + mathpoint;
      
        console.log("sum 값 : " + sum);

        let avg = sum/3;
        if (avg >= 90){
            console.log("당신의 평균은 " + avg + "이고 수입니다.");
        }
        else if(avg >= 80){
            console.log("당신의 평균은 " + avg + "이고 우입니다.");
        }
        else if(avg >= 70){
            console.log("당신의 평균은 " + avg + "이고 미입니다.");
        }
        else if(avg >= 60){
            console.log("당신의 평균은 " + avg + "이고 양입니다.");
        }
        else {
            console.log("당신의 평균은 " + avg + "이고 가입니다.");
        }
    </script>
</head>
<body>
    
</body>
</html>
```

##### 실습 결과

![실습 - 수우미양가 결과](https://user-images.githubusercontent.com/55272324/72873028-1c427d00-3d32-11ea-8ba7-1b69e550fc8b.PNG)



## 3.5 switch 조건문





## 3.6 삼항 연산자



## 3.7 짧은 조건문





### 실습

#### (1) promt() 함수로 문자열을 입력받아 "안녕"이 들어가 있으면 "안녕하세요", "잘자"또는 "잘 자"를 입력하면 "안녕히 주무세요"를 출력하는 코드를 작성하시오



#### (2) 문자열을 입력받아 "안녕"이라는 글자가 들어있지 않으면 "인사를 안 하다니"라고 출력하는 코드를 작성하시오



#### (3) 숫자를 입력받아 4로 나눌 수 있는 숫자라면 "4로 나눌 수 있는 숫자입니다"를 출력하는 코드를 작성하시오



#### (4) 숫자를 입력받아 양수라면 "양수입니다." 음수라면 "음수입니다", 0이라면 "0입니다"를 출력하는 코드를 작성하시오

##### (4) 코드

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

##### (4) 결과

![3-(4) 결과 0](https://user-images.githubusercontent.com/55272324/72874103-9a078800-3d34-11ea-94ab-137838eda33f.PNG)

![3-(4) 결과 홀수](https://user-images.githubusercontent.com/55272324/72874102-996ef180-3d34-11ea-8e20-532ebf4f5120.PNG)

![3-(4) 결과 짝수](https://user-images.githubusercontent.com/55272324/72874101-996ef180-3d34-11ea-8803-37897d849358.PNG)