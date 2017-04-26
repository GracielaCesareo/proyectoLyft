var navBar = document.getElementById("navBar");
var logo = document.getElementsByClassName("logo");
// 
// var logoWhithe= document.createElement("img").scr ="assets/img/logo-white.png";
//
// logo.appendChild(logoWhithe);

document.addEventListener("scroll", navStyleEdit);

function navStyleEdit(){
  if (window.scrollY > 100) {
    navBar.style.backgroundColor = "white";
    navBar.style.color = "#333447";
  } else {
    navBar.style.backgroundColor = "transparent";
    navBar.style.color = "whitesmoke";
  }
}
