---
layout: post
title: "LeetCode -- Reverse Int"
description: "http://oj.leetcode.com/problems/reverse-integer/#"
category: "leetcode"
tags: ["simple"]
---
{% include JB/setup %}

I don't really think this is the correct solution.. but this get AC, and it's pretty
easy to implement.

Sort of clever use of sprintf and sscanf; additionally, handle the minus case.

{% highlight cpp %}
public:
    int reverse(int x) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        if(x < 0)   return -reverse(-x);
        
        char buf[20];
        sprintf(buf,"%d",x);
        std::reverse(buf,buf+strlen(buf));
        sscanf(buf,"%d",&x);
        return x;
    }
};
{% endhighlight %}
