
function updateUI(){
  console.log("UI Updated");
  $sidebar = $("#sidebar-main");
  $sidebar.attr("isO",1);
  $("#sidebar-ctrl").click(function(){
    if($sidebar.attr("isO") == "1"){
      // Do sidebar close
      $sidebar.animate({
        width:"0px"
      },1000);
      $sidebar.attr("isO","0")
    } else{
      // Do Sidebar open
      $sidebar.animate({
        width:"200px"
      },1000);
      $sidebar.attr("isO","1")
    }
  });
};

require([
  "order!jquery",
  "order!css!//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css",
  "order!//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.js",
  "order!dust/dust",
  "order!dust/compiler",
  "order!dust/parser",
  "order!text!views/main.dust",
  "order!text!views/layout.dust",
  "order!css!style/cuz",
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
    updateUI();
  });
});

