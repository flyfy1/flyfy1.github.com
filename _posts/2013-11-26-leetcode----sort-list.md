---
layout: post
title: "LeetCode -- Sort List"
description: "http://oj.leetcode.com/problems/sort-list/"
category: "leetcode"
tags: ['merge-sort','linked-list']
---
{% include JB/setup %}

I believe this is a pretty hard one.

The idea is to use merge sort (toke me a bit of time to prove it's O(n log n) and quite some time to debug...). Since recursion is also space-expensive, we use while loop to replace recursion.

Here's the code... pretty long this time. And I think this code is a bit ugly. Don't know how to beautify it yet.


{% highlight java %}
class Solution {
public:
    ListNode *sortList(ListNode *head) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        int cnt = 0;
        ListNode *node = head;
        while(node != NULL){ cnt++; node = node->next; }
        
        int lvl = 1;
        while(lvl < cnt){
            node = head; ListNode *prev = NULL;

            while(node != NULL){
                ListNode *start = node;

                for(int i = 0 ; i < lvl && node != NULL; i++)
                    node = node->next;

                ListNode *middle = node, *tail = NULL;

                for(int i = 0 ; i < lvl && node != NULL; i++)
                    node = node->next;

                ListNode *nhead = merge(start, middle, lvl, &tail);
                
                if(prev == NULL) head = nhead;
                else prev->next = nhead;

                prev = tail;
            }

            if(prev != NULL) prev->next = NULL;

            lvl <<= 1;

        }
        return head;
    }
    
    ListNode *merge(ListNode *l1, ListNode *l2, int lvl, ListNode **tail){
        int c1 = 0, c2 = 0;
        if(l1 == NULL || l2 == NULL){return l1; *tail = NULL;}

        ListNode *node = NULL,*head = NULL;

        while((c1 < lvl)  && (l2 != NULL) && (c2 < lvl)){
            ListNode *result;
            if(l1->val < l2->val){
                result = l1; c1++; l1 = l1->next;
            } else{
                result = l2; c2++; l2 = l2->next;
            }
            
            if(node != NULL){
                node->next = result; 
            } else{
                head = result;
            }
            
            node = result;
        }
        
        while(c1 < lvl){
            node->next = l1; node = l1;
            c1++; l1 = l1->next;
        }
        while((c2 < lvl) && (l2 != NULL)){
            node->next = l2; node = l2;
            c2++; l2 = l2->next;
        }
        
        *tail = node;
        return head;

    }
};
{% endhighlight %}
