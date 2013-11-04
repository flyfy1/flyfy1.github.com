---
layout: post
title: "New Ubuntu Server Setup"
description: "Recording down steps to setup a Ubuntu Server"
category: "tools"
tags: [ubuntu,setup]
---
{% include JB/setup %}

I have just applied an EC2, which would be free for 1 whole year from now one (I will have graduated already after another 6 month)

I therefore again have to face the common problem of... setting up the Ubuntu server.


1. First thing first, create a password:

    passwd

2. Then, update the repo:

    sudo apt-get update

3. Install the commonly used softwared:

    sudo apt-get install vim git

4. Some Personal Preferences:
  - set vi mode: in file  ~/.inputrc or /etc/inputrc, set: 

    set editing-mode vi
    set keymap vi-command
    
  - setup vim: </superuser/2013/09/20/vim-notes-and-plugin/>

5. Install RVM, Ruby, and Rails, following post: <https://www.digitalocean.com/community/articles/how-to-install-ruby-on-rails-on-ubuntu-12-04-lts-precise-pangolin-with-rvm>


