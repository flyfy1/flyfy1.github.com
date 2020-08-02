---
layout: post
title: "豆瓣音乐自动下载"
description: "Auto Donwloader of Douban File."
category: "project"
tags: ["douban","project","chrome"]
lang: cn
---


## 最终使用效果：
去 [豆瓣FM](http://douban.fm/) 网站收听歌曲时，在每个MP3__缓冲完毕__之后会自动下载（一般是在一个MP3播放进行中），并根据你的`chrome://downloads/`的数据，避免下载重复的歌曲（根据歌曲名决定）。

## 如何安装：
1. 下载Dev版本的Google Chrome，[这里](http://www.chromium.org/getting-involved/dev-channel)选择`Dev channel`，对应你的系统: Windows / Mac / Linux，并替换掉现在的GoogleChrome（设置都会保存的）。需要这个版本是因为只有Dev Channel的GoogleChrome才提供了自动下载新文件的API。
2. 开启`Experimental API`功能:去[chrome extension page](chrome://extensions/)（link：`chrome://flags/`），搜索`Experimental Extension APIs`，点`enable`。
3. 下载这个GoogleChrome的扩展：[DoubanFM AutoDownloader](/project/doubanDownloader.crx)。下载时最好右键选中点选`另存为`。然后找到刚刚下载到的文件，在浏览器的地址栏输入`chrome://extensions`，把刚刚下载的那个文件拖到Chrome Extensions的页面中。


## 常见问题
1. 下载的歌曲质量如何?
> 取决于你收听的歌曲的质量
2. 能否下载到其它文件夹?
> 不能（我也想啊……）。这是因为GoogleChrome下载文件API的限制，只能下载到你的`下载`文件夹
3. 如果我删除了GoogleChrome的下载记录会怎样？
> 再次遇到相同歌曲的时候，软件会以为你没有下载过这个歌曲，并且自动进行下载。
4. 如果我只删除了下载文件夹的记录会怎样？
> 我没有尝试过，但GoogleChrome应该还是会认为有下载过这个歌曲的，因为下载记录里面有这个歌曲的信息。

反馈信息：欢迎发送Email给我：<flyfy1@gmail.com>。
Project on GitHub: <https://github.com/flyfy1/doubanFMDownloader>
