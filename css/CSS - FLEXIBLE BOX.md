# CSS - FLEXIBLE BOX



## 1. 개념

### 1) container & items

<img width="578" alt="flexible box - container" src="https://user-images.githubusercontent.com/55272324/87656803-ea681b80-c794-11ea-967a-85b4dd6cec60.PNG" style="zoom:150%;" >

```
1. container : Items를 감싸는 부모 요소이며, 각 items를 정렬하기 위해서는 container가 필수이다.

2. items
```

### 2) main-axis & cross-axis

<img width="564" alt="주축과 교차 축" src="https://user-images.githubusercontent.com/55272324/87661391-79783200-c79b-11ea-8e4f-3ebf52fc7a1b.PNG">

```
1. main-axis, 주 축
	1) flex-direction이 row인 경우 : 수평 축
	2) flex-direction이 column인 경우 : 수직 축

2. cross-axis, 교차 축
	1) flex-direction이 row인 경우 : 수직 축
	2) flex-direction이 column인 경우 : 수평 
```

### 3) flex-start & flex-end

* Main-start & Main-end 

  * row(default)

  <img width="207" alt="flexStartEnd - main -  row" src="https://user-images.githubusercontent.com/55272324/87741922-9dca2200-c820-11ea-9cc7-c0648cdafb3a.PNG" style="zoom:150%;" >

  * row-reverse

  <img width="211" alt="flexStartEnd - main -  rowReverse" src="https://user-images.githubusercontent.com/55272324/87741923-9efb4f00-c820-11ea-882c-43297ed47647.PNG" style="zoom:150%;" >

  * column

  <img width="95" alt="flexStartEnd - main - column" src="https://user-images.githubusercontent.com/55272324/87741926-9efb4f00-c820-11ea-86cb-b71aebac69b3.PNG" style="zoom:150%;" >

  * column-reverse

    <img width="100" alt="flexStartEnd - main - columnReverse" src="https://user-images.githubusercontent.com/55272324/87741927-9f93e580-c820-11ea-92d4-68922b308472.PNG" style="zoom:150%;" >

* Cross-start & Cross-end 

  * row(default)

  <img width="210" alt="flexStartEnd - cross - row" src="https://user-images.githubusercontent.com/55272324/87742026-d7029200-c820-11ea-9285-5c9d0fccf907.PNG" style="zoom:150%;" >

  * row-reverse

  <img width="205" alt="flexStartEnd - cross - rowRevese" src="https://user-images.githubusercontent.com/55272324/87742027-d79b2880-c820-11ea-9cf3-dd868780a5fe.PNG" style="zoom:150%;" >

  * column

  <img width="112" alt="flexStartEnd - cross - column" src="https://user-images.githubusercontent.com/55272324/87742028-d79b2880-c820-11ea-8c71-adbca4266a0f.PNG" style="zoom:150%;" >

  * column-reverse

  <img width="116" alt="flexStartEnd - cross - columnRevse" src="https://user-images.githubusercontent.com/55272324/87742024-d669fb80-c820-11ea-8291-2915936f2e1a.PNG" style="zoom:150%;" >

## 2. 속성

### 1) Container

#### (1) display

* 기능 : flex container를 정의한다.

* 종류

  * flex : block 특성의 flex container를 정의한다. 수직으로 container가 쌓인다

  <img width="320" alt="display -flex" src="https://user-images.githubusercontent.com/55272324/87742409-9fe0b080-c821-11ea-97de-76db3f781f3a.PNG" style="zoom:150%;" >

  * inline-flex : inline 특성의 flex container를 정의한다. 수평으로 container가 쌓인다

    <img width="439" alt="display - inlineFlex" src="https://user-images.githubusercontent.com/55272324/87742412-a111dd80-c821-11ea-963c-651169bd8e04.PNG" style="zoom:150%;" >

  

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

  * row(default) : items를 수평 축(가로)으로 좌에서 우측으로 나열한다

  <img width="210" alt="flexDirection - row" src="https://user-images.githubusercontent.com/55272324/87742852-94da5000-c822-11ea-940b-71bf3ef310fa.PNG" style="zoom:150%;" >

  * row-reverse : items를 row의 반대방향으로 나열한다

  <img width="215" alt="flexDirection - rowReverse" src="https://user-images.githubusercontent.com/55272324/87742853-94da5000-c822-11ea-9acc-13ab8cc15770.PNG" style="zoom:150%;" >

  * column : items를 수직 축(세로)으로 상단에서 하단으로 나열한다

  <img width="108" alt="flexDirection - column" src="https://user-images.githubusercontent.com/55272324/87742854-9572e680-c822-11ea-89f7-e94542f07ee9.PNG" style="zoom:150%;" >

  

  * column-reverse : items를 column의 반대방향으로 나열한다

  <img width="107" alt="flexDirection - columnReverse" src="https://user-images.githubusercontent.com/55272324/87742850-9441b980-c822-11ea-9488-ecb52572c2e8.PNG" style="zoom:150%;" >

#### (4) flex-wrap

* 기능

* 종류

  * nowrap(default) : 모든 items를 여러 줄로 묶지 않고 한 줄에 표시한다

  <img width="217" alt="flexWrap - nowrap" src="https://user-images.githubusercontent.com/55272324/87762437-1b585700-c84e-11ea-820f-36c42bdeee84.PNG" style="zoom:150%;" >

  * wrap : item의 속성을 살려 item을여러 줄로 묶는다

  <img width="220" alt="flexWrap - wrap" src="https://user-images.githubusercontent.com/55272324/87762430-1a272a00-c84e-11ea-903e-e5b03bb001f4.PNG" style="zoom:150%;" >

  * wrap-reverse : item의 속성을 살려 item을  역방향으로 여러 줄로 묶는다. 

  <img width="359" alt="flexWrap - wrapReverse" src="https://user-images.githubusercontent.com/55272324/87762435-1b585700-c84e-11ea-99cc-a87209dce539.PNG" style="zoom:150%;" >

#### (5) justify-content

* 기능 : 주 축(main-axis)이 정렬 방법을 설정한다

* 종류

  * flex-start(default) : items를 시작 점(flex-start)으로 정렬한다

  <img width="213" alt="justifyContent - flexStart" src="https://user-images.githubusercontent.com/55272324/87762959-e0a2ee80-c84e-11ea-91a0-d0d0f7a59d75.PNG" style="zoom:150%;" >

  * flex-end : items를 끝점(flex-end)으로 정렬한다

  <img width="221" alt="justifyContent - flexEnd" src="https://user-images.githubusercontent.com/55272324/87762956-e00a5800-c84e-11ea-82eb-dde9036b3295.PNG" style="zoom:150%;" >

  * center : items를 가운데로 정렬한다

  <img width="213" alt="justifyContent - center" src="https://user-images.githubusercontent.com/55272324/87762954-df71c180-c84e-11ea-952f-09cc85647c62.PNG" style="zoom:150%;" >

  * space-between : 시작 item은 시작점에, 마지막 item은 끝 점에 정렬되고 나머지 items 는 사이에 고르게 정렬된다

  <img width="212" alt="justifyContent - spaceBetween" src="https://user-images.githubusercontent.com/55272324/87762962-e13b8500-c84e-11ea-87bd-49dc295bf2a5.PNG" style="zoom:150%;" >

  * space-around : 모든 items를 균등한 여백으로 정렬한다

  <img width="230" alt="justifyContent - spaceAround" src="https://user-images.githubusercontent.com/55272324/87762960-e13b8500-c84e-11ea-8bac-213d850e63d3.PNG" style="zoom:150%;" >

#### (6) align-content

* 기능 : 교차 축(cross-axis)의 정렬 방법을 설정한다

* 종류

  * stretch (default): Container의 교차 축을 채우기 위 해 items를 늘린다

  <img width="153" alt="alignContent - stretch" src="https://user-images.githubusercontent.com/55272324/87767945-5ced0000-c856-11ea-8116-f1c438f3494a.PNG" style="zoom: 200%;" >

  * flex-start : items를 시작 점(flex-start)으로 정렬한다

  <img width="145" alt="alignContent - flexStart" src="https://user-images.githubusercontent.com/55272324/87767950-5eb6c380-c856-11ea-9ba4-00a9274b5309.PNG" style="zoom: 200%;" >

  * flex-end : items를 끝 점(flex-end)으로 정렬한다

  <img width="154" alt="alignContent - flexEnd" src="https://user-images.githubusercontent.com/55272324/87767949-5eb6c380-c856-11ea-9731-aace4714d37d.PNG" style="zoom: 200%;" >

  * center : items를 가운데로 정렬한다

  <img width="145" alt="alignContent - center" src="https://user-images.githubusercontent.com/55272324/87767948-5e1e2d00-c856-11ea-89cd-6933dd0ccd5f.PNG" style="zoom: 200%;" >

  * space-between : 시작 item은 시작 점에 마지막 item은 끝 점에 정렬되고 나머지 items는 사이에 고르게 정렬된다

  <img width="141" alt="alignContent - spaceBetween" src="https://user-images.githubusercontent.com/55272324/87767955-5f4f5a00-c856-11ea-9021-99ff9c82430c.PNG" style="zoom: 200%;" >

  * space-around : items를 균등한 여백을 포함하여 정렬한다

  <img width="146" alt="alignContent - spaceAround" src="https://user-images.githubusercontent.com/55272324/87767953-5f4f5a00-c856-11ea-8c3c-c98e893749ed.PNG" style="zoom:200%;" >

#### (7) align-items

* 기능 : 교차 축(cross-axis)에서 items의 정렬 방법을 설정한다

* 종류

  * stretch (default) : Container의 교차 축을 채우기 위해 items를 늘린다

  <img width="154" alt="alignItems - stretch" src="https://user-images.githubusercontent.com/55272324/87768934-d9341300-c857-11ea-8d7e-6b03cfd0566a.PNG" style="zoom:200%;" >

  * flex-start : items를 각 줄의 시작 점(flex-start)으로 정렬한다

  <img width="145" alt="alignItems - flexStart" src="https://user-images.githubusercontent.com/55272324/87768932-d9341300-c857-11ea-8056-03342f3850c7.PNG" style="zoom:200%;" >

  * flex-end : items를 각 줄의 끝 점(flex-end)으로 정렬한다

  <img width="142" alt="alignItems - flexEnd" src="https://user-images.githubusercontent.com/55272324/87768930-d89b7c80-c857-11ea-8cc8-d1082526a12b.PNG" style="zoom:200%;" >

  * center : items를 가운데로 정렬한다

  <img width="147" alt="alignItems - cneter" src="https://user-images.githubusercontent.com/55272324/87768929-d89b7c80-c857-11ea-83c8-d745cb9c8e13.PNG" style="zoom:200%;" >

  * baseline : items를 문자 기준선에 정렬한다

  <img width="145" alt="alignItems - baseline" src="https://user-images.githubusercontent.com/55272324/87768928-d802e600-c857-11ea-8110-850876443a12.PNG" style="zoom:200%;" >

### 2) Items

