// JavaScript Document //Event listener onclick :when you click the menu symbol
 function openfunction(){
    document.getElementById("menu").style.width="250px";
    document.getElementById("mainbox").style.marginleft="250px";
    document.getElementById("mainbox").innerHTML="";
  }
  // Event listener onclick: when you click close symbol
  function closefunction(){
    document.getElementById("menu").style.width="0px";
    document.getElementById("mainbox").style.marginleft="0px";
    document.getElementById("mainbox").innerHTML="&#9776;  ";
  }