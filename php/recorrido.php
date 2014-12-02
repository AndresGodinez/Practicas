<?php
	echo("Prueba");
	$ciudades             = array ("Badajoz","Mérida","Cáceres","Plasencia") ;
	$ciudades["España"]   = "Madrid";
	$ciudades["Portugal"] = "Lisboa";
	$ciudades["Francia" ] = "Paris";
	echo($ciudades["España"]);

	$valor = current($ciudades);
	next($ciudades);
	$valor = current($ciudades);
	$valor = current($ciudades);
	$valor = current($ciudades);
	echo ("el valor es : $valor <br>" );
	echo ("el valor es : $valor <br>" );
	echo ("el valor es : $valor <br>" );
	echo ("el valor es : $valor <br>" );
	echo ("el valor es : $valor <br>" );
	
	
?>