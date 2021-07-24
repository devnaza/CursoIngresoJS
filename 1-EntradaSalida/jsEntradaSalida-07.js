/*
Autor: Nazareno Santa Cruz
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUnoSuma;
	var numeroDosSuma;
	var suma;

	numeroUnoSuma = document.getElementById('txtIdNumeroUno').value;
	numeroUnoSuma = parseInt(numeroUnoSuma);

	numeroDosSuma = document.getElementById('txtIdNumeroDos').value;
	numeroDosSuma = parseInt(numeroDosSuma);

	suma = numeroUnoSuma + numeroDosSuma;

	alert('La suma es igual a ' + suma + '.');
}

function restar()
{
	var numeroUnoResta;
	var numeroDosResta;
	var resta;

	numeroUnoResta = document.getElementById('txtIdNumeroUno').value;
	numeroUnoResta = parseInt(numeroUnoResta);

	numeroDosResta = document.getElementById('txtIdNumeroDos').value;
	numeroDosResta = parseInt(numeroDosResta);

	resta = numeroUnoResta - numeroDosResta;

	alert('La resta es igual a ' + resta + '.');	
}

function multiplicar()
{ 
	var numeroUnoMultiplicacion;
	var numeroDosMulitiplicacion;
	var multiplicacion;

	numeroUnoMultiplicacion = document.getElementById('txtIdNumeroUno').value;
	numeroUnoMultiplicacion = parseInt(numeroUnoMultiplicacion);

	numeroDosMulitiplicacion = document.getElementById('txtIdNumeroDos').value;
	numeroDosMulitiplicacion = parseInt(numeroDosMulitiplicacion);

	multiplicacion = numeroUnoMultiplicacion * numeroDosMulitiplicacion;

	alert('La multiplicación es igual a ' + multiplicacion + '.');
}

function dividir()
{
	var numeroUnoDivision;
	var numeroDosDivision;
	var division;

	numeroUnoDivision = document.getElementById('txtIdNumeroUno').value;
	numeroUnoDivision = parseInt(numeroUnoDivision);

	numeroDosDivision = document.getElementById('txtIdNumeroDos').value;
	numeroDosDivision = parseInt(numeroDosDivision);

	division = numeroUnoDivision / numeroDosDivision;

	alert('La división es igual a ' + division + '.');
}

