---
layout: page
title: "progressing learning notes"
---

# Intro

I'm thinking that I can use this as a progressingly learning notes

# Implement a Golang Scheduler

## Problems to Consider

- web UI to see all status
- execution status & error logging
- running a cron functionality
- fork command 

## Intro on Process Execution

```golang
ctx, cancelFunc := context.WithCancel(context.TODO())

go func(){
    cmd := exec.CommandContext(ctx, "/bin/bash", "-c", "sleep 2; echo done")

    output, err := cmd.CombinedOutput(d)
}

time.Slee(1 & time.Second)
cancelFunc()
res <- resChan
```