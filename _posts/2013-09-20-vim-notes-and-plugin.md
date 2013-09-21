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

Make it easier, the shell script: (sensible and pathogen not included)

    cd ~/.vim/bundle
    git clone https://github.com/scrooloose/nerdtree.git
    git clone https://github.com/vim-scripts/taglist.vim
    git clone https://github.com/vim-scripts/taglist.vim.git
    git clone https://github.com/tpope/vim-surround.git


After the pathogen is installed, add `execute pathogen#infect()` into the `vimrc`.

### For the ease of use, add these lines into vimrc also:
- Taglist:  `nnoremap <silent> <F8> :TlistToggle<CR>`
- NERDTree: `nnoremap <silent> <F9> :NERDTreeToggle<CR>`

Additionally, this command is for loading the plugin's help file into vim's help: 
  `:execute pathogen#helptags()`.
Running it once is sufficient enough


The default ctags might not be so powerful to support, thus one needs to install exuberant-ctags.
For Mac users, if you have home brew, then just do:

    brew install ctags

And then you can enjoy these plugins.
