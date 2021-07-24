/*
Autor: Nazareno Santa Cruz
Bienvenidos (SOLO IF). 
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras

Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20% 

*/

function mostrar()
{
	var continenteDestino;
	var cantidadDias;
	var metodoPago;
	var precioSinDescuento;
	var precioFinal;


	// Entrada
	cantidadDias = prompt("Ingrese la cantidad de días");
	metodoPago = prompt("Ingrese el método de pago: \n-Débito, \n-MercadoPago \n-Efectivo");
	continenteDestino = document.getElementById('Marca').value;
	

	// Proceso
	cantidadDias = parseInt(cantidadDias);
	precioSinDescuento = cantidadDias * 100; // Precio bruto por día
	metodoPago = metodoPago.toLowerCase();
	
	if(continenteDestino == "América")
	{
		precioFinal = precioSinDescuento * 0.5;

		if(metodoPago == "débito")
		{
			precioFinal = precioFinal * 0.9
		}
	}
	else
	{
		if(continenteDestino == "África")
		{
			precioFinal = precioSinDescuento * 0.4;

			if(metodoPago == "mercadoPago" || metodoPago == "efectivo")
			{
				precioFinal = precioFinal * 0.85;
			}
		}
		else
		{
			if(continenteDestino == "Europa")
			{
				precioFinal = precioSinDescuento * 0.8;

				if(metodoPago == "débito")
				{
					precioFinal = precioFinal * 0.85;
				}
				else
				{
					if(metodoPago == "mercadoPago")
					{
						precioFinal = precioFinal * 0.9;
					}
					else
					{
						precioFinal = precioFinal * 0.95;
					}
				}
			}
			else
			{
				precioFinal = precioSinDescuento * 1.2;
			}
		}
	}

	alert("El precio final es de: " + precioFinal + ".");

}
