/* eveontos de raton 

<button onclick="saludar()">Aceptar</button>; <br>

<button onmouseover="encima()">Boton</button>

<button onmouseout="fuera()">apretar</button>

<br>
<button class="tres">saludar</button>


<script type="text/javascript" src="animacion.js"></script>

*/

function saludar() {
    alert("hola a todos")
};

function encima() {
    alert("arriba encima")
};

function fuera() {
    alert("el maouse esta afuera")
};



var eventoUno = document.querySelector(".tres");

eventoUno.addEventListener("mouseover", function(){alert("hola")} );

/* EVENTO TECLADO

    keyDown
    keyPress
    keyUP
*/

window.addEventListener("keydown", function(event){alert("accion")});

window.addEventListener("keypress ", function(){alert("PRession")});

window.addEventListener("keyup", function(){alert("accion")});


window.addEventListener("keypress", function(event){
    alert(String.fromCharCode(event.keyCode))
}
)