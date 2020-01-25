# ATOM 사용법

![ATOM 로고](https://user-images.githubusercontent.com/55272324/73116625-c57cb380-3f7c-11ea-83d8-8c67b004e2f9.PNG)



## 0. setting

### (1) ATOM VERSION : 1.43.0

### (2) setting

![0  setting](https://user-images.githubusercontent.com/55272324/73118206-6e82d880-3f94-11ea-9d65-611073c3a11d.PNG)





## 1. File

![file tab](https://user-images.githubusercontent.com/55272324/73116692-ef82a580-3f7d-11ea-98d7-6edd5c30ba61.PNG)

### (1) New Window

> 단축키 : ctrl + shift + N

#### 1) 효과 : 새로운 ATOM 창을 하나 띄운다.

![1-(1) New window 결과](https://user-images.githubusercontent.com/55272324/73118219-a8ec7580-3f94-11ea-925c-7b3bb88cdc84.PNG)

### (2) New File

> 단축키 : ctrl + N

#### 1) 효과 : 기존 ATOM 창 내부에 새로운 File창을 하나 연다.

![1-(2) New File 결과](https://user-images.githubusercontent.com/55272324/73118278-48116d00-3f95-11ea-8a24-593a99f073a5.PNG)

### (3) Open File

> 단축키 : Ctrl + O

#### 1) 효과 : 기존에 가지고 있던 File을 ATOM으로 연다.

![1-(3) Open File 결과](https://user-images.githubusercontent.com/55272324/73118295-8575fa80-3f95-11ea-95ef-89800fa29594.PNG)

### (4) Open Folder

> 단축키 : ctrl+shift+O

#### 1) 효과 : 파일을 통채로 ATOM으로 연다.

![1-(4) Open Folder 결과](https://user-images.githubusercontent.com/55272324/73118772-0c2dd600-3f9c-11ea-8544-9391454f9380.PNG)

### (5) Add Project Folder

> 단축키 :  ctrl+shift+A

#### 1) 효과 : 프로젝트 란에 새로운 프로젝트 폴더를 더한다.

![1-(5) Add project folder 결과1](https://user-images.githubusercontent.com/55272324/73118804-924a1c80-3f9c-11ea-8f1a-5d79c85539fe.PNG)
![1-(5) Add project folder 결과2](https://user-images.githubusercontent.com/55272324/73118805-924a1c80-3f9c-11ea-854e-fd36f3ce29e0.PNG)

### (6) Reopen Project

#### 1) 효과 : 이전에 열었던 프로젝트를 다시 연다.

![1-(6) Reopen Project 결과](https://user-images.githubusercontent.com/55272324/73118836-f836a400-3f9c-11ea-8b0d-b98af0c78908.PNG)

#### 2) 세부목록 

##### (a) clear history : 이전에 열었던 프로젝트 기록을 지운다

### (7) Reopen Last Item

> 단축키 : ctrl+shitf+T

#### 1) 효과 : 최근에 닫았던 item 을 다시 연다.

![1-(7) Reopen Last item 결과](https://user-images.githubusercontent.com/55272324/73118861-68452a00-3f9d-11ea-8871-ee92f0f8a883.PNG)

### (8) Settings

> 단축키 : ctrl + ,

#### 1) 효과 : setting page를 연다

![1-(8) setting 결과](https://user-images.githubusercontent.com/55272324/73118929-31234880-3f9e-11ea-9884-d16273291806.PNG)

#### 2) 세부목록

##### (a) Core

##### (b) Editor

##### (c) URI Handling

##### (d) System

##### (e) Keybidings

##### (f) Packages

##### (g) Themes

##### (h) Updates

##### (i) Install

* script : ATOM 에디터는 컴파일 기능이 따로 없기 때문에 번거로움이 있다. 따라서 이런 번거로움을 해결해줄 `Script` 패키지를 이용하여 해당 기능을 추가할 수 있다.

![1-(8) -2)-(i) script 추가](https://user-images.githubusercontent.com/55272324/73118928-308ab200-3f9e-11ea-8040-7ed7285ca4f3.PNG)

### (9) [Config](https://flight-manual.atom.io/using-atom/sections/basic-customization/)

#### 1) 효과 : CONFIG.CSON

![1-(9) config 결과](https://user-images.githubusercontent.com/55272324/73119844-ecea7500-3faa-11ea-9dab-a3bc2e798a4e.PNG)

* CSON (CoffeeScript Object Notation) : 스타일 시트 및 Init스크립트를 제외한 모든 ATOM 구성 파일은 CSON으로 작성된다. JSON과 마찬가지로 CSON은 키-값 쌍으로 구성된 간단한 객체의 형태로 구조화 된 데이터를 저장하기 위한 텍스트 형식이다.

#### 2) CONFIG.CSON : 디렉토리의 파일에서 구성 설정을 로드

> `%USERPROFILE%\.atom`

##### (a) config.cson 구성

###### a) `core`

* `customFileTypes` : 파일 확장자에 대한 언어 범위 연관
* `disablePackages` : 비활성화 할 패키지의 이름 배열
* `excludeVcsIgnorePaths`:지정된 파일내에서 검색 무시
* `ignoreNames` : 모든 ATOM 에서 무시할 파일 이름
* `projectHome`: 프로젝트가 있는 것으로 가정되는 디렉토리
* `themes` : 로드 할 테마 이름의 배열을 계산딕 순서로 나타냄 

###### b) editor

* `autoIndent` : 기존 자동 들여 쓰기를 활성/비활성 화 한다. (기본값은 True)
* `nonWordCharacters` : 단어 경계를 정의하는 단어가 아닌 문자열
* `fontSize` : editor의 폰트 크기
* `fontFamily` : editor의 폰트 패밀리
* `invisibles` : 문자 해쉬.  공백 문자를 렌더링하는데 사용된다. 키는 공백 문자 유형이고 값은 문제 렌더링이 된다.
  * `tab` : 하드 탭 문자
  * `cr`: 캐리지리턴(CRLF, Microsoft 스타일 라인 엔딩)
  * `eol` : `\n` 문자
  * `space` : 선행 및 후행 공백 문자
* `lineHeight` : 글꼴 크기의 배수만큼 차지하는  editor 라인의  높이
* `preferredLineLength`: 줄 길이를 식별(기본값 80)
* `showInvisibles` : 보이지 않는 문자에 대한 지리 표시자를 렌더링 할지 여부를 나타냄(기본값 false)
* `showIndentGuide` : 편집기 내 들여쓰기 표시기를 표시/숨기기
* `showLineNumbers` : 거터 내 줄 번호를 표시 /숨기기
* `softWrap` : 편집기 내에서 텍스트 줄 바꿈 활성화 / 비활성화
* `softWrapAtPreferredLineLength` : 부드러운 줄 바꿈 활성화 / 비활성화
* `tabLength` : 탭 내의 공백 수 (기본값 2)

###### c) fuzzyFinder

* `ignoreNames` : 퍼자 파인더에서만 무시할 파일 이름

###### d) whitespace

* `ensureSingleTrailingNewline`: 파일 끝에서 여러 줄 바꾸기를 하나로 줄 것인지의 여부
* `removeTrailingWhitespace` : 줄 끝에서 공백 제거를 활성화 / 비활성화 할것인지 여부 (기본값은 true)

###### 7) wrap-guide

* `columns` : 현재 편집기의 경로로 열 위치에 일치시키기 위해 pattern 및 column 키가 있는 해쉬 배열

### (10) [Init Script](https://flight-manual.atom.io/hacking-atom/sections/the-init-file/)

#### 1) 효과 : init script를 연다

![1-(10) init script 결과](https://user-images.githubusercontent.com/55272324/73120088-291ed500-3fad-11ea-900e-20f8274d4744.PNG)

### (11) Keymap

#### 1) 효과 : keymap.cson 열기

![1-(11) key map 결과](https://user-images.githubusercontent.com/55272324/73120109-7602ab80-3fad-11ea-93e7-4fbbeb98174d.PNG)

### (12) Snippets

#### 1) 효과 : snippets.cson 열기

![1-(12) snippets 결과](https://user-images.githubusercontent.com/55272324/73120130-b104df00-3fad-11ea-8388-3c0e0b4571a8.PNG)

### (13) Stylesheet

#### 1) 효과 :  styles.less 열기

![1-(13) stylesheet 결과](https://user-images.githubusercontent.com/55272324/73120135-c0842800-3fad-11ea-9725-dcb6c50c735f.PNG)

### (14) Save 

> 단축키 : ctrl+s

#### 1) 효과 : 해당 파일 저장

![1-(14) save 결과](https://user-images.githubusercontent.com/55272324/73120159-1bb61a80-3fae-11ea-84ff-c96013a80515.PNG)

### (15) Save As

> 단축키 : ctrl+shift+s

#### 1) 효과 : 기존 파일 다른 이름으로 저장

![1-(15) save as 결과](https://user-images.githubusercontent.com/55272324/73120163-2ec8ea80-3fae-11ea-99e4-37ba98450824.PNG)

### (16) Save All

#### 1) 효과 : 변경 사항이 있는 열려있는 모든 편집기 탭을 저장한다.

### (17) Close Tab

> 단축키 : ctrl + w

#### 1) 효과 : 해당 편집기 탭을 닫는다. 변경사항이 있는 경우 저장할 것인지를 묻는다.

![1-(16) close tab 결과](https://user-images.githubusercontent.com/55272324/73120209-ae56b980-3fae-11ea-8cd0-5dff2fc50630.PNG)

### (18) Close Pane

> 단축키 : ctrl+w,k

#### 1) 효과 : project에서 열려 있는 해당 편집기를 모두 닫는다.

![1-(17) close pane 결과](https://user-images.githubusercontent.com/55272324/73120235-f544af00-3fae-11ea-9c98-e736a0996ad4.PNG)

### (19) Close Window

#### 1) 효과 : 해당 ATOM 윈도우를 닫는다

### (20) Exit

#### 1) 효과 : 해당 ATOM 윈도우 뿐만 아니라 모든 ATOM 윈도우를 닫는다

### (21) Close All Tabs

#### 1) 효과 : 열려있는 편집기 탭을 닫는다

## 2. Edit

![edit tab](https://user-images.githubusercontent.com/55272324/73116691-ef82a580-3f7d-11ea-840f-cb48a70b6ef1.PNG)

### (1) Undo

### (2) Redo

### (3) Cut

### (4) Copy

### (5) Copy Path

### (6) Paste

### (7) Paste Without Refomatting

### (8) Select All

### (9) Toggle Comments

### (10) Lines

### (11) Colums

### (12) Text

### (13) Folding

### (14) Reflow Selection

### (15) Bookmark

### (16) Select Encoding

### (17) Go to Line

### (18) Select Grammar



## 3. View

![view tab](https://user-images.githubusercontent.com/55272324/73116690-eeea0f00-3f7d-11ea-9ee6-d4a494ebd993.PNG)

### (1) Toggle Full Screen

### (2) Toggle Menu Bar

### (3)  Panes

### (4)  Developer

### (5) Increase Font Size

### (6) Decrease Font Size

### (7) Toggle Soft Wrap

### (8) Toggle Command Palette

### (9) Toggle Git Tab

### (10) Toggle GitHub Tab

### (11) Open Reviews Tab[Alt+G R]

### (12) Toggle Tree View[Ctrl+K Ctrl+B]





## 4. Selection

![selection tab](https://user-images.githubusercontent.com/55272324/73116689-eeea0f00-3f7d-11ea-92da-d06d65847a30.PNG)

### (1) Add Selection Above

### (2) Add Selection Below

### (3) Split Into Lines

### (4) Single Selection

### (5) Select to Top

### (6) Select to Bottom

### (7) Select Line

### (8) Select Word

### (9) Select to Beginning of Word

### (10) Select of Beginning of Line

### (11) Select to First Character of Line

### (12) Select to End of Word

### (13) Select to End of Line

### 

## 5. Find

![find tab](https://user-images.githubusercontent.com/55272324/73116686-ee517880-3f7d-11ea-9fed-72269b27a370.PNG)

### (1) Find In Buffer

### (2) Replace In Buffer

### (3) Select Next

### (4) Select All

### (5) Toggle Find In Buffer

### (6) Find In Project

### (7) Toggle Find In Project

### (8) Find All

### (9) Find Next

### (10) Find Previous

### (11) Replace Next

### (12) Replace All

### (13) Clear History

### (14) Find Buffer

### (15) Find File 

### (16) Find Modified File

## 6. Packages

![packages tab](https://user-images.githubusercontent.com/55272324/73116688-eeea0f00-3f7d-11ea-9888-0425c46060da.PNG)

### (1) Bracket Matcher

### (2) Command Palette

### (3) Dev Live Reload

### (4) Git Diff

### (5) Github

### (6) Keybinding Resolver

### (7) Markdown Preview

### (8) Open on Github

### (9) Package Generator

### (10) Settings View

### (11) Sinppets

### (12) Speel Check

### (13) Styleguide

### (14) Symbols

### (15) Timecop

### (16) Tree view

### (17) Whitesplace



## 7. Help

![help tab](https://user-images.githubusercontent.com/55272324/73116687-eeea0f00-3f7d-11ea-84d8-e5ca0040f103.PNG)



### (1) View Terms of Use

### (2) View License 

### (3) Version #no

### (4) Check for Update

### (5) Documentation

### (6) Frequently Asked Questions

### (7) Community Discussions

### (8) Report Issue

### (9) Search Issues

### (10) About Atom

### (11) Welcom Guide



