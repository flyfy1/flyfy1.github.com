---
layout: post
title: "LeetCode -- Count and Say"
description: "http://oj.leetcode.com/problems/count-and-say/"
category: "leetcode"
tags: ["implementation"]
lang: en
---

It has become a (good) habit to do at least one problem a day, more or less cuz the problems from LeetCode are mostly pretty easy to solve.

This problem is just a implementation one. No much algorithm involved.

{% highlight cpp %}
class Solution {
public:
    string countAndSay(int n) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        string res("1");
        if(n == 1) return res;
        for(int i = 1 ; i < n; i++){
            res = generateNext(res);
        }
        return res;
    }
    
    string generateNext(string s){
        int cnt = 0, idx = 0;
        char prev = 0;
        string res;
        while(idx < s.size() ){
            if(prev != s[idx] ){
                // output and reset
                appendToString(res,cnt,prev);
                prev = s[idx]; cnt = 1;
            } else{
                cnt++;
            }
            
            idx++;
        }
        
        appendToString(res,cnt,prev);
        
        return res;
    }
    
    void appendToString(string &s, int cnt, char c){
        if(c == 0 || cnt == 0) return;
        
        char buf[10];
        sprintf(buf,"%d%c",cnt,c);
        s.append(buf);
    }
};
{% endhighlight %}
