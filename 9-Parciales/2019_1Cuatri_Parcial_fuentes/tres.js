/* 
Autor: Nazareno Santa Cruz
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id. 

*/

function mostrar()
{
	var precio;
	var porcentajeDescuento; 
	var precioFinal;
	var descuentoNeto;
	var mensaje;

	// Entrada
	precio = prompt('Ingrese el precio del artículo.');
	precio = parseInt(precio);

	porcentajeDescuento = prompt('Ingrese el % de descuento.');
	porcentajeDescuento = parseInt(porcentajeDescuento);
	porcentajeDescuento = porcentajeDescuento / 100;

	// Proceso
	descuentoNeto = precio * porcentajeDescuento;
	precioFinal = precio - descuentoNeto;
	mensaje = "El precio final del producto es: " + precioFinal + ".";

	// Salida
	document.getElementById('elPrecioFinal').value = mensaje;
}
