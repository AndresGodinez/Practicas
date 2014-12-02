function win (){
	alert("ganaste");
	document.write("<h1>Ganaste</h1>");
}
function lost(){
	alert("perdiste");
	document.write("<h1> Perdiste</h1>");
}

var campo = [ [1, 0, 1],
		      [0, 1, 1],
		      [1, 1, 1] ];
var x,y;
var textos =["Cesped", "Bomba"];
alert("estas en un campo minado \n elige una posicion");
x= prompt("elige un valor para X entre 0 y 2\n",0);
y= prompt("elige un valor para Y entre 0 y 2",0);
alert ("las posiciones elegidas son: [" +x + "] en X y ["+ y + "] en Y");
var muestra= textos[(campo[x][y])];
if (muestra=="Cesped")
	win();
else
	lost();