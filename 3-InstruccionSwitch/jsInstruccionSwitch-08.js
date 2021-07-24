/*
Autor: Nazareno Santa Cruz
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino 

*/


function mostrar()
{
	var destinoIngresado;
	var mensaje;
	var climaDestino;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			climaDestino = "FRIO";
			break;
		case "Cataratas":
			climaDestino = "CALOR";
			break;
		case "Mar del plata":
			climaDestino = "debatiblemente FRIO";
			break;
		case "Ushuaia":
			climaDestino = "FRIO";
	}

	mensaje = "En " + destinoIngresado + " el clima es: " + climaDestino + ".";

	alert(mensaje);

}//FIN DE LA FUNCIÓN