/* BUCLES O INTERACCIONES 

while
do-while
for
break-continue

***/

var uno = 10;
var dos = 20;
var tres = 40;





while (uno < dos) {
    document.write(uno + "<br>");
    uno++;
}

while (uno <= dos) {
    document.write(uno + "<br>" )
    uno++
}
 
while (uno >= 20){
    document.write(uno + "<br>")
    uno--;
}

/* do while */

do {
    document.write(uno + "<br>");
    uno--;
}while(uno >= 20)

do {
    document.write(uno + "<br>");
    uno++;
}while(uno <= 20)
 

/* for */

for(var i = 1; i <= 10; i++){
    document.write(i + "<br>")
}

/* break - continue */

let numero = 0;

while (numero < 100) {
    numero++;
    document.write(numero);
    if(numero == 10) {
        break;
    }
}

for(var i = 1; i <= 20; i++){
    if(i==5){break;}
    document.write(i + c);
};
 
/* In =  nos devuelve el Indice de los elementos
   OF =  nos muestra los elementos  */

let animales = ["gato", "perro", "raton"];

for (animal in animales) {
    document.write(animal + "<br>");
}
for (animal of animales) { 
    document.write(anima + "<br>");
}


array1 = ["maria","jose","roberto"];
array2 = ["pedro","marcelo",array1,"paola"];

for (let array in array2) {
    if ( array == 2) {
        for(let array of array1) {
            document.write(array)
        }
    }else {
        document.write(array2[array])
    }
}