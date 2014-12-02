var x,y;
var numMinas=0;
var campo=[[0,0,0],		//se declara el campo de tipo array o arreglo de 3X3 
		   [0,0,0],
		   [0,0,0]];
console.log(campo);
function aleatorio(minimo, maximo){		//Función aleatorio se pasa por parametro el valor minimo y maximo
	var numero = Math.floor(Math.random() * (maximo-minimo +1)+minimo);
	return numero; 
}
function colocarMina(){		//Función para colacar las minas, unicamente colocaremos 4 minas de los 9 espacios disponibles
	while(numMinas<4){		//Verificamos que el numero de minas sea menor que 4, de ser así hará entrará al bucle.
		x=aleatorio(0,2);	//la variable "X" y "Y" será igual al retorno de la función aleatorio, la función aleatorio 
		y=aleatorio(0,2);	//retorna un numero entre 0y 2, porque pasamos como minímo 0 y máximo 2, es decir retorna lo que esta en ese rango
	if(campo[x][y]==0)		//verificamos que el campo en la posición x,y sea 0, si hay mina o es =1 no tendría caso, porque 
		{					//ya habrá una mina colocada en esa posición.
			campo[x][y]=1;
			numMinas++;
		}
	}
}
function explota(){			//Imprimimos en el HTML "has explotado"
	document.write("Has Explotado");
}
function ganaste(){		
	document.write("Has Ganado");	//imprimimos en HTML "Has ganado"
}
function evalua(x,y){		//Evaluamos la posición que ha ingresado el Usuario.
	if(campo[x][y]==1)		// si la posicion de campo "x" y "y" es igual a 1 habrá encontrado mina y se manda a llamar
	{						//la función "explota()" que ya esta comentada.
		explota();
	}
	else{					//De no cumplirse la condición, es que será un "0" por lo tanto no hay mina y se
		ganaste();			//mandará a llamar la función "ganaste"
	}
}

	var x= prompt("Te encuantras en un campo minado de 3x3 \n Ingrese el numero para X \n 0,2",0);
	var y= prompt("Ingrese el numero para Y \n 0,2",0);

colocarMina();
evalua(x,y);
// muestra en consola el campo minado despues de haber colocado las minas
 console.log(campo);
