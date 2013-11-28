---
layout: post
title: "LeetCode -- Reorder List"
description: "http://oj.leetcode.com/problems/reorder-list/"
category: "leetcode"
tags: ['linked-list']
---
{% include JB/setup %}

I definitely need more practice on the list operations.

For this problem, I created a corresponding complete Cpp program to debug the code.

{% highlight cpp %}
void reorderList(ListNode *head) {
  if(head == NULL) return;

  // first pass: flip the second half
  ListNode *n1, *n2;
  n1 = n2 = head;

  bool isN2NeedInc = false;
  while(n1 != NULL){
    if(isN2NeedInc){
      n2 = n2->next;
    }

    isN2NeedInc = !isN2NeedInc;
    n1 = n1->next;
  }

  ListNode *n = n2->next; n2->next = NULL;
  if(n == NULL) return;

  while(n != NULL){
    n1 = n; n = n1->next;
    n1->next = n2; n2 = n1;
  }

  // second pass: merge from the back
  n = head; n2 = head->next;

  bool isTailTurn = true;
  while(n1 != n2){
    if(isTailTurn){
      n->next = n1; n = n1;
      n1 = n1->next;
    } else{
      n->next = n2; n = n2;
      n2 = n2->next;
    }

    isTailTurn = !isTailTurn;
  }
}

{% endhighlight %}
