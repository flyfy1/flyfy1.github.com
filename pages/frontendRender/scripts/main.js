requirejs.config({
  baseUrl: "scripts",
  paths:{
    jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
    dustJS: "//raw.github.com/akdubya/dustjs/master/lib/dust",
    "views": "../views",
  },
  map: {
    '*': {
      'css':'./requirecss/css'
    },
  },
});

require(["prepareFront"]);

