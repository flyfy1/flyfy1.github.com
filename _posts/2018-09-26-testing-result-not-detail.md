---
layout: post
title: "Testing Result not Detail"
category: "testing"
tags: "front-page"
---

When writing specs, I think the spec should describe implementation result, but 
not the implementation detail.

Take the ruby code below for example:

```ruby
def add(a, b)
  a + b
end
```

one can test like: 

```ruby
expect( add(1,2) ).to eq(3)
```

that's testing the result; but if one write test:

```ruby
expect( add(1,2) ).to eq(1+2)
```

that's testing the detail.


The problem with testing the detail is that... say if the dependent method, 
`:+` got changed, then the result would actually be different, but the second 
spec would still pass.
