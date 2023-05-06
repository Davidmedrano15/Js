/* Trabajar con string

                 Busquedas

    length
    indexOf, search
    lastIndexOf
    match
    substr
    substring
    chatArt
    starswith
    endswith
    includes


    repeat
    replace
    slice
    split
    tolowercase
    touppercase
    concat
    Variable inculida

*/

var saludo = "hola a todos ";

document.write(saludo);



var a = "hola a";
var b = "todos"

document.write(a + " " + b);

/*length contar cuantos elementos tenemos */

var a = "Hola a todos";
document.write(a.length);

/* la posision de cada palabra donde se encuentra */
  
var a = "Hola a todos mis amigos de Youtube";

document.write(a.indexOf("amigos"));


var a = "Hola a todos mis amigos de Youtube";

document.write(a.search("mis"));

var a = " Hola a todos mis amigos de youtube, todosestamos muy alegres"
document.write(a.lastIndexOf("todos"));

/* match me lo almacena en un array cuantas palabras exisiten enun texto  */

var a = " Hola a todos mis amigos de youtube, todosestamos muy alegres, todos";
var b = a.match(a);


document.write(a.match(/todos/gi));

/* substr   indica el indice en el cual se encuetna la palabra */

var a = " Hola a todos mis amigos de youtube, todosestamos muy alegres"
document.write(a.substr(5, 12));

/* substring cuenta el indice des de el principio */

var a = " Hola a todos mis amigos de youtube, todosestamos muy alegres"
document.write(a.substring(5, 13));

/* charArt nos devueven una letra */

var a = " Hola a todos mis amigos de youtube, todosestamos muy alegres"
document.write(a.charAt(10));

/* starswith  Empieza con */

var a = "Hola a todos mis amigos de youtube, todosestamos muy alegres"
document.write(a.startsWith("Hola"));

/*endswith termina con .. ****/

var a = "Hola a todos mis amigos de youtube, todosestamos muy alegres"
document.write(a.endsWith("alegres"));

/* includes  si existe alguna coinsidencia */

var a = " Hola a todos mis amigos de youtube, todosestamos muy alegres"
document.write(a.includes("amigo"));

/* repeat repetir un texto */

var a = " Hola a todos <br>"
document.write(a.repeat(10));

/* replace buscar una palabra y reemplazar con otra */

var a = " Hola a todos <br>"
document.write(a.replace("todos", "Mis amigos"));

var a = " Hola a todos <br>"
document.write(a.replace("todos", ""));


/* slice   en que ppcision nos permit la lectura del texto */


var a = " Hola a todos <br>"
document.write(a.slice(5));

/* splt es muy util para convertir un array */


var a = " Lunea, Martes, Miercoles, Jueves, Viernes";
document.write(a.split());

var a = " Lunea,Martes,Miercoles,Jueves,Viernes";
console.log(a.split(","));

var a = " Lunea Martes Miercoles Jueves Viernes";
console.log(a.split(" "));

var a = " Lunea-Martes-Miercoles-Jueves-Viernes";
console.log(a.split("-"));


/* trim  nos permite quitar los espacios antes y despes de mi oracion completa */

var a = "    Hola a todos mis amigos    "
document.write(a.trim());


/* tolowercase   conviert todo en mminiscula*/


var a = " HOLA a todos mis amigos"
document.write(a.toLowerCase() );

/* toUppercase  convierte todoen mayuscula */

var a = " Hola a todos mis amigos"
document.write(a.toUpperCase());

/* concat  nos permite concatenar un textoo palabra */


var uno = " hola a todos";
var dos  = " mis amigos";
var tres = " qeu ven mis videos";


document.write(uno.concat(dos, tres, " felices"));

/* Variables incluidas */


var a = "Youtube";

document.write("Hola a mis amigos de ", a + " que me sigen en mi canal");