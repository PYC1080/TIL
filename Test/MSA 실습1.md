# MSA 실습1

> JHIpster, K8s, Istio 
>
> [실습 참고 사이트](https://medium.com/@simionrazvan/microservices-using-jhipster-kubernetes-istio-bf75e992612a)

## 0. 사전 설정 

### 1) 설치

```
1. node.js version : v12.14.1
2. Jhipster version : v6.8.0
3. Istio version : v
4. Helm Version : v3.2.0 RC.1
5. Kubernetes version : v1.15.0
6. Docker resources
	1) CPU : 5
	2) memory : 6GB
	3) Swap : 2GB
	4) Disk Image size : 64GB
7. Google Kubernetes Engine
```

### 2) office assistence

```
1. UI : web interface
2. Organization : a microservice for organization structure
3. leave : a microservice for leave management
4. meeting : a microservice for meetings
5. notification : a notification microserivce for sending notifications
```

### 3) microservices DB

```
1. Organization : mariaDB
2. leave : MongoDB
3. meeting : MongoDB
4. notification : MongoDB
```

## 1. Google k8s engine cluster

### 1) login Google Cloud

```
E:...> gcloud auth login
```

### 2) create project

```
1. 프로젝트 생성 : 
E:...> gcloud projects create [project_name]

2. config set 설정 : 
E:...> gcloud config set project [project_name]
```

### 3) Enable Kubernetes api

[Google Kubernetes Engine API](https://console.cloud.google.com/apis/library/container.googleapis.com/)

```
1. 실습할 프로젝트 선택
2. Kubernetes Engine API 사용설정
3. 결과 확인
```

### 4) Create Google K8s engine cluster

```
1. 컨테이너 클러스터 생성 : 참고 사이트의 버전으로 오류가 발생해 버전이 변경됨
E:...> gcloud container clusters create office-cluster --cluster-version 1.11 --zone us-central1-a --num-nodes 4 --machine-type n1-standard-2

...

NAME            LOCATION       MASTER_VERSION  MASTER_IP      MACHINE_TYPE   NODE_VERSION    NUM_NODES  STATUS
office-cluster  us-central1-a  1.14.10-gke.34  35.193.213.37  n1-standard-2  1.14.10-gke.34  4          RUNNING

2. 컨테이너 클러스터 권한 부여
E:...>gcloud container clusters get-credentials office-cluster --zone us-central1-a
Fetching cluster endpoint and auth data.
kubeconfig entry generated for office-cluster.
```

### 5) Configure Google k8s engine

```
E: ...> kubectl create clusterrolebinding cluster-admin-binding --clusterrole=cluster-admin --user="구글 계정"
```

## 2. Install Istio, Helm, Kiali on your local

### 1) [Helm](https://github.com/helm/helm/releases)

```
1. Download and unzip Helm locally
```



### 2) [Istio](https://github.com/istio/istio/releases/tag/1.0.6) 

```
1. Download and unzip Istio locally 

2. Install Istio in k8s cluster (teminal)
	1) E:...> cd istio path
	2) E:...> kubectl apply -f install/kubernetes/helm/istio/templates/crds.yaml
	3) E:...> kubectl apply -f install/kubernetes/istio-demo.yaml --as=admin --as-group=system:masters
	
3. check Istio installation
E:...> kubectl get pods -n istio-system
NAME                                      READY   STATUS      RESTARTS   AGE
grafana-5b5bb96d6d-vqgpd                  1/1     Running     0          62s
istio-citadel-6559b9697b-5tnct            1/1     Running     0          59s
istio-cleanup-secrets-l4dv7               0/1     Completed   0          88s
istio-egressgateway-5dd6dbb89f-zknvx      1/1     Running     0          63s
istio-galley-7cd7dc49f9-7vr4w             1/1     Running     0          64s
istio-grafana-post-install-9cpt8          0/1     Completed   0          91s
istio-ingressgateway-947b9cd66-4kh86      1/1     Running     0          63s
istio-pilot-658475f545-qzdtn              2/2     Running     0          60s
istio-policy-6c54647778-8llt4             2/2     Running     0          62s
istio-security-post-install-dwl5m         0/1     Completed   0          86s
istio-sidecar-injector-75fddbd5c9-pv48j   1/1     Running     0          58s
istio-telemetry-68c686dd4b-f6ptq          2/2     Running     0          61s
istio-tracing-c8b67b59c-2ktkf             1/1     Running     0          58s
prometheus-578b7dcfdc-4kg58               1/1     Running     0          60s
servicegraph-f6fd677db-cpc6d              1/1     Running     0          59s

4.kubectl get services -n istio-system : IP 주소 기억해 둘 것
...
                                                           
istio-ingressgateway     LoadBalancer  ...  35.224.248.75 ...

...
```

### 3) [Kiali](https://istio.io/docs/tasks/observability/kiali/)

#### (1) kiali.yml 작성

```yaml
---
apiVersion: v1
kind: Secret
metadata:
  name: kiali
  namespace: istio-system
  labels:
    app: kiali
type: Opaque
data:
  username: YWRtaW4=
  passphrase: YWRtaW4=
---

# Source: istio/charts/kiali/templates/configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: kiali
  namespace: istio-system
  labels:
    app: kiali
data:
  config.yaml: |
    server:
      port: 20001
    external_services:
      jaeger:
        url: http://jaeger-query:16686
      grafana:
        url: http://grafana:3000
---
# Source: istio/charts/kiali/templates/serviceaccount.yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: kiali-service-account
  namespace: istio-system
  labels:
    app: kiali
    chart: kiali-1.0.6
    heritage: Tiller
    release: istio


---
# Source: istio/charts/kiali/templates/clusterrole.yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: kiali
  labels:
    app: kiali
    version: master
rules:
  - apiGroups: ["", "apps", "autoscaling", "batch"]
    resources:
      - configmaps
      - cronjobs
      - deployments
      - endpoints
      - horizontalpodautoscalers
      - jobs
      - namespaces
      - nodes
      - pods
      - projects
      - services
      - statefulsets
      - replicasets
      - replicationcontrollers
    verbs:
      - get
      - list
      - watch
  - apiGroups: ["config.istio.io"]
    resources:
      - apikeys
      - authorizations
      - checknothings
      - circonuses
      - deniers
      - fluentds
      - handlers
      - kubernetesenvs
      - kuberneteses
      - listcheckers
      - listentries
      - logentries
      - memquotas
      - metrics
      - opas
      - prometheuses
      - quotas
      - quotaspecbindings
      - quotaspecs
      - rbacs
      - reportnothings
      - rules
      - servicecontrolreports
      - servicecontrols
      - solarwindses
      - stackdrivers
      - statsds
      - stdios
    verbs:
      - delete
      - get
      - list
      - patch
      - watch
  - apiGroups: ["networking.istio.io"]
    resources:
      - destinationrules
      - gateways
      - serviceentries
      - virtualservices
    verbs:
      - delete
      - get
      - list
      - patch
      - watch

---
# Source: istio/charts/kiali/templates/clusterrolebinding.yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: istio-kiali-admin-role-binding-istio-system
  labels:
    app: kiali
    chart: kiali-1.0.6
    heritage: Tiller
    release: istio
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: kiali
subjects:
  - kind: ServiceAccount
    name: kiali-service-account
    namespace: istio-system


---
# Source: istio/charts/kiali/templates/service.yaml
apiVersion: v1
kind: Service
metadata:
  name: kiali
  namespace: istio-system
  labels:
    app: kiali
spec:
  ports:
    - name: tcp
      protocol: TCP
      port: 20001
      name: http-kiali
  selector:
    app: kiali

---
# Source: istio/charts/kiali/templates/deployment.yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: kiali
  namespace: istio-system
  labels:
    app: kiali
    chart: kiali-1.0.6
    release: istio
    heritage: Tiller
spec:
  replicas: 1
  selector:
    matchLabels:
      app: kiali
  template:
    metadata:
      name: kiali
      labels:
        app: kiali
      annotations:
        sidecar.istio.io/inject: "false"
        scheduler.alpha.kubernetes.io/critical-pod: ""
    spec:
      serviceAccountName: kiali-service-account
      containers:
        - image: "docker.io/kiali/kiali:v0.12"
          name: kiali
          command:
            - "/opt/kiali/kiali"
            - "-config"
            - "/kiali-configuration/config.yaml"
            - "-v"
            - "4"
          env:
            - name: ACTIVE_NAMESPACE
              valueFrom:
                fieldRef:
                  fieldPath: metadata.namespace
            - name: SERVER_CREDENTIALS_USERNAME
              valueFrom:
                secretKeyRef:
                  name: kiali
                  key: username
            - name: SERVER_CREDENTIALS_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: kiali
                  key: passphrase
            - name: PROMETHEUS_SERVICE_URL
              value: http://prometheus:9090
          volumeMounts:
            - name: kiali-configuration
              mountPath: "/kiali-configuration"
          resources:
            requests:
              cpu: 10m

      volumes:
        - name: kiali-configuration
          configMap:
            name: kiali

---
```

#### (2) apply kiali yaml

```
E:...> kubectl apply -f kiali.yml
secret/kiali created
configmap/kiali created
serviceaccount/kiali-service-account created
clusterrole.rbac.authorization.k8s.io/kiali created
clusterrolebinding.rbac.authorization.k8s.io/istio-kiali-admin-role-binding-istio-system created
service/kiali created
deployment.extensions/kiali created
```

#### (3) Install Elasticsearch GKE Logging

```
0. 목적 : Elasticseach를사용해 K8s log를 모으고 Kibana에 사용될 로그를 발견하고자 함. Stackdriver 드라이버 등의 다른 여러 대안이 있으나 가장 간단한 방법인 Google k8s marketplace를 통해 Elasticsearch를 설치

1. 설치 방법
	1) GCP에서 Elastic GKE Logging 검색
	2) 구성 클릭
	3) 네임스페이스 : default -> 네임스페이스 만들기 변경
	4) 새 네임스페이스 이름 변경 : gke-logging(원하는 이름 사용)
	5) Enable Stackdriver Metrics Exporter 체크
	5) 배포 클릭
```

#### (4) (선택) Expose the Kibana service 

* Kibana-gateway.yml 작성 : istio 배포시 파악해둔 ingress EXTERNAL-ip 입력할 것

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: kibana-gateway
  namespace: gke-logging
spec:
  selector:
    istio: ingressgateway
  servers:
    - port:
        number: 80
        name: http
        protocol: HTTP
      hosts:
        - kibana.[istio-ingressgateway External-ip].nip.io
    - port:
        number: 80
        name: http2
        protocol: HTTP2
      hosts:
        - kibana.[istio-ingressgateway External-ip].nip.io
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: kibana-gw-virtualservice
  namespace: gke-logging
spec:
  hosts:
    - kibana.[istio-ingressgateway External-ip].nip.io
  gateways:
    - kibana-gateway
  http:
    - match:
        - uri:
            prefix: /
      route:
        - destination:
            host: elastic-gke-logging-1-kibana-svc
```

* apply kibana-gateway

```
E:...>kubectl apply -f kibana-gateway.yml
gateway.networking.istio.io/kibana-gateway created
virtualservice.networking.istio.io/kibana-gw-virtualservice created
```

## 3. JHipster applications

### 1) JHipster Application 생성

* office-assistant.jh 생성 :dockerRepositoryName을 자신의 것으로 바꾸고, ingressDomain 을 파악해둔 ip주소로 변경한다 

```
application {
  config {
    baseName ui
    applicationType gateway
    packageName ro.trc.office.ui
    serviceDiscoveryType no
    authenticationType jwt
    databaseType mongodb
    clientFramework react
    cacheProvider no
    enableHibernateCache false
    buildTool gradle
    useSass true
    testFrameworks [protractor]
  }
  entities *
}


application {
  config {
    baseName organization
    applicationType microservice
    packageName ro.trc.office.organization
    serviceDiscoveryType no
    authenticationType jwt
    devDatabaseType mariadb
    prodDatabaseType mariadb
    cacheProvider hazelcast
    buildTool gradle
    serverPort 8081
  }
  entities Department, Employee
}

application {
  config {
    baseName leave
    applicationType microservice
    packageName ro.trc.office.leave
    serviceDiscoveryType no
    authenticationType jwt
    databaseType mongodb
    cacheProvider no
    enableHibernateCache false
    buildTool gradle
    serverPort 8082
  }
  entities EmployeeLeave, LeaveRequest
}

application {
  config {
    baseName notification
    applicationType microservice
    packageName ro.trc.office.notification
    serviceDiscoveryType no
    authenticationType jwt
    databaseType mongodb
    cacheProvider no
    enableHibernateCache false
    buildTool gradle
    serverPort 8083
  }
  entities Notification
}

application {
  config {
    baseName meeting
    applicationType microservice
    packageName ro.trc.office.meeting
    serviceDiscoveryType no
    authenticationType jwt
    databaseType mongodb
    cacheProvider no
    enableHibernateCache false
    buildTool gradle
    serverPort 8084
  }
  entities MeetingRoom, Meeting, Participant
}

/**
  * ORGANIZATION
*/

entity Employee {
  code String required
    firstName String required
    lastName String required
    gender Gender required
    email String required pattern(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
    phone String required
    addressLine1 String required
    addressLine2 String
    city String required
    country String required
}

entity Department {
  code String required
  name String required
}

enum Gender {
    MALE, FEMALE, OTHER
}

relationship ManyToOne {
  Employee{department(name) required} to Department
}

service Employee, Department with serviceClass
paginate Employee, Department with pagination
microservice Employee, Department with organization


/**
  * LEAVE
*/
entity EmployeeLeave {
    employeeCode String required
    total BigDecimal required
    available BigDecimal required    
}

enum LeaveRequestStatus {
    COMPLETED, PENDING, APPROVED, REJECTED, CANCELLED
}

enum LeaveRequestType {
    VACATION, MEDICAL
}

entity LeaveRequest {
  startDate Instant required
    endDate Instant required
    creationDate Instant required
    departmentCode String required
    employeeCode String required
    workingDays Long required
    description String
    leaveType LeaveRequestType required
    status LeaveRequestStatus required
}

service EmployeeLeave, LeaveRequest  with serviceClass
paginate EmployeeLeave, LeaveRequest with pagination
microservice EmployeeLeave, LeaveRequest with leave


/**
 * NOTIFICATION
 */


entity Notification {
    date Instant required
    details String
    sentDate Instant required
    format NotificationType required
    userId Long required
    productId Long required
}

enum NotificationType {
    EMAIL, PUSH
}
service Notification  with serviceClass
paginate Notification with pagination
microservice Notification with notification

/**
 * MEETING
 */
 
entity MeetingRoom {
  code String required
    location String required
    name String required
} 

entity Participant {
  email String required
}

entity Meeting {
  title String required
    description String
  startDate Instant required
    endDate Instant required
}

relationship ManyToOne {
  Meeting{meetingRoom(name) required} to MeetingRoom
}

relationship ManyToMany {
  Meeting{participant(email)} to Participant{meeting(title)}
}

service MeetingRoom, Meeting, Participant  with serviceClass
paginate MeetingRoom, Meeting, Participant with pagination
microservice MeetingRoom, Meeting, Participant with meeting


/**
 * DEPLOYMENT
 */

deployment {
  deploymentType kubernetes
  appsFolders [ui, organization, leave, meeting, notification]
  dockerRepositoryName "docker_repository_name"
  serviceDiscoveryType no
  istio true
  kubernetesServiceType Ingress
  kubernetesNamespace office
  ingressDomain "35.224.248.75.nip.io"
}
```

* jh 파일 import : 마이크로 서비스 엔티티 및 배치에 대한 애플리케이션 구성에 따라 모든 응용 프로그램이 병렬로 생성된다.

```
E:...MSA_testfile> jhipster import-jdl office-assistant.jh
...
INFO! Congratulations, JHipster execution is complete!
INFO! Deployment: child process exited with code 0
```

### 2) 생성된 파일 중 일부 버그 수정

#### (1) MSA_testfile/ui/package.json

```
1. E:...MSA_testfile/ui/package.json 파일에서 아래 라인 삭제 : UI npm poinstall task not working and this task is not in the scope of the demo
...
"postinstall": "node node_modules/protractor/bin/webdriver-manager update --gecko false",
...

2. 라인 삭제후 /ui 위치에서 CMD 터미널을 열고 아래 명령어 입력
E:...MSA_testfile\ui> npm i
```

#### (2) MSA_testfile/kubernetes/ui/ui-gateway.yml

```
1. 수신 nip.io 주소 변경  : ui.office.[ingress gateway external ip].nip.io-> ui.[ingress gateway external ip].nip.io

2. prefix : /service_name/ ->/services/service_name/ (jHipster 6.8 버전에서는 수정이 되어 있다)
```

#### (3) Change the health url for each microservice

```
1. E:...MSA_testfile/kubernetes/leave/leave-deployment.yml
...
path: /management/health -> path: /services/management/health
...

2. E:...MSA_testfile/kubernetes/meeting/meeting-deployment.yml
...
path: /management/health -> path: /services/management/health
...

3. E:...MSA_testfile/kubernetes/notification/notification-deployment.yml
...
path: /management/health -> path: /services/management/health
...


4. E:...MSA_testfile/kubernetes/organization/organization-deployment.yml
...
path: /management/health -> path: /services/management/health
...

```

## 4. Docker

### 1) Docker image build

```
1. E:...MSA_testfile> cd ui / && gradlew bootJar -Pprod jibDockerBuild 

2. E:...MSA_testfile\ui> cd ..\organization && gradlew bootJar -Pprod jibDockerBuild

3. E:...MSA_testfile\organization> cd ..\leave && gradlew bootJar -Pprod jibDockerBuild

4. E:...MSA_testfile\leave> cd ..\meeting && gradlew bootJar -Pprod jibDockerBuild

5. E:...MSA_testfile\meeting> cd ..\notification && gradlew bootJar -Pprod jibDockerBuild
```

### 2) Create configure project on a [docker hub](https://hub.docker.com/repositories) 

```
1. Docker hub 계정 생성

2. create project for each microservice and ui : office-*
	1) ui : account_name/office-ui
	2) leave : account_name/office-leave
	3) meeting : account_name/office-meeting
	4) organization : account_name/office-organization
	5) notification : account_name/office-notification
```

### 3) Push docker images

```
1. login to docker hub form terminal
E:...\MSA_testfile>docker login
Authenticating with existing credentials...
Login Succeeded

2. tag docker images
	1) docker image tag ui account_name/office-ui
	2) docker image tag leave account_name/office-leave
	3) docker image tag meeting account_name/office-meeting
	4) docker image tag organization account_name/office-organization
	5) docker image tag notification account_name/office-notification
	
3. push docker images
	1) docker push account_name/office-ui
	2) docker push account_name/office-leave
	3) docker push account_name/office-meeting
	4) docker push account_name/office-organization
	5) docker push account_name/office-notification
```

### 4) Run images on k8s

```
1. E:...MSA_testfile> gcloud container clusters get-credentials office-cluster --zone us-central1-a

2. E:...MSA_testfile> cd kubernetes

3. E:...MSA_testfile\kubernetes> kubectl apply -f namespace.yml
namespace/office created

4. E:...MSA_testfile\kubernetes> kubectl apply -f ui/
secret/jwt-secret created
deployment.apps/ui created
destinationrule.networking.istio.io/ui-destinationrule created
gateway.networking.istio.io/ui-gateway created
virtualservice.networking.istio.io/ui-gw-virtualservice created
configmap/ui-mongodb-config created
configmap/ui-mongodb-init created
statefulset.apps/ui-mongodb created
service/ui-mongodb created
service/ui created
virtualservice.networking.istio.io/ui-virtualservice created

5. E:...MSA_testfile\kubernetes> kubectl apply -f organization/
secret/jwt-secret unchanged
deployment.apps/organization created
destinationrule.networking.istio.io/organization-destinationrule created
deployment.apps/organization-mysql created
service/organization-mysql created
service/organization created
virtualservice.networking.istio.io/organization-virtualservice created

6. E:...MSA_testfile\kubernetes> kubectl apply -f leave/
secret/jwt-secret unchanged
deployment.apps/leave created
destinationrule.networking.istio.io/leave-destinationrule created
configmap/leave-mongodb-config created
configmap/leave-mongodb-init created
statefulset.apps/leave-mongodb created
service/leave-mongodb created
service/leave created
virtualservice.networking.istio.io/leave-virtualservice created

7. E:...MSA_testfile\kubernetes> kubectl apply -f meeting/
secret/jwt-secret unchanged
deployment.apps/meeting created
destinationrule.networking.istio.io/meeting-destinationrule created
configmap/meeting-mongodb-config created
configmap/meeting-mongodb-init created
statefulset.apps/meeting-mongodb created
service/meeting-mongodb created
service/meeting created
virtualservice.networking.istio.io/meeting-virtualservice created

8. E:...MSA_testfile\kubernetes> kubectl apply -f notification/
secret/jwt-secret unchanged
deployment.apps/notification created
destinationrule.networking.istio.io/notification-destinationrule created
configmap/notification-mongodb-config created
configmap/notification-mongodb-init created
statefulset.apps/notification-mongodb created
service/notification-mongodb created
service/notification created
virtualservice.networking.istio.io/notification-virtualservice created

9. E:...MSA_testfile\kubernetes> kubectl apply -f istio/
gateway.networking.istio.io/grafana-observability-gateway created
virtualservice.networking.istio.io/grafana-gw-virtualservice created
gateway.networking.istio.io/kiali-observability-gateway created
virtualservice.networking.istio.io/kiali-gw-virtualservice created
gateway.networking.istio.io/zipkin-observability-gateway created
virtualservice.networking.istio.io/zipkin-gw-virtualservice created

10. E:...MSA_testfile\kubernetes> kubectl label namespace office istio-injection=enabled --overwrite=true
namespace/office labeled

11. check deployment status
E:...MSA_testfile\kubernetes> kubectl get pods -n office

```

## 오류

### 1) Docker

#### (1) ImagePullbackOff or ErrorImages

```
[service_name]-deployment.yml 파일에 작성되어 있는 이미지의 이름과 docker hub에 푸시해서 올린 이미지의 이름이 다르면 docker hub에 푸시해서 올린 이미지 이름으로 변경해준다
```

#### (2) CrashLoopBackOff

#### (3) Pending



