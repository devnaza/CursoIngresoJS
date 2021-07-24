/*
Autor: Nazareno Santa Cruz
Al presionar el botón pedir números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var banderaPositivos;
	var banderaNegativos;
	var numeroIngresado;
	// 1. 2.
	var sumaNegativos;
	var sumaPositivos;
	// 3. 4.
	var contadorPositivos;
	var contadorNegativos;
	// 5. 6.
	var cantidadCeros;
	var cantidadPares;
	// 7. 8.
	var promedioPositivos;
	var promedioNegativos;
	// 9.
	var diferenciaSignos;

	// Inicialización de variables
	// PREG. SI HAY Q INICIALIZARLAS. CREO Q SI XQ AHÍ VAN NºS
	banderaPositivos = 0;
	banderaNegativos = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;
	// 3. 4.
	contadorPositivos = 0;
	contadorNegativos = 0;
	// 5. 6.
	cantidadCeros = 0;
	cantidadPares = 0; 


	// Acá lo de la bandera no es relevante porque no hay multiplicación por 0

	do
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > -1)
		{
			banderaPositivos = 1;

			sumaPositivos = sumaPositivos + numeroIngresado;
			contadorPositivos++;

			if(numeroIngresado == 0)
			{
				cantidadCeros++;
			}
		}
		else
		{
			if(numeroIngresado < 0)
			{
				banderaNegativos = 1;
				sumaNegativos = sumaNegativos + numeroIngresado;
				contadorNegativos++;
			}
		}

		chequeadorPares = numeroIngresado % 2;

		if(chequeadorPares == 0)
		{
			cantidadPares++;
		}

		respuesta = prompt("Escriba 'si' si desea añadir otro número.");
	} while(respuesta == "si");

	if(banderaPositivos == 1)
	{
		promedioPositivos = sumaPositivos / contadorPositivos;
	}
	else
	{
		promedioPositivos = "No se ingresaron números positivos.";
	}


	if(banderaNegativos == 1)
	{
		promedioNegativos = sumaNegativos / contadorNegativos;
	}
	else
	{
		promedioNegativos = "No se ingresaron números negativos.";
	}

	if(banderaPositivos == 1 && banderaNegativos == 1)
	{
		diferenciaSignos = sumaPositivos - sumaNegativos;
	}
	else
	{
		diferenciaSignos = "Faltan datos de positivos o de negativos.";
	}


	document.write("La suma de negativos es: " + sumaNegativos +  
					"<br>La suma de positivos es: " + sumaPositivos +
					"<br>La cantidad de positivos es: " + contadorPositivos +
					"<br>La cantidad de negativos es: " + contadorNegativos +
					"<br>La cantidad de ceros es: " + cantidadCeros +
					"<br>La cantidad de pares es: " + cantidadPares +
					"<br>El promedio de positivos es: " + promedioPositivos +
					"<br>El promedio de negativos es: " + promedioNegativos +
					"<br>La diferencia entre positivos y negativos es: " + diferenciaSignos);
}//FIN DE LA FUNCIÓN