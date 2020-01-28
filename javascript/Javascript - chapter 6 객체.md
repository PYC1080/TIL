# Javascript - chapter06 객체



## 6.1 객체 개요

* 자바스크립트의 기본 자료형 : 숫자 ,문자열, 불, 객체 ,함수, undefined

* 요소 접근 : 배열은 요소에 접근할때 인덱스를 사용하지만 객체는 키를 사용해 접근한다.

* 객체의 키 : 식별자, 문자열 모두 사용할 수 있다.

#### 코드 6-1 : 배열의 자료형

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
      <script type="text/javascript">
        alert(typeof ([]));
      </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 6-1 : 배열의 자료형

![1  배열의 자료형 결과](https://user-images.githubusercontent.com/55272324/73225421-f98bea80-41af-11ea-900c-d61578b23660.PNG)

#### 코드 6-3 : 객체 생성

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
      <script type="text/javascript">
        var product = {
          제품명 : '7D 건조 망고',
          유형 : '당절임',
          성분 : '망고, 설탕, 메타중아황산나트륨, 치자황색소',
          원산지 : '필리핀'
        };
        console.log(product['성분']);
        console.log(product.원산지);
      </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 6-3 : 객체 생성 

![2  객체 생성 결과](https://user-images.githubusercontent.com/55272324/73225699-eaf20300-41b0-11ea-9ee9-1d9d01af0d63.PNG)

## 6.2 속성과 메서드

* 속성과 요소 : 객체 내부에 있는 값은 속성 이라고 한다. 반면 배열 내부에 있는 값은 요소라 한다.
* 메서드 : 객체의 속성 중 함수 자료형인 속성을 메서드라 한다.

#### 코드 6-6 속성과 메서드의 구분

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
      <script type="text/javascript">
        var person = {
          name : '박박박',
          address : '서울',
          eat: function (food){
            console.log(food + "을/를 먹었습니다.")
          }
        };
        console.log(person.name);
        person.eat('바나나');
      </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 6-6 : 속성과 메서드의 구분

![3  속성과 메서드의 구분 결과](https://user-images.githubusercontent.com/55272324/73226050-0d385080-41b2-11ea-9104-d3ad54a6efc4.PNG)

* `this`키워드 : 메서드 내에서 자기 자신이 가진 속성이라는 것을 표시할 때 사용하는 키워드

#### 코드 6-7 : this 키워드

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
      <script type="text/javascript">
        var person = {
          name : '박박박',
          address : '서울',
          eat: function (food){
            console.log(this.name + '이 ' + food + "을/를 먹었습니다.")
          }
        };
        person.eat('바나나');
      </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 6-7 : this 키워드

![4  this 키워드 결과](https://user-images.githubusercontent.com/55272324/73226135-4ffa2880-41b2-11ea-945b-9ac16416219e.PNG)

* this 키워드의 생략 : c ++, 자바, c# 과 같은 프로그래밍 언어는 같은 객체 내부에서 this 키워드를 생략할 수 있다. 하지만 자바스크립트는 this 키워드를 생략할 수 없다.

## 6.3 객체와 반복문

* 객체의 속성을 모두 살펴보기 위한 반복문 : 단순 for 반복문 으로는 객체의 속성을 살펴보는 것이 불가능하다. 객체의 속성을 모두 살펴보기 위해서는 for in  반복문을 사용해야 한다.

#### 코드 6-8 객체와 반복문

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
      <script type="text/javascript">
        let product = {
          name : 'ATOM',
          price : '1,500만원',
          language : '한국어',
          supportOS : 'Win32/64',
          subscription : true
        };

        let output ='';
        for(let key in product){
          output += '○ ' + key + ': ' + product[key] + '\n';
        }
        console.log(output);
      </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 6-8 : 객체와 반복문

![5  객체와 반복문 결과](https://user-images.githubusercontent.com/55272324/73227510-1bd53680-41b7-11ea-85fd-5a9bba478bd7.PNG)

## 6.4 객체 관련 키워드

### (1) in 키워드

* `in`키워드 : in 키워드를 for 키워드와 별도로 사용하면 해당 키가 객체 안에 있는지 확인 할 수 있다.







#### 실습 : 객체 관련 키워드

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let students = [];
      students.push({이름:'김김김', 국어:90 ,수학:83 ,영어:95 });
      students.push({이름:'이이이', 국어:85 ,수학:84 ,영어:78 });
      students.push({이름:'박박박', 국어:70 ,수학:79 ,영어:88 });
      students.push({이름:'최최최', 국어:83 ,수학:80 ,영어:69 });
      students.push({이름:'진진진', 국어:92 ,수학:83 ,영어:93 });

      for (let i in students){
        students[i].sum = function(){
          return this.국어 + this.수학 + this.영어;
        }
        students[i].avg = function(){
          return students[i].sum() /3 ;
        }
      }
      for (let i in students){
        with(students[i]){
          console.log(이름 + " : " + sum() +"/" +avg());
        }
      }
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 실습 : 객체 관련 키워드



 

## 6.5 객체의 속성 추가와 제거



## 6.6 객체와 배열을 사용한 데이터 관리



## 6.7 함수를 사용한 객체 생성



## 6.8 조금 더 나아가기

