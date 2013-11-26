---
layout: post
title: "LeetCode -- Populating Next Right Pointers In Each Node"
description: "http://oj.leetcode.com/problems/populating-next-right-pointers-in-each-node/"
category: "leetcode"
tags: ['tree']
---
{% include JB/setup %}

Idea is pretty similiar to `Binary Tree Zigzag Level Order Traversal` -- Traverse through the tree using BFS, and memorize the node at each level in order. Then just link up the nodes.

{% highlight cpp %}
    void connect(TreeLinkNode *root) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        vector<vector<TreeLinkNode*> > res;
        
        traverse(root,res,0);
        
        for(int i = 0 ; i < res.size(); i++){
            for(int j = 1 ; j < res[i].size() ; j++){
                res[i][j-1]->next = res[i][j];
            }
        }
    }
    
    void traverse(TreeLinkNode *root, vector<vector<TreeLinkNode*> > &res, int lvl){
        if(root == NULL) return;
        
        while(res.size() <= lvl){
            vector<TreeLinkNode*> t;
            res.push_back(t);
        }
        res[lvl].push_back(root);
        traverse(root->left, res, lvl+1);
        traverse(root->right, res, lvl+1);
    }
{% endhighlight %}
