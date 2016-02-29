---
layout: post
title: "New Ubuntu Server Setup"
description: "Recording down steps to setup a Ubuntu Server"
category: "tools"
tags: [ubuntu,setup]
---

I have just applied an EC2, which would be free for 1 whole year from now one (I will have graduated already after another 6 month)

I therefore again have to face the common problem of... setting up the Ubuntu server.

Before everything, if you found that your keys like 'esc', 'tab', etc, are not functioning correctly, it might be the problem that the bash is wrong. Check your `/etc/passwd` file to see if the login file under your username is correctly set to be `/bin/bash`.

1. First thing first, create a password:

    passwd

2. Then, update the repo:

    sudo apt-get update

3. Install the commonly used softwared:

    sudo apt-get install vim git sqlite

4. Some Personal Preferences:
  - set vi mode: in file  ~/.inputrc or /etc/inputrc, set: 

        set editing-mode vi
        set keymap vi-command
    
  - setup vim: </superuser/2013/09/20/vim-notes-and-plugin/>
  
  - setup git:
    
        git config --global user.name "User Name"
        git config --global user.email "Email Address"
        git config --global core.editor vim
        git config --global merge.tool vimdiff

  - setup locate database:  `updatedb`

5. Install RVM, Ruby, and Rails, following post: <https://www.digitalocean.com/community/articles/how-to-install-ruby-on-rails-on-ubuntu-12-04-lts-precise-pangolin-with-rvm>.  Note that if to use from Ubuntu's terminal, you'll need to set in `Edit -> Profile Preference -> Title and Command -> Run command as Login Shell`. Otherwise, typing `ruby` from shell would give you command-not-found.

6. Install NodeJS: <http://stackoverflow.com/questions/16302436/install-nodejs-on-ubuntu-12-10>

7. Install & Setup Nginx with PHP:
    
    sudo apt-get install nginx php5-fpm
  
  Start PHP Service:
  
    sudo service php5-fpm restart
  
  Start Nginx:
  
    sudo service nginx restart

  Edit the setting file, in the directory `/etc/nginx/conf.d/nameWhatYouWant.conf`, put in the server settings:
  
    server{
      listen        8082;
      root          /var/www;

      location ~ \.php$ {
        fastcgi_pass  unix:/var/run/php5-fpm.sock;
        fastcgi_param SCRIPT_FILENAME
                      $document_root$fastcgi_script_name;
        include       fastcgi_params;
      }
    }


8. If one want the traditional LAMP, follow [instruction here](https://help.ubuntu.com/community/ApacheMySQLPHP); otherwise, if one only wants to install MySQL, do: `sudo apt-get install mysql-server`
