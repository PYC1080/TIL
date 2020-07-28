#  VMware Workstation Pro : 가동 문제

> 오류 : VMware Workstation and Hyper-V are not compatible. Remove the Hyper-V role from the system before running VMware Workstation.

## 0. 현상

Microsoft windows 10 Home edition 에서 vmware 가상화 장치가 동작하지 않는 현상이 발생했다. 구글링 도중해당 버전에서는 가상화 장치를 지원하지 않아서 vmware가 작동하지 않는다고 하였다. 이에 `시스템 정보` 창에 들어가 확인해 본 결과 `hypervisor-v` 를 지원하고 있는 것으로 보아 가상화장치는 지원하는 것으로 보아 가상화 시스템은 가동이 될 것으로 생각되었다.

AMD Ryzen 5 2600 Six-Core Processor, 3400Mhz, 6코어, 12 논리 프로세서, 통칭 암드 제품을 사용하고 있다. 역시나 구글링 도중 암드 제품은 인텔과 다르게 가상화 머신을 bios에 진입해 수동으로 가동상태로 올려줘야 한다는 내용을 접하였다.

```
## 가상화 장치 on 과정
1) bios 진입 : 컴퓨터 부팅과정 중 `del`키 또는 `f2`키를 누르면 bios 화면으로 진입할 수 있다.
2) cpu feature 찾기 : 구글링 과정에서는 해당 기능이 advanced 탭에 있다고 나와있었으나 보안탭에서 발견 할 수 있었다, 버젼마다 차이가 있는듯 하다.
3) 가상화 장치 off->on
```

해당 결과 **작업관리자 창**에서 가상화 상태가 **예**로 바뀐것을 확인할 수 있다. 

![0  가상화장치 on](https://user-images.githubusercontent.com/55272324/71639200-fcc9ae80-2cb5-11ea-9833-c65df9c0072b.PNG)



## 1. 문제 발생 : 가상화 장치 충돌 문제

![1  vmware 가상화장치 충돌 문제1](https://user-images.githubusercontent.com/55272324/71639201-fcc9ae80-2cb5-11ea-8ac4-e5e177d14338.PNG)

![1  vmware 가상화장치 충돌 문제2](https://user-images.githubusercontent.com/55272324/71639202-fcc9ae80-2cb5-11ea-9b92-d9aa0b73f02e.PNG)

AMD의 가상화 장치를 켜둔 결과 window가 제공하는 하이퍼바이져와 충돌하는 문제가 발생했다. 구글링을 통한 결과 하이퍼바이저를 끄면 해결되는 문제로 확인하였다



## 2.해결법 : Hypervisor 정지

```powershell
## Hypervisor 정지 및 재가동 :
1) 명령 프롬프트(터미널)창을 가동시킨다 : ctrl+r ->cmd or powershell
2) 정지 방법 : bcdedit /set hypervisorlaunchtype off
3) 재가동 : bcdedit /set hypervisorlaunchtype auto
###
	(1) bcdedit 명령어는 관리자 권한을 요구하므로 터미널 창을 오픈시 관리자 권한으로 오픈하도록 한다.
	(2) hypervisor를 정지하거나 재가동 명령어를 입력한 이후 반드시 리부팅 시켜준다.
```



![2  해결법](https://user-images.githubusercontent.com/55272324/71639204-fcc9ae80-2cb5-11ea-9378-39808820984a.PNG)

정상적으로 작업을 완료한 것을 알 수 있다.

## 3. 결과

![3  결과1](https://user-images.githubusercontent.com/55272324/71639205-fd624500-2cb5-11ea-9247-b14f6fabbf17.PNG)

**시스템정보창** 을 통해 hyper-v 가 정상 작동됨을 확인할 수 있다.

![3  결과2](https://user-images.githubusercontent.com/55272324/71639206-fd624500-2cb5-11ea-86d2-8c0af23d1fb2.PNG)

VM ware 역시 정상작동된다.