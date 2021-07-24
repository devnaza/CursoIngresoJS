/*
Autor: Nazareno Santa Cruz
El departamento de NUMEROS ESPECIALES del instituto matemático FonteCristo nos está pidiendo una aplicación que verifique las distintas cualidades de los números.
Para cada una de estas acciones debemos realizar la lógica para verificar las cualidades pedidas:
A. Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
B. Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
C. Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
D. Se pedirán un número positivo y se mostrará si el número es un número primo o no.
E. Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero. 
*/


// Hacer 5 funciones, una para cada botón.


// A. Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.

function NumerosPares() 
{
 	var numeroPositivoIngresado;
 	var contadorPares;

 	contadorPares = 0;

 	numeroPositivoIngresado = document.getElementById('txtIdNumero').value;
	numeroPositivoIngresado = parseInt(numeroPositivoIngresado);

 	while (numeroPositivoIngresado < 1 || isNaN(numeroPositivoIngresado))
 	{
 		numeroPositivoIngresado = prompt("Por favor. Ingrese un número positivo.");
 		numeroPositivoIngresado = parseInt(numeroPositivoIngresado);
 	}

 	do
 	{

		if(numeroPositivoIngresado % 2 == 0) // Se puede hacer todo ahí
		{
			contadorPares++;
		}

		numeroPositivoIngresado--; // Con cada número, tengo que testear si es o si no es par. El 0 no testeo.

 	} while (numeroPositivoIngresado > 0); 	


 	document.write("Cantidad de números pares: " + contadorPares);

}


// B. Se pedirán un número positivo y se mostrará la cantidad de números IMPARES desde el número ingresado hasta el cero.


function NumerosImpares()
{
	var numeroPositivoIngresado;
	var contadorImpares;

	contadorImpares = 0;

	numeroPositivoIngresado = document.getElementById('txtIdNumero').value;
	numeroPositivoIngresado = parseInt(numeroPositivoIngresado);


	while (numeroPositivoIngresado < 1 || isNaN(numeroPositivoIngresado)) // No acepta al 0
	{
		numeroPositivoIngresado = prompt("Por favor. Ingrese un número positivo.");
		numeroPositivoIngresado = parseInt(numeroPositivoIngresado);
	}

	do
	{
		if (numeroPositivoIngresado % 2 == 0)
		{
			contadorImpares++;
		}

		numeroPositivoIngresado--;

	} while (numeroPositivoIngresado > 0); // El tema es que no divida al 0

}

// C. Se pedirá un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.

function NumerosDivisibles()
{
	var numeroPositivoIngresado;
	var contadorDivisibles;
	var divisor;

	contadorDivisibles = 0;
	divisor = 1; // Pide que se haga en orden ascendiente.

	numeroPositivoIngresado = document.getElementById('txtIdNumero').value;
	numeroPositivoIngresado = parseInt(numeroPositivoIngresado);


	while (numeroPositivoIngresado < 1 || isNaN(numeroPositivoIngresado)) // No acepta al 0
	{
		numeroPositivoIngresado = prompt("Por favor. Ingrese un número positivo.");
		numeroPositivoIngresado = parseInt(numeroPositivoIngresado);
	}

	do
	{
		if(numeroPositivoIngresado % divisor == 0)
		{
			contadorDivisibles++;
		}

		divisor++; // Suma a 101 y de ahí no repite.
	} while (divisor < 101); // Incluyo al 100.

	document.write(contadorDivisibles);
}

// D. Se pedirán un número positivo y se mostrará si el número es un número primo o no.

// Que el número se divida desde él mismo hasta el 1. Si solo tiene 2 divisores -> es primo.

function VerificarPrimo()
{
	var numeroPositivoIngresado;
	var divisor;
	var contadorPrimo;

	contadorPrimo = 0;

	numeroPositivoIngresado = document.getElementById('txtIdNumero').value;
	numeroPositivoIngresado = parseInt(numeroPositivoIngresado);


	while (numeroPositivoIngresado < 1 || isNaN(numeroPositivoIngresado)) // No acepta al 0
	{
		numeroPositivoIngresado = prompt("Por favor. Ingrese un número positivo.");
		numeroPositivoIngresado = parseInt(numeroPositivoIngresado);
	}

	divisor = numeroPositivoIngresado;

	do
	{
		if(numeroPositivoIngresado % divisor == 0)
		{
			contadorPrimo++;
		}

		divisor--; // Suma a 101 y de ahí no repite.
	} while (divisor > 0);

	if(contadorPrimo == 2)
	{
		document.write("Es un número primo.");
	}
	else
	{
		document.write("El número NO es primo.");
	}

}

// E. Se pedirán un número positivo y se mostrará la cantidad de números primos desde el número ingresado hasta el cero. 


function NumerosPrimos()
{
	var numeroPositivoIngresado;
	var divisor;
	var contadorDivisibles;
	var contadorPrimos;

	contadorPrimos = 0;

	numeroPositivoIngresado = document.getElementById('txtIdNumero').value;
	numeroPositivoIngresado = parseInt(numeroPositivoIngresado);


	while (numeroPositivoIngresado < 1 || isNaN(numeroPositivoIngresado)) // No acepta al 0
	{
		numeroPositivoIngresado = prompt("Por favor. Ingrese un número positivo.");
		numeroPositivoIngresado = parseInt(numeroPositivoIngresado);
	}


	// E. Se pedirán un número positivo y se mostrará la cantidad de números primos desde el número ingresado hasta el cero. 

	// divisor = numeroPositivoIngresado; // desde el número ingresado

	
	do
	{
		divisor = numeroPositivoIngresado;
		contadorDivisibles = 0; // Acordarse. En lo que más tardé fue en acordarme q tengo que reestablecer la var.

		// "El número 1 no es un primo, ya que solo tiene un divisor"

		do // Acá verifico si es primo. numIngresado tiene q ser divisible solo por 2.
		{
			if (numeroPositivoIngresado % divisor == 0)
			{
				contadorDivisibles++;
			}

			divisor--; // esto es para que divida al mismo número por todos hasta llegar a 0.           

		} while (divisor > 0);

		if (contadorDivisibles == 2) // Si es primo, lo cuento. Lo tengo que restaurar a este, cada vez que arranca. Si no me guarda valores de antes. (Tengo Screenshot del depurador en notas)
		{
			contadorPrimos++;
		}

		numeroPositivoIngresado--; // Para que pruebe con un nº menor al ingresado.

	} while (numeroPositivoIngresado > 0); // no divido por 0 porque da cualquier cosa

	
	document.write(contadorPrimos);
	
}


