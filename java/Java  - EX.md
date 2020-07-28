# Java  - EX

## 1. 클래스 및 메서드 작성

### 1) 문제

### 2)  정답 코드

```java
package workshop.calculator;

import java.util.Scanner;

public class Calculator {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Calculator cal = new Calculator();
		double a,b;
		Scanner sc = new Scanner(System.in);
		System.out.println("a 값 : ");
		a = sc.nextDouble();
		System.out.println("b 값 : ");
		b = sc.nextDouble();
		System.out.println(cal.add(a,b));
		System.out.println(cal.mean(a,b));
		System.out.println(cal.multiply(a,b));
		System.out.println(cal.mod(a, b));
	}

	private double mod(double a, double b) {
		// TODO Auto-generated method stub
		return a%b;
	}

	private double multiply(double a, double b) {
		// TODO Auto-generated method stub
		return a*b;
	}

	private double mean(double a, double b) {
		// TODO Auto-generated method stub
		return (a+b)/2;
	}

	private double add(double a, double b) {
		// TODO Auto-generated method stub
		return a+b;
	}

}
```

## 2. 캡슐화 

### 1) 문제

### 2) 정답 코드

* Account

```java
package workshop.account.entity;

public class Account {
	private String custId;
	private String acctId;
	private int balance;
	
	public Account() {
		
	}
	
	public Account(String custId, String acctId, int balance) {
		this.custId = custId;
		this.acctId = acctId;
		this.balance = balance;
	}
	
	public String getCustId() {
		return custId;
	}
	public void setCustId(String custId) {
		this.custId = custId;
	}
	public String getAcctId() {
		return acctId;
	}
	public void setAcctId(String acctId) {
		this.acctId = acctId;
	}
	public int getBalance() {
		return balance;
	}
	public void setBalance(int newBalance) {
		this.balance = newBalance;
	}
	
	public void deposit(int amount) {
		balance += amount;
	}
	
	public void withdraw(int amount) {
		balance -= amount;
	}
}

```

* TestAccount

```java
package workshop.account.test;

import workshop.account.entity.Account;

public class TestAccount {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Account ac = new Account("A1100","221-22-3477",100000);
		
		System.out.println("고객번호: "+ ac.getCustId() + "\t계좌번호: "+ac.getAcctId() );
		
		System.out.println("잔액 : "+ac.getBalance());
		
		ac.deposit(10000);
		System.out.println("잔액 증가 : +10,0000원");
		System.out.println("잔액 : "+ac.getBalance()+"원");
		ac.withdraw(20000);
		System.out.println("잔액 감소 : -20,000원");
		System.out.println("잔액 : "+ac.getBalance()+"원");
		
	}

}
```

## 3. 캡슐화 및 배열

### 1) 문제

### 2) 정답 코드

* PersonEntity

```java
package workshop.person.entity;

public class PersonEntity {
	
	private String name;
	private char gender;
	private String ssn;
	private String address;
	private String phone;
	
	public PersonEntity(){
		
	}
	
	public PersonEntity(String name, String ssn, String address, String phone) {
		this.name = name;
		setSsn(ssn);
		this.address = address;
		this.phone = phone;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public char getGender() {
		return gender;
	}

	public void setGender(char gender) {
		this.gender = gender;
	}

	public String getSsn() {
		return ssn;
	}

	public void setSsn(String ssn) {
		this.ssn = ssn;
		if (this.ssn.charAt(6) == '1'||this.ssn.charAt(6) == '3') {
			this.gender ='남';
		}
		if(this.ssn.charAt(6)=='2'||this.ssn.charAt(6)=='4') {
			this.gender='여';
		}
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}	
}
```

* PersonManager

```java
package workshop.person.control;

import java.util.Scanner;

import workshop.person.entity.PersonEntity;

public class PersonManager {

	public static void main(String[] args) {
		String title;
		String name;
		char gender;
		// TODO Auto-generated method stub
		PersonManager pManager = new PersonManager();
		PersonEntity[] persons = new PersonEntity[10];
		Scanner sc = new Scanner(System.in);
		
		title = "@@@ 인물 정보 조회 시스템 @@@";
		printTtile(title);
		printTitleLine();

		pManager.fillPersons(persons);
		pManager.showPerson(persons);
		
		System.out.print("검색할 성별(남/여)을 입력하세요 : ");
		gender = sc.next().charAt(0);
		System.out.println("성별 : \'" + gender + "\'은(는) " + pManager.findByGender(persons, gender) + "명 입니다.");
//		pManager.findByGender(persons, gender);
		printTitleLine();

		System.out.print("검색할 이름을 입력하세요 : ");
		name = sc.next();
		System.out.println("-- 이름 : \'"+name+"\'(으)로 찾기 결과입니다. --");
		printItemLine();
		
		pManager.showPerson(persons, name);
		
	}

	private void showPerson(PersonEntity[] persons, String name) {
		// TODO Auto-generated method stub
		for (PersonEntity ps : persons) {
			if(name.equals(ps.getName())) {
				System.out.println("[이름] "+ps.getName());
				System.out.println("[성별] "+ps.getGender());
				System.out.println("[전화번호] "+ps.getPhone());
				System.out.println("[주소] "+ps.getAddress());
			}
		}
	}

	public int findByGender(PersonEntity[] persons, char gender) {
		// TODO Auto-generated method stub
		int number=0;
		for (PersonEntity ps : persons) {
			if(ps.getGender()==gender) {
				number++;
			}
		}
		return number;
		
	}


	private void showPerson(PersonEntity[] persons) {
		// TODO Auto-generated method stub
		for (PersonEntity ps : persons) {
			System.out.println("[이름] "+ps.getName()+"\t[성별] "+ps.getGender()+"\t[전화번호] "+ps.getAddress());
			printItemLine();
		}
	}

	public static void printItemLine() {
		// TODO Auto-generated method stub
		for(int i=0;i<60;i++) {
			System.out.print("-");
		}
		System.out.println();
	}

	private void fillPersons(PersonEntity[] persons) {
		// TODO Auto-generated method stub
		persons[0]=new PersonEntity("이성호","7212121028102", "인천 계양구", "032-392-2932");
		persons[1]=new PersonEntity("김하늘","7302132363217", "서울 강동구", "02-362-1932");
		persons[2]=new PersonEntity("박영수","7503111233201", "서울 성북구", "02-887-1542");
		persons[3]=new PersonEntity("나인수","7312041038988", "대전 유성구", "032-384-2223");
		persons[4]=new PersonEntity("홍정수","7606221021341", "서울 양천구", "02-158-7333");
		persons[5]=new PersonEntity("이미숙","7502142021321", "서울 강서구", "02-323-1934");
		persons[6]=new PersonEntity("박성구","7402061023101", "서울 종로구", "02-308-0932");
		persons[7]=new PersonEntity("유성미","7103282025101", "서울 은평구", "02-452-0939");
		persons[8]=new PersonEntity("황재현","7806231031101", "인천 중구", "032-327-2202");
		persons[9]=new PersonEntity("최철수","7601211025101", "인천 계양구", "032-122-7832");
	}

	private static void printTitleLine() {
		// TODO Auto-generated method stub
		for(int i=0;i<60;i++) {
			System.out.print("=");
		}
		System.out.println();
	}

	private static void printTtile(String title) {
		// TODO Auto-generated method stub
		System.out.println("\n"+title+"\n");
	}

}
```

## 4. 캡슐화, 상속, 다형성

### 1) 문제

### 2) 정답 코드



## 5. 추상화 클래스, 인터페이스

### 1) 문제



### 2) 정답 코드