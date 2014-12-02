var tablero,codigo	;
var campo={
	imagenURL:"images/fondo.png",
	imagenOk:false,
};
var teclado={
	UP:38,
	DOWN:40,
	LEFT:37,
	RIGTH:39,
};
var diana={
	frenteURL:"images/diana-frente.png",
	frenteOK:false,
	atrasURL:"images/diana-atras.png",
	atrasOK:false,
	izqURL:"images/diana-izq.png",
	izqOK:false,
	derURL:"images/diana-der.png",
	derOK:false,
	velocidad:20,
	x:100,
	y:100,
};
var liz={
	lizURL: "images/liz.png", 
	lizOk:false,
	x:400,
	y:400,
};
function inicio(){
	tablero= document.getElementById("lienzo").getContext("2d");
	// campo
	campo.imagen= new Image();
	campo.imagen.src=campo.imagenURL;
	campo.imagen.onload=asignarCampo;
	// Diana Frente
	diana.frente= new Image();
	diana.frente.src=diana.frenteURL;
	diana.frente.onload=frenteDiana;
	// Diana Atras
	diana.atras= new Image();
	diana.frente.src=diana.atrasURL;
	diana.frente.onload=atrasDiana;
	// Diana Derecha
	diana.der= new Image();
	diana.der.src=diana.derURL;
	diana.der.onload=derDiana;
	// Diana Izquierda
	diana.izq= new Image();
	diana.izq.src=diana.izqURL;
	diana.izq.onload=izqDiana;
	// Liz
	liz.imagen= new Image();
	liz.imagen.src= liz.lizURL;
	liz.imagen.onload=dibujaLiz;

	document.addEventListener("keydown", teclado);
}

function teclado()
{
	// console.log(datos.keyCode);
	codigo=datos.keyCode;
	if (codigo==UP) {
		diana.y-=diana.velocidad;
	}
	if(codigo==DOWN)
	{
		diana.y+=diana.velocidad;
	}
	if(codigo==RIGTH){
		diana.x+=diana.velocidad;
	}
	if (codigo==LEFT) {
		diana.x-=diana.velocidad;
	}
	dibujar();

}

function dibujaLiz(){
	liz.lizOk=true;
	dibujar();
}

function frenteDiana(){
	diana.frenteOK= true;
	dibujar();
}
function atrasDiana()
{
	diana.atrasOK=true;
	dibujar();
}
function derDiana()
{
	diana.derOK=true;
	dibujar();
}
function izqDiana(){
	diana.izqOK=true;
	dibujar();
}

function asignarCampo(){
	campo.imagenOk=true;
	dibujar();
}

function dibujar(){
	if (campo.imagenOk==true)
	{
		tablero.drawImage(campo.imagen,0,0);
	}
	if (diana.frenteOK==true)
	{
		tablero.drawImage(diana.frente, diana.x, diana.y);
	}
	if (liz.lizOk==true)
	{
		tablero.drawImage(liz.imagen, liz.x, liz.y);
	}
}
