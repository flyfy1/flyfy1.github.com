window.onload = function(){
  var xmlhttp;
  if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest();// code for IE7+, Firefox, Chrome, Opera, Safari
  else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");// code for IE6, IE5

  xmlhttp.onreadystatechange=function(){
    console.log("response of img got");
    if (xmlhttp.readyState==4 && xmlhttp.status==200){
      document.getElementById("img").innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET","image.txt",false);
  xmlhttp.send();

  xmlhttp.onreadystatechange=function(){
    console.log("response of words got");
    if (xmlhttp.readyState==4 && xmlhttp.status==200){
      document.getElementById("words").innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET","happy.txt",false);
  xmlhttp.send();
};
