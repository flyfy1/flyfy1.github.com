---
layout: post
title: "LeetCode -- Best Time to Buy and Sell Stock II"
description: "http://oj.leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"
category: "leetcode"
tags: ['leetcode']
---

Idea is important. The idea for this problem is just to buy when the price is about to increase, and to sell when the price is about to fall (Since there is no tranaction fee;)

One thing to take note: the vector.size() function returns an unsigned function. and unsigned 0 - 1 = Large Number. (Because it overflows). Therefore the for loop would be entered, and it would cause RunTime Error (because trying to access empty `prices` vector).

Therefore, one need to check the size of the price vector first.

{% highlight cpp %}
    int maxProfit(vector<int> &prices) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        bool hold = 0; int profit = 0;
        if(prices.size() == 0) return profit;
        
        for(int i = 0 ; i < prices.size() - 1 ; i++){
            bool isInc = prices[i + 1] > prices[i],
                 isDec = prices[i + 1] < prices[i];
            
            if(isInc && !hold){
                hold = 1; profit -= prices[i];
            } else if(isDec && hold){
                profit += prices[i]; hold = 0;
            }
        }
        
        if(hold){
            profit += prices.back(); hold = 0;
        }
        return profit;
    }

{% endhighlight %}
