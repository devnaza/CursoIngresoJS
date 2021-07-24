/* 
Autor: Nazareno Santa Cruz
Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo 
equilátero por prompt y que muestre el perímetro por alert. 

*/

function mostrar()
{
	var lado;
	var calculoPerimetro;
	var mensaje;


	// Entrada y parseo
	lado = prompt('Ingrese la longitud del lado del triángulo');
	lado = parseInt(lado);

	// Proceso
	calculoPerimetro = lado * 3;
	mensaje = "El perímetro del triángulo es igual a: " + calculoPerimetro + ".";

	// Salida
	alert(mensaje);
}


/* var base;
	var altura;
	var calculoEquilatero;
	var mensaje;

	// Entrada y parseo

	base = prompt('Ingrese la base del triángulo');
	base = parseInt(base);

	altura = prompt('Ingrese la altura del triángulo');
	altura = parseInt(altura);

	// Proceso

	calculoEquilatero = (base * altura)/2
	mensaje = "El " */ 
