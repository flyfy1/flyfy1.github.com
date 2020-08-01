---
layout: post
title: "Transform Any Website into Desktop App via Electron, in Ubuntu"
category: "superuser"
tags: "front-page"
---

# End Result

How it looks (in Ubuntu) in Startup Menu:

![Electron Apps in Ubuntu](/assets/computer/electron-apps-ubuntu.png)

How it looks when opened as an App (electron-apps-ubuntu.png)

![Electron Feedly App](/assets/computer/electron-feedly-open.png)

# Motivation

I recently started using a Ubuntu Desktop. However, quite a few apps are missing in Ubuntu. 

Therefore, I have to use their web version.

# Tools

- ElectronJS: <https://www.electronjs.org/>
- Unity Launchers And Desktop Files: <https://help.ubuntu.com/community/UnityLaunchersAndDesktopFiles>

# How to Setup

## Install Electron Globally

Electron runs chrome internally, but we can run it like a desktop app. ()

Firstly, you need to make sure that you have electron installed globally. For my case (I use yarn), I do:

```bash
yarn global add electron
```

then make sure that it's in your path. For my case, it's: 

```bash
➜ which electron
/home/songyy/.yarn/bin/electron
```

## Create Electron Executable Folder

Let's take Feedly(<https://feedly.com/>) for example.

### Create Folder

Create a separate folder, let's call it `feedly`. Let's say we created the app in path 
`/home/songyy/fast/desktop-apps/feedly`.

### Create JS File

Then, create an `index.js` file within this folder:

```javascript
'use strict';

const {app, BrowserWindow} = require('electron')


function createWindow() {
    const win = new BrowserWindow({
        webPreferences: {
        }
    })

    win.loadURL('https://www.feedly.com/')
}

app.whenReady().then(createWindow)
```
depends on what your target webapp is, you might want to put the URL in `win.loadURL` differently.

### Run it with Electron

in the folder where you've created the `index.js` file, run:

```bash
electron .
```

The electron app would run without problem, loading the target website

# Create a Desktop Launcher

## Make Sure Launcher Folder Exist

In Ubuntu, a desktop launcher is defined via a `.desktop` file. A good location is `~/.local/share/applications/`.

If this location doesn't exist in your Ubuntu machine, you can create it via:

```bash
➜  mkdir -p ~/.local/share/applications/
```

## Find a good Icon

You need to find a good icon for the Desktop App, so that it's easy to identify the App. For the case of Feedly, you can
simply search for `feedly icon png`, and you'll be able to find some good result.

Copy this file into your feedly folder for the Electron execution. For my case, it's in path 

```
/home/songyy/fast/desktop-apps/feedly/icon.png
```

## Create Desktop Launcher

After that, create the desktop file in the launcher folder:

```bash
➜  cat > ~/.local/share/applications/Feedly.desktop
[Desktop Entry]
Version=0.1
Name=Feedly
Comment=Feedly Website
Exec=/home/songyy/.yarn/bin/electron /home/songyy/fast/desktop-apps/feedly
Icon=/home/songyy/fast/desktop-apps/feedly/icon.png
Terminal=false
Type=Application
Categories=Utility;Application;
```
Note that you need to change accordingly, under the `Exec` part

# All Done

Congrats, now you have an super light-weighted desktop app for the web app now.

