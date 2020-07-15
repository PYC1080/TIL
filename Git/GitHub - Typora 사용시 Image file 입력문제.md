# GitHub - Typora 사용시 Image file 입력문제

## 1. 경로의 이해

### 1) 절대경로와 상대경로

#### (1) 절대경로란? 

* 어떠한 웹페이지나 파일이 가지고 있는 고유한 경로 : 고유한 경로이기 때문에 해당 경로로 이동하거나 그곳에 있는 파일을 바로 실행하는 것이 가능하나 변동사항이 있는 경우 오류가 발생한다.
* 예시 : C:\user\work\TIL..  https://www.google.com 등등

#### (2) 상대경로란?

* **현재 위치**를 기준으로 하여 원하는 파일이나 웹페이지를 찾아가기 위한 경로 
* 예시 :  TIL폴더를 기준으로 Work 폴더 하위 Git 폴더의 README.txt 파일에 접근하려면  ../Git/README.txt



## 2. Typora 작성시 발생한 문제

![git - 절대경로 문제 해결1](https://user-images.githubusercontent.com/55272324/71537272-e55c8f80-295c-11ea-8fad-4855a6638097.PNG)

로컬 PC에서 typora 작성시 이미지 파일을 불러와 작성하였다. 따라서 typora의 그림은 모두 pc의 절대 경로상에 이미지 파일을 인식하고 있지만 해당 파일을 github에 올린결과 github는 pc의 절대경로파일을 읽을 수 없기에 이미지가 나오고 있지 않는 모습이다.



## 3. 문제해결

접근법 : typora의 이미지가 pc상의 절대경로로 설정된 것을 github도 인식할 수 있도록 github상의 절대경로로 바꿔주기로 했다.

### 1) Github상 이미지파일의 절대경로 알아내기

#### (1) 상단의 Issues탭에서  New issue를 클릭한다.

![git - 절대경로 문제 해결2](https://user-images.githubusercontent.com/55272324/71537308-9400d000-295d-11ea-868d-53c25f265cf1.PNG)



#### (2) 파일을 drag & drop해 해당 파일의 github상 절대경로를 알아낸다.

![git - 절대경로 문제 해결3](https://user-images.githubusercontent.com/55272324/71537318-c3afd800-295d-11ea-804c-7213e36526fc.PNG)

경로를 알아낸 뒤 해당 issue는 제출하지 않아도 무방하며, 여러 그림파일을 동시에 issue 란에 넣어 여러 그림파일 각각의 경로를 알아내는 것도 가능하다.



### 2) 결과 

#### (1) Typora에 imagefile을 github상 절대경로로 넣어준 모습

![git - 절대경로 문제 해결4](https://user-images.githubusercontent.com/55272324/71537343-096ca080-295e-11ea-97da-b4291c9e6415.PNG)



#### (2) Typora 파일을 github에 동기화 시켜 비교한 모습

![git - 절대경로 문제 해결5](https://user-images.githubusercontent.com/55272324/71537384-8a2b9c80-295e-11ea-9467-c21a445fae94.PNG)







___________________________________________________________________________________

# 작성 및 수정 시간

19.12.28		최초 작성일				