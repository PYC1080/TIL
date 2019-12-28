#  Git  repository 설정 및 Pull, push


## 1. Github download 및 실행 

### 1) [Github download](https://desktop.github.com/) :  운영체제에 맞춰 Github download

____________________

### 2) Git bash 실행 

![](C:\Users\user\Desktop\클라우드 컴퓨팅\3주차 12.27 금\git 0 - bash.PNG)

윈도우 검색창 or 윈도우키+s 를 누른 후 'git bash' 를 검색하여 git bash 프로그램을 킨다.

_________________________

### 3) Git 설정 : **최초 1회만 설정하면 된다.**

```shell
$ git config --global user.name "이름"    
$ git config --global user.email "이메일주소"
```

Github에서 git 사용자의 정보를 확인하기 위해 bash 최초 실행시 이름과 이메일주소를  설정한다.



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

____________________

### 4) Staging Area or Index

* Staging area (or index) 의 의미 :  Staging area는 Git 디렉터리에 존재하며,  곧 commit할 파일에 대한 정보를 저장하는 역할을 한다.

``` shell
$ git add [파일이름] 
# 파일이름에 .를 입력한 경우 해당 파일의 모든 변경 사항을 staging area로 추가한다
# 파일이름은 "파일이름" 로 입력한다.
```

* `git add` 예시 및  `git status` 로 변경사항 확인

![](C:\Users\user\Desktop\클라우드 컴퓨팅\3주차 12.27 금\git 6 - git add2.PNG)

"git 특강.md" 파일을 추가한 후 `git status`을 통해 살펴본 결과 새로운 파일이 추가 되었으며 commit 할 상태가 되었음을 확인할 수 있다.

____________________________

### 5) git commit 

*  `git commit` : git hub의 버전 관리를 위한 스냅샷을 저장하는 명령어

```shell
$ git commit -m "commit하는 폴더에 대한 간단한 설명 입력"
```

* `git commit` 명령어 입력 예시

![](C:\Users\user\Desktop\클라우드 컴퓨팅\3주차 12.27 금\git 7 - git commit.PNG)

______________________

### 6)  git push

* `git push` : 최종적으로 github의 원격저장소에 commit한 파일을 push한다.

``` shell
$ git push 원격저장소이름 master
```

* `gitpush` 예시 : git push 전과 후의 모습

`git push`를 하기 이전의 github 원격저장소의 모습

![](C:\Users\user\Desktop\클라우드 컴퓨팅\3주차 12.27 금\git 6 - git add.PNG)



`git push` 이후의 github 원격저장소의 모습

![](C:\Users\user\Desktop\클라우드 컴퓨팅\3주차 12.27 금\git 8 - git push2.PNG)



![절대 경로 문제 1](https://user-images.githubusercontent.com/55272324/71536805-c0fdb480-2956-11ea-9a8c-66d789cb6375.PNG)