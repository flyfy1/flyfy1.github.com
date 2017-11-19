---
layout: post
title: "Patterns In Rails"
category: "rails"
tags: "front-page"
---

When I'm reading souce code of Rails, there're some interesting patterns, or
small little tricks in Rails, which are worth mentioning.

The rails code I'm currently reading is in the branch of `5-0-stable`. All the
code examples in this post can be found in this branch.

TODO: I think a kind of `pattern-interface` should be built, where these 
patterns can be grouped, and searched via key-words.

## the `begin-yield-ensure` model

It's used before doing something dangerous, used this way:

```ruby
setup

begin
  yield
ensure
  clean_up
end
```
## 

Here's an example usage:

```ruby
# activesupport/lib/active_support/dependencies.rb:657

def new_constants_in(*descs)
  constant_watch_stack.watch_namespaces(descs)
  success = false

  begin
    yield # Now yield to the code that is to define new constants.
    success = true
  ensure
    new_constants = constant_watch_stack.new_constants

    return new_constants if success

    # Remove partially loaded constants.
    new_constants.each { |c| remove_constant(c) }
  end
end
```

Here's another example, where the `setup` would reassign some instance variables,
and the `ensure` would restore the variables:

```ruby
# activesupport/lib/active_support/dependencies/autoload.rb:35

def autoload_under(path)
	@_under_path, old_path = path, @_under_path
	yield
ensure
	@_under_path = old_path
end
```
