---
layout: post
title: "LeetCode -- Merge Sorted Array"
description: "http://oj.leetcode.com/problems/merge-sorted-array/"
category: "leetcode"
tags: ['array','merge']
lang: en
---

{% highlight cpp %}
    void merge(int A[], int m, int B[], int n) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        int M[m+n];
        
        int ia = 0, ib = 0;
        while(ia < m && ib < n){
            if(A[ia] < B[ib]){
                M[ia + ib] = A[ia];
                ia++;
            } else{
                M[ia + ib] = B[ib];
                ib++;
            }
        }
        
        while(ia < m){M[ia+ib] = A[ia]; ia++;}
        while(ib < n){M[ia+ib] = B[ib]; ib++;}
        
        memcpy(A,M,(m + n) * sizeof(int));
    }
{% endhighlight %}
