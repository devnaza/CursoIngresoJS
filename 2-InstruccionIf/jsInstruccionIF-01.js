/*
Autor: Nazareno Santa Cruz
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".

*/


function mostrar()
{ 
	var edad;
	var mensaje;

	// Entrada

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	// Proceso

	if(edad == 15)
	{
		mensaje = "niña bonita";
		alert(mensaje);
	}

	// Salida


}//FIN DE LA FUNCIÓN