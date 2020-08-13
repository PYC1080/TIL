## Level1-5. K번째 수

### 1) 문제

* 문제

```
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
```

* 제한 사항

```
1. array의 길이는 1 이상 100 이하입니다.
2. array의 각 원소는 1 이상 100 이하입니다.
3. commands의 길이는 1 이상 50 이하입니다.
4. commands의 각 원소는 길이가 3입니다.
```

* 테스트케이스

````
array	/	commands	/	return

[1, 5, 2, 6, 3, 7, 4] / [[2, 5, 3], [4, 4, 1], [1, 7, 3]] / [5, 6, 3]

[1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
[1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
[1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.
````

### 2) learned

* 다차원 배열의 길이를 파악하는 방법

```
arrays = [n][m] 

다차원 배열에서 행의 길이를 파악하는 방법 : arrays[n].length

다차원 배열에서 열의 길이를 파악하는 방법 : arrays.length
```

* 다차원 배열에서 특정 배열 값을 추출하는 방법

```
array.slice(startindex,endindex)
```

* 배열에서 특정 값을 제거하는 방법

```
array.splice(start, deleteCount, item1, item2,...)

1. start : 배열의 변경으 ㄹ시작할 인덱스입니다. 배열의 길이보다 큰 값이라면 실제 시작 인덱스는 배열의 길이로 설정된다. 음수인 경우 배열의 끝에서부터 요소를 센다

2. deleteCount : 배열에서 제거할 요소의 수이다. deleteCount를 생략하거나 값이 arraylent-start보다 크면 start부터 모든 요소를 제거한다.

3. item1,2... : 배열에 추가할 요소이다.
```

* 배열 값을 정렬하는 방법

```
오름차순 정렬 

array.sort(function(a,b){return a-b;})

내림차순 정렬

array.sort(function(a,b){return b-a;})
```

### 3) Solution

```javascript
function solution(array, commands){
    let answer = [];
    const len = commands.length;
    for(let c=0;c<len;c++){
        let commandsArray = commands[c]
        let i = commandsArray[0];
        let j = commandsArray[1];
        let k = commandsArray[2];
        let arraySlice = array.slice(i-1,j);
        let arraySort = arraySlice.sort(function(a,b){
            return a-b;
        })
        answer[c] = arraySort[k-1]
    }
    return answer;
}
```

##  Level 1-6. 2016년

### 1) 문제

* 문제

```
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다. 예를 들어 a=5,b=25라면 5월 24일은 화요일이므로 문자열"TUE"를 반환하세요.
```

* 제한사항

```
1. 2016년은 윤년입니다.

2. 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
```

* 테스트케이스

```
a /	b / result
5 / 24 / "TUE"
```

### 2) learned

* 특정 날짜 값 도출

```
1. 생성자

new Date(year,month,day,hours,minutes,seconds,ms)
new Date(`${year}-${month}-${day}-${hours}-${minutes}-${seconds}-${})

2. 메서드

getDay() : 요일을 현지 시각 또는 국제 표준시로 반환한다
```

### 3) Solution

```javascript
function solution(a,b){
    var daily =["SUN","MON","TUE","WED","THU","FRI","SAT"]
    var day = new Date(`2016-${a}-${b}`).getDay()
    var answer = daily[day]
    return answer

}
```

## Level 1-7. 가운데 글자 가져오기

### 1) 문제

* 문제

```
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
```

* 제한 사항

```
s는 길이가 1 이상, 100이하인 스트링입니다.
```

* 테스트케이스

```
s / return

abcde / c
qwer / we
```

### 2) learned

* 문자열 자르기

```
substr vs substring

substring(startindex, endindex) : startindex부터 endindex까지 일정한 문자열을 반환한다

substr(startindex,length) : startindex부터 length 길이만큼 일정한 문자열을 반환한다.

```

### 3) Solution

* if 조건문

```javascript
function solution(s){
    var sArray = [...s];
    let checked = sArray.length % 2;
    let no = Math.floor((sArray.length)/2);
    let answer;
    if(checked == 0 ){
        answer = sArray[no-1]+sArray[no];
    }else {
        answer = sArray[no];
    }
    return answer 
}
```

* 삼항 연산자

```javascript
function solution(s){
    return s.length % 2 ==0 ? s.substr(Math.floor(s.length/2)-1,2) : s.substr(Math.floor(s.length/2)-1,1)
}
```

## level 1-8.  같은 숫자는 싫어

### 1) 문제

* 문제

```
배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 

예를 들면,

arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다

배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.
```

* 제한 사항

```
1. 배열 arr의 크기 : 1,000,000 이하의 자연수

2. 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
```

* 테스트케이스

```
arr / answer

[1,1,3,3,0,1,1] / [1,3,0,1]

[4,4,4,3,3] / [4,3]
```

### 2) learned

* 특정 조건에 따른 값 추출

```
fliter(callback, element, index)
```



### 3) Solution

* for과 if 함수

```javascript
function solution(arr){
    var answer=[];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]!==arr[(i+1)]){
            answer.push(arr[i])
        }
    }
    return answer;
}

```

* filter 함수 사용

```javascript

function solution(arr){
    return arr.filter((value,index)=> val!=arr[index+1]);
}
```

## level 1-9. 나누어 떨어지는 숫자 배열

### 1) 문제

* 문제

```
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
```

* 제한 사항

````
1. arr은 자연수를 담은 배열입니다.
2. 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
3. divisor는 자연수입니다.
4. array는 길이 1 이상인 배열입니다.
````

* 테스트케이스

```
	arr / divisor / return
1. [5, 9, 7, 10] / 5 / [5, 10]
2.[2, 36, 1, 3] / 1 / [1, 2, 3, 36]
3.[3,2,6] / 10 / [-1]

입출력 예#1
arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

입출력 예#2
arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

입출력 예#3
3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.
```

### 2) learned

### 3) Solution

```javascript
function solution(arr, divisor){
    var answer = [];
    arr.forEach(e => {
        if( e % divisor ==0){
            answer.push(e)
        } 
    });
    if(answer.length==0){
        answer.push(-1)
    }
    answer.sort(function(a,b){
        return a-b;
    })
    return answer;
}
```

## level 1-10. 두 정수 사이의 합

### 1) 문제

* 문제

```
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
```

* 제한 조건

```
1. a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
2. a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
3. a와 b의 대소관계는 정해져있지 않습니다.
```

* 테스트케이스

```
a / b / return
1. 3 / 5 / 12
2. 3 / 3 / 3
3. 5 / 3 / 12
```

### 2) learned

### 3) Solution

```javascript
function solution(a,b){
    let largeN, smallN;
    let sum = 0;
    if(a>=b){
        largeN = a;
        smallN = b;
    }else{
        largeN = b;
        smallN = a;
    }
    while(largeN>=smallN){
        sum+=smallN
        smallN++;
    }
    return sum;
}
```

## level 1-11. 문자열 내 마음대로 정렬하기

### 1) 문제

* 문제

```
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.
```

* 제한 조건

```
1. strings는 길이 1 이상, 50이하인 배열입니다.
2. strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
3. strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
4. 모든 strings의 원소의 길이는 n보다 큽니다.
5. 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
```

* 테스트케이스

```
strings / n / return
1. [sun, bed, car] / 1 / [car, bed, sun]
2. [abce, abcd, cdx] / 2 / [abcd, abce, cdx]

입출력 예 1
sun, bed, car의 1번째 인덱스 값은 각각 u, e, a 입니다. 이를 기준으로 strings를 정렬하면 [car, bed, sun] 입니다.

입출력 예 2
abce와 abcd, cdx의 2번째 인덱스 값은 c, c, x입니다. 따라서 정렬 후에는 cdx가 가장 뒤에 위치합니다. abce와 abcd는 사전순으로 정렬하면 abcd가 우선하므로, 답은 [abcd, abce, cdx] 입니
```

### 2) learned

* 문자열 순서 비교

```
localeCompare

strings.loclaeCompare(compareString) : 비교 결과에 따라 숫자를 반환한다.

```

### 3) Solution

```javascript
function solution(strings, n){
    if(strings.length>=1 && strings.length<=50){
        strings.sort(function(a,b){
            var x = a[n].toLowerCase(), y=b[n].toLowerCase();
            let z;
            if(x<y){
                z = -1;
            } else if(x>y){
                z = 1;
            } else if(x=y){
                if(a<b){
                    z= -1;
                }else if(a>=b){
                    z=1;
                }
            }
            return z
        })
    }
    return strings
}
```

* localeCompare method 사용

````javascript
function solution(strings, n) {
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}
````

## level 1-12. 문자열 p와 y내의 개수

### 1) 문제

* 문제

```
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 pPoooyY면 true를 return하고 Pyy라면 false를 return합니다.
```

* 제한 사항

```
1. 문자열 s의 길이 : 50 이하의 자연수

2. 문자열 s는 알파벳으로만 이루어져 있습니다.
```

* 테스트케이스

```
s / answer

1. pPoooyY / true
2. Pyy / false

입출력 예 #1
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.
```

### 2) learned

### 3) Solution

```javascript
function solution(s){
    let pNo=0, yNo=0,answer;
    for(let i=0; i<s.length;i++){
        if(s[i].toUpperCase()==='P'){
            pNo++
        }else if(s[i].toUpperCase()==='Y'){
            yNo++
        }
    }
    if(pNo===yNo){
        answer = true
    } else{
        answer = false
    }
    return answer
}
```

* split을 이용해 갯수 구하기

```javascript
function solution(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
```

## level 1-13. 문자열 내림차순으로 배치하기

### 1) 문제

* 문제

```
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
```

* 제한 사항

```
str은 길이 1 이상인 문자열입니다.
```

* 테스트케이스

```
s / return
Zbcdefg / gfedcbZ

```

### 2) learned

* 문자열 정렬

```
array.port() : 오름차순

array.reverse() : 내림차순
```

### 3) Solution

* 초기 답안 : 테스트케이스 성공 / 효율성 실패

```javascript
function solution(s){
    let sArray = [...s]
    let upper=[],lower=[],answer;
    let lowerSort, upperSort
    for(let i=0;i<sArray.length;i++){
        if(sArray[i]<= 'Z'){
            upper.push(sArray[i]);
        }else{
            lower.push(sArray[i]);
        }
    }
    lowerSort = lower.reverse().join('')
    upperSort = upper.reverse().join('')
    answer = lowerSort+upperSort
    return answer
}
```

* filter 함수 사용 : 테스트케이스 성공 / 효율성 실패

```javascript
function solution(s){
    let sArray = [...s]
    let upper = sArray.filter(e=> e<='Z')
    let lower = sArray.filter(e=> e>'Z')
    let answer = lower.reverse().join('')+upper.reverse().join('');
    return answer;
}
```

## level 1-14. 문자열 다루기 기본

### 1) 문제

* 문제

```
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.
```

* 제한 사항

```
는 길이 1 이상, 길이 8 이하인 문자열입니다.
```

* 테스트케이스

```
s / return

1. "a234" / false

2. "1234" / true
```

### 2) learned

### 3) Solution

* 테스트케이스 : 성공 / 효율성 : 62.5/100

```javascript
function solution(s){

    let sArray = [...s]
    let answer=true
    if(s.length==4 ||s.length==6){
        sArray.forEach(v=> (v>=0&&v<=9) ? answer : answer=false)
    }
    return answer

}
```

## level 1-15. 서울에서 김서방 찾기

### 1) 문제

* 문제

```
String형 배열 seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하는 함수, solution을 완성하세요. seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
```

* 제한 사항

```
1. seoul은 길이 1 이상, 1000 이하인 배열입니다

2. seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.

3. Kim은 반드시 seoul 안에 포함되어 있습니다.

```

* 테스트케이스

```
seoul / return

1. [Jane, Kim]	/ 김서방은 1에있다.
```

### 2) learned

### 3) Solution

```javascript
function solution(seoul){
    let len = seoul.length;
    let x=0;
    let answer;
    seoul.forEach((e)=> e==="Kim" ? answer="김서방은 "+x+"에 있다" : x++)
    return answer
}
```

## level 1-16. 소수 찾기

### 1) 문제

* 문제

```
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)
```

* 제한 조건

```
n은 2이상 1000000이하의 자연수입니다.
```

* 테스트케이스

```
n / result

1. 10 / 4

2. 5 / 3

입출력 예 #1
1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

입출력 예 #2
1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환
```

### 2) learned

* 에라토스테네스의 체 : 소수를 찾는 알고리즘 

```
1. 2부터 소수를 구하고자 하는 구간의 모든 수를 나열한다.

2. 2는 소수이므로 오른쪽에 2를 쓴다. 자기 자신을 제외한 2의 배수를 모두 지운다.

3. 남아있는 수 가운데 3은 소수이므로 오른쪽에 3을 쓴다. 자기 자신을 제외한 3의 배수를 모두 지운다.

4. 남아있는 수 가운데 5는 소수이므로 오른쪽에 5를 쓴다. 자기 자신을 제외한 5의 배수를 모두 지운다.

5. 남아있는 수 가운데 7은 소수이므로 오른쪽에 7을 쓴다. 자기 자신을 제외한 7의 배수를 모두 지운다.

위의 과정을 반복하면 구하는 구간의 모든 소수가 남는다.
```

### 3) Solution

* 1차 안 : 테스트케이스 - 성공 / 정확성 - 9/12(10,11,12) / 효율성 - 0/4(1,2,3,4)

```javascript
function solution(n){
    let answer=0;
    if(n>=2 && n<=1000000){
        for(let i=2;i<=n;i++){
            let checked = 0;
            for(let j=1;j<=i;j++){
                if(i%j == 0){
                    checked++
                }
            }
            if(checked == 2){
                answer++;
            }
        }
    }
    return answer
}
```

* 2차 안

```

```

## level 1-17. 수박수박수박수박수박수?

### 1) 문제

* 문제

```
길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.
```

* 제한 사항

```
n은 길이 10,000이하인 자연수입니다.
```

* 테스트케이스

```
n / return

1. 3 / "수박수"

2. 4 / "수박수박"
```

### 2) learned

* repeat method

```
1. 기능 : repeat()메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다.

2. 구문 : str.repeat(count);
```

* Math method

```
1. 반올림 : .round
2. 정수부분만 반환 : .trunc
```

### 3) Solution

* 1안 : 테스트케이스 성공 /  효율성 성공

```javascript
function solution(n){
    let answer;
    for(let i=0;i<Math.ceil(n/2);i++){
            answer+="수박"
    }
    if(n%2!==0){
        answer+="수"
    }
    return answer;
}	
```

* 2안 - repeat method 사용 :  테스트케이스 성공 / 효율성 성공

```javascript
function solution(n){
    return "수박".repeat(Math.trunc(n/2))+"수".repeat(Math.round(n/2-Math.trunc(n/2)));
} 
```

## level 1-18. 문자열을 정수로 바꾸기

### 1) 문제

* 문제

```
문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
```

* 제한 사항

```
1. s의 길이는 1 이상 5이하입니다.

2. s의 맨앞에는 부호(+, -)가 올 수 있습니다.

3. s는 부호와 숫자로만 이루어져있습니다.

4. s는 0으로 시작하지 않습니다.
```

* 테스트케이스

```
예를들어 str이 1234이면 1234를 반환하고, -1234이면 -1234를 반환하면 됩니다.
str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.
```

### 2) learned

### 3) Solution

```javascript
function solution(s){
    return Number(s)
}
```

## level 1-19. 시저 암호

### 1) 문제 

* 문제

```
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
```

* 제한 사항

```
1. 공백은 아무리 밀어도 공백입니다.

2. s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.

3. s의 길이는 8000이하입니다.

4. n은 1 이상, 25이하인 자연수입니다.
```

* 테스트케이스

```
s / n / result

1. "AB" / 1 / "BC"

2. "Z" / 1 / "a"

3. "a B z" / 4 / "e F d"
```

### 2) learned

* 문자열 아스키코드표

```
NUL	00	null character
SOH	01	start of header
STX	02	start of text
ETX	03	end of text
EOT	04	end of transmission
ENQ	05	enquiry
ACK	06	acknowledge
BEL	07	bell (ring)
BS	08	backspace
HT	09	horizontal tab
LF	10	line feed
VT	11	vertical tab
FF	12	form feed
CR	13	carriage return
SO	14	shift out
SI	15	shift in
DLE	16	data link escape
DC1	17	device control 1
DC2	18	device control 2
DC3	19	device control 3
DC4	20	device control 4
NAK	21	negative acknowledge
SYN	22	synchronize
ETB	23	end transmission block
CAN	24	cancel
EM	25	end of medium
SUB	26	substitute
ESC	27	escape
FS	28	file separator
GS	29	group separator
RS	30	record separator
US	31	unit separator
 	32	space
!	33	exclamation mark
"	34	quotation mark
#	35	number sign
$	36	dollar sign
%	37	percent sign
&	38	ampersand
'	39	apostrophe
(	40	left parenthesis
)	41	right parenthesis
*	42	asterisk
+	43	plus sign
,	44	comma
-	45	hyphen
.	46	period
/	47	slash
0	48	digit 0
1	49	digit 1
2	50	digit 2
3	51	digit 3
4	52	digit 4
5	53	digit 5
6	54	digit 6
7	55	digit 7
8	56	digit 8
9	57	digit 9
:	58	colon
;	59	semicolon
<	60	less-than
=	61	equals-to
>	62	greater-than
?	63	question mark
@	64	at sign
A	65	uppercase A
B	66	uppercase B
C	67	uppercase C
D	68	uppercase D
E	69	uppercase E
F	70	uppercase F
G	71	uppercase G
H	72	uppercase H
I	73	uppercase I
J	74	uppercase J
K	75	uppercase K
L	76	uppercase L
M	77	uppercase M
N	78	uppercase N
O	79	uppercase O
P	80	uppercase P
Q	81	uppercase Q
R	82	uppercase R
S	83	uppercase S
T	84	uppercase T
U	85	uppercase U
V	86	uppercase V
W	87	uppercase W
X	88	uppercase X
Y	89	uppercase Y
Z	90	uppercase Z
[	91	left square bracket
\	92	backslash
]	93	right square bracket
^	94	caret
_	95	underscore
`	96	grave accent
a	97	lowercase a
b	98	lowercase b
c	99	lowercase c
d	100	lowercase d
e	101	lowercase e
f	102	lowercase f
g	103	lowercase g
h	104	lowercase h
i	105	lowercase i
j	106	lowercase j
k	107	lowercase k
l	108	lowercase l
m	109	lowercase m
n	110	lowercase n
o	111	lowercase o
p	112	lowercase p
q	113	lowercase q
r	114	lowercase r
s	115	lowercase s
t	116	lowercase t
u	117	lowercase u
v	118	lowercase v
w	119	lowercase w
x	120	lowercase x
y	121	lowercase y
z	122	lowercase z
{	123	left curly brace
|	124	vertical bar
}	125	right curly brace
~	126	tilde
DEL	127	delete (rubout)
```

* 문자열과 아스키코드를 변환하는 메소드

```
1. Stirng.charCodeAt() : 문자열을 아스키코드 번호로 변환하는 메소드

2. String.fromCharcode() : 아스키코드를 문자열로 변환하는 메소드
```

### 3) Solution

```javascript
function solution(s,n){
    //아스키코드표
    // 65-90 : A-z
    // 97-122 : a-z
    let answer='';
    for(let i=0;i<s.length;i++){
        if(s.charCodeAt(i)>=65 && s.charCodeAt(i) <=90){
            if(s.charCodeAt(i)+n>90){
                answer+=String.fromCharCode(s.charCodeAt(i)-26+n);
            } else{
                answer+=String.fromCharCode(s.charCodeAt(i)+n)
            }
        }else if(s.charCodeAt(i)>=97 && s.charCodeAt(i) <=122){
            if(s.charCodeAt(i)+n>122){
                answer+=String.fromCharCode(s.charCodeAt(i)-26+n);
            } else{
                answer+=String.fromCharCode(s.charCodeAt(i)+n)
            }
        }else{
            answer+=s[i]
        }
    }
    return answer;
}
```

