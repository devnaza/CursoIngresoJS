/*
Autor: Nazareno Santa Cruz
Al ingresar una edad solo debemos informar si la persona NO es adolescente.   

*/

function mostrar()
{
	var edad;
	var mensaje;


	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	// No adolescente: mayor a 17 ó menor a 13

	if(edad > 17 || edad < 13)
	{
		mensaje = "La persona NO es adolescente."
		alert(mensaje);
	}

}//FIN DE LA FUNCIÓN

// otra forma es usar el not ! y el ampersand, pero consume más microprocesadores