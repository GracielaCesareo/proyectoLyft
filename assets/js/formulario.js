var navBar = document.getElementById("navBar");
var colorMenu = document.getElementsByClassName("colorMenu");
var logoWhite =  document.getElementById("logoWhite");
var logoPink = document.getElementById("logoPink");
var signUp = document.getElementsByClassName("signUp")[0];

document.addEventListener("scroll", navStyleEdit);

function navStyleEdit(){
  if (window.scrollY > 90) {
    navBar.style.backgroundColor = "white";
    navBar.style.color = "#333447";
    logoWhite.style.display = "none";
    logoPink.style.display = "inline-block";
    signUp.style.visibility = "visible";
    // for (var i = 0, liMenu = colorMenu.length; i < liMenu; i++) {
    //   colorMenu[i].style.color = "#333447";
    // }
  } else {
    navBar.style.backgroundColor = "transparent";
    navBar.style.color = "whitesmoke";
    logoPink.style.display = "none";
    logoWhite.style.display = "inline-block";
    signUp.style.visibility = "hidden";
    // for (var i = 0, liMenu = colorMenu.length; i < liMenu; i++) {
    //   colorMenu[i].style.color = "whitesmoke";
    // }
  }
}
