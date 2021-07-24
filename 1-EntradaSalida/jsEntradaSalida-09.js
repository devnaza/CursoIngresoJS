/*
Autor: Nazareno Santa Cruz
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO". 
function mostrarAumento()
{
	var sueldo;

	// No sé si con una variable está bien o estoy 'ahorrando' mucho


	sueldo = document.getElementById('txtIdSueldo').value;
	sueldo = parseInt(sueldo); // Para que el número ingresado pase a ser una int y se pueda calcular
	sueldo = sueldo * 1.1;

	document.getElementById('txtIdResultado').value = sueldo;
}
*/

/*
Autor: Nazareno Santa Cruz
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO". 
function mostrarAumento() */ 

//Otra forma de hacer el 9 bis es multiplicar por el porcentaje (numero/100) y luego, a eso
//se lo sumo o se lo resto


function mostrarAumento()
{
	var porcentaje;
	var sueldo;
	var sueldoAumentado;

	porcentaje = prompt('¿Por qué porcentaje desea aumentar su sueldo?', 'Del 1 al 100');
	porcentaje = parseInt(porcentaje);
	porcentaje = 1 + porcentaje / 100; // porque así hago que dé por ej 1.1 para dps multiplicar

	sueldo = document.getElementById('txtIdSueldo').value;
	sueldo = parseInt(sueldo); // Para que el número ingresado pase a ser una int y se pueda calcular

	sueldoAumentado = sueldo * porcentaje;

	document.getElementById('txtIdResultado').value = sueldoAumentado;
}
