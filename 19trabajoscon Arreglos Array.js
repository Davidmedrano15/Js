/* Tranajar con Array Arreglos 

        para llamarlos y hacer unas modificaciones

    Length
    push
    pop
    join
    split
    array.from
    sort
    reveresa
    delete

    --------

    for in
    forEach
    find
    findIndex
    filter
    some

*/

var uno = [10, 20, 30, 40, 50];

document.write( uno.length);

var uno = [10, 20, 30, 40, 50];

console.log( uno);

/* push agregar un elemento en un array */


var uno = [10, 20, 30, 40, 50];
uno.push(60);
uno.push(70);
uno.push(80);
uno.push(90);
uno.push(100);

document.write( uno);

/* pop   sacar un ultimo elemento y que nos muestre */

var uno = [10, 20, 30, 40, 50, "lunes"];

document.write( uno.pop());


/* join   nos permite convertir de un arreglo a un string normal */


var uno = [10, 20, 30, 40, 50, "lunes"];

document.write( uno.join());

var uno = [10, 20, 30, 40, 50, "lunes"];
uno.join()

document.write( typeof uno);

var uno = [10, 20, 30, 40, 50, "lunes"];

console.log(uno.join());


/* split  convierte un string a un array o arrelgo */

var uno = "lunes,Martes,Miercoles";
var dos = uno.split(",");

console.log( dos);

/* array.from en HTML para convertirlo en un array 

    <div class="dias">
        <p>Lunes, Martes, Miercoles, Jueves, viernes, Sabado, Domingo
        </p>
    </div>

******/

var semana = Array.from(document.querySelectorAll(".dias p"));

var creacion = semana.map (dia => dia.textcontent);

console.log (creacion);

/* sort  esto nos va a permitir ordenar un array en forma alfabetica */

var semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

document.write(semana.sort());


/* reverse  es que todos loselemenos esten ordenados alrreves */

var semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

document.write(semana.reverse());


/* for in   es para buscar dentro de un array varios elementos */

var uno = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

for(let i in uno) {
    document.write(uno[i] + "<br>");
};

/* forEach   bucar dentro de un array algunos elementos */


var uno = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

uno.forEach(
    (dos, i) => document.write(i +"-" + dos + "<br>")
 );

 /* find    nos permite buscar una parabra dentro de la misma palabra */


var uno = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

var buscar = uno.find(dos => dos=="martes" );

document.write(buscar);

/* findIndex  busca el indice de un array */

var uno = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

var buscar = uno.findIndex(dos => dos=="martes" );

document.write(buscar);

/* filter  es igual al find pero la diferencia  es qu nos devuelven todos los resultados */

var uno = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo", "martes"];

var buscar = uno.filter(dos => dos=="martes" );

document.write(buscar);

/* some  esto evalua un prametro dentro de un rango y nos va a devolver un boleano */

var uno = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var buscar = uno.some(dos => dos < 50);

document.write(buscar);