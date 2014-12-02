var tablero;
var fondo={
	imagenURL:"images/fondo.png"
};

function inicio()
{
	tablero= document.getElementById("lienzo").getContext("2d");
	fondo.imagen= new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload=dibujarFondo;
	console.log (fondo.imagen);
}
function dibujarFondo(){
	tablero.drawImage(fondo.imagen, 0, 0);
}