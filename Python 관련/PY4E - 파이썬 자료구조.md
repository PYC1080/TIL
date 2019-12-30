# PY4E - 파이썬 자료구조

## Chapter 6 : 문자열

### 6 -1. 문자열

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

