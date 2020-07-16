# Gitlab - tutorial

```
1. Create project on gitlab.com
	1) project name : CI-CD-Tutorial
	2) Project slug : ci-cd-tutorial
	3) project Description : Gitlab description
	4) public

2. GKE 연동
	1) Google Kubernetes Engine
		(1) 결제 활성화
		(2) Kubernetes engine api 활성화
		(3) Compute engine api 활성화
	2) GKE 연동 : Operations>Kubernetes>Add Kubernetes cluster
		(1) Kubernetes cluster name : cicdtutorial
		(2) Environment scope : *
		(3) Zone : asia-northeast1-a
		(4) Number of nodes : 3
		(5) Machine type : n1-standard-2
	3) project cluster
		(1) details
		(2) health
		(3) application
			a) helm tiller : install
			b) ingress: install / endpoint : 104.198.116.139
			c) cert-manager : install
			d) prometheus : install
			e) gitlab runner : install
			
4. token 발급
	1) settings>repository>deploy tokens
	2) scopes
		1) read_repository : check
		2) read_registry : check
	3) check tokens
		1) your new deploy token :
		2) password : 
		
	4) settings>variable>add variable
	
5. result
	1) CI/CD> piplines
```



