---
layout: post
title: "Rails Multi Table Inheritance"
description: "Method to have multi-table inheritance in Rails 4.0"
category: "rails"
tags: ['rails','technique']
---

## The Actual Problem
I have different kinds of questionaires to build, but these questionaires have some parts in common. Therefore, I want to extract out these common parts, so that I can:

- Build the common parts at one place when rendering
- Put in some common functionality to my questionaires. For example, do user verification before starting the questionaire.
- Have one place to list all different kinds of questionaires, and by clicking them, I can go&visit each different questionaire.

## The Abstracted Problem
I can have a base type, which contains the common informaiton about these questionaires; then for whatever questionaire I am adding in, I should be able to extend from that base questionaire type, therefore automatically have these common behaviours & common properties

When I save it into the database, the structure should be something like this:

    BaseTable
    - name
    - age
    ...

    | TennisQuestionaireTable
    - base_id
    - tennis_ball_num
    - ...

    | PingPangnQuestionaireTable
    - base_id
    - pingpang_player_name
    - ...

## The Single Table Inheritance
Rails has the Single-Table-Inheritance(STI) implemented: simply by adding the 'type' into the actual database table. [This post](http://eewang.github.io/blog/2013/03/12/how-and-when-to-use-single-table-inheritance-in-rails/) has nicely summarized what is STI and how&why to use it. Let me paraphrase it a bit here (not quote from the blog post):

> You have multiple models, but all are referring to the same table. The 'type' in that table tells which model would take control of this record. 
> By having multiple model upon a single table, one can get more control over each different model types.

I personally see very little use of this STI mechanism: usually, if the model is different, then the corresponding database structure is likely to be different also (like here in my use case of questionaire).

## The Multi Table Inheritance
I would define the multi-table-inheritance(MTI) this way:

> You have a parent model, and you have several child models which inheritant from the parent model.
> Each model has their own table; although the child table don't have the fields in the parent table, the
> child model can still use the records in the parent's table, as if these fields exist in the child table.
> When these fields are updated by the child table, they're updated in the parent table accordingly.
> More-over, one can get all the childrens of a parent, by simply querying upon the parent table.

Rails don't have a native support for the MTI, therefore I need to implement my own. Here is how I implemented

Firstly, the base table. This defines the structure of the basic model, and other extending models would also extend
form a module of this base table.

{% highlight ruby %}
# File: app/models/base_table.rb
class BaseTable < ActiveRecord::Base
  module BaseTableInclude
    def self.included(base)
      base.belongs_to :base_table, autosave:true, dependent: :destroy
      base.before_validation proc{ self.base_table.qtype = self.class.to_s}
      base.after_initialize proc{self.base_table = BaseTable.new unless self.base_table}
    end
end
{% endhighlight %}

Correspondingly, in my extended model, I have the vary simple structure below:

{% highlight ruby %}
# File: app/models/tennis_questionaire.rb
class TennisQuestionaire < ActiveRecord::Base
  include BaseTable::BaseTableInclude
end
{% endhighlight %}

The extended model would just stay simple, we'll adding more methods in the base models to fully support the MTI.

Firstly, I want to be able to access the property of the base table, just like accessing the properties of my extended table. To make it short, I want functions like method below:

{% highlight ruby %}
t = TennisQuestionaire.new
t.name = "Songyy"
t.save
{% endhighlight %}

This is done using a method\_missing overiding, to delegate the missing method to the base\_table if cannot find in
the extended table:

{% highlight ruby %}
class BaseTable < ActiveRecord::Base
  module BaseTableInclude
    def method_missing(method,*args,&blk)
      if base_table.respond_to?(method)
        base_table.send(method,*args,&blk)
      else
        super
      end
    end
  end
end
{% endhighlight %}

Secondly, I want to be able to get instance of the extended table, from the base table. This is done by saving the name of the extended\_table:

{% highlight ruby %}
class BaseTable < ActiveRecord::Base
  def get_extend_form
    self.qtype.constantize.find_by(base_table_id:self.id)
  end
end
{% endhighlight %}


In order to use it properly in the controller, esp. the methods of:
{% highlight ruby %}
t = TennisQuestionaire.new(params)
t.save
t.update(params)
{% endhighlight %}
to be used in the controller, I need to override the `initialize` and `update` methods.

{% highlight ruby %}
class BaseTable < ActiveRecord::Base
  module BaseTableInclude
    def initialize(*args,&block)
      handle_res = handle_param_args(args) { |params| params[:base_table] = BaseTable.new(params[:base_table]) }
      super(*args,&block)
    end

    def update(*args,&block)
      handle_res = handle_param_args(args) do |params|
        params[:base_table].each { |k,v| self.send("#{k}=",v) }
        params.except! :base_table
      end
      
      super(*args,&block)
    end

    private 
    def handle_param_args(args)
      return unless block_given?

      if args.length > 0
        params = args[0]
        if (params.is_a? Hash) and params[:base_table].is_a? Hash
          yield params
        end
      end
    end
  end
end
{% endhighlight %}

Up to this point here, the model has been very-much defined to support MTI, and it's pretty clean -- if one needs to
create a new extended model, all one needs to do is to do:

{% highlight ruby %}
# File: app/models/extended_model.rb
class ExtendedModel < ActiveRecord::Base
  include BaseTable::BaseTableInclude
end
{% endhighlight %}

and that's all.


Now we need to change the controller part, which is a bit.. messy.

Firstly, we would extend from the BaseController, and in the filtering of the params, permit the base_table:

{% highlight ruby %}
# File: app/controllers/tennis_questionaires_controller.rb
class TennisQuestionairesController < BaseController
  # ... other code ...
private
  def tennis_questionaire_params
    params.require(:tennis_questionaire).permit(:tennis_ball_num,base_table:base_table_properties)
  end
  def extended_name; :tennis_questionaire; end
end
{% endhighlight %}
This is a bit unclean because it requires some actual changes, in a deep location, to the code to use the MTI.
But that's the only method I can come up with.

The `base_table_properties` is defined in the `BaseController`; it also defines the `update_param` to pre-process
the params passed-in. The extended_name is the one to pass to the BaseController, so that it knows which key of 
the params to set. Here's hte `BaseController` class:

{% highlight ruby %}
# File: app/controllers/base_controller.rb 
class BaseController < ApplicationController
    before_action :update_param, only: [:create,:update]

    def update_param
      params[extended_name][:base_table] = params.require(:base_table).permit(*base_table_properties)
    end

    def base_table_properties
      [:name, :age]
    end
end
{% endhighlight %}


Up to this point, we've done model and controller part. Now let's deal with the view.

Let's create a common view for the base model:

    # File: app/views/base_table/_form.html.slim
    = fields_for base_form do |base_form|
      .field
        = base_form.label :name
        = base_form.text_field :name
      .field
        = base_form.label :age
        = base_form.number_field :age

Now, whenever we need the base_table in the view, we can simply do:

    # File: app/views/base_table/_form.html.slim 
    = render 'base_table/form', base_form: @tennis_questionaire.base_table

and done. If one wants to add more common view into the `base_form`, one can simply add these codes into `app/views/base_table`

I've created a demo-project to further illustrate the idea. Here's the link: <https://github.com/flyfy1/rails-mti-demo>

Further improvement on this mothod is to make it a gem.. it would then be (hopefully) easier to use.

Hopefully this helps someone :)
