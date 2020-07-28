# Java 실습 - 배열 및 클래스

## 1. 성적 처리

### 1) 목표

```
1. 사용자 5명의 국어, 영어, 수학 점수 데이터를 가지고 있다. 해당 데이터는 임의로 입력한다
2. 데이터 구조를 배열로 구성한다. 예, int[] kp={100,50,65...}
3. 개별 학생의 성적과 평균을 구한다
4. 성적순을 총점이 높은 순으로 정렬한다
```

### 2) 코드

```java
import java.util.Arrays;
import java.util.Collections;

public class q4 {
    public static void main(String[]args){
        String[] name={"AAA","BBB","CCC","DDD","EEE"};
        int[] kp = {100,90,80,75,95};
        int[] ep = {70,85,95,100,80};
        int[] mp = {95,100,80,75,90};
        int[] total = new int[5];
        Integer[] avg = new Integer[5];
        System.out.println("<<개별 성적 데이터>>");
        for(int i=0;i<5;i++){
            total[i]=kp[i]+ep[i]+mp[i];
            avg[i]= total[i]/3;

            System.out.print(String.format("Student name : %s \t" ,name[i]));
            System.out.print(String.format("total : %s",total[i]));
            System.out.print(String.format("\tavg : %s",avg[i]));
            System.out.println("");
        }
        System.out.println("<<성적 데이터 정렬>>");
        Arrays.sort(avg, Collections.reverseOrder());
System.out.print(Arrays.toString(avg));
    }
}

```

### 3) 결과

![q1-result](https://user-images.githubusercontent.com/55272324/74839518-bf55d900-5368-11ea-8732-e9dd742b1a24.PNG)

## 2. Lotto

### 1) 목표

```
1. 1-45 사이의 번호 6개를 입력받는다
	1) 문자가 아닌 숫자가 입력되는 것을 가정한다
	2) 입력받은 번호가 45가 넘지 않도록 한다.
    3) 입력받은 번호가 중복되지 않도록 한다.
2. 로또 당첨 번호를 6개 생성한다
	1) 당첨 번호를 랜덤하게 추출한다
	2) 1-45 사이의 숫자가 당첨번호가 되도록 한다
	3) 당첨 번호가 중복되지 않도록 한다. 예,
	
Random r= new Random(System.currentTimeMillis());
for(int i=0; i<10; i++){
int inVal = r.nextInt(45)+1;
System.out.println(intVal);
}
3. 입력한 로또 번호와 당첨 번호를 비교하여 몇개의 숫자가 일치하는 지를 출력한다
```

### 2) 코드

```java

```

### 3) 결과



