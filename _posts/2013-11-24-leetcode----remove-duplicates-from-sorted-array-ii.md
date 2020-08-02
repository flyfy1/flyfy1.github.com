---
layout: post
title: "Leetcode -- Remove Duplicates from Sorted Array II"
description: ""
category: "leetcode"
tags: ['array']
lang: en
---

Added one extra param to record duplication.

{% highlight cpp %}
    int removeDuplicates(int A[], int n) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        
        if(n == 0) return 0;
        
        int lc = 0, prev = A[0],dup = 0;
        
        for(int i = 1 ; i < n ; i++){
            if(prev == A[i]){
                if(dup){
                    lc++;
                } else{
                    dup = 1;
                }
            } else{
                dup = 0;
                prev = A[i];
            }
    
            A[i-lc] = A[i];
        }   
        return n-lc;
    }
{% endhighlight %}
