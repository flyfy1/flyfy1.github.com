---
layout: post
title: "AWS EC2 Public IP setup"
description: "A bit of struggling to setup the ec2's public IP.. finally inspiration comes"
category: "problem-solving"
tags: [aws, ec2, network]
---

I have just applied for EC2 (free 1 year account), and did a basic setup to make Rails run.

But I cannot find make it public accessible.

Referring to <http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html>, it
seems that for the free 1-year VPC, no public IP is assigned by default.

I therefore applied for an elastic IP, and associated it. That was quite easy to do.

Then when I try to visit my Rails site, still I cannot visit!! But if I do a `curl localhost:3000` locally,
I can run it successfully -- which indicates that the rails app has been run successfully.

... ...

After quite an amount of digging here and there, inspiration comes and it reminds me of problem with Security 
group setting, i.e., the incoming ports might be blocked.
(can also refering to: <http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html>)

So I went check the Network&Security -> Security Groups, there was indeed a rule saying: only accept the 
incoming connection from ssh access (port 22), and blocking the rest.

I then added a rule to allow all connection. Problem then solved.
