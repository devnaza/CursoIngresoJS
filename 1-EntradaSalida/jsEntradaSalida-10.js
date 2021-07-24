/*
Autor: Nazareno Santa Cruz
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
function mostrarAumento()
{
	var importe;

	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt(importe); // Para que el número ingresado pase a ser una int y se pueda calcular
	importe = importe * 0.75;

	document.getElementById('txtIdResultado').value = importe;
}  */


/*
Autor: Nazareno Santa Cruz
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del PORCENTAJE INDICADO
en el cuadro de texto "RESULTADO"*/


/* El profesor lo hace sacando la cantidad que se descuenta y luego restandosela al importe. Más separado.
 También, si se hace como él, se puede mostrar la cantidad de $ que se descontó */

function mostrarAumento()
{
	var porcentaje;
	var importe;
	var importeModificado;
	var mensaje;

	// Entrada

	porcentaje = prompt('¿Desea realizar un descuento de qué porcentaje?', 'Del 1% al 100%. Omitir el signo.');
	porcentaje = parseInt(porcentaje);
	// porcentaje = 1 - porcentaje / 100; // Si quieren descontar el .25, esto da .75 (estoy mezclando entrada en proceso haciendo la cuenta acá)

	importe = document.getElementById('txtIdImporte').value; // Acá escribe el importe
	importe = parseInt(importe); 

	// Proceso

	porcentaje = 1 - porcentaje / 100;
	importeModificado = importe * porcentaje;
	mensaje = "El importe final es de: $" + importeModificado + ".";

	// Salida

	document.getElementById('txtIdResultado').value = mensaje;
}
