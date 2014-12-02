function inicio()
{
	var numero = prompt("Ingresa el número del cual requieres el factorial");
	
	factorial(numero);
}
function factorial(numero){
	numero= Number(numero);
	muestra= document.getElementById("caja");
	var acomulado=1;
	for ( var i =1; i <=numero; i++)
	{
		acomulado*=i;	
	}
muestra.innerHTML=acomulado;

}