/* 
Autor: Nazareno Santa Cruz
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje: 
"ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, 
que sumados son xx kilos y el promedio de peso xx ".*/

function mostrar()
{
 	var nombreUno;
	var pesoUno; 	
	var nombreDos;
 	var pesoDos;
 	var pesoSumado;
 	var pesoPromedio;

 	// Entrada
 	nombreUno = prompt('Ingrese el NOMBRE de uno de los integrantes de la pareja');
 	pesoUno = prompt('Ingrese el PESO en kilos de uno de los integrantes de la pareja');
 	pesoUno = parseInt(pesoUno);

 	nombreDos = prompt('Ingrese el NOMBRE del otro integrante de la pareja');
 	pesoDos = prompt('Ingrese el PESO en kilos del otro integrante de la pareja');
 	pesoDos = parseInt(pesoDos);

 	// Proceso
 	var pesoSumado = pesoUno + pesoDos;
 	var pesoPromedio = pesoSumado / 2;
 	
 	var mensaje = "Ustedes se llaman " + nombreUno + " y " + nombreDos +  
 	" y pesan " + pesoUno + " y " + pesoDos + ", que sumados son " + 
 	pesoSumado + " kilos y el promedio de peso " + pesoPromedio + ".";

 	// Salida

 	alert(mensaje);
}
