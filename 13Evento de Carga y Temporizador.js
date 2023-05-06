/* Eventos de Carga y de Temporizador*/

window.addEventListener("load", function(){this.alert("YA CARGO")});


/* setInterval
setTimeout
*/

var tiempo = setInterval(
     function(){document.write("Texto de Ejemplo <br>")},
     2000
      ); 

      setTimeout(
        function(){document.write("es otro texto")},
        2000
      )