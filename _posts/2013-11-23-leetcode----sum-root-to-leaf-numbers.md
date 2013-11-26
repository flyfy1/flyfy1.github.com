---
layout: post
title: "LeetCode    Sum Root to Leaf Numbers "
description: "http://oj.leetcode.com/problems/sum-root-to-leaf-numbers/"
category: "leetcode"
tags: []
---
{% include JB/setup %}
Got it wrong once... Again I love recursion :)

{% highlight cpp %}
public:
    int sumNumbers(TreeNode *root) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        // assume no overflow here
        
        return getSumRes(root,0);
    }
    
    int getSumRes(TreeNode *root, int base){
        if(root == NULL) return 0;
        base = base * 10 + root->val;
        
        if(root->left == NULL && root->right == NULL) return base;
        return getSumRes(root->left, base) + getSumRes(root->right, base);
    }
{% endhighlight %}
