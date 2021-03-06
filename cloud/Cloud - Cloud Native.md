# Cloud - Cloud Native

## 1. CI/CD

### 1) CI

> 지속적 통합, Continuous Integration

### 2) CD

> 지속적 배포, Continuous Deployment

#### (1) 배포 방법

* Rolling

```
일반적인 배포를 의미한다. 단순하게 서버를 구성하는 배포 전략이다. 구 버전에서 신 버전으로 트래픽을 점진적으로 전환하는 배포이다. 관리가 편하지만 배포 중 한쪽 인스턴스의 수가 감소되므로 서버 처리 용량을 미리 고려해야 한다
```

* Canary Release

```
위험을 빠르게 감지할 수 있는 배포 전략이다. 지정한 서버 또는 특정 user에게만 배포했다가 정상적이면 전체를 배포한다. 서버의 트래픽 일부를 신 버전으로 분산하여 오류 여부를 확인할 수 있다. 이런 전략은 A/B 테스트가 가능하게 되며 성능 모니터링에 유용하다. 트래픽을 분산시킬 때는 라우팅을 랜덤하게 할 수 있고, 사용자로 분류할 수도 있다.
```

* A/B Testing

```
기능적으로 Upgrade를 적용하지 않고 우선 서로 다른 두가지 버전의 application 중 유용성, 인기도 등을 종합적으로 고려해 application의 기능을 테스트하는 방법이다. application-level switch, static switch, traffic manager, canary release로 구현할 수 있다.
```

* Blue Green

```
구 버전을 블루, 신 버전을 그린이라고 부른다. 신 버전을 배포하고 일제히 전환하여 모든 연결을 신 버전을 바라보게 하는 전략이다. 구 버전, 신 버전 서버를 동시에 나란히 구성하여 배포시점에 트래픽이 일제히 전환된다. 빠른 롤백이 가능하고 운영 환경에 영향을 주지 않고 실제 서비스 환경으로 신 버전 테스트가 가능하다. 단 이러한 구성은 시스템 자원이 두배로 필요하여 비용이 더 많이 발생한다
```

## 2. DevOps

> Development + Operations

### 1) Agile

#### (1) Agile software Development maifesto

````
우리는 소프트웨어를 개발하고 또 다른 사람의 개발을 도와주면서 소프트웨어 개발의 더 나은 방법들을 찾아가고 있다. 이 작업을 통해 우리는 다음을 가치 있게 여기게 되었다.

공정과 도구보다 개인과 상호작용을
포괄적인 문서보다 작동하는 소프트웨어를
계약 협상보다 고객과의 협력을
계획을 따르기보다 변화에 대응하기를

가치있게 여긴다. 이 말은, 왼쪽에 있는 것들도 가치가 있지만, 우리는 오른쪽에 있는 것들에 더 높은 가치를 둔다는 것이다.
````

#### (2) Agile manifesto 이면의 원칙

```
우리는 다음 원칙을 따른다

우리의 최우선 순위는 가치있는 소프트웨어를 일찍 그리고 지속적으로 전달해서 고객을 만족시키는 것이다

비록 개발의 후반부일지라도 요구사항 변경을 환영하라. 애자일 프로세스들은 변화를 활용해 고객의 경쟁력에 도움이 되게 한다.

작동하는 소프트웨어를 자주 전달하라. 두어 주에서 두어 개월의 간격으로 하되 더 짧은 기간을 선호하라.

비즈니스 쪽의 사람들과 개발자들은 프로젝트 전체에 걸쳐 날마다 함께 일해야 한다

동기가 부여된 개인들 중심으로 프로젝트를 구성하라. 그들이 필요로 하는 환경과 지원을 주고 그들이 일을 끝내리라고 신뢰하라

개발팀으로, 또 개발팀 내부에서 정보를 전하는 가장 효율적이고 효과적인 방법은 면대면 대화이다

작동하는 소프트웨어가 진척의 주된 척도이다

애자일 프로세스들은 지속 가능한 개발을 장려한다. 스폰서, 개발자, 사용자는 일정한 속도를 계속 유지할 수 있어야 한다

기술적 탁월성과 좋은 설계에 대한 지속적 관심이 기민함을 높인다

단순성이 필수적이다.

최고의 아키텍처, 요구사항, 설계는 자기 조직적인 팀에서 창발한다

팀은 정기적으로 어떻게 더 효과적이 될지 숙고하고, 이에 따라 팀의 행동을 조율하고 조정한다.
```

### 2) Lean

```
1. 개념 : Toyota Production System을 재정립한 경영방법론인 린 시스템의 품질 기법을 소프트웨어 개발에 적용한 개발 방법론

2. 특징
	1) 품질 기법 : 린 공학 품질 기법을 sW 개발 프로세스에 적용된다
	2) 낭비요소제거 : 낭비요소를 제거하고 7가지 개발원칙을 준수한다
	
3. 린 개발 방법의 7가지 개발원칙
	1) 낭비의 제거, Eliminate waste : 불필요한 코드나 기능, 불분명한 요구사항, 느린 커뮤니케이이나 프로세스, 관료적 습관 등 상품의 가치에 영향을 미치지 않는 모든 것을 제거
	2) 배움 증폭, Amplify learning : 고객의 가치를 학습해야한다. 고객이 원하는 것과 원치 않는 것을 빠르게 배워 불필요한 개발을 최소화해야 한다. 최소한의 개발로 고객의 피드백을 받을 수 있는 학습역량을 확보해야 한다.
	3) 권한 위임, Empower the team : 담당직원에게 자기의사결정권을 부여해 직원들의 동기를 부여하여 잠재력을 극대화한다
	4) 확정 연기, Defer commitment : 중요한 문제에 대한 의사 결정은 최대한 미뤄라. 그래야 요구사항 변경에 적절하게 대응할 수 있다
	5) 빠른 인도, Deliver fast : 시간이 지날수록 고객의 요구사항이 변경될 수 있다. 따라서 최대한 빨리 결과물을 고객에게 제공해야. 그래야 추후 결점을 발견할 수 있는 시간을 제공하고 확보할 수 있다. 즉, 고객으로 인한 불확실성을 감소시켜야 한다
	6) 통합성 구축, Build integrity in : 개발 초기부터 품질을 향상 시키도록 노력하라. 작은 개발 단계마다 오류를 발견하고 수정하는 작업을 병행하라
	7) 최적화, Optimize the whole : 요구사항 수집부터 제품을 릴리즈하는 시점까지 모든 프로세스를 최적화해야 한다. 가치흐름에 초점을 맞추고 완전한 제품을 고객에게 인도해라
	
4. 낭비의 종류
	1) 코딩, Waste in code development
		(1) 미완성 작업 : 일정을 지키지 못하고 사용을 못하게 한다
		(2) 결함 : 결함 수정 및 반복 테스트
	2) 프로젝트 관리, waste in project management
		(1) 추가적인 프로세스 : 낭비적이고 불필요한 데이터를 문서화
		(2) 코드 이관 : 코드 이관 과정에서 데이터 손실
		(3) 여분 기능 : 고객이 필요로 하지 않는 기능을 추가
	3) 개발자, waste in project potential
		(1) 작업 전환 : 다중 작업으로 인한 비효율 초래
		(2) 인프라를 활요하거나 정보를 얻기 위해 대기 시간이 길어짐 : 개발자가 대기하는 기간이 길어질수록 낭비가 심해진다
```

### 3) What is DevOps

```
1. DevOps 단계
	1) 1단계, System Thinking : From Dev/Business to Ops/Customer
	2) 2단계, Amplify Feedback Loops : Fail Fast, Fail Often, Fail Cheaply
	3) 3단계, Culture of Continual Experimentation And Learning : Continuous Improvement

2. DevOps 도구
	1) Planning : 
	2) Code : git / JIRA / Confluence / monday / REDMINE / 
	3) Build : sbt / maven /gradle
	4) Test : Sellenium / JUnit
	5) Release : Jenkins / CODESHIP
	6) Deploy : DC/OS / Docker / AWS
	7) Operate : CHEF / ANSIBLE / Kubernetes
	8) Monitor : Nagios / splunk / DATADOG
	
3. CALMS Framework
	1) 문화
	2) 자동화
	3) 린
	4) 측정
	5) 공유
	
4. DevOps 팀 구성 : DevOps 는 애플리케이션과 서비스의 개발에서 배포 운영까지 빠르게 제공하기 위한 조직의 협업 문화이다. 따라서 서비스의 기획, 설계, 개발, 배포 및 운영까지 한 팀에서 수행하게 된다.

5. Dev & Ops
	1) Dev
		(1) Build
		(2) Unit Tet
		(3) Development / Deployment
	2) QA
		(1) Deploy To Test Environments
		(2) Functional And Performance Test
	3) Ops
		(1) Deploy To Staging
		(2) Deploy To Production
	4) after Dev
		(1) Build
		(2) Dev Test
		(3) System
		(4) UAT
		(5) Sing-off
		(6) Staging
		(7) Prod

6. Monitoring
	1) Health Check API : 
	2) Log Aggregation :
	3) Distributed tracing :
	4) Exception tracking :
	5) Application metrics : 
	6) Audit logging : 
```

## 3. MSA

> MicroService Architecture

```
1. Microsevice의 특징
	1) Small, 작은 서비스 : 독립된 비즈니스가 아닌 독립된 서비스 단위
	2) Bounded Context, 독립된 서비스 : 하나의 서비스에 담을 수 있는 기능들의 그룹이다. 구현, 배포, 실행, 장애에 대해 영향을 받지 않으며 독립적으로 실행되는 서비스 수준의 경계를 정한다.
	3) 응집된 서비스 : 하나의 서비스는 기능적으로 응집되어 있다. 서비스의 역할이 한 가지 이을 위해서 묶여야 단순해지며, 목적이 명확해지고, 오류가 최소화된다.
	4) 자율적 서비스 : 서비스의 기획, 개발, 테스트, 배포 및 서비스의 운영까지 담당 조직이 독립적으로 의사를 결정해야 한다.

2. Microservice 기획
	1) Microservice 식별 전략
		(1) 도메인 이해 / 요구 분석 / 조직 분석  : 사용자, 업무 흐름, 핵심 업무, 업무 우선순위
		(2) Microservice 원칙 수립 : microservice 경계, 분할 및 크기 등
		(3) 상관 분석 : 사용자, 업무, 데이터 간 상관관계
		(4) 서비스 식별 : 
```

