---
layout: post
title: "LeetCode -- Sqrt(x)"
description: "http://oj.leetcode.com/problems/sqrtx/"
category: "leetcode"
tags: ['math','binary-search']
---

Traditional binary search problem. Special dealt with guess termination condition needed. I got WA twice.

{% highlight cpp %}
class Solution {
public:
    int sqrt(int x) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        
        if(x < 2) return x;
        
        // Binary Searhc Method
        int l = 1, u = x, b, guess = x;
        
        while(true){
            b = x / guess;
            if(b >= guess) return guess;
            else{
                u = guess; l = b; guess = l + (u - l) / 2;
            }
        }
        return -1;
    }
};
{% endhighlight %}
