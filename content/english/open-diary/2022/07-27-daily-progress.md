---
title: "2022-07-27 - Daily Progress"
date: 2022-07-27T23:42:01+08:00
hidden: true
lang: en
---

In the recent 2 days, I've spent some good time setting up this blog site... here's the rough timeline:

- before 2022-07-26, I was using [Jekyll](https://jekyllrb.com/), and it has been working fine
- on 2022-07-26, when thinking about improving the blogging, there were a few functionalities that's missing:
  - the googleAnalytics was broken
  - the commenting system was broken as well
  - deployment has been hard -- I have to do it manually, by pushing to `gh-pages` branch
    - although GitHub uses Jekyll by default, it's missing some plugins that I use
    - so I have to build it manually
- in order to figure out what went wrong... I started to read Jekyll's source code
  - it took me 0.5h, to roughly understand the basic code structure
  - progressing slowly, but there were some progress anyway
- meanwhile, I'm also thinking -- why not give other system a try?
  - I've heard about [Hugo](https://gohugo.io/) before, and I know it's written in Golang
  - I started to clone Hugo's source code, and started reading.
    - because I've been working with Golang for the past 3 years, the code feels easy to read
  - I also went through the tutorial, and starting a new site from scratch 
    - interestingly, the tutorial was easy to follow -- I have my site running within first 10min
    - it's also easy to config -- the guides has been mostly easy to read, I can get the info I need within minutes
- I happily coded until like 1am last night, and published this site to replace my previous one in Jekyll
  - this has been a great experience
    - the templating system is easy to learn, and easy to figure out how to use it correctly, by reading the source code
    - I got all my issues with Jekyll resolved very fast
    - I've also got other functionalities like multi-language support -- I can finally split my Chinese post from English ones
  - so it also makes me think, that I probably wanna pickup my previous habit of blogging again. So I start to write this post

Summary from my experience, I think there're a few learning points:

1. when working on something, focus on the end result -- the deliverables. That's also what motivates one to move forward
2. before actually committing efforts into something big, try a few alternatives first. Probably there're jsut a lot 
   cheaper (in terms of time, and money) ones
3. coding & writing is the kind of activity needs in-depth work -- it needs some initial cost to start; then as more and
   more time put in, the productivity tends to maximized with a constant rate