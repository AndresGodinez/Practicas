var turno=1;
var pikachu={
	ataque: 30,
	vida: 100,
	win: function(){
		alert("gano pikachu")
	}
}
var charizard={
	ataque:40,
	vida:150,
	win: function(){
		alert("gano charizard")
	}
}
while(pikachu.vida>0 && charizard.vida>0){
	if (turno==1) {
		charizard.vida=charizard.vida- pikachu.ataque;
		turno=2;
		alert("la vida de charizard es: "+ charizard.vida);
	}
	else
	{
		pikachu.vida= pikachu.vida - charizard.ataque;
		turno=1;
		alert ("la vida de pikachu es: " + pikachu.vida);
	}
}
if (pikachu.vida>0) {
	pikachu.win();
}
else{
	charizard.win();	
}