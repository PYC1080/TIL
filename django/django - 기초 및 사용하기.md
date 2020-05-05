# django - 기초 및 사용하기

## 0. django?

### 1) django?

```
파이썬으로 작성된 오픈 소스 웹 애플리케이션 프레임워크. MVC 패턴에 따라 컴포넌트의 재사용성과 플러그인화, 기능성, 빠른 개발 등을 강조하여 중복 배제 원리를 따랐다.
```

### 2) django dev-env

```
django를 로컬 컴퓨터에 설치하여 애플리케이션을 개발, 실행 및 테스트 할 수 있는 환경을 말한다.
```

### 3) django setup option

```
1. 여러 운영 체제에서 설치가 가능하다
2. 소스 및 PyPi에서 패키지 매니저 애플리케이션 설치가 가능하다
3. 여러가지 DB 중 하나를 사용하도록 설정할 수 있다
4. 메인 시스템의 파이썬 환경 똔느 별도의 파이썬 가상 환경에서 실행된다
```

### 4) djanog default tools

```
1. djanog 프로젝트를 생성하고 작업하기 위한 파이썬 스크립트와 개발용 웹 서버가 있다.

2. 코드 작성을 돕는 텍스트 에디터

3. IDE

4. 소스 관리 도구 : git
```

## 1. 가상 환경

> window 환경

### 1)  가상 환경 설정 : [virtualenvwrapper-win](https://pypi.python.org/pypi/virtualenvwrapper-win) 

```powershell
E:\programs\django> pip3 install virtualenvwrapper-win

기본값이 있어 가상 환경 정보를 어디에 저장해야 하는지 설정할 필요가 없다.
```

### 2) 가상 환경 생성

```powershell
E:\programs\django>mkvirtualenv django_test

 C:\Users\pyc\Envs is not a directory, creating
created virtual environment CPython3.7.7.final.0-32 in 2271ms
  creator CPython3Windows(dest=C:\Users\pyc\Envs\django_test, clear=False, global=False)
  seeder FromAppData(download=False, pip=latest, setuptools=latest, wheel=latest, via=copy, app_data_dir=C:\Users\pyc\AppData\Local\pypa\virtualenv\seed-app-data\v1.0.1)
  activators BashActivator,BatchActivator,FishActivator,PowerShellActivator,PythonActivator,XonshActivator
  
// 가상 환경이 생성된 경우 아래와 같이 표현된다.
(django_test) E:\programs\django>
```

### 3) 가상 환경 사용하기

```
1. deactivate : 활성화된 파이썬 가상 환경을 비활성화한다
2. workon : 사용가능한 가상 환경 목록을 보여준다
3. workon name_of_environment : 특정 파이썬 가상 환경을 활성화한다
4. rmvirtualenv name_of_environment : 특정 환경을 제거한다
```



## 2. django 설치

* django 설치

```powershell
(django_test) E:\programs\django>pip3 install django
Collecting django
...
```

* django 설치 확인

```powershell
(django_test) E:\programs\django>py -m django --version
3.0.6
```

## 3. django 프로젝트 생성 및 동작 확인

* 테스트 용 폴더 생성

```
(django_test) E:\programs\django>mkdir django_test
(django_test) E:\programs\django>cd django_test
```

* 사이트 기본 토대 생성

```powershell
(django_test) E:\programs\django\django_test>django-admin startproject mytestsite

//해당 폴더로 가면 프로젝트를 관리할 수 있는 manage.py라는 메인 스크립트 파일이 생성된 것을 확인할 수 있다.
```

* 개발용 웹서버 실행

```powershell
(django_test) E:\programs\django\django_test\mytestsite>py manage.py runserver
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).

You have 17 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
May 05, 2020 - 10:10:51
Django version 3.0.6, using settings 'mytestsite.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
[05/May/2020 10:11:32] "GET / HTTP/1.1" 200 16351
[05/May/2020 10:11:32] "GET /static/admin/css/fonts.css HTTP/1.1" 200 423
[05/May/2020 10:11:32] "GET /static/admin/fonts/Roboto-Bold-webfont.woff HTTP/1.1" 200 86184
[05/May/2020 10:11:32] "GET /static/admin/fonts/Roboto-Regular-webfont.woff HTTP/1.1" 200 85876
[05/May/2020 10:11:32] "GET /static/admin/fonts/Roboto-Light-webfont.woff HTTP/1.1" 200 85692
Not Found: /favicon.ico
[05/May/2020 10:11:32] "GET /favicon.ico HTTP/1.1" 404 1976
```

## 4. 결과

<img width="960" alt="0505_django메인화면" src="https://user-images.githubusercontent.com/55272324/81029476-12e3b780-8ec0-11ea-9f73-7ee30be9c78f.PNG">





