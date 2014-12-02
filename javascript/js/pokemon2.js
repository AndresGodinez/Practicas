var turno=1;
var goku= {
	vida:300,
	ataque:100,
	win: function (){
		alert("ha ganado goku");
	}
}
var vegueta={
	vida:250,
	ataque:60,
	win: function (){
		alert("ha ganado vegueta");
	}
}
while (goku.vida>0 && vegueta.vida>0){
	if (turno==1){
		vegueta.vida= vegueta.vida - goku.ataque;
		turno=2;
		alert("la vida de vegueta es: " + vegueta.vida + "puntos de vida");
	}
	else{
		goku.vida=goku.vida - vegueta.ataque;
		turno=1;
		alert("la vida de goku es: "+ goku.vida + "puntos de vida");
	}
}

if (goku.vida>0){
	goku.win();
}
else
	vegueta.win();