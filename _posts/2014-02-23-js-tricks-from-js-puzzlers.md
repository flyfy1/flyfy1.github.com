---
layout: post
title: "JS Tricks from JS-puzzlers"
description: "A few JS's wired behaviour. Or you can treat this as an answer to javascript-puzzlers"
category: "language"
tags: [language,javascript,front-page]
lang: en
---

[Javascript-Puzzlers](http://javascript-puzzlers.herokuapp.com/) is a nice place for people to.. test their JS knowledge :)

I wrote some code to learn&verify JS's behaviour while solving the problems. I'll try to put the result below.

Meanwhile, I've also put the JS source code [here](/project/languageLearn/js-puzzler.js).

{% highlight javascript %}

// Question #1: ["1", "2", "3"].map(parseInt) 

// Verify as below
var a = ['1','2','3'];

// This would show the input that `map` feeds to the callback
a.map(function(){console.log(arguments);});
// output of one of the lines: { '0': '1', '1': 0, '2': [ '1', '2', '3' ] }

console.log( parseInt('1',0));  // output: 1
console.log( parseInt('2',1));  // output: NaN


// Question #2: [typeof null, null instanceof Object]
//    output: ["object", false]
// It's explained pretty well in the answer part


// Question #3: [ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ]
a = [3,2,1];
a.reduce(function(n){console.log(arguments);return n;});
console.log(Math.pow(3,2)); // output: 9
// [].reduce(function(n){console.log(arguments);return n;}); 
//  would result in TypeError


/* Question #4:
  var val = 'smtg';
  console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');
 */
var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');
// + operator has higher precedence than ternary
// Moral of story: always wrap in brackets when you're not sure about the precedence.


/* Question #5:
    var name = 'World!';
    (function () {
        if (typeof name === 'undefined') {
            var name = 'Jack';
            console.log('Goodbye ' + name);
        } else {
            console.log('Hello ' + name);
        }
    })();
  NOTE: this is a very interesting trick!
 */
var str = 'songyy';
(function(){
  if(typeof str === 'undefined'){
    var str = 'abc';
    console.log(str); // This is executed
    // Because the `var str` declaration is visible to the function, but the corresponding initialization is not
  }
})();

(function(){
  if(typeof str === 'undefined'){
    console.log(str); // This is not executed
    // Because when there's no locally defined `str`, it's then referred to the gloabl one, which is... defined.
  }
})();



/* Question #6:
var END = Math.pow(2, 53);
var START = END - 100;
var count = 0;
for (var i = START; i <= END; i++) {
    count++;
}
console.log(count);
 */
var END = Math.pow(2, 53);
var START = END - 100;
console.log("(START,END,END+1) = " + START + ", " + END + "," + (END+1));
console.log('END == (END+1) is ' + (END == (END + 1))); // TRUE, interestingly


/* Question #7:
var ary = [0,1,2];
ary[10] = 10;
ary.filter(function(x) { return x === undefined;}); 

Answer explains it well:
  Array.prototype.filter is not invoked for the missing elements.
 */



/* Question #8:
var two   = 0.2
var one   = 0.1
var eight = 0.8
var six   = 0.6
[two - one == one, eight - six == two]
Floating Point equality check will most-of-time give you unexpeced result
 */
console.log("0.8 - 0.2 = " + (0.8 - 0.2));



/* Question #9:
function showCase(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
    }
}
showCase(new String('A'));
// Answer explains well: switch uses === internally and new String(x) !== x
 */



/* Question #10:
function showCase2(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
    }
}
showCase2(String('A'));
// Because unique string would have a unique instance in memory
 */



/* Question #11:
function isOdd(num) {
    return num % 2 == 1;
}
function isEven(num) {
    return num % 2 == 0;
}
function isSane(num) {
    return isEven(num) || isOdd(num);
}
var values = [7, 4, '13', -9, Infinity];
values.map(isSane)

Answer explains very well: -9 % 2 gives -1 (modulo operator keeps sign so it's result is only reliable compared to 0)

And the same goes in C! (and probably other languages)
Moral of story: always check for (a%2==0) rather than with (==1)
or easier way of checking: (a&1 == 1) to check if it's odd
*/
function isOdd(num) { return num % 2 == 1; }
function isEven(num) { return num % 2 == 0; }
console.log([isOdd(Infinity),isEven(Infinity)]);
var a = '13'; console.log([isOdd(a),isEven(a)]);
var a = -9; console.log([isOdd(a),isEven(a)]);



/* Question #12:
parseInt(3, 8)
parseInt(3, 2)
parseInt(3, 0)
Answer explains well, and this is verified in the first question.

Answer: 3 doesn't exist in base 2, so obviously that's a NaN, but what about 0? parseInt will consider a bogus radix and assume you meant 10, so it returns 3.
 */



/* Question #13: Array.isArray( Array.prototype ) 
  Interestingly.. Array's prototype is an empty array.
*/



/* Question #14:
var a = [0];
if ([0]) { 
  console.log(a == true);
} else { 
  console.log("wut");
}
Answer explains well: [0] as a boolean is considered true. Alas, when using it in the comparisons it gets converted in a different way and all goes to hell.
 */



/* Question #15: [] == []
 */
console.log("([ [] == [], [] === [] ]) = " + [ [] == [], [] === [] ]);



/* Question #16:
'5' + 3  
'5' - 3 
Answer explains well: Strings know about + and will use it, but they are ignorant of - so in that case the strings get converted to numbers.
 */



/* Question #17: 1 + - + + + - + 1 
 */
console.log(1 + - + + + 1);
// No mater how many + in front of a number, its sign is decided by the # of -



/* Question #18:
var ary = Array(3);
ary[0]=2
ary.map(function(elem) { return '1'; }); 
Answer explans well: The result is ["1", undefined × 2], as map is only invoked for elements of the Array which have been initialized
 */



/* Question #19:
function sidEffecting(ary) { ary[0] = ary[2]; }
function bar(a,b,c) { 
  c = 10
  sidEffecting(arguments);
  return a + b + c;
}
bar(1,1,1)

Answer explains well: The result is 21, in javascript variables are tied to the arguments object so changing the variables changes arguments and changing arguments changes the local variables even when they are not in the same scope.
 */
function bar(a,b,c) { c = 10; console.log(arguments); }
bar(1,1,1); // as we can see, arg c has been modified.


/* Question #20:
var a = 111111111111111110000,
    b = 1111;
Err... Intrestingly, console.log(111111111111111111111) would give you
111111111111111110000 instead. A Few others:
log(211111111111111111121) -> 211111111111111100000
log(989999999999999999999) -> 990000000000000000000
log(999999999999999999999) -> 1e+21
 */



/* Question #21: var x = [].reverse; x();
This is a very interesting question.

var x = [].reverse; x(); -> returns window object
[].reverse(); -> returns []


Answer explains it well: [].reverse will return this and when invoked without an explicit receiver object it will default to the default this AKA window

But do note that:

    function Bar(){
      var x = [].reverse;
      console.log(x());
    }
    new Bar();

would raise an error

I asked a question on StackOverFlow here: http://stackoverflow.com/questions/21978707/calling-array-prototype-reverse-on-empty-array

And it was explained pretty clear over there.
 */



/* Question #22:
  Number.MIN_VALUE > 0
Err.. Test on the understand of `MIN_VALUE` object. Answer Explains:
> Number.MIN_VALUE is the smallest value bigger than zero, -Number.MAX_VALUE gets you a reference to something like the most negative number.
 */



/* Question #23: [1 < 2 < 3, 3 < 2 < 1]
Answer: true, true. Simply note that '<' is left associative
 */



/* Question #24: 2 == [[[2]]]
As it says.. WTF... answer explains: both objects get converted to strings and in both cases the resulting string is "2"
 */



/* Question #25:
3.toString()
3..toString()
3...toString()
Interestingly, result is: error, "3", error. Answer explains it well:
> 3.x is a valid syntax to define "3" with a mantissa of x, toString is not a valid number, but the empty string is.
 */



/* Question #26:
(function(){
  var x = y = 1;
})();
console.log(y);
console.log(x);
Easy one: y is an automatic global, not a function local one.
 */



/* Question #27:
var a = /123/,
    b = /123/;
a == b
a === b
Interestingly, regex are never equal to each other.
 */



/* Question #28:
var a = [1, 2, 3],
    b = [1, 2, 3],
    c = [1, 2, 4]
a ==  b
a === b
a >   c
a <   c
 */
console.log("[1,3] < [1,4] is: " + ( [1,3] < [1,4]) );  // -> Output: true
console.log([ [1,3] == [1,4], [1,3] === [1,4] ]);  // -> Output: [false, false]



/* Question #29:
var a = {}, b = Object.prototype;
[a.prototype === b, Object.getPrototypeOf(a) === b]

Answer Explains: Functions have a prototype property but other objects don't so a.prototype is undefined. 
Every Object instead has an internal property accessible via Object.getPrototypeOf
*/
// Additionally, note that: 
var a = {}, b = {};
console.log("[a == b, a === b] is: ",[a == b, a === b]);  // [false, false]
// and `{} == {}` is invalid



/* Question #30:
function f() {}
var a = f.prototype, b = Object.getPrototypeOf(f);
a === b

Answer States: f.prototype is the object that will become the parent of any objects created with new f while Object.getPrototypeOf returns the parent in the inheritance hierarchy.

This is very easy for one to go wrong 
 */



/* Question #31:
function foo() { }
var oldName = foo.name;
foo.name = "bar";
[oldName, foo.name]

Answer States: name is a read only property. But it doesn't throw an error when assigned.
 */



/* Question #32:    "1 2 3".replace(/\d/g, parseInt)
Answer: "1 NaN 3"
See the args printed below for the values passed
 */
console.log("args of replace:");
"1 2 3".replace(/\d/g, function(){console.log(arguments);});



/* Question #33:
function f() {}
var parent = Object.getPrototypeOf(f);
f.name // ? -> f
parent.name // ?  -> Object
typeof eval(f.name) // ?  -> Error
typeof eval(parent.name) //  ?  -> Function

Answer: "f", "Empty", "function", error
Note that, Object.getPrototypeOf(f) gives you empty object, whose name is 'empty'; Calling Empty gives you error.
 */




/* Question #34:
var lowerCaseOnly =  /^[a-z]+$/;
[lowerCaseOnly.test(null), lowerCaseOnly.test()]

After seeing the answer.. I wanna say: WTF!!!
Answer: [true,true].
As answer explains: the argument is converted to a string with the abstract ToString operation, so it is "null" and "undefined".
 */



/* Question #35: [,,,].join(", ")
Answer: ", , "
Firstly, [,,,] is [undefined * 3]; secondly, joining of `undefined` would translate `undefined` into empty string.
 */



/* Question #36:
var a = {class: "Animal", name: 'Fido'}; a.class

Answer: The answer is: it depends on the browser. class is a reserved word, but it is accepted as a property name by Chrome, Firefox and Opera. It will fail in IE. On the other hand, everybody will accept most other reserved words (int, private, throws etc) as variable names too, while class is verboten.

In NodeJS, it's the same as chrome.
 */
var a = {class: "Animal", name: 'Fido'}; a.class
console.log("a.class = " + a.class);



/* Question #37:  var a = new Date("epoch")
Answer: Invalid Date.
Given answer explains pretty well: You get "Invalid Date", which is an actual Date object (a instanceof Date is true). But invalid. This is because the time is internally kept as a Number, which in this case it's NaN
 */



/* Question #38:
var a = Function.length,
    b = new Function().length
a === b

Answer: false
Because Function.length returns the # of args expected to this funciton.
Function() by default take 1 arg; annoymus function take 0 arg in stead.
 */



/* Question #39:
var a = Date(0); var b = new Date(0); var c = new Date();
[a === b, b === c, a === c]

answer: all false.
Reason: Date(0) returns the Date as a string, new Date(0) return the Date object, with TimeStamp set to 0; new Date() set to current time
 */



/* Question #40:
var min = Math.min(), max = Math.max()
min < max

Interestingly, Math.min returns +Infinity when supplied an empty argument list. Likewise, Math.max returns -Infinity.

So the answer is false.

I believe this is related to the implementation of the min/max func.
 */


{% endhighlight %}
