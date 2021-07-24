/* 
Autor: Nazareno Santa Cruz
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.

	
	La peor forma es enunciar todos los casos

	case 'Enero' 
	case 'Febrero' 
	case 'Marzo' 
	case 'Abril'
	case 'Mayo'
	case 'Junio'
	case 'Julio' 
	case 'Agosto' 
	case 'Septiembre' 
	case 'Octubre' 
	case 'Noviembre' 
	case 'Diciembre' 

	Julio-Agosto: Abrigate que hace frío
	Septiembre-Marzo: Ya pasamos el frío, ahora hace calor
	Abril-Junio: falta para el invierno

	sep->marzo: calor  */

/* La peor forma:

function mostrar()
{
	//tomo el mes
	var mesDelAño; 
	var mensaje;

	mesDelAño = document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case 'Enero':
			mensaje = "Ya pasamos el frío, ahora hace calor";
			break;
		case 'Febrero': 
			mensaje = "Ya pasamos el frío, ahora hace calor";
			break;
		case 'Marzo':
			mensaje = "Ya pasamos el frío, ahora hace calor";
			break;
		case 'Abril':
			mensaje = "Falta para el invierno";
			break;
		case 'Mayo':
			mensaje = "Falta para el invierno";
			break;
		case 'Junio':
			mensaje = "Falta para el invierno";
			break;
		case 'Julio':
			mensaje = "Abrigate que hace frío";
			break;
		case 'Agosto':
			mensaje = "Abrigate que hace frío";
			break;
		case 'Septiembre': 
			mensaje = "Ya pasamos el frío, ahora hace calor";
			break;
		case 'Octubre':
			mensaje = "Ya pasamos el frío, ahora hace calor";
			break;
		case 'Noviembre':
			mensaje = "Ya pasamos el frío, ahora hace calor";
			break;
		case 'Diciembre':
			mensaje = "Ya pasamos el frío, ahora hace calor";
	}

	alert(mensaje);



	 alert(mensaje);

	// Una forma mejor:
	case "Abril":
	case "Mayo":
	case "Junio":
		mensaje = "Falta para el invierno";
		break;
	case "Julio":
	case "Agosto":
		mensaje = "Abrigate que hace frío";
		break; 
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	case "Enero":
	case "Febrero":
	case "Marzo":
		mensaje = "Ya pasamos el frío, hace calor";
		break; 


	Forma incluso mejor:
	case "Abril":
	case "Mayo":
	case "Junio":
		mensaje = "Falta para el invierno";
		break;
	case "Julio":
	case "Agosto":
		mensaje = "Abrigate que hace frío";
		break; 
	default:
		mensaje = "Ya pasamos el frío, hace calor"; 

*/

function mostrar()
{
	case "Abril":
	case "Mayo":
	case "Junio":
		mensaje = "Falta para el invierno";
		break;
	case "Julio":
	case "Agosto":
		mensaje = "Abrigate que hace frío";
		break; 
	default:
		mensaje = "Ya pasamos el frío, hace calor"; 
}