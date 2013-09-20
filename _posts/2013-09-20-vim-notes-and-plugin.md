---
layout: post
title: "Vim's Notes on vimrc and Plugins"
description: "superuser"
category: superuser
tags: [vim,settings]
---
{% include JB/setup %}

For the VIMRC file, the lines below would set the spacings for tab:

    set expandtab
    set tabstop=2
    set shiftwidth=2
    set softtabstop=2


List of Plugins for VIM:

- pathogen
- nerdtree
- taglist
- vim-coffee-script
- vim-sensible
- vim-surround

After the pathogen is installed, add `execute pathogen#infect()` into the `vimrc`.

### For the ease of use, add these lines into vimrc also:
- Taglist:  `nnoremap <silent> <F8> :TlistToggle<CR>`
- NERDTree: `nnoremap <silent> <F9> :NERDTreeToggle<CR>`

Additionally, this command is for loading the plugin's help file into vim's help: `:execute pathogen#helptags()`.
Running it once is sufficient enough


