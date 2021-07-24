/*
Autor: Nazareno Santa Cruz
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. */


function mostrar()
{
	//tomo el mes
	var mesDelAño; 
	var mensaje;

	mesDelAño = document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "El mes tiene 30 días";
			break;
		case "Febrero":
			mensaje = "El mes tiene 28 días";
			break;
		default:
			mensaje = "El mes tiene 31 días";
	}




	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN