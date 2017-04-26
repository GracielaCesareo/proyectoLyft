var inicia=document.getElementById("iniciavideo");
inicia.addEventListener("click",play);

function play() {
	document.getElementById('miaudio').play();
	console.log(inicia);
}