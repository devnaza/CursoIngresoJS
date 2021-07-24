/*
Autor: Nazareno Santa Cruz
Al ingresar una edad debemos informar solo si la persona es mayor de edad.

*/

function mostrar()
{

	var edad;
	var mensaje;


	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);


	if(edad > 17)
	{
		mensaje = "La persona es mayor de edad."
		alert(mensaje);
	}
	

}//FIN DE LA FUNCIÓN