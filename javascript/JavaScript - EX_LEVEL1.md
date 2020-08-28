# Programmers - 코딩테스트 연습 - LEVEL1

## 1. [2019 카카오 개발자 겨울 인턴십] 크레인 인형뽑기 게임

### 1) 문제

* 문제

```
게임개발자인 죠르디는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.
죠르디는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려고 합니다.

게임 화면은 1 x 1 크기의 칸들로 이루어진 N x N 크기의 정사각 격자이며 위쪽에는 크레인이 있고 오른쪽에는 바구니가 있습니다. (위 그림은 5 x 5 크기의 예시입니다). 각 격자 칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다. 모든 인형은 1 x 1 크기의 격자 한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다. 게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다. 집어 올린 인형은 바구니에 쌓이게 되는 데, 이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩니다. 다음 그림은 [1번, 5번, 3번] 위치에서 순서대로 인형을 집어 올려 바구니에 담은 모습입니다.

만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다. 위 상태에서 이어서 [5번] 위치에서 인형을 집어 바구니에 쌓으면 같은 모양 인형 두 개가 없어집니다.

크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다. 또한 바구니는 모든 인형이 들어갈 수 있을 만큼 충분히 크다고 가정합니다. (그림에서는 화면표시 제약으로 5칸만으로 표현하였음)

게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.
```

* 제한 사항

```
1. board 배열은 2차원 배열로 크기는 5 x 5 이상 30 x 30 이하입니다.

2. board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
	1) 0은 빈 칸을 나타냅니다.
	2) 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.

3. moves 배열의 크기는 1 이상 1,000 이하입니다.

4. moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.

```

* 테스트케이스

```
board	moves	result
[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]	[1,5,3,5,1,2,1,4]	4

입출력 예에 대한 설명
입출력 예 #1

인형의 처음 상태는 문제에 주어진 예시와 같습니다. 크레인이 [1, 5, 3, 5, 1, 2, 1, 4] 번 위치에서 차례대로 인형을 집어서 바구니에 옮겨 담은 후, 상태는 아래 그림과 같으며 바구니에 담는 과정에서 터트려져 사라진 인형은 4개 입니다.
```

### 2) learned

### 3) Solution

## 2. 완주하지 못한 선수

### 1) 문제

* 문제

```
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
```

* 제한 사항

```
1. 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.

2. completion의 길이는 participant의 길이보다 1 작습니다.

3. 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.

4. 참가자 중에는 동명이인이 있을 수 있습니다.
```

* 테스트케이스

```
participant	completion	return
1. [leo, kiki, eden]	[eden, kiki]	leo
2. [marina, josipa, nikola, vinko, filipa]	[josipa, filipa, marina, nikola]	vinko
3. [mislav, stanko, mislav, ana]	[stanko, ana, mislav]	mislav

입출력 예 설명
예제 #1
leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.
```

### 2) learned

```
1. for in 을 쓰면 효율성이 떨어진다

2. 반복문을 중첩해서 사용하면 효율성이 떨어진다.
```



### 3) Solution

* 1차 : 테스트케이스 성공, 정확성 성공, 효율성 실패

```javascript
function solution(participant, completion) {
    var answer = '';

    for (const p of participant){    
        if(completion.indexOf(p) > -1){
            completion.splice(completion.indexOf(p),1)            
        }else{
            answer = p
            break;
        }
    }
    return answer;
}
```

* 2차 : 테스트케이스 성공, 정확성 성공, 효율성 성공

```javascript
function solution(participant, completion) {
    participant.sort(); 
    completion.sort(); 
    for(var i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}

```

## 3. 모의고사

### 1) 문제

* 문제

```
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
```

* 제한 사항

```
1. 시험은 최대 10,000 문제로 구성되어있습니다.

2. 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.

3. 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
```

* 테스트케이스

```
answers	return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]

입출력 예 #1

수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

입출력 예 #2

모든 사람이 2문제씩을 맞췄습니다.
```

### 2) learned

### 3) Solution

* 1차 안 :  테스트 케이스 성공,  정확성 42/100

```javascript
function solution(answers) {
  let student1 = [1, 2, 3, 4, 5] 
  let student2 = [2, 1, 2, 3, 2, 4, 2, 5]
  let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  let correct = [0,0,0]


  for(let i = 0; i < answers.length; i++) {
    if(student1[i % answers.length] === answers[i]) {
      correct[0] += 1    
    }
    if(student2[i % answers.length] === answers[i]) {
      correct[1] += 1    
    } 
    if(student3[i % answers.length] === answers[i]) {
      correct[2] += 1    
    }       
  }
  let maxCorrect = Math.max(correct[0], correct[1], correct[2])
  let answer = []

  let result = correct.forEach((curr,idx) => {
     if(curr === maxCorrect) {
        answer.push(idx + 1)  
    }
  })
    return answer

}
```



## 4. 체육복

### 1) 문제

* 문제

```
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
```

* 제한 사항

```
1. 전체 학생의 수는 2명 이상 30명 이하입니다

2. 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.

3. 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.

4. 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.

5. 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
```

* 테스트케이스

```
n	lost	reserve	return
5	[2, 4]	[1, 3, 5]	5
5	[2, 4]	[3]	4
3	[3]	[1]	2

입출력 예 설명
예제 #1
1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.

예제 #2
3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.
```

### 2) learned

### 3) Solution

## 5. K번째 수

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

##  6. 2016년

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

## 7. 가운데 글자 가져오기

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

## 8.  같은 숫자는 싫어

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

## 9. 나누어 떨어지는 숫자 배열

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

## 10. 두 정수 사이의 합

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

## 11. 문자열 내 마음대로 정렬하기

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

## 12. 문자열 p와 y내의 개수

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

## 13. 문자열 내림차순으로 배치하기

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
array.sort() : 오름차순

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

## 14. 문자열 다루기 기본

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

* 지수형태

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

* 2차안 : 테스트 케이스 성공 , 효율성 93.8(11번)

```javascript
function solution(s){
    let answer
    if(s.length==4||s.length==6){
        if(Number(s)!=undefined){
            answer = true
        }else{
            answer = false
        }
    }else{
        answer = false
    }
    return answer 
}
```



## 15. 서울에서 김서방 찾기

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

## 16. 소수 찾기

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

 예를 들어 8이 소수인지 확인해보자. 8은 약수로 1, 2, 4, 8을 갖고 있다. 8이 소수인지 알기위해서는 1과 8을 제외한 약수가 있는지 찾아봐야하는데 2를 약수로 찾게되면 8을 2로 나눈 몫인 4는 탐색하지 않아도 이미 8이 소수가 아닌 것을 확인할 수 있게된다. 그렇다면 어디까지 확인을 해보는 것이 최소한으로 약수가 있는지 없는지 판단할 수 있는 경계가 될까. 경계는 판단하려고 하는 숫자의 양의 제곱근이다. 가령 9가 소수인지 확인해보려면 9의 양의 제곱근인 3까지 판단하면 되고 16이라면 4까지 판단하면 되는 것이다. 판단범위가 확 줄게 되면서 시간복잡도 면에서 확실히 많은 이득이 있었다.
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

```javascript
function PrimeNumber(n) {
    let arr = [];
    for (let i = 2; i <= n; i++) {
        arr[i] = i;
    }
    for (let i = 2; i <= n; i++) {
        if (arr[i === 0]) continue;
        for (let j = i + i; j <= n; j += i) {
            arr[j] = 0;
        }
    }
    let answer = [];
    for (let i = 0; i <= n; i++) {
        if (arr[i] !== 0 && arr[i] !== undefined) {
            answer.push(i);
        }
    }
    return answer;
}

function solution(n) {
    let count = PrimeNumber(n).length;
    return count;
}
```

## 17. 수박수박수박수박수박수?

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

## 18. 문자열을 정수로 바꾸기

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

## 19. 시저 암호

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

## 20. 약수의 합

### 1) 문제

* 문제

```
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
```

* 제한 사항

```
n은 0 이상 3000이하인 정수입니다.
```

* 테스트케이스

````
n / return

1. 12 / 28

2. 5 / 6 

입출력 예 #1
12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

입출력 예 #2
5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.
````

### 2) learned

### 3) Solution

```
function solution(n){
    let answer=0;
    for(let i=1; i<=n;i++){
        if(n%i==0){
            answer+=i
        }
    }
    return answer
}
```

## 21. 이상한 문자 만들기

### 1) 문제

* 문제

```
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
```

* 제한 사항

```
1. 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.

2. 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
```

* 테스트케이스

```
s / return

1. "try hello world" / "TrY HeLlO WoRlD"

try hello world는 세 단어 try, hello, world로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 TrY, HeLlO, WoRlD입니다. 따라서 TrY HeLlO WoRlD 를 리턴합니다.
```

### 2) learned

### 3) Solution

```javascript
function solution(s){
    let answer =''
    let no = 1;
    for(let i=0;i<s.length;i++){
        if(s[i]!==' '&& no%2==0){
            answer += s[i].toLowerCase()
            no++
        }else if(s[i]!==' '&& no%2 !==0){
            answer += s[i].toUpperCase()
            no++
        }else{
            answer+= s[i]
            no = 1;
        }
    }
    return answer 
}
```

## 22. 자릿수 더하기

### 1) 문제

* 문제

```
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
```

* 제한 사항

```
N의 범위 : 100,000,000 이하의 자연수
```

* 테스트케이스

```
n / answer

1. 123 / 6

2. 987 / 24
```

### 2) learned

### 3) Solution

```javascript
function solution(n){
    let nArray = [...String(n)]
    let answer=0;
    nArray.forEach(e=>answer+=Number(e))
    return answer;
}
```

## 23. 자연수 뒤집어 배열로 만들기

### 1) 문제

* 문제

```
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
```

* 제한 사항

```
n은 10,000,000,000이하인 자연수입니다.
```

* 테스트케이스

```
n / return

1. 1234 / [5,4,3,2,1]
```

### 2) learned

### 3) Solution

```javascript
function solution(n){
    let nArray = [...String(n)]
    let answer = [];
    for(let i=nArray.length-1; i>=0; i--){
        answer.push(Number(nArray[i]))
    }
    return answer
}
```

## 24. 정수 내림차순으로 배치하기

### 1) 문제

* 문제

```
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.
```

* 제한 사항

```
n은 1이상 8000000000 이하인 자연수입니다.
```

* 테스트케이스

```
n / return

1. 118372 
```

### 2) learned

### 3) Solution

```javascript
function solution(n){
    let nArray = [...String(n)]
    nArray.sort(function(a,b){return b-a;})
    return Number(nArray.join(''));
}
```



## 25.  정수 제곱근 판별
### 1) 문제

* 문제

```
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요
```

* 제한 사항

```
n은 1이상, 50000000000000 이하인 양의 정수입니다.
```

* 테스트케이스

```
n / return

1. 121 / 144

2. 3 / -1

입출력 예#1
121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

입출력 예#2
3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.
```

### 2) learned

### 3) Solution

```javascript
function solution(n){
    let sqrt = Math.sqrt(n)
    let checked = sqrt-Math.trunc(sqrt)
    return (checked==0? Math.pow(sqrt+1,2):-1);
}
```

## 26. 제일 작은 수 제거하기

### 1) 문제

* 문제

```
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
```

* 제한 사항

```
1. arr은 길이 1 이상인 배열입니다.

2. 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
```

* 테스트케이스

```
arr / return

1. [4,3,2,1] / [4,3,2]

2. [10] / [-1]
```

### 2) learned

### 3) Solution

```javascript
function solution(arr){
    let arr2 = arr.slice();
    let sortArr = arr2.sort((a,b)=>{return a-b;})
    const idx = arr.indexOf(sortArr[0])
    if(idx > - 1) arr.splice(idx,1)
    return arr.length==0 ? [-1]: arr
}
```

## 27. 짝수와 홀수 

### 1) 문제

* 문제

```
정수 num이 짝수일 경우 Even을 반환하고 홀수인 경우 Odd를 반환하는 함수, solution을 완성해주세요.
```

* 제한 사항

```
1. num은 int 범위의 정수입니다.

2. 0은 짝수입니다.
```

* 테스트케이스

```
num / return

1. 3 / "Odd"

2. 4 / "Even"
```

### 2) learned

### 3) Solution

```javascript
function solution(num) {
    return (num%2 ==0 ? 'Even':'Odd');
}
```

## 28. [카카오 인턴] 키패드 누르기

### 1) 문제

* 문제

```
스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

123
456
789
*0#

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다

1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.

2. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.

3. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.

4. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.

	1) 약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
	
5. 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.
```

* 제한 사항

```
1. numbers 배열의 크기는 1 이상 1,000 이하입니다.

2. numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.

3. hand는 "left" 또는 "right" 입니다

	1) "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
	
4. 왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.
```

* 테스트케이스

```
numbers / hand / result

1. [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5] / "right"  / "LRLLLRLLRRL"

2. [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2] / "left" / "LRLLRRLLLRR"

3. [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] / "right" / "LLRLLRLLRL"


입출력 예 #1
오른손잡이가 [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5를 순서대로 누르면 사용한 손은] "LRLLLRLLRRL"이 됩니다.

입출력 예 #2
왼손잡이가 [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]를 순서대로 누르면 사용한 손은 "LRLLRRLLLRR"이 됩니다.

입출력 예 #3
오른손잡이가 [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]를 순서대로 누르면 사용한 손은 "LLRLLRLLRL"이 됩니다.
```

### 2) learned

### 3) Solution

```javascript
function solution(numbers, hand){
    let answer = ''
    let rArray = [['2','3'],['5','6'],['8','9'],['0','#']]
    let lArray = [['1','2'],['4','5'],['7','8'],['*','0']]
    let rNow = '#'
    let lNow = '*'

    for(let i=0;i<numbers.length;i++){

        if(numbers[i]==1||numbers[i]==4||numbers[i]==7){
            answer+='L'
            lNow = numbers[i]
        }else if(numbers[i]==3||numbers[i]==6||numbers[i]==9){
            answer+='R'
            rNow = numbers[i]
        }else{
            let rLen,lLen;
            let ra,rb,la,lb;
            let ranow,rbnow,lanow,lbnow;
            for(let k in rArray){
                for(let c=0; c<2; c++){
                    if(rArray[k][c]==numbers[i]){
                        ra=k
                        rb=c
                    }
                    if(rArray[k][c]==rNow){
                        ranow=k
                        rbnow=c
                    }
                    if(lArray[k][c]==numbers[i]){
                        la=k
                        lb=c
                    }
                    if(lArray[k][c]==lNow){
                        lanow=k
                        lbnow=c
                    }
                }
            }
            rLen = Math.abs(ranow-ra)+Math.abs(rbnow-rb)
            lLen = Math.abs(lanow-la)+Math.abs(lbnow-lb)
            if(rLen>lLen){
                lNow = numbers[i];
                answer += 'L'
            }else if(rLen <lLen){
                rNow = numbers[i];
                answer += 'R'
            }else{
                if(hand=="right"){
                    rNow = numbers[i];
                    answer +='R'
                }else{
                    lNow = numbers[i];
                    answer +='L'
                }
            }
        }
    }
    return answer 
}
```



## 29. 최대공약수와 최소공배수

### 1) 문제

* 문제

```
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
```

* 제한 사항

```
두 수는 1이상 1000000이하의 자연수입니다.
```

* 테스트케이스

```
n / m / return

1. 3 / 12 / [3,12]

2. 2 / 5 / [1,10]

입출력 예 #1
위의 설명과 같습니다.

입출력 예 #2
자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.
```

### 2) learned

* 유클리드 호제법 - 최대공약수를 구하는 알고리즘

```
1. 임의의 두 자연수 a,b가 주어졌을 때, 둘 중 큰 값이 a라고 가정한다.
2. a를 b로 나눈 나머지를 n이라고 한다
3. n이 0일때, b가 최대 공약수 이다.
4. 만약 n이 0이 아니라면 a에 b값을 다시 넣고 n를 b에 대입한 후 다시 2부터 반복한다
```

* 유클리드 호제법 - 최소공배수를 구하는 알고리즘

```
최소공배수 = 두 자연수의 곱 / 최대 공약수
```

### 3) Solution

````javascript
function solution(n,m){
    let answer=[];
    let a=Math.max(n,m),b=Math.min(n,m),c,d=a*b,gcd;
    while(true){
        if(a%b==0){
            gcd=b;
            break;
        }
        c = (a%b);
        a = b;
        b = c;
    }
    answer.push(gcd)
    answer.push(d/gcd)
    return answer
}
````

## 30. 콜라츠 추측

### 1) 문제

* 문제

```
1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

1-1. 입력된 수가 짝수라면 2로 나눕니다. 
1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요. 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.
```

* 제한 사항

```
입력된 수, num은 1 이상 8000000 미만인 정수입니다.
```

* 테스트케이스

```
n / result

1. 6 / 8

2. 16 / 4

3. 626331 / -1

입출력 예 #1
문제의 설명과 같습니다.

입출력 예 #2
16 -> 8 -> 4 -> 2 -> 1 이되어 총 4번만에 1이 됩니다.

입출력 예 #3
626331은 500번을 시도해도 1이 되지 못하므로 -1을 리턴해야합니다.
```

### 2) learned

### 3) Solution

* 1차 답안 : 테스트케이스 성공 / 효율성 성공

```javascript
function solution(num){
    let n=0
    while(true){
        if(num==1){
            break;
        }
        n++
        if(num%2==0){ 
            if(num/2==1){
                break
            }
            num = num/2;
        }else{
            num = (num*3)+1
        }
    }
    return n>500?-1:n
}
```



## 31. 평균 구하기

### 1) 문제

* 문제

```
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
```

* 제한 사항

```
1. arr은 길이 1 이상, 100 이하인 배열입니다.

2. arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
```

* 테스트케이스

```
arr / return

1. [1,2,3,4] / 2.5

2. [5,5] / 5
```

### 2) learned

### 3) Solution

```javascript
function solution(arr){
    let sum=0
    arr.forEach(e=>{
        return sum+=e
    })
    return sum/arr.length;
}
```

## 32.  하샤드 수

### 1) 문제

* 문제

```
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
```

* 제한 사항

```
x는 1 이상, 10000 이하인 정수입니다.
```

* 테스트케이스

```
arr / return

1. 10 / true
2. 12 / true
3. 11 / false
4. 13 / false 

입출력 예 설명
입출력 예 #1
10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

입출력 예 #2
12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.

입출력 예 #3
11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

입출력 예 #4
13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다
```

### 2) learned

### 3) Solution

```javascript
function solution(x){
    let xArray = [...String(x)]
    let div =0;
    for(let i=0;i<xArray.length;i++){
        div+=Number(xArray[i])
    }
    return x%div===0 ? true : false
}
```

## 33.  핸드폰 번호 가리기

### 1) 문제

* 문제

```
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
```

* 제한 사항

```
s는 길이 4 이상, 20이하인 문자열입니다.
```

* 테스트케이스

```
phone_number / return

1. 01033334444 / *******4444

2. 027778888 / *****8888
```

### 2) learned

* 정규표현식

### 3) Solution

* 1안 : 테스트케이스 성공 / 효율성 성공

```javascript
function solution(phone_number){
    let answer=''
    let pArray = [...String(phone_number)];
    for(let i=0; i<pArray.length-4;i++){
        answer+='*'
    }
    for(let j=pArray.length-4;j<pArray.length;j++){
        answer+=pArray[j];
    }
    return answer;
}
```

* 2안 - 정규표현식 : 테스트케이스 성공 / 효율성 성공

```javascript
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
```

## 34. 행렬의 덧셈

### 1) 문제

* 문제

```
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
```

* 제한 사항

```
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
```

* 테스트케이스

```
arr1 / arr2 / return

1. [1,2],[2,3]] / [[3,4],[5,6]] / [[4,6],[7,9]]

2. [[1],[2]] / [[3],[4]] / [[4],[6]]
```

### 2) learned

### 3) Solution

```javascript
function solution(arr1, arr2){
    return arr1.map((arr,i)=>arr.map((v,j)=>v+arr2[i][j]))
}
```

## 35. x만큼 간격이 있는 n개의 숫자

### 1) 문제

* 문제

```
함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
```

* 제한 사항

```
1. x는 -10000000 이상, 10000000 이하인 정수입니다.

2. n은 1000 이하인 자연수입니다.
```

* 테스트케이스

```javascript
x / n / answer

1. 2 / 5 / [2,4,6,8,10]
    
2. 4 / 3 / [4,8,12]
    
3. -4 / 2 / [-4, -8]
```

### 2) learned

### 3) Solution

```javascript
function solution(x,n){
    let answer =[];
    if(x>=-10000000 && x<=10000000){
        if(n<=1000){
            for(let i=1;i<=n;i++){
                answer.push(x*i)
            }           
        }
    }
    return answer;
}
```

## 36.  직사각형 별찍기

### 1) 문제

* 문제

```
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
```

* 제한 사항

```
n과 m은 각각 1000 이하인 자연수입니다.
```

* 테스트케이스

```
input : 5 3

output :  
*****
*****
*****
```

### 2) learned

### 3) Solution

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    let answer=""
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let i=0;i<b;i++){
        for(let j=0;j<a;j++){
            answer+="*"
        }
        answer+="\n"
    }
    console.log(answer);
});
```

## 37. [Summer/Winter Coding(~2018)] 예산

### 1) 문제

* 문제

```
S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.
```

* 제한 사항

```
1. d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.

2. d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.

3. budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.
```

* 테스트케이스

```
d	budget	result
[1,3,2,5,4]	9	3
[2,2,3,3]	10	4

입출력 예 #1
각 부서에서 [1원, 3원, 2원, 5원, 4원]만큼의 금액을 신청했습니다. 만약에, 1원, 2원, 4원을 신청한 부서의 물품을 구매해주면 예산 9원에서 7원이 소비되어 2원이 남습니다. 항상 정확히 신청한 금액만큼 지원해 줘야 하므로 남은 2원으로 나머지 부서를 지원해 주지 않습니다. 위 방법 외에 3개 부서를 지원해 줄 방법들은 다음과 같습니다.

1원, 2원, 3원을 신청한 부서의 물품을 구매해주려면 6원이 필요합니다.
1원, 2원, 5원을 신청한 부서의 물품을 구매해주려면 8원이 필요합니다.
1원, 3원, 4원을 신청한 부서의 물품을 구매해주려면 8원이 필요합니다.
1원, 3원, 5원을 신청한 부서의 물품을 구매해주려면 9원이 필요합니다.
3개 부서보다 더 많은 부서의 물품을 구매해 줄 수는 없으므로 최대 3개 부서의 물품을 구매해 줄 수 있습니다.

입출력 예 #2
모든 부서의 물품을 구매해주면 10원이 됩니다. 따라서 최대 4개 부서의 물품을 구매해 줄 수 있습니다.
```

### 2) learned

### 3) Solution

```javascript
function solution(d,budget){
    let sum=0;
    let i=0;
    d.sort((a,b)=>{return a-b;})
    while(sum<=budget){
        sum+=d[i]
        i++
    }
    return (i-1)
}
```



## 38. [2018 KAKAO BLIND RECRUITMENT] [1차] 비밀지도

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

### 3) Solution

## 39. [2019 KAKAO BLIND RECRUITMENT] 실패율

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

### 3) Solution

## 40. [2018 KAKAO BLIND RECRUITMENT] [1차] 다트 게임

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

### 3) Solution

