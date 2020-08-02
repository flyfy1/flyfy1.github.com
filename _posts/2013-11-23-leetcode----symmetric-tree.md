---
layout: post
title: "LeetCode -- Symmetric Tree"
description: "http://oj.leetcode.com/problems/symmetric-tree/"
category: "leetcode"
tags: []
lang: en
---

Seems clueless at first.. then recursion gave me idea :)

For the iterative way, just loop through and check the nodes of each level can work ;) I am lazy to code it out though...

{% highlight cpp %}
class Solution {
private:
    bool isSym(TreeNode *l, TreeNode *r){
        if(l == NULL && r == NULL) return true;
        if(l == NULL || r == NULL) return false;
        if(l->val != r->val) return false;
        
        return isSym(l->left,r->right) && isSym(l->right,r->left);
    }
    
public:
    bool isSymmetric(TreeNode *root) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        if(root == NULL) return true;
        return isSym(root->left,root->right);
    }
};
{% endhighlight %}
