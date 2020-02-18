# Java 실습 - 반복문, 조건문

## 1. 

### 1) 목표 : 입력 값을 받아 해당 입력 값의 약수를 구하는 문제

### 2) 코드

```java
import java.util.Scanner;

// 입력값을 받아 해당 입력값의 약수를 구하는 문제
public class q1 {
    public static void main(String [] args){
        Scanner input = new Scanner(System.in);
        System.out.print("입력값은 : ");
        Integer data = input.nextInt();
        System.out.print("입력하신 숫자의 약수는 \"");
        for(int i = 1; i<=data; i++) {
            if (!(i == data)) {
                if (data % i == 0) {
                    System.out.print(i);
                } else {
                    continue;
                }
            } else {
                System.out.print(i);
                break;
            }
            System.out.print(", ");
        }
        System.out.print("\"입니다.");
    }
}

```

### 3) 결과

![1 - q1 result](https://user-images.githubusercontent.com/55272324/74734431-dece0280-5291-11ea-92bc-151d932b5fc8.PNG)



![1 - q1 result2](https://user-images.githubusercontent.com/55272324/74734479-fc02d100-5291-11ea-84e5-862843bc9194.PNG)



## 2.

### 1) 목표 : 숫자 1부터 100까지 숫자들의 소수를 구하시오. 단, 소수들이 계단 구조를 이루어 표현되도록 하시오

### 2) 코드

```java
public class q2 {
    public static void main (String [] args){
        int rc = 2;
        int rn = 0;
        System.out.println("<<소수>>");
        System.out.println("1");
            for(int n=2; n<=100; n++){
                int count=0;
                for(int d=1; d<=n; d++){
                    if(n%d==0){
                        count++;
                    }
                }

                if (count==2){
                    System.out.print(n+" ");
                    rn++;
                }
                if(!(rn == rc)) {
                    continue;
                } else{
                    System.out.print("\n");
                    rc++;
                    rn =0;
                }
            }
    }
}
```

### 3) 결과

![2 - q2 result](https://user-images.githubusercontent.com/55272324/74740552-6a4d9080-529e-11ea-961b-5eeb291b1929.PNG)

## 3.

### 1) 목표 : 피보나치 수열을 하는 숫자가 있다. 피보나치 수열의 최댓값이 1000이 넘었을때 해당 피보나치 수열이 몇 번째 수열 값인지 구하시오



### 2) 코드

```java
public class q3 {
    public static void main(String [] args){
        //int prev =1;
        int nowv =1;
        System.out.println("1번째 피보나치 수열의 값은 1입니다");
        int prev =1;
        System.out.println("2번째 피보나치 수열의 값은 1입니다");
        int n;
        int willv = nowv+prev;
        for(n=3; willv < 1000; willv=nowv+prev ) {
            System.out.println(n + "번째 피보나치 수열의 값은 " + willv + "입니다");
            n++;
            prev = nowv;
            nowv = willv;
        }
        if(willv>=1000){
            System.out.println(n + "번째 피보나치 수열의 값은 " + willv + "입니다");
        }

    }
}
```



### 3) 결과

![3 - q3 result](https://user-images.githubusercontent.com/55272324/74738241-d5489880-5299-11ea-8d62-1c2f229d19d2.PNG)