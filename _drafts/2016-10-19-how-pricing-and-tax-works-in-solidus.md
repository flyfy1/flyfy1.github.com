---
layout: post
title: "How Pricing and Tax works in Solidus"
category: "CodeAnalysis"
---

# Genesis

I've been reading lots of code these days.. and I think it might be important to
note down some of the code that I've read through.

So here let me write a bit about.. how Solidus Pricing & Taxing works.

# Basic Models

- Variant: the basic unit for purchase.
- Product: the basic unit for listing a product. a Product might have many
  variations, based on different OptionValues
- Order: the purchase order. In solidus, and order is created as long as the
  user add a variant into cart
- LineItem: belongs to order, records the quantity, price, tax related, and
  promotion related for a particular Variant in the order

# Basic Objects
- `Spree::Money`: a wrapper over the monetize gem; it provides some
  representational only
- `Spree::OrderContent`: a wrapper over `Spree::Order`, handles add / remove
  item to / from order logic

# Source Code
## Adding Variant into Order
- 

# Source Code Locations 

```yaml
variant: 
order: 

```

```ruby
# to see the 

```
