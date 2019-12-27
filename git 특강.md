#  Git  repository 설정 및 Pull, push


## 1. Github download 및 실행 

### 1) [Github download](https://desktop.github.com/) :  운영체제에 맞춰 Github download

### 2) Git bash 실행 

![](C:\Users\user\Desktop\클라우드 컴퓨팅\3주차 12.27 금\git 0 - bash.PNG)

## 2. Git repository

### 1) Git 설정할 폴더 생성

* `mkdir` :  make directory , 디렉터리(폴더)를 생성한다 .
* `cd` : change directory, 디렉터리를 변경 시킨다.

![](C:\Users\user\Desktop\클라우드 컴퓨팅\3주차 12.27 금\git 1 - TIL 디렉터리 생성 및 이동.PNG)

TIL 폴더를 생성한 후, 홈디렉터리(/)의 하위 폴더인 work 폴더 그리고 work폴더의 하위인 TIL 폴더로 이동한다.

___________________________________________________

### 2) Git repository 설정 및 확인

* `Git init` : git를 연동할 폴더에 repository를 설정한다.

![](C:\Users\user\Desktop\클라우드 컴퓨팅\3주차 12.27 금\git 2 - git init.PNG)

* `dir` 와 `ls -a`의 차이

![](C:\Users\user\Desktop\클라우드 컴퓨팅\3주차 12.27 금\git 3 - dir 과 ls 비교.PNG)

`dir` : 하위 디렉터리를 보여주지만 숨겨진 디렉터리는 나타내지 못한다. 따라서 **"  .~ " **로 표현된 숨겨진 디렉터리가 표현되지 않는 모습이다.

`ls -a` : 현재 디렉터리의 파일에 대한 리스트를 보여주며 `-a` 옵션을 추가하여 숨김파일을 포함한 모든 항목을 표시하고 있다

`. directory` :  현재 폴더를 가리키는 directory 

`.. directory` : 현재 폴더의 상위 폴더를 가리키는 directory

_________________________________________________

### 3)  Git 원격 저장소 (**추가시에만 입력한다**)

* 일반적으로 원격저장소이름은 'origin' 을 자주 사용한다.

```shell
$ git remote add 원격저장소이름 github원격저장소주소
```

* github의 원격 저장소 주소를 확인하는 곳

![](C:\Users\user\Desktop\클라우드 컴퓨팅\3주차 12.27 금\git 4 - git 주소.PNG)

* 원격 저장소 추가 예시

![](C:\Users\user\Desktop\클라우드 컴퓨팅\3주차 12.27 금\git 4 - git 주소 추가.PNG)



### 3) Staging Area or Index

* Staging area (or index) 의 의미 :  Staging area는 Git 디렉터리에 존재하며,  곧 commit할 파일에 대한 정보를 저장하는 역할을 한다.

``` shell
$ git add [파일이름] # 파일이름에 .를 입력한 경우 해당 파일의 모든 변경 사항을 staging area로 추가
```



![]()

