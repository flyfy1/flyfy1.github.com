---
layout: post
title: "Kubernete Notes"
category: "notes"
tags: ["devops"]
lang: en
---

## Steps

Assume the following steps are done in the folder `./kubernetes`, with the
needed YAML files in the folder

1. create secret:

       kubectl create secret generic db-user-pass --from-literal=password=mysecretpass
       kubectl create secret generic db-user --from-literal=username=postgres

2. deploy configmap: 
       
       kubectl create -f db-configmap.yml

3. deploy db-service:

       kubectl create -f db-service.yml

4. deploy redis:

       kubectl create -f redis.yml

5. create secret-key-base:

       kubectl create secret generic secret-key-base --from-literal=secret-key-base=your-desired-key

6. run the setup pod

       kubectl create -f setup.yaml

7. run the rails pod

       kubectl create -f rails.yaml

8. run the ingress pod
      
       # make sure Ingress enabled
       minikube addons enable ingress

       # then start the ingress
       kubectl create -f ingress.yaml

9. (optional) the sidekiq pod

       kubectl create -f sidekiq.yaml # note that I didn't do this locally


## Resources

Blog Post: 

- [Rails on Kubernetes](https://blog.cosmocloud.co/rails-on-kubernetes-part-2/):
  it describes what's needed clearly. Here's what it describes:
  - Postgres: the DB service, which is composed of
    - Service: ingress -> pods, default to use ClusterIP
    - Secret: stores sensitive information
    - Persistent Volume (PV): persistent disk space, cuz pod is ephemeral
    - Persistent Volume Claim (PVC): binds resource to Pod
    - Replication Controller (RC): controls lifecycle of Pod
  - Redis: the Cache





## Comamnds

Here I take note of some Kubernetes commands:

```
# get all resources, including all namespace
kubectl get all --namespace

## About Pods ##
# query pods with list of labels
kubectl get pods -l environment=production,tier=frontend
#
# watch pod status, live
kubectl get pods -w
```
