---
layout: post
title: "LeetCode    Max Depth of Binary Tree"
description: "http://oj.leetcode.com/problems/maximum-depth-of-binary-tree/"
category: "leetcode"
tags: ['easy']
---
{% include JB/setup %}

Really easy one. One thing to note is the clever use of recursion.

{% highlight cpp %}
public:
    int maxDepth(TreeNode *root) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        if(root == NULL) return 0;
        return 1 + max(maxDepth(root->left),maxDepth(root->right));
    }
{% endhighlight %}
