/*2.	
Autor: Nazareno Santa Cruz
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y 
el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre (base * altura * 3).

B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular 
y se debe alambra con tres hilos de alambre.


C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoAltura;
	var anchoBase;
	var cantidadComprar;

	largoAltura = document.getElementById('txtIdLargo').value;
	largoAltura = parseInt (largoAltura);

	anchoBase = document.getElementById('txtIdLargo').value;
	anchoBase = parseInt (anchoBase);

	cantidadComprar = largoAltura * anchoBase * 3;

	alert('La cantidad de alambre a comprar es de: ' + cantidadComprar + '.');

}
function Circulo () 
{
	// Fórmula de perímetro: 2 * π * r
	
	var perimetroTriple;
	var radio;

	radio = document.getElementById('txtIdRadio').value;
	radio = parseInt (radio);	

	perimetroTriple = 2 * radio * 3.1415 * 3

	alert('La cantidad de alambre a comprar es de: ' + perimetroTriple + '.');
}
function Materiales () 
{

/* C.	Para hacer un contrapiso de 1m x 1m (=1, creo) se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen. */

	var cemento;
	var cal;
	var largoMaterial;
	var anchoMaterial;
	var largoAnchoMultiplicacion;


	largoMaterial = document.getElementById('txtIdLargo').value;
	largoMaterial = parseInt (largoMaterial);

	anchoMaterial = document.getElementById('txtIdAncho').value;
	anchoMaterial = parseInt (anchoMaterial);

	largoAnchoMultiplicacion = largoMaterial * anchoMaterial;

	cemento = largoAnchoMultiplicacion * 2;
	cal = largoAnchoMultiplicacion * 3;


	alert('Se necesitan ' + cemento + ' bolsas de cemento y ' + cal + ' bolsas de cal.');
}