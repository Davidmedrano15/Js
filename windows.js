window.name = "este es un nombre de la ventana";

var dato = "el nombre es: " + window.name + "<br>";
var ancho = "el ancho es: " + window.outerwidth + "<br>";
var alto = "el alto es: " + window.outerHeight + "<br>";
var anchoInterno = "El ancho interno es: " + window.innerWidth + "<br>";
var altoInterno = " El alto interno es: " + window.innerHeight + "<br>";
var scrollHorizontal = "El scroll Horizontal es: " + window.pageXOffset + "<br>";
var scrollVertical = "El scroll vertical es: " + window.pegaYOFFset + "<br>";
var distanciaIzquierda = "ladistacina desde la izquierda es: " + window.screenX + "<br>";
var distanciaTop = "la distancia desde la derecha es: " + window. screenY + "<br>";



document.write(dato, ancho, alto, anchoInterno, altoInterno, scrollHorizontal, scrollVertical, distanciaIzquierda, distanciaTop);


/* window.open = abre una ventana
        .cerrar = cierrra la ventana
        .resizeBy = redimencionar el ancho y el alto
        .resizeto = tamaño forzado
        .moveBy = cuantos pixeles a la izquierda y en la parte superior
        .moveto = nos lleva a pixeles de la pantalla
        .focus = hace que la ventana sea la primera en visualizarce
        .print = nos permite imprimir en papel


    */



window.alert("Hola a todos");

function visita () {
  ventana = window.open("david.html", "_blank", "width=500, height=300");

};

function cerrar () {
    ventana.window.close();
};

function dimencion () {
    ventana.window.resizeby(510, 510); 
};

function move () {
    ventana.moveBy(500, 500);
    
};
 
function mmoveto() {
    ventana.moveto
}

/* iflame

documento = para visualidar
   document.name = 
           .parent =
           .self =
           */



alert(window.length);
document.write(window.length)

/* History
*/

var historial = window.history;

console.log(historial);

/* location */

var localizacion = window.location;
document.write(localizacion);

var navegador = window.navigator.vendor;
document.write(navegador);

var navegador = window.navigator;
console.log(navegador);


/* screen */

var pantalla = window.screen;
document.write(pantalla);
console.log(pantalla);

/* DOM

    querySelector
    getElement
*/


 var a = document.querySelector(".primero");

 a.style.color= "red";

 var a = document.querySelector("#uno");

 a.style.color= "red";

 var a = document.querySelector("h1");

 a.style.color= "red";
 


 var a = document.querySelectorAll("p")[1];

 a.style.color = "red";





 var a = document.getElementById("uno");
 a.style.color= "red";

 var a = document.getElementsByClassName("primero")[0];
 a.style.color= "red";










