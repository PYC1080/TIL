# PY4E - 파이썬 자료구조 1일차

## Chapter 6 : 문자열

### 6 - 1. 문자열

* 문자열 자료형 
  1) 문자열은 문자시퀀스
  2) 문자열은 `따옴표('' 및 "")`를 사용해서 표기한다.
  3) 문자열에서 `+`연산자는 **병합**을 의미한다.
  4) 문자열이 숫자를 포함하고 있어도 여전히 문자열로 인식된다
  5) `int()` 함수를 이용해서 문자열 안의 숫자를 정수형으로 변환이 가능하다.

* 읽기와 변환하기
  1) 문자열을 통해 데이터를 읽고 파싱하고 필요한 데이터를 변환하는 것을 선호한다.
  2) 숫자 입력은 문자열에서 변환 되어야 한다.

```python
apple = input('enter : ')
x = apple - 10 ## Error
print(x)
## Error 내용
Exception has occurred: TypeErro unsupported operand type(s) for -: 'str' and 'int
        
## Error 해결
apple 변수의 type이 무엇인지 밝혀준다.
x = apple - 10 -> x = int(apple) - 10
```

* 문자열 파악하기
  1) 문자열에 잇는 어떤 문자든지 `" "(대괄호)`안에 지정된 인덱스를 이용해서 가져올 수 있다.
  2) 인덱스 값은 정수이고 0에서 시작된다.
  3) 범위 밖 문자 : 문자열 크기를 넘어선 인덱스에 접근하려고 하면 파이썬 에러가 발생한다.

```python
fruit = 'banana'
k = fruit[1]
print(k)
print(fruit[6]) ## error

## error 
Exception has occurred: IndexError
string index out of range
```

* len 함수  : 문자열의 길이를 알 수 있다.
* 문자열을 통한 루프 
  1) while 구문, 반복 변수 ,len 함수를 이용해서 문자열 안에 있는 각문자를 독립적으로 확인하는 루프를 만들 수 있다.
  2) for 구문을 이용하는 유한 루프가 더 깔끔하다.
  3) 반복 변수는 for루프에 의해 완벽하게 관리된다.

``` python
fruit = 'banana'
index = 0
while index < len(fruit) :
    letter = fruit[index]
    print(index, letter)
    index = index +1
    
    
## 결과 
0 b
1 a
2 n
3 a
4 n
5 a
```

* in 파헤치기 

``` python 
for 반복변수 in 시퀀스
```

1) 반복변수는 시퀀스를 통해 반복된다.
2) 코드의 루프 블럭(본문)은 시퀀스 안의 각 값에 대해 한번씩 실행된다.
3) 반복 변수는 시퀀스 안의 모든 값을 가지고 실행된다.

_________________________________

### 6 - 2. 문자열을 다루는 다양한 방법들

* 문자열 슬라이싱
  1) 콜론 연산자를 사용해서 문자열의 연속적인 구간을 가져올 수 있다.
  2) 두 번째 숫자는 문자열 조각보다 한 글자 너머를 가리킨다. 따라서 해당 숫자까지이지만 포함하지 않는다.
  3) 두 번째 숫자가 문야절의 마지막 너머를 가리키는 경우 문자열의 마지막에서 멈추게 된다.
  4) 앞의 숫자나 뒤의 숫자를 생략하면 각각 문자의 시작과 마지막을 가리킨다고 가정한다.

* 문자열 병합
  1) `+` 연산자가 문자열에 적용되면 '병합'을 의미한다.

* 논리연산자로서의 `in`

  1) `in` 키워드는 어떤 문자열이 다른 문자열에 '포함'되는지 확인하기 위해서도 사용한다.

  2) `in` 표현식은 참 똔느 거짓 값을 반환하는 논리 표현식이며 if 구문에 사용될 수 있다.

``` python
fruit = 'banana'
s = input('Enter the spell : ')
b = str(s)
if s in fruit :
    print('fonud it')
else:
    print('no have')
    
 ## 결과
(1) Enter the spell : a
    found it
(2) Enter the spell : c
    no have
 
```

* 문자열 라이브러리
  1) 파이썬은 여러 개의 문자열 함수를 정의하는 문자열 라이브러리가 존재한다.
  2) 해당 함수는 모든 문자열에 이미 내장되어 있다.
  3) 해당 함순느 원본 만자열을 수정하지 않고 대신에 바귄 새로운 문자열을 반환한다.

* 문자열 탐색
  1) `find()` 함수를 이용해서 하위 문자열을 다른 문자열에서 탐색이 가능하다.
  2) `find()` 하위 문자열의 첫 번째로 나타나는 위치를 검색한다.
  3) 하위 문자열을 찾기 못하면,`find()`는 -1을 반환한다.
  4) 문자열 좌표는 0 부터 시작한다.

``` python
fruit = 'banana'
p = fruit.find('a')
print(p) ## 1 a가 세 번 등장하지만 첫번째로 검색되는 a가 문자열의 1번 위치에 존재한다.
pp = fruit.find('na')
print(pp) ## 2, na가 두 번 등장하지만 첫번째로 검색되는 na가 문자열의 2번 위치에 존재한다.
ppp = fruit.find('z')
print(ppp) ## -1 문자열 z는 검색되지 않으므로 -1을 반환한다.
```

* 모든 문자열을 대문자 / 소문자로 만들기
  1) `upper()` : 모든 문자열을 대문자로 치환한다.
  2) `lower()` : 모든 문자열을 소문자로 치환한다.
  3) `find()`을 이용해서 문자열을 탐색할 때, 문자열을 먼저 소문자로 바꾼 뒤 탐색하면 대소문자와 관계 없이 문자열을 탐색할 수 있다.

```python
greet = 'Hello Bob'
n = greet.lower()
f = n.find('bo')
print(f)

## 결과
6
```

* 찾아서 바꾸기
  1) `replace()` 함수는 찾아서 바꾸는 역할을 해준다.
  2) 나타나는 모든 탐색 문자열을 대체 문자열로 치환해준다.

```python
replace('a','b') ## 'a' 문자열을 찾아 모두 'b'로 바꿔준다 

greet ='hello bob'
n = greet.replace('l', 'L')
print(n)
## 결과
heLLo bob
```

* 공백제거
  1) 문자열의 끝과 마지막에 종종 남아있는 공백을 제거한다.
  2) 종류
  `lstrip()` : 문자열의 왼쪽에 있는 공백을 제거한다
   `rstrip()`: 문자열의 오른쪽에 있는 공백을 제거한다.
   `strip()` : 문자열의 시작과 끝에 있는 모든 공백을 제거한다.

```python
greet = '    hello bob   '
l = greet.lstrip()
r = greet.rstrip()
s = greet.strip()
print(l.replace(' ','_'))
print(r.replace(' ','_'))
print(s.replace(' ','_'))

## 결과
hello_bob___
____hello_bob
hello_bob
```

* 접두사 : `startwith()`라인이 특정 문자열로 시작하는지 판단하는 함수

  ```python
  line = 'Please have a nice day'
  a = line.startswith('Please')
  b = line.startswith('p')
  print(a)
  print(b)
  
  ## 결과
  True
  False
  ```

* 파싱과 추출

```python
data ='From stephen.marquard@uct.ac.za Sat Jan 5 09:14:16 2008'
a = data.find('@')
print(a)
s = data.find(' ', a)
print(s)
h = data[a+1 : s]
print(h)

## 결과

21   		##  '@' 문자열은 data의 21번째에 위치한다.
31			##  ' ', 21번째부터 문자열 ' '을 찾은결과 31번째에 처음으로 등장한다.
uct.ac.za   ##  22번째 문자열부터 30번째(31번째는 포함되지 않는다.) 까지 문자열을 검색한 결과이다
```

* 파이선 3에서부터 모든 문자열이 유니코드로 표현된다.

__________________

### 6. 실습 : 문자열 파싱

#### 연습 문제 : `find()`와 문자열 슬라이싱을 사용하여 `:` 이후의 문자열을 뽑아낸뒤 `float` 함수를 이용하여  추출한 문자열을 부동소수점으로 표현하라.



```python
a = 'X-DSPAM-Confidence: 0.8475 '
b = a.find(':')
c = a[b+2 :]
d = float(c)
print(d)

## 결과

0.8475
```

________________

### 6. 퀴즈 결과

![Ch 6 퀴즈 결과](https://user-images.githubusercontent.com/55272324/71585878-6ed9b080-2b5b-11ea-8c55-7b6cd1abb318.PNG)