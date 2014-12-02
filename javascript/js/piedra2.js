function aleatorio(minimo,maximo){
	var numero = Math.floor(Math.random() * (maximo-minimo +1)+minimo);
	return numero;
}
var opciones = ["piedra", "papel", "tijeras"];
var opcionJavascript=aleatorio(0,2);	
opcionUsuario= prompt ("que obcion elijes \n 0 piedra\n 1 papel\n 2 tijeras",0);
alert("la opcion del usuario es: "+ opciones[opcionUsuario]);
// if (opcionUsuario==opcionJavascript){
// 	alert("empate");
if (opciones[opcionUsuario]=="piedra" && opciones[opcionJavascript]=="papel" || opciones[opcionUsuario]=="papel" && opciones[opcionJavascript]=="tijeras" || opciones[opcionUsuario]=="tijeras" && opciones[opcionJavascript]=="piedra")
		alert("Perdiste");
else if (opciones[opcionUsuario]=="papel" && opciones[opcionJavascript]=="piedra" || opciones[opcionUsuario]=="tijeras" && opciones[opcionJavascript]=="papel" || opciones[opcionUsuario]=="piedra" && opciones[opcionJavascript]=="tijeras")
		alert("Ganaste");
else
	alert("empate");

	