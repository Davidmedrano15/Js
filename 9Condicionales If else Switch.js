/*Condicionales 

    if  = evaluar una condicion y luego darme un resultaedo
    if -else
    if -else if -else
    switch 
*/
/* if */
var uno = 30;
var dos = 30;

if(uno == dos)[
    document.write("Es Igaul")
]



var uno = 30;
var dos = 50;

if(uno == 30)[
    document.write("Es Igaul")
]

/* IF - else */


var uno = 70;
var dos = 50;

if(uno == 38){
    document.write("Es Igaul")
} else {
    document.write("No es Igual")
}

if(uno == 30){
    document.write("Es Igaul")
} else {
    document.write("No es Igual")
}

if(uno == 30 && uno == " "){
    document.write("Es Igaul")
} else {
    document.write("No es Igual")
}

if(uno == 30 && dos == 50){
    document.write("Es Igaul")
} else {
    document.write("No es Igual")
}


if(uno == 30 || uno == " "){
    document.write("Es Igaul")
} else {
    document.write("No es Igual")
}

/* If - else if*/


if(uno == 10){
    document.write("Es Igaul a 10");
} else if(uno == 20){
    document.write("es igaul a 20");
}else {
    document.write("No es Igual a Ninguno")
}



if(uno == 10){
    document.write("Es Igaul a 10");
} else if(uno == 20) {
    document.write("Es Igual a 20");
} else if (uno == 30) {
    document.write("Es Igaul a 30");
} else if(uno == 40){ 
    document.write("Es Isgual a 40");
} else {   
    document.write("No Es Igual A Ninguno")
}

/* switch */

var uno = 5;
var dos;

switch(uno){
    case 0: dos="CERO" ; break;
    case 1: dos="UNO" ; break;
    case 2: dos="DOS" ; break;
    case 3: dos= "TRES"; break;
    case 4: dos="CUATRO" ; break;
    case 5: dos="CINCO" ; break;
    default: dos="Ninguno" ; break;
} 
document.write(dos);

switch(uno){
    case 0: document.write("Es Igual a 0") ; break;
    case 1: document.write("Es Igual a 1") ; break;
    case 2: document.write("Es Igaul a 2") ; break;
    case 3: document.write("Es Icual a 3"); break;
    case 4: document.write("Es Igual a 4"); break;
    case 5: document.write("Es Igual a 5"); break;
    default: dos="Ninguno" ; break;
} 
document.write(dos);

switch(uno){
    case 0: dos=" es el CERO" ; break;
    case 1: dos="es el UNO" ; break;
    case 2: dos="es el DOS" ; break;
    case 3: dos= "es el TRES"; break;
    case 4: dos="es el CUATRO" ; break;
    case 5: dos="es el CINCO" ; break;
    default: dos="es el Ninguno" ; break;
} 
document.write(dos);