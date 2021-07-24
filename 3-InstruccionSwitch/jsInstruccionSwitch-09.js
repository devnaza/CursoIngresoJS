/*
Autor: Nazareno Santa Cruz
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento 


REHACERLO PERO SIN EL ATAJO

*/


function mostrar()
{
	var estacionClimatica;
	var destinoVacacional;
	var cambioPrecio;
	var calculoPrecioFinal;
	var mensaje;

	estacionClimatica = document.getElementById('txtIdEstacion').value;
	destinoVacacional = document.getElementById('txtIdDestino').value;


	switch(estacionClimatica)
	{
		case "Invierno":
		{
			switch(destinoVacacional)
			{
				case "Bariloche":
					cambioPrecio = 1.2;
					break;
				case "Cordoba":
				case "Cataratas":
					cambioPrecio = 0.9;
					break;
				case "Mar del plata":
					cambioPrecio = 0.8;
					break;
			}
		}
		break;
		case "Verano":
		{
			switch(destinoVacacional)
			{
				case "Bariloche":
					cambioPrecio = 0.8;
					break;
				case "Cordoba":
					cambioPrecio = 1.1;
					break;
				case "Cataratas":
					cambioPrecio = 1.1;
					break;
				case "Mar del plata":
					cambioPrecio = 1.2;
					break;
			}
		}
		break;
		case "Otoño":
		case "Primavera":
		{
			switch(destinoVacacional)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					cambioPrecio = 1.1;
					break;
				case "Cordoba":
					cambioPrecio = 1;
					break;
			}
		}
		break;
	}

	calculoPrecioFinal = 15000 * cambioPrecio;

	mensaje = "El precio de la estadía es de: " + calculoPrecioFinal;

	alert(mensaje);


}
