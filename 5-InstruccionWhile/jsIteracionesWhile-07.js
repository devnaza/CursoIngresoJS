/*
Autor: Nazareno Santa Cruz
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta = 'S';


	while(respuesta == "S") // ACORDARSE DEL DOBLE SIGNO
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;


		contador++;
		respuesta = prompt("¿Desea ingresar otro número? Escriba 'S' para afirmar."); // no estoy validando esto
	}

	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = acumulador/contador;

}//FIN DE LA FUNCIÓN