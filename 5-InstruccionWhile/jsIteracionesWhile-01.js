/* Autor: Nazareno Santa Cruz
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.  */

function mostrar()
{ 
	var contador;

	contador = 0; // 1)

	while(contador < 10) // 2)
	{
		contador = contador + 1;
		console.log(contador);
		// 3)
	} 

/*
	var edad;
	edad = 22; // 1) Inicialización de variable (puede ingresarla el usuario o iterarse)



	while(edad < 18) // 2)
	{
		// 3) 
		edad = prompt("Ingrese la edad"); // Si no está, no se cambia la variable. While a infinito xq edad = 15 -> "Redundancia cíclica"
		edad = parseInt(edad);
		console.log('No es mayor a 18'); 
	}
*/

}//FIN DE LA FUNCIÓN */

