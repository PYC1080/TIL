# CSS - (S)CSS를 HTML 에 적용하는 방법

## 1. Inline style sheet

```
1. 의미 : HTML 태그의 Style 속성에 CSS 코드를 넣는 것

2. 방법 :

<태그종류 style="태그속성">태그 내용</태그종류>

3. 특징 : 해당 태그종류가 선택자(selector)가 된다. 태그속성에 속성(property)과 값(value)이 들어간다. 따라서 꾸미는 데 한계가 존재하며 재사용이 불가능하다는 단점이 존재한다.
```

## 2. Internal style sheet

```
1. 의미 : HTML 문서 안의 <style></style> 안에 CSS 코드를 넣는 것

2. 방법 : 

<style>
	태그종류 {
		태그속성
	}
</style>

3. 특징 : HTML 문서 안의 여러 요소를 한번에 꾸밀 수 있다는 장점이 있으나 다른 HTML 문서에는 적용할 수 없다는 단점이 존재한다
```

## 3. Linking style sheet

```
1. 의미 : 별도의 CSS 파일을 만들고 HTML 문서와 연결하는 것

2. 방법 :

<link rel="stylesheet" href="css파일주소">

3. 특징 : CSS 파일이 별도로 존재하므로 여러 HTML 문서에 재사용할 수 있다.
```

