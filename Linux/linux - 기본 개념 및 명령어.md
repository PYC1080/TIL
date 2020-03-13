# Linux - 기본 개념 및 명령어

## 1. 서버를 구축할 때 알아야 할 필수 개념과 명령어

### 1) 리눅스 운영시 필수 개념

* 사용자 권한 구분

```shell
~]# root 사용자
~]$ 일반 사용자
```

* 시스템 종료 명령

```shell
~]# poweroff
~]# shutdown -p now
~]# halt -p
~]# init 0
```

* 시스템 재부팅

```shell
~]# shutdown -r now
~]# reboot
~]# init6
```

* 로그 아웃

```shell
~]# exit
~]# logout
```

* 가상 콘솔 : CentOS는6개의 가상 콘솔(가상의 모니터)를 제공한다

```shell
ctrl+alt+f1~f6
```

* 런레벨 : `init` 명령어 뒤에 붙는 숫자

```
1. 런레벨 확인 방법
	1) ~]# cd /lib/systemd/system
	2) ~]# ls -l runlevel?.target
2. 런레벨 정보
lrwxrwxrwx. 1 root root 15 runlevel0.target -> poweroff.target 종료모드
lrwxrwxrwx. 1 root root 13 runlevel1.target -> rescue.target 시스템 복구 모드
lrwxrwxrwx. 1 root root 17 runlevel2.target -> multi-user.target 사용하지 않음
lrwxrwxrwx. 1 root root 17 runlevel3.target -> multi-user.target 텍스트 모드의 다중 사용자 모드
lrwxrwxrwx. 1 root root 17 runlevel4.target -> multi-user.target 사용하지 않음
lrwxrwxrwx. 1 root root 16 runlevel5.target -> graphical.target 그래픽 모드의 다중 사용자 모드
lrwxrwxrwx. 1 root root 13 runlevel6.target -> reboot.target 재부팅 모드
3. 런레벨 설정
	1) 현재 시스템에 설정된 런레벨 확인 :~]# ls -l /etc/systemd/system/default.target
	2) 런레벨 변경
		(1) ~]# ln -sf /lib/systemd/system/변경_런레벨 /etc/systemd/system/default.target
		(2) ~]# reboot
```

* 사용했던 명령 기록

```shell
1. 사용했던 명령 기록 확인 : ~]# history
2. 사용했던 명령 기록 삭제 : ~]# history -c
```

* vi 에디터 기본 사용법

```
1. 모드 전환
    1) i : 현재 커서의 위치부터 입력
    2) I : 현재 커서 줄의 맨 앞에서부터 입력
    3) a : 현재 커서의 위치 다음 칸부터 입력
    4) A : 현재 커서 줄의 맨 마지막부터 입력
    5) o : 현재 커서의 다음 줄에 입력
    6) O : 현재 커서의 이전 줄에 입력
    7) s : 현재 커서 위치의 한 글자를 지우고 입력
    8) S : 현재 커서의 한 줄을 지우고 입력
2. 커서 이동
	1) h : 커서를 왼쪽으로 한 칸 이동
	2) j : 커서를 아래로 한 칸 이동
	3) k : 커서를 위로 한 칸 이동
	4) l : 커서를 오른쪽으로 한 칸 이동
	5) ctrl+f : 다음 화면으로 이동
	6) ctrl+b : 이전 화면으로 이동
	7) ^ : 현재 행의 처음으로 이동
	8) $ : 현재 행의 마지막으로 이동
	9) gg : 제일 첫 행으로 이동
	10) G : 제일 끝 행으로 이동
	11) 숫자 + G : 해당 숫자의 행으로 이동
	12) :+숫자+enter :해당 숫자의 행으로 이동
3. 삭제,복사,붙여넣기 등
	1) x : 현재 커서가 위치한 글자 삭제
	2) X : 현재 커서가 위치한 앞 글자 삭제
	3) dd : 현재 커서의 행 삭제
	4) 숫자 + dd : 현재 커서부터 숫자만큼의 행 삭제
	5) yy : 현재 커서가 있는 행을 복사
	6) 숫자 + yy : 현재 커서부터 숫자만큼의 행을 복사
	7) p : 복사한 내용을 현재 행 이후에 붙여 넣기
	8) P : 복사한 내용을 현재 행 이전에 붙여 넣기
4. 문자열 찾기
	1) /+문자열+enter : 현재 커서 이후의 해당 문자열을 찾음
	2) n : 찾은 문자 중에서 다음 문자로 이동
5. 행 번호 표시 : :+set number+enter
6. 문자열 치환 : :+%s/기존문자열/변경할문자열
```

* 도움말 사용법

```shell
~]# man 섹션 명령어
1) 섹션 : 1-9까지 9개 페이지로 나뉜다. 섹션 번호를 지정하지 않으면 1번부터 9번까지 섹션을 차례로 검색해 가장 먼저 나오는 도움말을 출력해준다
2) 섹션 종류
	(1) 1 : 명령어
	(2) 2 : 프로그래밍
	(3) 3 : 프로그래밍
	(4) 4 : 디바이스
	(5) 5 : 파일 형식
	(6) 6 : 게임
	(7) 7 : 기타 주제
	(8) 8 : 시스템 관리
	(9) 9 : 커널 관련 설명
```

* 마운트(mount) : 물리적인 장치를 특정한 위치에 연결시켜 주는 과정

```shell
1. 마운트 확인 : ~]# mount
2. 마운트 해제 : ~]# umount 대상
```

* ISO 파일 생성

```shell
1. genisoimage 패키지 설치 확인 : ~]# rpm -qa genisoimage
2. iso 파일 생성 
	1) 명령어 : ~]# genisoimage -r -J -o 생성될ISO파일이름 포함될파일또는디렉터리
	2) 옵션
		(1) -r -J : 8글자 이상의 파일 이름 및 대소문자를 구분해서 인식
		(2) -o : 출력할 파일을 위한 옵션
```

