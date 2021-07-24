/*1.	
Autor: Nazareno Santa Cruz
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUnoSuma;
	var precioDosSuma;
	var precioTresSuma;
	var suma;

	precioUnoSuma = document.getElementById('txtIdPrecioUno').value;
	precioUnoSuma = parseInt(precioUnoSuma);

	precioDosSuma = document.getElementById('txtIdPrecioDos').value;
	precioDosSuma = parseInt(precioDosSuma);

	precioTresSuma = document.getElementById('txtIdPrecioTres').value;
	precioTresSuma = parseInt(precioTresSuma);

	suma = precioUnoSuma + precioDosSuma + precioTresSuma;

	alert('La suma de los tres productos es: ' + suma + '.');
}
function Promedio () 
{
	var precioUnoPromedio;
	var precioDosPromedio;
	var precioTresPromedio;
	var promedio;

	precioUnoPromedio = document.getElementById('txtIdPrecioUno').value;
	precioUnoPromedio = parseInt(precioUnoPromedio);

	precioDosPromedio = document.getElementById('txtIdPrecioDos').value;
	precioDosPromedio = parseInt(precioDosPromedio);

	precioTresPromedio = document.getElementById('txtIdPrecioTres').value;
	precioTresPromedio = parseInt(precioTresPromedio);

	promedio = (precioUnoPromedio + precioDosPromedio + precioTresPromedio) / 3;

	alert('El promedio de los tres productos es: ' + promedio + '.');
}
function PrecioFinal () 
{
	var precioUnoFinal;
	var precioDosFinal;
	var precioTresFinal;
	var sumaFinal;

	precioUnoFinal = document.getElementById('txtIdPrecioUno').value;
	precioUnoFinal = parseInt(precioUnoFinal);

	precioDosFinal = document.getElementById('txtIdPrecioDos').value;
	precioDosFinal = parseInt(precioDosFinal);

	precioTresFinal = document.getElementById('txtIdPrecioTres').value;
	precioTresFinal = parseInt(precioTresFinal);

	sumaFinal = (precioUnoFinal + precioDosFinal + precioTresFinal) * 1.21;

	alert('La suma de los tres productos es: ' + sumaFinal + '.');
}