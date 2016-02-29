---
layout: post
title: "LeetCode -- Maximum Subarray"
description: "http://oj.leetcode.com/problems/maximum-subarray/"
category: "leetcode"
tags: ['dp','array']
---

If thinking about reducing the duplicate steps, then this traditional method of
pre-computing the sum-array is a dp solution, because it use the cumulative sum
as a memorization table. The time complexity is O(n^2) here.

{% highlight cpp %}
class Solution {
public:
    int maxSubArray(int A[], int n) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        if(n == 0) return 0;
        int sa[n]; sa[0] = 0;
        
        for(int i = 0 ; i < n ; i++){
            sa[i+1] = sa[i] + A[i];
        }
        
        int ms = A[0];
        for(int i = 0 ; i <= n ; i++){
            for(int j = i + 1 ; j <= n ; j++){
                int ts = sa[j] - sa[i];
                if(ms < ts) ms = ts;
            }
        }
        return ms;
    }
};
{% endhighlight %}

Another method is to use [divide & conquer](http://oj.leetcode.com/discuss/694/how-solve-maximum-subarray-using-divide-and-conquer-approach), which can result in O(n log n) run time. But I do not want to code it out after seeing the solution there.

