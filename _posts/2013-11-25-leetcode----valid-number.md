---
layout: post
title: "LeetCode -- Valid Number"
description: "http://oj.leetcode.com/problems/valid-number/"
category: "leetcode"
tags: ['regex','number']
lang: en
---

Using java, cuz I am more familiar with Java's Regex.

Got several WA cuz forgot to consier the negative case.

{% highlight java %}
public class Solution {
    public boolean isNumber(String s) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.

        s = s.trim();
        return s.matches("[+-]?[0-9]+(\\.[0-9]*)?(e[+-]?[0-9]+)?") || s.matches("[+-]?\\.[0-9]+(e[+-]?[0-9]+)?");
    }
}
{% endhighlight %}
