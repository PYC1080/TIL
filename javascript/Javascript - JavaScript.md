# Javascript - JavaScript

## 1. 개요

```
1. 자바스크립트의 표준 명칭 : ECMAScript(ES)
2. native application : 자바와 스위프트 등 스마트폰에 최적화된 프로그래밍 언어로 만든 애플리케이션
3. Database : 데이터를 저장할 때 사용하는 프로그램
```

## 2. 기본 문법

```
1. 표현식, 문장 그리고 프로그램 
	1) 표현식 : 자바스크립트에서 값을 만들어내는 간단한 코드
	2) 문장 : 하나 이상의 표현식이 모여 문장을 이룬다. 문장 끝에는 마침표 역할로 `;`를 찍어 문장의 종결을 나타낸다. 단, 입력하지 않아도 오류가 발생하지는 않는다.
	3) 프로그램 : 문장이 모여 프로그램을 이룬다
2. 키워드
	1) 키워드 : 자바스크립트가 처음 만들어질 때 정해진 특별한 의미가 있는 단어
3. 식별자 
	1) 식별자 : 자바스크립트에서 이름을 붙일 때 사용하는 단어
	2) 식별자 생성시 규칙
		(1) 키워드를 사용하면 안 된다
		(2) 숫자로 시작하면 안 된다
		(3) 특수문자는 '_'와 '$'만 허용한다
		(4) 공백 문자를 포함할 수 없다
	3) 식별자 관례
		(1) 생성자 함수의 이름은 항상 대문자로 시작한다
		(2) 변수, 인스턴스, 함수, 메서드의 이름은 항상 소문자로 시작한다
		(3) 여러 단어로 이루어진 식별자는 각 단어의 첫 글자를 대문자로 한다
4. 주석
	1) 주석 : 프로그램 코드를 설명하는 데 사용하며 프로그램을 진행하는 데 전혀 영향을 주지 않는다
	2) 종류
		(1) 한줄 주석 : /주석 내용/
		(2) 라인 주석 : /*주석 내용*/
		(3) 태그 주석 : <!--주석 내용-->
5. 매개변수 : 함수의 괄호 안에 들어가는 것
6. 자료형
	1) 문자열 자료형 : '자료 내용'와 "자료 내용"을 이용해 문자열을 생성한다
		(1) 이스케이프 문자 : 이스케이프 문자를 통해 특수 기호를 문자열처럼 사용할 수 있다
		a) \t : 수평 탭
		b) \n : 줄 바꿈
		c) \\ : 역 슬래시
		d) \' : 작은 따옴표(single quotation)
		e) \" : 큰 따옴표(double quotation)
		(2) 템플릿 문자열(`) : '`' 기호로 감싸 만들며, 문자열 내부에 ${표현식}기호를 사용해 문자열이 만들어질 때 표현식이 계산되어 들어가진다.
	2) 숫자 자료형 : 정수와 유리수의 구분 없이 모두 같은 자료형으로 인식한다.
		1) NaN(Not a Number) : 자바스크립트로 나타낼 수 없는 숫자
		2) 자바스크립트는 복소수를 표현할 수 없다. 따라서 복소수는 NaN으로 출력된다
	3) Bool 자료형 : 참과 거짓이라는 값을 표현할 때 사용하는 자료형
	4) undefined 자료형 : 선언하지 않은 변수이거나 변수를 선언했지만 초기화하지 않았을 때 해당 변수의 자료형
	4) 자료형을 확인하는 방법 : typeof() 연산자 사용
	5) 숫자와 문자열 자료형 변환 : 입력한 숫자는 우선 문자열 자료형으로 인식하므로 숫자료형으로 사용하기 위해서는 변환이 필요하다.
		(1) 숫자 자료형을 문자열 자료형으로 변환 : String() 함수 사용
		(2) 문자열 자료형을 숫자 자료형으로 변환 : Number() 함수 사용
		(3) Bool 자료형 변환 : Boolean() 함수 사용
7. 변수 
	1) 변수 선언 : 변수종류 식별자 = 값
	2) 변수 종류 : 구분/선언 위치/재선언 가능여부
		(1) var : 변수, 전역 스코프, 재선언이 가능하다
		(2) let : 변수, 해당 스코프, 재선언 불가능
		(3) const : 상수, 해당 스코프, 재선언 불가능
8. 연산자
	1) 숫자 자료형 연산자
        (1) + : 더하기
        (2) - : 빼기
        (3) * : 곱하기
        (4) / : 나누기
        (5) % : 나머지
	2) 비교 연산자
        (1) > : 좌변이 크다
        (2) < : 우변이 크다
        (3) >= : 좌변이 크거나 같다
        (4) <= : 우변이 크거나 같다
        (5) == : 좌우변이 같다
        (6) != : 좌우변이 다르다
	3) 논리 연산자
        (1) ! : 논리 부정 연산자
        (2) && : 논리 곱 연산자
            a) true && true : true
            b) true && false : false
            c) false && true : false
            d) false %% false : false
        (3) || : 논리 합 연산자
            a) true || true : true
            b) true || false : true
            c) false || true : true
            d) false || false : false
	4) 복합 대입 연산자
		(1) += : 기존 변수 값에 값을 더한다
		(2) -= : 기존 변수 값에 값을 뺀다 
		(3) *= : 기존 변수 값에 값을 곱한다
		(4) /= : 기존 변수 값에 값을 나눈다
		(5) %= : 기존 변수 값에 나머지를 구한다
	5) 증감 연산자
		(1) 변수++ : 해당 문장을 실행한 후 기존 변수 값에 1을 더한다
		(2) ++변수 : 기존 변수 값에 1을 더하고 해당 문장을 실행한다
		(3) 변수-- : 해당 문장을 실행한 후 기존 변수 값에 1을 뺀다
		(4) --변수 : 기존 변수 값에 1을 빼고 해당 문장을 실행한다
	6) 일치 연산자
		(1) === : 양쪽 변의 자료형과 값이 일치한다
		(2) !== : 양쪽 변의 자료형이나 값이 다르다
```

## 3. 조건문

```
1. if 조건문
	1) if 조건문 
		(1) 형태 : if(불_표현식){ 문장 } 
		(2) 해석 : 불_표현식이 true이면 문장을 실행하고 false이면 문장을 무시한다
	2) if else 조건문
		(1) 형태 :if(불_표현식) {문장A}else{문장B}
		(2) 해석 : 불_표현식이 true이면 문장A을 실행하고 false이면 문장B을 실행한다
	3) 중첩 조건문 : 조건문 안에 조건문을 중첩해 사용하는 형태
	4) if else if 조건문 : 겹치지 않는 세가지 이상의 조건을 나눌 경우 사용
2. switch 조건문
	1) 형태 : switch(비교할 값){case 값1: 문장 break; case 값2: 문장 break; default: 문장 break;}
3. 삼항 연산자 조건문
	1) 형태 : 불_표현식 ? 참일_때_실행하는_문장 : 거짓일_때_실행하는_문장
4. 짧은 조건문
	1) ||
		(1) true || 문장 : 좌변이 참이므로 문장이 실행되지 않는다
		(2) false || 문장 : 좌변이 거짓이므로 문장이 참인지 거짓인지 검사한다
	2) &&
		(1) true && 문장 : 좌변이 참이므로 문장이 참인지 거짓인지 검사한다
		(2) false && 문장 : 좌변이 거짓이므로 문장이 실행되지 않는다
```

## 4. 반복문

```
1. 배열
	1) 배열의 의미 : 여러 개의 변수를 한꺼번에 선언해 다룰 수 있는 자료형
	2) 배열의 구조 : 변수 = [];
	3) 인덱스 : 배열 기호 안에 들어간 숫자. ex) 변수[0], 변수[1]...
	4) 속성 : 어떤 대상이 가진 변수
	5) 메서드 : 어떤 대상이 가진 함수
	6) .length : 배열에 요소가 몇 개 있는지 확인할 수 있는 속성
	7) push() : 배열에 요소를 추가하는 메서드
2. while 반복문 
	1) 구조 : while(불_표현식){문장}, 불 표현식이 참 인 동안에는 지속적으로 문장이 실행된다
3. do while 반복문
	1) 구조 : do{문장}while(불_표현식), while 반복문 안에 있는 조건의 참, 거짓 여부와 상관 없이 내부의 문장을 최소한 한 번은 실행한다
4. for 반복문
	1) 구조 : for(초기식; 조건식; 종결식){문장}, 초기식을 실행해 조건식과 비교하여 조건이 true인 경우 문장을 실행한다. 문장이 실행된 후 종결식을 실행한다. 다시 처음을 돌아가 초기식을 조건식과 비교하여 false가 나오면 문장을 종결하고 true인 경우 반복한다
	2) for in 반복문 : 배열이나 객체 접근을 쉽게 해준다. 반복 변수에 인덱스가 들어간다
		(1) 구조 : for(인덱스 in 배열){문장}
	3) for of 반복문 : 배열이나 객체 접근을 쉽게 해준다. 단 for in 반복문과 다르게 반복 변수에 요소가 들어간다
		(1) 구조 : for(요소 of 배열){문장}
5. 중첩 반복문 : 반복문을 여러 겹 중첩해 사용하는 반복문
6. break 키워드 : switch 조건문이나 반복문을 벗어날 때 사용하는 키워드
7. continue 키워드 : 반복문 안의 현재 반복 작업을 멈추고 다시 반복문의 처음으로 돌아가 다음 반복을 진행시키는 키워드
```

## 5. 함수

```
1. 함수 : 코드의 집합을 나타내는 자료형
2. 함수 선언 : 동일한 기능을 한다
	1) 익명 함수
		(1) 구조 : var 함수명 = function(){문장}
		(2) 익명 함수에서 this 키워드 의미 : 함수 자체에 바인딩되어 있는 객체
	2) 선언적 함수 : function 함수명(){문장}
	3) 화살표 함수
		(1) 구조 : 선언자 함수명 = () => {}
		(2) 화살표 함수에서 this 키워드 의미 : 전역 객체(웹 브라우저 환경에선 window 객체)
	3) 선언적 함수와 익명 함수의 생성 순서 : 선언적 함수가 먼저 생성되고 익명 함수가 생성된다
3. 매개변수와 리턴 값
	1) 구조 : function 함수(매개변수){문장 return 리턴 값;}
	2) 매개변수
		(1) 매개변수 의미 : 함수를 호출 할 때 괄호 안에 넣는 것. 
		(2) 매개변수 특징 
			a) 원래 선언 할 수 있는 매개변수보다 많은 수를 선언하면 일반적으로 추가된 매개변수는 무시한다.
			b) 원래 함수에서 선언할 수 있는 매개변수 숫자보다 적게 선언하면 지정하지 않는 매개변수는 undefined로 입력하게 된다
	3) 리턴 값 : 함수가 실행되는 도중에 함수를 호출한 곳으로 돌아가라는 의미. 함수를 호출하고 리턴 값을 입력하면 함수가 리턴 값으로 변환된다.
4. 가변 인자 함수
	1) 가변 인자 함수 의믜 : 매개변수의 갯수가 변할 수 있는 함수
	2) 전개 연산자 
		(1) 구조 : 배열(매개변수, 매개변수, ...배열)
		(2)
5. 내부 함수 : 함수 내부에 선언하는 함수
	1) 구조 : <외부 함수>function(){<내부 함수>function(){} <내부 함수>function(){}}
6. 자기 호출 함수 : 함수를 생성하자마자 호출하는 함수
	1) 구조 : (function (){})();
8. 콜백(callback) 함수 : 매개변수로 전달하는 함수
9. 함수를 리턴하는 함수 : closeure를 사용하기 위해 함수를 리턴하는 함수를 사용한다
	1) 구조 : function 함수A(){return function 함수B(){코드}}...함수A()(), 함수A()()를 통해 함수A의 return 값인 함수B 가 실행된다
	2) closure : 살아남은 지역변수. 리턴된 클로저 함수를 사용하면 추후에 외부에서 지역변수를 사용할 수 있다.
10. 자바스크립트 내장 함수
	1) 타이머 함수
		(1) setTimeout(function, millisecond) : 일정 시간 후 함수를 한 번 실행한다.
		(2) setinterval(function, milliesecond) : 일정 시간마다 함수를 반복해서 실행한다.
		(3) clearTimeout(id) : 일정 시간 후 함수를 한 번 실행하는 것을 중지한다.
		(4) clearinterval(id) : 일정 시간마다 함수를 반복하는 것을 중단한다.
	2) 인코딩과 디코딩 함수
		(1) escape() : 적절한 정도로 인코딩한다
		(2) unescape() : 적절한 정도로 디코딩한다
		(3) encodeURI(uri) : 최소한의 문자만 코딩한다
		(4) decodeURI(encoded URI) : 최소한의 문자만 디코딩한다
		(5) encodeURIComponent(uriComponent) : 문자 대부분을 모두 인코딩한다
		(6) decodeURIComponent(encodedURI) : 문자 대부분을 모두 디코딩한다.
		(7) 인코딩과 디코딩의 정도차이
			a) 최소한의 정도 : 1바이트 문자는 %XX 형태로, 2바이트 문자는 %uXXXX 형태로 변환한다.
			b) 적절한 정도 : 최소한의 정도 + 영문 알파벳과 숫자, 일부 특수문자(@,*,-,_,+,.../)를 제외하고
			c) 대부분의 정도 : UTF-8 코딩과 같다. 알파벳과 숫자를 제외한 모든 문자를 인코딩한다
	3) 코드 실행 함수 : eval(), string을 자바스크립트 코드로 실행한다
	4) 숫자 확인 함수
		(1) isFinite() : number가 무한한 값인지 확인한다.
		(2) isNaN() : number 가 NaN 값인지 확인한다.
	5) 숫자 변환 함수
		(1) parseInt(string, n진법) : string을 n진법의 정수로 바꾸어줍니다.
		(2) parseFloat(string, n진법) : string을 n진법의 유리수로 바꾸어줍니다.	
```

## 6. 객체

```
1. 객체
	1) 생성 : 선언자 객체명 = {};
	2) 요소 접근 : 키를 사용한다. 객체의 키는 식별자, 문자열 모두를 사용할 수 있다
2. 속성
	1) 속성의 의미 : 객체 내부에 있는 값
	2) this키워드 : 메서드 내에서 자기 자신이 가진 속성이라는 것을 표시할 때 사용하는 키워드
	3) 속성 출력, 추가, 제거
		(1) 속성 출력 : 속성명.toString();
		(2) 속성 추가 : 객체명.속성 = '속성값';
		(3) 속성 제거 : delete(객체명.속성);
3. 객체와 반복문 : for 반복문으로 객체의 속성을 살펴보는 것은 불가능하다. 대신에 for in 반복문을 사용한다.
4. 객체 키워드
	1) in : for 키워드와 별도로 in 키워드를 사용하면 해당 키가 객체 안에 있는지 확인할 수 있다.
	2) with
		(1) 구조 : with(객체){코드}, 괄호 안에서 객체를 명시할 필요 없이 속성을 쉽게 사용할 수 있다.
		(2) with 키워드와 객체 충돌 : with 키워드를 사용하는 객체의 속성 이름과 외부 변수의 이름이 같으면 충돌이 발생한다. 이 경우, 자바스크립트는 객체의 속성을 우선한다.
5. 추상화 : 현실에 존재하는 객체의 필요한 속성을 추출하는 작업
6. 깊은 복사(값 복사)와 얕은 복사(참조 복사)
	1) 깊은 복사 : 자바스크립트에서 기본 자료형을 복사할 때 값을 완전히 복사하게 된다. 복사가 이루어진 후 두 개의 변수는 완전 독립성을 갖게 되는 것을 깊은 복사라한다.
	2) 얕은 복사 : 자바스크립트에서 배열을 복사할 때 값을 참조해 복사하게 된다. 복사가 이루어진 후 두 개의 배열은 독립적이지 않다.
	3) 객체를 깊은 복사 하는 방법 : 새로운 객체를 만들고 for in 반복문을 사용한다
```

## 7. 생성자 함수

```
1. 생성자 함수
	1) 생성 : function 생성자_함수명(){}
	2) 생성자 함수 객체 생성 : 선언자 생성자_함수_객체(or인스턴스) = new 생성자_함수명();
	3) 해당 객체가 어떤 생성자 함수로 생성되었는지 확인 : 생성자_객체 nstanceof 생성자_함수
2. 프로토타입 : 생성자 함수로 생성된 객체가 공통으로 가지는 공간. 메서드는 모두 프로토타입 안에 넣는다.
3. 캡슐화 : 잘못 사용될 수 있는 객체의 특정 부분을 사용자가 사용할 수 없게 막는 기술. get() & set() 형태의 메서드를 사용해야 접근이 가능하다.
4. 상속 
	1) 의미 :기존의 생성자 함수나 객체를 기반으로 새로운 생성자 함수나 객체를 쉽게 만드는 것
	2) 상속받는 법 : A extends B, B가 A에게 상속한다.
```

## 8. 기본 내장 객체

```
1. 기본 자료형
	1) 종류 : 숫자, 문자열, bool
	2) 특징 : 기본 자료형은 객체가 아니므로 속성과 메서드를 추가할 수 없다. 만약 기본 자료형의 속성이나 메서드를 사용하면 기본 자료형이 자동으로 객체로 변환된다.
2. Object 객체
	1) object : 자바스크립트의 최상위 객체. Object 객체의 프로토타입에 속성 또는 메서드를 추가하면 모든 객체에서 활용할 수 있다.
	2) 생성
    	(1) 선언자 object명 = new Object();
    	(2) 선언자 object명 = {}; 
	3) Object 객체 메서드
		(1) constructor() : 객체의 생성자 함수를 나타낸다
		(2) hasOwnProperty(name) : 객체가 name 속성이 있는지 확인한다
		(3) isPrototypeof(object) : 객체가 object의 프로토타입인지 검사한다
		(4) propertyisEnumerable(name) : 반복문으로 열거할 수 있는지 확인한다
		(5) toLocaleString() : 객체를 호스트 환경에 맞는 언어의 문자열로 바꾼다
		(6) toString() : 객체를 문자열로 바꾼다
		(7) valueOf() : 객체의 값을 나타낸다.
3. Number 객체
	1) Number : 자바스크립트에서 가장 단순한 객체로써 숫자를 표현할 때 사용한다.
	2) Number 객체 메서드
		(0) Object 객체 메서드
		(1) toExponential() : 숫자를 지수 표시로 나타낸 문자열을 리턴한다
		(2) toFixed() : 숫자를 고정 소수점 표시로 나타낸 문자열을 리턴한다
		(3) toPrecision() : 숫자를 길이에 따라 지수 표시 또는 고정 소수점 표시로 나타낸 문자열을 리턴한다
	3) Number 생성자 함수 속성
		(1) MAX_VALUE : 자바스크립트의 숫자가 나타낼 수 있는 최대 숫자
		(2) MIN_VALUE : 자바스크립트의 숫자가 나타낼 수 있는 최소 숫자
		(3) NAN : 자바스크립트의 숫자로 나타낼 수 없는 숫자
		(4) POSITIVE_INFINITY : 양의 무한대 숫자
		(5) NEGATIVE_INFINITY : 음의 무한대 숫자
4. String 객체
	1) String : 자바스크립트에서 가장 많이 사용하는 내장 객체
	2) 생성
		(1) 선언자 string객체명 = 'data';
		(2) 선언자 string객체명 = new String('data');
	3) String 객체 메서드
		(1) charAt(position) : position에 위치하는 문자를 리턴한다
		(2) charCodeAt(position) : position에 위치하는 문자의 유니코드 번호를 리턴한다
		(3) concat(args) : 매개변수로 입력한 문자열을 이어서 리턴한다
		(4) indexOf(searchString, position) : 앞에서부터 일치하는 문자열의 위치를 리턴한다
		(5) lastindexOf(searchString, position) : 뒤에서부터 일치하는 문자열의 위치를 리턴한다 
		(6) match(regExp) : 문자열 안에 regExp가 있는지 확인한다 
		(7) replace(regExp, replacement) : regExp를 replacement로 바꾼 뒤 리턴한다
		(8)  search(regExp) : regExp와 일치하는 문자열의 위치를 리턴한다
		(9) slice(start, end) : 특정 위치의 문자열을 추출해 리턴한다
		(10) split(separator, limit) : separator로 문자열을 잘라서 배열을 리턴한다
		(11) substr(start, count) : start부터 count만큼 문자열을 잘라서 리턴한다
		(12) substring(start, end) : start부터 end까지 문자열을 잘라서 리턴한다
		(13) toLowerCase() : 문자열을 소문자로 바꾸어 리턴한다
		(14)  toUpperCase() : 문자열을 대문자로 바꾸어 리턴한다
	4) String 객체 속성
		(1) length : 문자열의 길이를 나타낸다
	5) String 객체의 HTML 관련 메서드
    	(1) anchor() : a 태그로 문자열을 감싸 리턴한다
    	(2) big() : big 태그로 문자열을 감싸 리턴한다
    	(3) blink() : blink 태그로 문자열을 감싸 리턴한다
    	(4) bold() : b 태그로 문자열을 감싸 리턴한다
    	(5) fixed() : tt 태그로 문자열을 감싸 리턴한다
    	(6) fontcolor(colorString) : font 태그로 문자열을 감싸고 color 속성을 주어 리턴한다
    	(7) fontsize(fontSize) : font 태그로 문자열을 감싸고 size 속성을 주어 리턴한다.
    	(8) italics() : I 태그로 문자열을 감싸 리턴한다
    	(9) link(linkRef) : a 태그에 href 속성을 지정해 리턴한다
    	(10) small() : small 태그로 문자열을 감싸 리턴한다
    	(11) strike() : strike 태그로 문자열을 감싸 리턴한다
    	(12) sub() : sub 태그로 문자열을 감싸 리턴한다
    	(13) sup() : sup 태그로 문자열을 감싸 리턴한다
5. Array 객체
	1) Array : 여러 가지 자료를 쉽게 관리할 수 있게 도와주는 객체
	2) 생성
		(1) Array() : 빈 배열을 만든다
		(2) Array(number) : 매개변수만큼의 크기를 가지는 배열을 만든다
		(3) Array(any,...,any) : 매개변수를 배열로 만든다
	3) Array 객체 메서드 : *표시된 메서드는 자기 자신을 변화시키는 메서드이다.
		(1) concat() : 매개변수로 입력한 배열의 요소를 모두 합쳐 배열을 만들어 리턴한다
		(2) join()* : 배열 안의 모든 요소를 문자열로 만들어 리턴한다
		(3) pop()* : 배열의 마지막 요소를제거하고 리턴한다
		(4) push()* : 배열의 마지막 부분에 새로운 요소를 추가한다
		(5) reverse()* :배열의 요소 순서를 뒤집는다
		(6) slice() : 요소의 지정한 부분을 리턴한다
		(7) sort()* : 배열의 요소를 정렬한다
		(8) splice()* : 요소의 지정한 부분을 삭제하고 삭제한 요소를 리턴한다
	4) Array 객체 속성
		(1) length : 요소의 갯수를 알아낸다
6. Date 객체
	1) Date : 날짜와 시간을 표시하는 객체
7. Math 객체
	1) Math :  Math 객체는 자바스크립트의 기본 내장 객체 중 유일하게 생성자 함수를 사용하지 않는 객체이다.
	2) Math 객체 메서드
		(1) abs(x) : x의 절대 값을 리턴한다
		(2) acos(x) : x의 아크 코사인 값을 리턴한다
		(3) asin(x) : x의 아크 사인 값을 리턴한다
		(4) atan(x) : x의 아크 탄젠트 값을 리턴한다
		(5) atan2(y,x) : x와 y의 비율로 아크 탄젠트 값을 구해 리턴한다
		(6) ceil(x) : x보다 크거나 같은 가장 작은 정수를 리턴한다
		(7) cos(x) : x의 코사인 값을 리턴한다
		(8) exp(x) : 자연로그의 x제곱을 리턴한다
		(9) floor(x) : x보다 작거나 같은 가장 큰 정수를 리턴한다
		(10) log(x) : x의 로그 값을 리턴한다 
    	(11) max(x,y,z...n) : 매개변수 중 가장 큰 값을 리턴한다
    	(12) min(x,y,z...n) : 매개변수 중 가장 작은 값을 리턴한다
    	(13) pow(x,y) : x의 y 제곱을 리턴한다
    	(14) random() : 0부터 1까지의 임의의 수를 리턴한다
    	(15) round(x) : x를 반올림하여 리턴한다
    	(16) sin(x) : x의 사인 값을 리턴한다
    	(17) sqrt(x) : x의 제곱근을 리턴한다
    	(18) tan(x) : x의 탄젠트 값을 리턴한다
    3) Math 객체 속성
    	(1) E : 2.718281828459045
    	(2) LN2 : 0.6931471805599453
    	(3) LN10 : 2.302585092994046
    	(4) LOG2E : 1.4426950408889634
    	(5) LOG10E : 0.4342944819032518
    	(6) PI : 3.141592653589793
    	(7) SQRT1_2 : 0.7071067811865476
    	(8) SQRT2 : 1.4142135623730951
8. 그외 메서드
	1) 확인 메서드
		(1) Array.isArray() : 배열인지 확인한다
	2) 탐색메서드
		(1) indexOf() : 특정 요소를 앞쪽부터 검색한다
		(2) lastindexOf() : 특정 요소를 뒤쪽부터 검색한다
	3) 반복 메서드
		(1) forEach() : 배열 각각의 요소를 사용해 특정 함수를 for in 반복문처럼 실행시킨다
		(2) map() : 기존의 배열에 특정 규칙을 적용해 새로운 배열을 만든다
	4) 조건 메서드
		(1) filter() : 특정 조건을 만족하는 요소를 추출해 새로운 배열을 만든다
		(2) every() : 배열의 요소가 특정 조건을 모두 만족하는지 확인한다
		(3) some() : 배열의 요소가 특정 조건을 적어도 하나 만족하는지 확인한다
	5) 연산 메서드
		(1) reduce() : 배열의 요소 하나가 될 때까지 요소를 왼쪽부터 두 개씩 묶는 함수를 실행
		(2) reduceRight() : 배열의 요소 하나가 될 때까지 요소를 오른쪽부터 두 개씩 묶는 함수를 실행
9. 그외 객체
	1) String 객체 메서드
		(1) trin() : 문자열 양쪽 끝의 공백을 제거
	2) JSON 객체 메서드
		(1) JSON.stringify() : 자바스크립트 객체를 JSON 문자열로 변환
		(2) JSON.parse() : JSON 문자열을 자바스크립트 객체로 변환
```

## 9. 브라우저 객체 모델

![1-1  dom 구조 구체화](https://user-images.githubusercontent.com/55272324/73317144-6a96d500-4278-11ea-9f20-2b1c9b1641e9.PNG)

```
1. 브라우저 객체 모델(BOM, Browser Object Model) : 웹 브라우저와 관련된 객체의 집합
2. window 객체
	1) 생성 : open(URL, name, features, replace)
		(1) features
			a) height : 새 윈도우의 높이, 픽셀 값을 입력
			b) width : 새 윈도우의 너비, 픽셀 값을 입력
			c) location : 주소 입력창의 유무, (yes,no,1,0)값 입력
			d) menubar  : 메뉴의 유무, (yes,no,1,0)값 입력
			e) resizable : 화면 크기 조절 가능 여부, (yes,no,1,0)값 입력
			f) status : 상태 표시줄의 유무, (yes,no,1,0)값 입력
			g) toolbar : 툴바의 유무, (yes,no,1,0)값 입력
	2) window 객체 기본 메서드
		(1) moveBy(x,y) : 윈도우의 위치를 상대적으로 이동한다
		(2) moveTo(x,y) : 윈도우의 위치를 절대적으로 이동한다
		(3) resizeBy(x,y) : 윈도우의 크기를 상대적으로 지정한다
		(4) resizeTo(x,y) : 윈도우의 크기를 절대적으로 지정한다
		(5) scrollBy(x,y) : 윈도우의 스크롤 위치를 상대적으로 이동한다
		(6) scrollTo(x,y) : 윈도우의 스코릴 위치를 절대적으로 이동한다
		(7) focus() : 윈도우에 초점을 맞춘다
		(8) blur() : 윈도우에 맞춘 초점을 제거한다
		(9) close() : 윈도우를 닫는다
3. screen 객체
	1) screen 객체 : 웹 블라우저의 화면이 아니라 운영체제 화면의 속성을 갖는 객체
	2) 속성
		(1) width : 화면의 너비
		(2) height : 화면의 높이
		(3) availWidth : 실제 화면에서 사용 가능한 너비
		(4) availHeight : 실제 화면에서 사용 가능한 높이
		(5) colorDepth : 사용 가능한 색상 수
		(6) pixelDepth : 한 픽셀당 비트 수
4. location 객체
	1) location 객체 : 웹 블라우저의 주소 표시줄과 관련된 객체
	2) 속성
		(1) href : 문서의 URL 주소
		(2) host : 호스트 이름과 포트 번호
		(3) hostname : 호스트 이름
		(4) port : 포트 번호
		(5) pathname : 디렉터리 경로
		(6) hash : 앵커이름(#~)
		(7) search : 요청 매개변수
		(8) protocol : 프로토콜 종류
	3) 메서드
    	(1) assign(link) : 현재 위치로 이동한다. 뒤로 가기 버튼을 사용할 수 있다.
    	(2)  reload() : 새로고침한다
    	(3) replace(link) : 현재 위치로 이동한다. 뒤로 가기 버튼을 사용할 수 없다.
5. navigator 객체
	1) navigator 객체 : 웹 페이지를 실행하고 있는 브라우저에 대한 정보
	2) 속성
		(1) appCodeName : 브라우저 코드 이름
		(2) appName : 브라우저 이름
    	(3) appVersion : 브라우저 버전
    	(4) platform : 사용 중인 운영체제의 시스템 환경
    	(5) userAgent : 웹 브라우저의 전체 정보
6. Audio 객체
	1) Audio 객체 : HTML5부터느 플래시와 같은 플러그인을 사용하지 않아도 audio 태그를 사용해 음악을 재생할 수 있다.
	2) 속성
		(1) src : 재생하려는 음악 파일 경로
		(2) volume : 음악의 음량
		(3) currentTime : 음악 재생 시간(초 단위)
	3) 메서드
		(1) play() : 음악을 재생한다
		(2) pause() : 음악을 일시 정지한다 	
```

## 10. 문서 객체 모델

```
1. 문서 객체 : HTML 페이지에 존재하는 태그를 자바스크립트에서 이용할 수 있는 객체로 만든 것
2. 노드
	1) 노드 : HTML페이지를 트리 모양으로 나타낼 때 각 요소를 노드라고 부른다
	2) 노드의 종류
		(1) 요소 노드 : HTML tag
		(2) 텍스트 노드 : 요소 노드 안에 들어있는 글자
3. 문서 객체 메서드
	1) 노드 생성 메서드
		(1) createElement(tagName) : 요소 노드를 생성
		(2) createTextNode(text) : 텍스트 노드를 생성
	2) (노드) 연결 메서드
		(1) apendChild(node) : 객체에 노드를 연결
	3) 속성 메서드
		(1) setAttribute(name,value) : 객체의 속성을 지정한다
		(2) getAttribute(name) : 객체의 속성을 가져온다
	4) 객체 선택 메서드
		(1) getElementById(id) : 태그의 id 속성이 id 매개변수와 일치하는 문서 객체를 가져온다
		(2) getElementsByName(name) : 태그의 name 속성이 name 매개변수와 일치하는 문서 객체를 배열로 가져온다
		(3) getElementsByTagName(tagName) : tagName 매개변수와 일치하는 문서 객체를 배열로 가져온다
		(4) querySelector(선택자) ; 선택자로 가장 처음 선택되는 문서 객체를 가져온다
		(5) querySelectorAll(선택자) : 선택자를 통해 선택되는 문서 객체를 배열로 가져온다
	5) (노드) 제거 메서드
		(1) removeChild(child) : 문서 객체의 자식 노드를 제거한다
```

## 11.  이벤트

* 이벤트 관련 용어 정리

```html
<script>
	window.onload = function(){};
</script>
<!--
1. 이벤트 연결 : window 객체의 onload 속성에 함수 자료형을 할당하는 것
2. 이벤트 타입 or 이벤트 이름 : load
3. 이벤트 속성 : onload
4. 이벤트 리스너 or 이벤트 핸들러 : = function(){};
-->
```

* 이벤트

```
1. 이벤트 : 키보드나 마우스등을 이용해 다른 것에 영향을 미치는 것
2. 이벤트 종류
	1) 마우스
	2) 키보드
	3) HTML 프레임
	4) HTML 입력 양식
	5) 유저 인터페이스
	6) 구조 변화
	7) 터치
3. 이벤트 객체 찾는 법 : 이벤트 리스너 안에서 this 키워드를 사용하면 이벤트가 발생한 객체를 찾을 수 있다.
4. 디폴트 이벤트 : 일부 HTML 태그가 이미 가지고 있는 이벤트 리스너
5. DOM level에 따른 이벤트 분류
	1) DOM level 0 : 한 번에 하나의 이벤트 리스너만 가질 수 있다.
		(1) 인라인 이벤트 모델 : 태그 라인 안에 이벤트 코드를 작성하던가 함수를 호출하는 하는 방법
		(2) 기본 이벤트 모델 : 자바스크립트에서 문서 객체의 이벤트 속성으로 이벤트를 연결하는 방법
	2) DOM level 2
		(1) 마이크로소프트 인터넷 익스플로러 이벤트 모델 : 인터넷 익스플로러는 이벤트 캡쳐링을 지원하지 않는다.
        	a) 이벤트 연결 및 제거
				(a) 이벤트 연결 : attachEvent(이벤트 속성, 이벤트 리스너);
				(b) 이벤트 제거 : detachEvent(이벤트 속성, 이벤트 리스너);
		(2) 표준 이벤트 모델 : 웹 표준을 만드는 단체인 W3C에서 공식적으로 지정한 DOM level2 이벤트 모델. 이벤트 캡쳐링을 지원한다
			a) 이벤트 연결 및 제거
				(a) 이벤트 연결 : addEventListener(이벤트 이름, 이벤트 리스너, useCapture), 매개변수 useCapture는 입력하지 않으면 자동으로 false를 입력한다
				(b) 이벤트 제거 : removeEventListener(이벤트 이름, 이벤트 리스너)
6. 이벤트 전달 순서
	1) 이벤트 버블링 : 자식노드에서 부모노드 순으로 이벤트를 실행한다
	2) 이벤트 캡쳐링 : 부모노드에서 자식노드 순으로 이벤트를 실행한다
	3) 자바스크립트 이벤트 전달 순서 : 이벤트 버블링 방식을 사용한다
```

## 12. 예외 처리

```
1. 예외 처리 : 프로그램이 실행되는 동안 문제가 발생하면 프로그램이 자동으로 중단된다. 이런 상황에 대처할 수 있게 하는 것을 예외처리라 한다.
2. try catch finally : 
	1) 구조 : try{}catch(exception){}finally{}
	2) 분석
		(1) try 구문안에서 예외가 발생시 catch 구문에서 처리한다
		(2) finally 구문은 필수 사항은 아니며 예외 발생 여부와 상관없이 수행되어야 하는 작업이 있을때 사용한다
3. 예외 객체(exception or e)의 속성
	1) message : 예외 메시지
	2) description : 예외 설명
	3) name : 예외 이름
4. 에러와 예외
	1) 예외 : try catch 구문으로 해결할 수 있는 것
	2) 에러 : try catch 구문으로 해결할 수 없는 것
```
