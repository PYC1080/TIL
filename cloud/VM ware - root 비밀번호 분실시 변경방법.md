# VM ware - root 비밀번호 분실시 변경방법

> [참고](http://blog.naver.com/PostView.nhn?blogId=dme1004&logNo=220692886434)

## 0.  환경설정

* centos 버전 :  CentOS-7-x86_64-DVD-1908

* Kernel 3.10.0-1062.9.1.e17.x86_64 on an x86_64



## 1. 현상

![1  현상](https://user-images.githubusercontent.com/55272324/72660257-90b5ad00-3a0e-11ea-8c61-959c65ba67fb.PNG)

vm-ware를 통해 접속하는 화면에서 root 비밀번호를 분실해 접속하지 못하는 상황



## 2. 해결법

### 1) 부팅 화면에서 edit 모드 진입

![2  해결법 1 -edit mode 진입](https://user-images.githubusercontent.com/55272324/72660269-ce1a3a80-3a0e-11ea-9d1f-4da85d65a3e2.PNG)

진입화면에서 centos를 선택하는 단계에서 `e` 버튼을 눌러 edit 모드로 진입한다.



### 2) edit 모드

#### (1) edit 모드에서 `ro`로 되어있는 부분을 찾는다

![2  해결법 2 - ro 수정](https://user-images.githubusercontent.com/55272324/72660280-03268d00-3a0f-11ea-87d8-71716610fa82.PNG)



#### (2) ro 부분 수정

`ro` 를 삭제하고 `rw init=/sysroot/bin/sh`를 입력한 뒤 `ctrl+x` 를 눌러 해당 화면을 빠져나온다.

![2  해결법 3 - rw 추가](https://user-images.githubusercontent.com/55272324/72660291-310bd180-3a0f-11ea-8033-9d687144c54a.PNG)





### 3) passwd 변경

#### (1) 2)-(2)를 빠져나와 아래와 같은 화면이 나왔는지 확인한다.

![3  다음화면 1](https://user-images.githubusercontent.com/55272324/72660300-5c8ebc00-3a0f-11ea-9742-49d27c84a47c.PNG)



#### (2)  chroot /sysroot : 분실 된 루트 암호를 재설정하는 절차

![3  다음화면 2](https://user-images.githubusercontent.com/55272324/72660310-77613080-3a0f-11ea-92ed-9ec82d1867df.PNG)




#### (3) Passwd : 패스워드 변경

![3  다음화면 3](https://user-images.githubusercontent.com/55272324/72660312-7cbe7b00-3a0f-11ea-8c7a-448be9629512.PNG)

``` shell
**화면의 깨진부분** 
:/# passwd root
changing password for user root.
New password: (새로 지정할 password 입력)
Retype new Password : (위에서 입력한 password 재입력)
passwd: all authentication tokens updated successfully.
:/# 
```



#### (4) tocuh /.autorelabel

RHEL7 같은 경우에는 기본적으로 SELinux가 활성화 되어 있다. 따라서 시스템을 재부팅하면 SELinux의 파일 시스템 레이블이 자동으로 재지정되므로 `touch`명령어를 통해 해당 파일의 타임스태프를 현재시간으로 업데이트 해준다.

![3  다음화면 4](https://user-images.githubusercontent.com/55272324/72660401-898f9e80-3a10-11ea-87e4-e62ac6305fa8.PNG)





#### (5) exit & reboot

![4  설정 변경후 reboot](https://user-images.githubusercontent.com/55272324/72660403-98765100-3a10-11ea-87de-cb0779e76af2.PNG)





### 4) 결과

![5  결과](https://user-images.githubusercontent.com/55272324/72660404-a7f59a00-3a10-11ea-88df-080f924660a2.PNG)

정상적으로 접속되는 것을 확인할 수 있다.