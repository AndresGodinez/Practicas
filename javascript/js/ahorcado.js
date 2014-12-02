var tablero;
var palabra="Tamarindo";
var boton,texto;
var Solucion= function(){
	this.pista=palabra;
	this.muestra();

}
Solucion.prototype.muestra=function(){
	var cajas= document.getElementById("cajas");
	var tam=this.pista.length;
	var word= new Array(tam);
	var p;
	if(p in word)
	{
		if(p!= undefined)
		{
			alert("vamos bein");
		}
	}
}
var Ahorcado = function (con){
	this.liezo=con;
	this.MAXintentos=5;
	this.intentos=5;
	this.dibujar(con);
}
Ahorcado.prototype.dibujar= function(con)
{
	l=con;
	l.beginPath
	l.moveTo(100,100);
	l.lineTo(100,50);
	l.moveTo(100,50);
	l.lineTo(200,50);
	l.moveTo(200,50);
	l.lineTo(200,400);
	l.lineWidth=5;
	l.strokeStyle="BLUE";
	l.stroke();
	l.closePath();

	if(this.intentos>0)
		{
			l.strokeStyle="black";
			l.beginPath();
			l.lineWidth=2;
			l.arc(100,150,50,0,2*Math.PI);
			l.stroke();
			l.closePath();
			if(this.intentos>1){
				l.beginPath();
				l.moveTo(100,200);
				l.lineTo(100,300);
				l.stroke();
				l.closePath();
				if(this.intentos>2)
				{
					l.beginPath();
					l.moveTo(50,250);
					l.lineTo(100,200);
					l.lineTo(150,250);
					l.stroke();
					l.closePath();
					if(this.intentos>3)
					{
						l.beginPath();
						l.moveTo(50,350);
						l.lineTo(100,300);
						l.lineTo(150,350);
						l.stroke();
						l.closePath();
						if(this.intentos>4)
							{
								l.beginPath();
								l.strokeStyle="RED";
								l.moveTo(70,130);
								l.lineTo(90,150);
								l.moveTo(90,130);
								l.lineTo(70,150);
								
								l.moveTo(110,130);
								l.lineTo(130,150);
								l.moveTo(130,130);
								l.lineTo(110,150);

								l.stroke();
								l.closePath();
							}
					}
				}

			}
		}
	}

function inicio(){
	tablero= document.getElementById("canvas");
	tablero.width=500;
	tablero.height=500;
	lienzo=tablero.getContext("2d");
	var h= new Ahorcado(lienzo);
	var p= new Solucion();
	console.log(p.muestra);
	p.muestra;
	h.dibujar;

}
