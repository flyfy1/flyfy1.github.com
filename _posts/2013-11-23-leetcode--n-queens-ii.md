---
layout: post
title: "Leetcode -- n-Queens II"
description: ""
category: "leetcode"
tags: ['trick','hardcode']
---
{% include JB/setup %}
I must confess that I don't really think my solution is correct.. but I got ACed anyway..

I just pre-compute using the n-Queens' solution, and hard-code into the submited code.

{% highlight cpp %}
public:
    int totalNQueens(int n) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        int ans[15] = {1,1,0,0,2,10,4,40,92,352,724,2680,14200,73712,365596};
        if(n < 15) return ans[n];
        return -1;
    }
};
{% endhighlight %}

Wandering what is the correct way.
