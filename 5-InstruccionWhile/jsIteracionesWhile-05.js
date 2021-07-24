/*
Autor: Nazareno Santa Cruz
Al presionar el botón pedir un sexo
'f' para femenino, 
'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != 'm' && sexoIngresado != 'f') // Si pongo un OR siempre se cumple alguna de las dos
	{
		sexoIngresado = prompt("ingrese f ó m .");
	}

	document.getElementById('txtIdSexo').value = sexoIngresado;

}//FIN DE LA FUNCIÓN