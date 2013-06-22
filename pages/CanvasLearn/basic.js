$(function(){
  var $cv = $("#canvas");
  $cv.css("border","3px solid #FFEE99");
  $cv.css("background-color","#888888");

  var cv = $cv.get(0);
  var ctx = cv.getContext("2d");
  var w = cv.width, h = cv.height;
  console.log("nani");
  console.log("w: " + w + ", h: " + h);

  ctx.translate(w/2,h/2);
  ctx.scale(1,0.5);

  ctx.rect(0,0,w,h);
  grd = ctx.createLinearGradient(0,h,w,0);
  grd.addColorStop(0,"#8ed6ff"); grd.addColorStop(1,"#004cb3");
  ctx.fillStyle = grd; ctx.fill();

  ctx.fillStyle = "#00FFFF";
  ctx.fillRect(0,0,150,75);

  ctx.beginPath();
  ctx.moveTo(100,150);
  ctx.lineTo(450,50);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(450,100);
  ctx.lineWidth = 15;
  ctx.lineTo(100,150);
  ctx.strokeStyle = "#FF00FF";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(100,100, 50, 0, Math.PI);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#000000";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(400,0);
  ctx.quadraticCurveTo(300,200,400,400);
  ctx.stroke();

  ctx.rotate(Math.PI / 4);

  ctx.beginPath();
  ctx.moveTo(400,400);
  ctx.bezierCurveTo(300,300,200,300,100,400);
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(300,200,100,100);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  ctx.rotate(-Math.PI / 4);

  ctx.translate(-w/2,-h/2);
  ctx.scale(1,2);

  ctx.beginPath();
  ctx.arc(200,200,10,0,Math.PI);
  ctx.fillStyle = "green";
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  var imageObj = new Image();
  imageObj.onload = function(){
    var pattern = ctx.createPattern(imageObj,"repeat");
    ctx.rect(w/3,h/4,w/2,h/2);
    ctx.fillStyle = pattern;
    ctx.globalAlpha = 0.5;
    ctx.fill();
    ctx.globalAlpha = 1;
  };
  imageObj.src = "http://www.html5canvastutorials.com/demos/assets/wood-pattern.png";

  var im2 = new Image();
  im2.onload = function(){
    ctx.drawImage(im2,50,50,50,50);
  };
  im2.src = "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg";

  ctx.font = 'italic 40pt Calibri';
  ctx.fillText("Hello World!",150,100);
  ctx.fillText("Hello World!",152,101);

});
