---
layout: post
title: "LeetCode -- Triangle"
description: "http://oj.leetcode.com/problems/triangle/"
category: "leetcode"
tags: ["dp"]
lang: en
---

Interesting solution used for the traditional DP problem.

{% highlight java %}
  int minimumTotal(vector<vector<int> > &triangle) {
      // IMPORTANT: Please reset any member data you declared, as
      // the same Solution instance will be reused for each test case.
      if(triangle.size() == 0) return 0;
      
      int dp[2][triangle.size()];
      memset(dp,0,sizeof(int) * 2 * triangle.size());
      dp[0][0] = triangle[0][0];
      
      for(int i = 1 ; i < triangle.size(); i++){
          dp[i%2][0] = dp[(i-1)%2][0] + triangle[i][0];
          dp[i%2][i] = dp[(i-1)%2][i-1] + triangle[i][i];
          for(int j = 1 ; j < triangle[i].size()-1; j++){
              dp[i%2][j] = min(dp[(i-1)%2][j-1],dp[(i-1)%2][j]) + triangle[i][j];
          }
      }
      
      int m = 1<<30, t_size = triangle.size();
      for(int i = 0 ; i < t_size; i++){
          m = min(m,dp[(t_size-1)%2][i]);
      }
      return m;
  }
{% endhighlight %}
