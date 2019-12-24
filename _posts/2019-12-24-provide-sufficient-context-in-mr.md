---
layout: post
title: "Provide Sufficient Context in the Merge Request"
category: "development"
tags: "front-page"
---

# TL;DR
When creating a merge request, we need to include more context information:

- describe what you're trying to achieve in this MR
- why such change is needed

# What is Context Information
A pain point of reviewing a merge request, is to understand the context. The context includes:

- what the merge request actually intends to do
- why such changes are needed
- are there any other alternatives

# No Context is bad for Reviewer

These context should be communicated properly, so that the reviewer can actually have a clue to justify if the change is necessary & sufficient. Otherwise, the reviewer would have to eye-balling each change, and try to guess why such changes are needed - this is time consuming. With these cognitive overheads, reviewer would tends to:

- slower the review process.. because we don't like to do hard things first
- blindly say `yes`, because it's easier
- focus on syntax, rather than (structural) design decisions - because it's also easier, and doesn't needs a complete understanding of the story

with such things happens, it's kind-of defeat the purpose of peer-review: slower review would slow down the development, and syntax kind of comments should be made by automation.

# Sample Template
Ideally, a proper merge request should describe the context listed above. :

```
What's this about
=================
- What change this Merge Request makes
- append a Jira Ticket ID (in the MR title)
  
  
Why I do it
=================
- Why do you need to make such change?
- If you're fixing an issue, what's the cause of issue?
- If have, what other alternatives have I considered?
```
