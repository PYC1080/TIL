# Programmers - 코딩테스트 연습 - LEVEL2


## 1. 다리를 지나는 트럭

### 1) 문제

* 문제

```
트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

경과 시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
0	[]	[]	[7,4,5,6]
1~2	[]	[7]	[4,5,6]
3	[7]	[4]	[5,6]
4	[7]	[4,5]	[6]
5	[7,4]	[5]	[6]
6~7	[7,4,5]	[6]	[]
8	[7,4,5,6]	[]	[]

따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.
```

* 제한 사항

```
1. bridge_length는 1 이상 10,000 이하입니다.

2. weight는 1 이상 10,000 이하입니다.

3. truck_weights의 길이는 1 이상 10,000 이하입니다.

4. 모든 트럭의 무게는 1 이상 weight 이하입니다.
```

* 테스트케이스

```
bridge_length	weight	truck_weights	return
2	10	[7,4,5,6]	8
100	100	[10]	101
100	100	[10,10,10,10,10,10,10,10,10,10]	110
```

### 2) learned

### 3) solution

```javascript
function solution(bridge_length, weight, truck_weights) {
    // answer: 걸린 시간
    let answer = 0;
    
    // queue: 현재 다리상태
    let queue = [];
    
    // queueSum: 현재 다리 무게
    let queueSum = 0;
    
    // queue의 길이는 다리 길이로 하고 다리 하나하나를 0으로 초기화
    for(let i =0;i<bridge_length;i++){
        queue.push(0);
    }
    
    // now_truck : 현재 다리를 지나가는 트럭
    let now_truck = truck_weights.shift();
    
    // 큐에 트럭을 넣고 다리를 앞으로 한칸씩 땡김
    queue.unshift(now_truck);
    queue.pop();
    
    // 다리 무게 증가
    queueSum += now_truck;
    
    // 시간 증가
    answer++;
    
    // 쉬지않고 큐에 트럭을 넣거나 다리를 건너기 때문에 queueSum 이 0이 되면 모든 트럭이 지나간 것.
    while(queueSum){ 
        // 다리에 있는 트럭 이동
        queueSum -= queue.pop();
        
        // 일단 다리를 안건넌 트럭 하나 빼고,
        now_truck = truck_weights.shift();
        
        // 다리에 들어갈 수 있으면 큐(다리)에 트럭 넣고 무게 증가
        if(now_truck+queueSum<=weight){
            queue.unshift(now_truck);
            queueSum+=now_truck;
        }
        // 다리에 들어갈 수 없으면 0을 넣고 뺏던거 다시 트럭집단에 고스란히 넣어줌
        else{
            queue.unshift(0);
            truck_weights.unshift(now_truck);
        }
        answer++;
    }
    return answer;
}
```
## 2. 프린터

### 1) 문제

* 문제

```
일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다. 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.

1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.

예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다. 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다. 현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.
```

* 제한 사항

```
1. 현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.

2. 인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다

3. location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.
```

* 테스트케이스

```
priorities / location / return

1. [2, 1, 3, 2] / 2 / 1

2. [1, 1, 9, 1, 1, 1] / 0 / 5

예제 #1

문제에 나온 예와 같습니다.

예제 #2

6개의 문서(A, B, C, D, E, F)가 인쇄 대기목록에 있고 중요도가 1 1 9 1 1 1 이므로 C D E F A B 순으로 인쇄합니다.
```

### 2) learned

* 원본 배열을 수정하는 메서드

```
1. .push : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
2. .pop : 배열의 마지막 요소를 제거한 후, 제거한 요소를 반환한다
3. .unshift : 배열의 첫 번째 자리에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환한다
4. .shift : 배열의 첫 번째 요소를 제거한 후, 제거한 요소를 반환한다.
```

* some 메서드

```
1. 구문 : arr.some(callback[, thisArg])

currentValue : 처리할 현재 요소
index : 처리할 현재 요소의 인덱스
array : some을 호출한 배열
thisArg : callback을 실행할 때 this로 사용하는 값.

2. 반환 값 : some은 callback이 참(불린으로 변환했을 때 true가 되는 값)을 반환하는 요소를 찾을 때까지 배열에 있는 각 요소에 대해 한 번씩 callback 함수를 실행합니다. 해당하는 요소를 발견한 경우 some은 즉시 true를 반환합니다. 그렇지 않으면, 즉 모든 값에서 거짓을 반환하면 false를 반환합니다. 할당한 값이 있는 배열의 인덱스에서만 callback을 호출합니다. 삭제했거나 값을 할당한 적이 없는 인덱스에서는 호출하지 않습니다.
```
### 3) solution

```javascript
function solution(priorities, location) {
    let targetIndex = location; 
    let answer = 0;

    while (priorities.length> 0) {
        let first = priorities.shift();
        if (priorities.some((value, index) => value > first)) {
            priorities.push(first);
        } else {
            answer = answer + 1;
            if (targetIndex === 0) {
                break;
            }
        }
        if (targetIndex === 0) {
            targetIndex = priorities.length - 1; 
        } else {
            targetIndex = targetIndex - 1;
        }
    }
    return answer;
}
```

## 3. 124 나라의 숫자

### 1) 문제

* 문제

```
124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.
	
1. 124 나라에는 자연수만 존재합니다.
2. 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.

예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

10진법 / 124 나라 
	1 / 1	
	2 / 2	
	3 / 4	
	4 / 11	
	5 / 12
	6 / 14
	7 / 21
	8 / 22
	9 / 24
	10 / 41
	
자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.
```

* 제한 사항

```
n은 500,000,000이하의 자연수 입니다.
```

* 테스트케이스

```
n / result
1 / 1
2 / 2
3 / 4
4 / 11
```

### 2) learned

### 3) solution

```javascript
function solution(n){
    let array =[];
    let answer =''
    while(true){
        if(n<=3){
            array.unshift(n)
            break;
        }else{
            let i = n%3;
            let j =(n-i)/3;
            if(i==0){
                array.unshift(3)
                n = j-1;
            }else{
                array.unshift(i)
                n = j 
            }
        }
    }
    for(let k=0;k<array.length;k++){
        if(array[k]==3){
            answer+=4
        }else{
            answer += array[k]
        }
        
    }
    return answer
}
```
## 4. 스킬트리

### 1) 문제

* 문제

```
선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.

예를 들어 선행 스킬 순서가 스파크 → 라이트닝 볼트 → 썬더일때, 썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.

위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다. 따라서 스파크 → 힐링 → 라이트닝 볼트 → 썬더와 같은 스킬트리는 가능하지만, 썬더 → 스파크나 라이트닝 볼트 → 스파크 → 힐링 → 썬더와 같은 스킬트리는 불가능합니다.

선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.
```

* 제한 사항

```
1. 스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.

2. 스킬 순서와 스킬트리는 문자열로 표기합니다. 예를 들어, C → B → D 라면 CBD로 표기합니다

3. 선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.

4. skill_trees는 길이 1 이상 20 이하인 배열입니다.

5. skill_trees의 원소는 스킬을 나타내는 문자열입니다. skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.
```

* 테스트케이스

```
skill / skill_trees / return

"CBD" / ["BACDE", "CBADF", "AECB", "BDA"] / 2

BACDE: B 스킬을 배우기 전에 C 스킬을 먼저 배워야 합니다. 불가능한 스킬트립니다.
CBADF: 가능한 스킬트리입니다.
AECB: 가능한 스킬트리입니다.
BDA: B 스킬을 배우기 전에 C 스킬을 먼저 배워야 합니다. 불가능한 스킬트리입니다.
```

### 2) learned

* String.includes() : 특정 문자열을 포함하는지 확인하는 메서드

```
.includes()

1. syntax : string.includes(searchString, length)

searchString : 검색할 문자열, 대소문자를 구분한다. 필수 요소이다
length : 검색을 시작할 위치이다. 선택 요소이며 값이 없는경우 전체 문자열을 대상으로 한다.
```

### 3) solution

```javascript
function solution(skill, skill_trees){
    let required = skill.split("")
    let answer=0;
    for(let i=0;i<skill_trees.length;i++){
        let checked = skill_trees[i].split("")
        let isRequired = false
        let checkedBox = [];
        let isAnswer=0;
        for(let j=0;j<checked.length;j++){
            for(let k=0;k<required.length;k++){
                if(checked[j]==required[k]){
                    checkedBox.push(k)
                }
            }
        }
        for(let m=0;m<checkedBox.length;m++){
            if(checkedBox[m]==m){
                isAnswer ++;
            }
        }
        console.log(isAnswer+"/"+checkedBox.length)
        if(isAnswer==checkedBox.length){
            answer++
        }
        console.log(answer)
    }
    return answer
}
```


## 5. 기능개발

### 1) 문제

* 문제

```
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
```

* 제한 사항

```
1. 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.

2. 작업 진도는 100 미만의 자연수입니다.

3. 작업 속도는 100 이하의 자연수입니다.

4. 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

```

* 테스트케이스

```
progresses / speeds / return

1. [93,30,55] / [1,30,5] / [2,1]

첫 번째 기능은 93% 완료되어 있고 하루에 1%씩 작업이 가능하므로 7일간 작업 후 배포가 가능합니다.
두 번째 기능은 30%가 완료되어 있고 하루에 30%씩 작업이 가능하므로 3일간 작업 후 배포가 가능합니다. 하지만 이전 첫 번째 기능이 아직 완성된 상태가 아니기 때문에 첫 번째 기능이 배포되는 7일째 배포됩니다.
세 번째 기능은 55%가 완료되어 있고 하루에 5%씩 작업이 가능하므로 9일간 작업 후 배포가 가능합니다.

따라서 7일째에 2개의 기능, 9일째에 1개의 기능이 배포됩니다.
```

### 2) learned

### 3) solution

```javascript
function solution(progresses,speeds){
    let n=1;
    let pDays = [];
    let answer=[]
    for(let i=0;i<progresses.length;i++){
        pDays.push(Math.ceil((100-progresses[i])/speeds[i]))
    }
    let checked = pDays.shift()
    for(let i=0;i<progresses.length;i++){
        let value = pDays.shift()
        if(checked >=value){
            n++
        }else{
            console.log(n)
            answer.push(n)
            checked=value
            n=1
        }
    }
    return answer;
}
```
## 6. 멀쩡한 사각형

### 1) 문제

* 문제

```
가로 길이가 Wcm, 세로 길이가 Hcm인 직사각형 종이가 있습니다. 종이에는 가로, 세로 방향과 평행하게 격자 형태로 선이 그어져 있으며, 모든 격자칸은 1cm x 1cm 크기입니다. 이 종이를 격자 선을 따라 1cm × 1cm의 정사각형으로 잘라 사용할 예정이었는데, 누군가가 이 종이를 대각선 꼭지점 2개를 잇는 방향으로 잘라 놓았습니다. 그러므로 현재 직사각형 종이는 크기가 같은 직각삼각형 2개로 나누어진 상태입니다. 새로운 종이를 구할 수 없는 상태이기 때문에, 이 종이에서 원래 종이의 가로, 세로 방향과 평행하게 1cm × 1cm로 잘라 사용할 수 있는 만큼만 사용하기로 하였습니다.
가로의 길이 W와 세로의 길이 H가 주어질 때, 사용할 수 있는 정사각형의 개수를 구하는 solution 함수를 완성해 주세요.
```

* 제한 사항

```
W, H : 1억 이하의 자연수
```

* 테스트케이스

```
w / h / result

8 / 12 / 80

가로가 8, 세로가 12인 직사각형을 대각선 방향으로 자르면 총 16개 정사각형을 사용할 수 없게 됩니다. 원래 직사각형에서는 96개의 정사각형을 만들 수 있었으므로, 96 - 16 = 80 을 반환합니다
```

### 2) learned

* 선이 지나는 사각형을 구하는 알고리즘

```
1. 선이 지나가면서 겹치는 사각형의 갯수는 블록 단위(w와 h의 최대 공약수에 비례)로 규칙적이다.

2. 블록 단위는 (w/gcd) * (h/gcd)이다

3. 블록 안에서 선이 지나는 사각형의 갯수는 (블록의 가로 크기 + 블록의 세로 크기 -1)이다

5. 총 블록 단위 갯수 * 블록 안에서 선이 지나는 사각형의 갯수 = w+h - gcd
```

### 3) solution

* 1안 : 테스트케이스 성공 / 효율성 성공

```javascript
function solution(w,h){
    let answer;
    let max=Math.max(w,h),min=Math.min(w,h),change,gcd;
    if(w<=100000000 && h<1000000000)
    while(true){
        if(max%min==0){
            gcd=min;
            break;
        }
        change = (max%min);
        max = min;
        min = change;
    }
    return answer = w*h - ((w/gcd + h/gcd - 1) * (w/gcd))
}
```

* 2안 : 테스트케이스 성공 / 효율성 성공

```javascript
function solution(w,h){
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b);
    };

    return w * h - (w + h - gcd(w, h));
}
```


## 7. 문자열 압축

### 1) 문제

* 문제

```
데이터 처리 전문가가 되고 싶은 어피치는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다. 최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.

간단한 예로 aabbaccc의 경우 2a2ba3c(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)와 같이 표현할 수 있는데, 이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다. 예를 들면, abcabcdede와 같은 문자열은 전혀 압축되지 않습니다. 어피치는 이러한 단점을 해결하기 위해 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.

예를 들어, ababcdcdababcdcd의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 2ab2cd2ab2cd로 표현할 수 있습니다. 다른 방법으로 8개 단위로 잘라서 압축한다면 2ababcdcd로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.

다른 예로, abcabcdede와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 abcabc2de가 되지만, 3개 단위로 자른다면 2abcdede가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다. 이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.

압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.
```

* 제한 사항

```
1. s의 길이는 1 이상 1,000 이하입니다.

2. s는 알파벳 소문자로만 이루어져 있습니다.
입출력 예
```

* 테스트케이스

```
s	result
"aabbaccc"	7
"ababcdcdababcdcd"	9
"abcabcdede"	8
"abcabcabcabcdededededede"	14
"xababcdcdababcdcd"	17

입출력 예에 대한 설명
입출력 예 #1

문자열을 1개 단위로 잘라 압축했을 때 가장 짧습니다.

입출력 예 #2

문자열을 8개 단위로 잘라 압축했을 때 가장 짧습니다.

입출력 예 #3

문자열을 3개 단위로 잘라 압축했을 때 가장 짧습니다.

입출력 예 #4

문자열을 2개 단위로 자르면 abcabcabcabc6de 가 됩니다.
문자열을 3개 단위로 자르면 4abcdededededede 가 됩니다.
문자열을 4개 단위로 자르면 abcabcabcabc3dede 가 됩니다.
문자열을 6개 단위로 자를 경우 2abcabc2dedede가 되며, 이때의 길이가 14로 가장 짧습니다.

입출력 예 #5

문자열은 제일 앞부터 정해진 길이만큼 잘라야 합니다.
따라서 주어진 문자열을 x / ababcdcd / ababcdcd 로 자르는 것은 불가능 합니다.
이 경우 어떻게 문자열을 잘라도 압축되지 않으므로 가장 짧은 길이는 17이 됩니다.
```

### 2) learned

### 3) solution

* 1안 : 테스트케이스 성공, 정확성 62/100(2,6,11,12,14,15,17,26,27,28)

```javascript
function solution(s) {
    let array = s.split("")
    let answer;
    let length=[]
    if (array.length>1){
        
    for (let i = 1; i <= Math.ceil(array.length/2); i++) {
        let checked = []
        let a = 0
        let splitWord=''
        for (let j = 0; j < array.length; j++) {
            splitWord+= array[j]
            a++
            if(a==i){
                checked.push(splitWord)
                splitWord=''
                a=0;
            }
            if(array.length%i!=0 && j==(array.length-1)){
                checked.push(splitWord)
            }
        }
        let checkWord=checked[0]
        let no = 1;
        let final=''
        for(let k=1;k<checked.length;k++){
            // console.log(checked[k]+"/"+checked[k].length+"/"+i)
            if(checked[k].length==i){
                if(checked[k]===checkWord){
                    no++
                }else{
                    if(no!=1){
                        final+=(String(no)+checkWord)
                    }else{
                        final += checkWord
                    }
                    no=1
                    checkWord=checked[k]
                }
                if(k==(checked.length-1)){
                    if(no!=1){
                        final+=(String(no)+checkWord)
                    }else{
                        final += checkWord
                    }
                }
            }else{
                final+=checkWord
                final+=checked[k]
            }
        }
        length.push(final.length)
    }
    length.sort((a,b)=>{return a-b})
    answer = length[0]
    }else{
        answer = s.length; 
    }
    return answer
}
```

## 8. 소수 찾기

### 1) 문제

* 문제

```
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
```

* 제한 사항

```
1. numbers는 길이 1 이상 7 이하인 문자열입니다.

2. numbers는 0~9까지 숫자만으로 이루어져 있습니다

3. 013은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
```

* 테스트케이스

```
numbers / return

1. 17 / 3

2. 011 / 2

예제 #1
[1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

예제 #2
[0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

11과 011은 같은 숫자로 취급합니다.
```

### 2) learned

### 3) solution

```javascript

```
## 8.  가장 큰수

### 1) 문제

* 문제

```
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.
```

* 제한 사항

```
1. numbers의 길이는 1 이상 100,000 이하입니다.

2. numbers의 원소는 0 이상 1,000 이하입니다.

3. 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
```

* 테스트케이스

```
numbers	return
[6, 10, 2]	6210
[3, 30, 34, 5, 9]	9534330
```

### 2) learned

* for of 와 for in의 차이

```
1. for of : 배열 순한
2. for in : 객체 순환
```

### 3) solution

* 1차

```javascript
function solution(numbers){
    let len =[];
    let nArray = [];
    for (let i=0;i<numbers.length;i++){
        len.push(numbers[i].toString().length)
        nArray.push(numbers[i]/Math.pow(10,Number(numbers[i].toString().length)-1))
    }
    return nArray
}

```
* 2차

```javascript
function solution(numbers){
    let array = numbers.sort(function(a,b){
        return b/Math.pow(10,Number(b.toString().length-1)) - a/Math.pow(10,Number(a.toString().length-1))
    })
    return String(array.join(""))
}
```

* 3차

```javascript
function solution(numbers){
    numbers.sort(function(a,b){
        let aLen = Number(a.toString().length)
        let bLen = Number(b.toString().length)
        if(aLen==bLen){
            return b-a;
        }else{
            if(Number(String(a)+String(b))
                >Number(String(b)+String(a))
            ){
                return b-a;
            }else{
                return a-b;
            }
        }
    })
    console.log(numbers)
    return numbers.join("")
}
```

* 4차

```javascript
function solution(numbers){
    numbers.sort(function(a,b){
            if(Number(String(a)+String(b))
                >Number(String(b)+String(a))
            ){
                console.log("numbers : "+numbers)
                return a-b;
            }else{
                console.log("numbers : "+numbers)
                return b-a;

            }
        }
    )
    // console.log(numbers)
    return numbers.join("")
}
```

* 5차

```javascript
function solution(numbers){
    let answer =''
    let checked=true;
    for(let i of numbers){
        if(i>0){
            checked = false
            break;
        }
    }
    if(checked==false){
        numbers.sort(function(a,b){
            let c = a.toString()
            let d = b.toString()
            let e = parseInt(c+d)
            let f = parseInt(d+c)
            if(e>f){
                return -1
            }else if(e<f){
                return 1
            }else{
                return 0
            }
        })
        answer = numbers.join('')
    }else{
        answer ="0"
    }

    return answer
}
```

## 10. 큰 수 만들기 

### 1) 문제

* 문제

```
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.
```

* 제한 사항

```
1. number는 1자리 이상, 1,000,000자리 이하인 숫자입니다.

2. k는 1 이상 number의 자릿수 미만인 자연수입니다.
```

* 테스트케이스

```
number / k / return

1.1924	2	94

2.1231234	3	3234

3.4177252841	4	775841
```

### 2) learned

### 3) solution

* 1안 : 테스트케이스 성공, 정확성 75/100(8,10,12 시간초과)

```javascript
function solution(number,k){
    let no=0
    let a=0
    let answer = ''
    let b=k+1;
    let l=0
    let m;
    while(no!=k){
        l = a+b;
        let checked = number.substr(a,b).split("").sort((c,d)=>{return d-c})
        let findA = number.substr(a,b).split("")
        m = findA.indexOf(checked[0])
        answer += String(checked[0])
        no += (m);
        a += (m+1)
        b = (k-no+1)
    }
    answer += number.substr(l)
    return answer;
}
```

* 2안

```javascript
function solution(number,k){
    let answer = [];
    let final = ''
    let no = 0;
    let start =0;
    let end = k+1
    while(true){
        if(k==no){
            let last = number.substr(start)
            final += answer.join("")
            final += last
            break
        }
        let word = number.substr(start,end).split("")
        let max = Math.max.apply(null,word)
        let index = word.indexOf(String(max))
        let min  = Math.min.apply(null,word)
        if(max==min){
            ///9991인 경우 실패
            let last = number.substr(start+k-no).split("")
            let finalmin = Math.min.apply(null,last)
            if(max==finalmin){
                final += answer.join("")
                final += last
                break;
            }
        }else{
            answer.push(number[start+index])
            no+=index
            start = start+index+1
            end = k-no+1
        }
    }
    return final

}
/*
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.12ms, 30.3MB)
테스트 2 〉	통과 (0.09ms, 29.9MB)
테스트 3 〉	통과 (0.17ms, 30MB)
테스트 4 〉	통과 (0.19ms, 30MB)
테스트 5 〉	통과 (0.45ms, 30.1MB)
테스트 6 〉	통과 (72.77ms, 32.5MB)
테스트 7 〉	통과 (169.50ms, 36.4MB)
테스트 8 〉	통과 (1924.58ms, 64.6MB)
테스트 9 〉	통과 (0.37ms, 31.8MB)
테스트 10 〉	실패 (런타임 에러)
테스트 11 〉	통과 (0.11ms, 30MB)
테스트 12 〉	통과 (0.12ms, 30MB)
채점 결과
정확성: 91.7
합계: 91.7 / 100.0
*/
```



## 11. 조이스틱 

### 1) 문제

* 문제

```
조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

조이스틱을 각 방향으로 움직이면 아래와 같습니다.

▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동

예를 들어 아래의 방법으로 JAZ를 만들 수 있습니다.
- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.

만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.
```

* 제한 사항

```
1. name은 알파벳 대문자로만 이루어져 있습니다.

2. name의 길이는 1 이상 20 이하입니다.
```

* 테스트케이스

```
name	return
JEROEN	56
JAN	23
```

### 2) learned

### 3) solution

* 1안 : 테스트케이스 성공,  정확성 90.0/100(11)

```javascript
function solution(name){
    let array = name.split("")
    let checking =true
    let answer=0;
    let alpha = ["A","B","C","D","E","F","G","H","I","J","K",
                "L","M","N","O","P","Q","R","S","T","U","V",
                "W","X","Y","Z"]
    if(name.length==1){
        let wordI = alpha.indexOf(array[0])
        if(wordI>0&&wordI<=13){
            answer+=wordI 
        }else if(wordI>=14){
            answer+=(26-wordI)
        }
    }else{
        for(let i=0;i<name.length;i++){
            if(array[i]!='A'){
                checking = false
                break;
            }
        }
        if(checking == false){
            let r=1,l=-1,no=0;
            //왼쪽이 좋을지 오른쪽이 좋을지 방향 판단 
            while(checking==false){
                let leftWord = name.substr(l,1);
                let rightWord = name.substr(r,1);
                console.log(leftWord +" / "+rightWord)
                if(leftWord =="A"&& rightWord =="A" ){
                    r+=1;
                    l+=-1;
                }
                if(leftWord =="A" && rightWord !="A"){
                    checking = "right"
                }else if(leftWord !="A" && rightWord =="A"){
                    checking = "left"
                }else{
                    checking ="other"
                }
            }
            ///오른쪽으로 횟수를 재는 경우가 가장 작은 경우 
            if(checking == "right"||checking=="other"){
                //제거할 A의 갯수 파악
                for(let j=-1;j>-(array.length-1);j--){
                    let isA = name.substr(j,1)
                    if(isA =="A"){
                        no++;
                    }else{
                        break;
                    }
                }
                console.log("no : "+no)
                //이름의 길이 파악
                for(let j=0; j<(array.length-no);j++){
                    let word = name.substr(j,1)
                    let wordI = alpha.indexOf(word)
                    if(wordI==0){
                        // answer+=1
                    }else if(wordI>0&&wordI<=13){
                        answer+=wordI 
                    }else{
                        answer+=(26-wordI)
                    }
                    console.log("word : "+word+" wordI : "+wordI+" answer : "+answer)
                }
                answer += (array.length-no-1)
                                console.log("array length : "+array.length+" no : "+no+" answer : "+answer)
            }
            //왼쪽으로 횟수를 재는 경우가 가장 적은 겨우
            if(checking == "left"){
                for(let j=1;j<(array.length-1);j++){
                    let isA = name.substr(j,1)
                    if(isA =="A"){
                        no++;
                    }else{
                        break;
                    }
                }
                for(let j=0; j>-(array.length-no);j--){
                    let word = name.substr(j,1)
                    let wordI = alpha.indexOf(word)
                    if(wordI==0){
                        // answer+=1
                    }else if(wordI>0&&wordI<=13){
                        answer+=wordI 
                    }else{
                        answer+=(26-wordI)
                    }
                }
                answer += (array.length-no-1)

            }
            //양쪽 횟수가 동일한 경우
            // if(checking == "other"){

            // }
        }
    }
    return answer
}
```

## 12. 괄호 변환 

### 1) 문제

* 문제

```
카카오에 신입 개발자로 입사한 콘은 선배 개발자로부터 개발역량 강화를 위해 다른 개발자가 작성한 소스 코드를 분석하여 문제점을 발견하고 수정하라는 업무 과제를 받았습니다. 소스를 컴파일하여 로그를 보니 대부분 소스 코드 내 작성된 괄호가 개수는 맞지만 짝이 맞지 않은 형태로 작성되어 오류가 나는 것을 알게 되었습니다.
수정해야 할 소스 파일이 너무 많아서 고민하던 콘은 소스 코드에 작성된 모든 괄호를 뽑아서 올바른 순서대로 배치된 괄호 문자열을 알려주는 프로그램을 다음과 같이 개발하려고 합니다
```

* 용어와 정의

```
'(' 와 ')' 로만 이루어진 문자열이 있을 경우, '(' 의 개수와 ')' 의 개수가 같다면 이를 균형잡힌 괄호 문자열이라고 부릅니다.
그리고 여기에 '('와 ')'의 괄호의 짝도 모두 맞을 경우에는 이를 올바른 괄호 문자열이라고 부릅니다.
예를 들어, "(()))("와 같은 문자열은 균형잡힌 괄호 문자열 이지만 올바른 괄호 문자열은 아닙니다.
반면에 "(())()"와 같은 문자열은 균형잡힌 괄호 문자열 이면서 동시에 올바른 괄호 문자열 입니다.

'(' 와 ')' 로만 이루어진 문자열 w가 균형잡힌 괄호 문자열 이라면 다음과 같은 과정을 통해 올바른 괄호 문자열로 변환할 수 있습니다.

1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다. 
2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다. 
3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다. 
  3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다. 
4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다. 
  4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다. 
  4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다. 
  4-3. ')'를 다시 붙입니다. 
  4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다. 
  4-5. 생성된 문자열을 반환합니다.

균형잡힌 괄호 문자열 p가 매개변수로 주어질 때, 주어진 알고리즘을 수행해 올바른 괄호 문자열로 변환한 결과를 return 하도록 solution 함수를 완성해 주세요.
```

* 매개변수 설명

```
1. p는 '(' 와 ')' 로만 이루어진 문자열이며 길이는 2 이상 1,000 이하인 짝수입니다.

2. 문자열 p를 이루는 '(' 와 ')' 의 개수는 항상 같습니다.

3. 만약 p가 이미 올바른 괄호 문자열이라면 그대로 return 하면 됩니다.
```

* 테스트케이스

```
p / result

1. "(()())()" / "(()())()"

2. ")(" / "()"

3. "()))((()" / "()(())()"

입출력 예에 대한 설명
입출력 예 #1
이미 올바른 괄호 문자열 입니다.

입출력 예 #2

두 문자열 u, v로 분리합니다.
u = ")("
v = ""
u가 올바른 괄호 문자열이 아니므로 다음과 같이 새로운 문자열을 만듭니다.
v에 대해 1단계부터 재귀적으로 수행하면 빈 문자열이 반환됩니다.
u의 앞뒤 문자를 제거하고, 나머지 문자의 괄호 방향을 뒤집으면 ""이 됩니다.
따라서 생성되는 문자열은 "(" + "" + ")" + ""이며, 최종적으로 "()"로 변환됩니다.
입출력 예 #3

두 문자열 u, v로 분리합니다.
u = "()"
v = "))((()"
문자열 u가 올바른 괄호 문자열이므로 그대로 두고, v에 대해 재귀적으로 수행합니다.
다시 두 문자열 u, v로 분리합니다.
u = "))(("
v = "()"
u가 올바른 괄호 문자열이 아니므로 다음과 같이 새로운 문자열을 만듭니다.
v에 대해 1단계부터 재귀적으로 수행하면 "()"이 반환됩니다.
u의 앞뒤 문자를 제거하고, 나머지 문자의 괄호 방향을 뒤집으면 "()"이 됩니다.
따라서 생성되는 문자열은 "(" + "()" + ")" + "()"이며, 최종적으로 "(())()"를 반환합니다.
처음에 그대로 둔 문자열에 반환된 문자열을 이어 붙이면 "()" + "(())()" = "()(())()"가 됩니다.
```

### 2) learned

### 3) solution

```javascript

```

## 13. H-Index

> 정렬

### 1) 문제

* 문제

```
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.
```

* 제한 사항

```
1. 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.

2. 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.
```

* 테스트케이스

```
citations	return
[3, 0, 6, 1, 5]	3

이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.
```

### 2) learned

### 3) solution

* 1차안 : 테스트케이스 성공, 12/100

```javascript
function solution(citations){
    let answer =0;
    let n = citations.length
    if(n>1){
        for(let h=0; h<n;h++){
            // h번 이상 인용된 논문의 갯수
            let overh = citations.filter(e=> e >= h).length
            // h번 미만 인용된 논문 
            let under =citations.filter(e=> e < h)
            let underh=0
            // h번 미만 인용된 논문의 총 인용 횟수
            if(under.length>1){
                for(let j=0;j<under.length;j++){
                    underh+=Number(under[j])
                }
            }else{
                underh = under[0]
            }
            // h번 이상 인용된 논문이 h편 이상이고 
            // 나머지 논문이 h번 이하 인용된 경우
            // 이전 h 값과 현재 h 값을 비교해 더 큰 경우 h변경 
            if(overh>=h && underh<=h){
                if(h>answer){
                    answer = i
                    console.log("answer : "+answer)
                }
            }
        }
    }else{
        answer = citations[0]
    }
    
    return answer 
}
```

* 2차안

```javascript
function solution(citations) {

    citations.sort((a, b) => b - a); 
    
    var index = 0;
    while(index <= citations.length){
        if(index + 1 <= citations[index]){
            console.log(index)
            index++;   
        }else break;
    }
    return index;
}
```



## 14. 구명보트 

### 1) 문제

* 문제

```
무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.

사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.
```

* 제한 사항

```
1. 무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.

2. 각 사람의 몸무게는 40kg 이상 240kg 이하입니다.

3. 구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.

4. 구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.
```

* 테스트케이스

```
people	limit	return
[70, 50, 80, 50]	100	3
[70, 80, 50]	100	3
```

### 2) learned

### 3) solution

```javascript

```

## 15. 위장

### 1) 문제

* 문제

```
스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

종류	이름
얼굴	동그란 안경, 검정 선글라스
상의	파란색 티셔츠
하의	청바지
겉옷	긴 코트

스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.
```

* 제한 사항

```
1. clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.

2. 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.

3. 같은 이름을 가진 의상은 존재하지 않습니다.

5. clothes의 모든 원소는 문자열로 이루어져 있습니다.

6. 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.

7. 스파이는 하루에 최소 한 개의 의상은 입습니다.
```

* 테스트케이스

```
clothes	return
[[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]	5
[[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]	3

예제 #1
headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.

1. yellow_hat
2. blue_sunglasses
3. green_turban
4. yellow_hat + blue_sunglasses
5. green_turban + blue_sunglasses

예제 #2
face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.

1. crow_mask
2. blue_sunglasses
3. smoky_makeup
```

### 2) learned

### 3) solution

```javascript
function solution(clothes){
    let sorted=[]
    let answer=0;
    //위장도구를 종류별 갯수로 나눈다
    for(let i=0;i<clothes.length;i++){
        let checked = false
        let no =0;
        for(let j=0;j<sorted.length;j++){
            if(sorted[j][0]==clothes[i][1]){
                no = j
                checked = true
                break;
            }
        }
        if(checked==false){
            sorted.push([clothes[i][1],1]);
        }else{
            sorted[no][1]++
        }
    }
    //도구 조합을 통해 총 갯수를 구함
    if(sorted.length>1){
        for(let k=1; k<=sorted.length;k++){

        }
    }else{
        answer = sorted[0][1]
    }

    
    // console.log(sorted)
    // console.log(clothes[0].indexOf("yellow_hat"))
    return 1
}
```

## 16. 카펫

> 완전탐색

### 1) 문제

* 문제

```
Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
```

* 제한 사항

```
1. 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.

2. 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.

3. 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
```

* 테스트케이스

```
brown	yellow	return
10	2	[4, 3]
8	1	[3, 3]
24	24	[8, 6]
```

### 2) learned

### 3) solution

```javascript
/*1안 로직
1. brown과 yellow의 갯수를 더해 가능한 가로*세로 조합을 구한다
2. 바깥 테두리를 brown으로 채울 수 있는지 확인한다
3. 바깥 테두리를 brown으로 채울 수 없다면 가로*세로 조합에서 제거한다
4. 단, 가로,세로의 크기는 3 이상이다
*/

function solution(brown, yellow){
    const totalBlock = brown+yellow;
    let answer
    for(let w=3;w<=(totalBlock/3);w++){
        let h = totalBlock/w
        if(w*h==totalBlock && w>=h){
            if((2*w+h*2-4)<=brown){
                answer=[w,h]
            }
        }
    }
    // console.log(answer)
    return answer
}
```

## 17. 타겟 넘버

> DFS/BFS, 깊이/너비 우선 탐색

### 1) 문제

* 문제

```
n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.
```

* 제한 사항

```
1. 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.

2. 각 숫자는 1 이상 50 이하인 자연수입니다.

3. 타겟 넘버는 1 이상 1000 이하인 자연수입니다.
```

* 테스트케이스

```
numbers	target	return
[1, 1, 1, 1, 1]	3	5
```

### 2) learned

* 배열 병합

```
배열A와 배열B를 병합하는 방법 : 배열A.concat(배열B)
```

### 3) solution

```javascript
/*1안 로직
DFS
1. 총 노드의 개수는 numbers의 배열의 길이 n과 같다
2. 각 노드에서 선택할 수 있는 가짓수는 +와 - 2가지이다.
3. 따라서 numbers 배열로 가능한 방법은 2의 n승이다.
4. +++++... 에서 시작해 -----.. 까지 값을 구한다
5. 최종 Depth에서 한단계식 위로 올라가 다른 방향으로 돌아갈 수 있는지 검사
*/
function solution(numbers,target){
    let len = numbers.length;
    let beforeArray = [0]
    for(let i=0;i<len;i++){
        let afterArray = []
        beforeArray.forEach(e=>{
            afterArray.push(e + numbers[i])
            afterArray.push(e - numbers[i])
        })
        beforeArray = []
        beforeArray = beforeArray.concat(afterArray)
    }
    console.log(beforeArray)
    let answer = beforeArray.filter(e=>e==target).length
    return answer
} 
```

## 18. 가장 큰 정사각형 찾기

### 1) 문제

* 문제

```
1와 0로 채워진 표(board)가 있습니다. 표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다. 표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요. (단, 정사각형이란 축에 평행한 정사각형을 말합니다.)

예를 들어

1	2	3	4
0	1	1	1
1	1	1	1
1	1	1	1
0	0	1	0

가 있다면 가장 큰 정사각형은
가 되며 넓이는 9가 되므로 9를 반환해 주면 됩니다.
```

* 제한 사항

```
1. 표(board)는 2차원 배열로 주어집니다.

2. 표(board)의 행(row)의 크기 : 1,000 이하의 자연수

3. 표(board)의 열(column)의 크기 : 1,000 이하의 자연수

4. 표(board)의 값은 1또는 0으로만 이루어져 있습니다.
```

* 테스트케이스

```
board	answer
[[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]	9
[[0,0,1,1],[1,1,1,1]]	4
입출력 예 #1
위의 예시와 같습니다.

입출력 예 #2
| 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 |
로 가장 큰 정사각형의 넓이는 4가 되므로 4를 return합니다.
```

### 2) learned

### 3) solution

```javascript

```

## 19. 올바른 괄호

### 1) 문제

* 문제

```
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

()() 또는 (())() 는 올바른 괄호입니다.
)()( 또는 (()( 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
```

* 제한 사항

```
1. 문자열 s의 길이 : 100,000 이하의 자연수

2. 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
```

* 테스트케이스

```
s	answer
()()	true
(())()	true
)()(	false
(()(	false
```

### 2) learned

### 3) solution

* 1안

```javascript
/* 1안 로직
1. (와 )의 갯수를 구한다
2. 갯수가 갖고 시작이 ( 마지막이 )으로 끝나면 true를 리턴하고 아니라면 false를 리턴한다
*/
function solution(s){
    let answer=false
    let sArray = s.split("")
    let left =sArray.filter(e=>e=="(").length
    let right =sArray.filter(e=>e==")").length
    if(left==right){
        if(sArray[0]=="("&&sArray[s.length-1]==")"){
            answer = true
        }
    }
    return answer
}
/*
채점 결과
정확성: 61.8(5,11)
효율성: 30.5
합계: 92.3 / 100.0
*/
```

## 20. 튜플

### 1) 문제

* 문제

```
셀수있는 수량의 순서있는 열거 또는 어떤 순서를 따르는 요소들의 모음을 튜플(tuple)이라고 합니다. n개의 요소를 가진 튜플을 n-튜플(n-tuple)이라고 하며, 다음과 같이 표현할 수 있습니다.

(a1, a2, a3, ..., an)

튜플은 다음과 같은 성질을 가지고 있습니다.
1. 중복된 원소가 있을 수 있습니다. ex : (2, 3, 1, 2)

2. 원소에 정해진 순서가 있으며, 원소의 순서가 다르면 서로 다른 튜플입니다. ex : (1, 2, 3) ≠ (1, 3, 2)

3. 튜플의 원소 개수는 유한합니다.

원소의 개수가 n개이고, 중복되는 원소가 없는 튜플 (a1, a2, a3, ..., an)이 주어질 때(단, a1, a2, ..., an은 자연수), 이는 다음과 같이 집합 기호 '{', '}'를 이용해 표현할 수 있습니다

{{a1}, {a1, a2}, {a1, a2, a3}, {a1, a2, a3, a4}, ... {a1, a2, a3, a4, ..., an}}

예를 들어 튜플이 (2, 1, 3, 4)인 경우 이는 {{2}, {2, 1}, {2, 1, 3}, {2, 1, 3, 4}} 와 같이 표현할 수 있습니다. 이때, 집합은 원소의 순서가 바뀌어도 상관없으므로

{{2}, {2, 1}, {2, 1, 3}, {2, 1, 3, 4}}
{{2, 1, 3, 4}, {2}, {2, 1, 3}, {2, 1}}
{{1, 2, 3}, {2, 1}, {1, 2, 4, 3}, {2}}

는 모두 같은 튜플 (2, 1, 3, 4)를 나타냅니다.

특정 튜플을 표현하는 집합이 담긴 문자열 s가 매개변수로 주어질 때, s가 표현하는 튜플을 배열에 담아 return 하도록 solution 함수를 완성해주세요.
```

* 제한 사항

```
1. s의 길이는 5 이상 1,000,000 이하입니다.

2. s는 숫자와 '{', '}', ',' 로만 이루어져 있습니다.

3. 숫자가 0으로 시작하는 경우는 없습니다.

4. s는 항상 중복되는 원소가 없는 튜플을 올바르게 표현하고 있습니다

5. s가 표현하는 튜플의 원소는 1 이상 100,000 이하인 자연수입니다.

6. return 하는 배열의 길이가 1 이상 500 이하인 경우만 입력으로 주어집니다.
```

* 테스트케이스

```
s	result
"{{2},{2,1},{2,1,3},{2,1,3,4}}"	[2, 1, 3, 4]
"{{1,2,3},{2,1},{1,2,4,3},{2}}"	[2, 1, 3, 4]
"{{20,111},{111}}"	[111, 20]
"{{123}}"	[123]
"{{4,2,3},{3},{2,3,4,1},{2,3}}"	[3, 2, 4, 1]

입출력 예에 대한 설명
입출력 예 #1
문제 예시와 같습니다.

입출력 예 #2
문제 예시와 같습니다.

입출력 예 #3
(111, 20)을 집합 기호를 이용해 표현하면 {{111}, {111,20}}이 되며, 이는 {{20,111},{111}}과 같습니다.

입출력 예 #4
(123)을 집합 기호를 이용해 표현하면 {{123}} 입니다.

입출력 예 #5
(3, 2, 4, 1)을 집합 기호를 이용해 표현하면 {{3},{3,2},{3,2,4},{3,2,4,1}}이 되며, 이는 {{4,2,3},{3},{2,3,4,1},{2,3}}과 같습니다.
```

### 2) learned

### 3) solution

```javascript
/*1안로직
1. 입력값을 {}단위로 나눈다
2. {}나눈 값을 값의 길이로 정렬한다
3. 정답으로 제출할 answer 배열과 정렬값을 비교해 부족값 원자 값을 추가 한다
*/
function solution(s){
    //1
    let split = s.substr(2,s.length-4).split("},{")
    //2
    let sort =split.sort((a,b)=>{return a.length-b.length})
    //3
    let answer = []
    answer.push(Number(sort[0]))
    if(split.length>1){
        for(let i=1;i<split.length;i++){
            let sorted = sort[i].split(",")
            for(let j=0;j<sorted.length;j++){

                if(answer.indexOf(Number(sorted[j])) == -1){
                    answer.push(Number(sorted[j]))
                }
            }
        }
    }
    return answer
}
/*
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
```

## 21. 다음 큰 숫자

### 1) 문제

* 문제

```
자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.

예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.
```

* 제한 사항

```
n은 1,000,000 이하의 자연수 입니다.
```

* 테스트케이스

```
n	result
78	83
15	23

입출력 예 설명
입출력 예#1
문제 예시와 같습니다.
입출력 예#2
15(1111)의 다음 큰 숫자는 23(10111)입니다.
```

### 2) learned

### 3) solution

```javascript
/*1안 로직
1. n값을 2진수로 변환하면서 1의 갯수를 파악
2. n값을 1씩 증가시키면서 해당 값을 2진수로 변환해 1의 갯수를 파악한다.
1의 갯수가 1과 같다면 해당 값이 정답.
*/
function solution(n){
    let number = n
    let oneCheck = 0
    //1
    for(let i=19;i>=0;i--){
        let nCheck = Math.pow(2,i)
        if(nCheck<=number){
            oneCheck ++
            number -= nCheck
        }
    }
    //2
    let nextNubmer = n
    while(true){
        nextNubmer++
        let nextoneCheck = 0
        let nextNCheck = nextNubmer
        for(let i=19;i>=0;i--){
            let nCheck = Math.pow(2,i)
            if(nCheck<=nextNCheck){
                nextoneCheck ++
                nextNCheck -= nCheck
            }
        }
        if(nextoneCheck==oneCheck){
            break;
        }
    }
    return nextNubmer
}
/*
채점 결과
정확성: 70.0
효율성: 30.0
합계: 100.0 / 100.0
*/
```

## 22. 땅다먹기

### 1) 문제

* 문제

```
땅따먹기 게임을 하려고 합니다. 땅따먹기 게임의 땅(land)은 총 N행 4열로 이루어져 있고, 모든 칸에는 점수가 쓰여 있습니다. 1행부터 땅을 밟으며 한 행씩 내려올 때, 각 행의 4칸 중 한 칸만 밟으면서 내려와야 합니다. 단, 땅따먹기 게임에는 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.

예를 들면,

| 1 | 2 | 3 | 5 |

| 5 | 6 | 7 | 8 |

| 4 | 3 | 2 | 1 |

로 땅이 주어졌다면, 1행에서 네번째 칸 (5)를 밟았으면, 2행의 네번째 칸 (8)은 밟을 수 없습니다.

마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최대값을 return하는 solution 함수를 완성해 주세요. 위 예의 경우, 1행의 네번째 칸 (5), 2행의 세번째 칸 (7), 3행의 첫번째 칸 (4) 땅을 밟아 16점이 최고점이 되므로 16을 return 하면 됩니다.
```

* 제한 사항

```
1. 행의 개수 N : 100,000 이하의 자연수

2. 열의 개수는 4개이고, 땅(land)은 2차원 배열로 주어집니다.

3. 점수 : 100 이하의 자연수
```

* 테스트케이스

```

```

### 2) learned

### 3) solution

```javascript
land	answer
[[1,2,3,5],[5,6,7,8],[4,3,2,1]]	16
```

## 23. 폰켓몬

### 1) 문제

* 문제

```
당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다. 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.
홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다. 따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다. 예를 들어 연구실에 총 4마리의 폰켓몬이 있고, 각 폰켓몬의 종류 번호가 [3번, 1번, 2번, 3번]이라면 이는 3번 폰켓몬 두 마리, 1번 폰켓몬 한 마리, 2번 폰켓몬 한 마리가 있음을 나타냅니다. 이때, 4마리의 폰켓몬 중 2마리를 고르는 방법은 다음과 같이 6가지가 있습니다.

첫 번째(3번), 두 번째(1번) 폰켓몬을 선택
첫 번째(3번), 세 번째(2번) 폰켓몬을 선택
첫 번째(3번), 네 번째(3번) 폰켓몬을 선택
두 번째(1번), 세 번째(2번) 폰켓몬을 선택
두 번째(1번), 네 번째(3번) 폰켓몬을 선택
세 번째(2번), 네 번째(3번) 폰켓몬을 선택
```

* 제한 사항

```
1. nums는 폰켓몬의 종류 번호가 담긴 1차원 배열입니다.

2. nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.

3. 폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수로 나타냅니다.

4. 가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return 하면 됩니다.
```

* 테스트케이스

```

```

### 2) learned

### 3) solution

```javascript
/*
1. 최대 선택 가능한 종류 수는 n/2이다
2. 최대 선택 가능한 폰켓몬 종류 수 nCr 이다 
3. 1>2라면 정답은 nCr 1<=2라면 정답은 n/2이다
*/

function solution(nums){
    //1
    let maxSel = (nums.length/2)
    let kindsArray =[]
    kindsArray.push(nums[0])
    //2
    for(let i=1;i<nums.length;i++){
        let check = false
        kindsArray.forEach(e=>{
            if(e==nums[i]){
                check=true
            }
        })
        if(check==false){
            kindsArray.push(nums[i])
        }
    }
    //3
    return maxSel>kindsArray.length? kindsArray.length:maxSel
}
/*
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
```

## 24. 숫자의 표현

### 1) 문제

* 문제

```
Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15

자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.
```

* 제한 사항

```
n은 10,000 이하의 자연수 입니다.
```

* 테스트케이스

```
n	result
15	4
```

### 2) learned

### 3) solution

```javascript
/*
1. 1부터시작해 n까지 반복된다
2. 시작점은 1이다.
3. 시작점부터 시작해 연속된 숫자를 더해간다
4. 더해간 숫자가 n을 넘긴다면 중단하고 다음 시작점으로 이동해 해당 로직을 반복한다
5. 더해간 숫자가 n과 같다면 return값을 ++한다.
*/

function solution(n){
    let answer = 0;
    //1,2
    for(let i=1;i<=n;i++){
        let sum =0
        //3,4
        for(let j=i;j<=n;j++){
            sum+=j
            //5
            if(sum==n){
                answer++
            }
            if(sum>n){
                break;
            }
        }
    }
    return answer
}
/*
채점 결과
정확성: 70.0
효율성: 30.0
합계: 100.0 / 100.0
*/
```

## 25. 최댓값과 최솟값

### 1) 문제

* 문제

```
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 (최소값) (최대값)형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 1 2 3 4라면 1 4를 리턴하고, -1 -2 -3 -4라면 -4 -1을 리턴하면 됩니다.
```

* 제한 사항

```
s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
```

* 테스트케이스

```
s	return
1 2 3 4	1 4
-1 -2 -3 -4	-4 -1
-1 -1	-1 -1
```

### 2) learned

### 3) solution

```javascript
/* 
1. 문자열을 공백 단위로 잘라 배열로 바꾼다
2. 배열을 오른차 순으로 정렬 한다 
3. 배열의 첫번째 원소가 가장 작은 값, 배열의 마지막 원소가 가장 큰 값이다.
4. 가장 작은 값과 가장 큰 값을 문자열로 만들어 리턴한다.
*/

function solution(s){
    let sArray = s.split(" ").sort((a,b)=>{return a-b})
    return sArray[0]+" "+sArray[sArray.length-1]
}
```

## 26. 최솟값 만들기

### 1) 문제

* 문제

```
길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다.
배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다. 이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다. (단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.)

예를 들어 A = [1, 4, 2] , B = [5, 4, 4] 라면
```

* 제한 사항

```

```

* 테스트케이스

```

```

### 2) learned

### 3) solution

```javascript

```

## 27. 피보나치 수

### 1) 문제

* 문제

```
피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

예를들어

F(2) = F(0) + F(1) = 0 + 1 = 1
F(3) = F(1) + F(2) = 1 + 1 = 2
F(4) = F(2) + F(3) = 1 + 2 = 3
F(5) = F(3) + F(4) = 2 + 3 = 5
와 같이 이어집니다.

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

제한 사항
```

* 제한 사항

```
 n은 1이상, 100000이하인 자연수입니다.
```

* 테스트케이스

```
입출력 예
n	return
3	2
5	5
입출력 예 설명
피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.
```

### 2) learned

* 나머지 연산(Modular arithmetic)

```
1. 모듈러 연산 : 나눗셈 과정에 있어 오로지 나머지에만 관심을 가지는 연산이다.

a % n = r

2. 모듈러 연산의 성질
	1) (a+b) % n = {(a%n)+(b%n)} % n
	2) (a-b) % n = {(a%n)-(b%n)} % n
	3) (a*b) % n = {(a%n)*(b%n)} % n
	4) a의 b승 % n = (a%n)의 b승
	
```

### 3) solution

* 1안 

```javascript
function solution(n){
    let number = [0,1]
    for(let i=2;i<=n;i++){
        number.push(number[i-2]+number[i-1])
    }
    return number[number.length-1] %1234567
}
/*
채점 결과
정확성: 42.9(7-14 Numer(-(2^53 -1) 와 2^53 -1 사이의 숫자값)
합계: 42.9 / 100.0
*/
```

* 2안 : 모듈러 연산 사용

```javascript
function solution(n){
    let number =[0,1]
    for(let i=2;i<=n;i++){
        let nextN = ((number[i-2]%1234567)+(number[i-1]%1234567))%1234567
        number.push(nextN)
    }
    return number[number.length-1]
}
/*
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
```

## 28. 수식 최대화 

### 1) 문제

* 문제

```
 IT 벤처 회사를 운영하고 있는 라이언은 매년 사내 해커톤 대회를 개최하여 우승자에게 상금을 지급하고 있습니다.
 이번 대회에서는 우승자에게 지급되는 상금을 이전 대회와는 다르게 다음과 같은 방식으로 결정하려고 합니다.
 해커톤 대회에 참가하는 모든 참가자들에게는 숫자들과 3가지의 연산문자(+, -, *) 만으로 이루어진 연산 수식이 전달되며, 참가자의 미션은 전달받은 수식에 포함된 연산자의 우선순위를 자유롭게 재정의하여 만들 수 있는 가장 큰 숫자를 제출하는 것입니다.
 단, 연산자의 우선순위를 새로 정의할 때, 같은 순위의 연산자는 없어야 합니다. 즉, + > - > * 또는 - > * > + 등과 같이 연산자 우선순위를 정의할 수 있으나 +,* > - 또는 * > +,-처럼 2개 이상의 연산자가 동일한 순위를 가지도록 연산자 우선순위를 정의할 수는 없습니다. 수식에 포함된 연산자가 2개라면 정의할 수 있는 연산자 우선순위 조합은 2! = 2가지이며, 연산자가 3개라면 3! = 6가지 조합이 가능합니다.
 만약 계산된 결과가 음수라면 해당 숫자의 절댓값으로 변환하여 제출하며 제출한 숫자가 가장 큰 참가자를 우승자로 선정하며, 우승자가 제출한 숫자를 우승상금으로 지급하게 됩니다.

 예를 들어, 참가자 중 네오가 아래와 같은 수식을 전달받았다고 가정합니다.
"100-200*300-500+20"

 일반적으로 수학 및 전산학에서 약속된 연산자 우선순위에 따르면 더하기와 빼기는 서로 동등하며 곱하기는 더하기, 빼기에 비해 우선순위가 높아 * > +,- 로 우선순위가 정의되어 있습니다.
 대회 규칙에 따라 + > - > * 또는 - > * > + 등과 같이 연산자 우선순위를 정의할 수 있으나 +,* > - 또는 * > +,- 처럼 2개 이상의 연산자가 동일한 순위를 가지도록 연산자 우선순위를 정의할 수는 없습니다.
 수식에 연산자가 3개 주어졌으므로 가능한 연산자 우선순위 조합은 3! = 6가지이며, 그 중 + > - > * 로 연산자 우선순위를 정한다면 결괏값은 22,000원이 됩니다.
반면에 * > + > - 로 연산자 우선순위를 정한다면 수식의 결괏값은 -60,420 이지만, 규칙에 따라 우승 시 상금은 절댓값인 60,420원이 됩니다.

 참가자에게 주어진 연산 수식이 담긴 문자열 expression이 매개변수로 주어질 때, 우승 시 받을 수 있는 가장 큰 상금 금액을 return 하도록 solution 함수를 완성해주세요.
```

* 제한 사항

```
1. expression은 길이가 3 이상 100 이하인 문자열입니다.

2. expression은 공백문자, 괄호문자 없이 오로지 숫자와 3가지의 연산자(+, -, *) 만으로 이루어진 올바른 중위표기법(연산의 두 대상 사이에 연산기호를 사용하는 방식)으로 표현된 연산식입니다. 잘못된 연산식은 입력으로 주어지지 않습니다.

	1) 즉, "402+-561*"처럼 잘못된 수식은 올바른 중위표기법이 아니므로 주어지지 않습니다.
	
3. expression의 피연산자(operand)는 0 이상 999 이하의 숫자입니다.
	
	1) 즉, "100-2145*458+12"처럼 999를 초과하는 피연산자가 포함된 수식은 입력으로 주어지지 않습니다.
	
	2) "-56+100"처럼 피연산자가 음수인 수식도 입력으로 주어지지 않습니다

4. expression은 적어도 1개 이상의 연산자를 포함하고 있습니다.

5. 연산자 우선순위를 어떻게 적용하더라도, expression의 중간 계산값과 최종 결괏값은 절댓값이 263 - 1 이하가 되도록 입력이 주어집니다.

6. 같은 연산자끼리는 앞에 있는 것의 우선순위가 더 높습니다.
```

* 테스트케이스

```
expression	result
"100-200*300-500+20"	60420
"50*6-3*2"	300

입출력 예 #1
* > + > - 로 연산자 우선순위를 정했을 때, 가장 큰 절댓값을 얻을 수 있습니다.
연산 순서는 아래와 같습니다.
100-200*300-500+20
= 100-(200*300)-500+20
= 100-60000-(500+20)
= (100-60000)-520
= (-59900-520)
= -60420
따라서, 우승 시 받을 수 있는 상금은 |-60420| = 60420 입니다.

입출력 예 #2
- > * 로 연산자 우선순위를 정했을 때, 가장 큰 절댓값을 얻을 수 있습니다.
연산 순서는 아래와 같습니다.(expression에서 + 연산자는 나타나지 않았으므로, 고려할 필요가 없습니다.)
50*6-3*2
= 50*(6-3)*2
= (50*3)*2
= 150*2
= 300
따라서, 우승 시 받을 수 있는 상금은 300 입니다
```

### 2) learned

### 3) solution

```javascript

```

## 29. 행렬의 곱셈

### 1) 문제

* 문제

```
2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.
```

* 제한 사항

```
1. 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.

2. 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.

3. 곱할 수 있는 배열만 주어집니다.
```

* 테스트케이스

```
arr1	arr2	return
[[1, 4], [3, 2], [4, 1]]	[[3, 3], [3, 3]]	[[15, 15], [15, 15], [15, 15]]
[[2, 3, 2], [4, 2, 4], [3, 1, 4]]	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]	[[22, 22, 11], [36, 28, 18], [29, 20, 14]]
```

### 2) learned

### 3) solution

* 1안

```javascript
function solution(arr1, arr2) {
    let answer = [];
    let i = 0;
    let k = 0;
    //행
    for (let r = 0; r < arr1.length; r++) {
        let array = []
        //렬
        for (let c = 0; c < arr1[0].length; c++) {
            let value = 0
            let j = 0;
            //각 행*렬의 값
            while (true) {
                value += (arr1[k][j] * arr2[j][i])
                j++
                if (j == arr2.length) {
                    break;
                }
            }
            array.push(value)
            i++
        }
        k++
        i = 0
        answer.push(array)
    }
    return answer
}
/*
채점 결과
정확성: 0.0
합계: 0 / 100.0
*/
```

* 2안

```javascript
function solution(arr1, arr2) {
    var answer = [];
    var row1 = arr1.length;
    var col1 = arr1[0].length;
    var col2 = arr2[0].length;
    for (var s = 0; s < row1; s++) {
        answer.push([]);
        for (var x = 0; x < col2; x++) {
            answer[s].push(0);
        }
    }
    for (var i = 0; i < row1; i++) {
        for (var j = 0; j < col2; j++) {
            for (var k = 0; k < col1; k++) {
                answer[i][j] = answer[i][j] + arr1[i][k] * arr2[k][j];
            }
        }
    }
    return answer;
}
/*
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
```

## 30. JadenCase 문자열 만들기 

### 1) 문제

* 문제

```
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.
```

* 제한 사항

```
1. s는 길이 1 이상인 문자열입니다.

2. s는 알파벳과 공백문자(" ")로 이루어져 있습니다.

3. 첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다. ( 첫번째 입출력 예 참고 )
```

* 테스트케이스

```
s	return
3people unFollowed me	3people Unfollowed Me
for the last week	For The Last Week
```

### 2) learned

### 3) solution

```javascript
/*
1. 공백+영문자의 경우 대문자로 변경
2. 그외 영문자의 경우 소문자로 변경
*/
function solution(s){
    let answer =''
    let isFirst = true
    for(let i=0;i<s.length;i++){
        let checkWord = s.substr(i,1)
        // console.log(checkWord)
        if(checkWord != " "){
            // console.log("is not blank")
            if(isNaN(checkWord)==false){
                answer+=checkWord
                // console.log("is number")
            }else{
                // console.log("is not number")
                if(isFirst==true){
                    // console.log("is first word")
                    answer+=checkWord.toUpperCase()
                }else{
                    // console.log("is not first word")
                    answer+=checkWord.toLowerCase()
                }
            }
            isFirst = false
        }else{
            // console.log("is blank")
            answer+=checkWord
            isFirst = true
        }
        // console.log(answer)
        // console.log("====next====")
    }
    return answer
}
/*
정확성: 100.0
합계: 100.0 / 100.0
*/
```

## 31. N개의 최소공배수

### 1) 문제

* 문제

```
두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.
```

* 제한 사항

```
1. arr은 길이 1이상, 15이하인 배열입니다.

2. arr의 원소는 100 이하인 자연수입니다.
```

* 테스트케이스

```
arr	result
[2,6,8,14]	168
[1,2,3]	6
```

### 2) learned

### 3) solution

```javascript
function solution(arr){
    let answer =0;
    arr.sort((a,b)=>{return b-a})
    let n = arr[0]
    while(true){
        let check = false
        for(let i=0;i<arr.length;i++){
            if(n%arr[i]!=0){
                check = true
                break
            }
        }
        if(check==true){
            n++
        }else{
            answer = n
            break;
        }
    }
    return answer
}
/*
정확성: 100.0
합계: 100.0 / 100.0
*/
```

## 32. 짝지어 제거하기

### 1) 문제

* 문제

```
짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.

예를 들어, 문자열 S = baabaa 라면

b aa baa → bb aa → aa →

의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.
```

* 제한 사항

```
1. 문자열의 길이 : 1,000,000이하의 자연수

2. 문자열은 모두 소문자로 이루어져 있습니다.
```

* 테스트케이스

```
s	result
baabaa	1
cdcd	0
입출력 예 설명
입출력 예 #1
위의 예시와 같습니다.
입출력 예 #2
문자열이 남아있지만 짝지어 제거할 수 있는 문자열이 더 이상 존재하지 않기 때문에 0을 반환합니다.
```

### 2) learned

### 3) solution

```javascript
function solution(s){
    let answer=0;
    let isChecking =s.substr(0,1)
    let now
    if(s.length>1){
        for(let n=1;n<=s.length-1;n++){
            // 비교할 두 문자열을 고르는 과정
            if(isChecking.length>=1){
                now = isChecking.substr(isChecking.length-1,1)
                isChecking = isChecking.substr(0,isChecking.length-1)
            }else{
                now =''
            }
            let next =s.substr(n,1)
            // 두 문자열을 비교
            if(now==next){
                if(n==s.length-1&&isChecking.length ==0){
                    answer=1 
                }
            }else{
                isChecking = isChecking+now+next
            }
            // 조기 종결 조건 남은 문자열의 갯수 < 지우지 못한 문자열의 갯수
            if(isChecking.length>(s.length-1-n)){
                break;
            }
        }
    }
    return answer 
}
/*
정확성: 60.2
효율성: 5.0(1,3,4,5,6,7,8)
합계: 65.2 / 100.0
*/
```

* 2안

```javascript
function solution(s){
    let answer = 0;
    let sArray = s.split("")
    let nowArray = []
    nowArray.push(sArray.shift())
    
    if(s.length>0){
        while(sArray.length>0){
            let nowWord = nowArray.pop()
            let nextWord = sArray.shift()
            if(nowWord!=nextWord){
                if(nowWord != undefined){
                    nowArray.push(nowWord)
                }
                nowArray.push(nextWord)
            }
        }
        
        if(nowArray.length==0){
            answer = 1
        }
    }
    return answer
}
/*
정확성: 60.2
효율성: 0.0(1,2,3,4,5,6,7,8)
합계: 60.2 / 100.0
*/
```

## 33. 소수 만들기

### 1) 문제

* 문제

```
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
```

* 제한 사항

```
1. nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.

2. nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
```

* 테스트케이스

```
nums	result
[1,2,3,4]	1
[1,2,7,6,4]	4
입출력 예 설명
입출력 예 #1
[1,2,4]를 이용해서 7을 만들 수 있습니다.

입출력 예 #2
[1,2,4]를 이용해서 7을 만들 수 있습니다.
[1,4,6]을 이용해서 11을 만들 수 있습니다.
[2,4,7]을 이용해서 13을 만들 수 있습니다.
[4,6,7]을 이용해서 17을 만들 수 있습니다.
```

### 2) learned

* 소수를 구하는 효율적인 알고리즘

```
1. 소수, Prime Number : 소수는 자신보다 작은 두개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수이다.

2. 소수 판별 알고리즘

	1) 2부터 판별하는 수 전까지 나눠보고 나머지가 0이 안나온다면 소수로 정의한다. 해당 수까지 모두 확인해야하므로 시간복잡도는 O(N)이 되고, 가장 원초적인 방법이다.
	
	2) 해당숫자의 절반까지만 확인하는 방법이다. 이 원리는 절반 이상의 숫자들은 확인이 필요 없는 숫자들이기 때문이다. 예를들어 80이란 숫자에서 자기자신을 제외하고 절반을 초과하는 숫자에서 나눴을때 나머지가 0이되는 숫자는 나올수가 없다. 해당 풀이를 사용하면 최대 N/2번 조회를 한다. 시간복잡도에서 상수는 제외하므로 해당 풀이의 시간복잡도도 O(N)이 된다.
	
	3) 해당 숫자의 √N 까지 확인하는 방법이다. 이 원리는 약수의 중심을 구하는 방법이다. 시간복잡도는 O(√N)이 된다.
```



### 3) solution

```javascript
function solution(nums){
    let answer =0;
    let nArray = []
    // 숫자 3개를 더해 값을 만든다
    for(let first=0;first<nums.length-2;first++){
        for(let second=first+1;second<nums.length-1;second++){
            for(let third=first+2;third<nums.length;third++){
                nArray.push(nums[first]+nums[second]+nums[third])
            }
        }
    }
    // 만든 값을 소수 검사한다
    let answer = nArray.length
    nArray.forEach(e=>function(e){
        for(let n=2; n*n<=e;n++){
            if(e%n==0){
                answer--
                break;
            }
        }
    })
    return answer
}
/*
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
```

## 34. 점프와 순간 이동

### 1) 문제

* 문제

```
 OO 연구소는 한 번에 K 칸을 앞으로 점프하거나, (현재까지 온 거리) x 2 에 해당하는 위치로 순간이동을 할 수 있는 특수한 기능을 가진 아이언 슈트를 개발하여 판매하고 있습니다. 이 아이언 슈트는 건전지로 작동되는데, 순간이동을 하면 건전지 사용량이 줄지 않지만, 앞으로 K 칸을 점프하면 K 만큼의 건전지 사용량이 듭니다. 그러므로 아이언 슈트를 착용하고 이동할 때는 순간 이동을 하는 것이 더 효율적입니다. 아이언 슈트 구매자는 아이언 슈트를 착용하고 거리가 N 만큼 떨어져 있는 장소로 가려고 합니다. 단, 건전지 사용량을 줄이기 위해 점프로 이동하는 것은 최소로 하려고 합니다. 아이언 슈트 구매자가 이동하려는 거리 N이 주어졌을 때, 사용해야 하는 건전지 사용량의 최솟값을 return하는 solution 함수를 만들어 주세요.
 예를 들어 거리가 5만큼 떨어져 있는 장소로 가려고 합니다. 아이언 슈트를 입고 거리가 5만큼 떨어져 있는 장소로 갈 수 있는 경우의 수는 여러 가지입니다.
 
 1. 처음 위치 0 에서 5 칸을 앞으로 점프하면 바로 도착하지만, 건전지 사용량이 5 만큼 듭니다.
 
 2. 처음 위치 0 에서 2 칸을 앞으로 점프한 다음 순간이동 하면 (현재까지 온 거리 : 2) x 2에 해당하는 위치로 이동할 수 있으므로 위치 4로 이동합니다. 이때 1 칸을 앞으로 점프하면 도착하므로 건전지 사용량이 3 만큼 듭니다.
 
 3. 처음 위치 0 에서 1 칸을 앞으로 점프한 다음 순간이동 하면 (현재까지 온 거리 : 1) x 2에 해당하는 위치로 이동할 수 있으므로 위치 2로 이동됩니다. 이때 다시 순간이동 하면 (현재까지 온 거리 : 2) x 2 만큼 이동할 수 있으므로 위치 4로 이동합니다. 이때 1 칸을 앞으로 점프하면 도착하므로 건전지 사용량이 2 만큼 듭니다.
 
 위의 3가지 경우 거리가 5만큼 떨어져 있는 장소로 가기 위해서 3번째 경우가 건전지 사용량이 가장 적으므로 답은 2가 됩니다.
```

* 제한 사항

```
1. 숫자 N: 1 이상 10억 이하의 자연수

2. 숫자 K: 1 이상의 자연수
```

* 테스트케이스

```
입출력 예
N	result
5	2
6	2
5000	5

입출력 예 설명
입출력 예 #1
위의 예시와 같습니다.

입출력 예 #2
처음 위치 0 에서 1 칸을 앞으로 점프한 다음 순간이동 하면 (현재까지 온 거리 : 1) x 2에 해당하는 위치로 이동할 수 있으므로 위치 2로 이동합니다. 이때 1 칸을 앞으로 점프하면 위치3으로 이동합니다. 이때 다시 순간이동 하면 (현재까지 온 거리 : 3) x 2 이동할 수 있으므로 위치 6에 도착합니다. 이 경우가 건전지 사용량이 가장 적으므로 2를 반환해주면 됩니다.

입출력 예 #3
위와 같은 방식으로 합니다.
```

### 2) learned

### 3) solution

```javascript
function solution(n){
    let answer = 0
    let number = n
    while(number>0){
        if(number % 2 !=0){
            number-=1
            answer++
        }else{
            number /=2
        }
    }
    return answer 
}
/*
채점 결과
정확성: 60.0
효율성: 40.0
합계: 100.0 / 100.0
*/
```

## 35. 영어 끝말잇기

### 1) 문제

* 문제

```
1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있습니다. 영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다.

1. 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.

2. 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.

3. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.

4. 이전에 등장했던 단어는 사용할 수 없습니다.

5. 한 글자인 단어는 인정되지 않습니다

다음은 3명이 끝말잇기를 하는 상황을 나타냅니다.

tank → kick → know → wheel → land → dream → mother → robot → tank

위 끝말잇기는 다음과 같이 진행됩니다.

1번 사람이 자신의 첫 번째 차례에 tank를 말합니다.
2번 사람이 자신의 첫 번째 차례에 kick을 말합니다.
3번 사람이 자신의 첫 번째 차례에 know를 말합니다.
1번 사람이 자신의 두 번째 차례에 wheel을 말합니다.
(계속 진행)

끝말잇기를 계속 진행해 나가다 보면, 3번 사람이 자신의 세 번째 차례에 말한 tank 라는 단어는 이전에 등장했던 단어이므로 탈락하게 됩니다.

사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때, 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return 하도록 solution 함수를 완성해주세요.
```

* 제한 사항

```
1. 끝말잇기에 참여하는 사람의 수 n은 2 이상 10 이하의 자연수입니다.

2. words는 끝말잇기에 사용한 단어들이 순서대로 들어있는 배열이며, 길이는 n 이상 100 이하입니다.

3. 단어의 길이는 2 이상 50 이하입니다.

4. 모든 단어는 알파벳 소문자로만 이루어져 있습니다

5. 끝말잇기에 사용되는 단어의 뜻(의미)은 신경 쓰지 않으셔도 됩니다.

6. 정답은 [ 번호, 차례 ] 형태로 return 해주세요.

7. 만약 주어진 단어들로 탈락자가 생기지 않는다면, [0, 0]을 return 해주세요.
```

* 테스트케이스

```
n	words	result
3	[tank, kick, know, wheel, land, dream, mother, robot, tank]	[3,3]
5	[hello, observe, effect, take, either, recognize, encourage, ensure, establish, hang, gather, refer, reference, estimate, executive]	[0,0]
2	[hello, one, even, never, now, world, draw]	[1,3]

입출력 예 #1
3명의 사람이 끝말잇기에 참여하고 있습니다.

1번 사람 : tank, wheel, mother
2번 사람 : kick, land, robot
3번 사람 : know, dream, tank
와 같은 순서로 말을 하게 되며, 3번 사람이 자신의 세 번째 차례에 말한 tank라는 단어가 1번 사람이 자신의 첫 번째 차례에 말한 tank와 같으므로 3번 사람이 자신의 세 번째 차례로 말을 할 때 처음 탈락자가 나오게 됩니다.

입출력 예 #2
5명의 사람이 끝말잇기에 참여하고 있습니다.

1번 사람 : hello, recognize, gather
2번 사람 : observe, encourage, refer
3번 사람 : effect, ensure, reference
4번 사람 : take, establish, estimate
5번 사람 : either, hang, executive
와 같은 순서로 말을 하게 되며, 이 경우는 주어진 단어로만으로는 탈락자가 발생하지 않습니다. 따라서 [0, 0]을 return하면 됩니다.

입출력 예 #3
2명의 사람이 끝말잇기에 참여하고 있습니다.

1번 사람 : hello, even, now, draw
2번 사람 : one, never, world
와 같은 순서로 말을 하게 되며, 1번 사람이 자신의 세 번째 차례에 'r'로 시작하는 단어 대신, n으로 시작하는 now를 말했기 때문에 이때 처음 탈락자가 나오게 됩니다.
```

### 2) learned

### 3) solution

```javascript
function solution(n,words){
    let checked = false
    let answer = []
    let i=0
    let a=1,b=1
    while(true){
        let nowLast = words[i].substr(words[i].length-1,1)
        let nextFirst = words[i+1].substr(0,1)
        if(nowLast==nextFirst){
            for(let j=0;j<=i;j++){
                if(words[j]==words[i+1]){
                    checked = true
                }
            }
        }else{
            checked = true
        }
        a++
        if(a>n){
            a-=n
            b++
        }

        if(checked == true){

            answer = [a,b]
            break;
        }else{
            i++
            if(i==words.length-1){
                answer = [0,0]
                break;
            }
        }
    }
    return answer
}
/*
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
```

## 36. 예상 대진표

### 1) 문제

* 문제

```
△△ 게임대회가 개최되었습니다. 이 대회는 N명이 참가하고, 토너먼트 형식으로 진행됩니다. N명의 참가자는 각각 1부터 N번을 차례대로 배정받습니다. 그리고, 1번↔2번, 3번↔4번, ... , N-1번↔N번의 참가자끼리 게임을 진행합니다. 각 게임에서 이긴 사람은 다음 라운드에 진출할 수 있습니다. 이때, 다음 라운드에 진출할 참가자의 번호는 다시 1번부터 N/2번을 차례대로 배정받습니다. 만약 1번↔2번 끼리 겨루는 게임에서 2번이 승리했다면 다음 라운드에서 1번을 부여받고, 3번↔4번에서 겨루는 게임에서 3번이 승리했다면 다음 라운드에서 2번을 부여받게 됩니다. 게임은 최종 한 명이 남을 때까지 진행됩니다.

이때, 처음 라운드에서 A번을 가진 참가자는 경쟁자로 생각하는 B번 참가자와 몇 번째 라운드에서 만나는지 궁금해졌습니다. 게임 참가자 수 N, 참가자 번호 A, 경쟁자 번호 B가 함수 solution의 매개변수로 주어질 때, 처음 라운드에서 A번을 가진 참가자는 경쟁자로 생각하는 B번 참가자와 몇 번째 라운드에서 만나는지 return 하는 solution 함수를 완성해 주세요. 단, A번 참가자와 B번 참가자는 서로 붙게 되기 전까지 항상 이긴다고 가정합니다.
```

* 제한 사항

```
1. N : 21 이상 220 이하인 자연수 (2의 지수 승으로 주어지므로 부전승은 발생하지 않습니다.)

2. A, B : N 이하인 자연수 (단, A ≠ B 입니다.)
```

* 테스트케이스

```
N	A	B	answer
8	4	7	3

입출력 예 설명
입출력 예 #1
첫 번째 라운드에서 4번 참가자는 3번 참가자와 붙게 되고, 7번 참가자는 8번 참가자와 붙게 됩니다. 항상 이긴다고 가정했으므로 4번 참가자는 다음 라운드에서 2번이 되고, 7번 참가자는 4번이 됩니다. 두 번째 라운드에서 2번은 1번과 붙게 되고, 4번은 3번과 붙게 됩니다. 항상 이긴다고 가정했으므로 2번은 다음 라운드에서 1번이 되고, 4번은 2번이 됩니다. 세 번째 라운드에서 1번과 2번으로 두 참가자가 붙게 되므로 3을 return 하면 됩니다.
```

### 2) learned

### 3) solution

```javascript
function solution(n,a,b){
    let answer=1;
    while(true){
        if(Math.pow(2,answer)==n){
            break;
        }else{
            answer++
        }
    }
    let divide = n/2
    while(true){
        if(a<=divide){
            if(b>divide){
                break;
            }else{
                divide /=2
            }
        }
        if(a>divide && b<=divide){
            if(b<=divide){
                break;
            }else{
                divide *= (1.5)
            }
            break;
        }
        answer--
    }
    return answer
}
```


## 37. [1차]뉴스 클러스터링 

### 1) 문제

* 문제

```
뉴스 클러스터링
여러 언론사에서 쏟아지는 뉴스, 특히 속보성 뉴스를 보면 비슷비슷한 제목의 기사가 많아 정작 필요한 기사를 찾기가 어렵다. Daum 뉴스의 개발 업무를 맡게 된 신입사원 튜브는 사용자들이 편리하게 다양한 뉴스를 찾아볼 수 있도록 문제점을 개선하는 업무를 맡게 되었다.

개발의 방향을 잡기 위해 튜브는 우선 최근 화제가 되고 있는 카카오 신입 개발자 공채 관련 기사를 검색해보았다.

카카오 첫 공채..'블라인드' 방식 채용
카카오, 합병 후 첫 공채.. 블라인드 전형으로 개발자 채용
카카오, 블라인드 전형으로 신입 개발자 공채
카카오 공채, 신입 개발자 코딩 능력만 본다
카카오, 신입 공채.. 코딩 실력만 본다
카카오 코딩 능력만으로 2018 신입 개발자 뽑는다
기사의 제목을 기준으로 블라인드 전형에 주목하는 기사와 코딩 테스트에 주목하는 기사로 나뉘는 걸 발견했다. 튜브는 이들을 각각 묶어서 보여주면 카카오 공채 관련 기사를 찾아보는 사용자에게 유용할 듯싶었다.

유사한 기사를 묶는 기준을 정하기 위해서 논문과 자료를 조사하던 튜브는 자카드 유사도라는 방법을 찾아냈다.

자카드 유사도는 집합 간의 유사도를 검사하는 여러 방법 중의 하나로 알려져 있다. 두 집합 A, B 사이의 자카드 유사도 J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의된다.

예를 들어 집합 A = {1, 2, 3}, 집합 B = {2, 3, 4}라고 할 때, 교집합 A ∩ B = {2, 3}, 합집합 A ∪ B = {1, 2, 3, 4}이 되므로, 집합 A, B 사이의 자카드 유사도 J(A, B) = 2/4 = 0.5가 된다. 집합 A와 집합 B가 모두 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 J(A, B) = 1로 정의한다.

자카드 유사도는 원소의 중복을 허용하는 다중집합에 대해서 확장할 수 있다. 다중집합 A는 원소 1을 3개 가지고 있고, 다중집합 B는 원소 1을 5개 가지고 있다고 하자. 이 다중집합의 교집합 A ∩ B는 원소 1을 min(3, 5)인 3개, 합집합 A ∪ B는 원소 1을 max(3, 5)인 5개 가지게 된다. 다중집합 A = {1, 1, 2, 2, 3}, 다중집합 B = {1, 2, 2, 4, 5}라고 하면, 교집합 A ∩ B = {1, 2, 2}, 합집합 A ∪ B = {1, 1, 2, 2, 3, 4, 5}가 되므로, 자카드 유사도 J(A, B) = 3/7, 약 0.42가 된다.

이를 이용하여 문자열 사이의 유사도를 계산하는데 이용할 수 있다. 문자열 FRANCE와 FRENCH가 주어졌을 때, 이를 두 글자씩 끊어서 다중집합을 만들 수 있다. 각각 {FR, RA, AN, NC, CE}, {FR, RE, EN, NC, CH}가 되며, 교집합은 {FR, NC}, 합집합은 {FR, RA, AN, NC, CE, RE, EN, CH}가 되므로, 두 문자열 사이의 자카드 유사도 J("FRANCE", "FRENCH") = 2/8 = 0.25가 된다.
```

* 제한 사항

```

입력 형식

입력으로는 str1과 str2의 두 문자열이 들어온다. 각 문자열의 길이는 2 이상, 1,000 이하이다.
입력으로 들어온 문자열은 두 글자씩 끊어서 다중집합의 원소로 만든다. 이때 영문자로 된 글자 쌍만 유효하고, 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다. 예를 들어 ab+가 입력으로 들어오면, ab만 다중집합의 원소로 삼고, b+는 버린다.
다중집합 원소 사이를 비교할 때, 대문자와 소문자의 차이는 무시한다. AB와 Ab, ab는 같은 원소로 취급한다.

출력 형식

입력으로 들어온 두 문자열의 자카드 유사도를 출력한다. 유사도 값은 0에서 1 사이의 실수이므로, 이를 다루기 쉽도록 65536을 곱한 후에 소수점 아래를 버리고 정수부만 출력한다.
```

* 테스트케이스

```
예제 입출력
str1	str2	answer
FRANCE	french	16384
handshake	shake hands	65536
aa1+aa2	AAAA12	43690
E=M*C^2	e=m*c^2	65536
```

### 2) learned

### 3) solution

```javascript
function solution(str1, str2){
    let i = []
    let u = []
    let s1Array = []
    let s2Array = []
    for(let no=0;no<str1.length-1;no++){
        let word1 = str1.substr(no,2)
        let w1c = ''
        for(let k=0;k<2;k++){
            let w1 = word1.substr(k,1)
            if((w1>="A"&&w1<="Z")||(w1>="a"&&w1<="z")){
                w1c+=w1.toLowerCase()
            }
        }
        if(w1c.length==2){
            s1Array.push(w1c)
        }
    }
    for(let no=0;no<str2.length-1;no++){
        let word2 = str2.substr(no,2)
        let w2c = ''
        for(let k=0;k<2;k++){
            let w2 = word2.substr(k,1)
            if((w2>="A"&&w2<="Z")||(w2>="a"&&w2<="z")){
                w2c+=w2.toLowerCase()
            }
        }
        if(w2c.length==2){
            s2Array.push(w2c)
        }
    }
    console.log(s1Array)
    console.log(s2Array)
    for(let a=0;a<s1Array.length;a++){
        let e = s1Array[a]
        let filter1 = s1Array.filter(word=> word==e)
        let filter2 = s2Array.filter(word=> word==e)
        let check = true
        u.forEach(c=>{
            if(c==e){
                check = false
            }
        })
        if(check==true){
            let max = Math.max(filter1.length,filter2.length)
            let min = Math.min(filter1.length,filter2.length)
            for(let input=0;input<max;input++){
                if(input<min){
                    i.push(e)
                }
                u.push(e)
            }
        }
    }
    for(let a=0;a<s1Array.length;a++){
        let e = s2Array[a]
        let filter1 = s1Array.filter(word=> word==e)
        let filter2 = s2Array.filter(word=> word==e)
        let check = true
        u.forEach(c=>{
            if(c==e){
                check = false
            }
        })
        if(check==true){
            let max = Math.max(filter1.length,filter2.length)
            let min = Math.min(filter1.length,filter2.length)
            for(let input=0;input<max;input++){
                if(input<min){
                    i.push(e)
                }
                u.push(e)
            }
        }
    }
    let answer 
    if(u.length==0){
        answer = 65536
    }else{
        answer = Math.floor(65536*(i.length/u.length))
    }
    return answer
}
/*
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (5.30ms, 30.5MB)
테스트 2 〉	통과 (5.80ms, 30.7MB)
테스트 3 〉	통과 (5.42ms, 30.3MB)
테스트 4 〉	통과 (86.58ms, 33MB)
테스트 5 〉	실패 (4.97ms, 30.2MB)
테스트 6 〉	통과 (5.45ms, 30.5MB)
테스트 7 〉	통과 (6.32ms, 30.4MB)
테스트 8 〉	통과 (5.35ms, 30.4MB)
테스트 9 〉	실패 (6.25ms, 30.3MB)
테스트 10 〉	통과 (7.95ms, 30.5MB)
테스트 11 〉	실패 (6.91ms, 30.5MB)
테스트 12 〉	통과 (4.35ms, 30MB)
테스트 13 〉	통과 (5.93ms, 30.1MB)
채점 결과
정확성: 76.9
합계: 76.9 / 100.0
*/
```

## 38. [1차] 프렌즈4블록

### 1) 문제

* 문제

```
블라인드 공채를 통과한 신입 사원 라이언은 신규 게임 개발 업무를 맡게 되었다. 이번에 출시할 게임 제목은 프렌즈4블록.
같은 모양의 카카오프렌즈 블록이 2×2 형태로 4개가 붙어있을 경우 사라지면서 점수를 얻는 게임이다.

만약 판이 위와 같이 주어질 경우, 라이언이 2×2로 배치된 7개 블록과 콘이 2×2로 배치된 4개 블록이 지워진다. 같은 블록은 여러 2×2에 포함될 수 있으며, 지워지는 조건에 만족하는 2×2 모양이 여러 개 있다면 한꺼번에 지워진다.

블록이 지워진 후에 위에 있는 블록이 아래로 떨어져 빈 공간을 채우게 된다.

만약 빈 공간을 채운 후에 다시 2×2 형태로 같은 모양의 블록이 모이면 다시 지워지고 떨어지고를 반복하게 된다.

위 초기 배치를 문자로 표시하면 아래와 같다.

TTTANT
RRFACC
RRRFCC
TRRRAA
TTMMMF
TMMTTJ

각 문자는 라이언(R), 무지(M), 어피치(A), 프로도(F), 네오(N), 튜브(T), 제이지(J), 콘(C)을 의미한다

입력으로 블록의 첫 배치가 주어졌을 때, 지워지는 블록은 모두 몇 개인지 판단하는 프로그램을 제작하라.
```

* 제한 사항

```
입력 형식

입력으로 판의 높이 m, 폭 n과 판의 배치 정보 board가 들어온다.
2 ≦ n, m ≦ 30
board는 길이 n인 문자열 m개의 배열로 주어진다. 블록을 나타내는 문자는 대문자 A에서 Z가 사용된다.

출력 형식

입력으로 주어진 판 정보를 가지고 몇 개의 블록이 지워질지 출력하라.
```

* 테스트케이스

```
입출력 예제
m	n	board	answer
4	5	[CCBDE, AAADE, AAABF, CCBBF]	14
6	6	[TTTANT, RRFACC, RRRFCC, TRRRAA, TTMMMF, TMMTTJ]	15

예제에 대한 설명
입출력 예제 1의 경우, 첫 번째에는 A 블록 6개가 지워지고, 두 번째에는 B 블록 4개와 C 블록 4개가 지워져, 모두 14개의 블록이 지워진다.
입출력 예제 2는 본문 설명에 있는 그림을 옮긴 것이다. 11개와 4개의 블록이 차례로 지워지며, 모두 15개의 블록이 지워진다.
```

### 2) learned

### 3) solution

```javascript
function solution(m,n,board){
    let boardA = []
    let answer =0
    // board를 배열로 변환
    for(let k=0;k<m;k++){
        let array = board[k].split("")
        boardA.push(array)
    }
    // 지워지는 블록이 반복 확인 
    while(true){
        let check=[]
        for(let h=0;h<m-1;h++){
            for(let r=0;r<n-1;r++){
                let block = boardA[h][r]
                if(block !="0"){
                    if(block==boardA[h][r+1]){
                        if(block==boardA[h+1][r]){
                            if(block==boardA[h+1][r+1]){
                                check.push([h,r])
                            }
                        }
                    }
                }
            }
        }
        // 지워지는 블록이 있다면 해당 부분을 
        if(check.length>0){
            check.forEach(e=>{
                boardA[e[0]][e[1]]="0"
                boardA[e[0]][e[1]+1]="0"
                boardA[e[0]+1][e[1]]="0"
                boardA[e[0]+1][e[1]+1]="0"
            })
            let cAfter =[]
            for(let r=0;r<n;r++){
                let cArray = []
                for(let h=0;h<m;h++){
                    if(boardA[h][r]=="0"){
                        cArray.unshift("0")
                    }else{
                        cArray.push(boardA[h][r])
                    }
                }
                cAfter.push(cArray)
            }
            boardA = []
            for(let h=0;h<cAfter[0].length;h++){
                let bArray = []
                for(let r=0;r<cAfter.length;r++){
                    bArray.push(cAfter[r][h])
                }
                boardA.push(bArray)
            }
        }else{
            for(let h=0;h<m;h++){
                for(let r=0;r<n;r++){
                    if(boardA[h][r]=="0"){
                        answer++
                    }
                }
            }
            break;
        }
    }
    return answer
}

/*
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.30ms, 30MB)
테스트 2 〉	통과 (0.32ms, 30MB)
테스트 3 〉	통과 (0.12ms, 30.1MB)
테스트 4 〉	통과 (2.18ms, 30MB)
테스트 5 〉	통과 (22.25ms, 35.2MB)
테스트 6 〉	통과 (12.50ms, 34MB)
테스트 7 〉	통과 (0.52ms, 29.9MB)
테스트 8 〉	통과 (1.12ms, 30.1MB)
테스트 9 〉	통과 (0.27ms, 30MB)
테스트 10 〉	통과 (0.77ms, 30MB)
테스트 11 〉	통과 (1.54ms, 30MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
```

## 39. [1차] 캐시

### 1) 문제

* 문제

```
지도개발팀에서 근무하는 제이지는 지도에서 도시 이름을 검색하면 해당 도시와 관련된 맛집 게시물들을 데이터베이스에서 읽어 보여주는 서비스를 개발하고 있다.
이 프로그램의 테스팅 업무를 담당하고 있는 어피치는 서비스를 오픈하기 전 각 로직에 대한 성능 측정을 수행하였는데, 제이지가 작성한 부분 중 데이터베이스에서 게시물을 가져오는 부분의 실행시간이 너무 오래 걸린다는 것을 알게 되었다.
어피치는 제이지에게 해당 로직을 개선하라고 닦달하기 시작하였고, 제이지는 DB 캐시를 적용하여 성능 개선을 시도하고 있지만 캐시 크기를 얼마로 해야 효율적인지 몰라 난감한 상황이다.

어피치에게 시달리는 제이지를 도와, DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램을 작성하시오.
```

* 제한 사항

```
입력 형식

캐시 크기(cacheSize)와 도시이름 배열(cities)을 입력받는다.
cacheSize는 정수이며, 범위는 0 ≦ cacheSize ≦ 30 이다.
cities는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.
각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 도시 이름은 최대 20자로 이루어져 있다.

출력 형식

입력된 도시이름 배열을 순서대로 처리할 때, 총 실행시간을 출력한다.

조건

캐시 교체 알고리즘은 LRU(Least Recently Used)를 사용한다.
cache hit일 경우 실행시간은 1이다.
cache miss일 경우 실행시간은 5이다.
```

* 테스트케이스

```
캐시크기(cacheSize)	도시이름(cities)	실행시간
3	[Jeju, Pangyo, Seoul, NewYork, LA, Jeju, Pangyo, Seoul, NewYork, LA]	50
3	[Jeju, Pangyo, Seoul, Jeju, Pangyo, Seoul, Jeju, Pangyo, Seoul]	21
2	[Jeju, Pangyo, Seoul, NewYork, LA, SanFrancisco, Seoul, Rome, Paris, Jeju, NewYork, Rome]	60
5	[Jeju, Pangyo, Seoul, NewYork, LA, SanFrancisco, Seoul, Rome, Paris, Jeju, NewYork, Rome]	52
2	[Jeju, Pangyo, NewYork, newyork]	16
0	[Jeju, Pangyo, Seoul, NewYork, LA]	25
```

### 2) learned

### 3) solution

```javascript

```

## 40. 오픈채팅방 

### 1) 문제

* 문제

```
카카오톡 오픈채팅방에서는 친구가 아닌 사람들과 대화를 할 수 있는데, 본래 닉네임이 아닌 가상의 닉네임을 사용하여 채팅방에 들어갈 수 있다.

신입사원인 김크루는 카카오톡 오픈 채팅방을 개설한 사람을 위해, 다양한 사람들이 들어오고, 나가는 것을 지켜볼 수 있는 관리자창을 만들기로 했다. 채팅방에 누군가 들어오면 다음 메시지가 출력된다.

[닉네임]님이 들어왔습니다.

채팅방에서 누군가 나가면 다음 메시지가 출력된다.

[닉네임]님이 나갔습니다.

채팅방에서 닉네임을 변경하는 방법은 다음과 같이 두 가지이다.

채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
채팅방에서 닉네임을 변경한다.
닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 전부 변경된다.

예를 들어, 채팅방에 Muzi와 Prodo라는 닉네임을 사용하는 사람이 순서대로 들어오면 채팅방에는 다음과 같이 메시지가 출력된다.

Muzi님이 들어왔습니다.
Prodo님이 들어왔습니다.

채팅방에 있던 사람이 나가면 채팅방에는 다음과 같이 메시지가 남는다.

Muzi님이 들어왔습니다.
Prodo님이 들어왔습니다.
Muzi님이 나갔습니다.

Muzi가 나간후 다시 들어올 때, Prodo 라는 닉네임으로 들어올 경우 기존에 채팅방에 남아있던 Muzi도 Prodo로 다음과 같이 변경된다.

Prodo님이 들어왔습니다.
Prodo님이 들어왔습니다.
Prodo님이 나갔습니다.
Prodo님이 들어왔습니다.

채팅방은 중복 닉네임을 허용하기 때문에, 현재 채팅방에는 Prodo라는 닉네임을 사용하는 사람이 두 명이 있다. 이제, 채팅방에 두 번째로 들어왔던 Prodo가 Ryan으로 닉네임을 변경하면 채팅방 메시지는 다음과 같이 변경된다.

Prodo님이 들어왔습니다.
Ryan님이 들어왔습니다.
Prodo님이 나갔습니다.
Prodo님이 들어왔습니다.

채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열 record가 매개변수로 주어질 때, 모든 기록이 처리된 후, 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 return 하도록 solution 함수를 완성하라.
```

* 제한 사항

```
1. record는 다음과 같은 문자열이 담긴 배열이며, 길이는 1 이상 100,000 이하이다.

2. 다음은 record에 담긴 문자열에 대한 설명이다.
	1) 모든 유저는 [유저 아이디]로 구분한다.
	2) [유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 - Enter [유저 아이디] [닉네임] (ex. Enter uid1234 Muzi)
	3) [유저 아이디] 사용자가 채팅방에서 퇴장 - Leave [유저 아이디] (ex. Leave uid1234)
	4) [유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 - Change [유저 아이디] [닉네임] (ex. Change uid1234 Muzi)
	5) 첫 단어는 Enter, Leave, Change 중 하나이다.
	6) 각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
	7) 유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
	8) 유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
	9) 채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지 않는다.
```

* 테스트케이스

```
record	result
["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]	["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
```

### 2) learned

### 3) solution

```javascript

```

## 41. 후보키

### 1) 문제

* 문제

```
 프렌즈대학교 컴퓨터공학과 조교인 제이지는 네오 학과장님의 지시로, 학생들의 인적사항을 정리하는 업무를 담당하게 되었다.

그의 학부 시절 프로그래밍 경험을 되살려, 모든 인적사항을 데이터베이스에 넣기로 하였고, 이를 위해 정리를 하던 중에 후보키(Candidate Key)에 대한 고민이 필요하게 되었다.

후보키에 대한 내용이 잘 기억나지 않던 제이지는, 정확한 내용을 파악하기 위해 데이터베이스 관련 서적을 확인하여 아래와 같은 내용을 확인하였다.

관계 데이터베이스에서 릴레이션(Relation)의 튜플(Tuple)을 유일하게 식별할 수 있는 속성(Attribute) 또는 속성의 집합 중, 다음 두 성질을 만족하는 것을 후보 키(Candidate Key)라고 한다.
유일성(uniqueness) : 릴레이션에 있는 모든 튜플에 대해 유일하게 식별되어야 한다.
최소성(minimality) : 유일성을 가진 키를 구성하는 속성(Attribute) 중 하나라도 제외하는 경우 유일성이 깨지는 것을 의미한다. 즉, 릴레이션의 모든 튜플을 유일하게 식별하는 데 꼭 필요한 속성들로만 구성되어야 한다.
제이지를 위해, 아래와 같은 학생들의 인적사항이 주어졌을 때, 후보 키의 최대 개수를 구하라.

위의 예를 설명하면, 학생의 인적사항 릴레이션에서 모든 학생은 각자 유일한 학번을 가지고 있다. 따라서 학번은 릴레이션의 후보 키가 될 수 있다.
그다음 이름에 대해서는 같은 이름(apeach)을 사용하는 학생이 있기 때문에, 이름은 후보 키가 될 수 없다. 그러나, 만약 [이름, 전공]을 함께 사용한다면 릴레이션의 모든 튜플을 유일하게 식별 가능하므로 후보 키가 될 수 있게 된다.
물론 [이름, 전공, 학년]을 함께 사용해도 릴레이션의 모든 튜플을 유일하게 식별할 수 있지만, 최소성을 만족하지 못하기 때문에 후보 키가 될 수 없다.
따라서, 위의 학생 인적사항의 후보키는 학번, [이름, 전공] 두 개가 된다.

릴레이션을 나타내는 문자열 배열 relation이 매개변수로 주어질 때, 이 릴레이션에서 후보 키의 개수를 return 하도록 solution 함수를 완성하라.
```

* 제한 사항

```
1. relation은 2차원 문자열 배열이다.

2. relation의 컬럼(column)의 길이는 1 이상 8 이하이며, 각각의 컬럼은 릴레이션의 속성을 나타낸다.

3. relation의 로우(row)의 길이는 1 이상 20 이하이며, 각각의 로우는 릴레이션의 튜플을 나타낸다.

4. relation의 모든 문자열의 길이는 1 이상 8 이하이며, 알파벳 소문자와 숫자로만 이루어져 있다.

5. relation의 모든 튜플은 유일하게 식별 가능하다.(즉, 중복되는 튜플은 없다.)
```

* 테스트케이스

```
relation	result
[["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]	2
입출력 예 설명
입출력 예 #1
문제에 주어진 릴레이션과 같으며, 후보 키는 2개이다.
```

### 2) learned

### 3) solution

```javascript

```

## 42.  [3차] 방금그곡

### 1) 문제

* 문제

```
라디오를 자주 듣는 네오는 라디오에서 방금 나왔던 음악이 무슨 음악인지 궁금해질 때가 많다. 그럴 때 네오는 다음 포털의 '방금그곡' 서비스를 이용하곤 한다. 방금그곡에서는 TV, 라디오 등에서 나온 음악에 관해 제목 등의 정보를 제공하는 서비스이다.

네오는 자신이 기억한 멜로디를 가지고 방금그곡을 이용해 음악을 찾는다. 그런데 라디오 방송에서는 한 음악을 반복해서 재생할 때도 있어서 네오가 기억하고 있는 멜로디는 음악 끝부분과 처음 부분이 이어서 재생된 멜로디일 수도 있다. 반대로, 한 음악을 중간에 끊을 경우 원본 음악에는 네오가 기억한 멜로디가 들어있다 해도 그 곡이 네오가 들은 곡이 아닐 수도 있다. 그렇기 때문에 네오는 기억한 멜로디를 재생 시간과 제공된 악보를 직접 보면서 비교하려고 한다. 다음과 같은 가정을 할 때 네오가 찾으려는 음악의 제목을 구하여라.

방금그곡 서비스에서는 음악 제목, 재생이 시작되고 끝난 시각, 악보를 제공한다.
네오가 기억한 멜로디와 악보에 사용되는 음은 C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개이다.
각 음은 1분에 1개씩 재생된다. 음악은 반드시 처음부터 재생되며 음악 길이보다 재생된 시간이 길 때는 음악이 끊김 없이 처음부터 반복해서 재생된다. 음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생된다.
음악이 00:00를 넘겨서까지 재생되는 일은 없다.
조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
조건이 일치하는 음악이 없을 때에는 `(None)`을 반환한다.
```

* 제한 사항

```
입력 형식

입력으로 네오가 기억한 멜로디를 담은 문자열 m과 방송된 곡의 정보를 담고 있는 배열 musicinfos가 주어진다.

m은 음 1개 이상 1439개 이하로 구성되어 있다.
musicinfos는 100개 이하의 곡 정보를 담고 있는 배열로, 각각의 곡 정보는 음악이 시작한 시각, 끝난 시각, 음악 제목, 악보 정보가 ','로 구분된 문자열이다.
음악의 시작 시각과 끝난 시각은 24시간 HH:MM 형식이다.
음악 제목은 ',' 이외의 출력 가능한 문자로 표현된 길이 1 이상 64 이하의 문자열이다.
악보 정보는 음 1개 이상 1439개 이하로 구성되어 있다.

출력 형식

조건과 일치하는 음악 제목을 출력한다.
```

* 테스트케이스

```
m	musicinfos	answer
ABCDEFG	[12:00,12:14,HELLO,CDEFGAB, 13:00,13:05,WORLD,ABCDEF]	HELLO
CC#BCC#BCC#BCC#B	[03:00,03:30,FOO,CC#B, 04:00,04:08,BAR,CC#BCC#BCC#B]	FOO
ABC	[12:00,12:14,HELLO,C#DEFGAB, 13:00,13:05,WORLD,ABCDEF]	WORLD

첫 번째 예시에서 HELLO는 길이가 7분이지만 12:00부터 12:14까지 재생되었으므로 실제로 CDEFGABCDEFGAB로 재생되었고, 이 중에 기억한 멜로디인 ABCDEFG가 들어있다.
세 번째 예시에서 HELLO는 C#DEFGABC#DEFGAB로, WORLD는 ABCDE로 재생되었다. HELLO 안에 있는 ABC#은 기억한 멜로디인 ABC와 일치하지 않고, WORLD 안에 있는 ABC가 기억한 멜로디와 일치한다.
```

### 2) learned

### 3) solution

```javascript
function solution(m,musicinfos){
    let after = []
    let answer=''
    // let check =['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
    for(let i=0;i<musicinfos.length;i++){
        // 시작시간/종료시간/제목/멜로디
        let mArray = musicinfos[i].split(",")
        let time = (mArray[1].substr(0,2)-mArray[0].substr(0,2))*60 
        +(mArray[1].substr(3,2)-mArray[0].substr(3,2))
        let k = mArray[3].split("").filter(e=>e=="#")
        // let a = mArray[3].split("")
        // let k = a.filter(e=>e=="#")
        let no = 0
        let l =0
        let music =''
        while(no!=time){
            let word= mArray[3].substr(l%(mArray[3].length),1)
            if(word!="#"){
                no++
                music += word
            }else{
                music += word
            }
            l++
        }
        let check = false
        for(let j=0;j<music.length-m.length;j++){
            let isTrue = music.substr(j,m.length)
            if(music.substr(j+m.length,1)=="#"){
                isTrue+="#"
            }
            if(isTrue == m){
                check =true
                break;
            }
        }
        if(check ==true){
            after.push([i,music.length,mArray[2]])
        }
        if(after.length == 0){
            answer = "'(None)'"
        }else{
            after.sort((a,b)=>{return b[1]-a[1]})
            let firstV = after[0][1]
            let a = after.filter(e=>e[1]==firstV)
            if(a.length>1){
                a.sort((a,b)=>{return a[0]-b[0]})
                answer = a[0][2]
            }else{
                answer = after[0][2]
            }
        }
    }
    return answer
}
/*
정확성  테스트
테스트 1 〉	통과 (0.25ms, 30.1MB)
테스트 2 〉	통과 (0.28ms, 30.1MB)
테스트 3 〉	실패 (0.23ms, 29.7MB)
테스트 4 〉	실패 (0.21ms, 29.7MB)
테스트 5 〉	통과 (0.28ms, 30.1MB)
테스트 6 〉	실패 (0.27ms, 29.6MB)
테스트 7 〉	통과 (1.35ms, 30.1MB)
테스트 8 〉	실패 (1.33ms, 30.2MB)
테스트 9 〉	통과 (1.36ms, 30.2MB)
테스트 10 〉	통과 (0.94ms, 30MB)
테스트 11 〉	통과 (1.33ms, 30MB)
테스트 12 〉	통과 (1.46ms, 30.2MB)
테스트 13 〉	통과 (1.32ms, 30.1MB)
테스트 14 〉	통과 (1.39ms, 30.2MB)
테스트 15 〉	통과 (1.03ms, 30.1MB)
테스트 16 〉	통과 (1.23ms, 29.9MB)
테스트 17 〉	통과 (1.02ms, 30MB)
테스트 18 〉	실패 (1.32ms, 30.1MB)
테스트 19 〉	실패 (0.81ms, 30.1MB)
테스트 20 〉	통과 (1.14ms, 30.1MB)
테스트 21 〉	통과 (1.40ms, 30.1MB)
테스트 22 〉	실패 (1.34ms, 30.1MB)
테스트 23 〉	실패 (1.05ms, 30.1MB)
테스트 24 〉	실패 (1.34ms, 30.1MB)
테스트 25 〉	통과 (0.29ms, 30MB)
테스트 26 〉	통과 (0.32ms, 30.1MB)
테스트 27 〉	통과 (0.31ms, 30.1MB)
테스트 28 〉	통과 (0.35ms, 30MB)
테스트 29 〉	실패 (12.66ms, 34.1MB)
테스트 30 〉	통과 (39.87ms, 34.6MB)
채점 결과
정확성: 66.7
합계: 66.7 / 100.0
*/

```

## 43. [3차] 압축

### 1) 문제

* 문제

```
신입사원 어피치는 카카오톡으로 전송되는 메시지를 압축하여 전송 효율을 높이는 업무를 맡게 되었다. 메시지를 압축하더라도 전달되는 정보가 바뀌어서는 안 되므로, 압축 전의 정보를 완벽하게 복원 가능한 무손실 압축 알고리즘을 구현하기로 했다.

어피치는 여러 압축 알고리즘 중에서 성능이 좋고 구현이 간단한 LZW(Lempel–Ziv–Welch) 압축을 구현하기로 했다. LZW 압축은 1983년 발표된 알고리즘으로, 이미지 파일 포맷인 GIF 등 다양한 응용에서 사용되었다.

LZW 압축은 다음 과정을 거친다.

1. 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
3. w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
4. 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
5 .단계 2로 돌아간다.

압축 알고리즘이 영문 대문자만 처리한다고 할 때, 사전은 다음과 같이 초기화된다. 사전의 색인 번호는 정수값으로 주어지며, 1부터 시작한다고 하자.

색인 번호	1	2	3	...	24	25	26
단어	A	B	C	...	X	Y	Z
```

* 제한 사항

```
입력 형식
입력으로 영문 대문자로만 이뤄진 문자열 msg가 주어진다. msg의 길이는 1 글자 이상, 1000 글자 이하이다.

출력 형식
주어진 문자열을 압축한 후의 사전 색인 번호를 배열로 출력하라.

입출력 예제
msg	answer
KAKAO	[11, 1, 27, 15]
TOBEORNOTTOBEORTOBEORNOT	[20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
ABABABABABABABAB	[1, 2, 27, 29, 28, 31, 30]
```

* 테스트케이스

```
예를 들어 입력으로 KAKAO가 들어온다고 하자.

현재 사전에는 KAKAO의 첫 글자 K는 등록되어 있으나, 두 번째 글자까지인 KA는 없으므로, 첫 글자 K에 해당하는 색인 번호 11을 출력하고, 다음 글자인 A를 포함한 KA를 사전에 27 번째로 등록한다.
두 번째 글자 A는 사전에 있으나, 세 번째 글자까지인 AK는 사전에 없으므로, A의 색인 번호 1을 출력하고, AK를 사전에 28 번째로 등록한다.
세 번째 글자에서 시작하는 KA가 사전에 있으므로, KA에 해당하는 색인 번호 27을 출력하고, 다음 글자 O를 포함한 KAO를 29 번째로 등록한다.
마지막으로 처리되지 않은 글자 O에 해당하는 색인 번호 15를 출력한다.
현재 입력(w)	다음 글자(c)	출력	사전 추가(w+c)
K	A	11	27: KA
A	K	1	28: AK
KA	O	27	29: KAO
O		15	
이 과정을 거쳐 다섯 글자의 문장 KAKAO가 4개의 색인 번호 [11, 1, 27, 15]로 압축된다.

입력으로 TOBEORNOTTOBEORTOBEORNOT가 들어오면 다음과 같이 압축이 진행된다.
현재 입력(w)	다음 글자(c)	출력	사전 추가(w+c)
T	O	20	27: TO
O	B	15	28: OB
B	E	2	29: BE
E	O	5	30: EO
O	R	15	31: OR
R	N	18	32: RN
N	O	14	33: NO
O	T	15	34: OT
T	T	20	35: TT
TO	B	27	36: TOB
BE	O	29	37: BEO
OR	T	31	38: ORT
TOB	E	36	39: TOBE
EO	R	30	40: EOR
RN	O	32	41: RNO
OT		34	
```

### 2) learned

### 3) solution

```javascript
function solution(msg){
    let answer = []
    let lib = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let no =0
    let i =1;
    while(true){
        let w = msg.substr(no,i)
        let c = msg.substr(no+i,1)
        let wc = w+c;
        if(lib.indexOf(wc)<0){
            lib.push(wc)
            answer.push(lib.indexOf(w)+1)
            no+=i
            i=1;
        }else{
            i++
        }
        if(no>msg.length-1){
            answer.push(lib.indexOf(w)+1)
            break;
        }
    }

    return answer
}
```

## 44. [3차] 파일명 정렬

### 1) 문제

* 문제

```
세 차례의 코딩 테스트와 두 차례의 면접이라는 기나긴 블라인드 공채를 무사히 통과해 카카오에 입사한 무지는 파일 저장소 서버 관리를 맡게 되었다.

저장소 서버에는 프로그램의 과거 버전을 모두 담고 있어, 이름 순으로 정렬된 파일 목록은 보기가 불편했다. 파일을 이름 순으로 정렬하면 나중에 만들어진 ver-10.zip이 ver-9.zip보다 먼저 표시되기 때문이다.

버전 번호 외에도 숫자가 포함된 파일 목록은 여러 면에서 관리하기 불편했다. 예컨대 파일 목록이 [img12.png, img10.png, img2.png, img1.png]일 경우, 일반적인 정렬은 [img1.png, img10.png, img12.png, img2.png] 순이 되지만, 숫자 순으로 정렬된 [img1.png, img2.png, img10.png, img12.png"] 순이 훨씬 자연스럽다.

무지는 단순한 문자 코드 순이 아닌, 파일명에 포함된 숫자를 반영한 정렬 기능을 저장소 관리 프로그램에 구현하기로 했다.

소스 파일 저장소에 저장된 파일명은 100 글자 이내로, 영문 대소문자, 숫자, 공백(" ), 마침표(.), 빼기 부호(-")만으로 이루어져 있다. 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함하고 있다.

파일명은 크게 HEAD, NUMBER, TAIL의 세 부분으로 구성된다.

HEAD는 숫자가 아닌 문자로 이루어져 있으며, 최소한 한 글자 이상이다.
NUMBER는 한 글자에서 최대 다섯 글자 사이의 연속된 숫자로 이루어져 있으며, 앞쪽에 0이 올 수 있다. 0부터 99999 사이의 숫자로, 00000이나 0101 등도 가능하다.
TAIL은 그 나머지 부분으로, 여기에는 숫자가 다시 나타날 수도 있으며, 아무 글자도 없을 수 있다.
파일명	HEAD	NUMBER	TAIL
foo9.txt	foo	9	.txt
foo010bar020.zip	foo	010	bar020.zip
F-15	F-	15	(빈 문자열)
파일명을 세 부분으로 나눈 후, 다음 기준에 따라 파일명을 정렬한다.

파일명은 우선 HEAD 부분을 기준으로 사전 순으로 정렬한다. 이때, 문자열 비교 시 대소문자 구분을 하지 않는다. MUZI와 muzi, MuZi는 정렬 시에 같은 순서로 취급된다.
파일명의 HEAD 부분이 대소문자 차이 외에는 같을 경우, NUMBER의 숫자 순으로 정렬한다. 9 < 10 < 0011 < 012 < 13 < 014 순으로 정렬된다. 숫자 앞의 0은 무시되며, 012와 12는 정렬 시에 같은 같은 값으로 처리된다.
두 파일의 HEAD 부분과, NUMBER의 숫자도 같을 경우, 원래 입력에 주어진 순서를 유지한다. MUZI01.zip과 muzi1.png가 입력으로 들어오면, 정렬 후에도 입력 시 주어진 두 파일의 순서가 바뀌어서는 안 된다.
무지를 도와 파일명 정렬 프로그램을 구현하라.
```

* 제한 사항

```
입력 형식
입력으로 배열 files가 주어진다.

files는 1000 개 이하의 파일명을 포함하는 문자열 배열이다.
각 파일명은 100 글자 이하 길이로, 영문 대소문자, 숫자, 공백(" ), 마침표(.), 빼기 부호(-")만으로 이루어져 있다. 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함하고 있다.
중복된 파일명은 없으나, 대소문자나 숫자 앞부분의 0 차이가 있는 경우는 함께 주어질 수 있다. (muzi1.txt, MUZI1.txt, muzi001.txt, muzi1.TXT는 함께 입력으로 주어질 수 있다.)
출력 형식
위 기준에 따라 정렬된 배열을 출력한다.
```

* 테스트케이스

```
입출력 예제
입력: [img12.png, img10.png, img02.png, img1.png, IMG01.GIF, img2.JPG]
출력: [img1.png, IMG01.GIF, img02.png, img2.JPG, img10.png, img12.png]

입력: [F-5 Freedom Fighter, B-50 Superfortress, A-10 Thunderbolt II, F-14 Tomcat]
출력: [A-10 Thunderbolt II, B-50 Superfortress, F-5 Freedom Fighter, F-14 Tomcat]

해설 보러가기
```

### 2) learned

### 3) solution

```javascript
function solution(files) {
    let answer = []
    let filesSort = []
    //HEAD / NUMBER/ TAIL 로 구분
    for (let i = 0; i < files.length; i++) {
        let check = files[i]
        let isNumber = false
        let head = ''
        let number = ''
        let tail = ''
        let numbercheck = false
        for (let j = 0; j < check.length; j++) {
            let w = check.substr(j, 1)
            if (isNumber == false && isNaN(w) == true) {
                head += w
            }
            if (isNumber == false && isNaN(w) == false) {
                isNumber = true
            }
            if (isNumber == true && isNaN(w) == false) {
                if(w>0){
                    numbercheck =true
                }
                if(numbercheck==true&&w!= " "){
                    number += w
                }
            }
            if (isNumber == true && isNaN(w) == true) {
                tail = check.substr(j)
                break;
            }
        }
        filesSort.push([i, head, number, tail, check])
    }
    filesSort.sort((a, b) => {
        //HEAD 부분 정렬
        let c = a[1].toLowerCase()
        let d = b[1].toLowerCase()
        if (c > d) {
            return 0
        }
        if (c < d) {
            return -1
        }
        if (c == d) {
            //NUMBER 부분 정렬
            let e = Number(a[2]), f = Number(b[2]);
            if (e>f) {
                return 0
            }
            if (e<f) {
                return -1
            }
            //TAIL 부분 정렬
            if (e == f) {
                let o = a[0]
                let p = b[0]
                return o >= p ? 0 : -1
            }
        }
    })
    console.log(filesSort)
    filesSort.forEach(e => {
        answer.push(e[4])
    })
    return answer
}
/*
정확성  테스트
테스트 1 〉	통과 (5.60ms, 30.4MB)
테스트 2 〉	통과 (5.51ms, 30MB)
테스트 3 〉	통과 (117.61ms, 33.7MB)
테스트 4 〉	실패 (14.20ms, 33.8MB)
테스트 5 〉	실패 (14.39ms, 33.9MB)
테스트 6 〉	실패 (14.72ms, 33.7MB)
테스트 7 〉	실패 (176.23ms, 33.6MB)
테스트 8 〉	실패 (14.09ms, 33.5MB)
테스트 9 〉	실패 (46.67ms, 33.3MB)
테스트 10 〉	실패 (14.41ms, 33.7MB)
테스트 11 〉	실패 (14.68ms, 33.4MB)
테스트 12 〉	실패 (14.39ms, 33.7MB)
테스트 13 〉	통과 (11.72ms, 33.1MB)
테스트 14 〉	통과 (151.52ms, 33.2MB)
테스트 15 〉	통과 (15.86ms, 33.3MB)
테스트 16 〉	통과 (15.08ms, 33.6MB)
테스트 17 〉	통과 (11.36ms, 33.3MB)
테스트 18 〉	통과 (13.39ms, 33.6MB)
테스트 19 〉	실패 (13.99ms, 33.5MB)
테스트 20 〉	실패 (12.66ms, 33.4MB)
채점 결과
정확성: 45.0
합계: 45.0 / 100.0
*/
```

## 45. [3차] n진수 게임 

### 1) 문제

* 문제

```
튜브가 활동하는 코딩 동아리에서는 전통적으로 해오는 게임이 있다. 이 게임은 여러 사람이 둥글게 앉아서 숫자를 하나씩 차례대로 말하는 게임인데, 규칙은 다음과 같다.

숫자를 0부터 시작해서 차례대로 말한다. 첫 번째 사람은 0, 두 번째 사람은 1, … 열 번째 사람은 9를 말한다.
10 이상의 숫자부터는 한 자리씩 끊어서 말한다. 즉 열한 번째 사람은 10의 첫 자리인 1, 열두 번째 사람은 둘째 자리인 0을 말한다.
이렇게 게임을 진행할 경우,
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0, 1, 1, 1, 2, 1, 3, 1, 4, …
순으로 숫자를 말하면 된다.

한편 코딩 동아리 일원들은 컴퓨터를 다루는 사람답게 이진수로 이 게임을 진행하기도 하는데, 이 경우에는
0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, …
순으로 숫자를 말하면 된다.

이진수로 진행하는 게임에 익숙해져 질려가던 사람들은 좀 더 난이도를 높이기 위해 이진법에서 십육진법까지 모든 진법으로 게임을 진행해보기로 했다. 숫자 게임이 익숙하지 않은 튜브는 게임에 져서 벌칙을 받는 굴욕을 피하기 위해, 자신이 말해야 하는 숫자를 스마트폰에 미리 출력해주는 프로그램을 만들려고 한다. 튜브의 프로그램을 구현하라.
```

* 제한 사항

```
입력 형식
진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p 가 주어진다.

2 ≦ n ≦ 16
0 ＜ t ≦ 1000
2 ≦ m ≦ 100
1 ≦ p ≦ m
출력 형식
튜브가 말해야 하는 숫자 t개를 공백 없이 차례대로 나타낸 문자열. 단, 10~15는 각각 대문자 A~F로 출력한다.
```

* 테스트케이스

```
입출력 예제
n	t	m	p	result
2	4	2	1	0111
16	16	2	1	02468ACE11111111
16	16	2	2	13579BDF01234567
```

### 2) learned

### 3) solution

```javascript
function solution(n,t,m,p){
    let routine = ["0"]
    let over = ["A","B","C","D","E","F"]
    let x = 0
    if(t>1){
        for(let i=1;i<t;i++){
            let no = i
            // 진수변환
            while(true){
                let a = Math.pow(n,x)
                if(i==a){
                    no -= n
                }
            }
        }
    }

}
```

