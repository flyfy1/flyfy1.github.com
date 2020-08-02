---
layout: post
title: "LeetCode -- Remove Duplicates from Sorted List "
description: "http://oj.leetcode.com/problems/remove-duplicates-from-sorted-list/"
category: "leetcode"
tags: []
lang: en
---

Simple problem. Standard solution.

I got WA once, cuz forgot to update prev (therefore only using 1 level of loop instead of 2)

{% highlight cpp %}
    ListNode *deleteDuplicates(ListNode *head) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        if(head == NULL) return head;
        
        ListNode *prev = head, *curr = head->next;
        while(prev != NULL){
            while(curr != NULL && (prev->val == curr->val)){
                curr = curr->next; prev->next = curr;
            }
            prev = curr;
        }
        
        return head;
    }
{% endhighlight %}
