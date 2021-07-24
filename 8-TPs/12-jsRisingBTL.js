/*RISING BTL. 
Autor: Nazareno Santa Cruz
Empresa dedicada a la toma de datos para realizar estadísticas 
y censos nos pide realizar una carga de datos validada e 
ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) 
y luego asignarla a cuadros de textos. 


12.   Los datos requeridos son los siguientes:

A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
    var sueldoBruto;
    var numeroLegajo;
    var nacionalidad;

    // A. Edad, entre 18 y 90 años inclusive.
    do
    {
        edadIngresada = prompt("Ingrese su edad.");
        edadIngresada = parseInt(edadIngresada);
    } while (edadIngresada < 18 || edadIngresada > 90); // En la documentación dejan espacio.


    // B. Sexo, “M” para masculino y “F” para femenino.
    do
    {
        sexoIngresado = prompt("Ingrese su sexo. \n \"M\": para masculino \n \"F\": para femenino");
    } while (sexoIngresado != "M" && sexoIngresado != "F");


    // C. Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos.
    do
    {
        estadoCivilIngresado = prompt("Ingrese su estado civil. \n \"1\": para soltero" + 
                                "\n \"2\" para casado" +
                                "\n \"3\" para divorciado" +
                                "\n \"4\" para viudo");
        estadoCivilIngresado = parseInt(estadoCivilIngresado);
    } while (estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 3 && estadoCivilIngresado != 4);

    switch(estadoCivilIngresado)
    {
        case 1:
            estadoCivilIngresado = "1 - soltero";
            break;
        case 2:
            estadoCivilIngresado = "2 - casado";
            break;
        case 3:
            estadoCivilIngresado = "3 - divorciado";
            break;
        case 4:
            estadoCivilIngresado = "4 - viudo"
            break;
    }

    // D.  Sueldo bruto, no menor a 8000.
    do
    {
        sueldoBruto = prompt("Ingrese su sueldo bruto. No debe ser menor a 8000.");
        sueldoBruto = parseInt(sueldoBruto);
    } while (sueldoBruto < 8000);

    // E.   Número de legajo, numérico de 4 cifras, sin ceros a la izquierda. 
    // (con q ya ponga mayor a 999 arranca, creo. probar)

    do
    {
        numeroLegajo = prompt("Ingrese su número de legajo. Mayor a 999.");
        numeroLegajo = parseInt(numeroLegajo);
    } while (numeroLegajo < 1000);


    // F.   Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
    do
    {
        nacionalidad = prompt("Ingrese su nacionalidad \n \"A\": para argentinos" + 
                                "\n \"E\" para extranjeros" +
                                "\n \"N\" para nacionalizados");
    } while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N");

    switch(nacionalidad)
    {
        case "A":
            nacionalidad = "A - argentino";
            break;
        case "E":
            nacionalidad = "E - extranjero ";
            break;
        case "C":
            nacionalidad = "N - nacionalizado";
            break;
    }

    document.getElementById('txtIdEdad').value = edadIngresada;
    document.getElementById('txtIdSexo').value = sexoIngresado;
    document.getElementById('txtIdEstadoCivil').value = estadoCivilIngresado;
    document.getElementById('txtIdSueldo').value = sueldoBruto;
    document.getElementById('txtIdLegajo').value = numeroLegajo;
    document.getElementById('txtIdNacionalidad').value = nacionalidad;

}
