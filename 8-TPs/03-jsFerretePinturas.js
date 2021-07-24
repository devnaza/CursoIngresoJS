/*3.	
Autor: Nazareno Santa Cruz
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos 
mostrar la temperatura en Centígrados con un mensaje 
concatenado (ej.: " 32 Fahrenheit son 0 centígrados").

B.	Al ingresar una temperatura en Centígrados 
debemos mostrar la temperatura en Fahrenheit 
(ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheitIngresado;
	var conversionCentigrados;

	fahrenheitIngresado = document.getElementById('txtIdTemperatura').value;
	fahrenheitIngresado = parseInt(fahrenheitIngresado);

	// Fórmula conversión Fahrenheit a Centigrados: (fahrenheit − 32) × 5/9

	conversionCentigrados = (fahrenheitIngresado - 32) * 5/9;

	alert(fahrenheitIngresado + ' Fahrenheit son ' + conversionCentigrados + ' centígrados');
}

function CentigradosFahrenheit () 
{
	var centigradoIngresado;
	var conversionFahrenheit;

	centigradoIngresado = document.getElementById('txtIdTemperatura').value;
	centigradoIngresado = parseInt(centigradoIngresado);

	// Fórmula conversión Centígrados a Fahrenheit: centigrado × 9/5 + 32

	conversionFahrenheit = centigradoIngresado * 9/5 + 32;

	alert(centigradoIngresado + ' centígrados son ' + conversionFahrenheit + ' Fahrenheit');
}
