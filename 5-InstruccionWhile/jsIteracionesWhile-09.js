/*
Autor: Nazareno Santa Cruz
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado. */
function mostrar()
{	
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var seguir;

	flag = 0;	 

	do
	{

		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		// Preguntar si está bien así o hacerlo como Germán
		if(flag == 0)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			flag = 1;
		}
		else // flag ≠ 0, cuando ya hay con qué comparar
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else
			{
				if(numeroIngresado < numeroMinimo) // pongo else + if y no else xq si no incluyo el caso donde son iguales y no
				{
					numeroMinimo = numeroIngresado;
				}
			}
		}

		seguir = prompt("Presione 's' para ingresar otro número");

	}while(seguir == 's');

	document.getElementById('txtIdMaximo').value = numeroMaximo;
	document.getElementById('txtIdMinimo').value = numeroMinimo;

}//FIN DE LA FUNCIÓN