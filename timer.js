const dia = document.getElementById('dia')
const hora =document.getElementById('hora')
const min = document.getElementById('min')
const sec = document.getElementById('sec')

const lancamento = "01 dec 2023"

function timer(){
    const dataInic = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataInic - hoje)/1000;

    const finDia = Math.floor(segTotal / 60 / 60 / 24);
    const finHora = Math.floor(segTotal / 60 / 60) % 24;
    const finMin = Math.floor(segTotal / 60) % 60;
    const finSec = Math.floor(segTotal) % 60;

    dia.innerHTML = finDia
    hora.innerHTML = formatoTempo(finHora)
    min.innerHTML = formatoTempo(finMin)
    sec.innerHTML = formatoTempo(finSec)
}

function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

timer();
setInterval(timer, 1000)