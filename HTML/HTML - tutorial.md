# HTML - tutorial

## 0. Introduction

```
1. HTML
	1) HTML stands for Hyper Text Markup Language
	2) HTML is the standard markup language for create web pages
	3) HtML describes the structure
	4) HTML consists of a series of elements
	5) HTML elements tell the browser how to display the content

2. HTML 구성
```



## 1. Elements

```
1. HTML Elements 구성
	1) 기본 : <Start tagname>Element content</End tagname>
	2) Empty Element : <Start tag></End tag>
	3) Empty Element & No End tag : <Start tag/>
	
2. HTML Elements 특성
	1) Nested HTML elements, 중첩 HTML 요소 가능
	2) Never Skip the end tagname : 몇몇 HTML 요소는 end tagname을 주지 않더라도 요소가 표현될 수 있다. 그러나 반드시 주는 것이 좋다
	3) Empty HTML Elements : Element Content가 없는 HTML 요소를 empty elements라 한다.
	4) HTML is not Case Sensitive : HTML 요소는 대소문자 구분을 하지 않는다. HTML 표준에선 소문자 태그를 요구하지 않으나 관례상 소문자로 적는 것이 좋다. 또한 XHTML에서는 소문자로 태그를 적는 것이 요구된다.
```

## 2. Attributes

```
1. HTML Attributes
	1) 모든 HTML 요소는 attributes를 가지고 있다.
	2) Attributes는 HTML 요소에 대한 추가적인 정보를 제공한다
	3) Attributes는 항상 Start tag로 구분한다
	4) Attibutes는 일반적으로 name="value" 쌍으로 제공된다.

2. Attributes
	1) the lang attribute
		(1) 형태 : lang="xx-yy"
		(2) 기능 : web page의 언어를 설정하는 특성
		(3) xx : web page의 언어 구분
		(4) yy : 언어에 따른 국가 성격을 구분
	2) the href attribute
		(1) 형태 : href=""
		(2) 기능 : <a>에서 hyperlink를 설정하는 특성
	3) the src attribute
    	(1) 형태 : src=""
    	(2) 기능 : <img>에서 html 페이지에 삽입할 img의 주소를 나타낸다
	4) the width & height attribute
		(1) 형태 : width="" height=""
		(2) 기능 : img 태그에서 img의 width와 height를 나타내는 특성 
		(3) 기타
			a) <img>에서 반드시 해당 특성을 포함해햐 한다
	5) the alt attribute
		(1) 형태 : alt=""
		(2) 기능 : <img>에서 img에 대한 대체 텍스트 설명을 달 때 사용하는 특성
	6) the style attribute
    	(1) 형태 : style=""
    	(2) 기능 : html 요소에 스타일을 추가하기 위한 특성
	7) the title attribute
		(1) 형태 : title=""
		(2) 기능 : html 요소에 추가 정보를 부여하기 위한 특성
		
3. 주의
	1) 항상 소문자로 attribute를 쓸 것 : html은 대/소문자를 구분하지 않지만 XHTML의 경우 소문자를 요구하므로 html도 소문자로 
	2) 항상 ""/''을 사용해 attribute의 값을 나타낸다
```

## 3. Headings

```
1. 기능 : webpage에 title/subtitle을 표시하기 위한 기능

2. 종류 : <h1>~<h6>

3. 주의
	1) heading tag는 heading 에만 사용할 것
	2) big/bold를 쓰지 말 것
```

## 4. Paragraphs

```
1. 기능 : webpage에서 새로운 text line을 시작하기 위한 기능

2. 종류 : <p></p>

3. 특징
	1) 항상 새로운 라인으로 시작한다
	2) start tag와 end tag에 자동으로 margin을 준다
	3) <hr> : 해당 기능에서 주제를 구분하기 위한 태그
	4) <br> : line을 중단하기 위한 태그
	5) <pre> : <p>에서 유지되지 않는 텍스트의 고정 폭과 글꼴, 공백, 줄바꿈이 유지되는 태그 
	
```

## 5. Styles

```
1. 기능 : HTML에 Style 특성을 부여하는 기능

2. 형태 : style="property:value"

3. 종류
	1) Background Color : background-color
	2) Text color : color
	3) Fonts : font-faimily
	4) Text size : font-size
	5) Text Alignment : text-align

```

## 6. Formatting

```
1. 기능 :  텍스트에 특별한 기능을 부여

2. 종류
	1) Bold text : <b>
	2) Important text : <strong>
	3) Italic text : <i>
	4) Emphasized text : <em>
	5) Marked text : <mark>
	6) Smaller text : <small>
	7) Deleted text : <del>
	8) Inserted text : <ins>
	9) Subscript text : <sub>
	10) Superscript text : <sup>
```

## 7. Quotations & Citation

```
1. <blockquote> : 다른 소스에서 인용된 섹션 저으이

2. <q> : 큰 따옴표 삽입 

3. <abbr> : 약어 또는 머리 글자 정의

4. <address> : 기사 작성자나 소유자의 연락처 정보를 정의

5. <cite> : 창작물의 제목을 정의한다.

6. <bdo> : 양방향 재정의

```



## 8. comments

## 9. Colors

## 10. CSS

## 11. Links

## 12. Images

## 13. Tables

## 14. Lists

## 15. Block & inline

## 16. Classes

## 17. ID

## 18. Iframes

## 19. JavaScript

## 20. File Paths

## 21. Head

## 22. Layout

## 23. Responsive

## 24. Computercode

## 25. Semantics

## 26. Style Guide

## 27. Entities

## 28. Symbols

## 29. Emojis

## 30. Charset

## 31. URL Encode

## 32. HTML vs XHTML

