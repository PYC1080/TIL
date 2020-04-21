# JDBC - 기초

## 1. JDBC 개요

```
1. JDBC, Java DataBase Connectivity : 자바 언어에서 DB에 접근할 수 있게 해주는 Programming API

2. 특징
	1) 인터페이스 구현은 DB vendor가 한다
```

## 2. JDBC coding 절차

```
1. DRiver 등록 : Class.forname("")

2. DBMS와 연결 : Connection 변수이름1 = DriverManager.getConnection(url, user, pass);

3. Statement 생성 : Statement 변수이름2 = 변수이름1.createStatement();

4. SQL 전송 및 결과 리턴
	1) 조회 : ResultSet 변수이름3 = 변수이름2.executeQuery("select * from users") 
	2) 등록 갱신 삭제 : int 변수이름4 = 변수이름2.excuteUpdate("Insert into users values()")

5. 클로즈 : 변수이름1,2,3.close();
```

## 3. SELECT 및 UPDATE

### 1) Select 예시

```
package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import jdbc.user.vo.UserVO;

public class UsersSelect {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// 1. Driver class loading
		try {
			Class.forName("oracle.jdbc.OracleDriver");
			System.out.println("Driver Loading");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		String url = "jdbc:oracle:thin:@127.0.0.1:1521:xe";
		String user = "scott";
		String pass = "tiger";
		String sql = "select * from users";
		
		try {
			//2. Connection 생성
			con = DriverManager.getConnection(url,user,pass);
			System.out.println("Connection : " +con);
			
			//3. Statement 생성
			stmt = con.createStatement();
			System.out.println("Statement : "+ stmt);
			
			//4. SQL문 실행
			rs = stmt.executeQuery(sql);
			System.out.println("ResultSet : "+rs);
			
			UserVO userVO = null;
			List<UserVO> userList = new ArrayList<>();
			
			//5. Query 결과값 처리
			while(rs.next()) {
				String userid = rs.getString("userid");
				String name = rs.getString("name");
				char gender = rs.getString("gender").charAt(0);
				String city = rs.getString("city");
				
				userVO = new UserVO(userid,name,gender,city);
				
				System.out.println("---------------------------------------------"
						+ "");
				System.out.println(userVO);
				System.out.println("UserId : "+userid);
				System.out.println("Name : "+name);
				System.out.println("Gender : "+gender);
				System.out.println("city : "+ city);
			}
			
			for (UserVO users : userList) {
				System.out.println(users);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				if(stmt != null)stmt.close();
				if(con != null) con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		
	}

}

```

### 2) Insert예시

```
package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UsersInsert {
	String url = "jdbc:oracle:thin:@192.168.2.30:1521:xe";
	String user = "hr";
	String pass = "hr";
	
	public UsersInsert() {
		//1. Driver class loading
		try {
			Class.forName("oracle.jdbc.OracleDriver");
			System.out.println("Driver loading OK!!");
		} catch (ClassNotFoundException e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
		}
	}
	
	public Connection getConnection() throws SQLException {
		return DriverManager.getConnection(url, user, pass);
	}
	
	
	public static void main(String[] args) {
		UsersInsert users = new UsersInsert();
		Connection con = null;
		PreparedStatement stmt = null;
		String sql = "insert into users values (?,?,?,?)";
		try {
			con = users.getConnection();
			stmt = con.prepareStatement(sql);
			//?에 등록할 값을 넣어주기
			stmt.setString(1, "vega2k");
			stmt.setString(2, "백명숙");
			stmt.setString(3, "여");
			stmt.setString(4, "서울");
			int cnt = stmt.executeUpdate();
			System.out.println("등록된 건수 : " + cnt);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				stmt.close();
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
	}

}
```

### 3) Update 예시

```
package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

public class UserUpdate {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		String sql = "update users set name=\'gildong\', gender=\'여\',city=\'부산\'where userid=\'gildong\';";
		String sql = "update users set name=?, gender=?,city=? where userid=?";
			
		//1. Driver Class Loading
		try {
			Class.forName("oracle.jdbc.OracleDriver");
			System.out.println("Driver Loading");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		Connection con = null;
		PreparedStatement stmt = null;
		
		String url = "jdbc:oracle:thin:@127.0.0.1:1521:xe";
		String user = "scott";
		String pass = "tiger";
		
		try {
			con = DriverManager.getConnection(url,user,pass);
			stmt = con.prepareStatement(sql);
			stmt.setString(1, "MyBatis"); //name
			stmt.setString(2, "여"); // gender
			stmt.setString(3, "경기"); //city
			stmt.setString(4, "gildong"); //
			
			
			int cnt = stmt.executeUpdate();
			System.out.println("갱신된 건수  : "+cnt);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				if(stmt != null)stmt.close();
				if(con != null) con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}

}

```

## 4. Statement 및 PreparedStatement

```
1. statement
	1) 장점 : 원하는 Query문을 직접 넣어주기 때문에 직관적이고 사용하기 쉽다
	2) 단점 : 실행시마다 sQL문을 해석하므로 오버헤드가 크다
	
2. PreparedStatement
	1) 장점 : 같은 Query를 반복 수행해야 하는 경우 성능이 좋다
	2) 단점 : 코드가 길어질 수 있다
	
```

