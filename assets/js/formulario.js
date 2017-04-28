var navBar = document.getElementById("navBar");
var colorMenu = document.getElementsByClassName("colorMenu");
var logoWhite =  document.getElementById("logoWhite");
var logoPink = document.getElementById("logoPink");
var signUp = document.getElementsByClassName("signUp")[0];
var aLogIn = document.getElementsByClassName("aLogIn")[0];
var ulTarget = document.getElementsByClassName("floatRight")[0];

document.addEventListener("scroll", navStyleEdit);

function navStyleEdit(){
  if (window.scrollY > 90) {
    navBar.style.backgroundColor = "white";
    navBar.style.color = "#333447";
    logoWhite.style.display = "none";
    logoPink.style.display = "inline-block";
    signUp.style.visibility = "visible";
    aLogIn.classList.add('aMenu');
    ulTarget.classList.add('changeColor');
  } else {
    navBar.style.backgroundColor = "transparent";
    navBar.style.color = "whitesmoke";
    logoPink.style.display = "none";
    logoWhite.style.display = "inline-block";
    signUp.style.visibility = "hidden";
    aLogIn.classList.remove('aMenu');
    ulTarget.classList.remove('changeColor');
  }
}





var phone = document.getElementsByClassName("phone-number");
phone.addEventListener("click", lala);


function lala (){
  var data = document.getElementByClassName("secret");
  // console.log("ya casiiii");
  data.style.display = 'block';
}
