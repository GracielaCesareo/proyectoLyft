	var inicia=document.getElementById("corre");
	inicia.addEventListener("click",creariframe);
	var inicia2=document.getElementById("corre2");
	inicia2.addEventListener("click",creariframe2);
	var inicia3=document.getElementById("corre3");
	inicia3.addEventListener("click",creariframe3);

	//iframes
	var iframe=document.getElementById("reproduccion");
	var iframe2=document.getElementById("reproduccion2");
	var iframe3=document.getElementById("reproduccion3");


	function creariframe(){
		inicia.style.display = 'none';
		iframe.style.display = "block";
		iframe.setAttribute('src','https://www.youtube.com/embed/fLSmUWOYpKw?autoplay=1');
	}
	function creariframe2(){
		inicia2.style.display = 'none';
		iframe2.style.display = "block";
		iframe2.setAttribute('src','https://www.youtube.com/embed/v8nyGzOLsdw?autoplay=1');
	}
	function creariframe3(){
		inicia3.style.display = 'none';
		iframe3.style.display = "block";
		iframe3.setAttribute('src','https://www.youtube.com/embed/xj2VWLV0xCU?autoplay=1');
	}
