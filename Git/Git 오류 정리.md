# Git 오류 정리

## 1. error : failed to push some refs to '깃주소'

```
1. 현상 : git push시 해당 오류 발생

2. 원인 : local pc(slave)에서 github repository(master)로 push 하기 전에 마스터에 변동이 발생했는데 해당 슬레이브에는 변동 사항이 반영되지 않았으므로 마스터와 슬레이브 간의 데이터 불일치가 발생했다.

3. 해결 근거(hint) : Update were rejected because the remote contains  work that you do not have locally. This is usually caused by another repository pushing to the same ref. you may want to first integrate the remote changes(e.g., 'git pull ...') before pushing again. See the 'Note about fast-forwards' in 'git push --help' for details.

4. 해결방법 :
	1) git pull slaveName master
	2) git add 추가할 파일명 
	3) git commit -m 
	4) git push slaveName master
```

## 2.  error : Your local changes to the following files would be overwritten by merge : 파일명

```
1. 현상 : 2개의 local Pc(slave)에서 작업을 하는 도중 PC1(A-slave)에서 파일을 올리고 PC2(B-slave)에서 해당 파일을 git pull한 경우 해당 오류가 발생했다.

2. 원인 : 해당 파일 소스를 PC2에서 git pull했을 때 소스 코드가 제대로 처리되지 않아 해당 에러가 발생했다. 

3. 해결 근거(hint) : Please commit your changes or stash them  before you merge

4. 해결방법 :
	1) git stash
	2) git pull origin master
```



## 3. error : Commiting is not possible because you have unmerged files.

```
1. 현상 : git commit 시 해당 오류가 발생

2. 원인 : local pc(slave) 와 repository(master)에 같은 파일이 있는데 로컬에서는 아직 merge가 잘 안되었다고 인식해서 발생하는 오류

3. 해결 근거(hint) : Fix them up in the work tree, and then use 'git add/rm <file>' as appropriate to mark resolution and make a commit.

4. 해결 방법
	1) 
```



## 4.

## 5.

