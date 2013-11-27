---
layout: post
title: "LeetCode -- Linked List Cycle II"
description: ""
category: "leetcode"
tags: ['linked-list']
---
{% include JB/setup %}

The solution is quite simple, but the idea is hard to come up with. Here's the idea:

Same a the `Linked List Cycle` problem, send out 2 tracers, s1,s2, with speed 1,2 respectively. And define:

    t: the distance from the head to the start of the cycle
    r: the length of the cycle
    d: the distance such that, when s1 enters the cycle (proceed t length), s2 is d nodes away to s1.
    n: the number of cycle that s2 has passed when s1 enters the loop
    t1: the time when s1, s2 meets

Therefore, we would have: `2t = n * r + (r - d) + t` ==> `t + d = (n + 1) * r`. Since the distance between s1, s2 is d when s1 entering the loop, they'll meet at point `t + d = ( n + 1 ) * r`

This indicates that, if we send out another tracer s3, with speed 1, and we keep s1 run in the loop; therefore when s3 enters the loop, s1 has traveled: `t + d + t = 2t + d = t + (n + 1) * r`.
This suggest that s1,s3 would meet at this point. And this is the solution.


{% highlight cpp %}
class Solution {
private:
    ListNode *findMeetPoint(ListNode *h1, ListNode *h2){
        if(h1 == h2) return h1;
        if(h1 == NULL || h2 == NULL) return NULL;
        if(h2->next == NULL) return NULL;
        
        return findMeetPoint(h1->next,h2->next->next);
    }
    
public:
    ListNode *detectCycle(ListNode *head) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        if(head == NULL || head->next == NULL) return NULL;
        ListNode* m1 = findMeetPoint(head->next,head->next->next);
        if(m1 == NULL) return NULL;
        
        ListNode* m2 = head;
        while(m1 != m2){
            m1 = m1->next; m2 = m2->next;
        }
        return m1;
    }
};
{% endhighlight %}
