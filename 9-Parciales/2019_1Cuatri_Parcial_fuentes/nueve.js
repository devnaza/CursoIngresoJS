/*
Autor: Nazareno Santa Cruz
Bienvenidos.

Realizar el algoritmo que permita ingresar:

1. el nombre de un país, 
2. cantidad de habitantes en millones entre 1 y 7000 (validar)
3. la temperaruta mínima que se registra en su territorio(entre -50 y 50) 


hasta que el usuario quiera e informar al terminar el ingreso por document.write:


a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.

Testeo con los siguientes valores
(pais=argentina;habitantes = 50; t =-300(mal) ,-15(bien) )
(pais=tunes;habitantes = 10; t =1 )
(pais=islandia;habitantes = -150(mal), 15(bien); t =-13 )
(pais=china;habitantes = 2000; t =-12 ) 

*/

function mostrar()
{

	var paisIngresado;
	var cantidadHabitantesIngresado;

	var temperaturaIngresada;
	var temperaturaMinima;

	var paisMenosPoblado;
	var poblacionMinima;
	var sumaHabitantes;

	var promedioTotalHabitantes;
	var contadorIngresos;

	var cantidadTemperaturasPares;

	var cantidadPaisesCalurosos;
	var calculoParidad;

	var controlDatos;
	var controlPais; // puedo definirla afuera

	var banderaHabitantes;
	var banderaTemperatura;

	var temperaturaMinima;
	var paisMasFrio;

	cantidadTemperaturasPares = 0;
	banderaHabitantes = 0;
	controlPais = 1;
	cantidadPaisesCalurosos = 0;
	sumaHabitantes = 0;
	contadorIngresos = 0;
	banderaTemperatura = 0;


	do
	{
		
		// Nombre de país ingresado

		do
		{
			paisIngresado = prompt("Ingrese el nombre del país.");
		} while (controlPais == 0);

		// Cantidad habitantes ingresados

		do
		{
			cantidadHabitantesIngresado = prompt("Ingrese la población del país.");
			cantidadHabitantesIngresado = parseInt(cantidadHabitantesIngresado);
		} while (cantidadHabitantesIngresado < 1 || cantidadHabitantesIngresado > 7000);

		// Temperatura ingresada

		do
		{
			temperaturaIngresada = prompt("Ingrese la temperatura del país.");
			temperaturaIngresada = parseInt(temperaturaIngresada);
		} while(temperaturaIngresada < -50 || temperaturaIngresada > 50);

		// a) La cantidad de temperaturas pares.

		calculoParidad = temperaturaIngresada % 2;

		if(calculoParidad == 0)
		{
			cantidadTemperaturasPares++;
		}

		// b) El nombre del pais con menos habitantes

		if(banderaHabitantes == 0)
		{
			
			poblacionMinima = cantidadHabitantesIngresado;
			paisMenosPoblado = paisIngresado;
			banderaHabitantes = 1;
		}
		else
		{
			if(cantidadHabitantesIngresado < poblacionMinima)
			{
				poblacionMinima = cantidadHabitantesIngresado;
				paisMenosPoblado = paisIngresado;
			}
		}

		// c) la cantidad de paises que superan los 40 grados.

		if(temperaturaIngresada > 40)
		{
			cantidadPaisesCalurosos++;
		}

		// d) el promedio de habitantes entre los paises ingresados

		sumaHabitantes = sumaHabitantes + cantidadHabitantesIngresado;

		// f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.

		if(banderaTemperatura == 0)
		{
			temperaturaMinima = temperaturaIngresada;
			paisMasFrio = paisIngresado;
			banderaTemperatura = 1;
		}
		else
		{
			if(temperaturaIngresada < temperaturaMinima)
			{
				temperaturaMinima = temperaturaIngresada;
				paisMasFrio = paisIngresado;
			}
		}

		contadorIngresos++;
		controlDatos = prompt("Presiona \"s\" para ingresar otro país y sus datos.");
	} while (controlDatos == "s");


	promedioTotalHabitantes = sumaHabitantes / contadorIngresos;

	// Salida

	/* 
	a) La cantidad de temperaturas pares.
	b) El nombre del pais con menos habitantes
	c) la cantidad de paises que superan los 40 grados.
	d) el promedio de habitantes entre los paises ingresados
	f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.

	*/

	document.write("<br>La cantidad de temperaturas pares es de: " + cantidadTemperaturasPares +
					"<br>El nombre de país con menos habitantes es: " + paisMenosPoblado +
					"<br>La cantidad de países que superan los 40 grados es de: " + cantidadPaisesCalurosos +
					"<br>El promedio de habitantes entre los países ingresados es: " + promedioTotalHabitantes +
					"<br>La temperatura mínima ingresada y su país es: " + temperaturaMinima + " y corresponde a: " + paisMasFrio);


}
