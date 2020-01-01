# Git pull 오류 : error: Your local changes to the following files would be overwritten by merge

## 1. 현상

![충돌 현상](https://user-images.githubusercontent.com/55272324/71636828-3f20ca80-2c79-11ea-8e34-87fd5b23713c.PNG)

2개의 컴퓨터에서 github 관련 작업을 하다가 오류가 발생했다. A 컴퓨터에서 올린 작업을 B 컴퓨터에서 받은 후 github로 재 업로드 하였고  다시 A 컴퓨터로 받는 과정에서 오류가 발생했다.

## 2. 현상에 대한 원인 파악

구글링한 결과 해당 해당 에러의 원인 git pull로 가져오려는 소스와 현재 A 컴퓨터에 저장된 코드가 제대로 처리되지 않아 에러가 발생했다.

## 3. 오류 해결법

소스 코드가 충돌하고 있기 때문에 `git stash` 명령어를 통해 현재 디렉토리의 파일을 임시로 백업하고 깨끗한 상태로 되돌린 후 `git pull` 명령어를 통해 재 다운로드 받기로 한다.

## 4. 결과 

![결과](https://user-images.githubusercontent.com/55272324/71636877-367cc400-2c7a-11ea-9412-eeef01870768.PNG)

해당 오류가 해결되고 `git pull` `git push` 모두 잘 돌아가는 것을 알 수 있다.

_________________

# 작성일자

20.01.01		최초 작성일

