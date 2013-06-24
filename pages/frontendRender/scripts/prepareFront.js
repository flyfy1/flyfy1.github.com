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

