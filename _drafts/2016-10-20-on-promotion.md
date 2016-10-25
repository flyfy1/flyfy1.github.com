---
layout: post
title: "On Promotion"
category: "solidus"
---

# How promotion works in Solidus

## Basic Class Structure
- Promotion: the base promotion class, it has:
  - match_policy: how the promotion rule is going to match (all / any)
  - many PromotionRule: the polymorphic class, being parent of all promotion
    rules. It has following properties defined:
    - applicable: 
    - eligible: 
    - actionable: if the rule can be applied to specific line item 
  - many PromotionAction: the polymorphic class, being the parent of all the 
    related promotion actions. As a PromotionAction, it needs to implement the
    following methods:
    - perform: things to do when promotion is applied
    - remove_from(order): things to do when promotion is removed from order
  - many PromotionCode
  - many order_promotions: to link with the order; and therefore, many orders
    through order_promotions
On the root level

## Trigger Point

The call stack is as follows:

- PATCH: /cart (update cart)
- controller: OrdersContents#update => @order.contents.update_cart(order_params)
- OrderContents#update_cart => PromotionHandler::Cart.new(order).activate
- PromotionHandler: loads all active
It triggers from the `` offered by the
`OrderContents#update_cart`, which is triggered by the 
solidus/core/app/models/spree/order_contents.rb

# Promotions We Need

## Cart Level
What can be done:
- Discount for *first time* purchase
- Purely discount, based on coupon code only
- Minus an amount, after reaching a price

What to be done:
- Buy X get Y:
  - If consumer purchased item from one category, then can get discount for the
    items in another category
  - if consumer purchased certain (combination of) items, then can get some
    other items (for free)

- Mutual exclusive rules - if rule A is applied, rule B cannot be apply
- Upon mutual exclusive rules, the best rule should be auto-selected for the
  consumer

## Item Level
Item can be sold with a `Special Price`
