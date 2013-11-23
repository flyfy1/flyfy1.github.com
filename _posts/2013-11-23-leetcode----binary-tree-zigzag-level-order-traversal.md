---
layout: post
title: "LeetCode -- binary tree zigzag level order traversal"
description: "http://oj.leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
category: "leetcode"
tags: ["tree"]
---
{% include JB/setup %}

BFS traverse through the tree, record each level in order; reverse the necessary ones.

{% highlight cpp %}
    vector<vector<int> > zigzagLevelOrder(TreeNode *root) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        vector<vector<int> > res;
        traverse(root, res,0);
        for(int i = 0 ; i < res.size() ; i++){
            if(i & 1)   reverse(res[i].begin(), res[i].end() );
        }
        return res;
    }
    
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
{% endhiglight %}
