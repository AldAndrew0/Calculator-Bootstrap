let eleMyInput      = document.getElementById('myInput');
let elemBtnC        = document.getElementById('btnC');
let elemBtnEqual    = document.getElementById('btnEqual');
let elemBtnPoint    = document.getElementById('btnPoint');
let calcButtons     = document.querySelectorAll(".calcNum");
let opButtons       = document.querySelectorAll('.calcOp');

calcButtons.forEach(pulsante => { pulsante.addEventListener(('click'), () => {eleMyInput.value += pulsante.value })});

elemBtnC.addEventListener('click', () => {eleMyInput.value = "0"; });
elemBtnEqual.addEventListener('click', calcola());

function calcola() {
    eleMyInput.value = eval(eleMyInput.value);
}