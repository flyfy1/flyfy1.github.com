---
layout: post
title: "Ugly local variable handling for closure in Python, and the Less Ugly
JavaScript"
description: "Talk about local variable reference/memory allocation, and how it
affets closure, in JavaScript / Python"
category: "language"
tags: ['python','language','front-page']
---

I'm used to the JavaScript mindset, where I have closure in basically..
everywhere.

However, the local-variable is handled pretty ugly in Python:

{% highlight python %}
def f:
  cnt = 0;
  
  def localFunction:
    console.log(cnt)
    cnt += 1
  end
end
{% endhighlight %}

The code above would raise error `UnboundLocalError: local variable 'cnt' referenced before assignment`

However, if you use it like below:

{% highlight python %}
def f:
  cnt = 0;
  
  def localFunction:
    console.log(cnt)
  end
end
{% endhighlight %}

i.e., no assignment involved, it would then be fine.

This is because that, whenever there's an assignment, python would believe that
there's a new variable in the current scope, and try to initialize memory before
coming into the scope; this part of memory would hide variables with the same
name in its parent scope. Thus, before the actual assignment, it's considered as
"undefined".

If one needs such implementation, and don't want to use class, one can do some
ugly trick by using a single element array to bypass the problem:

{% highlight python %}
def f:
  cnt = [0];
  
  def localFunction:
    console.log(cnt[0])
    cnt[0] = cnt[0] + 1
  end
end
{% endhighlight %}



In Javascript, similiar problem happends, but it's less nasty. Thanks to the
infamous `var` declaration (which python don't have). In the code below:

{% highlight javascript %}
  
(function(){
  var cnt = 0

  var f = function(){
    console.log("cnt = " + cnt++);
    var cnt = 1;
  }

  for(var i = 0 ; i < 2 ;i++){
    f();
  }
})()
  
{% endhighlight %}

It would output:

    cnt = NaN
    cnt = NaN

instead. Since there is a `var cnt = 1`, the variable would be allocated with
memory when entering the scope (although not yet initialized).

This is better than python, because whenever such case happens, almost always
it's because the code itself is ugly. One can simply bypass the problem by
renaminmg it. 
