---
layout: post
title: "LeetCode -- Balanced Binary Tree"
description: "http://oj.leetcode.com/problems/balanced-binary-tree/"
category: "leetcode"
tags: ['bst']
---

BST Problem, resursion is most-likely the easist one.

I was asked to solve this problem during the mock interview orangized by
the school seniors. I was giving quite ugly solution at that time.

The solution this time is a lot more better.

{% highlight cpp %}
class Solution {
private:
    bool balancedHeight(int* height, TreeNode *root){
        if(root == NULL){
          *height = 0; return true;
        }
        
        int lh,rh;
        bool isBothBalanced = balancedHeight(&lh,root->left) && balancedHeight(&rh,root->right);
        *height = max(lh,rh) + 1;
        
        if(isBothBalanced){
            return abs(lh - rh) <= 1;
        } else{
            return false;
        }
    }
public:
    bool isBalanced(TreeNode *root) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        int height = 0;
        return balancedHeight(&height,root);
    }
};
{% endhighlight %}
