---
layout: post
title: "LeetCode    Climbing Stairs"
description: "http://oj.leetcode.com/problems/climbing-stairs/"
category: "leetcode"
tags: ['dp']
lang: en
---

Simple DP. Done before.

{% highlight cpp %}
  int climbStairs(int n) {
      // IMPORTANT: Please reset any member data you declared, as
      // the same Solution instance will be reused for each test case.
      int s[n+1];
      s[0] = 1; s[1] = 1;
      for(int i = 2 ; i <= n ; i++){
          s[i] = s[i-1] + s[i-2];
      }
      return s[n];
  }
{% endhighlight %}
