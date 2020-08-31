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

```

* 테스트케이스

```

```

### 2) learned

### 3) solution

```javascript

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

## 9. 큰 수 만들기 

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

```javascript

```

## 10. 조이스틱 

### 1) 문제

* 문제

```

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

## 11. 괄호 변환 

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

## level 2-. 

### 1) 문제

* 문제

```

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

## . 

### 1) 문제

* 문제

```

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

## . 

### 1) 문제

* 문제

```

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

## . 

### 1) 문제

* 문제

```

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

## . 

### 1) 문제

* 문제

```

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

## . 

### 1) 문제

* 문제

```

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

## . 

### 1) 문제

* 문제

```

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

## . 

### 1) 문제

* 문제

```

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

## . 

### 1) 문제

* 문제

```

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

## . 

### 1) 문제

* 문제

```

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