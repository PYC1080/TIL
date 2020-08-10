## Level1-5. K번째 수

### 1) 문제

* 문제 설명

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

* 문제설명

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

