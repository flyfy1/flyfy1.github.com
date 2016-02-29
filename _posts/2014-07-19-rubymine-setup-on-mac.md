---
layout: post
title: "RubyMine setup on mac"
description: "A pretty short description about setting up Rubymine on Mac"
category: "tips"
tags: ['tools','RubyMine','productivity']
---

RubyMine is a pretty nice tool for.. as you can see, ruby Development. It based
on IntellJ, it is cross platform, it is highly configurable, and it has lots of
plugin coming along.


The first thing after getting it installed is to setup the plguins. There is
only one plugin that I need -- the vim plugin. Just go to `preference -> plugin`
then you can search & install the Vim plugin. However, if you are using Mac, you
will need to manually disable the `PressAndHold` feature of Mac (it is a feature
that, when you press and hold certain key, it will show you a list of other
possible characters related to that key you have pressed), with the following
command typed directly into terminal:

    defaults write -g ApplePressAndHoldEnabled -bool false

Then restart your OS, and the `PressAndHold` would be then disabled.


There are quite a lot of other tips to use RubyMine, to be filled :)
