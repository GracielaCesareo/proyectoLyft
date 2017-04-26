var navBar = document.getElementById("navBar");
document.addEventListener("scroll", navStyleEdit);

function navStyleEdit(){
  if (window.scrollY > 100) {
    navBar.style.backgroundColor = "white";
    navBar.style.color = "#333447";
    nav
  } else {
    navBar.style.backgroundColor = "transparent";
    navBar.style.color = "whitesmoke";
  }
}
