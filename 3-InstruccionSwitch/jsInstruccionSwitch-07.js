/*
Autor: Nazareno Santa Cruz
Al selecionar un destino, 
indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste 
*/

function mostrar()
{
	var destinoIngresado;
	var mensaje;
	var puntoCardinal;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			puntoCardinal = "Este";
			break;
		case "Cataratas":
			puntoCardinal = "Norte";
			break;
		case "Mar del plata":
			puntoCardinal = "Oeste";
			break;
		case "Ushuaia":
			puntoCardinal = "Sur";
	}

	mensaje = "El punto cardinal de " + destinoIngresado + " es: " + puntoCardinal + ".";

	alert(mensaje);

}//FIN DE LA FUNCIÓN