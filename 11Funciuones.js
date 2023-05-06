/* funtion
    sin parametros
    con parametros
    preinicializacion de parametros
    evalucaion de parametros
    rest
    spread
    funciones anonimas
    callback
    Arrow
    */

/* sin parametros y con parametros */
function uno(){
    var saludo = document.write("hola a todos");
    return saludo;
};

uno();

function dos(a, b, c,){
    var a;
    var b;
    var c;
    var datos = document.write(
        "<br>mi nombre es: "+ a + 
        "<br> Mi Apellido es: "+ b + 
        "<br>mi edad es:s "+ c);

    return datos;
};

dos( "David ", "Medrano", 32);

function tres(Nombre= ""){
     var responder = Nombre;
     return document.write(responder);
};

tres("Alejandro Vanegas");

/*evaluacion que nos interesa si el nombre y el apellido existen */


function cuatro(nombre, apellido) {
      if(nombre != null && apellido != null){
        respuesta = document.write(nombre+" ",apellido)
      }else{
        respuesta = document.write("no puso sus datos completos")
      };
      return respuesta;
} 

cuatro();
cuatro("Mercedes", "bueno");


/* REST */
function cinco(...meses){
   
    return document.write(meses);
};

cinco("enero", "febrero", "marzo")


function seis (...meses) {
    for(let uno of meses){
        document.write(uno + "<br>");  
    }
};

seis("enero", "febrero", "marzo", "abril");

/* SPREAD nos permitre enviar varios datos a la funcion mas que recibir , enviar*/

function sep (nombre, precio, peso) {
    return "Nombre: "+nombre + "<br>Precio: "+precio + "<br>Peso: "+peso;
}

var primero = ['soldado', 25, 2 ];

document.write(sep(...primero));

/*funviones anonimas "sin nombre" */

var oc = function() {
    respuesta = "Hola a todos";
    return respuesta;
};

document.write( oc());

/*callBacks */

var a = function(nombre, uno) {var e = nombre; uno(e);};

var b = function(i){document.write(i);};

a("Lucho", b);

/*Arrow*/

/*
function uno(nombre) {
    return nombre;        "es lo mismo"
}
*/

var uno = nombre => nombre;
var dos = (nombre, apellido)=> nombre + apellido; 
document.write(uno("Javer Camilo"));
document.write("david"+ " ", "javier"+" ","llucho")


function uno(nombre) {
    return nombre;        
}
document.write("andrea")


function saludar() {

    respuesta =prompt("hola David, Comote fue?");
    if (respuesta == "bien") {
        alert("me alegro")
    } else {
        alert("una pena")
    }
};

saludar()
saludar()


function saludar(nombre) {
    var frase = `!hola ${nombre} ! como estas?`;
    document.write(frase);
}

saludar("David");