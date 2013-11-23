---
layout: post
title: "LeetCode    LinkedListCycle"
description: ""
category: "leetcode"
tags: ["recursion",'linked-list']
---
{% include JB/setup %}

I love recursion :) It maks implemnetion simple, and elegant.

{% highlight cpp %}
class Solution {
private:
    bool hasCycle(ListNode *h1, ListNode *h2){
        if(h1 == h2) return true;
        if(h1 == NULL || h2 == NULL) return false;
        if(h2->next == NULL) return false;
        
        return hasCycle(h1->next,h2->next->next);
    }
    
public:
    bool hasCycle(ListNode *head) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        if(head == NULL) return false;
        return hasCycle(head,head->next);
    }
};
{% endhighlight %}

