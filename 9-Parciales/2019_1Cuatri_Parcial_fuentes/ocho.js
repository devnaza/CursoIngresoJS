/* 
Autor: Nazareno Santa Cruz


Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos,
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:


a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7) */

function mostrar()
{
	var numeroIngresado;
	var letraIngresada;
	var controlContinuar;
	
	var cantidadPares;
	var cantidadImpares;
	var cantidadCeros;


	var contadorPositivos;
	var contadorNegativos;

	var acumuladorPositivos;
	var acumuladorNegativos;

	var promedioPositivos;

	var calculoParidad;

	var numeroMaximo;
	var letraMaxima;

	var numeroMinimo;
	var letraMinima;
	
	var banderaChar;
	var banderaMaxMin;

	banderaMaxMin = 0;
	cantidadPares = 0;
	cantidadCeros = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	acumuladorPositivos = 0;
	acumuladorNegativos = 0;
	cantidadPares = 0;
	cantidadImpares = 0;

	do
	{
		do
		{
			numeroIngresado = prompt("Ingrese un número entre -100 y 100");
			numeroIngresado = parseInt(numeroIngresado);
		} while (numeroIngresado < -100 || numeroIngresado > 100);


		// ¿cómo valido un char? no voy a validar xq no sé. lo dejo (hasta que averigue cómo) a 
		// fe del usuario

		do
		{
			letraIngresada = prompt("Por favor, ingrese una sola letra.");

			banderaChar = 0;
		} while (banderaChar == 1); // Para que lo haga una sola vez.


		if(banderaMaxMin == 0)
		{
			numeroMaximo = numeroIngresado;
			letraMaxima = letraIngresada;
			numeroMinimo = numeroIngresado;
			letraMinima = letraIngresada;

			banderaMaxMin = 1;
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
				letraMaxima = letraIngresada;
			}
			else
			{
				if(numeroIngresado < numeroMinimo)
				{
					numeroMinimo = numeroIngresado;
					letraMinima = letraIngresada;
				}
			}
		}

		calculoParidad = numeroIngresado % 2;

		if(calculoParidad == 0)
		{
			cantidadPares++;
		}
		else
		{
			cantidadImpares++;
		}

		if(numeroIngresado > 0)
		{
			acumuladorPositivos = acumuladorPositivos + numeroIngresado;
			contadorPositivos++;
		}
		else
		{
			if(numeroIngresado < 0)
			{
				acumuladorNegativos = acumuladorNegativos + numeroIngresado;
				contadorNegativos++;
			}
			else
			{
				cantidadCeros++;
			}
		}


		controlContinuar = prompt("Presione \"s\" para ingresar otra letra y otro número");
	} while(controlContinuar == "s");

	promedioPositivos = acumuladorPositivos / contadorPositivos;

	/* a) La cantidad de números pares.
	b) La cantidad de números impares.
	c) La cantidad de ceros.
	d) El promedio de todos los números positivos ingresados.
	e) La suma de todos los números negativos.
	f) El número y la letra del máximo y el mínimo. */

	document.write("La cantidad de números pares es de: " + cantidadPares +
					"<br>La cantidad de números impares es de: " + cantidadImpares+
					"<br>La cantidad de ceros es de: " + cantidadCeros +
					"<br>El promedio de todos los positivos es igual a: " + promedioPositivos +
					"<br>La suma de los números negativos es: " + acumuladorNegativos + 
					"<br>El número y la letra del máximo son: " + numeroMaximo + " y " + letraMaxima +
					"<br>El número y la letra del mínimo son: " + numeroMinimo + " y " + letraMinima);
}
