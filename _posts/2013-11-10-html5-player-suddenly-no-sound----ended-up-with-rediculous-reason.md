---
layout: post
title: "HTML5 Player Suddenly no sound -- ended up with rediculous reason"
description: "What I thought the problem to be might not be the actual problem"
category: "problem-solving"
tags: ["problem solving"]
---

I like the HTML5 player very much, becaue it gives me an option of viewing at 1.5 speed.

When I was trying to enjoy the udacity lecture today at 1.5 speed, all of sudden there was just no sound.

I first tried switching to Safari, still no sound; I then immediately restarted my OS, and problem stays unsolved.

I googled around, and found the problem to be pretty universal.

One suggested solution was to clear cookies, thereby unset the "HTML Trail" from YouTube. I don't like that, because I *WANT* the HTML5 player.

With some further digging in the net, I found [this post](http://productforums.google.com/forum/#!topic/chrome/jTu_YI1NgdE), which recommends to restart the sound service, by typing command: `sudo killall coreaudiod`.

I believe this is quite reasonable, because I remember one of the online solution was to change the sound source -- I tried this by plugging in an ear-phone, but it didn't work for me.

I re-started the sound service, and to my surprise, this didn't work.

Just the moment when I was about to give up, I noticed that the "volume" in the HTML5 player is actully _muted_!! Therefore certainly I got no sound. I turned it on again, and everything just owrks fine then.


I don't remember muting the sound.. I remember the video suddenly lost sound when I was trying to turn on certain apps. And very possibly the 'restarting sound service' actually solved the problem, just that sound was muted when sound service was killed, but didn't unmute when the Sound Service Process re-spawn.

While it was also possible that I just muted it, then I'm creating a problem for myself.


The problem I believe to be solving, might not be the real problem.

