---
layout: post
title: "Purely Front End rendering with RequireJS/CSS and DustJS"
description: ""
category: web
tags: [web, front-end, javascript, frontpage]
lang: en
---

## Introduction
By using RequireJS as file loading engine, and DustJS as the rendering engine, one can easily create a purely Front-end rendering web-page/site, with only these contents in the front page:
<div id="index-code"></div>
{% highlight html %}
<html>
<head>
  <title>Testing Front-End Rendering</title>
  <script type="text/javascript" data-main="scripts/main.js" src="http://requirejs.org/docs/release/2.1.6/minified/require.js"></script>
</head>
<body>
</body>
</html>
{% endhighlight %}
The source file is [here](/pages/frontendRender). By Viewing the source you can see everything.

But I have to put this in the first place that.. aside from thinking it to be interesting, __I cannot see much practical use of this technique yet__.

## Setup
In order to achieve this, here are the required files:
- [RequireJS](http://requirejs.org/docs/release/2.1.6/minified/require.js)
- [RequireJS|Text!](https://github.com/requirejs/text/blob/master/text.js)
- [DustJS](https://raw.github.com/akdubya/dustjs/master/lib/), need the files below:
  - dust.js
  - compiler.js
  - parser.js
- [RequireCSS](https://github.com/guybedford/require-css) (Optional)
- [BootStrap](http://twitter.github.io/bootstrap/) (Optional)

## Online Tutorials
For the tutorial on each of them, you may google online, or refer to:
- RequireJS(http://requirejs.org/docs/api.html): supports dynamic loading of JavaScript files, as well 
- RequireCss(https://github.com/guybedford/require-css): plugin to the RequireJS, supports dynamic loading of css files.
- RequireJS|Text!(https://github.com/requirejs/text): plugin to RequireJS, supports dynamic loading of any file as plain-text
- DustJS(http://akdubya.github.io/dustjs/): Template Engine supports both front-end and back-end rendering

## Details
As you can see in the [above][code-index], the only thing import is this line:

{% highlight html %}
  <script type="text/javascript" data-main="scripts/main.js" src="http://requirejs.org/docs/release/2.1.6/minified/require.js"></script>
{% endhighlight %}

This is to include the `Require.JS` file, and load the `scripts/main.js` file, which all the logic resides in.

Now comes the `scripts/main.js` file:

<div id="code-requirejs-config"/>
{% highlight js %}
requirejs.config({
  baseUrl: "scripts",
  paths:{
    jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
    dustJS: "//raw.github.com/akdubya/dustjs/master/lib/dust",
    "views": "../views",
  },
  map: {  // code for requireCss plugin
    '*': {
      'css':'./requirecss/css'
    },
  },
});

require(["prepareFront"]);
{% endhighlight %}

It does two things here:

1. Config the requirejs
2. Calls the `scripts/prepareFront.js` file.

In order to understand step#1, we need to first understand how requireJS actually works.

<div class="well">

<h4> RequireJS Basic Concepts </h4>
<p> Whenever we want to include a file using RequireJS, we would do: </p>

{% highlight js %}
require(["file1","file2"],function(){
  // Callback function comes here, main logic
});
{% endhighlight %}

<p>
file1, file2 are the <b>required files</b> needed before called the callback function, where path is the relative path, based
on the `baseUrl` (configured above in the [config][code-front] part) to your JavaScript source.
Thus the complete path to the file is: `baseUrl\file` 
</p>
<p>
A example using require function would be the [prepareFront.js](#code-prepareFront) file.
</p>
</div>

The `paths` in the [config][code-config] part are to config alternative parent paths, and these alternative path are
based on my baseUrl path. Say my file structure is like this:

    | scripts/
    | | dust/
    | | requirecss/
    | | | css.js
    | | | normalize.js
    | | main.js
    | | prepareFront.js
    | | require.js
    | | text.js
    | views/
    | | layout.dust
    | | main.dust
    | index.html

as defined [above][code-config], the baseUrl is `scripts`. Thus, if I want to refer to `views/` folder, the path setup
would be `../views`. More detailed explaination are on the RequireJS tutorial site.

After understanding the above, let's move on to the "map" part of the config code. I don't quite understand what it
means yet but it simply worked. The `'css':'./requirecss/css'` is pointing to the require-css folder. So that each time
one wants to load any css file, he can simply do:

{% highlight js %}
require(["css!pathToCss","css!anotherCssFile","a/normal/js/import/can/be/added/here/also"]);
{% endhighlight %}

For most of the time there is no action required after loading the css file, thus no function is required here.



After the config being done, let's move on to the `prepareFront.js` part:

<div id="code-prepareFront"/>
{% highlight js %}
// FILE: prepareFront.js
require([
  "jquery",
  "css!//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css",
  "//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.js",
  "dust/dust",
  "dust/compiler",
  "dust/parser",
  "text!views/main.dust",
  "text!views/layout.dust",
],function(){
  var main = arguments[6];
  var layout = arguments[7];
  dust.loadSource(dust.compile(layout,"layout"));
  dust.loadSource(dust.compile(main,"content"));

  var srcObj = {
    nav:{
      name:"Songyy",
      bar:["Link 1","Link 2","Link 3"],
      dropdown:["Drop 1","Drop 2","Drop 3"],
    },
    content: "lu lalal",
  };

  dust.render("layout",srcObj,function(err,dta){
    if(err){
      console.log(err);
    }
    document.body.innerHTML = dta;
  });
});
{% endhighlight %}

This file defines the main logic.
It would first get all the require done(jQuery, bootstrap - optional to make things look better, DustJS, and layout
files), then do a front-end rendering of the dust-js file. For details about the dust-js syntax, you may refer to the
\[dust js tutorial site](http://akdubya.github.io/dustjs/). That site is pretty complete ;)

Here it marks the end of this implementation part. 

## Discussion -- Pros & Cons

### Cons
I'll put reasons for not using (purely) front-end rendering here:

#### 1. It's bad for SEO(Search-Engine-Optimization). 
   As far as I know, most Robots cannot process JavaScript well. By having dynamically loaded content, the search
   engine's robots would wrongly believe that your site has nothing, because there's nothing static.

#### 2. It's unstable.
   By using JavaScript loading means.. if there's any line of code having any small error, or the user's browser
   disabled JavaScript, or there's any problem with the loading of any required library, the user would end up with
   seeing nothing. This would greatly affect the user experience in `certain countries` where the internet access to
   certain website (like Google) are not so stable.

### Pros

And I guess here're some good points of using Front-end Rendering:

### 1. Save the computation power of the server side.
   This doesn't seems to be so important since server is so cheap these days, and customers usually means everything.

### 2. Having a univeral template when Ajax is a must
   This is the only reason I can see, for using front-end rendering. A bit hard to explain though:

   Say this website have to use AJax to dynamically load certain data and creating some contents using templates on the
   fly, in that context front-end rendering is unavailable.

   If the front-end template is another file which is different from the backend template of the same content, you
   end-up having two duplicate generating the same content. This is definitely a bad coding exercise because everytime
   you need to update the styling, you would have to update the two templates.

   Two choices left in this context -- either do a purely front-end rendering, or a purely back-end. A back-end
   rendering might consume some lot more bandwidth than the front-end rendering, and that where a front-end rendering is
   needed.

Oh.. if one can actually use the same template for both the front-end and back-end, then life would be easier.

[code-config]: #code-requirejs-config
[code-index]: #index-code
[code-front]: #code-prepareFront
