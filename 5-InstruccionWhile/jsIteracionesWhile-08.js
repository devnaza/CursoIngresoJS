/*
Autor: Nazareno Santa Cruz
Al presionar el botón pedir números hasta que el usuario quiera,

SUMAR los que son POSITIVOS
multiplicar los negativos.

Toman a 0 como positivo
 */
function mostrar()
{
	// declaración de variables X

	var numeroIngresado; // no inicializo xq se lo pido al user
	var sumaPositivos;
	var multiplicacionNegativos;
	var seguir; // variable de control
	var flag;

	sumaPositivos = 0;
	multiplicacionNegativos = 1; 
	flag = 0;

	do{
		numeroIngresado = prompt("Ingrese un número: ");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > -1)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;

			flag = 1;
		}

		seguir = prompt("Quiere ingresar otro número? Presione 's'");
	} while(seguir == 's');

	if(flag == 0)
	{
		multiplicacionNegativos = 0;
	}

	document.getElementById('txtIdSuma').value = sumaPositivos;
	document.getElementById('txtIdProducto').value = multiplicacionNegativos;

	// Problema: si no ingresas ningún negativo, de todas formas da un 1.




	/* var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si'; */

	/* while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado > 0) // se debe poder hacer con while
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			if(numeroIngresado < 0)
			{
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			}
		}

		respuesta = prompt("¿Desea ingresar otro número? Escriba 'si' para afirmar."); */

		/* while(respuesta == "si")
		{
			numeroIngresado = prompt("Ingrese un número");
			numeroIngresado = parseInt(numeroIngresado);
		
			while(numeroIngresado > 0) // se debe poder hacer con while
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				numeroIngresado = 0; // no porque se sobreescribe en cada while
			}
			while(numeroIngresado < 0)
			{
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
				numeroIngresado = 0;
			}

			respuesta = prompt("¿Desea ingresar otro número? Escriba 'si' para afirmar.");
		}

	document.getElementById('txtIdSuma').value = sumaPositivos;
	document.getElementById('txtIdProducto').value = multiplicacionNegativos; */

}//FIN DE LA FUNCIÓN



