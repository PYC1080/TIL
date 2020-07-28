# Java - 고급

## 1. 스레드

### 1) 멀티 스레드

```
1. 프로세스, process : 사용자가 운영체제로부터 실행에 필요한 메모리를 할당받아 애플리케이션의 코드를 실행하는 것

2. 스레드, thread : 한 가지 작업을 실행하기 위해 순차적으로 실행할 코드 흐름

3. 메인 스레드, main thread : 자바의 모든 애플리케이션은 메인 스레드가 main() 메소드를 실행하면서 시작한다. 메인 스레드는 필요에 따라 작업 스레드들을 만들어서 병렬로 코드를 실행할 수 있다.

4. 작업 스레드 생성과 실행
	1) Thread 클래스로부터 직접 생성
		1) Runnable 구현 클래스 작성 : class class_name implements Runnable{public void run(){스레드가 실행할 코드}}
		2) Runnable 구현 객체 생성 : Runnable runnable_name = new class_name();
        3) 생성자 호출 : Thread thread_name = new Thread(runnable_name)
			(1) Runnable : 작업 스레드가 실행할 수 있는 코드를 가지고 있는 객체. 인터페이스 타입이기 때문에 구현 객체를 만들어 대입해야 한다
	2) Thread 하위 클래스로부터 생성
		1) Thread 클래스 상속 후 run() 메소드 재정의 : public class class_name extends Thread{@Override public void run(){스레드가 실행할 코드;}}

5. 스레드 이름
	1) 초기 설정 : 우리가 직접 생성한 스레드는 자동적로 'Thread-n'이라는 이름으로 설정된다
	2) 이름 변경 : thread.setName("스레드 이름");
	3) 이름 확인 : thread.getName();
	4) 스레드 참조 : Thread thread = Thread.currentThread();
	
6. 동기화 메소드
	1) 임계 영역, critical selection : 멀티 스레드 프로그램에서 단 하나의 스레드만을 실행할 수 있는 영역
	2) 동기화 메소드 : 스레드가 사용 중인 객체를 다른 스레드가 변경할 수 없게 하기 위해 객체에 잠금을 걸도록 자바가 임계영역을 지정하는 것
	3) 동기화 메소드 선언 : 메소드 선언에 synchronized 키워드를 붙인다
```

### 2) 스레드 제어

```
1. 스레드 상태 
	1) 실행 대기 상태 : 스레드 객체를 생성하고 start() 메소드를 호출하면 곧바로 실행을 기다리고 있는 실행 대기 상태로 돌입한다
	2) 실행 상태, running 
		(1) 의미 : 실행 대기 상태에 있는 스레드 중에서 운영체제는 하나의 스레드를 선택해 CPU가 run() 메소드를 실행하도록 한다.
        (2) 특징
        	a) 실행 상태에 있는 스레드는 run() 메소드를 모두 실행하기 전에 다시 실행 대기 상태로 돌아갈 수 있다.
			b) 실행 상태와 실행 대기 상태가 번갈아가며 run() 메소드를 실행한다
	3) 종료 상태, terminated : 더이상 실행할 코드가 없어 스레드의 실행이 멈춘 상태
	
2. 스레드 상태 제어
	1) 의미 : 실행 중인 스레드의 상태를 변경하는 것
	2) sleep(long millis) 메소드 : 주어진 시간 동안 스레드를 일시 정지 상태로 만든다. 일시 정지 상태에서 주어진 시간이 되기전에 interrupt() 메소드가 호출되면 interruptException 이 발생하므로 예외 처리가 필요하다.
	3) stop() 메소드 : 스레드를 즉시 종료한다. 하지만 스레드가 사용 중이던 자원들이 불안전한 상태로 남겨지기 때문에 사용하지 않는 것이 좋다
	4) interrupt() 메소드 : 스레드가 일시 정지 상태에 있을 때 InterruptException을 발생시키는 역할을 한다. 이를 이용해 run() 메소드를 정상 종료할 수 있다
	
3. 데몬 스레드, daemon thread : 주 스레드의 작업을 돕는 보조적인 역할을 수행하는 스레드. 주 스레드가 종료되면 데몬 스레드는 강제적으로 자동 종료된다
```

## 2. 컬렉션 프레임워크

### 1) 컬렉션 프레임 워크

```
1. 기본 용어
   	1) 컬렉션, collection : 객체의 저장
    2) 프레임워크, Framework : 사용 방법을 정해놓은 라이브러리
    3) 컬렉션 프레임워크 : 데이터를 저장하는 자료구조와 데이터를 처리하는 알고리즘을 구조화하여 클래스로 구현해 놓은 것

2. List 컬렉션
	1) 의미 : 배열과 비슷하게 객체를 인덱스로 관리한다. 그러나 배열과 달리 저장 용량이 자동으로 증가하며 객체를 저장할 때 자동으로 인덱스가 부여되며, 추가 삭제 검색을 위한 메소드가 제공된다.
	2) 인터페이스 메소드
		(1) boolean add(E e) : 주어진 객체를 맨 끝에 추가한다
		(2) void add(int index,E element) : 주어진 인덱스에 객체를 추가한다
		(3) E set(int index, E element) : 주어진 인덱스에 저장된 객체를 주어진 객체로 바꾼다
		(4) boolean contains(Object o) : 주어진 객체가 저장되어 있는지 조사한다
		(5) E get(int index) : 주어진 인덱스에 저장된 객체를 리턴한다
		(6) boolean isEmpty() : 컬렉션이 비어 있는지 조사한다
		(7) int size() : 저장되어 있는 전체 객체 수를 리턴한다
		(8) void clear() : 저장된 모든 객체를 삭제한다
		(9) E remove(int index) : 주어진 인덱스에 저장된 객체를 삭제한다
		(10) boolean remove(Object o) : 주어진 객체를 삭제한다
	3) ArrayList
		(1) 생성 : List<타입 파라미터> list_name = new ArrayList<타입 파라미터>();
		(2) 특징
			a) 내부에 10개를 저장할 수 있는 초기 용량을 가지게 된다
			b) 저장되는 객체 수가 늘어나면 용량이 자동으로 증가한다
			c) 특정 인덱스 객체를 제거하면 인덱스 번호가 앞당겨진다
			d) LinkedList에 비해 검색이 빠르다
	4) Vector
		(1) 생성 : List<타입 파라미터> list_name = new Vector<타입 파라미터>();
		(2) 특징
			a) 동기화된 메소드로 구성되어 있다
			b) ArrayList와 동일한 내부 구조를 가지고 있다.
	5) LinkedList
		(1) 생성 : List<타입 파라미터> list_name = new LinkedList<타입 파라미터>();
		(2) 특징
			a) 인접 참조를 링크해서 체인처럼 관리한다
			b) 특정 인덱스 객체를 제거 및 추가하면 앞 뒤 링크만 변경되고 나머지 링크는 변겨오디지 않는다
			c) ArrayList에 비해 검색이 느리다
			
3. Set 컬렉션
	1) 의미 : 객체를 중복해서 저장할 수 없고 하나의 Null만 저장할 수 있으며 저장 순서가 유지되지 않는다.
	2) 인터페이스 메소드
		(1) boolean add(E e) : 주어진 객체를 저장한다
		(2) boolean contains(Object o) : 주어진 객가 저장되어 있는지 조사한다
		(3) boolean isEmpty() : 컬렉션이 비어있는지 조사한다
		(4) Iterator<E> iterator() : 저장된 객체를 한 번씩 가져오는 반복자를 리턴한다
		(5) int size() : 저장되어 있는 전체 객체 수를 리턴한다
		(6) void clear() : 저장된 모든 객체를 삭제한다
		(7) boolean remove(Object o) : 주어진 객체를 삭제한다
	3) HashSet
		(1) 의미 : 객체를 저장하기 전에 먼저 객체의 hashCode() 메소드를 호출해서 해시코드를 얻어내고 이미 저장되어 있는 객체들의 해시코드와 비교해 동일한 해시코드가 있다면 equals() 메소드로 두 객체를 비교해 true 가 나오면 중복 저장을 하지 않는다
		(2) 생성 : Set<타입 파라미터> set_name = new HashSet<타입 파라미터>();
		
4. Map 컬렉션
	1) 의미 : Map 컬렉션은 키와 값으로 구성된 map.Entry 객체를 저장하는 구조를 가지고 있다.
	2) Entry : Map 인터페이스 내부에 선언된 중첩 인터페이스
	3) 특징
		(1) 키와 값은 모두 객체이다
		(2) 키는 중복 저장될 수 없지만 값은 중복 저장될 수 있다
		(3) 기존 키-값을 새로 저장하면 기존 값은 없어지고 새로운 값으로 대체된다
	4) 메소드
		(1) V put(K Key, V value) : 주어진 키로 값을 저장한다. 새로운 킹리 경우 null을 리턴하고 동일한 키가 있을 경우 값을 대체하고 이전 값을 리턴한다
		(2) boolean containsKey(Object key) :주어진 키가 있는지 여부를 확인한다
		(3) boolean containsValue(Object value) : 주어진 값이 있는지 여부를 확인한다
		(4) Set<Map.Entry<K,V>>entrySet() : 키와 값의 쌍으로 구성된 모든 Map.Entry 객체를 Set에 담아 리턴한다
		(5) V get(Object key) : 주어진 키가 있는 값을 리턴한다
		(6) boolean isEmpty() : 컬렉션이 비어 있는지 여부를 확인한다
		(7) Set<K> keySet() : 모든 키를 Set 객체에 담아 리턴한다
		(8) int size() : 저장된 키의 총 수를 리턴한다
		(9) Collection<V> values() : 저장된 모든 값을 컬렉션에 담아 리턴한다
		(10) void clear() : 모든 Map.Entry를 삭제한다
		(11) V remove(Object key) : 주어진 키와 일치하는 Map.Entry를 삭제하고 값을 리턴한다
	5) HashMap
		(1) 의미 : Map 인터페이스를 구현한 대표적인 Map 컬렉션
		(2) 생성 : Map<키타입,값타입> map_name =new HashMap<키타입, 값타입> 
	6) Hashtable
		(1) 의미 : HashMap과 동일한 내부 구조를 가지고 있다. Hashtable과 달리 동기화된 메소드로 구성되어 있기 때문에 멀티 스레드가 동시에 메소드들을 실행할 수 없고 하나의 스레드가 실행을 완료해야만 다른 스레드를 실행할 수 있다
		(2) 생성 : Map<키타입, 값타입> map = new Hashtable<키타입, 값타입>();
```

### 2) LIFO 와 FIFO 컬렉션

```
1. 기본 용어
    1) LIFO, Last In First Out : 나중에 넣은 객체에 먼저 빠져나가는 자료구조
    2) FIFO, First In First Out : 먼저 넣은 객체가 먼저 빠져나가는 자료구조
    3) 스택, stack : LIFO 방식으로 데이터를 넣고(push) 빼는(pop) 자료구조를 구현한 클래스
    4) 큐, Queue : FIFO 방식으로 데이터를 넣고(offer) 빼는(poll) 자료구조를 구현한 클래스
    
2. 스택
	1) 메소드
		(1) push(E item) : 주어진 객체를 스택에 넣는다
		(2) peek() : 스택의 맨 위 객체를 가져온다. 객체를 스택에서 제거하지 않는다
		(3) pop() : 스택의 맨 위 객체를 가져온다. 객체를 스택에서 제거한다
	2) 생성 : Stack<타입 파라미터> stack = new Stack<타입 파라미터>();

3. 큐
	1) 메소드
		(1) offer(E e) : 주어진 객체를 넣는다
		(2) peek() : 객체 하나를 가져온다. 객체를 큐에서 제거하지 않는다
		(3) poll() : 객체 하나를 가져온다. 객체를 큐에서 제거한다
	2) 생성 : Queue<타입 파라미터> queue = new LinkedList<타입 파라미터>();
```

## 3. 입출력 스트림

### 1) 입출력 스트림

```
1. 입출력 스트림의 종류
	1) 바이트 기반 스트림 : 그림, 멀티미디어 등의 바이너리 데이터를 읽고 출력할 때 사용
	2) 문자 기반 스트림 : 문자 데이터를 읽고 출력할 때 사용
	
2. OutputStream
	1) 기능 : 바이트 기반 출력 스트림의 최상위 추상 클래스. 모든 바이트 기반 출력 스트림은 해당 클래스를 상속 받아서 ㅁ나들어 진다
	2) 메소드
		(1) write(int b) : 매개 변수로 주어지는 int에서 끝 1byte만 출력 스트림으로 보낸다
		(2) write(byte[] b) : 매개값으로 주어진 배열 b의 모든 바이트를 출력 스트림으로 보낸다
		(3) wirte(byt[] b, int off, int len) : 맥개값으로 주어진 배열b[off]부터 leng개까지의 바이트를 출력한다
		(4) flush() : 출력 버퍼에 잔류하는 모든 바이트를 출력한다
		(5) close() : 출력 스트림을 닫는다
		
3. InputStream
	1) 기능 : 바이트 기반 입력 스트림의 최상위 추상 클래스. 모든 바이트 기반 입력 스트림은 해당 클래스를 상속받아 만들어 진다.
	2) 메소드
		(1) read() : 입력 스트림으로부터 1byte를 읽고 int 타입으로 리턴한다
		(2) read(byte[] b) : 입력 스트림으로부터 매개값으로 주어진 배열의 길이만큼 바이트를 읽고 해당 배열에 저장한다. 그리고 읽은 바이트 수를 리턴한다
		(3) read(byte[] b, int off, int len) : 입력 스트림으로부터 len 개의 바이트만큼 읽고, 맥개값으로 주어진 바이트 배열 b[off]부터 len 개까지 저장합니다. 실제로 읽은 바이트 수가 len개보다 작을 경우에는 읽은 수만큼만 리턴한다
		(4) close() : 입력 스트림을 닫는다
		
4. Writer
	1) 기능 : 문자 기반 출력 스트림의 최상위 추상 클래스. 모든 문자 기반 출력 스트림 클래스는 해당 클래스를 상속받아서 만들어진다.
	2) 메소드
		(1) write(int c) : 매개 변수로 주어지는 int에서 끝 2byte(1개 문자)만 출력 스트림으로 보낸다
 		(2) write(char[] cbuf) : 매개값으로 주어진 char[] 배열의 모든 문자를 출력 스트림으로 보낸다
		(3) write(char[] cbuf, int off, int len) : 메소드 c[oFF]부터 len개의 문자를 출력 스트림으로 보낸다
		(4) write(String str) : 주어진 문자열 전체를 출력 스트림으로 보낸다
		(5) write(String str, int off, int len) : 주어진 문자열 off 순번부터 len 개 까지의 문자를 출력 스트림으로 보낸다
		(6) flush() : 버퍼에 잔류하는 모든 문자를 출력한다
		(7) close() : 출력 스트림을 닫는다
		
5. Reader
	1) 의미 : 문자 기반 입력 스트림의 최상위 추상 클래스이다. 모든 문자 기반 입력 스트림은 해당 클래스를 상속 받아 만들어진다
	2) 메소드
		(1) read() : 입력 스트림으로부터 1개의 문자를 읽고 int 타입으로 리턴한다
		(2) read(Char[] cbuf) : 입력 스트림으로부터 매개값으로 주어진 문자 배열의 길이만큼 문자를 읽고 배열에 저장하며 읽은 문자 수를 리턴한다.
		(3) read(char[] cbuf, int off, int len) : 입력 스트림으로부터 len 개의 문자만큼 일고 매개값으로 주어진 문자 배열에서 cbuf[off]부터 len개까지 저장한다
		(4) close : 입력 스트림을 닫는다
```

### 2) 보조 스트림

```
1. 보조 스트림 : 다른 스트림과 연결이 되어 여러 가지 편리한 기능을 제공해주는 스트림을 말한다

2. 보조 스트림 연결 : 보조스트림 변수 = new 보조스트림(연결스트림)

3. 분자 변환 보조 스트림
	1) OutputStreamWriter
		(1) 기능 : 바이트 기반 출력 스트림에 연결되어 문자 출력 스트림인 Writer로 변환하는 보조스트림
		(2) 선언 : Writer 변수 = new OutputStreamWriter(바이트 기반 출력 스트림);
    2) InputStreamReader
    	(1) 기능 : 바이트 기반 입력 스트림에 연결되어 문자 입력 스트림인 Reader로 변환하는 보조스트림
    	(2) 선언 : Reader 변수 = new InputStreamReader(바이트 기반 입력 스트림);
        
4. 성능 향상 보조 스트림
	1) 의미 : 프로그램의 실행 성능은 입출력이 가장 늦은 장치를 따라간다. 따라서 프로그램이 입출력 소스와 직접 작업하지 않고 중간에 메모리 버퍼와 작업함으로서 실행 성능을 향상시킬 수 있다
	2) BufferedOutputStream
		(1) 기능 : 바이트 기반 출력 스트림에 연결되어 버퍼를 제공해주는 보조스트림
		(2) 선언 : BufferedOutputStream 변수 = new BufferedOutputStream(바이트 기반 출력 스트림);
	3) BufferedWriter
		(1) 기능 : 문자 기반 출력 스트림에 연결되어 버퍼를 제공해주는 보조스트림
		(2) 선언 : BufferedWriter 변수 = new BufferedWriter(문자 기반 출력 스트림);
	4) BufferedInputStream
		(1) 기능 : 바이트 기반 입력 스트림에 연결되어 버퍼를 제공해주는 보조스트림
		(2) 선언 : BufferedInputStream 변수 = new BufferedInputStream(바이 기반 입력 스트림);
	5) BufferedReader
		(1) 기능 : 문자 기반 입력 스트림에 연결되어 버퍼를 제공해주는 보조 스트림
		(2) 선언 : BufferedReader 변수 = new BufferedReader(문자 기반 입력 스트림);
		
5. 기본 타입 입출력 보조 스트림
	1) 의미 : 기본 타입을 입출력할 수 있도록 돕는 보조스트림
	2) DataInputStream : DataInputStream 변수 = new DataInputStream(바이트 기반 입력 스트림);
	3) DataOutputStream : DataOutputStream 변수 = new DataOutputStream(바이트 기반 입력 스트림);
 
6. 프린터 보조 스트림
	1) 의미 : print(), println() 메소드를 가지고 있는 보조 스트림
	2) PrinterStream : PrinterStream 변수 = new PrinterStream(바이트 기반 출력 스트림);
	3) PrinterWriter : PrinterWriter 변수 = new PrinterWriter(문자 기반 출력 스트림);
	
7. 객체 입출력 보조 스트림
	1) 의미
	2) ObjectInputStream
		(1) 의미 : 객체를 역직렬화(바이트 배열을 다시 객체로 복원한다)한다
		(2) 선언 : ObjectInputStream 변수 = new ObjectInputStream(바이트 기반 입력스트림);
	3) ObjectOutputStream
		(1) 의미 : 객체를 직렬화(객체를 바이트 배열로 만든다)한다
		(2) 선언 : ObjectOutputStream 변수 = new ObjectOutputStream(바이트 기반 입력스트림);
```

### 3) 입출력 관련 API

```
1. System.in

2. System.out

3. Scanner

4. File
```

