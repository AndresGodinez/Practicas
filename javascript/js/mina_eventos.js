var x, y;
var num_Bombas=x;
var num_Intentos=y;
// declarar arreglos de forma dinamica
x= prompt("Vamos a hacer un campo minado \n ¿Qué valor quieres para X",1);
y= prompt("¿Qué valor quieres para Y",1);

function crea_campo(){
	x=Number(x);
	y=Number(y);
	console.log(x+" x "+ y+" y ");

	document.write("<center><table border='1' width='60%'>");
	for(var i=1; i<=x;i++)
	{
		document.write("<tr>");
		for(var j=1;j<=(Number(y));j++)
		{
			document.write("<td> <input type='button' value='"+i+j+"' id='"+i+j+"'</td>");
		}
		document.write("</tr>");
	}
	document.write("</table></center>");
}
function inicio(){
	console.log(arreglo);
	crea_campo();
}