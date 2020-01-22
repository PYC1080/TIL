# Javasscript 1 일차 - 실습

### 실습

```
팀별로 HTML, TABLE, FORM, INPUT 태그 학습
1.구구단 작성 (2단 - 9단) :  
	1) 가로 * 세로
	2) 첫째 단 : 2단 ~ 5단 / 둘째 단 : 6단 ~ 9단
2.이력서 폼 작성 : 
	1) 인터넷에 돌아다니는 이력서 form 활용
	2) TABLE, CONSPAN, ROWSPAN 활용
```

#### 실습 1 :이력서 

##### 목표

![실습 - 이력서 - 목표](https://user-images.githubusercontent.com/55272324/72866284-0dea6600-3d1e-11ea-85e7-36fd80b011f5.PNG)

##### 결과 : 코드

```html
<!DOCTYPE html>
<html>
<body>
    <table width="100%" border="1"> 
        <tr>
            <th rowspan="4"> 사진 </th>
            <th colspan="4"> 이 력 서 </th>
        </tr>
        <tr>
            <td rowspan="2">성명</td>
            <td rowspan="2", colspan="2"> (인)</td>
            <td> 주민등록번호</td>
        </tr>
        <tr>
            <td> </td>
        </tr>
        <tr>
            <td>생년월일</td>
            <td colspan="3">  년  월  일 생(남, 여)</td>

        </tr>
        <tr>
            <td>주소</td>
            <td colspan="4"> </td>
        </tr>
        <tr>
            <td>호적 양식</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
        </tr>
    </table>
</body>
</html>
```

##### 결과 : 이력서 모습

![실습 - 이력서 - 결과](https://user-images.githubusercontent.com/55272324/72866283-0d51cf80-3d1e-11ea-8be5-44ca0cbda34b.PNG)



##### 이력서 - 수정 내역

##### 결과 : 이력서 모습 - 정렬 추가

```html
<!DOCTYPE html>
<html>
<body>
    <table width="100%" border="1"> 
        <tr>
            <th rowspan="4"> 사 진 </th>
            <th colspan="4"> 이 력 서 </th>
        </tr>
        <tr>
            <td rowspan="2" align="center"> 성 명 </td>
            <td rowspan="2", colspan="2" align="right"> (인) </td>
            <td align="center"> 주 민 등 록 번 호 </td>
        </tr>
        <tr>
            <td>123456-789101</td>
        </tr>
        <tr>
            <td align="center">생년월일</td>
            <td colspan="3" align="left"> 19 년  월  일생(만 세) </td>

        </tr>
        <tr>
            <td align="center">주 소</td>
            <td colspan="4"> </td>
        </tr>
        <tr>
            <td align="center">호 적 관 계</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
        </tr>
    </table>
</body>
</html>
```

![실습 - 이력서 - 결과 정렬 추가](https://user-images.githubusercontent.com/55272324/72866783-f14f2d80-3d1f-11ea-9a16-836f42318400.PNG)





#### 실습 2 : 구구단 작성

##### 목표 : 2단 - 9단 구구단 작성

##### 결과 : 코드

```html

```

##### 결과 : 구구단 모습



#### 실습 3 : 회원가입 - datatype

##### 목표 : 회원가입 page 만들기

```
1. 이름 / 아이디 / 비밀번호를 입력 받는다
2. 비밀번호는 **** 식으로 표현된다.
3. 남성과 여성을 고를 수 있으며 하나만 선택이 가능하다
4. 사용하는 SNS 탭(Facebook, Twitter, Instagram, Google+)이 존재하며 중복 선택이 가능하다.
5. 연령은 연령대별로 고르는게 가능하다.
6. 사진은 파일을 불러오는 기능을 한다.
7. 자기 소개란이 존재한다.
8. 회원가입 /초기화 / 임시저장 기능을 제공한다
```



##### 결과 : 코드

```html
<!DOCTYPE html>
<html>
    <body>
        <form action="regist.html" method="POST">
            이름: <input type="text" name="name" placeholder="이름을 입력하세요">
            <br/>
            아이디: <input type="text" name="ID" placeholder="아이디를 입력하세요">
            <br/>
            비밀번호: <input type="password" name="PW" placeholder="비밀번호를 입력하세요">
            <br/>
            남성: <input type="radio" name="gender">
            여성: <input type="radio" name="gender">
            <br/>
            사용하는 SNS:
            <input type="checkbox" name="sns"> Facebook
            <input type="checkbox" name="sns"> Twitter
            <input type="checkbox" name="sns"> Instagram
            <input type="checkbox" name="sns"> Google+
            <br/>
            연령:
            <select name="age">
                <option value="10">10대</option>
                <option value="20">20대</option>
                <option value="30">30대</option>
                <option value="40">40대</option>
                <option value="50">50대</option>
                <option value="60">60대</option>
            <br/>
            사진 :
            <input type ="file" name="image">
            <br/>
            자기 소개:
            <textarea cols="40" rows="5" name="intro"></textarea>
            <br/>
            <input type="submit" value="회원가입">
            <input type="reset" value="초기화">
            <input type="button" value="임시 저장">
        </form>
    </body>
</html>

<!--
    POST/GET
    POST : 사용자가 입력한 내용을 서버에 전달(resquest body)
    GET : 사용자가 서버의 Resouce를 요청 (웹브라우저 -> URL 요청)

    querystring -> get 입력데이터가 그대로 보이기 때문에 권장하지 않는다.
    
-->
```

##### 결과 : 모습

![실습 - datatype - 결과](https://user-images.githubusercontent.com/55272324/72869249-f021fe80-3d27-11ea-94c3-b6f9c230ea62.PNG)



#### 실습 4 : 이력서 datatype 적용

##### 결과 : 코드

```html

```

##### 결과 : 모습