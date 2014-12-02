function ganaste(){
	document.write("<h1>Ganaste</h1>");
}
function perdiste(){
	document.write("<h1>perdiste</h1>");
}
var campo = [ [1,0,1],
			  [0,1,0],
			  [1,1,0] ];
var x,y;
console.log(campo);
var x= prompt("Estas en un campo minado \n elige un valor para X ");
var y= prompt("elige un valor para Y ");
alert("elegiste: X=[ "+ x+ "] Y= ["+ y +"] ");
if (campo[x][y]==1)
	ganaste();
else
	perdiste();
