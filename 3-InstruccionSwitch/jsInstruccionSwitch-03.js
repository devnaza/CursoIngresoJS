/*
Autor: Nazareno Santa Cruz
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días" 
*/



function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;

	mesDelAño = document.getElementById('txtIdMes').value;
	mensaje = "Este mes tiene 30 o más días";

	switch(mesDelAño)
	{
		case 'Febrero': 
			mensaje = "Este mes no tiene más de 29 días.";
	}

	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN