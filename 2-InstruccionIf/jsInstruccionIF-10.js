/* 
Autor: Nazareno Santa Cruz
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 

*/


function mostrar()
{
	
	var nota;
	var mensaje;


	nota = Math.floor(Math.random() * 10) + 1;  

	if(nota > 8)
	{
		mensaje = "Excelente.";
	}
	else
	{
		if(nota > 3)
		{
			mensaje = "Aprobó.";
		}
		else
		{
			mensaje = "Vamos, la próxima se puede.";
		}
	}

	alert("La nota es: " + nota + ". " + mensaje);

}//FIN DE LA FUNCIÓN