/*
Autor: Nazareno Santa Cruz
 Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad. 

*/

function mostrar()
{
	var edad;
	var mensaje;


	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);


	if(edad > 17)
	{
		mensaje = "La persona es MAYOR de edad."
	}
	else
	{
		mensaje = "La persona es MENOR de edad."
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN