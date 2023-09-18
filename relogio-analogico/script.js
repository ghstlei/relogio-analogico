const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

var data = new Date();
console.log(data);

let hr = data.getHours();
let min = data.getMinutes();
let seg = data.getSeconds();
console.log("Hora " + hr + ", Minuto: " + min + ", Segundo: " + seg);

let positionHour = hr * (360/12) + (min * (360 / 60) / 12);
let positionMin = (min * 360 / 60) + (seg *(360/60)/60);
let positionSec = seg * 360 / 60;

function executarRelogio(){

    positionHour = positionHour + (3/360);
    positionMin = positionMin + (6/60);
    positionSec = positionSec + 6;

    PONTEIROHORA.style.transform = "rotate(" + positionHour + "deg)";
    PONTEIROMINUTO.style.transform = "rotate(" + positionMin + "deg)";
    PONTEIROSEGUNDO.style.transform = "rotate(" + positionSec + "deg)";
    
}

var intervalo = setInterval(executarRelogio, 1000)