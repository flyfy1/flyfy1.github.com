---
layout: post
title: "tmux use and configures"
description: "Notes about the tmux usage"
category: "terminal"
tags: [tmux,terminal]
---
{% include JB/setup %}

- The configure file location: `~/.tmux.conf`
- To edit the prefix key: add contents below into the config file

        set -g prefix C-e
        unbind-key C-b
        bind-key C-e send-prefix

  (Noet that I used C-e, rather than C-b. Because C-b stands for "scroll up" in VIM)

- By adding below to the `~/.tmux.conf` file, one can use vim banding when moving around windows:

        bind k selectp -U
        bind j selectp -D
        bind h selectp -L
        bind l selectp -R

        bind ^k resizep -U 10
        bind ^j resizep -D 10
        bind ^h resizep -L 10
        bind ^l resizep -R 10

- Some simple commands:

        Split window
          - Vertically: prefix + %
          - Horrizontally: prefix + "

        Move Around Windows 
          - Rotate to previous session: prefix + o
          - Rotate window instead: prefix + O

        Resize: prefix + (C-directionKey)

