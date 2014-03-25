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

- [pathogen](https://github.com/tpope/vim-pathogen): plugin manager  
- [nerdtree](https://github.com/scrooloose/nerdtree): file browser, a bit better than the default one
- [taglist](https://github.com/vim-scripts/taglist.vim): parse the source code & generate the function signiture
- [vim-coffee-script](https://github.com/kchmck/vim-coffee-script): coffee-script syntax highlighter
- [vim-sensible](https://github.com/tpope/vim-sensible): defaults that everyone can agree on. It has better indentation to me
- [vim-surround](https://github.com/tpope/vim-surround): to modify the text surroundings easily. 
- [scroll-colors](https://github.com/vim-scripts/ScrollColors): to scroll through the list of installed colors easily
- [Vim-Slim](https://github.com/slim-template/vim-slim): slim syntax highlight
- [Vim-Coffee](https://github.com/kchmck/vim-coffee-script.git): coffee script highlight

Make it easier, the shell script:
    
    # To install pathagen:
    mkdir -p ~/.vim/autoload ~/.vim/bundle; \
    curl -Sso ~/.vim/autoload/pathogen.vim \
        https://raw.github.com/tpope/vim-pathogen/master/autoload/pathogen.vim

    cd ~/.vim/bundle
    git clone git://github.com/tpope/vim-sensible.git
    git clone https://github.com/scrooloose/nerdtree.git
    git clone https://github.com/vim-scripts/taglist.vim
    git clone https://github.com/vim-scripts/taglist.vim.git
    git clone https://github.com/tpope/vim-surround.git
    git clone https://github.com/vim-scripts/ScrollColors.git
    git clone git@github.com:slim-template/vim-slim.git
    git clone https://github.com/kchmck/vim-coffee-script.git

Add add these into the `.vimrc` file (These are my preferred settings):

    execute pathogen#infect()
    set ruler
    set nu
    set expandtab
    set tabstop=2
    set shiftwidth=2
    set softtabstop=2
    set ai
    set incsearch

    syntax on
    filetype plugin indent on

    "key-bindings for TagList, NerdTree, ScrollColors"
    nnoremap <silent> <F8> :TlistToggle<CR>   # Taglist
    nnoremap <silent> <F9> :NERDTreeToggle<CR>

    nnoremap <silent><C-F11> :NEXTCOLOR<cr>
    nnoremap <silent><C-F12> :PREVCOLOR<cr>

    color elflord


Additionally, this command is for loading the plugin's help file into vim's help: 
  `:execute pathogen#helptags()`.
Running it once is sufficient enough

The default ctags might not be so powerful to support, thus one needs to install exuberant-ctags.
For Mac users, if you have home brew, then just do:

    brew install ctags

And then you can enjoy these plugins.

