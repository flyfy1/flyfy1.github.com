---
layout: post
title: "LeetCode -- Remove Nth Node From End of List"
description: "http://oj.leetcode.com/problems/remove-nth-node-from-end-of-list/"
category: "leetcode"
tags: ['linked-list']
---
{% include JB/setup %}

Use a buffer to remember the n last nodes.

{% highlight cpp %}
class Solution {
public:
    ListNode *removeNthFromEnd(ListNode *head, int n) {
        queue<ListNode*> buf;
        
        ListNode* cur = head;
        
        while(cur != NULL){
            buf.push(cur);
            if(buf.size() > n+1) buf.pop();
            cur = cur->next;
        }
        
        cur = buf.front();
        
        if(buf.size() == n) return cur->next;
        
        cur->next = ( cur->next == NULL ? NULL : cur->next->next);
        return head;
    }
};
{% endhighlight %}
