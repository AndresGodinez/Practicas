var tablero;
var campo={
	imagenURL:"images/fondo.png"
};
function inicio(){
	tablero= document.getElementById("lienzo").getContext("2d");
	campo.imagen = new Image();
	campo.imagen.src= campo.imagenURL;
	campo.imagen.onload=dibujaCampo;
}
function dibujaCampo(){
	tablero.drawImage(campo.imagen,0,0);
}