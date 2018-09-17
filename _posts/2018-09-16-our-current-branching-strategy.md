---
layout: post
title: "Our Current Branching Strategy"
category: "work"
tags: "work"
---

## Our Current Branching Strategy

we have a single code base, several branches:

- master: the previous stable release
- release: the current release
- staging: a deploy mirrors production database, branch reference would change 
          dynamically
- develop: the code base under development, which is the branch to be released
  next 

## The Multi-Functionality of the Staging Branch

the `staging` branch are used too free-style. It has multiple functionality
here:

1. feature test-bed: check new features developed by the develop team
2. release test-bed: check stableness of a release before deploy
3. support development: develop team (FE) relies on a stable environment to do
   their develop


## Using a Single Branch to Support Multiple Functionality

Here's how we're using development branch:

#### Condition

- anyone can merge into staging
- anyone with staging access can deploy to staging 

#### How we actually use it

- when new feature being developed, developer would manually `cherry-pick` their
  changes into staging 
- when the dev team feel the staging DB has been polluted, it would be reloaded
  with production data
- before a release, we may / maynot use staging to validate the features before
  the release, depends on if the staging is currently being used 

#### What's the Problem

1. clash of feature testing: if we want to test 2 or more features under
   development, then we'll have to merge these 2 commits
2. clash with release testing: if the staging has already been used for feature
   testing, then it would be very reluctant for the developer to overwrite the
   staging to do release testing (what the staging is actually for)
3. blocks FE-development: new features might contain bugs. When FE is using
   staging for their backend API, although it's good that new issues can surface
   immediately, but it's feels bad when FE is doing development, but all of
   sudden the staging API breaks due do bugs non-related to the current
   development flow
4. feature testing isn't clean: when doing the feature testing for 2 or more 
   features under dev, the features tested is a combination of multiple
   features, which is a combination of several commits from different people. If
   the features were tested to work correctly, it only proves that these
   features works properly when these MRs are merged, it doesn't prove each
   feature can work properly individually

