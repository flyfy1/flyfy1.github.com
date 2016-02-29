---
layout: post
title: "LeetCode -- LRU Cache"
description: ""
category: "leetcode"
tags: []
---

It was during Google's Second round of phone interviwe did I first encounter this problem. I didn't know about LRU algorithm at that time, therefore I was not able to do the implementation.

The idea is very simple: use a linked list to record the recently used items, and using a map to cache the nodes.

For easier implementation, I defined different types using `typedef`.

{% highlight cpp %}

typedef list< pair<int,int> > listType;
typedef listType::iterator listIter;
typedef map<int,listIter>::iterator mapIter;

class LRUCache{
private:
    map<int, listIter > cache;
    listType lruL;

    int cap,top;

public:
    LRUCache(int capacity) {
        top = capacity;
        cap = 0;
    }

    int get(int key) {
        mapIter it = cache.find(key);
        if(it == cache.end()) return -1;

        lruL.splice(lruL.begin(), lruL, it->second);
        return it->second->second;
    }

    void set(int key, int value) {
        mapIter it = cache.find(key);
        listIter li;
        if(it != cache.end()){
            li = it->second;
            *(it->second) = make_pair(key,value);
        } else if( cap < top ){
            lruL.push_back(make_pair(key,value));
            li = --lruL.end(); cap++;
        } else{
            cache.erase((--lruL.end())->first);
            lruL.pop_back();
            lruL.push_back(make_pair(key,value));
            li = --lruL.end();
        }
        lruL.splice(lruL.begin(), lruL, li);
        cache[key] = li;
    }
};

{% endhighlight %}
