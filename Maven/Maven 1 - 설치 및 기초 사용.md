# Maven 1 - 설치 및 기초 사용법

## 1. 설치

### 1) 설치 : [Maven](https://maven.apache.org/download.cgi?Preferred=http%3A%2F%2Fapache.tt.co.kr%2F)

 #### (1) 설치 파일

![maven 설치](https://user-images.githubusercontent.com/55272324/75124129-86af5a00-56f0-11ea-9587-8e6b7b0005c1.PNG)

#### (2) 환경 변수

![maven 설치 - 환경변수1](https://user-images.githubusercontent.com/55272324/75124161-beb69d00-56f0-11ea-8e03-5bef19aacc46.PNG)
![maven 설치 - 환경변수2](https://user-images.githubusercontent.com/55272324/75124165-bf4f3380-56f0-11ea-9f29-ec5efcac954c.PNG)

#### (3) 결과

![maven 설치 - 결과](https://user-images.githubusercontent.com/55272324/75124180-d9891180-56f0-11ea-8e37-3fba8dff9c98.PNG)



## 2. 실습 : Maven 기초 사용

### 1) 자바 프로젝트 생성하기

```powershell
PS C:\...\maven> mvn archetype:generate "-Dgroupid=com.newlecture" "-Dartifactid=javaprj" "-DarchetypeArtifactid=maven-archetype-quickstart"
...중략
groupId: com.newlecture
artifactId: javaprj
version: 1.0-SNAPSHOT
package: com.newlecture
 Y: :
[INFO] ----------------------------------------------------------------------------
[INFO] Using following parameters for creating project from Archetype: maven-archetype-quickstart:1.4
[INFO] ----------------------------------------------------------------------------
[INFO] Parameter: groupId, Value: groupId
[INFO] Parameter: artifactId, Value: artifactId
[INFO] Parameter: version, Value: version
[INFO] Parameter: package, Value: package
[INFO] Parameter: packageInPathFormat, Value: package
[INFO] Parameter: package, Value: package
[INFO] Parameter: groupId, Value: groupId
[INFO] Parameter: artifactId, Value: artifactId
[INFO] Parameter: version, Value: version
[INFO] Project created from Archetype in dir: C:\Users\...\maven\artifactId
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  37.250 s
[INFO] Finished at: 2020-02-24T10:59:42+09:00
[INFO] ------------------------------------------------------------------------
```

### 2)  컴파일과 실행하기

#### (0) 초기 구조

```
artifactid
	ㄴsrc
		ㄴmain
			ㄴjava
				ㄴpackage
					ㄴApp.java
		ㄴtest
			ㄴpackage
				ㄴApptest.java
	ㄴporm.xml
```

#### (1) compile & package

```powershell
PS C:\...\test\artifactid> mvn compile
...중략
[INFO] 
[INFO] --- maven-compiler-plugin:3.8.0:compile (default-compile) @ artifactid ---
[INFO] Nothing to compile - all classes are up to date
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
```

```powershell
PS C:\...\maven\javaprj> mvn package
...중략
[INFO] Building jar: C:\...\maven\javaprj\target\javaprj-1.0-SNAPSHOT.jar
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  8.049 s
[INFO] Finished at: 2020-02-24T11:11:09+09:00
[INFO] ------------------------------------------------------------------------
```

#### (2) 실행

```powershell
PS C:\...\maven\javaprj> java -cp target\javaprj-1.0-SNAPSHOT.jar com.newlecture.App
Hello World!
```



### 3) Build Life Cycle과 Phase

* Default lifeCycle : `<packaging> jar</packaging>`에 따라 다르다 `in pom.xml`

* `POM` : Project Object Model

* [Maven Plug-in](https://maven.apache.org/plugins/index.html)

* Maven cmd help

```powershell
PS C:\...\maven\javaprj> mvn help:describe "-Dcmd=명령어"
...중략
```



### 4) Maven 프로젝트 intellij에서 로드하기

```
file - open - pom.xml이 포함된 폴더 오픈
```



### 5)  컴파일러 플러그인과 JDK 버전 변경하기

* 위치 : ...javaprj/pom.xml

```xml
... 중략
  <build>
    <pluginManagement><!-- lock down plugins versions to avoid using Maven defaults (may be moved to parent pom) -->
      <plugins>
        <!-- clean lifecycle, see https://maven.apache.org/ref/current/maven-core/lifecycles.html#clean_Lifecycle -->
        <plugin>
          <artifactId>maven-clean-plugin</artifactId>
          <version>3.1.0</version>
        </plugin>
        <!-- default lifecycle, jar packaging: see https://maven.apache.org/ref/current/maven-core/default-bindings.html#Plugin_bindings_for_jar_packaging -->
        <plugin>
          <artifactId>maven-resources-plugin</artifactId>
          <version>3.0.2</version>
        </plugin>
        <plugin>
          <artifactId>maven-compiler-plugin</artifactId>
          <version>3.8.0</version>
        </plugin>
        <plugin>
          <artifactId>maven-surefire-plugin</artifactId>
          <version>2.22.1</version>
        </plugin>
        <plugin>
          <artifactId>maven-jar-plugin</artifactId>
          <version>3.0.2</version>
        </plugin>
        <plugin>
          <artifactId>maven-install-plugin</artifactId>
          <version>2.5.2</version>
        </plugin>
        <plugin>
          <artifactId>maven-deploy-plugin</artifactId>
          <version>2.8.2</version>
        </plugin>
        <!-- site lifecycle, see https://maven.apache.org/ref/current/maven-core/lifecycles.html#site_Lifecycle -->
        <plugin>
          <artifactId>maven-site-plugin</artifactId>
          <version>3.7.1</version>
        </plugin>
        <plugin>
          <artifactId>maven-project-info-reports-plugin</artifactId>
          <version>3.0.0</version>
        </plugin>
      </plugins>
    </pluginManagement>
  </build>
</project>

```

plug-in 내용을 변경한 경우 해당 내용 속성이 오버라이드 되어 변경된다.

### 

