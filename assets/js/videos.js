var inicia=document.getElementById("corre");
console.log(inicia);
inicia.addEventListener("click",creariframe);

function play() {
	document.getElementById('miaudio').play();
	console.log(inicia);
}

function creariframe(){
	   inicia.style.display = 'none';
    //crear elemento
    var selector = document.getElementById('contenedor_frame');
    console.log(selector);
    var iframe = document.createElement('iframe');

    //propiedades iframe
    iframe.setAttribute('src','https://www.youtube.com/embed/fLSmUWOYpKw?autoplay=1');
    
    //insertar iframe
    selector.appendChild(iframe);
}