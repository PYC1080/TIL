# Javascript 1일차 - Chapter4

> Chapter 4 반복문 97 -



## 4.1 반복문의 장점



## 4.2 배열

* 배열 : 배열은 여러 개의 변수를 한꺼번에 선언해 다룰 수 있는 자료형이다.

* Index : 배열 기호 안에 들어간 숫자를 인덱스라 부른다.

#### 배열의 요소에 접근하는 방법 : 예제

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
    </script>
</head>
<body>
    
</body>
</html>
```

#### 결과

![4 - 요소에 접근하는 방법 결과](https://user-images.githubusercontent.com/55272324/72874867-56158280-3d36-11ea-995e-213a2bfa6197.PNG)



## 4.3 while 반복문



## 4.4 do while 반복문



## 4.5 for 반복문



#### 예제 : 코드

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

#### 예제 결과

![4 - 4 for 예제 결과](https://user-images.githubusercontent.com/55272324/72875384-7f82de00-3d37-11ea-9fbc-83437c4620e1.PNG)