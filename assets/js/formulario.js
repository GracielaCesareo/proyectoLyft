var navBar = document.getElementById("navBar");
// var logo = document.getElementsByClassName("logo");
var logoWhite =  document.getElementById("logoWhite");
var logoPink = document.getElementById("logoPink");
var singUp = document.getElementsByClassName("singUp")[0];

document.addEventListener("scroll", navStyleEdit);

function navStyleEdit(){
  if (window.scrollY > 100) {
    navBar.style.backgroundColor = "white";
    navBar.style.color = "#333447";
    logoWhite.style.display = "none";
    logoPink.style.display = "inline-block";
    singUp.style.display = "inline-block";
  } else {
    navBar.style.backgroundColor = "transparent";
    navBar.style.color = "whitesmoke";
    logoPink.style.display = "none";
    logoWhite.style.display = "inline-block";
    singUp.style.display = "none";
  }
}
