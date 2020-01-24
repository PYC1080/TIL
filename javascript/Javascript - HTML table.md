# Javascript - `<table></table>`

## 1. 테이블 내용 정리

```html

1. 테이블 속성
	1) 셀의 넓이
		(1) width : 테이블 열의 넓이
		(2) height : 테이블 행의 넓이
	2) 셀 병합
		(1) colspan : 열을 합쳐줌
		(2) rowspan : 행을 합쳐줌
	3) 셀 꾸미기
		(1) 여백
			a) cellpadding : 셀과 경계선 사이의 여백
			b) cellspacing : 셀과 셀 사이의 여백
		(2) 테두리
			a) border : 테이블 테두리 굵기를 지정
			b) bordercolor : 테두리의 색깔을 지정
		(3) 셀 내부 정렬
			a) align : 셀의 내용을 열 기준으로 정렬 (right/left/center)
			b) valign : 셀의 내용을 행 기준으로 정렬 (top/middle/bottom)
			c) bgcolor : 셀의 배경색을 지정 (색상이름이나 색상코드로 지정가능)
		(4) 공백 삽입
			a) &ensp; : ' '만큼의 공백 삽입
			b) &nbsp; : ' '만큼의 공백 삽입
			c) &emsp; : ' '만큼의 공백 삽입
		(5) <font> </font>
			*font-weight
			a) noraml : 보통 굵기, 400과 같은 값
			b) bold : 굵은 굵기, 700과 같은 값
			c) lighter : 상속된 값보다 얇은 굵기
			d) bolder : 상속된 값보다 굵은 굵기
			e) initial : 기본값으로 설정
			f) inheritP : 부모 요소의 속성값을 상속받음
			g) number: 크기 값을 지정
			
			*font-style
			a) <b>내용</b> : 내용을 굵게 해줌
			b) <STRONG>내용</STRONG> : 내용을 굵게 해줌
			c) <I>내용</I> : 내용을 기울인다.
			d) <STRIKE>내용</STRIKE> : 내용에 취소선을 긋는다
			e) <U>내용</U> : 내용에 밑줄을 긋는다
			f) <SUP>내용</SUP> : 내용에 윗 첨자를 추가한다
			g) <SUB>내용</SUB> : 내용에 아래 첨자를 추가한다
			h) <TT>내용</TT> : 내용을 타자체로 표현한다
			i) <BIG>내용</BIG> : 내용을 주변 글자보다 크게 표현한다
			j) <SMALL>내용</SMALL> : 내용을 주변 글자보다 작게 표현한다
2. 테이블 구성
	1) <tr>table row</tr> : 테이블 행의 내용, 기본값으로 보통 글씨체에 좌측 정렬이 되어있다.
	2) <td>table data</td> : 테이블 열의 내용, 기본값으로 보통 글씨체에 좌측 정렬이 되어있다.
	3) <th>table head</th> : 테이블의 제목, 기본값으로 굵은 글씨체에 중앙 정렬이 되어있다.
```
### 1. 테이블 구조
``` html
<!DOCTYPE html>
<html>
    <head>
        <title>	`  </title> </title>
        <style> </style>
    </head>
</html>
<body>
    
</body>
	<div>
        <table 테이블 속성> 테이블 구성 </table>
	</div>
	
		<
```



##### A) Positioning : 레이아웃을 배치하거나, 객체를 위치시킬때 사용하는 속성이다. position 속성은 상속되지 않는다.

​	(a) postioning 속성

* static(기본값) : 일반적인 레이아웃 배치에 사용되고, 특별히 지정하지 않은 경우 초기값으로 사용된다. static을 사용한 경우 top, left, bottom, right에 값을 주고 지정해도 적용하지 않는다.

* relative : 위치를 계산할때 static의 원래 위치부터 계산한다

* absolute : 원래 위치와 상관없이 위치를 지정할 수 있다. 부모 요소에 position속성을 static 이외의 값으로 지정했을 경우 ,부모 요소의 왼쪽 상단 꼭지점이 기준 윛기ㅏ 된다. 부모 요소에 특별히 지정한 값이 없는 경우에는 body가 기준이 된다. fixed 와 달리 스크롤에 따라 위치가 변한다.

* fixed : 원래 위치와 상관없이 위치를 지정할 수 있다. 하지만 상위 요소에 영향을 받지 않기 때문에 화면이 바뀌더라도 고정된 위치를 설정 할 수 있다. 브라우저 화면의 상대위치를 기준으로 위치가 결정된다.

* inherit : 상위에서 지정한 값을 상속한다.

##### B) div tag

```html
<div>
     1.  <style media="screen">  </style> :
          
       
</div>
```



## 2. 실습

### 1) 실습1 - 이력서 작성

#### 목표 : 실습 1

![실습 - 이력서 - 목표](https://user-images.githubusercontent.com/55272324/72866284-0dea6600-3d1e-11ea-85e7-36fd80b011f5.PNG)

```html
1. 6*5 행렬 작성
2. 목표와 동일하게 문자 정렬
3. 이력서 굵은 마크 넣기
4. 사진은 파일을 불러올 수 있는 기능 추가
```

