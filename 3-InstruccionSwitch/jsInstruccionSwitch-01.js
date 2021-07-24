/* Autor: Nazareno Santa Cruz

al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."

*/

function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;

	mesDelAño = document.getElementById('txtIdMes').value; // también se puede: txtIdMes.value
	mensaje = "No ingreso mes con eventos importantes";

	switch(mesDelAño)
	{
		case 'Enero':
			mensaje = "que comiences bien el año!!!.";
			break;
		case 'Marzo':
			mensaje = "a clases!!!.";
			break;
		case 'Julio':
			mensaje = "se vienen las vacaciones!!!";
			break;
		case 'Diciembre':
			mensaje = "Felices fiesta!!!.";
			break;
		// default:
			 // mensaje = "No ingreso mes con eventos importantes"; // se puede poner arriba
			// break; el último no hace ponerlo.
	}

	alert(mensaje);



}//FIN DE LA FUNCIÓN