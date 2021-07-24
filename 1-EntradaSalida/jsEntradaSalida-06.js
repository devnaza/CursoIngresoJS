/*
Autor: Nazareno Santa Cruz
Debemos lograr tomar los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;

	/* Primero tomo el valor del documento
	Una vez que tengo los valores de la caja (nums.), los puedo parsear */ 

	primerNumero = document.getElementById('txtIdNumeroUno').value;
	primerNumero = parseInt(primerNumero);

	
	segundoNumero = parseInt(segundoNumero);


	suma = primerNumero + segundoNumero;

	mensaje = "La suma es " + suma + ".";

	alert(mensaje);

	// El user ahora toca mostrar y se ejecuta el código
}
