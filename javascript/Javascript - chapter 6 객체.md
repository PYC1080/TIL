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

* 속성과 요소 : 객체 내부에 있는 값은 속성 이라고 한다. 반면 배열 내부에 있는 값은 요소라 한다. javascript 에서는 요소와 속성이 다르지 않다. 따라서 배열의 요소와 마찬가지로 객체의 속성도 모든 형태의 자료형을 가질 수 있다.
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

* 객체의 속성을 모두 살펴보기 위한 반복문 : 단순 for 반복문 으로는 객체의 속성을 살펴보는 것이 불가능하다. 객체의 속성을 모두 살펴보기 위해서는 for in  반복문을 사용해야 한다. for in 반복문에 객체를 넣으면 객체의 요소 갯수만큼 반복문을 실행한다. 

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

#### 코드 6-10 : in 키워드

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let output = '';
      let student = {
        이름 : '박박박',
        국어 : 92, 수학 : 98,
        영어 : 90, 과학 : 89
      };
      output += "'이름' in student : " + ('이름' in student) + '\n';
      output += "'성별' in student : " + ('성별' in student);

      console.log(output);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 6-10 : in 키워드

![1  코드 6-10 in 키워드 결과](https://user-images.githubusercontent.com/55272324/73256628-96c53e00-4205-11ea-8db7-835df5ed7a27.PNG)

### (2) with 키워드

* `with`키워드 : 복잡하게 사용해야 하는 코드를 짧게 줄여주는 키워드

```html
with(<객체>){
    <코드>
    }
```

#### 코드 6-12 : with 키워드 사용

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let output = '';
      let student = {
        이름 : '박박박',
        국어 : 92, 수학 : 98,
        영어 : 90, 과학 : 89
      };

      output += '★with를 사용하지 않은 경우★'+'\n';
      output += '이름: ' + student.이름 + '\n';
      output += '국어: ' + student.국어 + '\n';
      output += '수학: ' + student.수학 + '\n';
      output += '영어: ' + student.영어 + '\n';
      output += '과학: ' + student.과학 + '\n';

      with (student) {
        output += '★with를 사용한 경우★' +'\n';
        output += '이름: ' + 이름 + '\n';
        output += '국어: ' + 국어 + '\n';
        output += '수학: ' + 수학 + '\n';
        output += '영어: ' + 영어 + '\n';
        output += '과학: ' + 과학 + '\n';
      };

      console.log(output);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 6-12 : with 키워드 사용

![2  코드 6-12 with 키워드 사용](https://user-images.githubusercontent.com/55272324/73257331-ec4e1a80-4206-11ea-9d67-13694b874404.PNG)

* with 키워드와 객체 충돌 : 만약 with 키워드를 사용하는 객체의 속성 이름과 외부 변수의 이름이 같으면 충돌이 발생한다. 이 경우에는 자바스크립트는 객체의 속성을 우선시한다.

#### 코드 6-13 : with 키워드 사용 시 변수 이름 충돌

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let output = '';
      let student = {
        이름 : '박박박',
        국어 : 92, 수학 : 98,
        영어 : 90, 과학 : 89
        output : '이미 있지요';
      };

      with (student) {
        output += '★with를 사용한 경우★' +'\n';
        output += '이름: ' + 이름 + '\n';
        output += '국어: ' + 국어 + '\n';
        output += '수학: ' + 수학 + '\n';
        output += '영어: ' + 영어 + '\n';
        output += '과학: ' + 과학 + '\n';
      };

      console.log(output);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 6-13 : with 키워드 사용 시 변수 이름 충돌

![3  코드 6-13 with 키워드 사용시 변수이름 충돌 결과](https://user-images.githubusercontent.com/55272324/73260907-50c0a800-420e-11ea-9279-fe0aca79a0c8.PNG)

객체의 속성 이름과 외부 변수의 이름이 같아 충돌이 발생했다. 따라서 해당 오류를 해결 하기 위해서는 with 키워드 내부에서 window 객체의 변수를 사용하겠다고 지정해주어야 한다.




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

![4  실습 - 객체 관련 키워드 결과](https://user-images.githubusercontent.com/55272324/73261368-4521b100-420f-11ea-8b09-7ae5be0bf5a5.PNG)

 

## 6.5 객체의 속성 추가와 제거

* 객체의 속성 추가와 제거 : 처음 객체를 생성하는 시점 이후에 속성을 (동적으로) 추가하거나 제거하는 것

### (1) 속성 추가

#### 코드 6-15 : 빈 객체 생성

```html
<script>
	var 변수 = {};
</script>
```

#### 코드 6-16 : 객체에 동적으로 속성 추가

```html
<script>
	var 변수 = {};
    
    변수.속성1 = '값1';
    변수.속성2 = '값2';
    변수.속성3 = '값3';
</script>
```

* `toString()`메서드 : 객체에 있는 속성을 출력하는 메서드

#### 코드 6-17 : 동적으로 메서드 추가

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let student = {
          이름 : '박박박',
          취미 : '프로그래밍',
          특기 : '잠자기',
          장래희망 : '놀고먹기'
      };

      student.toString = function(){
        let output ='';
        for (let key in this){
          if (key != 'toString'){
            output += key + '\t' + this[key] + '\n';
          }
        }
        return output;
      };
      console.log(student.toString());
    </script>
  </head>
  <body>

  </body>
</html>
```

#### 결과 - 코드 6-17 : 동적으로 메서드 추가

![5  코드 6-17 동적으로 메서드 추가](https://user-images.githubusercontent.com/55272324/73262659-11945600-4212-11ea-93c8-fbbc5a30dac2.PNG)

### (2) 속성 제거

* `delete`키워드 : 동적으로 객체의 속성을 제거할 때 사용하는 키워드


#### 코드 6-18 : 객체의 속성 제거

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let student = {
          이름 : '박박박',
          취미 : '프로그래밍',
          특기 : '잠자기',
          장래희망 : '놀고먹기'
      };

      student.toString = function(){
        let output ='';
        for (let key in this){
          if (key != 'toString'){
            output += key + '\t' + this[key] + '\n';
          }
        }
        return output;
      };

      console.log(student.toString());
      console.log("---속성 제거 후---");

      delete(student.장래희망);

      console.log(student.toString());
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 6-18 : 객체의 속성 제거

![6  코드 6-18 객체의 속성 제거 결과](https://user-images.githubusercontent.com/55272324/73262863-8f586180-4212-11ea-9371-b39b9b603637.PNG)

## 6.6 객체와 배열을 사용한 데이터 관리

* 추상화 : 현실에 존재하는 객체의 필요한 속성을 추출하는 작업

#### 코드 6-22 : 학생 성적 출력

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let students = [];
      students.push({이름 : 'A', 국어 : 87, 영어 : 88, 수학 : 100, 과학 : 55});
      students.push({이름 : 'B', 국어 : 71, 영어 : 78, 수학 : 90, 과학 : 100});
      students.push({이름 : 'C', 국어 : 97, 영어 : 98, 수학 : 95, 과학 : 95});
      students.push({이름 : 'D', 국어 : 83, 영어 : 58, 수학 : 74, 과학 : 75});
      students.push({이름 : 'E', 국어 : 77, 영어 : 88, 수학 : 78, 과학 : 65});

      for(let i in students){
        students[i].getSum = function(){
          return this.국어 + this.영어 + this.수학 + this.과학;
        };

        students[i].getAverage = function(){
          return students[i].getSum()/4;
        };
      };

      let output ='이름\t총점\t평균\n'

      for(let i in students){
        with(students[i]){
          output += 이름 +'   \t ' + getSum() + ' \t ' + getAverage() + '\n';
        }
      }
      console.log(output);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 6-22 : 학생 성적 출력

![7  코드 6-22 학생 성적 출력 결과](https://user-images.githubusercontent.com/55272324/73264164-77cea800-4215-11ea-9bcb-75a3150a6be3.PNG)

## 6.7 함수를 사용한 객체 생성

* 함수를 사용한 객체 생성의 장점 : 고정된 형태의 틀을 만들면 객체 데이터를 쉽고 빠르게 생성할 수 있다.

#### 코드 6-26 : 함수를 사용한 객체 생성

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      function ms (name, kor, mat, eng, sci){
        let willReturn ={
          이름 : name,
          국어 : kor,
          수학 : mat,
          영어 : eng,
          과학 : sci,



          getSum:  function (){
            return this.국어 + this.수학 + this.영어 + this.과학;
          },

          getAverage: function (){
            return this.getSum()/4;
          },
          toString: function(){
            return this.이름 +'\t' + this.getSum() +'\t' + this.getAverage();
          }
        };
        return willReturn;
      };
      let students =[];
      students.push(ms('A',87,88,91,94));
      students.push(ms('B',100,83,97,96));
      students.push(ms('C',77,81,95,92));
      students.push(ms('D',95,88,95,80));
      students.push(ms('E',90,85,75,84));

      let output = '이름\t총점\t평균\n';
      for (let i in students){
        output += students[i].toString()+'\n';
      }
      console.log(output);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 6-26 : 함수를 사용한 객체 생성

![8  코드 6-26 함수를 사용한 객체 생성 결과](https://user-images.githubusercontent.com/55272324/73265789-f416ba80-4218-11ea-804c-af12cca94a49.PNG)


## 6.8 조금 더 나아가기

### (1) 옵션 객체 초기화

* 옵션 객체 : 함수의 매개변수로 전달하는 객체, 옵션의 의미는 입력을 해도되고 안해도 되는 선택권이 있다는 의미이다. 만약 기본 매개변수처럼 값을 입력하지 않으면 초기화 해주는 작업이 필요하다.

#### 코드 6-28 : 옵션 객체 초기화

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      function test(options) {
        options.valueA = options.valueA || 10;
        options.valueB = options.valueB || 20;
        options.valueC = options.valueC || 30;

        console.log(options.valueA + ' : ' + options.valueB + ' : ' + options.valueC);
      }

      test({
        valueA: 52,
        valueC: 273
      });
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 6-26 : 옵션 객체 초기화

![9  코드 6-28 옵션 객체 초기화 결과](https://user-images.githubusercontent.com/55272324/73266273-eb72b400-4219-11ea-9f28-c52fb7d5c4f5.PNG)

### (2) 참조 복사와 값 복사

* 값 복사(깊은 복사) : 기본 자료형을 복사할 때 값을 완전히 복사해버리는 것. 값이 복사되어 두 개의 변수가 완전한 독립성을 갖는 것을 값 복사(깊은 복사)라 한다.
* 참조 복사(얕은 복사) : 값 복사와 다르게 독립적이지 않게 복사되는 것을 참조 복사(얕은 복사)라 한다.

#### 코드 6-29,30 : 기본 자료형의 값 복사

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let originalValue1 = 10;
      let newValue1 = originalValue1;

      let originalValue2 = [10];
      let newValue2 = originalValue2;

      originalValue1 = 273;
      originalValue2[0] =273;

      console.log("---깊은 복사---");
      console.log("originalValue1 : " + originalValue1);
      console.log("newValue1 : " + newValue1);
      console.log("---얕은 복사---");
      console.log("originalValue2 : " + originalValue2);
      console.log("newValue1 : " + newValue2);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 6-29,30 : 기본 자료형의 값 복사

![10  코드 6-29,30 기본 자료형의 값 복사 결과](https://user-images.githubusercontent.com/55272324/73266861-26291c00-421b-11ea-958d-0f25e3b36898.PNG)



### (3) 전개 연산자를 사용한 배열 테크닉 - ECMAScript 6

* 배열 복제 

```html
let 배열1 = [값1,값2,...]; // 배열 선언

let 배열2 = [...배열1]; // 배열 복제
```

#### 코드 6-35 : 배열 복제 확인

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let Array1 = [1,2,3,4,5];
      let Array2 = [...Array1];

      Array1[0] = 52;
      Array1[1] = 273;
      console.log(Array1);
      console.log(Array2);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 6-35 : 배열 복제 확인

![11  코드 6-35 배열 복제 확인](https://user-images.githubusercontent.com/55272324/73267320-21b13300-421c-11ea-8c60-2f2abdb679e9.PNG)



* 배열 병합 : 전개 연산자를 두 번 사용하여 배열을 병합한다.

#### 코드 6-37 : 전개 연산자를 사용한 배열 병합

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      const Array1 = [52,273,103,32,57];

      const Array2 = [1,2,3,4,5, ...Array1];
      const Array3 = [...Array1,1,2,3,4,5];

      console.log(Array2);
      console.log(Array3);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 6-37 : 전개 연산자를 사용한 배열 병합

![12  코드 6-37 전개 연산자를 사용한 배열 병합](https://user-images.githubusercontent.com/55272324/73267582-aef48780-421c-11ea-84e7-30784b523bd6.PNG)



## 연습문제

### 01. 다음과 같은 표를 자바스크립트 객체로 만들어보라( 키 이름과 자료형은 적절하다고 생각하는 것을 사용하라)

| 속성      | 값             |
| --------- | -------------- |
| 이름      | Nature of Code |
| 가격      | 30,000원       |
| 저자      | 다니엘 쉬프만  |
| ISBN      | 9788968481901  |
| 페이지 수 | 620 페이지     |

#### 결과 : 01

```html

```



### 02. 다음과 같은 데이터를 자바스크립트 객체의 배열로 만들어 보라

| Name         | Mineral | Gas  | Supply |
| ------------ | ------- | ---- | ------ |
| 일벌레       | 50      | 0    | 1      |
| 여왕         | 150     | 0    | 2      |
| 바퀴         | 75      | 25   | 2      |
| 히드라리스크 | 100     | 50   | 2      |
| 타락귀       | 150     | 100  | 2      |

#### 결과 : 02

```html

```



### 03. 다음 코드의 실행 결과를 예측해보고 만약 오류가 발생한다면 어떻게 수정해야 할지 생각해보라

```html
let object = {
	"+" : 1, 
	"-" : 2,
	"*" : 3,
	"/" : 4,
}

console.log(object.+);
console.log(object.-);
console.log(object.*);
console.log(object./);
```

