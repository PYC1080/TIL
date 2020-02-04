# Javascript - chatper08 기본 내장 객체



## 8.1 기본 자료형과 객체의 차이점



## 8.2 Object 객체

* `Object`객체 : 자바스크립트의 최상위 객체

### (1) 생성

* `Object`생성 방법

```html
1. var object = {};
2. var object = new Object();
```

### (2) 속성과 메서드

* Object 객체의 메서드

```html
1. constructor() : 객체의 생성자 함수를 나타낸다
2. hasOwnProperty(name) : 객체가 name 속성이 있는지 확인한다
3. isPrototypeof(object) : 객체가 object의 프로토타입인지 검사한다
4. propertyisEnumerable(name) : 반복문으로 열거할 수 있는지 확인한다
5. toLocaleString() : 객체를 호스트 환경에 맞는 언어의 문자열로 바꾼다
6. toString() : 객체를 문자열로 바꾼다
7. valueOf() : 객체의 값을 나타낸다.
```

### (3) 자료형 구분

### (4) 모든 객체에 메서드 추가

## 8.3 Number 객체

* `Number`객체 : 자바스크립트에서 가장 단순한 객체로서 숫자를 표현할 때 사용한다.

### (1) 메서드



### (2) 생성자 함수의 속성

* Number 생성자 함수의 속성

```html
1. MAX_VALUE : 자바스크립트의 숫자가 나타낼 수 있는 최대 숫자
2. MIN_VALUE : 자바스크립트의 숫자가 나타낼 수 있는 최소 숫자
3. NAN : 자바스크립트의 숫자로 나타낼 수 없는 숫자
4. POSITIVE_INFINITY : 양의 무한대 숫자
5. NEGATIVE_INFINITY : 음의 무한대 숫자

```

#### Number 속성

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let maxNumber = Number.MAX_VALUE;
      let minNumber = Number.MIN_VALUE;
      let nan = Number.NAN;
      let pi = Number.POSITIVE_INFINITY;
      let ni = Number.NEGATIVE_INFINITY;
      console.log(maxNumber);
      console.log(minNumber);
      console.log(nan);
      console.log(pi);
      console.log(ni);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - Number 속성

![2  Number 속성 결과](https://user-images.githubusercontent.com/55272324/73231150-e7677780-41c2-11ea-8695-1062a4fde044.PNG)

## 8.4 String 객체

* `string` 객체 : 자바스크립트에서 가장 많이 사용하는 내장 객체

### (1) 생성

```html
1. var 변수 = '내용';
2. var 변수 = new String('내용');
```

### (2) 기본 속성과 메서드

* String 객체의 속성

```html
1. length : 문자열의 길이를 나타낸다
```

* String 객체의 메서드

```html
1. charAt(position) : position에 위치하는 문자를 리턴한다
2. charCodeAt(position) : position에 위치하는 문자의 유니코드 번호를 리턴한다
3. concat(args) : 매개변수로 입력한 문자열을 이어서 리턴한다
4. indexOf(searchString, position) : 앞에서부터 일치하는 문자열의 위치를 리턴한다
5. lastindexOf(searchString, position) : 뒤에서부터 일치하는 문자열의 위치를 리턴한다 
6. match(regExp) : 문자열 안에 regExp가 있는지 확인한다 
7. replace(regExp, replacement) : regExp를 replacement로 바꾼 뒤 리턴한다
8. search(regExp) : regExp와 일치하는 문자열의 위치를 리턴한다
9. slcie(start, end) : 특정 위치의 문자열을 추출해 리턴한다
10. split(separator, limit) : separator로 문자열을 잘라서 배열을 리턴한다
11. substr(start, count) : start부터 count만큼 문자열을 잘라서 리턴한다
12. substring(start, end) : start부터 end까지 문자열을 잘라서 리턴한다
13. toLowerCase() : 문자열을 소문자로 바꾸어 리턴한다
14. toUpperCase() : 문자열을 대문자로 바꾸어 리턴한다
```

#### 실습 : String 객체의 메서드 

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let strl = 'hello world!';

      console.log(strl.length);

      console.log(strl.charAt(4));
      console.log(strl.concat("hi, there!"));
      console.log(strl.indexOf("world"));
      console.log(strl.lastIndexOf("world"));

      let ipaddress = "58.29.12.23";
      let values = ipaddress.split('.');
      console.log(typeof values);
      console.log(values[0]);
      console.log(ipaddress.substr(0, 3));
      console.log(ipaddress.substring(4, 6));
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 실습 : String 객체의 메서드

![3  실습 - String 객체의 메서드 결과](https://user-images.githubusercontent.com/55272324/73231723-6e691f80-41c4-11ea-8b22-a2413c7c373f.PNG)

### (3) HTML 관련 메서드

* String 객체의 HTML 관련 메서드

```html
1. anchor() : a 태그로 문자열을 감싸 리턴한다
2. big() : big 태그로 문자열을 감싸 리턴한다
3. blink() : blink 태그로 문자열을 감싸 리턴한다
4. bold() : b 태그로 문자열을 감싸 리턴한다
5. fixed() : tt 태그로 문자열을 감싸 리턴한다
6. fontcolor(colorString) : font 태그로 문자열을 감싸고 color 속성을 주어 리턴한다.
7. fontsize(fontSize) : font 태그로 문자열을 감싸고 size 속성을 주어 리턴한다.
8. italics() : I 태그로 문자열을 감싸 리턴한다
9. link(linkRef) : a 태그에 href 속성을 지정해 리턴한다
10. small() : small 태그로 문자열을 감싸 리턴한다
11. strike() : strike 태그로 문자열을 감싸 리턴한다
12. sub() : sub 태그로 문자열을 감싸 리턴한다
13. sup() : sup 태그로 문자열을 감싸 리턴한다
```



## 8.5 Array 객체

* `Array` 객체 : 여러 가지 자료를 쉽게 관리할 수 있게 도와주는 객체

### (1) 생성

* Array 생성자 함수

```html
1. Array() : 빈 배열을 만든다
2. Array(number) : 매개변수만큼의 크기를 가지는 배열을 만든다
3. Array(any,...any) : 매개변수를 배열로 만든다
```

### (2) 속성과 메서드

* Array 객체의 속성

```html
1. length : 요소의 갯수를 알아낸다
```

* Array 객체의 메서드

```html
1. concat() : 매개변수로 입력한 배열의 요소를 모두 합쳐 배열을 만들어 리턴한다
2. join()* : 배열 안의 모든 요소를 문자열로 만들어 리턴한다
3. pop()* : 배열의 마지막 요소를제거하고 리턴한다
4. push()* : 배열의 마지막 부분에 새로운 요소를 추가한다
5. reverse()* :배열의 요소 순서를 뒤집는다
6. slice() : 요소의 지정한 부분을 리턴한다
7. sort()* : 배열의 요소를 정렬한다
8. splice()* : 요소의 지정한 부분을 삭제하고 삭제한 요소를 리턴한다

<!--
1. *표시된 메서드는 자기 자신을 변화시키는 메서드이다.
-->
```



### (3) 정렬



#### 코드 8-28 : 학생 성적 정렬

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      function Student(name, kor, mat, eng, sci){
        this.이름 = name;
        this.국어 = kor;
        this.수학 = mat;
        this.영어 = eng;
        this.과학 = sci;

        this.getSum = function(){
          return this.국어 + this.수학 + this.영어 + this.과학;
        }

        this.getAverage = function(){
          return this.getSum()/4;
        }
        this.toString = function(){
          return this.이름 + '\t' + this.getSum() + '\t' + this.getAverage();
        };
      }

      let students = [];
      students.push(new Student('김', 96,98,92,98));
      students.push(new Student('이', 92,94,88,98));
      students.push(new Student('박', 90,96,84,100));
      students.push(new Student('최', 88,90,88,75));
      students.push(new Student('진', 100,96,80,95));

      students.sort(function (left, right){
        return right.getSum() - left.getSum();
      });
      students = students.slice(0,3);

      let output = '이름\t총점\t평균\n';
      for (let i in students) {
        output += students[i].toString() + '\n';
      }
      console.log(output);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 8-28 : 학생 성적 정렬

![4  코드 8-28 학생 성적 정렬 결과](https://user-images.githubusercontent.com/55272324/73236104-8a74bd00-41d4-11ea-88ea-fd73d2f59f26.PNG)

### (4) 요소 제거

* Array 객체에서 요소를 제거하는 방법 : Array 객체의 메서드에서는 특정 요소를 제거하는 메서드가 따로 존재하지 않는다. 대신에 `splice()`메서드를 사용해 특정 요소를 제거하면 된다.

## 8.6 Date 객체

* `Date`객체 : 날짜와 시간을 표시하는 객체

### (1) 생성



### (2) 메서드



### (3) 시간 간격 계산



## 8.7 Math 객체

* `Math` 객체 : Math 객체는 자바스크립트의 기본 내장 객체 중 유일하게 생성자 함수를 사용하지 않는 객체이다.
* Math 객체의 속성

```html
1. E : 2.718281828459045
2. LN2 : 0.6931471805599453
3. LN10 : 2.302585092994046
4. LOG2E : 1.4426950408889634
5. LOG10E : 0.4342944819032518
6. PI : 3.141592653589793
7. SQRT1_2 : 0.7071067811865476
8. SQRT2 : 1.4142135623730951
```

* Math 객체의 메서드

```html
1. abs(x) : x의 절대 값을 리턴한다
2. acos(x) : x의 아크 코사인 값을 리턴한다
3. asin(x) : x의 아크 사인 값을 리턴한다
4. atan(x) : x의 아크 탄젠트 값을 리턴한다
5. atan2(y,x) : x와 y의 비율로 아크 탄젠트 값을 구해 리턴한다
6. ceil(x) : x보다 크거나 같은 가장 작은 정수를 리턴한다
7. cos(x) : x의 코사인 값을 리턴한다
8. exp(x) : 자연로그의 x제곱을 리턴한다
9. floor(x) : x보다 작거나 같은 가장 큰 정수를 리턴한다
10. log(x) : x의 로그 값을 리턴한다 
11. max(x,y,z...n) : 매개변수 중 가장 큰 값을 리턴한다
12. min(x,y,z...n) : 매개변수 중 가장 작은 값을 리턴한다
13. pow(x,y) : x의 y 제곱을 리턴한다
14. random() : 0부터 1까지의 임의의 수를 리턴한다
15. round(x) : x를 반올림하여 리턴한다
16. sin(x) : x의 사인 값을 리턴한다
17. sqrt(x) : x의 제곱근을 리턴한다
18. tan(x) : x의 탄젠트 값을 리턴한다
```



## 8.8 ECMAScript 5 Array 객체

* ECMAScript 5 : HTML5와 함께 출현한 자바스크립트 표준안을 ECMAScript 5 라고 한다.

### (1) 확인 메서드

* Array 생성자 함수의 메서드

```html
1. Array.isArray() : 배열인지 확인한다
```



### (2) 탐색 메서드

* ECMAScript 5 Array 객체의 탐색 메서드

```html
1. indexOf() : 특정 요소를 앞쪽부터 검색한다
2. lastindexOf() : 특정 요소를 뒤쪽부터 검색한다
```



### (3) 반복 메서드

* ECMAScript 5 Array 객체의 반복 메서드

```html
1. forEach() : 배열 각각의 요소를 사용해 특정 함수를 for in 반복문처럼 실행시킨다
2. map() : 기존의 배열에 특정 규칙을 적용해 새로운 배열을 만든다
```



### (4) 조건 메서드

* ECMAScript 5 Array 객체의 조건 메서드

```html
1. filter() : 특정 조건을 만족하는 요소를 추출해 새로운 배열을 만든다
2. every() : 배열의 요소가 특정 조건을 모두 만족하는지 확인한다
3. some() : 배열의 요소가 특정 조건을 적어도 하나 만족하는지 확인한다
```

#### 실습 : filter() 메소드

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let jumsu = [90,99,50,60,70,58,88,72,40,89];

      jumsu = jumsu.filter(function(element, index, array){
          return element >= 60;
      });
      jumsu.forEach(function(element){
        console.log(element);
      })
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 실습 : filter() 메소드

![5  실습 filter 메소드 결과](https://user-images.githubusercontent.com/55272324/73240278-e09c2d00-41e1-11ea-9f08-24057a0c2760.PNG)

#### 코드 8-49 every() 메서드와 some() 메서드

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let array = [1,2,3,4,5,6,7,8,9,10];

      function lessThanFive(element, index, array){
        return element < 5;
      }
      function lessThanTwenty(element,indxe,array){
        return element < 20;
      }

      let output1 = array.every(lessThanFive);
      let output2 = array.every(lessThanTwenty);
      let output3 = array.some(lessThanFive);
      let output4 = array.some(lessThanTwenty);

      let output = ''
      output += output1 + ' : ' + output2 + '\n';
      output += output3 + ' : ' + output4 + '\n';
      console.log(output);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 8-49 : every() 메서드와 some() 메서드

![6  코드8-49 every 메서드와 some 메서드 결과](https://user-images.githubusercontent.com/55272324/73240710-1ee61c00-41e3-11ea-9f7d-0ac99837fada.PNG)



### (5) 연산 메서드

* ECMAScript 5 Array 객체의 연산 메서드

```html
1. reduce() : 배열의 요소 하나가 될 때까지 요소를 왼쪽부터 두 개씩 묶는 함수를 실행
2. reduceRight() : 배열의 요소 하나가 될 때까지 요소를 오른쪽부터 두 개씩 묶는 함수를 실행
```

#### 코드 8-50 : reduce() 메서드

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let array = [1,2,3,4,5];
      let output = '';
      let output2 = '';
      array.reduce(function(previousValue, currentValue, index, array){
        output += previousValue + ' : ' + currentValue + ' : ' + index + '\n'
      });
      array.reduceRight(function(previousValue, currentValue, index, array){
        output2 += previousValue + ' : ' + currentValue + ' : ' + index + '\n'
      });
      console.log(output);
      console.log(output2);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 코드 8-50 : reduce() 메서드

![7  코드8-50 reduce 메서드 결과](https://user-images.githubusercontent.com/55272324/73240969-f14da280-41e3-11ea-9109-f3e5352536d0.PNG)



## 8.9 ECMAScript 5 String 객체

* ECMAScript 5 String 객체의 메서드

```html
1. trim() : 문자열 양쪽 끝의 공백을 제거
```



## 8.10 조금 더 나아가기

### (1) JSON 객체

* JSON(Javascript Object Notation) : 자바스크립트 객체의 형태를 갖는 문자열

* ECMAScript 5  JSON 객체의 메서드

```html
1. JSON.stringify() : 자바스크립트 객체를 JSON 문자열로 변환
2. JSON.parse() : JSON 문자열을 자바스크립트 객체로 변환
```

#### 예제 : JSON

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let  json = {
        "id" : 12345,
        "accountNumber": "123-345-5678",
        "name" : "박박박",
        "balance" : 1000,
        "lastTxDate" : "2020=01-22"
      };
      let  json2 = `{
        "id" : 12345,
        "accountNumber": "123-345-5678",
        "name" : "박박박",
        "balance" : 1000,
        "lastTxDate" : "2020=01-22"
      }`;
      console.log(json);
      console.log(typeof json);
      console.log(json.name + '/' + json.balance);
      console.log("--------------------------------------------")
      console.log(json2);
      console.log(typeof json2);
      console.log(json2.name + '/' + json2.balance);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 예제 : JSON

![8  json 예제 결과](https://user-images.githubusercontent.com/55272324/73243236-776ce780-41ea-11ea-8312-1e52340cd798.PNG)

#### 실습 :  weather.api

> [weather.api](https://openweathermap.org/current)

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      let openapi = `{
                "coord": { "lon": 139,"lat": 35},
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "base": "stations",
                "main": {
                  "temp": 281.52,
                  "feels_like": 278.99,
                  "temp_min": 280.15,
                  "temp_max": 283.71,
                  "pressure": 1016,
                  "humidity": 93
                },
                "wind": {
                  "speed": 0.47,
                  "deg": 107.538
                },
                "clouds": {
                  "all": 2
                },
                "dt": 1560350192,
                "sys": {
                  "type": 3,
                  "id": 2019346,
                  "message": 0.0065,
                  "country": "JP",
                  "sunrise": 1560281377,
                  "sunset": 1560333478
                },
                "timezone": 32400,
                "id": 1851632,
                "name": "Shuzenji",
                "cod": 200
              }`;
        console.log(openapi);
        console.log(typeof openapi);
        let parseJson = JSON.parse(openapi);
        console.log("현재온도 : "+ parseJson.main.temp);
        console.log("최고온도 : "+ parseJson.main.temp_max);
        console.log("최저온도 : "+ parseJson.main.temp_min);
        console.log("현재날씨 : "+ parseJson.weather[0].main);
    </script>
  </head>
  <body>

  </body>
</html>

```

#### 결과 - 실습 : weather.api

![9  weateher-api 결과](https://user-images.githubusercontent.com/55272324/73244680-dbdd7600-41ed-11ea-9e69-898b8c364369.PNG)

### (2) 화살표 함수를 사용한 Array 객체의 메서드 활용



### (3) underscore 라이브러리

> [Underscore 라이브러리](http://underscorejs.org/)