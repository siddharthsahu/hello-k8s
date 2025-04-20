# Hello Kubernetes!
**Hello Kubernetes** is a an exercise project to learn complete Kubernetes stack:
1. Docker
2. Kubernetes
3. Helm charts
4. ArgoCD

In the beginning the project will try to cover the breadth, and will keep on elaborating on each technology with time.
## Layout
The project will consists of following three microservices:
1. Auth: An organisation level microservice responsible for authentication and authorization.
2. Backend: The backend microservice of an imaginary project 'Andromeda'
3. Frontend: The frontend microservice of an imaginary project 'Andromeda' (we can assume that Andromeda's frontend is not just static build files but a node service)
4. Sirius: The microservice of another project of the organization
---
Following requirements should be fulfilled:
* The Frontend is reachable only from the backend.
* The Auth is in a company level Kubernetes namespace.
* Both projects, Andromeda and Sirius, are deployed in their own namespace.
* The developers of each project have access to their own namespaces.
* Each namespace should have some resource limits


## TODOs
1. Write Dockerfiles for microservices
2. Write Kubernetes yamls for the setup
3. Re-create the setup using Helm charts
4. Setup ArgoCD
5. Elaborate TODOs

