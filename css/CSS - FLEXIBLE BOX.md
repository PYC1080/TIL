# CSS - FLEXIBLE BOX



## 1. 개념

### (1) container & items

<img width="578" alt="flexible box - container" src="https://user-images.githubusercontent.com/55272324/87656803-ea681b80-c794-11ea-967a-85b4dd6cec60.PNG">

```
1. container : Items를 감싸는 부모 요소이며, 각 items를 정렬하기 위해서는 container가 필수이다.

2. items
```

### (2) main-axis & cross-axis

<img width="564" alt="주축과 교차 축" src="https://user-images.githubusercontent.com/55272324/87661391-79783200-c79b-11ea-8e4f-3ebf52fc7a1b.PNG">

### (3) flex-start & flex-end



* Container : items
* 축



```
1. main-axis(주 축)
	1) flex-direction이 row인 경우 : 수평 축
	2) flex-direction이 column인 경우 : 수직 축

2. cross-axis(교차 축)
	1) flex-direction이 row인 경우 : 수직 축
	2) flex-direction이 column인 경우 : 수평 축
```



## 2. 속성

### 1) Container

#### (1) display

* 기능 : flex container를 정의한다.
* 종류

```
1. flex : block 특성의 flex container를 정의한다. 수직으로 container가 쌓인다.
2. inline-flex : inline 특성의 flex container를 정의한다. 수평으로 container가 쌓인다.
```

<img width="437" alt="display - flex" src="https://user-images.githubusercontent.com/55272324/87664687-a549e680-c7a0-11ea-8155-1cc2d9c2498c.PNG">
<img width="552" alt="display - inlineFlex" src="https://user-images.githubusercontent.com/55272324/87664691-a5e27d00-c7a0-11ea-982e-b67e83b8f373.PNG">

#### (2) flex-flow

* 기능 : flex-direction과 flex-wrap의 단축 속성
* 기본 값

```
1. flex-direction : items의 주 축을 설정한다. row를 기본값으로 가진다

2. flex-wrap : items의 줄 바꿈을 설정한다. nowrap을 기본값으로 가진다
```



#### (3) flex-direction

* 기능 :  items의 주 축(main axis)을 설정한다.
* 종류

```
1. row : items를 수평축으로 표시한다. 기본값이다.

2. row-reverse : items를 row의 반대 축으로 표시한다.

3. column : items를 수직축으로 표시한다.

4. column-reverse : items를 column의 반대 축으로 표시한다.
```

<img width="572" alt="flex direction" src="https://user-images.githubusercontent.com/55272324/87665405-d70f7d00-c7a1-11ea-9d7b-7555883ffffb.PNG">





### 2) Items

