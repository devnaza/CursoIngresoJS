/*
Autor: Nazareno Santa Cruz
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	var mensaje;

	nombre = prompt("Ingrese su nombre", "Escribí sobre esta línea");

	mensaje = "Su nombre es: " + nombre;

	alert(mensaje);
}
