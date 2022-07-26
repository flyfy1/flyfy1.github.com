---
title: "Separation of Concern"
date: 2020-01-11T00:00:00+08:00
lang: en
---

## Situation

When working in big companies like Grab, lots of times I'm just solving some simple CRUD.

Meanwhile, lots of my time needed to be spent upon different other things:

- make and review pull request
- deployment
- fixing failures for functional test and unit test
- load testing
- integrated with the logging library

## Problem

Turns out, there're also other teams, solving the same problem again and again. This pattern has several issues:

- reinventing the wheel: multiple teams solving the same issue, is a waste of engineering resource
- no standard practices: each team has their own opinion, and this opinion highly depends on the one who implemented it.
  Different implementation may ends up with different problems
- incomplete solution: teams are busy implementing business requirements, and the adoption of those best practices would
  give time to the actual business need 

## Solution

Ideally, a business-logic developer only needs to care about the business logic. The best practices should be taken care
by a team of engineering excellence people -- define the patterns, the processes, the monitoring dashboards, and the 
basic engineering tools.

`Heroku` is one of such example: they handle the CI/CD, monitoring, auto-scaling, infra-upgrade for you, and you only 
need to care about the pure business logic (while... still with some basic configuration to tell the tool on what you 
need). By doing so, a basic level of **separation of concern** is achieved.

## Potential Issues

People often has different opinions, and opinions are usually subjective. 

Therefore, what's accepted by one might not be
accepted by another. To make best practices acceptable, those patterns needs to be so obviously-good, so that it can 
becomes not only the **best** practices, but also the **common** practices; in the end, it would become the **only** practices.
