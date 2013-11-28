---
layout: post
title: "LeetCode    Binary Tree Level Order Traversal II"
description: "http://oj.leetcode.com/problems/binary-tree-level-order-traversal-ii/"
category: "leetcode"
tags: ['bst','traversal']
---
{% include JB/setup %}


I did similiar problems before; and this `II` version is even easier.

{% highlight cpp %}
class Solution {
private:
    void traverse(TreeNode *root, vector<vector<int> > &res, int lvl){
        if(root == NULL) return;
        
        while(res.size() < lvl + 1){
            vector<int> t;
            res.push_back(t);
        }
        res[lvl].push_back(root->val);
        traverse(root->left, res, lvl+1);
        traverse(root->right, res, lvl+1);
    }
public:
    vector<vector<int> > levelOrderBottom(TreeNode *root) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        vector<vector<int> > res;
        traverse(root, res,0);
        reverse(res.begin(), res.end());
        return res;
    }
};
{% endhighlight %}

