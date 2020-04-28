# Spring Boot 실습 - Web application project 

## 0. 설정 및 목표

### 1) 설정

```
1. Start Spring
	1) Boot version : 2.1
	2) Java
	3) groupid, artifactid는 소문자로 작성
	4) Maven
	5) web dependcy만 추가 할 것, 추후 필요한 dependency는 검색해서 추가할 것
	
2. Devtools 의존성 추가
```

### 2) 목표

```
1. Spring Boot project start 
	1) http://start.spring.io
	2) zip 파일 생성 후 unzip 한 후 file open 할 것

2. DB 연결
	1) Maria db / h2 memroydb / mysql 중 취사선택 : 포트번호 취사선택
	2) DatabaseRunner 클래스 : DataSource 사용해서 connection url과 username
	3) Spring Boot JDBC 의존성이 추가되어야 한다.

3. ORM : JPA, MyBatis는 편한것으로 선택 할 것
	1) JPA 선택
		(1) spring boot data jpa 의존성 필요함
		(2) JPA 관련 설정하고 table 생성여부와 구조를 확인
		spring.jpa.hibernate.ddl-auto=update
		spring.jpa.show-sql=true
		(3) Entity class 작성 : table 1개와 매핑되로록 할 것, 
		@Entity, @Id, @generatedValue, @Column(컬럼 중 하나는 unique 컬럼이 되도록 할 것)
		(4) Repository interface
		findById()는 자동 생성된다.
		PK 이외의 column에 대한 finder metho를 생성할 수 있다 : 		findByUsername / findByEmail
		(5) TestCase 클래스 작성 : 등록 및 조회
		
4. Rest 서비스 작성
	1) RestController 클래스 작성
		(1) 등록 수정 삭제 조회
		(2) 기본 format Json
	2) 테스트 : PostMan 툴을 사용한 테스트
	3) XML format으로 조회 구현 : Jackson 관련 dependencies 추가 할 것
	4) Controller 클래스 작성
		(1) Thymeleaf dependencies 추가
		(2) 등록 수정 삭제 조회 
		(3) static/index.html 작성
		(4) templates/*.html 작성
	5) Exception 처리
		(1) System Error
		(2) Custom Exception 처리 
```



## 1. start spring boot project

```
1. spring intializer
	1) Project : Maven project
	2) Language : Java
	3) Spring Boot : 2.1.13
	4) Project Metadata
		(1) Group : com.pyc
		(2) Artifact : springproject
		(3) Name : springproject
		(4) Description : srpingproject
		(5) Package name : com.pyc.springproject
		(6) Packaging : Jar
		(7) Java : 8
	5) Dependencies
		(1) Spring Web

2. Generate

3. Unzip

4. File - open project from file system
```

## 2. DB 연결

### 1) Devtools

```
.../pom.xml

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
</dependency>
```

### 2) DB dependencies & Port

* port

```
.../src/main/resources/application.properties

server.port=8010
```

* DB

```
1. pom.xml에 디펜던시 추가
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.13</version>
</dependency>

2. application.properties 추가
spring.datasource.url=jdbc:mysql://127.0.0.1:3306/spring_db?useUnicode=true&charaterEncoding=utf-8&useSSL=false&serverTimezone=UTC
spring.datasource.username=project
spring.datasource.password=project
spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver
```

### 3) DatabaseRunner class

* h2 database & spring-jdbc dependencies 추가

```
pom.xml

dependency>
 <groupId>com.h2database</groupId>
 <artifactId>h2</artifactId>
 <scope>runtime</scope>
</dependency>
<dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>

application.properties

#H2 console
spring.h2.console.enabled=true
```

* DatabaseRunner.java

```
1. 코드

package com.pyc.springproject.runner;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.Statement;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class DatabaseRunner implements ApplicationRunner{
	@Autowired
	DataSource dataSource;
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Override
	public void run(ApplicationArguments args) throws Exception {
		// TODO Auto-generated method stub
		try(Connection connection = dataSource.getConnection() ){
			DatabaseMetaData metaData = connection.getMetaData();
			System.out.println("URL = "+metaData.getURL());
			System.out.println("User = "+metaData.getUserName());
			System.out.println("DataSource Class Name = " +dataSource.getClass().getName());
			String sql = "CREATE TABLE CUSTOMER (ID INTEGER NOT NULL, name VARCHAR(255),PRIMARY\r\n" + "KEY (id))";
			Statement statement = connection.createStatement();
			statement.executeUpdate(sql);
			jdbcTemplate.execute("insert into customer values (1,'spring')");
		}
	}	
	
}

2. Run
...
URL = jdbc:mysql://127.0.0.1:3306/spring_db?useUnicode=true&charaterEncoding=utf-8&useSSL=false&serverTimezone=UTC
User = spring@localhost
DataSource Class Name = com.zaxxer.hikari.HikariDataSource
```

* MySQl Database 생성

```
1. MariaDB [(none)]> use mysql;

2. MariaDB [mysql]> create user project@localhost identified by'project';

3. MariaDB [mysql]> grant all on *.* to project@localhost;

4. MariaDB [mysql]> flush privileges;

5. MariaDB [mysql]> exit;

6. E:\programs\mariadb\bin>mysql -u project -p
Enter password: *******

7. MariaDB [(none)]> create database project_db;

8. MariaDB [(none)]>  show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| project_db         |
| spring_db          |
| test               |
+--------------------+
6 rows in set (0.011 sec)

9. mariaDB [(none)]> use project_db;
Database changed
```

* 입력한 데이터 확인

```
MariaDB [project_db]> show tables;
+----------------------+
| Tables_in_project_db |
+----------------------+
| projectuser          |
+----------------------+
1 row in set (0.009 sec)

MariaDB [project_db]> select * from projectuser;
+----+---------+
| ID | name    |
+----+---------+
|  1 | project |
+----+---------+
1 row in set (0.004 sec
```

## 3. ORM

### 1) JPA 설정 및 table 생성

* JPA 설정

```
1. pom.xml에 JPA 디펜던시 추가

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

2. application.propertie에 JPA를 사용한 데이터베이스 초기화 설정

spring.jpa.hibernate.ddl-auto=create
spring.jpa.show-sql=true
```

### 2) Entity class

```
.../src/main/java/com/pyc/springproject/entity/Account.java

package com.pyc.springproject.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Account {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(unique=true)
	private String username;
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}

	@Override
	public String toString() {
		return "Account [id=" + id + ", username=" + username + ", password=" + password + ", email=" + email + "]";
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Account other = (Account) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}

	@Column
	private String password;
	
	@Column
	private String email;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}

```

### 3) Repository Interface

```
.../src/main/java/com/pyc/springproject/repository/AccountRepository.java

package com.pyc.springproject.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pyc.springproject.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
	Optional<Account> findByUsername(String username);
	Optional<Account> findByEmail(String email);
}
```

### 4) JPA test

```
...src/test/java/com/pyc/springproject/repository/AccountRepositorytest.java

package com.pyc.springproject.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.pyc.springproject.entity.Account;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AccountRepositoryTest {

		@Autowired
		AccountRepository repository;
		
		Optional<Account> existOpt = repository.findByUsername("project");
		
		@Test
		public void account() throws Exception {
			// TODO Auto-generated method stub
			Account account = new Account();
			account.setUsername("test1");
			account.setPassword("test1");
			
			Account saveAcct = repository.save(account);
			System.out.println(saveAcct);
			assertThat(saveAcct).isNotNull();
		}
}
```

## 4.  Rest service

### 1) Rest service 

* User.java

```
package com.pyc.springproject.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;

@Entity
public class User implements Serializable{

	private static final long serialVersionUID=1L;
	
	@Id
	@GeneratedValue
	private Long id;
	
	@Column
	@NotBlank(message = "반드시 이름은 입력해야합니다")
	private String name;
	
	@Column(unique =true)
	@NotBlank(message = "반드시 이메일은 입력해야합니다")
	private String email;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + "]";
	}
}

```

* Users.java

```
package com.pyc.springproject.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;


@JacksonXmlRootElement
public class Users implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@JacksonXmlProperty(localName="User")
	@JacksonXmlElementWrapper(useWrapping=false)
	private List<User> users = new ArrayList<>();

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

}

```

* UserRepository.java

```
package com.pyc.springproject.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pyc.springproject.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByName(String name);
	Optional<User> findByEmail(String email);
}

```

### 2) Test : Postman

* static/index.html

```
...src/main/resources/index.html

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>Welcome Spring Boot!!</h2>
	<a href="index">Index</a>
	<h2><a href="index"></a></h2>
</body>
</html>
```

* add-user.html

```
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>Welcome Spring Boot!!</h2>
	<a href="leaf">Thymeleaf</a>
	<a href="index">Index</a>
	<h2><a href="index"></a></h2>
</body>
</html>
```

* templates/index.html

```
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h3>사용자 리스트</h3>
	<table>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Edit</th>
			<th>Delete</th>
		</tr>
		<tr th:each="user:${users}">
			<td th:text="${user.name}"></td>
			<td th:text="${user.email}"></td>
			<td><a th:href="@{/edit/{id}(id=${user.id})}">Update</a></td>
			<td><a th:href="@{/delete/{id}(id=${user.id})}">Delete</a></td>
		</tr>
	</table>
	<hr/>
	<a href="/signup">insert</a>
</body>
</html>
```

* update-user.html

```
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h3>User Update Form</h3>
	<form action="#" th:action="@{/edituser/{id}(id=${user.id})}" th:object="${user}" method="post">
		<label for="name">Name : </label>
		<input type="text" th:field="*{name}" id="name">
		<span th:if="${#fields.hasErrors('name')}" th:errors="*{name}"></span>
		<br/>
		<label for="email">Email : </label>
		<input type="text" th:field="*{email}" id="email">
		<span th:if="${#fields.hasErrors('email')}" th:errors="*{email}"></span>
		<br/>
		<input type="submit" value="Update User">
	</form>
</body>
</html>
```

### 3) XML format 조회 기능 추가

* Jackson dependencies 추가

```
pom.xml

<dependency>
 <groupId>com.fasterxml.jackson.dataformat</groupId>
 <artifactId>jackson-dataformat-xml</artifactId>
 <version>2.9.6</version>
</dependency
```

* User.java에 어노테이션 추가

```
@JacksonXmlProperty(isAttribute = true)
private Long id;

@JacksonXmlProperty
private String email;

@JacksonXmlProperty
private String name;
```

### 4) Controller class

* Thymeleaf 의존성 추가

```
<dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

* UserRestController.java

```
package com.pyc.springproject.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pyc.springproject.entity.User;
import com.pyc.springproject.entity.Users;
import com.pyc.springproject.exception.ResourceNotFoundException;
import com.pyc.springproject.repository.UserRepository;

@RestController
public class UserRestaController {

		@Autowired
		private UserRepository repository;
		
		@PostMapping("/users")
		public User create(@RequestBody User user) {
			return repository.save(user);
		}
		
		@GetMapping(value="/users", produces= {"application/json"})
		public List<User> getUsers(){
			return repository.findAll();
		}
		
		@GetMapping("/users/{id}")
		public User getUser(@PathVariable Long id) {
			Optional<User> userOpt = repository.findById(id);
			User user =userOpt.orElseThrow(()-> new ResourceNotFoundException("User", "id", id));
			return user;
		}
		@DeleteMapping("/users/{id}")
		public ResponseEntity<String> deleteUser(@PathVariable Long id){
			User user = repository.findById(id).orElseThrow(()->new ResourceNotFoundException("User", "Id", id));
			repository.delete(user);
			return new ResponseEntity(user.getId() +" is deleted ",HttpStatus.OK);
		}
		
		@GetMapping(value="/usersxml", produces= {"application/xml"})
		public Users getUsersXml(){
			Users users = new Users();
			users.setUsers(repository.findAll());
			return users;
		}
}
```

* AccountRestController.java

````
package com.pyc.springproject.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.pyc.springproject.entity.Account;
import com.pyc.springproject.exception.AccountResourceNotFoundException;
import com.pyc.springproject.repository.AccountRepository;

@RestController
public class AccountRestController {

	@Autowired
	private AccountRepository repository;
	
	@PostMapping("/accounts")
	public Account create(@RequestBody Account account) {
		return repository.save(account);
	}
	
	@GetMapping("/accounts/{id}")
	public Account getAccount(@PathVariable Long id) {
		Optional<Account> accountOpt = repository.findById(id);
		Account account = accountOpt.orElseThrow(()->new AccountResourceNotFoundException("Account", "id", id)); 
		return account;
	}
	
	@PutMapping("/accounts/{id}")
	public Account updateAccount(@PathVariable Long id, @RequestBody Account accountDetail) {
		Account account = repository.findById(id).orElseThrow(()->new AccountResourceNotFoundException("Account", "Id", id));
		account.setUsername(accountDetail.getUsername());
		account.setEmail(accountDetail.getEmail());
		Account updateAccount = repository.save(account);
		return updateAccount;
	}
	
	@DeleteMapping("/accounts/{id}")
	public ResponseEntity<String> deleteAccount(@PathVariable Long id){
		Account account = repository.findById(id).orElseThrow(()->new AccountResourceNotFoundException("Account", "Id", id));
		repository.delete(account);
		return new ResponseEntity(account.getUsername() +" is Deleted",HttpStatus.OK);
	}
}
````

* UserController.java

```
package com.pyc.springproject.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.pyc.springproject.entity.User;
import com.pyc.springproject.exception.CustomException;
import com.pyc.springproject.exception.ResourceNotFoundException;
import com.pyc.springproject.repository.UserRepository;

@Controller
public class UserController {

		@Autowired
		private UserRepository userRepository;
		

		@ExceptionHandler(Exception.class)
		public ModelAndView handleException(Exception ex) {
			return new ModelAndView("error/generic_error","errMsg", ex.getMessage());
		}
		
		@ExceptionHandler(CustomException.class)
		public ModelAndView handleCustomException(CustomException ex) {
			ModelAndView model = new ModelAndView("error/generic_error");
			model.addObject("errCode", ex.getErrCode());
			model.addObject("errMsg", ex.getErrMsg());
			return model;
		}
		
		@GetMapping("/delete/{id}")
		public String deleteUser(@PathVariable long id) {
			//User user = userRepository.findById(id).orElseThrow(() -> new ResouceNotFoundException("User", "id", id));
			User user = userRepository.findById(id).orElseThrow(()-> new CustomException("E001", String.format("요청하신 Id %s 가 존재하지 않습니다!", id)));
			userRepository.delete(user);
			return "redirect:/index";
		}
		
		@GetMapping("/edit/{id}")
		public ModelAndView showUpdateForm(@PathVariable long id) {
			//id가 먼저 있는지 파악하고 없는 경우 오류를 발생하는 코드 
			User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
			//User user = userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("User","id",id));
			return new ModelAndView("update-user","user",user);
		}
		
		
		@PostMapping("/edituser/{id}")
		public String updateUser(@PathVariable long id, @Valid User user, BindingResult result) {
			if(result.hasErrors()) {
				//오류 발생시 수정하려고 하는 id로 돌아가야 하므로 해당 설정을 추가한다.
				user.setId(id);
				return "update-user";
			}
			userRepository.save(user);
			return"redirect:/index";
		}
		
		@GetMapping("/signup")
		public String showSignupForm(User user) {
			return"add-user";
		}
		@PostMapping("/adduser")
		public String addUser(@Valid User user, BindingResult result){
			if(result.hasErrors()) {
				return"add-user";
			}
			userRepository.save(user);
			return "redirect:/index";
		}
		@GetMapping("/index")
		public String index(Model model) {
			model.addAttribute("users", userRepository.findAll());
			return "index";
		}
		
		
		@GetMapping("/leaf")
		public ModelAndView leaf() {
			return new ModelAndView("leaf", "name", "weclome thymeleaf");
		}
}
```



### 5) 예외처리

* ResourceNotFoundException.java

```
package com.pyc.springproject.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
	private String resourceName;
	private String fieldName;
	private Object fieldValue;
	
	public ResourceNotFoundException(String resourceName, String fieldName, Object fieldValue) {
		// TODO Auto-generated constructor stub
		
		super(String.format("%s not found with %s : %s", resourceName, fieldName, fieldValue));
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
	}

	public String getResourceName() {
		return resourceName;
	}

	public String getFieldName() {
		return fieldName;
	}

	public Object getFieldValue() {
		return fieldValue;
	}
}
```

* AccountResourceNotFoundException.java

```
package com.pyc.springproject.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class AccountResourceNotFoundException extends RuntimeException{
	private String resourceName;
	private String fieldName;
	private Object fieldValue;
	
	public AccountResourceNotFoundException(String resourceName, String fieldName, Object fieldValue) {
		super(String.format("%s not found with %s : %s", resourceName,fieldName,fieldValue));
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
	}
	public String getResourceName() {
		return resourceName;
	}
	public String getFieldName() {
		return fieldName;
	}
	public Object getFieldValue() {
		return fieldValue;
	}
}
```

* CustomException.java

```
package com.pyc.springproject.exception;

public class CustomException extends RuntimeException {

		private String errCode;
		private String errMsg;
		public CustomException(String errCode, String errMsg) {
			// TODO Auto-generated constructor stub
			super();
			this.errCode=errCode;
			this.errMsg=errMsg;
		}
		public String getErrCode() {
			return errCode;
		}
		public String getErrMsg() {
			return errMsg;
		}
}
```

* static/error/*.html

```
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>시스템에러가 발생했습니다. 관리자에게 문의하세요!</h2>
</body>
</html>
```

* templates/error/generic_error.html

```
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>Error Page</h2>

	<div th:if="!${#strings.isEmpty(errCode)}">
		<h5>Error Code : <span th:text="${errCode}"></span></h5>
	</div>

	<div th:if="${#strings.isEmpty(errCode)}">
		<h5>System errors :</h5>
	</div>

	<div>
		<span th:text="${errMsg}"></span>
	</div>
</body>
</html>
```

## 5. 결과

### 1) MariaDB

* tables

<img width="285" alt="show tables" src="https://user-images.githubusercontent.com/55272324/80465314-fb637680-8975-11ea-880e-d7bdb7a07feb.PNG">

* data

  <img width="203" alt="result mariadb1" src="https://user-images.githubusercontent.com/55272324/80465050-a45da180-8975-11ea-9f63-2baa3d0e3fba.PNG" style="zoom:200%;">

<img width="175" alt="result mariadb2" src="https://user-images.githubusercontent.com/55272324/80465046-a3c50b00-8975-11ea-8855-376deeda9e19.PNG" style="zoom:200%;" >

### 2) PostMan

* POST

<img width="476" alt="result post2" src="https://user-images.githubusercontent.com/55272324/80465682-690fa280-8976-11ea-9af1-5619f377820d.PNG">

* GET



* PUT



* DELETE



### 3) Thymeleaf

* index.html

<img width="726" alt="result tl1" src="https://user-images.githubusercontent.com/55272324/80465503-2a79e800-8976-11ea-990d-2865cbb01486.PNG">

* List

<img width="604" alt="result tl2" src="https://user-images.githubusercontent.com/55272324/80465533-336ab980-8976-11ea-8457-d5462b733175.PNG">

* update

<img width="572" alt="result tl3" src="https://user-images.githubusercontent.com/55272324/80465563-3b2a5e00-8976-11ea-8a9d-7fd35fadeb7a.PNG">

<img width="587" alt="result tl4" src="https://user-images.githubusercontent.com/55272324/80465591-43829900-8976-11ea-94d5-6ddec6fc5dde.PNG">

* delete

<img width="585" alt="result tl5" src="https://user-images.githubusercontent.com/55272324/80465607-4aa9a700-8976-11ea-8a06-c0e24f5e85c3.PNG">



* insert

<img width="568" alt="result tl6" src="https://user-images.githubusercontent.com/55272324/80465646-572dff80-8976-11ea-8ea8-bfcc58a070b4.PNG">

<img width="589" alt="result tl7" src="https://user-images.githubusercontent.com/55272324/80465650-585f2c80-8976-11ea-9576-a92e41278127.PNG">