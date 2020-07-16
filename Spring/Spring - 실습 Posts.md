# Spring - 실습 Posts

## 0.  Project Guide line

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

mapping의 path가 중복되서 생기는 문제, 중복된 path를 해결하기 위해 path의 변동값에 정규표현식을 사용해 해당 문제는 해결했다. 하지만 method 오류가 발생하는 것으로 보아 data 값을 불러오지 못하는 것으로 보인다.
```



## 2. create table

```powershell
MariaDB [springboot]> create table posts( id int(10) auto_increment primary key, user_id varchar(20) not null, title varchar(100) not null, contents text, del_yn tinyint default 0, createdAt datetime default now());
```

## 3. service, mapper, repository

### 1) Controller

* .../java/.../Controller/PostsController.class

```java
package com.example.project0508.controller;

import com.example.project0508.entity.Posts;
import com.example.project0508.exception.PostNotFounException;
import com.example.project0508.service.PostsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostsController {
    @Autowired
    PostsService service;

    @GetMapping(value = "/posts")
    public List<Posts> getAllPosts(){
        List<Posts> list = service.getAllPosts();
        return list;
    }
    /*
    * @GetMapping(value = "/posts/sbi/{user_id}")
    public List<Posts> getPostsByUserId(@Pathvariable(value = "user_id") String user_id)
    * */
    @GetMapping(value = "/posts/sbi/{user_id}")
    public List<Posts> getPostsByUserId(@PathVariable(value = "user_id") String user_id){
        List<Posts> list = service.getPostsByUserId(user_id);
        if(list == null){
            throw new PostNotFounException(user_id);
        }
        return list;
    }

    @GetMapping(value ="/posts/sbt/{title}")
    public List<Posts> getPostsByTitle(@PathVariable(value = "title") String title){
        List<Posts> list = service.getPostsByTitle(title);
        if(list == null){
            throw new PostNotFounException(title);
        }
        return list;
    }

    @PostMapping(value = "/posts")
    public Boolean createPosts(@RequestBody Posts posts){
        if(posts != null){
            service.createPosts(posts);
            return Boolean.TRUE;
        } else{
            return Boolean.FALSE;
        }
    }

    @DeleteMapping(value = "/posts/{id}")
    public int removePosts(@PathVariable("id") int id){
        int post = service.removePosts(id);
        if(post == 0){
            post = 1;
            return post;
        } else {
            post = 0;
            return post;
        }
    }

}

```

### 2 ) Entity

* .../java/.../entity/Posts.class

```java
package com.example.project0508.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Posts {
    private int id;
    private String user_id;
    private String contents;
    private String title;
    private int del_yn;
    private Date createdAt;

    public Posts(int id, String user_id, String contents, String title) {
        this.id = id;
        this.user_id = user_id;
        this.contents = contents;
        this.title = title;
    }
}

```

### 3) Exception

* .../java/.../exception/PostNotFounException.class

```java
package com.example.project0508.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class PostNotFounException extends RuntimeException {
    public PostNotFounException(String message){
        super(message);
    }
}

```

### 4) repository

* .../java/.../repository/PostsMapper.interface

```java
package com.example.project0508.repository;

import com.example.project0508.entity.Posts;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface PostsMapper {
    List<Posts> selectAllPosts();
    List<Posts> selectPostsByUserId(String user_id);
    List<Posts> selectPostsByTitle(String title);
    int insertPosts(Posts posts);
    int deletePosts(int id);
}

```

### 5) Service

* .../java/.../service/PostsService.interface

```java
package com.example.project0508.service;

import com.example.project0508.entity.Posts;
import org.springframework.stereotype.Service;

import java.util.List;


public interface PostsService{
    // 게시물 전체 목록 보기
    List<Posts> getAllPosts();
    // 사용자별 목록 보기
    List<Posts> getPostsByUserId(String user_id);
    // 게시물 상세보기
    List<Posts> getPostsByTitle(String title);
    // 게시물 추가
    int createPosts(Posts posts);
    // 게시물 삭제
    int removePosts(int id);
}

```

* .../java/.../PostsServiceImpl

```java
package com.example.project0508.service;

import com.example.project0508.entity.Posts;
import com.example.project0508.repository.PostsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostsServiceImpl implements PostsService{
    @Autowired
    PostsMapper mapper;

    @Override
    public List<Posts> getAllPosts() {
        return mapper.selectAllPosts();
    }

    @Override
    public List<Posts> getPostsByUserId(String user_id) {
        return mapper.selectPostsByUserId(user_id);
    }

    @Override
    public List<Posts> getPostsByTitle(String title) {
        return mapper.selectPostsByTitle(title);
    }

    @Override
    public int createPosts(Posts posts) {
        return mapper.insertPosts(posts);
    }

    @Override
    public int removePosts(int id) {
        return mapper.deletePosts(id);
    }
}
```

### 6) mapper

* .../resources/mapper/postMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.example.project0508.repository.PostsMapper">
    <select id="selectAllPosts"
            resultType="com.example.project0508.entity.Posts">
        select id, user_id, title, contents, del_yn, createdAt from posts
        order by id desc
    </select>
    <select id="selectPostsByUserId"
            resultType="com.example.project0508.entity.Posts">
        select id, user_id, title, contents, del_yn, createdAt from posts
        where user_id=#{id}
        order by id desc
    </select>
    <select id="selectPostsByTitle"
            resultType="com.example.project0508.entity.Posts">
        select id, user_id, title, contents, createdAt from posts
        where title=#{id}
        order by id desc
    </select>
    <insert id="insertPosts"
            parameterType="com.example.project0508.entity.Posts">
        insert into posts(id, user_id, title, contents) values(#{id},#{user_id},#{title},#{contents})
    </insert>
    <delete id="deletePosts"
            parameterType="int">
        delete from posts where del_yn=#{del_yn}
    </delete>
</mapper>
```

### 7) yml

* .../resources/application.yml

```yaml
server:
  port: 9990

spring:
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/springboot?serverTimezone=Asia/Seoul
    username: root
    password: mysql
    driver-class-name: com.mysql.cj.jdbc.Driver
mybatis:
  type-aliases-package: com.example.project0508.entity
  mapper-locations: mapper/**/*.xml

```

## 4. 결과 

