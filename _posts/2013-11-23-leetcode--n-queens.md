---
layout: post
title: "LeetCode -- n-Queens"
description: "http://oj.leetcode.com/problems/n-queens/"
category: "leetcode"
tags: ['back-tracking','recursion']
lang: en
---

This is the traditional 8-Queen problem, standard backtracking solution, pretty familiar with it now.

Note that:

1. The `abs` function from math.h would take eigher double/float; I want int one and avoiding equality comparasion among float numbers, I just implement my own abs func for int.
2. The Quick way to set an string buffer: `memset`, from cstring

{% highlight cpp %}

  class Solution {
  private:
      int abs(int n){
        return n > 0 ? n : -n;
      }

  public:
      vector<vector<string> > solveNQueens(int n) {
          // IMPORTANT: Please reset any member data you declared, as
          // the same Solution instance will be reused for each test case.
          vector<int> queens;
          vector<vector<string> > res;
          
          generateSolution(0,n,res,queens);
          return res;
      }

      void generateSolution(int lvl, int n, vector<vector<string> > &res, vector<int> &cur){
          if(lvl == n){   // this is the solution
              vector<string> rr;
              for(int i = 0 ; i < cur.size() ; i++){
                  char buf[n+1];
                  memset(buf,'.',n); buf[n] = 0; buf[cur[i]] = 'Q';
                  rr.push_back(string(buf));
              }
              res.push_back(rr);
          }
          
          for(int i = 0 ; i < n ; i++){
              // Test if clash with current
              bool hasClash = false;
              for(int j = 0 ; j < cur.size() ; j++){
                  if(cur[j] == i || (abs (lvl - j) == abs(cur[j] - i) )){
                      hasClash = true; break;
                  }
              }
              
              if(hasClash) continue;
              
              cur.push_back(i);
              generateSolution(lvl + 1, n, res, cur);
              cur.pop_back();
          }
      }
  };

{% endhighlight %}
