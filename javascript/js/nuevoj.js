var lienzo;
var codigo;
var campo={
	URL: "images/fondo.png",
	OK: false,
	verificado:0,
};
var teclas={
	UP:38,
	DOWN:40,
	LEFT:37,
	RIGTH:39,
};

var objeto;
var diana={
	URL:"images/diana-frente.png",
	verificado:0,
	imgAtras:false,
	imgFrente:false,
	imgDer:false,
	imgIzq:false,
	velocidad:20,
	x:50,
	y:50,
};
var liz={
	URL:"images/liz.png",
	verificado:0,
	x:400,
	y:400,
}
function inicio()
{
	lienzo= document.getElementById("lienzo").getContext("2d");
	carga (campo);
	carga (diana);
	carga (liz);

	dibujar();
	document.addEventListener("keydown", teclado);
}
function teclado(datos){
	codigo=datos.keyCode;
	if(codigo==teclas.UP)
	{
		diana.y-=diana.velocidad;
		dibujar();
	}
	if(codigo==teclas.DOWN)
	{
		diana.y+=diana.velocidad;
		dibujar();
	}
	if(codigo==teclas.LEFT)
	{
		diana.x-=diana.velocidad;
		dibujar();
	}
	if(codigo==teclas.RIGTH)
	{
		diana.x+=diana.velocidad;
		dibujar();
	}
}

function carga(object){
	objeto=object;
	objeto.imagen= new Image();
	objeto.imagen.src= objeto.URL;
	objeto.verificado++;
	objeto.imagen.onload= verificar;
	  
}

function dibujar (){
	// campo.OK=true;
	// diana.OK=true;
	// liz.OK=true;
	if(campo.OK&&diana.OK&&liz.OK)
	{
		lienzo.drawImage(campo.imagen,0,0);
		lienzo.drawImage(diana.imagen,diana.x,diana.y);
		lienzo.drawImage(liz.imagen,liz.x,liz.y);
	}
}