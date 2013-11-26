---
layout: post
title: "LeetCode -- Merge Two Sorted Lists "
description: "http://oj.leetcode.com/problems/merge-two-sorted-lists/"
category: "leetcode"
tags: ['list']
---
{% include JB/setup %}

Again I love recursion.

{% highlight cpp %}
public:
    ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        if(l1 == NULL && l2 == NULL) return NULL;
        if(l1 == NULL) return l2;
        if(l2 == NULL) return l1;
        
        if(l1->val < l2->val){ l1->next = mergeTwoLists(l1->next, l2); return l1;}
        else{ l2->next = mergeTwoLists(l1, l2->next); return l2;}
    }
{% endhighlight %}
