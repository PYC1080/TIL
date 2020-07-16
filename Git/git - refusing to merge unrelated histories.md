# git - refusing to merge unrelated histories



## 1. 현상

```
user@DESKTOP-I4COF21 MINGW64 ~/work/Team BTB (master)
$ git pull origin master
From https://github.com/PYC1080/Be-The-Best
 * branch            master     -> FETCH_HEAD
fatal: refusing to merge unrelated histories

```

![1  현상](https://user-images.githubusercontent.com/55272324/73608935-fa87a680-460b-11ea-967b-ded6c39d28f1.PNG)



## 2. 해결



### 2-1) 이유

```
"git merge" used to allow merging two branches that have no common base by default, which led to a brand new history of an existing project created and then get pulled by an unsuspecting maintainer, which allowed an unnecessary parallel history merged into the existing project. The command has been taught not to allow this by default, with an escape hatch "--allow-unrelated-histories" option to be used in a rare event that merges histories of two projects that started their lives independently.

출처: https://cpdev.tistory.com/51 [하루하나]
```



### 2-2) 해결 방법

```
1. user@DESKTOP-I4COF21 MINGW64 ~/work/Team BTB (master)
$ git pull origin master --allow-unrelated-histories
From https://github.com/PYC1080/Be-The-Best
 * branch            master     -> FETCH_HEAD
Merge made by the 'recursive' strategy.

... 이하 중략
```

