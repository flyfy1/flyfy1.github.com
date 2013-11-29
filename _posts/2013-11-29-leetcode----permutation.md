---
layout: post
title: "LeetCode -- Permutation"
description: "http://oj.leetcode.com/submissions/detail/1690284/"
category: "leetcode"
tags: ['permutation']
---
{% include JB/setup %}

Cpp is used cuz it have the `next-permutation` from algorithm.h.

It's easy once next_permutation is used.

{% highlight cpp %}
class Solution {
public:
    vector<vector<int> > permute(vector<int> &num) {
        vector<vector<int> > res;
        int idxs[num.size()];
        for(int i = 0 ; i < num.size() ; i++) idxs[i] = i;
        
        do{
            vector<int> t;
            for(int i = 0 ; i < num.size() ; i++){
                t.push_back(num[idxs[i]]);
            }
            res.push_back(t);
        } while(next_permutation(idxs,idxs+num.size()));
        
        return res;
    }
};
{% endhighlight %}
