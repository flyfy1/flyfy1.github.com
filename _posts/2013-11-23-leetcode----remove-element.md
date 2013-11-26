---
layout: post
title: "LeetCode -- Remove Element"
description: "http://oj.leetcode.com/problems/remove-element/"
category: "leetcode"
tags: []
---
{% include JB/setup %}

Simple question, the code seems to be pretty elegant though :)

{% highlight cpp %}
    int removeElement(int A[], int n, int elem) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        int lc = 0;
        for(int i = 0 ; i< n ; i++){
            
            if(A[i] == elem){
                lc++;
            } else{
                A[i - lc] = A[i];
            }
        }
        return n - lc;
    }
{% endhighlight %}
