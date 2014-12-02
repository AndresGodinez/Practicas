var caja,boton,muestra,boton2,caja2;
function inicio(){
	caja=document.getElementById("cajaTexto");
	boton=document.getElementById("boton");
	muestra=document.getElementById("muestra");
	boton2=document.getElementById("boton2");
	caja2=document.getElementById("caja2");

	boton2.addEventListener("click",pares);
	boton.addEventListener("click", calcular);
	// console.log(cajaTexto.value);
}
function calcular(){
	var x;
	var acumulado=1;
	alert(caja.value);
	x=Number(caja.value);
	for (var i = 1; i <= x; i++) {
		acumulado=acumulado*i;

		}
	muestra.innerHTML=acumulado;
	}
function pares(){
	var numero_limite=Number(caja.value);
	var pares;
	for(var i=1; i<=numero_limite; i++){
		if ((i % 2)==0) {
			caja2.innerHTML+=(" "+i+" ");
		}
		}
	}
