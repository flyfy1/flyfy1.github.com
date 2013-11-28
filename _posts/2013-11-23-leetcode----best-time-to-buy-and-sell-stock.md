---
layout: post
title: "LeetCode -- Best Time to Buy and Sell Stock"
description: "http://oj.leetcode.com/problems/best-time-to-buy-and-sell-stock/"
category: "leetcode"
tags: ['']
---
{% include JB/setup %}

I somehow feel this is harder than the 'best-time-to-buy-and-sell-stock-ii' version.

Initially I just used 2 for-loop, and (basically no doubt) I got TLE -- indicates that 
very probably O(n) algorithm exists.

The goal is to find the max difference between the min, max in the array, and the min 
appears before max.

Loop through the array, keep a copy of the min, max found so far; tries to compute the
potential profit whenever updating the max. By doing so one can make sure that all these
profits has been checked.

When encountering a new min, then just update, because we know that the previous possible
max profit has been all checked.

Trying to take the max of the difference before resetting the min, and can get the final
result.

{% highlight cpp %}

    int maxProfit(vector<int> &prices) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        if(prices.size() == 0) return 0;
        
        int mi, ma, profit = 0;
        mi = ma = prices[0];
        for(unsigned i = 1; i < prices.size() ; i++){
            bool changed = false;
            if(mi > prices[i]){ mi = prices[i]; ma = mi;}
            if(ma < prices[i]){ ma = prices[i]; changed = true;}
            
            if(changed && (profit < ma - mi) ){
                profit = ma - mi;
            }
        }
        return profit;
    }

{% endhighlight %}
