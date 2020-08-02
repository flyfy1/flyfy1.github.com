---
layout: post
title: "LeetCode -- Same Tree"
description: "http://oj.leetcode.com/problems/same-tree/"
category: "leetcode"
tags: ['easy']
lang: en
---

I love recursion :)

{% highlight cpp %}
    bool isSameTree(TreeNode *p, TreeNode *q) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        if(p == NULL && q == NULL) return true;
        if(p == NULL || q == NULL) return false;
        if(p->val != q->val) return false;
        
        return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    }
{% endhighlight %}
