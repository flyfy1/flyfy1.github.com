---
layout: post
title: "Managing the startup items of OSX"
description: ""
category: "superuser"
tags: ["osx","tips"]
---

While using OSX more and more, one may fin the speed of OSX, esp. the starting
up time, tends to be pretty slow. Usually it is because that.. there are too
many items (which you won't necessarily need for most of the time) started when
system first bootup, and it just run without your notice.

So... Let's try to remove some of the items so that your system can actually
starts and runs faster


## 1. Check your task bar
As you can see from the image below, items in the taskbar can be set to start at
login. (Amazing, hmm?)
![Taskbar Login Item](https://dl.dropboxusercontent.com/u/9778027/images/taskbar_startup.png)

## 2. Check your startup setting.
Go to: System Preference -> Users&Group -> Login Items, and tick those you don not want

## 3. Check the launchd (Very Important!!)
I just found it today. One may checkout the URL
[here](http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man8/launchd.8.html).

By renaming the files from *.plist to *.plist.bak, one may disable the
auto-startup of a certain item.


I believe after the checking of the above three, one may control all possible
system start-up items.

And then you can start to enjoy a fresh new speed of starting up your OS ;)
