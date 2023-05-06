/* los array / arreglos */
/* Array unidimencionañ ********/

var semana = new Array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes");


 var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", 44533];

 document.write(semana);

 
 var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", 44533];

 document.write(semana[0]);

 /* Array muldimecionales */
 

 var uno = 
 [ 
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
 ];

 var dos = 
 [
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
 ];

 var tres =
 [
    
    [10, 20, 30, 40, 50],
    [11, 22, 33, 44, 55],
    [12 ,32 ,26 ,37 ,54],

 ];
 document.write(uno);
document.write(dos);
document.write(tres[0][3]);
document.write(tres[1][2])

/* array asociativos */

let pc1 = {
   nombre: "DavidPC",
   procesador: "Intel Core 3",
   ram: "4GB",
   espacio: "1TB"
};

let nombre = pc1 ["nombre"];
let procesador = pc1 ["procesador"];
let ram = pc1 ["ram"];
let espacio = pc1 ["espacio"];

frase =  `El nombre de mi pc es: <b>${nombre}</b> <br>
         el procesador de mi pc es: <b>${procesador}</b> <br>
         la memoria de mi pc es: <b>${ram}</b> <br>
         el espacio de mi pc es: <b>${espacio}</b> <br>`

         document.write(frase);

