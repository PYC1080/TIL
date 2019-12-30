# git - error : failed to push some refs to ~ 문제해결

## 1. 현상

* `git push` 시  아래와 같은 문제가 발생

  ![git - 불일치 문제 1](https://user-images.githubusercontent.com/55272324/71537592-a54bdb80-2961-11ea-92e9-214fcb29f33c.PNG)



## 2. 문제 파악

hint에 따르면 pc에서 github 저장소로 push 하기전에 github 저장소에 변동이 생겼는데 pc에 해당 변동이 반영이 되지 않아서 push를 하기전에 `git pull` 해달라고 알려주고 있다.

* github의 repository에는 test 파일이 존재하지만 로컬의 TIL 폴더에는 해당 파일이 존재하지 않아 불일치 문제가 발생한 것이다.

![git - 불일치 문제 2](https://user-images.githubusercontent.com/55272324/71537589-a4b34500-2961-11ea-8263-84970f43a57b.PNG)

## 3. 해결

* `git pull` 을 통해 불일치 문제를 해결해준다. 

![git - 불일치 문제 3](https://user-images.githubusercontent.com/55272324/71537590-a4b34500-2961-11ea-95d2-2f6cb13fe659.PNG)



## 4. 결과

* 불일치 문제를 해결한 결과 `git push` 명령어가 정상적으로 작동하는 것을 알 수 있다.

![git - 불일치 문제 4](https://user-images.githubusercontent.com/55272324/71537591-a4b34500-2961-11ea-8174-a084ee79d093.PNG)



_________________________________________________



# 작성일지

19.12.28		최초작성일

