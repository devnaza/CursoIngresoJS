/*
Autor: Nazareno Santa Cruz

Bienvenidos (IF).
Pedir dos números y mostrar el resultado:


Si son iguales los muestro concatenados. // A
Si el primero es mayor, los resto, // B
de lo contrario los sumo. // C
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje "la resta es xxx y superó el 10". // D  


*/
function mostrar()
{
	var numeroUno;
	var numeroDos;
	var cuenta;

	// Entrada
	numeroUno = prompt("Ingrese el 1º número");
	// numeroUno = parseInt(numeroUno);		// Creo que recomienda ponerlo después al parseint para este caso

	numeroDos = prompt("Ingrese el 2º número");
	// numeroDos = parseInt(numeroDos);

	// Proceso
	if(numeroUno == numeroDos)
	{
		cuenta = numeroUno + numeroDos; // No tienen que estar parseados acá. Sin el else if todo junto no se hubiera podido parsear acá y usar menos recursos
	}
	else
	{
		numeroUno = parseInt(numeroUno);
		numeroDos = parseInt(numeroDos);

		if(numeroUno > numeroDos)
		{
			cuenta = numeroUno - numeroDos;
			if (cuenta > 10)
			{
				cuenta = "La resta es " + cuenta + " y superó el 10.";
			}
		}
		else
		{
			cuenta = numeroUno + numeroDos;
		}
	}

	// Salida 

	alert(cuenta);
}
