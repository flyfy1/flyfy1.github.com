---
layout: post
title: "LeetCode -- Gray Code"
description: "http://oj.leetcode.com/problems/gray-code/"
category: "leetcode"
tags: ['recursion']
---
{% include JB/setup %}

Initially I thought this was a hard problem. It's then easy after noticing the recursion pattern.

{% highlight cpp %}
class Solution {
public:
    vector<int> grayCode(int n) {
        vector<int> res;
        if(n == 0){
            res.push_back(0);
            return res;   
        }
        
        genG(res,0,n-1);
        return res;
    }
    
    int genG(vector<int> &res, int base, int n){
        if(n == 0){
            res.push_back(base);
            base ^= 1;
            res.push_back(base);
            return base;
        } else{
            base = genG(res, base, n-1);
            base ^= (1 << n);
            return genG(res, base, n-1);
        }
    }
};
{% endhighlight %}
