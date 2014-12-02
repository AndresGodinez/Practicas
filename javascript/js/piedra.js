function aleatorio(minimo,maximo){
	var numero = Math.floor(Math.random() * (maximo-minimo +1)+minimo);
	return numero;
}

var piedra=0;
var papel=1;
var tijeras=2;
var opcionJavascript=aleatorio(0,2);	
opcionUsuario= prompt ("que obcion elijes \n 0 piedra\n 1 papel\n 2 tijeras",0);
alert(opcionUsuario);
if (opcionUsuario==piedra)
{
	if (opcionJavascript==piedra) {
		alert("empate");
	}else if (opcionJavascript==papel) {alert("Gana Javascript")}
	else 
		alert("ganaste");
}
if (opcionUsuario==papel){
	if (opcionJavascript==papel) {
		alert("empate");

	}
	else if (opcionJavascript==tijeras){
		alert("PErdiste");
	}else{
		alert("Ganaste");
	}
}
if (opcionUsuario==tijeras){
	if (opcionJavascript==papel) {
		alert("Ganaste");
	} else if (opcionJavascript==tijeras)
	alert ("empate");
	else 
		alert("perdiste");
}