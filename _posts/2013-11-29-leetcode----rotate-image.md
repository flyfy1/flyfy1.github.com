---
layout: post
title: "LeetCode -- Rotate Image"
description: "http://oj.leetcode.com/problems/rotate-image/"
category: "leetcode"
tags: ['math']
lang: en
---

Math problem, array manipulation.  
Be careful with the range of manipulation.

{% highlight cpp %}
class Solution {
public:
    void rotate(vector<vector<int> > &matrix) {
        int n = matrix.size();
        
        for(int i = 0 ; i < (n+1)/2 ; i++){
            for(int j = 0 ; j < n/2; j++){
                int t = matrix[i][j];
                matrix[i][j] = matrix[n-1-j][i];
                matrix[n-1-j][i] = matrix[n-1-i][n-1-j];
                matrix[n-1-i][n-1-j] = matrix[j][n-1-i];
                matrix[j][n-1-i] = t;
            }
        }
    }
};
{% endhighlight %}
