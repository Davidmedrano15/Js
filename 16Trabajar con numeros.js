/* trabajar con numeros*/

var a = "10.55";

document.write(typeof a);

var b = 10.55;
document.write(typeof b);

/* convertir enun string a numero*/

var a = "10.66";
var b = Number(a);

document.write(typeof b );

/* convertir a un entero sin redondeo ***********/

var a = 10.55;
var b = parseInt(a);

document.write(b);

/* cuando algo no es un numero o cuando es un numero***/

var a = "hola";
var b = isNaN(a);
document.write(b);

var a = 15;
var b = Number.isInteger(a);

document.write(b);


/* cantidad de decimales que quiero trabajar 
hacer un redondeeo cuando tenemos muchos numeros */

var a = 15.4653345;
var b = a.toFixed(1)

document.write(b);

/* cambiar el tipo de variable */

var a = 15.463345;
var b = a.toString();
document.write(typeof b);

/* podemso saber que se vambio de variable porque el numero no lo considera como un numero sino como unstring */

var a = 15;
var b = a.toString();
var c = 5;
document.write(b + c);
