---
layout: post
title: "LeetCode -- Unique Paths "
description: "http://oj.leetcode.com/problems/unique-paths/"
category: "leetcode"
tags: ['math']
lang: en
---

When there're two methods, I'll always pick the easier ones.

This is a traditional combinatorial problem. It's equivalent to, given `m-1` black blocks and `n-1` red blocks, the total number of combinations within.

It's equivalent because there are (m-1) downs, and (n-1) rights to go; one can go in any order.

Java's BigInteger is used to avoid overflow problem.

A factorial lookup table is pre-computed to avoid duplicate calculation.

{% highlight cpp %}
import java.math.BigInteger;

public class Solution {
    public int uniquePaths(int m, int n) {
        // Build the fac table
        BigInteger fac[] = new BigInteger[m+n-1];
        fac[0] = BigInteger.ONE;
        for(int i = 1 ; i < m + n - 1 ; i++){
            fac[i] = fac[i-1].multiply(new BigInteger(Integer.toString(i)));
        }
        
        return fac[m+n-2].divide(fac[m-1].multiply(fac[n-1])).intValue();
    }
}
{% endhighlight %}
