# Javascript - jQuery

## 0. jQuery

### 1) jQuery

* Google CDN(content delivery network)

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```

* npm

```
npm install jquery
```

```html
<script src="./node_modules/jquery/dist/jquery.js"></script>
```

### 2) jQuery UI Effect plug-in

* [jQuery UI Effect plug-in download](https://jqueryui.com/download/)

### 3) jQuery innerfade plug-in

## 1. jQuery 기본

```
1. jQuery 기능 지원
	1) 문서 객체 모델과 관련된 처리를 쉽게 구현해준다
	2) 일관된 이벤트 연결을 쉽게 구현해준다
	3) 시각적 효과를 쉽게 구현해준다
	4) Ajax 애플리케이션을 쉽게 개발하도록 도와준다
2. $(document).ready() : 문서가 준비되면 매개변수로 넣은 콜백 함수를 실행하라는 
3. 선택자
	1) 기본 선택자
		(1) jQuery메서드의 기본 형태 : $('선택자').메서드
		(2) 종류
			a) 전체 선택자 : ('*'), HTML 페이지에 있는 모든 문서 객체를 선택한다
			b) 태그 선택자 : ('태그이름','태그이름'...), 태그의 이름을 그냥 사용해 특정 태그를 선택한다. 하나 이상의 태그를 동시에 사용하고 싶은 경우에는 쉼표로 선택자를 구분한다.
			c) 아이디 선택자 : ('특정태그종류+#+id속성'), 특정 id속성이 있는 문서 객체를 선택한다. id속성값이 중복될 경우에는 특정태그종류를 지정할 수 있다.
			d) 클래스 선택자 : ('특정태그종류+.+클래스속성'), 특정 클래스속성이 있는 문서 객체를 선택한다. 클래스속성값이 중복된 경우에는 특정태그종류를 지정할 수 있다.
	2) 자손 선택자와 후손 선택자 : 기본 선택자의 앞에 붙여 사용하며, 기본 선택자의 범위를 제한한다.
		(1) 자손 선택자와 후손 선택자의 차이 : 선택 기준을 대상으로 바로 아래 태그를 자손이라고 부르고, 아래 모든 태그는 후손이라고 부른다
		(2) 자손 선택자 : ('요소A>요소B'), 요소A의 자손인 요소B만 선택한다
		(3) 후손 선택자 : ('요소A 요소B'), 요소A의 후손인 요소B를 선택한다
	3) 속성 선택자 : 기본 선택자 뒤에 붙여 사용한다
		(1) ('요소[속성=값]') : 속성과 값이 같은 문서 객체를 선택한다
		(2) ('요소[속성!=값]') : 속성 안의 값이 특정 값과 같은 문서 객체를 선택한다
		(3) ('요소[속성~=값]') : 속성 안의 값이 특정 값을 단어로 시작하는 문서 객체를 선택한다
		(4) ('요소[속성^=값]') : 속성 안의 값이 특정 값으로 시작하는 문서 객체를 선택한다
		(5) ('요소[속성$=값]') : 속성 안의 값이 특정 값으로 끝나는 문서 객체를 선택한다
		(6) ('요소[속성*=값]') : 속성 안의 값이 특정 값을 포함하는 문서 객체를 선택한다
	4) 필터 선택자 : 기본 선택자 뒤에 사용한다. 선택자 중에 ':' 기호를 포함하는 선택자
		(1) 입력 양식 필터 선택자
			a) ('요소:button') : input 태그 중 type 속성이 button인 문서 객체와 button태그를 선택한다
			b) ('요소:checkbox') : input 태그 중 type 속성이 checkbox인 문서 객체를 선택한다.
			c) ('요소:file') : input 태그 중 type 속성이 file인 문서 객체를 선택한다.
			d) ('요소:image') : input 태그 중 type 속성이 image인 문서 객체를 선택한다.
			e) ('요소:password') : input 태그 중 type 속성이 password인 문서 객체를 선택한다.
			f) ('요소:radio') : input 태그 중 type 속성이 radio인 문서 객체를 선택한다.
			g) ('요소:reset') : input 태그 중 type 속성이 reset인 문서 객체를 선택한다.
			h) ('요소:submit') : input 태그 중 type 속성이 submit인 문서 객체를 선택한다.
			i) ('요소:text') : input 태그 중 type 속성이 text인 문서 객체를 선택한다.
            j) ('요소:checked') : 체크되어 있는 입력 양식을 선택한다
            k) ('요소:disabled') : 비활성화된 입력 양식을 선택한다
            l) ('요소:enabled') : 활성화된 입력 양식을 선택한다
            m) ('요소:focus') : 초점이 맞추어저 있는 입력 양식을 선택한다
            n) ('요소:input') : 모든 입력 양식을 선택한다
            o) ('요소:selected') : option 객체 중 선택된 태그를 선택한다
		(2) 위치 필터 선택자
			a) ('요소:odd') : 홀수 번째에 위치한 문서 객체를 선택한다 
			b) ('요소:even') : 짝수 번째에 위치한 문서 객체를 선택한다
			c) ('요소:first') : 첫 번째에 위치한 문서 객체를 선택한다
			d) ('요소:last') : 마지막에 위치한 문서 객체를 선택한다
		(3) 함수 필터 선택자
			a) ('요소:contains(문자열)') : 특정 문자열을 포함하는 문서 객체를 선택한다 
			b) ('요소:eq(n)') : n 번째에 위치하는 문서 객체를 선택한다
			c) ('요소:gt(n)') : n 번째 초과에 위치하는 문서 객체를 선택한다 
			d) ('요소:it(n)') : n 번째 미만에 위치하는 문서 객체를 선택한다
			e) ('요소:has(tag)') : 해당 tag가 있는 문서 객체를 선택한다
			f) ('요소:not(선택자)') : 선택자와 일치하지 않는 문서 객체를 선택한다
            g) ('요소:nth-child(수식 (예.3n+1 등)') : 수식에 해당하는 순번에 위치하는 문서 객체를 선택한다
4. jQuery 배열 관리
	1) 형태 : index는 배열의 인덱스나 객체의 키를 의미한다. item은 해당 인덱스나 키가 가진 값을 의미한다
		(1) $(selector).each(function(index,item){});
		(2) $.each(object, function(index, item){});
5. 객체 확장 : 많은 수의 속성을 추가할 때 사용하는 메서드
	1) 형태 : $.extend(object, addObject, addObject...)
	2) 옵션 객체 보완 : $.extend(객체, 객체, 객체 ...). 객체들을 결합해준다, 이때 같은 이름의 속성이 있으면 뒤의 매개변수에 넣은 객체의 속성이 앞에 위치한 매개변수에 넣은 객체의 속성을 덮어 씌우게 된다. 객체를 하나만 넣으면 객체를 깊은 복사하게 된다.
6. jQuery 충돌 방지
	1) 이유 : 여러 자바스크립트 프레임워크를 사용하다 보면 플러그인 간에 충돌이 발생할 수 있다. 이러한 충돌을 방지할 때 사용
	2) 형태 : $.noConflic(), 해당 메서드 사용시 jQuery의 식별자 '$'를 사용할 수 없다. $대신 jQuery를 식별자로 사용한다.
```

## 2. 문서 객체 선택과 탐색

```
1. 기본 필터 메서드
	1) 의미 : jQuery 선택자를 사용하면 원하는 문서 객체를 대부분 선택할 수 있다. 기본적으로 지원하지 않는 필터로 문서 객체를 선택해야 할 때 사용하는 메서드. 문서 객체의 범위를 하부 단계로 좁게만 선택할 수 있다
	2) 형태
		(1) $(selector).filter(selector);
		(2) $(selector).filter(function(){});
2. 문서 객체 탐색 종료
	1) 의미 : 메서드에서 선택한 문서 객체 선택을 한 단계 뒤로 돌리는 메서드
	2) 형태 : .end()
3. 특정 위치의 문서 객체 선택
	1) 종류
		(1) .eq() : 특정 위치에 존재하는 문서 객체를 선택한다. 양수 뿐만아니라 음수도 입력할 수 있으며, 음수를 입력하는 경우 뒤에서 부터 검색한다
		(2) .first() : 첫 번째에 위치하는 문서 객체를 선택한다
		(3) .last() : 마지막에 위치하는 문서 객체를 선택한다
4. 문서 객체 추가 선택
	1) 의미 : 현재 선택한 문서 객체의 범위에 추가적으로 범위를 선택해 확장한다
	2) 형태 .add()
5. 문서 객체의 특징 판별
	1) 의미 : 매개변수로 선택자를 입력받아 선택한 객체가 선택자와 일치하는지 판별해 불 자료형을 리턴한다
	2) 형태 : .is('선택자')
6. 특정 태그 선택
	1) 의미 : 일반 선택자 뿐만아니라 특정 태그를 선택할 수 있는 메서드
	2) 형태 : .find()
7. 특정 태그의 부모 태그를 선택
	1) 의미 : jQuery가 제공하는 특정 태그의 부모 태그를 선택하는 메서드
	2) 형태 .parent()
```

## 3. 문서 객체 조작

```
1. 문서 객체의 클래스 속성 추가
	1) 형태 : addClass()
2. 문서 객체의 클래스 속성 제거
	1) 형태 : removeClass()
3. 문서 객체의 클래스 속성 추가 or 제거
	1) 형태 : toggleClass()
	2) 의미 : 매개변수로 입력한 클래스 속성이 이미 지정되어 있으면 제거하고, 지정되지 않으면 추가한다
4. 문서 객체의 속성 추가 및 검사
	1) 형태  
		(1) $(selector).attr(name, value)
		(2) $(selector).attr(name, function(index, attr){});
		(3) $(selector).attr(object);
5. 문서 객체의 속성 제거
	1) 형태 : removeAttr(name)
	2) 의미 : removeClass(name)과 달리 removeAttr(class)를 하는 경우 모든 클래스 속성이 삭제된다.
6. 문서 객체의 스타일 검사
	1) 형태
		(1) $(selector).css(name, value)
		(2) $(selector).css(name, function(index, style){})
		(3) $(selector).css(object);
7. 문서 객체의 내부 검사
	1) 형태
		(1) text() : 문서 객체 내부의 글자와 관련된 모든 기능을 수행한다
		(2) html() : 문서 객체 내부의 글자와 관련된 모든 기능을 수행하며 HTML 태그를 인식한다
8. 문서 객체 삽입
	1) 형태
		(1) $(A).appendTo(B) : A를 B의 뒷부분에 추가한다
		(2) $(A).prependTo(B) : A를 B의 앞부분에 추가한다
		(3) $(A).insertAfter(B) : A를 B의 뒤에 추가한다
		(4) $(A).insertBefore(B) : A를 B의 앞에 추가한다.
		(5) $(A).append(B) : B를 A의 뒷부분에 추가한다
		(6) $(A).prepend(B) : B를 A의 앞부분에 추가한다
		(7) $(A).After(B) : B를 A의 뒤에 추가한다
		(8) $(A).Before(B) : B를 A의 앞에 추가한다.
9. 문서 객체 복제
	1) 형태 : clone()
```

## 4. 이벤트

```
1. on()
	1) 기능 : 이벤트를 연결하는 메서드
	2) 형태
		(1) $(selector).on(eventName, function(event){})
		(2) $(selector).on(object)
	3) on()메서드의 매개변수 : $(seletor).on(types,selector,data,fn,one)
		(1) types
		(2) selctor : 이벤트 범위를 한정
		(3) data
		(4) fn
		(5) one
2. hover()
	1) 기능 : mouseenter 이벤트와 mouseleave 이벤트를 동시에 연결한다
	2) 형태 : $(selector).hover(function(event){mouseenter 이벤트리스너}, function(event){mouseleave 이벤트 리스너});.
3. off()
	1) 기능 : 이벤트를 제거하는 메서드
	2) 형태
		(1) $(selector).off()
		(2) $(selector).off(eventName)
		(3) $(selector).off(eventName, function)
4. one()
	1) 기능 : 이벤트를 한 번만 연결한다
5. 매개변수 context
	1) 기능 : selector가 적용하는 범위를 한정한다
	2) 형태 : $(selector, context)
6. 이벤트 객체
	1) 자바스크립트와 jQuery의 이벤트 객체차이
		(1) 자바스크립트의 이벤트 객체 : 웹 블라우저마다 사용 방법은 물론 이벤트 객체에 있는 속성이 다르다
		(2) jQuery의 이벤트 객체 : jQuery가 스스로 이벤트 객체를 정형화하므로 jQuery의 이벤트 객체는 모든 웹 블라우저에서 같은 방법으로 사용할 수 있으며 같은 속성을 같는다.
	2) 이벤트 객체의 속성
		(1) event.pageX : 브라우저 화면을 기준으로 한 마우스의 x 좌표 위치
		(2) event.pageY : 브라우저 화면을 기준으로 한 마우스의 y 좌표 위치
		(3) event.preventDefault() : 기본 이벤트를 제거한다
		(4) event.stopPropagation() : 이벤트 전달을 제거한다
7. trigger()
	1) 기능 : 이벤트를 강제로 발생시킨다
	2) 형태
		(1) $(selector).trigger(eventName)
		(2) $(selector).trigger(eventName,data)
8. preventDefault()
	1) 기능 : 기본 이벤트를 제거한다
9. stopPropagation()
	1) 기능 : 이벤트 전달을 제거한다
10. 마우스 이벤트
	1) click : 마우스를 클릭할 때 발생한다
	2) dbclick : 마우스를 더블클릭 할 때 발생한다
	3) mousedown : 마우스 버튼을 누를 때 발생한다
	4) mouseup : 마우스 버튼을 땔 때 발생한다
	5) mouseenter : 마우스가 요소의 경계 외부에서 내부로 이동할 대 발생한다
	6) mouseleave : 마우스가 겨예 내부에서 외부로 이동할 때 발생한다
	7) mousemove : 마우스가 움직일 때 발생한다
	8) mouseout : 마우스가 요소를 벗어날 때 발생한다
	9) mouseover : 마우스를 요소 안에 들어올 때 발생한다
11. 키보드 이벤트
	1) keydown : 키보드를 누를 때 발생한다 
	2) keypress : 글자가 입력될 때 발생한다. 해당 이벤트로 한글을 사용할 수 없다.
	3) keyup : 키보드를 땔 때 발생한다
12. 윈도우 이벤트
	1) ready : 문서 객체가 준비완료되면 발생한다
	2) load : 문서 객체를 불러들일 때 발생한다
	3) unload : 문서 객체를 닫을 때 발생한다
	4) resize : 문서 객체의 크기를 변화시킬 때 발생한다
	5) scroll : 문서 객체를 스크롤할 때 발생한다
	6) error : 에러가 있을 때 발생한다
13. 입력 양식 이벤트
	1) change : 입력 양식의 내용을 변경할 때 발생한다
	2) focus : 입력 양식에 초점을 맞추면 발생한다
	3) focusin : 입력 양식에 초점이 맞추어지기 바로 전에 발생한다
	4) focusout : 입력 양식에 초점이 사라지기 바로 전에 발생한다
	5) blur : 입력 양식에 초점이 사라지면 발생한다
	6) select : 입력 양식을 선택할 때 발생한다 (input[type="text"]태그 및 textarea 태그 제외)
	7) submit : submit 버튼을 누르면 발생한다
	8) reset : reset 버튼을 누르면 발생한다
```

## 5. 효과

```
1. 기본 시각 효과
	1) 기본 시각 효과 메서드
		(1) show() : 문서 객체를 확대하여 보여준다
        (2) hide() : 문서 객체를 축소하여 사라지게 한다
        (3) toggle() : show메서드와 hide 메서드를 번갈아 실행한다
        (4) slideDown() : 문서 객체를 슬라이드 효과와 함께 보여준다
        (5) slideUp() : 문서 객체를 슬라이드 효과와 함께 사라지게 한다
        (6) slideToggle() : slideDown 메서드와 slideUp 메서드를 번갈아 실행한다
        (7) fadein() : 문서 객체를 선명하게 보여준다
        (8) fadeout() : 문서 객체를 흐리게 사라지게 한다
        (9) fadeToggle() : fadein 메서드와 fadeout 메서드를 번갈아 실행한다
    2) 메서드 형태
    	(1) $(selector).method();
    	(2) $(selector).method(speed);
    	(3) $(selector).method(speed,callback);
    	($) $(selector).method(speed,easing,callback);
    3) 메서드 매개변수
    	(1) speed
    		a) 효과를 진행할 속도를 지정한다
    		b) 밀리 초 단위의 숫자 또는 문자열(slow,normal,fast)을 입력한다
    	(2) callback : 효과를 모두 완료하고 실행할 함수를 지정한다
    	(3) easing
    		a) 애니메이션의 easing 형태를 지정한다
    		b) 별도의 플러그인을 사용하지 않으면 문자열(liner, swing)만 입력 가능하다
2. 사용자 정의 효과
	1) 메서드 : animate()
	2) 메서드 의미 : 사용자 지정 효과를 생성한다
	3) 메서드 형태
    	(1) $(selector).animate(object);
    	(2) $(selector).animate(object, speed);
    	(3) $(selector).animate(object, speed, easing);
    	($) $(selector).animate(object, speed ,easing ,callback);
    4) 메서드 매개변수
    	(1) object
    		a) object에 입력할 수 있는 속성
    			(a) opacity
    			(b) height
    			(c) top
    			(d) width
    			(e) left
    			(f) margin
    			(g) right
    			(h) padding
    			(i) bttom
    	(2) speed
    	(3) easing
    	(4) callback
3. jQuery 효과 메서드 작동 방식
	1) jQuery 효과 메서드는 적용한 숫자만큼 계속 누적해서 작동한다
	2) 애니메이션 큐 : 누적된 효과 명령은 큐에 누적된다. 큐는 먼저 들어간 것이 먼저 나오는 공간이다(FIFO)
	3) clearQueue() : 큐의 내용을 제거하는 메서드. 내용이 제거된 이후 추가적으로 실행되는 효과는 없지만 큐의 내용을 제거하기 이전에 실행되던 애니메이션을 정지하는 기능은 없다.
	4) stop() 
		(1) 기능 : 효과 및 애니메이션을 정지한다
		(2) 형태
			a) $(selector).stop();
			b) $(selector).stop(clearQueue);
			c) $(selector).stop(clearQueue,goToEnd);
		(3) 매개변수
			a) clearQueue
				(a) 불 자료형을 입력한다. 입력하지 않으면 자동으로 false를 입력한 것으로 간주한다
				(b) true : clearQueue 메서드를 실행하는 것과 같은 효과를 낸다
			b) goToEnd
				(a) 불 자료형을 입력한다. 입력하지 않으면 자동으로 false를 입력한 것으로 간주된다
				(b) true : 제자리에서 멈추는 것이 아니라 지정한 최종 형태에서 멈춘다.
	5) delay()
		(1) 기능 : 큐에 있는 명령을 잠시 중단한다
4. jQuery UI Effect plug-in
	1) 기능
		(1) 색상 변환 애니메이션
		(2) addClass(), removeClass(), switchClass() 메서드에 애니메이션 기능 추가
		(3) 고수준의 시각적 효과 : 거의 사용하지 않는다
		(4) 추가적인 easing 형태
5. jQuery innerfade plug-in
	1) 기능 : 화면 전환 효과
	2) 형태 :$('ID or class').innerfade({
	animationtype,speed,timeout,type,containerheight,runningclass})
	3) 매개변수
		(1) animationtype
			a) 의미 : 내용물의 변경 효과
			b) 값 : fade or slide (default : fade)
		(2) speed
			a) 의미 : 내용물의 변경 속도
			b) 값 : slow, normal, fast (default : normal)
		(3) timeout
			a) 의미 : 변경 효과가 적용되는 속도
			b) 값 : 밀리세컨드 단위(default : 2000)
		(4) type
			a) 의미 : 내용물의 변경 방식
			b) 값 : sequence, random, random_start (default : sequence)
		(5) containerheight
			a) 의미 : 내용물의 높이
			b) 값 : any css-height-value(default : auto)
		(6) runningclass
			a) 의미 : css-class가 컨테이너에 적용되는 방식
			b) 값 : (default : innerfade)
```

## 6. 이미지 슬라이더

```
1. 자바스크립트로 플래시 또는 실버라이트의 시각적 효과를 구현하기 위해 지정해야 하는 사항
	1) 캔버스의 width와 height 스타일 속성은 필수로 지정해야한다 : 캔버스의 width와 height 스타일을 지정하지 않은채 구성요소의 position 스타일 속성을 absolute로 지정하면 캔버스의 height 속성이 무시되는 효과가 발생한다
	2) 캔버스의 position 스타일 속성은 relative로 지정해야한다 : 부모의 position 스타일 속성이 absolute 또는 relative 일 때만 자식 구성 요소가 부모의 위치를 기준으로 위치를 잡으므로 캔버스에도 position 스타일을 부여해야 한다
	3) 캔버스의 overflow 스타일 속성은 hidden으로 지정해야한다 : overflow 스타일을 정하지 않으면 자식 구성요소가 부모 구성요소를 넘어갈 경우 그대로 표현되므로 자식이 부모에 종속되기 위해서는 overflow 속성을 hidden으로 표현해주어야 한다.
	4) 구성요소의 position 스타일 속성은 absolute로 지정해야한다
```

## 7. jQuery 플러그인 제작

```

```