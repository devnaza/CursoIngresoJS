/*4.    
Autor: Nazareno Santa Cruz
Para el departamento de iluminación:

Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.

A.  Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 



 Usar un solo document.getelementbyid, como un solo alert. 3 veces hay que escribir docgetelement

 /* 
function CalcularPrecio () 
{
    
    var cantidadLamparas;
    var marcaLamparas;
    var lamparaDescuento;
    var lamparaConImpuesto;
    var iibb;


    // Entrada
    cantidadLamparas = document.getElementById('txtIdCantidad').value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marcaLamparas = document.getElementById('Marca').value;

    if(cantidadLamparas > 5) // CASO A
    {
        lamparaDescuento = cantidadLamparas * 35 * 0.5;
    }
    else
    {
        if(cantidadLamparas > 4) // CASO B
        {
            if(marcaLamparas == "ArgentinaLuz")
            {
                lamparaDescuento = cantidadLamparas * 35 * 0.6;
            }
            else
            {
                lamparaDescuento = cantidadLamparas * 35 * 0.7;   
            }
        }
        else
        {
            if(cantidadLamparas > 3) // CASO C
            {
                if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
                {
                    lamparaDescuento = cantidadLamparas * 35 * 0.75;
                }
                else
                {
                    lamparaDescuento = cantidadLamparas * 35 * 0.8;
                }
            }
            else
            {
                if(cantidadLamparas > 2) // CASO D
                {
                    if(marcaLamparas == "ArgentinaLuz")
                    {
                        lamparaDescuento = cantidadLamparas * 35 * 0.85;
                    }
                    else
                    {
                        if(marcaLamparas == "FelipeLamparas")
                        {
                            lamparaDescuento = cantidadLamparas * 35 * 0.9; // estos calculos se pueden hacer afuera
                        }
                        else
                        {
                        descuento = cantidadLamparas * 35 * 0.95;
                        }
                    }   
                }
            }
        }
    }
    lamparaDescuento = cantidadLamparas * 35 * descuento;


    if(lamparaDescuento > 120) // CASO E
    {
        lamparaConImpuesto = lamparaDescuento * 1.1;
        iibb = lamparaConImpuesto - lamparaDescuento;
        mensaje = "El precio final, con descuento e impuesto es de: " + lamparaConImpuesto + " y usted pagó " + iibb + " de iibb.";
    }
    else
    {
        mensaje = "El precio final, con descuento, es de: " + lamparaDescuento + ".";
    }
    
     // Hice solo un mensaje xq al principio habían dicho que había que hacerlo así.
     // Pero se puede poner una parte en el alert también.

    document.getElementById('txtIdprecioDescuento').value = mensaje;
} /*


/*4.    
Autor: Nazareno Santa Cruz
Para el departamento de iluminación:

Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.

A.  Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%. (default)
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 



 Usar un solo document.getelementbyid, como un solo alert. 3 veces hay que escribir docgetelement

 */

 /* 
function CalcularPrecio () 
{
    
    var cantidadLamparas;
    var marcaLamparas;
    var lamparaDescuento;
    var lamparaConImpuesto;
    var iibb;
    var descuento;


    // Entrada
    cantidadLamparas = document.getElementById('txtIdCantidad').value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marcaLamparas = document.getElementById('Marca').value;

    if(cantidadLamparas > 5) // CASO A
    {
        descuento = 0.5;
    }
    else
    {
        if(cantidadLamparas > 4) // CASO B
        {
            if(marcaLamparas == "ArgentinaLuz")
            {
                descuento = 0.6;
            }
            else
            {
                descuento = 0.7;   
            }
        }
        else
        {
            if(cantidadLamparas > 3) // CASO C
            {
                if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
                {
                    descuento = 0.75;
                }
                else
                {
                    descuento = 0.8;
                }
            }
            else
            {
                if(cantidadLamparas > 2) // CASO D
                {
                    if(marcaLamparas == "ArgentinaLuz")
                    {
                        descuento = 0.85;
                    }
                    else
                    {
                        if(marcaLamparas == "FelipeLamparas")
                        {
                            descuento = 0.9;
                        }
                        else
                        {
                            descuento = 0.95;
                        }
                    }   
                }
            }
        }
    }

    lamparaDescuento = cantidadLamparas * 35 * descuento; // Esto es lo que modifiqué 

    if(lamparaDescuento > 120) // CASO E
    {
        lamparaConImpuesto = lamparaDescuento * 1.1;
        iibb = lamparaConImpuesto - lamparaDescuento;
        mensaje = "El precio final, con descuento e impuesto es de: " + lamparaConImpuesto + " y usted pagó " + iibb + " de iibb.";
    }
    else
    {
        mensaje = "El precio final, con descuento, es de: " + lamparaDescuento + ".";
    }
    
     // Hice solo un mensaje xq al principio habían dicho que había que hacerlo así.
     // Pero se puede poner una parte en el alert también.

    document.getElementById('txtIdprecioDescuento').value = mensaje;


} */

/*4.    
Autor: Nazareno Santa Cruz
Para el departamento de iluminación:

Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.

A.  Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%. (default)
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.


Si compras solo 1 o 2, no tenes descuento

Usar solo switch, if va para el impuesto.
  */

function CalcularPrecio () 
{
    var cantidadLamparas;
    var marcaLamparas;
    var lamparaDescuento;
    var lamparaConImpuesto;
    var iibb;
    var descuento;


    // Entrada
    cantidadLamparas = document.getElementById('txtIdCantidad').value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marcaLamparas = document.getElementById('Marca').value;
    
    // Proceso

    switch(cantidadLamparas)
    {
        case 5:
        {
             switch(marcaLamparas)
            {
                case "ArgentinaLuz":
                    descuento = 0.6;
                    break;
                default:
                    descuento = 0.7;
                    break;
            }   
        }
        break;
        case 4:
        {
            switch(marcaLamparas)
            {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 0.75;
                        break;
                    default:
                        descuento = 0.8;
                        break;
            }
        } 
        break;
        case 3:
        {
            switch(marcaLamparas)
            {
                case "ArgentinaLuz":
                    descuento = 0.85;
                    break;
                case "FelipeLamparas":
                    descuento = 0.9;
                    break;
                default:
                    descuento = 0.95;
                    break;
            }
        }
        break;
        case 2:
        case 1:
            descuento = 1;
            break;
        default: 
            descuento = 0.5;
            break;
    }

    lamparaDescuento = cantidadLamparas * 35 * descuento; // Esto es lo que modifiqué 

    if(lamparaDescuento > 120) // CASO E
    {
        lamparaConImpuesto = lamparaDescuento * 1.1;
        iibb = lamparaConImpuesto - lamparaDescuento;
        mensaje = "El precio final, con descuento e impuesto es de: " + lamparaConImpuesto + " y usted pagó " + iibb + " de iibb.";
    }
    else
    {
        mensaje = "El precio final, con descuento, es de: " + lamparaDescuento + ".";
    }
    
     // Hice solo un mensaje xq al principio habían dicho que había que hacerlo así.
     // Pero se puede poner una parte en el alert también.

    document.getElementById('txtIdprecioDescuento').value = mensaje;



}
