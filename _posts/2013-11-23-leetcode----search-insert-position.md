---
layout: post
title: "LeetCode    Search Insert Position"
description: "http://oj.leetcode.com/problems/search-insert-position/"
category: "leetcode"
tags: ['binary-search']
---
{% include JB/setup %}

Note that both cpp and java has the binary-search implementation: in cpp, it has `binary_search` from stl, and `bsearch` from `stdlib`; in Java, we have `Arrays.binary_search`. But it seems that none of them returns the best-approximate (inserting location) when there is no such element. 

So I have to implement my own.. (I somohow remember seeing function of similiar functionality before...)


{% highlight cpp %}

    int searchInsert(int A[], int n, int target) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        int s = 0, e = n, m;
        
        while(s < e){
            m = (s + e) / 2;
            if(A[m] == target){
                return m;
            } else if(A[m] > target){
                e = m;
            } else{ // <
                s = m + 1;
            }
        }
        return s;
    }

{% endhighlight %}

