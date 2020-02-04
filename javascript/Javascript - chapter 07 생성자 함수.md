# Javascript - chapter 07 생성자 함수



## 7.1 생성자 함수 개요

* 생성자 함수에서 객체 생성 : 생성자 함수는  `new` 키워드로 객체를 생성한다.

```html
var 객체or인스턴스 = new 생성자함수()
```

#### 코드 7-4 메서드 생성

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      function Student(name, kor, eng, mat, sci){
        this.이름 = name;
        this.국어 = kor;
        this.영어 = eng;
        this.수학 = mat;
        this.과학 = sci;

        this.sum = function(){
          return this.국어 + this.영어 + this.수학 + this.과학;
        };
        this.avg = function(){
          return this.sum()/4;
        };
      }

      let student1 = new Student ('김', 100, 90, 80, 70);
      let student2 = new Student ('이', 90, 85, 100, 60);
      console.log(student1.sum() + "/" + student1.avg());
      console.log(student2.sum() + "/" + student2.avg());

    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 7-4 메서드 생성

![1  메서드 생성 결과](https://user-images.githubusercontent.com/55272324/73228812-2691ca80-41bb-11ea-996d-d1a17cf854be.PNG)

* `instanceof`키워드 : 해당 객체가 어떠한 생성자 함수로 생성되었는지 확인할 때 사용하는 키워드

#### 코드 7-6 : instanceof 키워드

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      function Student(name, kor, eng, mat, sci){
        this.이름 = name;
        this.국어 = kor;
        this.영어 = eng;
        this.수학 = mat;
        this.과학 = sci;
      }

      let student = new Student('박박박', 96, 98, 92, 98);

      console.log(student instanceof Student);
      console.log(student instanceof String);
      console.log(student instanceof Boolean);
      console.log(student instanceof Number);

    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 7-6 : instance of 키워드

![code 7-6 result](https://user-images.githubusercontent.com/55272324/73514509-521fe980-4435-11ea-9340-5dfe5765fc57.PNG)

## 7.2 프로토타입

* 프로토타입 : 생성자 함수로 생성된 객체가 공통으로 가지는 공간. 객체 각각이 가진 메서드를 공통의 공간으로 만들었기에 메서드를 하나만 생성해도 모든 객체가 해당 메서드를 사용할 수 있다.

#### 코드 7-8 : 프로토타입으로 메서드 생성

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      function Student(name, kor, mat, eng, sci){
        this.이름 = name;
        this.국어 = kor;
        this.영어 = eng;
        this.수학 = mat;
        this.과학 = sci;
      }
      Student.prototype.getSum = function (){};
      Student.prototype.getAverage = function (){};
      Student.prototype.toString = function (){};
      
    </script>
  </head>
  <body>

  </body>
</html>

```



## 7.3 new 키워드

* `new`키워드 : 생성자 함수를 생성할 때 사용하는 키워드

#### 코드 7-9,10 : new 키워드를 사용 비교

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script type="text/javascript">
      function Constructor(value){
        this.value = value;
      }

      let constructor1 = new Constructor('hello');
      let constructor2 = Constructor('hello');

      console.log(constructor1.value);
      console.log(value);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 7-9,10 : new 키워드 사용 비교

![code 7-9,10 result](https://user-images.githubusercontent.com/55272324/73514908-b1cac480-4436-11ea-9546-89e79d14129a.PNG)

* new 키워드를 사용하는 것과 사용하지 않는 것의 차이 : 일반적으로 this 키워드를 사용하면 window 객체를 나타낸다. 따라서 new 키워드를 사용하지 않으면, 함수를 실행하는 동안 window 객체에 속성을 추가한 것이 된다.

## 7.4 캡슐화

* 캡슐화 : 잘못 사용될 수 있는 객체의 특정 부분을 사용자가 사용할 수 없게 막는 기술이다.

#### 코드 7-13 캡슐화

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      function Rectangle(w,h){
        let width = w;
        let height = h;
      }
      this.getWidth =function () { return width;};
      this.getHeight =function () { return height;};
      this.setWidth =function (w) {
        width = w;
      };

      this.setHeight =function (h){
        height = h;
      };
    </script>
  </head>
  <body>

  </body>
</html>

```

* getter & setter

```html
1. getter : get○○() 형태의 메서드
2. setter : set○○() 형태의 메서드
```



## 7.5 상속

* 상속 : 기존의 생성자 함수나 객체를 기반으로 새로운 생성자 함수나 객체를 쉽게 만드는 것을 상속이라 한다. 상속으로 새로 만들어지는 객체는 기존의 객체를 기반으로 생성하므로 새로 만들어지는 객체에는 기존 객체의 특성이 모두 들어가 있다.

#### 코드 7-16,18 : 상속 및 상속 활용

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script type="text/javascript">
      function Rectangle(w,h){
        var width = w;
        var height = h;
      
      this.getWidth = function () { return width;};
      this.getHeight = function () { return height;};
      this.setWidth =function (w) {
        if (w < 0) {
          throw '폭의 길이는 음수일 수 없습니다.';
        } else{
            width = w;
        }
        this.setHeight =function (h){
          if (h < 0) {
            throw '높이의 길이는 음수일 수 없습니다.';
          } else{
              height = h;
          }
        }
      };  

      Rectangle.prototype.getArea = function () {
        return this.getWidth() * this.getHeight();
      };
    };
    </script>
    <script>
    function Square(length){
      this.base = Rectangle;
      this.base(length, length);
    }

    Square.prototype = Rectangle.prototype;
    Square.prototype.constructor = Square;

    let rectangle = new Rectangle(5,7);
    let square = new Square(5);
    console.log(rectangle.getArea()+ ' : ' + square.getArea());
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 7-16,17

```html
35 : 25									code 7-16 상속.html:44 35 : 25
```

## 7.6 조금 더 나아가기

### (1) 클래스 - ECMAScript 6

* 객체지향의 종류

```html
1. 클래스 기반 객체지향 언어 : 어디서나 활용된다고 이름을 들어본 프로그래밍 언어는 대부분 클래스 기반의 객체지향 언어이다.
2. 프로토타입 기반 객체지향 언어 : 
```



**클래스 선언과 속성 **



**메서드 선언**



**getter & setter**



**상속**



## 연습문제

### 01. 다음과 같은 객체를 생성할 수 있는 생성자 함수를 예로 들어보라 (생성자 함수 이름은 Product, 키 이름과 자료형은 적절하다고 생각하는 것을 사용하라)

| 속성 | 값         |
| ---- | ---------- |
| 이름 | 돼지삼겹살 |
| 무게 | 100g       |
| 가격 | 1690원     |

| 메서드          | 설명                            |
| --------------- | ------------------------------- |
| calculate(무게) | 무게를 기반으로 가격을 계산한다 |

예로 product.calculate(200) 이라고 입력하면, 100g * 2 = 200g 이므로 '3380원'을 출력하면 된다

#### 결과 - 01 코드

```html
<!DOCTYPE html>
<html>
    <head>
        <script>
            let number = 273;
            number.print = function(){
                console.log(this);
            };

            number.print();
            number.print();
            number.print();
        </script>
    </head>
    <body>
    
    </body>
</html>

```



### 02. 다음 코드의 실행 결과를 예측해보라

```html
<!DOCTYPE html>
<html>
    <head>
        <script>
            let number = 273;
            number.print = function(){
                console.log(this);
            };

            number.print();
            number.print();
            number.print();
        </script>
    </head>
    <body>
    
    </body>
</html>

```

#### 결과 - 02 코드

```html
연습문제 02.html:10

Uncaught TypeError: Cannot read property 'print' of undefined
at 연습문제 02.html:10
```

### 03. 다음 중 생성자 함수로 생성하는 객체 모두에 메서드를 추가할 때 사용하는 속성은 무엇인가?

```
1. class 2. object 3. prototype 4. global
```



### 04. 다음 중 특정 생성자 함수에서 생성한 객체인지 확인할 때 사용하는 키워드는 무엇인가?

```
1. is 2. instanceof  3. instanceOf   4. objectOf
```

