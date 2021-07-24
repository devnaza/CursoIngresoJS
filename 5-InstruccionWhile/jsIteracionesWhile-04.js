/*
Autor: Nazareno Santa Cruz
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	/* Esto dijo que no por ahora . así que escribir dos veces el prompt y el parse.
	Probé con nIngresado = true y tampoco me funcionaba.
	numeroIngresado = 10;  */

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt(numeroIngresado);


	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
		numeroIngresado = parseInt(numeroIngresado);
	}

	document.getElementById('txtIdNumero').value = "El # ingresado es: " + numeroIngresado;
	
}//FIN DE LA FUNCIÓN