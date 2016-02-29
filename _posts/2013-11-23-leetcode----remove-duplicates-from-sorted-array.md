---
layout: post
title: "LeetCode -- Remove Duplicates from Sorted Array"
description: "http://oj.leetcode.com/problems/remove-duplicates-from-sorted-array/"
category: "leetcode"
tags: ['array']
---

Solution similiar to `remove-element`.

{% highlight cpp %}

    int removeDuplicates(int A[], int n) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        
        if(n == 0) return 0;
        
        int lc = 0, prev = A[0];
        
        for(int i = 1 ; i < n ; i++){
            if(prev == A[i]){
                lc++;
            } else{
                prev = A[i];
            }
            
            A[i-lc] = A[i];
        }
        return n-lc;
    }

{% endhighlight %}
