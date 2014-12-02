var Mascota = function (nombre,higiene,piernas,ojos,voz,velocidad){
	this.nombre=nombre;
	this.higiene=higiene;
	this.piernas=piernas;
	this.ojos=ojos;
	this.voz=voz;
	this.velocidad=velocidad;
	// metódos
	this.corre();
	this.habla(this.voz);
	this.imprime();
}
Mascota.prototype.corre = function() {
	alert("La velocidad es de :  "+ this.velocidad);
};
Mascota.prototype.habla = function() {

	alert (this.voz);
};
Mascota.prototype.imprime = function() {

	document.write("El nombre de la Mascota es: "+this.nombre);
	document.write("<br>");
	if (this.higiene==true)
	document.write("Si Tiene higiene");
	else
	document.write("No Tiene higiene");	
	document.write("<br>");
	document.write("Tiene "+this.piernas+" piernas");
	document.write("<br>");
	document.write("Tiene "+this.ojos+"   ojos ");
	document.write("<br>");
	document.write("La velocidad es de "+this.velocidad+"  ");
};
function iniciar(){
	var perro=new Mascota("Jasinto", false, 4,2, "waw", "30km/h");
	var gato= new Mascota("Celso", true, 4, 2, "MEW", "50 km/h");
	console.log(perro);
	console.log(gato);
}