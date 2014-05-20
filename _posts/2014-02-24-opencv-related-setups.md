---
layout: post
title: "OpenCV related setups"
description: "Notes on OpenCV, and tips"
category: "opencv"
tags: [opencv]
---
{% include JB/setup %}


## To Use Camera 

In OpenCV for python (not seen in cpp), it seems that `cap = cv2.VideoCapture(0);` is non-blocking, and cap.isOpened() would be automatically true, no matter it's opened or not.

In order to wait camera to setup properly, use the code below.

{% highlight python %}

cv2.namedWindow('preview'); # This is necessary.. the waitKey won't work without it 
cap = cv2.VideoCapture(0);

while True:
  rval, _ = cap.read()
  if rval:
    break
  else:
    cv2.waitKey(20)

{% endhighlight %}

## Compilation

On Ubuntu, to compile with python support: <https://help.ubuntu.com/community/OpenCV>

The source can be gained from <https://github.com/Itseez/opencv/>, and there are
currently 2 branchs: the 3.0-dev version (master branch), and the 2.4 version.

Build the one you need, by checkout the corresponding branch
