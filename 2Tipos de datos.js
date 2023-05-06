


/*
numericos
cadena (string)
booleanos ( true, false)
fechas
simbolos
objetos
manual :
Javascript guias
*/

var Primero = 1234567;
document.write( typeof Primero);


var Segundo = " esto es una cadena ";
document.write( Segundo);

var Tercero = true;


document.write(typeof Tercero);

var Cuarto = Date();
document.write(Cuarto);

var Quinto = new Date();
document.write(typeof Quinto);

var Sexto = new Date();
document.write(Sexto.getDate());

var Sep = new Date() ;
document.write(Sep.getHours()+":", Sep.getMinutes());