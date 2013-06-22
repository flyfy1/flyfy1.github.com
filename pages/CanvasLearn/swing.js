$(function(){

  window.requestAnimFrame = (function(callback){
    return window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.oRequestAnimationFrame
        || window.msRequestAnimationFrame
        || function(callback){ window.setTimeout(callback,1000/60);};
  })();

  function getConvas($stage,w,h){
    $cvs = $("<canvas/>"); $cvs.appendTo($stage);
    setupCanvasWH($cvs,w,h);
    $cvs.css("position","absolute");
    $cvs.css("left","0"); $cvs.css("top","0");
    return $cvs;
  }

  function setupCanvasWH($e,w,h){
    $e.attr("width",w); $e.attr("height",h);
    $e.width(w); $e.height(h);
  }
  
  var $stage = $("#canvass"); 
  var w = 500, h = 500;

  $stage.css("position","relative");
  $stage.css("border","1px solid #000000");
  $stage.html(""); setupCanvasWH($stage,w,h);

  var $bg = getConvas($stage,w,h);
  var PI = Math.PI;
  var ctx = $bg.get(0).getContext("2d");

  ctx.lineWidth = 1; ctx.strokeStyle = "#AAAAAA";
  var bottom = 10 + Math.sqrt(3) * 200;
  // left border
  ctx.beginPath(); ctx.moveTo(250,10); 
  ctx.lineTo(50,bottom); ctx.stroke();

  // right border
  ctx.beginPath(); ctx.moveTo(250,10); 
  ctx.lineTo(450,bottom); ctx.stroke();

  ctx.beginPath();
  ctx.arc(250,10,400, PI * 1 / 3, PI * 2 / 3);
  ctx.stroke();

  // generate the foreground canvas real-time
  var $fg = getConvas($stage,w,h);
  ctx = $fg.get(0).getContext("2d");
  var radius = 4;

  function drawBall(ctx,centerX,centerY){
    ctx.beginPath();
    ctx.arc(centerX,centerY,radius,0,2 * PI);
    ctx.fillStyle = "green"; ctx.fill();
  }

  function outOfBound(x,y,w,h,r){
    return x < 0 - r|| y < 0 - r || x > w + r|| y > h + r;
  }

  function animate(ctx,cfg){
    // TODO: this part can be made more effective
    ctx.clearRect(0,0,w,h);
    cfg.sx += cfg.px; cfg.sy += cfg.py;
    console.log("sx = " + cfg.sx + ", sy = " + cfg.sy);
    drawBall(ctx,cfg.sx,cfg.sy);

    if(outOfBound(cfg.sx,cfg.sy,w,h)) return;

    requestAnimFrame(function(){
      animate(ctx,cfg);
    });
  }
  cfg = {sx:1,sy:1,px:1,py:1};
  animate(ctx,cfg);
  drawBall(ctx,100,100);
});
