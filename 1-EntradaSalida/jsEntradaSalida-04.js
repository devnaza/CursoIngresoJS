/* 
Autor: Nazareno Santa Cruz
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar' /// había un com 
*/
function mostrar()
{
	var datoRequerido;

	var mensaje;

	datoRequerido = prompt("Mencioná un dato aleatorio", "Escribilo acá");

	mensaje = "Su nombre es: " + datoRequerido;

	document.getElementById('txtIdNombre').value = mensaje;

	// document.getElementById('txtIdNombre').value = "Hola";
}
