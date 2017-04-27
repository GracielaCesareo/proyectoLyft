var inicia=document.getElementById("corre");
console.log(inicia);
inicia.addEventListener("click",creariframe);

var iframe=document.getElementById("reproduccion");

function play() {
	document.getElementById('miaudio').play();
	console.log(inicia);
}

function creariframe(){
	  inicia.style.display = 'none';
		iframe.style.display = "block";
    iframe.setAttribute('src','https://www.youtube.com/embed/fLSmUWOYpKw?autoplay=1');
}
