# Cloud - URI, URL, URN

> 통합 자원 식별자 Uniform Resource Identifier



## 1. URI?

* URI는 인터넷에 있는 자원을 나타내는 유일한 주소이다.
* URI의 존재는 인터넷에서 요구되는 기본조건으로서 IP에 항상 붙어 다닌다. 



## 2 . URI 문법

#### 2-1) 일반 URI 문법 

```
 scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]
```

예 )  `abc : // username:password@example.com:123/path/data?key=value#fragid1`

* `abc` : scheme
* `username:password`: user information
* `@example.com` : host
* `123` : port
* `/path/data` : path
* `?key` : querry
* `#fragid1` : fragment
* `username:password@example.com:123` : authority
* `username:password@example.com:123/path/data?key=value#fragid1` : hierarchical part



## 3. URI의 하위 개념 : URL, URN

#### 3-1) URL

> 파일 식별자, Uniform Resource Locator

* URL이란 네트워크 상에서 자원이 어디있는지 알려주기 위한 규약이다.
* URL은 컴퓨터 네트워크와 검색 메커니즘에서의 위치를 지정하는 웹 리소스에 대한 참조이다.



#### 3-2) URN

> 통합 자원 이름, Uniform Resource Name

* `urn:scheme`을 사용하는 영속적이고 독립적인 자원을 위한 지시자이다.
* 문법 : `<URN> ::= “urn:” <NID> “:” <NSS>`