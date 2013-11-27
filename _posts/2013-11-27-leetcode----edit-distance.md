---
layout: post
title: "LeetCode -- Edit Distance"
description: "http://oj.leetcode.com/problems/edit-distance/"
category: "leetcode"
tags: ['dp']
---
{% include JB/setup %}

Another traditional DP problem. DP is easy once one got the transition formula.

{% highlight cpp %}
  int minDistance(string word1, string word2) {
      // IMPORTANT: Please reset any member data you declared, as
      // the same Solution instance will be reused for each test case.
      int l1 = word1.size(), l2 = word2.size();
      
      int dp[l1+1][l2+1]; dp[0][0] = 0;
      
      for(int i = 1 ; i <= l1 ; i++) dp[i][0] = i;
      for(int i = 1 ; i <= l2 ; i++) dp[0][i] = i;
      
      for(int i = 1 ; i <= l1 ; i++){
          for(int j = 1; j <= l2 ; j++){
              dp[i][j] = min( dp[i][j-1] + 1,
                              dp[i-1][j] + 1);
              dp[i][j] = min(dp[i][j],dp[i-1][j-1] + (word1[i-1] != word2[j-1]) );
          }
      }
      
      return dp[l1][l2];
  }
{% endhighlight %}
