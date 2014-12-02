function pokemon(nombre, ataque, tipo, grito)
{
	this.nombre =nombre;
	this.ataque =ataque;
	this.tipo   =tipo;
	this.grito  =grito;
	this.gritar = function(){
		alert(this.grito);
	}
}
function inicio(){
	var pikachu                 = new pokemon ("pikachu", 200, "electrico", "pika, pikachu");
	var bulbasaur               = new pokemon("bulbasaur", 200,  "tierra", "bulba, bulbasaur");
	nombrePokemon.textContent   =bulbasaur.nombre;
	grito.textContent           =bulbasaur.grito;
	descripcionPoke.textContent =bulbasaur.ataque+bulbasaur.tipo;
	
	}

