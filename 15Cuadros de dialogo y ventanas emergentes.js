/* cuadro de dialogo y ventanas emergentes

    alert
    confirm
    prompt
*/
var saludo = "hola a todos ";
alert(saludo) ;


alert("Hola a todos \n como estan ")



/* confirmacion o cancelacion en una accion */


a = confirm("necesita ayuda?")
 if(a){
    document.write("dijo que si");
 } else {
    document.write("dijo que no");
 };


  b = confirm("quiere que te ayude?");

  if(b){window.location="david.html"};

  /* prompt es una especie de formulario
*/

var a = prompt("Nombre Completo");
document.write(a);  
document.write("tu nombre es: "+ a);

if(a) {
    document.write("su nombre es: "+ a)
} else if (a == null) {
    document.write("ustd puso canselar");

}else {
    document.write("ustd no puso nada")
}


