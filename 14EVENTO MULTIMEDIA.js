/* EVENTO MULTIMEDIA

   PLAY
   ENDED
   SEEKING



<video class="uno" src="../intro.html/video/Andre.mp4" width="100%" controls="controls"></video>

   */


var primero = document.querySelector(".uno");

primero.addEventListener("play", 
function(){alert("pusiste play")
});

primero.addEventListener("ended", 
function(){alert("Finalizo")
});

primero.addEventListener("seeking",
function(){alert(this.currentTime)});