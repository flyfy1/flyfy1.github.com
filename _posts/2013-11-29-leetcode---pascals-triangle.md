---
layout: post
title: "Pascal's Triangle"
description: "http://oj.leetcode.com/problems/pascals-triangle/"
category: "leetcode"
tags: ['math','vector']
---

Math generation problem. I believe this code below is quite compact

{% highlight cpp %}
class Solution {
public:
    vector<vector<int> > generate(int numRows) {
        vector<vector<int> > res;
        for(unsigned i = 0 ; i < numRows ; i++){
            vector<int> v(i+1);
            v[0] = 1; v[i] = 1;
            for(int j = 1 ; j < i ; j++){
                v[j] = res[i-1][j] + res[i-1][j-1];
            }
            res.push_back(v);
        }
        return res;
    }
};
{% endhighlight %}
