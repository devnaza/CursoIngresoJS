/*
Autor: Nazareno Santa Cruz
Al ingresar una edad debemos informar si la persona es adolescente, 
edad entre 13 y 17 años (inclusive).  

*/

function mostrar()
{
	var edad;
	var mensaje;


	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);


	if(edad > 12 && edad < 18)
	{
		mensaje = "La persona es adolescente."
		alert(mensaje);
	}

}//FIN DE LA FUNCIÓN