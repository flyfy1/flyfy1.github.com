---
layout: post
title: "LeetCode -- Convert Sorted Array to Binary Search Tree"
description: "http://oj.leetcode.com/problems/convert-sorted-array-to-binary-search-tree/"
category: "leetcode"
tags: ['bst','array']
---
{% include JB/setup %}

When there's incursion, the solution is really easy ;)

{% highlight cpp %}
class Solution {
public:
    TreeNode *sortedArrayToBST(vector<int> &num) {
        return buildTree(num,0,num.size());
    }
    
    TreeNode *buildTree(vector<int> &num, int l, int r){
        if(l >= r) return NULL;
        
        int m = (l + r) / 2;
        TreeNode* head = (TreeNode*)malloc(sizeof(TreeNode));
        head->val = num[m];
        
        head->left = buildTree(num, l,m);
        head->right = buildTree(num, m+1,r);
        return head;
    }
};
{% endhighlight %}
