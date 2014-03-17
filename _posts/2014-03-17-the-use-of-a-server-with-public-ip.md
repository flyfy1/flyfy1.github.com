---
layout: post
title: "The use of a server (with public IP)"
description: "This post would talk about how I make use of my server"
category: "super-user"
tags: []
---
{% include JB/setup %}

I rented a server from [digital ocean](https://www.digitalocean.com/?refcode=e806d5fd28b9). It is $5/month, pretty cheap.

After getting a server, I need to try out some way to make use of it. Here is how..


## Well.. a PHP / Rails / NodeJS server
Yeap. As we all know... with corresponding framework installed, one can setup the service accordingly. I found that `Nginx` has a nice ability of port-forwarding, which would allow different web-addresses to be served by different ports. This is pretty useful for hosting multiple website on the same server (which also means that.. the traffic is not that high either)

## A music / file server
I found that [Cherry Music](https://github.com/devsnd/cherrymusic) is a pretty nice music player; and there is also a pretty nice [php-file-browser](https://github.com/1337/php-file-browser).


## A GFW Breaker~
The infamous GFW(the Great Fire-Wall) is blocking nearly all Chinese from using Google services, Facebook, Dropbox, sometimes even Github, etc.
By using squid3, one can setup a proxy server easily, which helps one to explore the outside world. 


## SSH reverse Tunneling~
This is a pretty nice use I have just realized today. I have a nearly forever-running desktop in my lab, and by setting up an reverse SSH tunneling, I can ssh back into my lab desktop from my public-accessible server. Together with the help of tmux, I can work anywhere in the world (well.. with good internet access, at least) on my Lab desktop :)


## Git server, with private repo
I have not really setup this yet.. because it looks not very appealing to me -- I use github not only for Project Management, but also for... social use ;) If I need private repo, I can then simply use BitBucket.

Well.. but it will be pretty useful for whose who need a _large_ repo :)

