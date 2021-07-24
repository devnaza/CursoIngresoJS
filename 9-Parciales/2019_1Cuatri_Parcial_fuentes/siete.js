/* 
Autor: Nazareno Santa Cruz
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las 
alturas en centimetros (validar entre 0 y 250) y el sexo. (validar el sexo “f” o “m”)
de 5 jugadores de básquet, informar por alert:

a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de mujeres que su altura supere los 190 centimetros.

Modifiqué una línea en comparación al anterior que entregué. 

*/

function mostrar()
{
	var alturaIngresada;
	var sexoIngresado;
	var contadorJugadores;
	var banderaAlturas; // para diferenciar entre 1º altura y el resto q se comparan 
	var alturaMinima;
	var mujeresAltas;
	var alturaPromedio;
	var alturaTotal;
	var sexoMinimo;

	mujeresAltas = 0;
	contadorJugadores = 0;
	banderaAlturas = 0;
	alturaTotal = 0;

	do
	{
		
		do
		{
			alturaIngresada = prompt("Ingrese una altura en centimentros entre 0 y 250.");
			alturaIngresada = parseInt(alturaIngresada);
		} while (alturaIngresada < 0 || alturaIngresada > 250); // No existe nº que difiera a AMBOS

		
		// a) Alturas totales.

		alturaTotal = alturaTotal + alturaIngresada;

		do
		{
			sexoIngresado = prompt("Ingrese sexo \n\"f\" para femenino \n\"m\" para masculino");
		} while (sexoIngresado != "f" && sexoIngresado != "m"); // En este caso si existen letras diferentes a ambos.

		if (banderaAlturas == 0)
		{
			alturaMinima = alturaIngresada;
			sexoMinimo = sexoIngresado;
			banderaAlturas = 1;
		}
		else
		{
			if(alturaIngresada < alturaMinima) // b) La altura más baja y el sexo de esa persona. No entra acá si no se cumple esto.
			{
				alturaMinima = alturaIngresada;
				sexoMinimo = sexoIngresado;
			}
		}

		if(alturaIngresada > 190 && sexoIngresado == "f") // c) La cantidad de mujeres que su altura supere los 190 centimetros.
		{
			mujeresAltas++;
		}

		contadorJugadores++;

	} while (contadorJugadores < 5);

	// Detalles del sexo de mínima altura
	if(sexoMinimo == "f")
	{
		sexoMinimo = "femenino";
	}
	else
	{
		sexoMinimo = "masculino";
		/* if(sexoMinimo == "m")
		{
			sexoMinimo = "masculino";
		}
		else
		{
			sexoMinimo = "los más bajos tienen misma altura y distintos sexos"; // no entiendo xq tira esto y no el 1º ingresado. NO, ESTO APARECÍA PORQUE NO DEFINÍA SEXOMINIMO=SEXOINGRESADO CUANDO BANDERA == 0.
		} */
	}

	// a) El promedio de las alturas totales.
	alturaPromedio = alturaTotal / 5;

	document.write("El promedio de las alturas totales es de: " + alturaPromedio +
					"<br> La altura más baja y el sexo de esa persona es: " + alturaMinima + " cm. " + "y " + sexoMinimo +
					"<br> La cantidad de mujeres cuya altura supera los 190 cm. es: " + mujeresAltas);

}
