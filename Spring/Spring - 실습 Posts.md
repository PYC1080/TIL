# Spring - 실습 Posts

## 0.

### 1) Instructor

```
** 게시판 포스팅
1. Post entity
2. table
create talbe posts()
	1) id int auto_increment primary key,
	2) user_id varchar(20) not null,
	3) title varchar(100) not null,
	4) contents text,
	5) del_yn tinyint default 0(0:not deleted,1 :deleted),
	6) createdAt datetime
	
3. service, repository, mapper
	1) service
		(1) 게시물 추가
		(2) 전체 목록
		(3) 사용자별 목록
		(4) 게시물 상세보기
		(5) 게시물 삭제
4. mapper.xml

```

### 2) 문제

```
1. Ambiguous handler methods mapped for
```



## 2. create table

```powershell
MariaDB [springboot]> create table posts( id int(10) auto_increment primary key, user_id varchar(20) not null, title varchar(100) not null, contents text, del_yn tinyint default 0, createdAt datetime default now());
```

## 3. service, mapper, repository

