var lienzo, trazos, texto, boton;
function dibujar()
{
var area= document.getElementById("dibujito");
lienzo= area.getContext("2d");
lienzo.moveTo(30,30);
lienzo.lineTo(30,300);
lienzo.strokeStyle="00f";
lienzo.stroke();
}
function inicio(){
	texto= document.getElementById("texto");
	boton= document.getElementById("boton");
	boton.addEventListener("click",grilla);
	grilla;
}

function grilla(){
	texto= document.getElementById("texto");
	boton= document.getElementById("boton");

	var trazado= document.getElementById("dibujito");
	var dibujo=trazado.getContext("2d");
	var alto, ancho,lineasTotalesAlto,lineasTotalesAncho;
	alto=300;
	ancho=300;
	lineasTotalesAncho=Number(texto.value);
	lineasTotalesAlto=Number(texto.value);
	var hacerLineasAlto=(alto/lineasTotalesAlto);
	var hacerLineasAncho=(ancho/lineasTotalesAncho);
	dibujo.strokeStyle="A00";
	dibujo.moveTo(0,0);
	for (var u=0; u<=ancho; u+=hacerLineasAncho)
	{
		dibujo.moveTo(0,u);
		dibujo.lineTo(ancho,u);
		dibujo.moveTo(u,0);
		dibujo.lineTo(u,alto);
	}
	dibujo.stroke();

	// ctx.arc(100,70,50,0,(Math.PI/180)*270,true);
	// dibujo.beginPath();
	// dibujo.fillStyle = "red";
	// dibujo.strokeStyle="black";
	// dibujo.arc(50, 50, 5, 0, 2 * Math.PI, false);
	// dibujo.fill();
	// dibujo.stroke();
	// dibujo.closePath();
}
 	