---
layout: post
title: "LeetCode -- Binary Tree Traversal"
description: "Several Tree Traversal problems together"
category: "leetcode"
tags: ["tree","iterative"]
---

If using recursion, it would be very easy.

However, iterative way is required. I reviewed a bit on WikiPedia.

{% highlight cpp %}
    // Easiest
    vector<int> preorderTraversal(TreeNode *root) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        
        vector<int> r;
        vector<TreeNode *> s; // stack
        
        while(!s.empty() || root != NULL){
            if(root == NULL){
                root = s.back(); s.pop_back();
            } else{
                r.push_back(root->val);
                
                if(root->right != NULL) s.push_back(root->right);
                root = root->left;
            }
        }
        
        return r;
    }

    // Harder..
    vector<int> inorderTraversal(TreeNode *root) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        vector<int> r;
        vector<TreeNode *> s; // stack
        
        while(!s.empty() || root != NULL){
            if(root == NULL){
                root = s.back(); s.pop_back();
                r.push_back(root->val);
                root = root->right;
            } else{
                s.push_back(root);
                root = root->left;
            }
        }
        return r;
    }

    // Hardest.. Undone yet...
  

{% endhighlight %}
